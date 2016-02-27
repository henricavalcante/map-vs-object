'use strict';
const testMap = require('./map.js');
const testObject = require('./object.js');

for (let keys = 1; keys <= 1000000; keys *= 10) {
  console.log('-----\n', 'Testing with', keys, 'keys.');
  testMap.test(keys);
  testObject.test(keys);
}
