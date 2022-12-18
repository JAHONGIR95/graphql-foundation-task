const url = 'http://localhost:3000/?'

export const request = (query, variables) => {
  
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({ query, variables }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
}