import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';

import {actions as weatherActions} from '../weather';

const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
};

/**
 * 要用生命周期方法 componentDidMount + 内部select onChange方法
 * 所以构造类组件
 */

class CitySelector extends Component {
    constructor(props) {
        super(props);
        // 自身没有状态
    }

    onChange = (ev) => {
        const cityCode = ev.target.value;
        this.props.onSelectCity(cityCode);
    }

    componentDidMount() {
        const defaultCity = Object.keys(CITY_CODES)[0]; // 北京
        this.props.onSelectCity(CITY_CODES[defaultCity]);
    }

    render() {
        return (
          <select onChange={this.onChange}>
              {
                  Object.keys(CITY_CODES).map(cityName =>
                  <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>)
              }
          </select>
        );
    }
}

CitySelector.propTypes = {
    onSelectCity: Proptypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectCity: (cityCode) => {
            // dispatch(weatherActions.fetchWeather(cityCode));
            dispatch(weatherActions.fetchWeather2(cityCode));
        }
    };
};

export default connect(null, mapDispatchToProps)(CitySelector);