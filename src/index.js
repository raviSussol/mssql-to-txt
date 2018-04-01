import MssqlWrapper from './database/MssqlWrapper';
import config from './database/config';

const database = new MssqlWrapper(config);
