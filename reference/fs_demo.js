// This file is just a reference. If you try to run without commenting things out, you will run into errors

const fs = require('fs')
const path = require('path')

// Create Folder
fs.mkdir(path.join(__dirname, 'restest'), {}, (err) => {
  if (err) throw err
  console.log('bitch it is working. here your damn folder')
})

// Create and write to file
fs.writeFile(
  path.join(__dirname, 'restest', 'blah.txt'),
  'hello there',
  (err) => {
    if (err) throw err
    console.log('success')

    // file append
    fs.appendFile(
      path.join(__dirname, 'restest', 'blah.txt'),
      ' I am beginning to learn node.js but this pop up of vs code disturbs a lot',
      (err) => {
        if (err) throw err
        console.log('append done, what is asynchronous')
      }
    )
  }
)

// Read File
fs.readFile(
  path.join(__dirname, 'restest', 'blah.txt'),
  'utf-8',
  (err, data) => {
    if (err) throw err
    console.log(data)
  }
)

// rename file
fs.rename(
  path.join(__dirname, 'restest', 'blah.txt'),
  path.join(__dirname, 'restest', 'Heeelo.txt'),
  (err) => {
    if (err) throw err
    console.log('file renamed')
  }
)
