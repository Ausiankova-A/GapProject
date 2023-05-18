const winston = require('winston');
const { combine, timestamp, printf } = winston.format;
const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: 'error',
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    new winston.transports.Console({format: winston.format.cli({ colors: { error: 'red' }})}),
    new winston.transports.File({ filename: 'logs.log',  level: 'error' })
  ]
});

module.exports = logger;