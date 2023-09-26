export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
      const value = true;
      if(value) {
        resolve(value);
      }
      else {
        reject(Error('Operation Broke!'));
      }
  });
}
