import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';

// import App from './basic/example';
// import App from './hello/helloworld';
// import HelloMessage from './site/official/simple-component';
// import Timer from './site/official/status-component';
// import TodoApp from './site/official/todo-app';
// import Clock from './site/official/clock';
// import Ex01 from './ex01/v1/app4';
// import Ex01 from './ex01/v1/app5';
// import FilterableProductTable from './site/official/think-in-react2';
// import Ex02 from './ex01/v2/app3';
// import Ex02 from './ex01/v2/app3';
// import BasicRouter from "./reacttraining/react-router/basic/Basic";
// import AppRouter from "./reacttraining/react-router/basic/URLParameters";
// import AppRouter from "./reacttraining/react-router/basic/QueryParameters";
// import AppRouter from "./reacttraining/react-router/basic/Redirects";
// import Ex01 from './ex01/v3/app1';
// import Ex01 from './ex01/v4/app1';
// import Ex01 from './ex01/v5/app1';

import Ex01 from './ex01/v6-antd/app';

// import './index.css';
// import Game from './site/official/game2';

// import Test01 from './example-web/props-update-1/test01';

// import Sider from './antd/menu/onOpenChange1';

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

// ReactDOM.render(
//   <Ex01/>,
//   document.getElementById('root')
// );

// https://zh-hans.reactjs.org/docs/lists-and-keys.html
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//     <li>{number}</li>
// );
// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById("root")
// );

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map( number =>
//         <li key={number.toString()}>{number}</li>
//     );
//     return <ul>{listItems}</ul>;
// }
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById("root")
// );

// function Blog(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );
//     const content = props.posts.map((post) =>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );
//     return (
//       <div>
//           {sidebar}
//           <hr />
//           {content}
//       </div>
//     );
// }
//
// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learing React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
//
// ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById("root")
// );

// const PRODUCTS = [
//     {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//     {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//     {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//     {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//     {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//     {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ];
//
// ReactDOM.render(
//     <FilterableProductTable products={PRODUCTS} />,
//     document.getElementById("root")
// );

// ReactDOM.render(
//   <Ex02/>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//     <BasicRouter />,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <AppRouter />,
//     document.getElementById('root')
// );

ReactDOM.render(
  <Ex01/>,
  document.getElementById('root')
);

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <Test01/>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <Sider />,
//     document.getElementById('root')
// );