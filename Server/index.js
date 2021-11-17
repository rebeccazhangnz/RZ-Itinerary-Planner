const server = require('./server')

const port = 8080

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})