// This file is just a reference. If you try to run without commenting things out, you might run into errors

const url = require('url')

const myUrl = new URL(
  'http://mywebsite.com:8000/hello.html?id=100&status=active'
)

// Serialized URL
console.log('href')
console.log(myUrl.href)
console.log('toString()')
console.log(myUrl.toString())
// Host
console.log('host')
console.log(myUrl.host)
// Hostname
console.log('hostname')
console.log(myUrl.hostname)
// Pathname
console.log('pathname')
console.log(myUrl.pathname)
// Serialized query
console.log('search')
console.log(myUrl.search)
// Params object
console.log('searchParams')
console.log(myUrl.searchParams)
// Add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)
// Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(value + name)
})
