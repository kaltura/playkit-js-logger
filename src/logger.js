//@flow
let getLogger: LoggerFunction = () => ({
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
});
let getLogLevels = (): LogLevels => {};

/**
 * set logger
 * @param {Logger} logger - the logger
 * @returns {void}
 */
function setLogger(logger: ?Logger): void {
  if (logger && typeof logger.getLogger === 'function') {
    getLogger = logger.getLogger;
  }
  if (logger && logger.LogLevels) {
    getLogLevels = () => (logger.LogLevels)
  }
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

export default getLogger;
export {getLogLevel, setLogLevel, setLogger, getLogLevels};
