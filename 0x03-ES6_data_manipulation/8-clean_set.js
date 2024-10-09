const cleanSet = (set, startString) => {
  if (!startString || typeof startString !== 'string' || startString.length === 0) return '';
  return [...set].filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length)).join('-');
};

export default cleanSet;
