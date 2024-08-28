const {
    format,
    createConsoleLogger,
} = require('@auxilin/common-logger');

module.exports = createConsoleLogger({
    logToFiles: true,
    logDir: __dirname,
    format: format.combine(
        format.splat(),
        format.simple(),
    ),
});