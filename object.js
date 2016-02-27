'use strict';
module.exports = {

  test: (max) => {
    const initialTime = new Date();
    let searchKey = null;
    let object = {};

    for (let i = 0; i < max; i++) {
      let key = Math.random() + 'k';
      let value = Math.random() + 'v';
      if (i === max/2) searchKey = key;
      object[key] = value;
    }

    const fillTime = new Date() - initialTime;
    const myValue = object[searchKey];
    const searchTime = new Date() - initialTime - fillTime;
    console.log(fillTime, searchTime, Object.keys(object).length, myValue);
  }
};
