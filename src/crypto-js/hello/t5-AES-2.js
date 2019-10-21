import React from 'react';
import CryptoJS from 'crypto-js';
import '../style.css';

export default function() {

    /**
     * https://cryptojs.gitbook.io/docs/
     * https://blog.csdn.net/Vieri_32/article/details/48345023
     * https://blog.zhengxianjun.com/2015/05/javascript-crypto-js/
     * https://www.vxzsk.com/1348.html
     */

    const str = 'hello world';
    // 密钥 16 位 为编辑器的utf8格式
    const key_utf8 = '0123456789abcdef';
    // 初始向量 initial vector 16 位
    const iv_utf8 = '0123456789abcdef';
    // key 和 iv 可以一致
    const key_wordObj = CryptoJS.enc.Utf8.parse(key_utf8);
    console.log('key_wordObj', key_wordObj);
    const iv_wordObj = CryptoJS.enc.Utf8.parse(iv_utf8)
    console.log('iv_wordObj', iv_wordObj);

    const encrypted = CryptoJS.AES.encrypt(str, key_utf8, {
        iv: iv_utf8,
        mode: CryptoJS.mode.CBC,
        // padding: CryptoJS.pad.Pkcs7,
        padding: CryptoJS.pad.ZeroPadding,
    });
    console.log('encrypted', encrypted);

    const decrypted = CryptoJS.AES.decrypt(encrypted, key_utf8, {
       iv: iv_utf8,
       mode: CryptoJS.mode.CBC,
       // padding: CryptoJS.pad.Pkcs7,
       padding: CryptoJS.pad.ZeroPadding,
    });
    /**
     * WordArray 对象
     * 用 CryptoJS.enc.Utf8.stringify(decrypted) 转为字符串序列
     */
    console.log('decrypted', decrypted);

    const ciphertext = encrypted.ciphertext;
    console.log('ciphertext', ciphertext);

    /**
     * from BSM project
     * encryptAES方法
     * 将加密产生的密文，序列化为Base64编码
     */
    const ci_Base64 = CryptoJS.enc.Base64.stringify(ciphertext);
    console.log('typeof ci_Base64', typeof ci_Base64);


    return (
        <div>
            <h1>test 5 - AES 2 - Hello crypto-js</h1>
            <table>
                <tbody>
                <tr>
                    <td>str:</td>
                    <td>{str}</td>
                </tr>
                <tr>
                    <td>encrypted</td>
                    <td>{encrypted.toString()}</td>
                </tr>
                <tr>
                    <td>encrypted.ciphertext 默认序列化为十六进制编码</td>
                    <td>{encrypted.ciphertext.toString()}</td>
                </tr>
                <tr>
                    <td>ci_Base64</td>
                    <td>{ci_Base64}</td>
                </tr>
                <tr>
                    <td>encrypted.key</td>
                    <td>{encrypted.key.toString()}</td>
                </tr>
                <tr>
                    <td>encrypted.iv</td>
                    <td>{encrypted.iv.toString()}</td>
                </tr>
                <tr>
                    <td>encrypted.salt</td>
                    <td>{encrypted.salt.toString()}</td>
                </tr>
                <tr>
                    <td>decrypted</td>
                    <td>{CryptoJS.enc.Utf8.stringify(decrypted)}</td>
                </tr>

                </tbody>
            </table>
        </div>
    );

}
