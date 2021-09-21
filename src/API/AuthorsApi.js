const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export async function getAuthors() {
  const response = await fetch(
    `http://localhost:5000/authors`,
    requestOptions,
  ).then(response => response.json());
  return response;
}
