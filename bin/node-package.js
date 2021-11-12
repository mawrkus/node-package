#!/usr/bin/env node

const debug = require('debug')('node-package:cli');
const { MyClass } = require('../src/MyClass');

const myClass = new MyClass();

const result = myClass.doSomething();

debug('result = "%s"', result);
