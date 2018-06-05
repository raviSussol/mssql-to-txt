import { ConnectionPool } from 'mssql';

export default class MssqlWrapper {
  constructor(config) {
    const { mssqlConfig } = config;
    this.connection = new ConnectionPool(mssqlConfig);
    this.connection.connect(err => {
      if (err === null) {
        this.connection.request()
          .query('select * from std_info', (err, result) => {
            console.log(result.recordset);
          });
      } else {
        console.log('failed!');
      }
    });
  }
}
