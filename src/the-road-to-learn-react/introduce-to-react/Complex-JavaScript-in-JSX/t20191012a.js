import React, {Component} from 'react';

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

export default class extends Component {

    render() {
        /**
         * list array 类型
         * map方法返回一个新的数组对象
         * react元素（className="App"）的子元素可以接受数组对象，
         * 会一次显示数组的每个react元素 <div>{item.title}</div>
         */

        // return (
        //     <div className="App">
        //         {list.map(item => <div>{item.title}</div>)}
        //     </div>
        // );

        /**
         * 应该确保这个关键字属性是一个稳定的标识符。不要错误地使用列表成员在数组的索引
         作为关键字。列表成员的索引是完全不稳定的。在下面的这个例子中，当列表的排序改变
         了之后，React 将很难正确地识别这些成员。
         * 一般key加在map的子元素上
         */
        // return (
        //     <div className="App">
        //         {list.map(item => {
        //             return (
        //                 <div key={item.objectID}>
        //                     <span>
        //                         <a href={item.url}>{item.title}</a>
        //                     </span>
        //                     <span>{item.author}</span>
        //                     <span>{item.num_comments}</span>
        //                     <span>{item.points}</span>
        //                 </div>
        //             );
        //         })}
        //     </div>
        // );


        /**
         * 函数体内只有一条return语句，可以省去{ return }
         */
        return (
            <div className="App">
                {list.map(item =>
                    <div key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                    </div>
                )}
            </div>
        );

    }

}
