import React from 'react';
import CryptoJS from 'crypto-js';
import '../style.css';

export default function() {
    const str = 'Message';

    const hash_MD5 = CryptoJS.MD5(str);
    console.log('hash_MD5:', hash_MD5);
    console.log('typeof hash_MD5:', typeof hash_MD5);

    const hash_SHA1 = CryptoJS.SHA1(str);
    console.log('hash_SHA1:', hash_SHA1);

    const hash_SHA256 = CryptoJS.SHA256(str);
    console.log('hash_SHA256:', hash_SHA256);

    const hash_SHA512 = CryptoJS.SHA512(str);
    console.log('hash_SHA512:', hash_SHA512);


    /**
     * SHA-3 can be configured to output hash lengths of one of 224, 256, 384, or 512 bits.
     * The default is 512 bits.
     */
    const hash_SHA3_default = CryptoJS.SHA3("Message", { outputLength: 512 });
    console.log('hash_SHA3_default:', hash_SHA3_default);

    const hash_RIPEMD160 = CryptoJS.RIPEMD160(str);
    console.log('hash_RIPEMD160:', hash_RIPEMD160);

    return (
        <div>
            <h1>Hello crypto-js - test 1</h1>
            <table>
                <tbody>
                    <tr>
                        <td>str:</td>
                        <td>{str}</td>
                    </tr>
                    <tr>
                        <td>MD5 encrypt:</td>
                        <td>{hash_MD5.toString()}</td>
                        <td>相比较MD5位数</td>
                    </tr>
                    <tr>
                        <td>SHA1 encrypt:</td>
                        <td>{hash_SHA1.toString()}</td>
                        <td>多8位</td>
                    </tr>
                    <tr>
                        <td>SHA256 encrypt:</td>
                        <td>{hash_SHA256.toString()}</td>
                        <td>多24位</td>
                    </tr>
                    <tr>
                        <td>SHA512 encrypt:</td>
                        <td>{hash_SHA512.toString()}</td>
                        <td>多64位</td>
                    </tr>
                    <tr>
                        <td>SHA3 512 encrypt:</td>
                        <td>{hash_SHA3_default.toString()}</td>
                        <td>多64位</td>
                    </tr>
                    <tr>
                        <td>RIPEMD160 encrypt:</td>
                        <td>{hash_RIPEMD160.toString()}</td>
                        <td>多8位</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
