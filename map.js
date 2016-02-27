'use strict';
module.exports = {

  test: (max) => {
    const initialTime = new Date();
    let searchKey = null;
    let map = new Map();

    for (let i = 0; i < max; i++) {
      let key = Math.random() + 'k';
      let value = Math.random() + 'v';
      if (i === max/2) searchKey = key;
      map.set(key, value);
    }

    const fillTime = new Date() - initialTime;
    const myValue = map.get(searchKey);
    const searchTime = new Date() - initialTime - fillTime;
    console.log(fillTime, searchTime, map.size, myValue);
  }
};
