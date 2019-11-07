import {FETCH_FAILURE, FETCH_SUCCESS, FETCH_STARTED} from "./actionTypes";
import * as Status from './status';

/**
 * reducer
 * 根据不同的action类型，创建对应于该reducer的新的状态
 * 在store.js里 combineReducers
 * key-value绑定state上节点属性名称，和对应的更新状态reducer名字
 *
 * 在redux内部，用户操作，触发dispatch派发动作，生成动作对象actions
 * dispatch派发后，redux调用对应的reducer去产生新的状态
 *
 * 在view.js里
 * connect(mapStateToProps, mapDispatchToProps)(无状态组件)
 * redux生成容器组件，绑定状态驱动视图更新 mapStateToProps，绑定事件驱动动作派发 mapDispatchToProps
 *
 * 需要查下，redux流程图
 */

/**
 * http://www.weather.com.cn/data/cityinfo/101010100.html
 * 返回json格式数据：
 * {"weatherinfo":{"city":"北京","cityid":"101010100","temp1":"18℃","temp2":"31℃","weather":"多云转阴","img1":"n1.gif","img2":"d2.gif","ptime":"18:00"}}
 */

export default (state = {status: Status.LOADING}, action) => {
    switch (action.type) {
        case FETCH_STARTED: {
            return {
                status: Status.LOADING,
            };
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                status: Status.SUCCESS,
                /**
                 * fetch result 是返回的json数据，见上部注释
                 *
                 * 在actions.js里，
                 * dispatch(fetchWeatherSuccess(responseJson.weatherinfo));
                 * export const fetchWeatherSuccess = (result) => ({
                        type: FETCH_SUCCESS,
                        result,
                    });
                 * reducer里的 result = {"city":"北京","cityid":"101010100",...}
                 * 结果对象展开变成，"city":"北京","cityid":"101010100",...
                 *
                 * 在store.js里，
                 * const reducer = combineReducers({
                      weather: weatherReducer
                    });
                 * 所以这个reducer返回的对象数据 {status: Status.SUCCESS, "city":"北京","cityid":"101010100",...}
                 * 被更新到store的weather节点属性上
                 * 在veiw.js里，
                 * mapStateToProps方法中，从store同步到state后，从state.weather获取 这些字段
                 */
                ...action.result,
            };
        }
        case FETCH_FAILURE: {
            return {
                status: Status.FAILURE,
            };
        }
        default: {
            return state;
        }
    }
}
