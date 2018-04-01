import sql from 'mssql';
import config from './config';

const MssqlWrapper = () => {
  const pool = new sql.ConnectionPool(config.mssqlConfig);
  pool.connect(err => {
    if (err === null) return console.log('Success!');
    return console.log('failed!');
  });
};

export default MssqlWrapper;

