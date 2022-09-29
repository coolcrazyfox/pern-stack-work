const db =require('../db')

class ManualController{
    async createManual(req,res){
        try{
            const{
                model,
                device,
                analog_oem,
                link,
                image,
                datetime
            }=req.body
            const newManual =await db.query(`INSERT INTO manual (model,  device, analog_oem,  link, image, datetime) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [
                model,
                device,
                analog_oem,
                link,
                image,
                datetime
                ])
            console.log(model,
                device,
                analog_oem,
                link,
                image,
                datetime)
            res.json(newManual.rows[0])
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getManual(req,res){
        try{
            const manuals =await db.query('SELECT * FROM manual')
            res.json(manuals.rows)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getOneManual(req,res){
        try{
            const id = req.params.id
            const manual =await db.query('SELECT * FROM manual WHERE id = $1', [id])
            res.json(manual.rows[0])
        }catch (e){
            res.status(500).json(e)
        }

    }
    async updateManual(req,res){
        try{
            const {
                id,
                model,
                device,
                analog_oem,
                link,
                image,
                datetime
            } =req.body
            if (!id){
                res.status(400).json({message:"id isn't specified"})
            }
            const manual = await db.query('UPDATE  manual SET model = $1 ,  device = $2,  analog_oem = $3,  link = $4, image = $5, datetime = $6 WHERE id = $7 RETURNING *',
                [
                    model,
                    device,
                    analog_oem,
                    link,
                    image,
                    datetime,
                    id]
            )
            res.json(manual.rows[0])
        }catch (e){
            res.status(500).json(e.message)
            console.error(error.message)
        }
    }
    async deleteManual(req,res){
        try{
            const id = req.params.id
            if (!id){
                res.status(400).json({message:"id isn't specified"})
            }
            const manual =await db.query('DELETE FROM manual WHERE id = $1', [id])
            res.json(manual.rows[0])
        }catch (e){
            res.status(500).json(e)
            console.error(error.message)
        }


    }
}
module.exports = new ManualController()
