const _ = require('lodash');
console.log(_);

const items = [1, [2, [3, [4]]]];

// const newItems = items.flat(4);

const lodashItems = _.flattenDeep(items);

console.log(lodashItems);
