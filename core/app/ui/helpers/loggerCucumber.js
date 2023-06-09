const winston = require('winston');
const path = require('path');
const { combine, timestamp, printf } = winston.format;
const logFormat = printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level}: ${message}`;
});

const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), logFormat),
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.cli({ colors: { error: 'red' } }),
        }),
        new winston.transports.File({
            filename: path.join(__dirname, './reportsCucumber/logs.log'),
            level: 'info',
        }),
    ],
});

module.exports = logger;
