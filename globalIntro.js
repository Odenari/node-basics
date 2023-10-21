function HelloInterval(...names) {
  return names.forEach((name, index) => {
    console.log(name, 'person order number is ', ++index);
  });
}

module.exports = HelloInterval;

console.log(module);
