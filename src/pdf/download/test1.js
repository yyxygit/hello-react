import React from 'react';

class DownloadFromClick extends React.Component {

    handleClick = (e) => {
        // debugger;
        // 打开了网页pdf
        // window.location.href = 'https://resources.jetbrains.com/storage/products/webstorm/docs/WebStorm_ReferenceCard.pdf';
        // 打开了网页的图片地址，显示图片
        window.location.href = '/download/icon_rili copy@3x.png';

        /**
         * project里直接给location.href赋值file url打开下载
         * 估计可能后台代码需要请求响应返回文件内容，而不是直接返回网页
         */
    }

    render() {
        return (
            <div>
                <p onClick={this.handleClick}>click me to download the pdf file</p>
            </div>
        );
    }

}

export default DownloadFromClick;