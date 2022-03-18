// This file is just a reference. If you try to run without commenting things out, you will run into errors

const http = require('http')

// Create server object
http
  .createServer((req, res) => {
    res.write('Hello world')
    res.end()
  })
  .listen(5000, () => console.log('Server running...'))
