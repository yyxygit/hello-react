import React, {Component} from 'react';

/**
 * http://www.weather.com.cn/data/cityinfo/101010100.html
 * 返回json格式数据：
 * {"weatherinfo":{"city":"北京","cityid":"101010100","temp1":"18℃","temp2":"31℃","weather":"多云转阴","img1":"n1.gif","img2":"d2.gif","ptime":"18:00"}}
 */

//TODO: change to your city code according to http://www.weather.com.cn/
const cityCode = 101010100;

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: null,
        };
    }

    componentDidMount() {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        fetch(apiUrl).then((response) => {
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
            response.json().then((responseJson) => {
                this.setState({
                    weather: responseJson.weatherinfo,
                });
            }).catch((error) => {
                this.setState({
                    weather: null,
                });
            });
        }).catch((error) => {
            this.setState({
                weather: null,
            });
        });
    }

    render() {
        const {weather: weatherObj} = this.state;
        if(!weatherObj) {
            return (
                <div>暂无数据！</div>
            );
        }
        const {city, weather, temp1, temp2} = weatherObj;
        return (
            <div>
                <div>{city}</div>
                <div>{weather}</div>
                <div>最低气温：{temp1}</div>
                <div>最高气温：{temp2}</div>
            </div>
        );

    }

}

export default Weather;
