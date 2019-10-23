import React from 'react';
// import { firstname, lastname } from "./file1";
import * as person from './file1';

export default function () {
    console.log(person.firstname + ' ' + person.lastname);
    return <div>file3.js</div>;
}
