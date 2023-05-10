function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

var kids = [
  {
    name: "Charaf",
    age: 10,
    heightInInches: 52,
  },
  {
    name: "Ranwa",
    age: 9,
    heightInInches: 45,
  },
  {
    name: "Ali",
    age: 10,
    heightInInches: 55,
  },
  {
    name: "el Hou",
    age: 11,
    heightInInches: 48,
  },
];

// ⚠️⚠️⚠️ you can only use each of the high order functions once for each exercice function, and even once in that function too!!
//it means that you will be using each, map, filter and reduce only one time inside the following functions.

var tallest = function (kids) {
  //return the tallest kid in the group
};

var oldEnough = function (kids) {
  //return an array of the kids old enough to get in the rides(min 10 years old)
};

var names = function (kids) {
  //return an array of all kids names
};

var totalHeight = function (kids) {
  //return the total of all kids hights
};
