import sql from 'mssql';

export default class MssqlWrapper {
    constructor(config) {
        this.connection = new sql.ConnectionPool(config);
        sql.on('error', err => {
            if (err) throw  new Error('MsSQL connection failed');
            else console.log('Success');
        });
    }
}