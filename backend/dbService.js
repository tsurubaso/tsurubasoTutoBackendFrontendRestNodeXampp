const mysql = require("mysql");
const dotenv = require("dotenv");
let instance = null;
dotenv.config();

console.log("Service working now");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DBUSERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("db " + connection.state);
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();

  }

  async getAllFromStudent() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM student";
        connection.query(query, (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result);
        });
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }





}

module.exports = DbService;
