export function getCommercials (context) {
  return context.$http.get('/api/commercials')
    .then((response) => response.data)
    // .catch(console.log('error'))
}
