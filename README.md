### Install
`npm i jcodes`

### Usage
`const jcodes = require('jcodes')`;

### API
**getAll**

`jcodes.getAll()`

Returns all rev codes as an array of objects

**getOne** 

`jcodes.getOne('1000')` or `jcodes.getOne(1000)`

Returns a single rev code by id

**getMany**

`jcodes.getMany(['100', '101', '200', '205'])`

Returns an array of rev codes for each id passed.

## Introduction

This repo will serve as a list of jcodes that can be incorporated into medical billing software.

All code id's are in string format. If you pass a number, it will be converted to a string and padded with 0 until the length of the string is 4.

### Contributors

Please fork this repo and submit a PR for any corrections.