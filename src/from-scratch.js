const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  };
};

const myMap = (arr, callback) => {
  let arr2 = [...arr];
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = callback(arr2[i])
  } ;
  return arr2;
};

const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i]
    }
  };
};

const myFilter = (arr, callback) => {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      arr2.push(arr[i])
    }
  };
  return arr2;
};

const sortWords = (arr) => {
  return arr.toSorted();
};

const sortNumbers = (arr) => {
  return arr.toSorted((a, b) => a - b);
};

const sortNumbersBetter = (arr, isDescending) => {
  if (isDescending === true) {
    return arr.toSorted((a, b) => b - a);
  }
  return arr.toSorted((a, b) => a - b);
};

const sortUsersByOrder = (usersobj) => {
  // for (let i = 0; i < usersobj.length; i++) {
    return usersobj.toSorted((a, b) => a.order - b.order)
  // };
  // return [];
};

const sortUsersByName = (usersobj) => {
  return usersobj.toSorted((a, b) => {
  if (a.name > b.name) return 1;   // any positive
  if (a.name < b.name) return -1;  // any negative
  return 0;  
  });
    // return console.log(usersobj.toSorted((a, b) => a.name.localeCompare(b.name)))
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
