// @flow
import {getLogger, getLogLevel, setLogLevel, setLogger, getLogLevels} from './logger';

declare var __VERSION__: string;
declare var __NAME__: string;

const VERSION = __VERSION__;
const NAME = __NAME__;

export default getLogger;
export {getLogger, getLogLevel, setLogLevel, setLogger, getLogLevels};
export {VERSION, NAME};
