const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password:'man21061985xxx',
    host:'localhost',
    port:5432,
    database:'razborka'

})
module.exports = pool
