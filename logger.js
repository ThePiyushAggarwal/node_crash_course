// This file is just a reference. If you try to run without commenting things out, you will run into errors

const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg })
  }
}

module.exports = Logger

// below code for index.js

const Logger = require('./logger')

const logger = new Logger()

logger.on('message', (data) => console.log('Called listener', data))

logger.log('Hello world')
logger.log('Hello world')
logger.log('Hello world')
logger.log('Hello world')
