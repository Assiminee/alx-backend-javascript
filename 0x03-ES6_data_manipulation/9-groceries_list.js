const groceriesList = () => {
  const map = new Map();
  const data = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  for (const entry of data) map.set(entry[0], entry[1]);

  return map;
};

export default groceriesList;
