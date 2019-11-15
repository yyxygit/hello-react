import React from 'react';
import pdfjs from 'pdfjs-dist/build/pdf';

import '../style.css';

/**
 * https://github.com/mozilla/pdf.js/blob/master/examples/learning/helloworld64.html
 */

/**
 * 设置 workerSrc 出现问题
 * pdfjs.GlobalWorkerOptions.workerSrc =
 '../../node_modules/pdfjs-dist/build/pdf.worker.js';
 *  console error：
 * Uncaught SyntaxError: Unexpected token '<'
 * Cannot read property 'WorkerMessageHandler' of undefined
 * project中天宇引用外部CDN，因为sma-web-h5项目里没有public文件夹
 */
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.228/pdf.worker.min.js';

const pdfData = atob(
    'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
    'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
    'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
    'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
    'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
    'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
    'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
    'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
    'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
    'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
    'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
    'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
    'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G');

class HelloBase64 extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // Opening PDF by passing its binary data as a string. It is still preferable
        // to use Uint8Array, but string or array-like structure will work too.
        const loadingTask = pdfjs.getDocument({ data: pdfData, });

        loadingTask.promise.then(function(pdf) {
            // Fetch the first page.
            pdf.getPage(1).then(function(page) {
                var scale = 1;
                var viewport = page.getViewport({ scale: scale, });
                // Prepare canvas using PDF page dimensions.
                var canvas = document.getElementById('the-canvas');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                // Render PDF page into canvas context.
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };
                page.render(renderContext);
            });
        });

    }

    render() {
        return (
            <div id="container">
                <h1>Hello, Base64 pdf! - test 3</h1>
                <div className="pdf">
                    <canvas id="the-canvas"></canvas>
                </div>
            </div>
        );
    }
}

export default HelloBase64;