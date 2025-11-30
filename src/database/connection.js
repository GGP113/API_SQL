import sql from 'mssql';

const dbSettings = {
  user: 'sa',
  password: 'mayito',   
  server: 'PAULAG\\SQLEXPRESS',
  database: 'jardineria',
  options: {
    trustServerCertificate: true,
    encrypt: false
  }
};



export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        //const result = await pool.request().query('SELECT * FROM cliente');
        //console.log(result.recordset);
        return pool;
    } catch (error) {
        console.log(error);
    }
};

