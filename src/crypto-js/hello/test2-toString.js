import React from 'react';
import CryptoJS from 'crypto-js';
import '../style.css';

export default function() {
    const str = 'Message';

    const hash_SHA256 = CryptoJS.SHA256(str);
    console.log('hash_SHA256:', hash_SHA256);

    /**
     * You can convert a WordArray object to other formats by
     * explicitly calling the toString method and passing an encoder.
     */



    return (
        <div>
            <h1>Hello crypto-js - test 2 hash toString()</h1>
            <table>
                <tbody>
                    <tr>
                        <td>str:</td>
                        <td>{str}</td>
                    </tr>
                    <tr>
                        <td>hash_SHA256.toString()</td>
                        <td>{hash_SHA256.toString()}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>hash_SHA256.toString(CryptoJS.enc.Hex)</td>
                        <td>{hash_SHA256.toString(CryptoJS.enc.Hex)}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>hash_SHA256.toString(CryptoJS.enc.Base64)</td>
                        <td>{hash_SHA256.toString(CryptoJS.enc.Base64)}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
