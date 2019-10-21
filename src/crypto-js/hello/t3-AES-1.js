import React from 'react';
import CryptoJS from 'crypto-js';
import '../style.css';

export default function() {

    var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
    console.log('encrypted', encrypted);
    var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    console.log('decrypted', decrypted);

    var data = [{id: 1}, {id: 2}]

    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();

    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    console.log('decryptedData', decryptedData); // [{id: 1}, {id: 2}]

    return (
        <div>
            <h1>Hello crypto-js - test 3</h1>
            <table>
                <tbody>
                    <tr>
                        <td>str:</td>
                        <td>Message</td>
                    </tr>
                    <tr>
                        <td>encrypted</td>
                        <td>{encrypted.toString()}</td>
                    </tr>
                    <tr>
                        <td>decrypted</td>
                        <td>{decrypted.toString(CryptoJS.enc.Utf8)}</td>
                    </tr>
                    <tr>
                        <td>bytes</td>
                        <td>{bytes.toString()}</td>
                    </tr>
                    <tr>
                        <td>decryptedData</td>
                        <td>{bytes.toString(CryptoJS.enc.Utf8)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
