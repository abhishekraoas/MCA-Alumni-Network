const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
  ),
  transports: [
    new transports.Console(), // Logs to console
    new transports.File({ filename: 'combined.log' }) // Logs to file
  ],
});

module.exports = logger;
