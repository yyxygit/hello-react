import React from 'react';
import moment from 'moment';

export default function () {
    /**
     * style属性里，写表达式{}
     * 样式对象,放在{}内
     * 所以双重{}
     * 属性名，纯字母可以不加引号，中划线等符号，需加引号 margin-right
     * 属性值，纯数字可以不加引号，默认为px像素，其他单位，包括px都需加引号
     * margin-right 报错：
     * Warning: Unsupported style property margin-right.
     * Did you mean marginRight? in span (at t1.js:** line)
     * 改为marginRight正常，要注意style内联样式的属性名，与外联样式的不同
     */
    return (
        <div>
            <div>
                {/*<span style={{"margin-right": "10px"}}>Now timestamp:</span>*/}
                <span style={{"marginRight": "10px"}}>Moment timestamp:</span>
                <span>{moment().valueOf()}</span>
            </div>
            <div>
                <span style={{"marginRight": "10px"}}>Date timestamp 1:</span>
                <span>{Date.parse(new Date())}</span>
            </div>
            <div>
                <span style={{"marginRight": "10px"}}>Date timestamp 2:</span>
                <span>{new Date().valueOf()}</span>
            </div>
        </div>
    );
    /**
     * 传统Date取时间戳方式
     * valueOf方法，比Date.parse(不取最后三位毫秒）精确些
     */
}