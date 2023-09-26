export default function getResponseFromAPI() {
  const value = true;
  return new Promise((resolve, reject) => {
    if (value) {
      resolve();
    }
    else {
      reject();
    }
  });
}
