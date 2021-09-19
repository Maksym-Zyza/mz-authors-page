const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export async function getAuthors(limit = 10, page = 1) {
  const response = await fetch(
    `http://localhost:5000/authors?_page=${page}&_limit=${limit}`,
    requestOptions,
  ).then(response => response.json());
  return response;
}

export async function getAllAuthors() {
  const response = await fetch(
    `http://localhost:5000/authors`,
    requestOptions,
  ).then(response => response.json());
  return response;
}
