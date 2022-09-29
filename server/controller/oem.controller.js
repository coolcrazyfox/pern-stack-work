const db = require('../db')
class OemController{

    async createOem(req,res){
        try{
            const {oem_number, oem_id} = req.body
            const newOem = await db.query('INSERT INTO oem (oem_number, oem_id) values ($1, $2) RETURNING *', [oem_number, oem_id])
            res.json(newOem.rows[0])
        }catch (e){
            res.status(500).json(e)
        }

    }
    async getOemByManual(req,res){
        try{
            const id = req.query.id
            const oemItems = await db.query(`SELECT * FROM oem WHERE oem_id = $1`, [id])
            res.json(oemItems.rows)
        }catch (e){
            res.status(500).json(e)
        }



    }

}
module.exports = new OemController()
