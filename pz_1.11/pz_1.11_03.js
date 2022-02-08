let array = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
const flat = array.reduce ((prev, item) => prev.concat(item), []).sort ();
console.log (flat);