import mssql from 'mssql'
export const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}




export async function dbConnection (){
    try {

       const pool = await mssql.connect(sqlConfig)
        console.log('Database connected Successfully')
        return pool
        
    } catch (error) {
        
        console.log(error)
    }

}






