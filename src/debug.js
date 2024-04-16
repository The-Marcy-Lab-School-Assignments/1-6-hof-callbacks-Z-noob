const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!(callback(value))) return false;
  }
  return true;
};

const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction);
};

const logEachName = (name) => {
  // let count = 1;
  const arrcopy = [...name];
  return name.forEach((element) => {
    console.log(element, name.findIndex((word) => word === element), arrcopy)
  });
};

const logEachUserBio = (users) => {
  return users.forEach((users) => console.log(users.bio));
};
const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
// console.log(names.findIndex((element) => element === 'Bob'))
const users = [
  { name: 'Alice', bio: 'Alice is a software engineer' },
  { name: 'Bob', bio: 'Bob is a teacher' },
  { name: 'Charlie', bio: 'Charlie is a student' },
  { name: 'Diana', bio: 'Diana is a doctor' },
];
logEachUserBio(users)
// logEachName(names)
module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
