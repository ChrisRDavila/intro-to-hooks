import React, { useState, useEffect } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("effect!");
  });

  return (
    <React.Fragment>
      {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}
      <button onClick={() => setCounter(counter + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter;

//adding another property to counter example
// function Counter() {

//   const [bundle, setBundle] = useState({"hidden": false, "counter": 0});

//   return (
//     <React.Fragment>
//       {bundle.hidden ? <h1>Count Hidden</h1> : <h1>{bundle.counter}</h1>} 

//       <button onClick={() => setBundle({...bundle, "counter": bundle.counter +1})}>Count!</button>
//       <button onClick={() => setBundle({...bundle, "hidden": !bundle.hidden})}>Hide/Show</button>
//     </React.Fragment>
//   );
// }

//same counter as class compontent
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//     };
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <h1>{this.state.counter}</h1>
//         <button onClick={() => this.setState({counter: this.state.counter + 1})}>Count!</button>
//       </React.Fragment>
//     );
//   }
// }

// export default Counter;