import sql from 'mssql';

export default class {
    constructor(config) {
        this.connection = new sql.connect(config);
        sql.on('error', err => {
            if (err) throw  new Error('MsSQL connection failed');
        });
    }
}