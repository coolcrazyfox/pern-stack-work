const db = require('../db')
class OemController{

    async createOem(req,res){
        try{
            const {oem_number } = req.body
            const newOem = await db.query('INSERT INTO oem (oem_number) values ($1) RETURNING *', [oem_number])
            res.json(newOem.rows[0])
            console.log(oem_number)
        }catch (e){
            res.status(500).json(e)
            console.error(e.message)
        }

    }
    async getAllOem(req,res){
        try{
            const allOem =await db.query('SELECT * FROM oem')
            res.json(allOem.rows)
        }catch (e){
            res.status(500).json(e)
            console.error(e.message)
        }
    }
    async getOneOem(req,res){
        try{
            const id = req.params.id
            const oemItem =await db.query('SELECT * FROM oem WHERE id = $1', [id])
            res.json(oemItem.rows[0])
        }catch (e){
            res.status(500).json(e)
            console.error(e.message)
        }

    }
    async updateOem(req,res){
        try{
            const {
                id,
                oem_number
            } =req.body
            if (!id){
                res.status(400).json({message:"id isn't specified"})
            }
            const oemItem = await db.query('UPDATE  oem SET oem_number = $1  WHERE id = $2 RETURNING *',
                [ oem_number, id]
            )
            res.json("oemItem was updated in table oem")
            res.json(oemItem.rows[0])
        }catch (e){
            res.status(500).json(e.message)
            console.error(e.message)
        }
    }
    async deleteOem(req,res){
        try{
            const id = req.params.id
            if (!id){
                res.status(400).json({message:"id isn't specified"})
            }
            const oemItem =await db.query('DELETE FROM oem WHERE id = $1', [id])
            res.json("oemItem was deleted in table oem !")
            res.json(oemItem.rows[0])
        }catch (e){
            res.status(500).json(e)
            console.error(e.message)
        }


    }
    // async getOemByManual(req,res){
    //     try{
    //         const id = req.query.id
    //         const oemItems = await db.query(`SELECT * FROM oem WHERE oem_id = $1`, [id])
    //         res.json(oemItems.rows)
    //     }catch (e){
    //         res.status(500).json(e)
    //     }
    //
    //
    //
    // }

}
module.exports = new OemController()
