const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export async function getAll(limit = 10, page = 1) {
  const response = await fetch(
    `http://localhost:5000/authors?_page=${page}&_limit=${limit}`,
    requestOptions,
  );
  return response;
}
