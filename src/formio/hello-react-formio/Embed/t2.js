import React from 'react';
import {Form as FormIO} from 'react-formio';
import '../style.css';

/**
 * formio的表单样式依赖于bootstrap.css
 * 最好学习一下bootstrap框架的使用
 * 及其样式文件
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