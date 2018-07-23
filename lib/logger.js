const loggerMaker = require('@kudobuzz/express-bunyan-logger')

module.exports = function (options) {
  const logger = loggerMaker({name: 'stripe-node'})
  return (options) ? logger.child(options) : logger
}
