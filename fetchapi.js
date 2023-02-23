// MyGraphComponent.js

function MyGraphComponent({ nodes, edges }) {
  const handleNodeClick = async (nodeId) => {
    const userId = 'my-user-id';
    const response = await fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, nodeId }),
    });
    const result = await response.json();
    console.log(result);
    // Do something else when a node is clicked...
  };

  return <Network nodes={nodes} edges={edges} onClickNode={handleNodeClick} />;
}

export default MyGraphComponent;
