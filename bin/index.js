#! /usr/bin/env node

const process = require('process').argv

const command = process[2]
const options = process.slice(2)

if (options.length !== 0) {

}

console.log("input target")

if (command === 'init') {
    console.log("hello")
}
