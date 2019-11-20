import React from 'react';
import {Form as FormIO} from 'react-formio';

/**
 * 只安装了react-formio
 * 没有引入bootstrap.css
 * 因为css引入后全局加载，所以要看无样式效果的t1，需要在style.css内注释引入bootstrap样式
 * @import url(bootstrap.min.css);
 */

function test1() {

    return (
      <div id="container">
          {/*<FormIO src="https://bllbeojvobnabqx.form.io/test1" />*/}
          <FormIO src="https://bllbeojvobnabqx.form.io/demographics" />
      </div>
    );

}

export default test1;