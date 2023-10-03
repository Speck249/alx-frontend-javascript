export default function updateUniqueItems(grocery) {
  if (!(grocery instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    grocery.forEach((quantity, name) => {
      if (quantity === 1) {
        grocery.set(name, 100);
      }
    });
  }
  return grocery;
}
