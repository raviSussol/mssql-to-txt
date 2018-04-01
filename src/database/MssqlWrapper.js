import { ConnectionPool } from 'mssql';

export default class MssqlWrapper {
  constructor(config) {
    const { mssqlConfig } = config;
    this.connection = new ConnectionPool(mssqlConfig);
    this.connection.connect(err => {
      if (err === null) return console.log('Success!');
      return console.log('failed!');
    });
  }
}
