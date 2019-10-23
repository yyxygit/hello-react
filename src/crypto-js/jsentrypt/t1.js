import React from 'react';
import CryptoJS from 'crypto-js';
import JSEncrypt from 'jsencrypt';
// import { JSEncrypt } from 'jsencrypt';
import '../style.css';

/**
 * https://github.com/travist/jsencrypt
 * http://travistidwell.com/jsencrypt/example.html
 * @returns {*}
 */

export default function () {
    const privateKey = 'MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ' +
        'WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR' +
        'aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB' +
        'AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv' +
        'xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH' +
        'm7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd' +
        '8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF' +
        'z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5' +
        'rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM' +
        'V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe' +
        'aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil' +
        'psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz' +
        'uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876';

    const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN' +
        'FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76' +
        'xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4' +
        'gwQco1KRMDSmXSMkDwIDAQAB';

    const message = 'This is a test!';

    debugger;



    const encrypt = new JSEncrypt();

    encrypt.setPublicKey(publicKey);
    /**
     * Encrypt with the public key...
     * @return {string} the encrypted string encoded in base64
     * 若要返回base16，即16进制编码的密文，见下方注释
     * 使用 encryptObj.getKey() 获得 private key:JSEncryptRSAKey 对象，来加密
     */
    const encryptedBase64 = encrypt.encrypt(message);

    const encryptedHex16 = encrypt.getKey().encrypt(message);

    // Decrypt with the private key...
    const decrypte = new JSEncrypt();

    decrypte.setPrivateKey(privateKey);

    const uncrypted = decrypte.decrypt(encryptedBase64);



    /**
     * https://stackoverflow.com/questions/43256712/rsa-encrypt-using-jsencrypt-and-decrypt-using-bouncycastle-java
     */
     /**
     * Proxy method for RSAKey object's decrypt, decrypt the string using the private
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str base64 encoded crypted string to decrypt
     * @return {string} the decrypted string
     * @public

    public decrypt(str:string) {
        // Return the decrypted string.
        try {
            return this.getKey().decrypt(b64tohex(str));
        } catch (ex) {
            return false;
        }
    }*/

    /**
     * Proxy method for RSAKey object's encrypt, encrypt the string using the public
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str the string to encrypt
     * @return {string} the encrypted string encoded in base64
     * @public

    public encrypt(str:string) {
        // Return the encrypted string.
        try {
            return hex2b64(this.getKey().encrypt(str));
        } catch (ex) {
            return false;
        }
    }*/

    /**
     * 参考 https://stackoverflow.com/questions/43256712/rsa-encrypt-using-jsencrypt-and-decrypt-using-bouncycastle-java
     * JSEncrypt.encrypt() method returns the encrypted data in Base64 (instead of Hex string).
     * In order to decrypt it, you must decode it from base64 format.
     * You can also solve this problem just from the client side. See the code below:

     let encrypt = new Encrypt.JSEncrypt();
     encrypt.setPublicKey(this.publicKey);
     encrypt.getKey().encrypt(password);
     Just add getKey() after encrypt.
     I encrypted my password into Hex string using this approach.
     */

    /**
     * work project use:
     * CFNetworks.js
     */
    function encryptPassToken(password) {
        // key1 16 Hex 字符串
        let key1 = CryptoJS.MD5('30001').toString();
        // SHA256 加密，输出Base64 格式
        let key2 = CryptoJS.HmacSHA256(password, key1).toString(CryptoJS.enc.Base64);
        // key2 + 当前时间戳
        let passwordTime = key2 + '$CurTime=' + (new Date().valueOf());

        let encryptObj = new JSEncrypt();
        encryptObj.setPublicKey('rsa_publicKey');
        // 返回 16进制 的加密 密文
        return encryptObj.getKey().encrypt(passwordTime).toUpperCase();
    }

    return (
        <div>
            <div>Private Key</div><br/>
            <div id="privkey">-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ
WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR
aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB
AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv
xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH
m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd
8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF
z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5
rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM
V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe
aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil
psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz
uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876
-----END RSA PRIVATE KEY-----</div><br/>
            <div>Public Key</div><br/>
            <div id="pubkey">-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
gwQco1KRMDSmXSMkDwIDAQAB
-----END PUBLIC KEY-----</div><br/>
            <div>Text to encrypt:</div><br/>
            <div id="input">This is a test!</div><br/>
        <input id="testme" type="button" value="Test Me!!!" /><br/>
            <div>encryptedBase64</div>
        <div>{encryptedBase64}</div>
            <div>encryptedHex16</div>
            <div>{encryptedHex16}</div>
        <div>uncrypted</div>
        <div>{uncrypted}</div>
        </div>
    );

}
