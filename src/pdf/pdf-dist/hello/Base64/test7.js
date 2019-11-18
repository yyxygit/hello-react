import React from 'react';
import pdfjs from 'pdfjs-dist/build/pdf';

import '../style.css';


/**
 *
 */
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const url = '/storage/products/webstorm/docs/WebStorm_ReferenceCard.pdf';


class HelloBase64 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: null
        };

    }

    /**
     * 在获得pdf文件页数后
     * 生成canvas元素数组
     * @param number
     */
    renderCanvas(number) {
        if (number == null) {
            return null;
        }
        const array = [];
        for (let i = 0; i < number; i++) {
            array.push(<canvas id={`canvas-${i+1}`}></canvas>
            );
        }
        return array;
    }

    /**
     * 渲染单页pdf
     * @param pdf 整个所有页的pdf二进制内容
     * @param num 当前要渲染的页码
     */
    renderPage(pdf, num) {
        pdf.getPage(num).then(function (page) {
           let scale = 2;
           let viewport = page.getViewport({scale: scale});
            // Prepare canvas using PDF page dimensions.
           let canvas = document.getElementById(`canvas-${num}`);
            let context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            // Render PDF page into canvas context.
            let renderContext = {
              canvasContext: context,
              viewport: viewport
            };
            page.render(renderContext);
        });
    }

    componentDidMount() {

        fetch(url).then((response) => {
            debugger;
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            /**
             * 因为 fetch 在 接收 到 HTTP 响应 的 报头 部分 就会 调用 then，
             * 不会 等到 整个 HTTP 响应 完成。 所以 这时候 也 不保 准 能 读到 整个 HTTP 报文 的 JSON 格式 数据。
             * 所以， response. json 函数 执行 并不是 返回 JSON 内容，
             * 而是 返回 一个 新的 Promise，
             * 又要 接着 用 then 和 catch 来处 理 成功 和 失败 的 情况。
             * 如果 返回 HTTP 报文 内容 是一 个 完整 的 JSON 格式 数据 就会 成功，
             * 如果 返回 结果 不是 一个 JSON 格式， 比如 是 一堆 HTML 代码， 那就 会 失败。
             */
            response.blob().then((responseBlob) => {
                console.log('responseBlob', responseBlob);
                /**
                 * 结果是，在 package.json 内
                 * 使用 proxy代理访问外站 pdf url
                 * "name": "hello-react-formio-react",
                 "version": "0.1.0",
                 "private": true,
                 "proxy": "https://resources.jetbrains.com/",
                 "dependencies": ...
                 * 直接fetch得到的返回数据的blob对象格式
                 * fetch response 方法
                 * https://developer.mozilla.org/zh-CN/docs/Web/API/Response
                 * 如果要下载，blob对象比较好用，pdf.js展示pdf，直接test8 里那样：
                 * const loadingTask = pdfjs.getDocument(url);
                 */

            }).catch((error) => {
                console.log('error:', error);
            });
        }).catch((error) => {
                console.log('error:', error);
        });

        // Opening PDF by passing its binary data as a string. It is still preferable
        // to use Uint8Array, but string or array-like structure will work too.
        // const loadingTask = pdfjs.getDocument();
        // const _this = this;
        // loadingTask.promise.then(function(pdf) {
        //     // debugger;
        //     _this.setState({
        //         pageNum: pdf.numPages
        //     }, () => {
        //         for (let i = 0; i < _this.state.pageNum; i++) {
        //             _this.renderPage(pdf, i + 1);
        //         }
        //     });
        // });

    }

    render() {
        return (
            <div id="container">
                <h1>Hello, Base64 pdf! - test 7 fetch request remote pdf file url</h1>
                <div className="pdf">
                    {this.renderCanvas(this.state.pageNum)}
                </div>
            </div>
        );
    }
}

export default HelloBase64;