const baseUrl = 'https://api.github.com';

export const getUsers = (userName) => {
  return fetch(`${baseUrl}/search/users?q=${userName}`)
    .then(res => res.json())
}

export const fetchRepos = (url) => {
  return fetch(url)
    .then(res => res.json())
}
