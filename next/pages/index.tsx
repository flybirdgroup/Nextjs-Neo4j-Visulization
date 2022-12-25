import dynamic from 'next/dynamic';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { useState } from 'react';

const NoSSRForceGraph = dynamic(() => import('../lib/NoSSRForceGraph'), {
  ssr: false
});

const mostRecentQuery = gql`
  {
    articles(options: { limit: 30, sort: { created: DESC } }) {
      __typename
      id
      url
      title
      created
      tags {
        __typename
        name
      }
      user {
        username
        avatar
        __typename
      }
    }
  }
`;

const moreArticlesQuery = gql`
  query articlesByTag($tag: String) {
    articles(
      where: { tags: { name: $tag } }
      options: { limit: 10, sort: { created: DESC } }
    ) {
      __typename
      id
      url
      title
      created
      tags {
        __typename
        name
      }
      user {
        username
        avatar
        __typename
      }
    }
  }
`;

const formatData = (data) => {
  // this could be generalized but let's leave that for another time

  const nodes = [];
  const links = [];

  if (!data.articles) {
    return;
  }

  data.articles.forEach((a) => {
    nodes.push({
      id: a.id,
      url: a.url,
      __typename: a.__typename,
      title: a.title
    });

    links.push({
      source: a.user.username,
      target: a.id
    });

    a.tags.forEach((t) => {
      nodes.push({
        id: t.name,
        __typename: t.__typename
      });
      links.push({
        source: a.id,
        target: t.name
      });
    });

    nodes.push({
      id: a.user.username,
      avatar: a.user.avatar,
      __typename: a.user.__typename
    });
  });

  return {
    // nodes may be duplicated so use lodash's uniqBy to filter out duplicates
    nodes: _.uniqBy(nodes, 'id'),
    links
  };
};

export default function Home() {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const { data } = useQuery(mostRecentQuery, {
    onCompleted: (data) => setGraphData(formatData(data))
  });
  const [loadMoreArticles, { called, loading, data: newData }] = useLazyQuery(
    moreArticlesQuery,
    {
      onCompleted: (data) => {
        const newSubgraph = formatData(data);
        setGraphData({
          nodes: _.uniqBy([...graphData.nodes, ...newSubgraph.nodes], 'id'),
          links: [...graphData.links, ...newSubgraph.links]
        });
      }
    }
  );
  console.log(graphData);
  return (
    
    <NoSSRForceGraph
      graphData={graphData}
      nodeLabel={(node) => {
        return node.id;
      }}
      nodeAutoColorBy={'__typename'}
      nodeRelSize={8}
      onNodeClick={(node, event) => {
        console.log('You clicked me!');
        console.log(node);

        if (node.__typename === 'Tag') {
          console.log('Lode more articles');
          loadMoreArticles({ variables: { tag: node.id } });
        } else if (node.__typename == 'Article') {
          window.open(node.url, '_blank');
        }
      }}
    />
  );
}