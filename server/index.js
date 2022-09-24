const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db");

// https://github.com/topics/pern-stack
// https://github.com/robdcal/todo-fullstack
// https://github.com/dfbq91/pern-crud-app

// middleware
app.use(cors())
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Routes
// create device

// app.get('/', async (req, res )=>{
//
// })


// all site table
// create device
app.post("/device/all", async (req, res) => {
    try {
        const {
            model,
            country,
            device,
            oem,
            analog_oem,
            count,
            price,
            link,
            image,
            datetime
        } = req.body
        const newTodo = await pool.query("INSERT INTO allsitetab (model, country, device, oem, analog_oem, count, price, link, image, datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 ) RETURNING *",
            [
                model,
                country,
                device,
                oem,
                analog_oem,
                count,
                price,
                link,
                image,
                datetime
            ])
        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// get all device
app.get("/device/all", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM allsitetab")
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// get a device
app.get("/device/all/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deviceItem = await pool.query("SELECT * FROM allsitetab WHERE id = $1", [id])
        res.json(deviceItem.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// update a device
app.put("/device/all/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            model,
            country,
            device,
            oem,
            analog_oem,
            count,
            price,
            link,
            image,
            datetime
        } = req.body;
        const updateDevice = await pool.query("UPDATE  allsitetab SET model = $1 , country = $2, device = $3, oem = $4, analog_oem = $5, count = $6, price = $7, link = $8, image = $9, datetime = $10 WHERE id = $11",
            [
                model,
                country,
                device,
                oem,
                analog_oem,
                count,
                price,
                link,
                image,
                datetime,
                id
            ])
        // if (description) {
        //     const editTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        // } else if (completed) {
        //     const completeTodo = await pool.query("UPDATE todo SET completed = $1 WHERE todo_id = $2", [completed, id])
        // }
        res.json("device was updated in table allSiteTab")
    } catch (error) {
        console.error(error.message)
    }
})

// delete a device
app.delete("/device/all/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deleteTodo = await pool.query("DELETE FROM allsitetab WHERE id = $1", [id])
        res.json("device was deleted in table allSiteTab !")
    } catch (error) {
        console.error(error.message)
    }
})


//analog table
// create analog device
app.post("/device/analog", async (req, res) => {
    try {
        const {
            model,
            device,
            analog_oem,
            link,
            image,
            datetime
        } = req.body
        const newTodo = await pool.query("INSERT INTO analogtab (model, device, analog_oem, link, image, datetime) VALUES ($1, $2, $3, $4, $5, $6 ) RETURNING *",
            [
                model,
                device,
                analog_oem,
                link,
                image,
                datetime
            ])
        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// get all analog device
app.get("/device/analog", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM analogtab")
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// get a analog device
app.get("/device/analog/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deviceItem = await pool.query("SELECT * FROM analogtab WHERE id = $1", [id])
        res.json(deviceItem.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// update a analog device
app.put("/device/analog/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            model,
            device,
            analog_oem,
            link,
            image,
            datetime
        } = req.body;
        const updateDevice = await pool.query("UPDATE  analogtab SET model = $1 ,  device = $2, analog_oem = $3,  link = $4, image = $5, datetime = $6 WHERE id = $7",
            [
                model,
                device,
                analog_oem,
                link,
                image,
                datetime,
                id
            ])
        res.json("device was updated in analogTab")
    } catch (error) {
        console.error(error.message)
    }
})

// delete a analog device
app.delete("/device/analog/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deleteTodo = await pool.query("DELETE FROM analogtab WHERE id = $1", [id])
        res.json("device was deleted in analogTab!")
    } catch (error) {
        console.error(error.message)
    }
})


//ebay table
// create ebay device
app.post("/device/ebay", async (req, res) => {
    try {
        const {
            model,
            country,
            device,
            oem,
            count,
            price,
            // price_store,
            // count_store,
            link,
            image,
            datetime
        } = req.body
        const newTodo = await pool.query("INSERT INTO ebaytab (model, country, device, oem, count, price,  link, image, datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 ) RETURNING *",
            [
                model,
                country,
                device,
                oem,
                count,
                price,
                // price_store,
                // count_store,
                link,
                image,
                datetime
            ])
        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// get all ebay device
app.get("/device/ebay", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM ebaytab")
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// get a ebay device
app.get("/device/ebay/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deviceItem = await pool.query("SELECT * FROM ebaytab WHERE id = $1", [id])
        res.json(deviceItem.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// update a ebay device
app.put("/device/ebay/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            model,
            country,
            device,
            oem,
            count,
            price,
            // price_store,
            // count_store,
            link,
            image,
            datetime
        } = req.body;
        const updateDevice = await pool.query("UPDATE  ebaytab SET model = $1 , country = $2, device = $3, oem = $4, count = $5, price = $6,  link = $7, image = $8, datetime = $9 WHERE id = $10",
            [
                model,
                country,
                device,
                oem,
                count,
                price,
                // price_store,
                // count_store,
                link,
                image,
                datetime,
                id
            ])
        // if (description) {
        //     const editTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        // } else if (completed) {
        //     const completeTodo = await pool.query("UPDATE todo SET completed = $1 WHERE todo_id = $2", [completed, id])
        // }
        res.json("device was updated in ebayTab")
    } catch (error) {
        console.error(error.message)
    }
})

// delete a ebay device
app.delete("/device/ebay/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deleteTodo = await pool.query("DELETE FROM ebaytab WHERE id = $1", [id])
        res.json("device was deleted in ebayTab!")
    } catch (error) {
        console.error(error.message)
    }
})


//bamper table
// create bamper device
app.post("/device/bamper", async (req, res) => {
    try {
        const {
            model,
            country,
            device,
            oem,
            count,
            price,
            link,
            image,
            datetime
        } = req.body
        const newTodo = await pool.query("INSERT INTO bampertab (model, country, device, oem, count, price, link, image, datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 ) RETURNING *",
            [
                model,
                country,
                device,
                oem,
                count,
                price,
                link,
                image,
                datetime
            ])
        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// get all bamper device
app.get("/device/bamper", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM bampertab")
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// get a bamper device
app.get("/device/bamper/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deviceItem = await pool.query("SELECT * FROM bampertab WHERE id = $1", [id])
        res.json(deviceItem.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// update a bamper device
app.put("/device/bamper/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            model,
            country,
            device,
            oem,
            count,
            price,
            link,
            image,
            datetime
        } = req.body;
        const updateDevice = await pool.query("UPDATE  bampertab SET model = $1 , country = $2, device = $3, oem = $4, count = $5, price = $6, link = $7, image = $8, datetime = $9 WHERE id = $10",
            [
                model,
                country,
                device,
                oem,
                count,
                price,
                link,
                image,
                datetime,
                id
            ])
        // if (description) {
        //     const editTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        // } else if (completed) {
        //     const completeTodo = await pool.query("UPDATE todo SET completed = $1 WHERE todo_id = $2", [completed, id])
        // }
        res.json("device was updated in bamperTab")
    } catch (error) {
        console.error(error.message)
    }
})

// delete a bamper device
app.delete("/device/bamper/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deleteTodo = await pool.query("DELETE FROM bampertab WHERE id = $1", [id])
        res.json("device was deleted in bamperTab!")
    } catch (error) {
        console.error(error.message)
    }
})


//avita table
// create avita device
app.post("/device/avita", async (req, res) => {
    try {
        const {
            model,
            country,
            device,
            oem,
            count,
            price,
            link,
            image,
            datetime
        } = req.body
        const newTodo = await pool.query("INSERT INTO avitatab (model, country, device, oem, count, price, link, image, datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 ) RETURNING *",
            [
                model,
                country,
                device,
                oem,
                count,
                price,
                link,
                image,
                datetime
            ])
        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// get all avita device
app.get("/device/avita", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM avitatab")
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// get a avita device
app.get("/device/avita/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deviceItem = await pool.query("SELECT * FROM avitatab WHERE id = $1", [id])
        res.json(deviceItem.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// update a avita device
app.put("/device/avita/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            model,
            country,
            device,
            oem,
            count,
            price,
            link,
            image,
            datetime
        } = req.body;
        const updateDevice = await pool.query("UPDATE  avitatab SET model = $1 , country = $2, device = $3, oem = $4, count = $5, price = $6, link = $7, image = $8, datetime = $9 WHERE id = $10",
            [
                model,
                country,
                device,
                oem,
                count,
                price,
                link,
                image,
                datetime,
                id
            ])
        // if (description) {
        //     const editTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        // } else if (completed) {
        //     const completeTodo = await pool.query("UPDATE todo SET completed = $1 WHERE todo_id = $2", [completed, id])
        // }
        res.json("device was updated in avitaTab")
    } catch (error) {
        console.error(error.message)
    }
})

// delete a avita device
app.delete("/device/avita/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deleteTodo = await pool.query("DELETE FROM avitatab WHERE id = $1", [id])
        res.json("device was deleted in avitaTab!")
    } catch (error) {
        console.error(error.message)
    }
})


//store table
// create store device
app.post("/device/store", async (req, res) => {
    try {
        const {
            model,
            country,
            device,
            oem,
            count,
            price,
            link,
            image,
            datetime
        } = req.body
        const newTodo = await pool.query("INSERT INTO storetab (model, country, device, oem, count, price, link, image, datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 ) RETURNING *",
            [
                model,
                country,
                device,
                oem,
                count,
                price,
                link,
                image,
                datetime
            ])
        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// get all store device
app.get("/device/store", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM storetab")
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// get a store device
app.get("/device/store/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deviceItem = await pool.query("SELECT * FROM storetab WHERE id = $1", [id])
        res.json(deviceItem.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// update a store device
app.put("/device/store/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            model,
            country,
            device,
            oem,
            count,
            price,
            link,
            image,
            datetime
        } = req.body;
        const updateDevice = await pool.query("UPDATE  storetab SET model = $1 , country = $2, device = $3, oem = $4, count = $5, price = $6, link = $7, image = $8, datetime = $9 WHERE id = $10",
            [
                model,
                country,
                device,
                oem,
                count,
                price,
                link,
                image,
                datetime,
                id
            ])
        // if (description) {
        //     const editTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        // } else if (completed) {
        //     const completeTodo = await pool.query("UPDATE todo SET completed = $1 WHERE todo_id = $2", [completed, id])
        // }
        res.json("device was updated in storeTab")
    } catch (error) {
        console.error(error.message)
    }
})

// delete a store device
app.delete("/device/store/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deleteTodo = await pool.query("DELETE FROM storetab WHERE id = $1", [id])
        res.json("device was deleted in storeTab!")
    } catch (error) {
        console.error(error.message)
    }
})


app.listen(process.env.PORT || 5000, () => {
    console.log(`server has started on port ${process.env.PORT || 5000}`)
})
