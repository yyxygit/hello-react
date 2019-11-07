import React, {Component} from 'react';
import Proptypes from 'prop-types';
import * as Status from './status';
import {connect} from 'react-redux';

const Weather = ({
    status,
    cityName,
    weather,
    lowestTemp,
    highestTemp,
                 }) => {
    switch (status) {
        case Status.LOADING: {
            return <div>天气信息请求中。。。</div>
        }
        case Status.FAILURE: {
            return <div>天气装载失败</div>;
        }
        case Status.SUCCESS: {
            return (
                <div>
                    <div>{cityName}</div>
                    <div>{weather}</div>
                    <div>最低气温：{lowestTemp}</div>
                    <div>最高气温：{highestTemp}</div>
                </div>
            );
        }

    }
};

Weather.propTypes= {
    status: Proptypes.string.isRequired,
    cityName: Proptypes.string,
    weather: Proptypes.string,
    lowestTemp: Proptypes.string,
    highestTemp: Proptypes.string,
};

const mapStateToProps = (state) => {
    const {weather: weatherinfo} = state;
    return {
        status: weatherinfo.status,
        cityName: weatherinfo.city,
        weather: weatherinfo.weather,
        lowestTemp: weatherinfo.temp1,
        highestTemp: weatherinfo.temp2,
    };
};

/**
 * 天气模块，纯显示数据，没有用户交互功能（交互在city_selector模块里）
 * 所以不需要 mapDispatchToProps 方法
 */

export default connect(mapStateToProps)(Weather);