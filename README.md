### Install
`npm i jcodes`

### Usage
`const jcodes = require('jcodes')`;

### API
**getAll**

`jcodes.getAll()`

Returns all rev codes as an array of objects

**getOne** 

`jcodes.getOne('A1')` or `jcodes.getOne(a1)`

Returns a single rev code by id

**getMany**

`jcodes.getMany(['a1', 'a2', 'A3', 'a4'])`

Returns an array of rev codes for each id passed.

## Introduction

This repo will serve as a list of jcodes that can be incorporated into medical billing software.

All code id's are in string format. If you pass a number, it will be converted to a string and padded with 0 until the length of the string is 4.

serviceCodes.json is a more extensive list of service codes that were extracted from the sources listed in ServiceCode_sources.txt

### Contributors

Please fork this repo and submit a PR for any corrections.