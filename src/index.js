import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
// import App from './basic/example';
// import App from './hello/helloworld';
// import HelloMessage from './site/official/simple-component';
// import Timer from './site/official/status-component';
// import TodoApp from './site/official/todo-app';
// import Clock from './site/official/clock';
import Ex01 from './ex01/v1/app3';


/*
ReactDOM.render(
    <App />,
    document.getElementById('root')
);*/


// ReactDOM.render(
//     <HelloMessage name="Cathy" />,
//     document.getElementById('root')
// );


// ReactDOM.render(
//     <Timer />,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <TodoApp />,
//     document.getElementById('root')
// );

// function tick() {
//
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().getTime()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);

// ReactDOM.render(<Clock/>, document.getElementById('root'));

// function App() {
//     return (
//       <div>
//           <Clock />
//           <Clock />
//           <Clock />
//       </div>
//     );
// }
//
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

ReactDOM.render(
  <Ex01/>,
  document.getElementById('root')
);


