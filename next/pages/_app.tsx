import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink
} from '@apollo/client';

const createApolloClient = () =>{
  const link = new HttpLink({
    uri: '/api/graphql'
  });

  return new ApolloClient(
    {
      link,
      cache: new InMemoryCache()
    }
  );
};




export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={createApolloClient()}>
  <Component {...pageProps} />
    </ApolloProvider>
  );
}
