export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve({
      status: 200,
      data: 'API Response',
    });
  });
}
