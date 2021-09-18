export default async function getAll() {
  // try {
  const response = await fetch('http://localhost:5000/authors', {
    method: 'GET',
    redirect: 'follow',
  })
    .then(response => response.text())
    .then(result => JSON.parse(result));
  return response;
  // } catch (error) {
  //   alert("Error. Please try again later.", error);
  //   return [];
  // }
}
