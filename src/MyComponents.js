import React from 'react';
import useCalled from './UseCalled'; // あなたのフックが存在するパス

function MyComponents() {
  const callCount = useCalled();

  return (
    <div>
      <p>This component has been called {callCount} times.</p>
    </div>
  );
}

export default MyComponents;
