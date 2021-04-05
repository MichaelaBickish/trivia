// Exports the "helper" axios who fires all the requests to the provided API

// @ts-ignore
export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',
    timeout: 30000
  })