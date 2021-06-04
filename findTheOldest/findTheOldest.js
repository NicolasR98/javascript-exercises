const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const getAge = (birth, death) => {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = (arr) => {
  return arr.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge < currentAge ? current : oldest;
  });
};

console.log(findTheOldest(people));

module.exports = findTheOldest;
