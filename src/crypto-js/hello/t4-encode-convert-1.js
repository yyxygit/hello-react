import React from 'react';
import CryptoJS from 'crypto-js';
import '../style.css';

export default function() {

    /**
     * https://cryptojs.gitbook.io/docs/
     * Encoders
     CryptoJS can convert from encoding formats such as Base64,
     Latin1 or Hex to WordArray objects and vice-versa.
     */
    const str = 'hello world';
    // 生成utf8编码的WordArray对象
    const str_utf8_parse = CryptoJS.enc.Utf8.parse(str);
    console.log('str_utf8_parse', str_utf8_parse);
    //将WordArray对象按utf8编码序列化
    const str_utf8_stringify = CryptoJS.enc.Utf8.stringify(str_utf8_parse);
    console.log('str_utf8_stringify', str_utf8_stringify);

    /**
     * https://www.sojson.com/hexadecimal.html
     * hello world 字符串 转 十六进制
     * 68656c6c6f20776f726c64
     * parse 方法 解析特定编码
     * 参数为字符串格式
     * stringify 方法 序列化
     * 参数为特定编码的 WordArray 对象
     */
    const str_hex_parse = CryptoJS.enc.Hex.parse('68656c6c6f20776f726c64');
    console.log('str_hex_parse', str_hex_parse);
    const str_hex_stringify = CryptoJS.enc.Hex.stringify(str_hex_parse);
    console.log('str_hex_stringify', str_hex_stringify);

    /**
     * https://www.sojson.com/base64.html
     * 字符串 与 Base64 编码转换
     * hello world
     * aGVsbG8gd29ybGQ=
     */
    const str_base64_parse = CryptoJS.enc.Base64.parse('aGVsbG8gd29ybGQ=');
    console.log('str_base64_parse', str_base64_parse);
    const str_base64_stringify = CryptoJS.enc.Base64.stringify(str_base64_parse);
    console.log('str_base64_stringify', str_base64_stringify);

    return (
        <div>
            <h1>test 4 - encode convert - Hello crypto-js</h1>
            <table>
                <tbody>
                <tr>
                    <td>str:</td>
                    <td>{str}</td>
                </tr>
                <tr>
                    <td>str_utf8_parse.toString()</td>
                    {/*toString() 默认转为Hex 十六进制 输出*/}
                    <td>{str_utf8_parse.toString()}</td>
                </tr>
                <tr>
                    <td>str_utf8_parse.toString(CryptoJS.enc.Utf8)</td>
                    <td>{str_utf8_parse.toString(CryptoJS.enc.Utf8)}</td>
                </tr>
                <tr>
                    <td>str_utf8_stringify</td>
                    <td>{str_utf8_stringify}</td>
                </tr>
                <tr>
                    <td>str_hex_parse.toString(CryptoJS.enc.Hex)</td>
                    <td>{str_hex_parse.toString(CryptoJS.enc.Hex)}</td>
                </tr>
                <tr>
                    <td>str_hex_parse.toString(CryptoJS.enc.Utf8)</td>
                    <td>{str_hex_parse.toString(CryptoJS.enc.Utf8)}</td>
                </tr>
                <tr>
                    <td>str_hex_stringify</td>
                    <td>{str_hex_stringify}</td>
                </tr>
                <tr>
                    <td>str_base64_parse.toString()</td>
                    <td>{str_base64_parse.toString()}</td>
                </tr>
                <tr>
                    <td>str_base64_parse.toString(CryptoJS.enc.Utf8)</td>
                    <td>{str_base64_parse.toString(CryptoJS.enc.Utf8)}</td>
                </tr>
                <tr>
                    <td>str_base64_parse.toString(CryptoJS.enc.Base64)</td>
                    <td>{str_base64_parse.toString(CryptoJS.enc.Base64)}</td>
                </tr>
                <tr>
                    <td>str_base64_stringify</td>
                    <td>{str_base64_stringify}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
