import React, {createElement as e} from 'react';

function App() {

  return e("div", {className: "container"}, [
    e('button', {
      className: 'py-2 px-4 border',
      key: 2,
      onClick: () => console.log("click")
    }, "Click me!")
  ])

}


export default App;
