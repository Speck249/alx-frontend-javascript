export default function getResponseFromAPI() {
  const value = true;
  return new Promise((resolve, reject) => {
    if (value) {
      resolve(value);
    }
    else {
      reject(Error('Operation Broke!'));
    }
  });
}
