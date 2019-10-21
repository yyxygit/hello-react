import React from 'react';
import {DatePicker} from 'antd';
import 'antd/es/date-picker/style/css';
import moment from 'moment';

/**
 * DatePicker 控件
 * disabledDate 参数 回调函数
 * https://ant.design/components/date-picker-cn/#components-date-picker-demo-disabled-date
 * disabledDate	不可选择的日期	(currentDate: moment) => boolean
 *
 * onOpenChange 参数 回调函数
 * onOpenChange	弹出日历和关闭日历的回调	function(status)
 */

/**
 * 当天及之前的日期，不可选择
 * @param current 控件当前选中的日期moment对象，未选择时是当前天数前十天
 * @returns {boolean} 为显示的每一天日期应用此过滤器，true 日期禁选，false 日期可选择
 */
function disabledDate1(current) {
    // debugger;
    const today = moment().endOf('day');
    if(current) {
        return current < today;
    }
}

/**
 * moment().endOf('day') 功能
 * 设置目前日期时间，为当天时间最后一毫秒 23:59:59
 * 该时间戳毫秒数，再增加一秒
 * https://momentjs.com/docs/#/manipulating/end-of/
 * @param bStatus true 打开弹出日期选择框 false 关闭日期选择框
 */
function testMoment(bStatus) {
    debugger;
    console.log("bStatus:", bStatus);
    // 当天日期时间戳
    // now: 2019-10-10T17:32:29+08:00
    const now = moment();
    console.log("now:", now.format());
    // 将now moment对象时间，设置为当天最后一
    const endDay = now.endOf('day');

    // eg: endDay: 2019-10-10T23:59:59+08:00
    const endDayString = endDay.format();
    // now === endDay 指向同一个Moment对象
    // endDay: 2019-10-10T23:59:59+08:00
    console.log("endDay:", endDayString);
    // dateString 2019-10-10
    const dateString = endDayString.substring(0, endDayString.indexOf('T'));
    /**
     * 获取第二天午夜的毫秒时间戳
     * 2019-10-10 24:00:00.000
     * # hour 24, minute, second, millisecond equal 0 means next day at midnight
     * Supported ISO 8601 strings
     * http://momentjs.cn/docs/#/parsing/string/
     * @type {moment.Moment}
     */
    const midNightOfNextDay = moment(dateString + ' 24:00:00.000');
    console.log('midNightOfNextDay:', midNightOfNextDay.format());
    console.log('endDay ms:', endDay.valueOf());
    console.log('midNightOf endDay ms', midNightOfNextDay.valueOf());
    console.log(endDay + 1 == midNightOfNextDay); // true 距离第二天零点差1毫秒
}

/**
 * 测试 mCurrent 未选择 和 有选择日期时 代表不同的moment日期
 * @param mCurrent
 * @returns {boolean}
 */
function disabledDate2(mCurrent) {
    debugger;
    const next7day = moment().add('7', 'days');
    return mCurrent < next7day;
}

export default function () {
    return (
      <div className="date">
          <DatePicker
              // disabledDate={disabledDate1}
              onOpenChange={testMoment}
              // disabledDate={disabledDate2}
          />
      </div>
    );
}