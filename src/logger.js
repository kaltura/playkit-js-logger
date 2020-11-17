//@flow
let JsLogger = {
  getLogger: (): LoggerFunction => ({
    trace: () => {},
    debug: () => {},
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
    time: () => {},
    timeEnd: () => {},
    getLevel: () => {},
    setLevel: () => {}
  })
};
let logLevel: LogLevel = {};
let LogLevelType: LogLevelTypes = {};

/**
 * set logger
 * @param {Logger} logger - the logger
 * @returns {void}
 */
function setLogger(logger: ?Logger): void {
  if (logger && typeof logger.getLogger === 'function') {
    JsLogger.getLogger = logger.getLogger;
  }
  if (logger && logger.logLevel) {
    logLevel = logger.logLevel;
    // Build the log level types enums according to the LogLevel object
    Object.keys(logLevel).forEach(key => {
      LogLevelType[key] = key;
    });
  }
}

/**
 * get a logger
 * @param {string} name - the logger name
 * @returns {Object} - the logger class
 */
function getLogger(name?: string): LoggerFunction {
  //$FlowFixMe
  return JsLogger.getLogger(name);
}

/**
 * get the log level
 * @param {?string} name - the logger name
 * @returns {LogLevelObject} - the log level
 */
function getLogLevel(name?: string): LogLevelObject {
  return getLogger(name).getLevel();
}

/**
 * sets the logger level
 * @param {LogLevelObject} level - the log level
 * @param {?string} name - the logger name
 * @returns {void}
 */
function setLogLevel(level: LogLevelObject, name?: string): void {
  getLogger(name).setLevel(level);
}

export {getLogger, getLogLevel, setLogLevel, setLogger, logLevel, LogLevelType};
