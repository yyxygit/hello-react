import {FETCH_FAILURE, FETCH_STARTED, FETCH_SUCCESS} from "./actionTypes";

export const fetchWeatherStarted = () => ({
    type: FETCH_STARTED,
});

export const fetchWeatherSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result,
});

export const fetchWeatherFailure = (error) => ({
    type: FETCH_FAILURE,
    error,
});

export const fetchWeather = (cityCode) => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        dispatch(fetchWeatherStarted());

        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                dispatch(fetchWeatherSuccess(responseJson.weatherinfo));
            }).catch((error) => {
                dispatch(fetchWeatherFailure(error));
            });
        }).catch((error) => {
                dispatch(fetchWeatherFailure(error));;
        });
    };
}

/**
 * 在 action 构造 函数 文件 中 定义 一个 文件 模块 级 的 nextSeqId 变量，
 * 这是 一个 递增 的 整数 数字， 给 每一个 访问 API 的 请求 做 序列 编号。
 *
 * @type {number}
 */
let nextSeqId = 0;

export const fetchWeather2 = (cityCode) => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        /**
         * 在 fetchWeather 返回 的 函数 中，
         * fetch 开始 一个 异步 请求 之前，
         * 先给 nextSeqId 自 增加 一，
         * 然后 自 增 的 结果 赋值 给 一个 局部 变量 seqId，
         * 这个 seqId 的 值 就是 这一次 异步 请求 的 编号，
         * 如果 随后 还有 fetchWeather 构造 器 被 调用，
         * 那么 nextSeqId 也会 自 增，
         * 新的 异步 请求 会 分配 为 新的 seqId。
         *
         * 若 nextSeqId = 0
         * const seqId = ++ nextSeqId;
         * 执行后， seqId = nextSeqId = 1
         * const seqId = nextSeqId++;
         * 执行后， nextSeqId = 1 seqId = 0
         * 会把自增前的nextSeqId赋值给seqId
         *
         * @type {number}
         */
        const seqId = ++ nextSeqId;

        /**
         * dispatchIfValid 用来代理 原来的 dispatch方法
         * 因为fetch方法的promise回调，是异步
         * 得到fetch结果后，可能用户已经连续点击发起了新的请求
         * 即 nextSeqId > 异步动作方法fetchWeather2返回函数中局部保存的自身请求序号 seqId
         * 则不发起同步动作去更新store，放弃这次请求获得的结果
         * @param action 派发的同步动作
         */
        const dispatchIfValid = (action) => {
            if (seqId === nextSeqId) {
                dispatch(action);
            }
        };

        // dispatch(fetchWeatherStarted());
        dispatchIfValid(fetchWeatherStarted());

        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                // dispatch(fetchWeatherSuccess(responseJson.weatherinfo));
                dispatchIfValid(fetchWeatherSuccess(responseJson.weatherinfo));
            }).catch((error) => {
                // dispatch(fetchWeatherFailure(error));
                dispatchIfValid(fetchWeatherFailure(error));
            });
        }).catch((error) => {
            dispatchIfValid(fetchWeatherFailure(error));;
        });
    };
}