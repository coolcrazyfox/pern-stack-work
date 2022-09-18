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
// create todo_
app.get('/', async (req, res )=>{

})
app.post("/device", async (req, res) => {
    try {
        const {
            model,
            country,
            device,
            oem,
            count_ebay,
            price_ebay,
            price_store,
            count_store,
            link,
            image,
            datetime
        } = req.body
        const newTodo = await pool.query("INSERT INTO ebaytab (model, country, device, oem, count_ebay, price_ebay, price_store, count_store, link, image, datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 ) RETURNING *",
            [
                model,
                country,
                device,
                oem,
                count_ebay,
                price_ebay,
                price_store,
                count_store,
                link,
                image,
                datetime
            ])
        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

// get all todos
app.get("/device", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM ebaytab")
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// get a todo_
app.get("/device/:id", async (req, res) => {
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

// update a todo_
app.put("/device/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            model,
            country,
            device,
            oem,
            count_ebay,
            price_ebay,
            price_store,
            count_store,
            link,
            image,
            datetime
        } = req.body;
        const updateDevice = await pool.query("UPDATE  ebaytab SET model = $1 , country = $2, device = $3, oem = $4, count_ebay = $5, price_ebay = $6, price_store = $7, count_store = $8, link = $9, image = $10, datetime = $11 WHERE id = $12",
            [
                model,
                country,
                device,
                oem,
                count_ebay,
                price_ebay,
                price_store,
                count_store,
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
        res.json("device was updated")
    } catch (error) {
        console.error(error.message)
    }
})

// delete a todo_
app.delete("/device/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deleteTodo = await pool.query("DELETE FROM ebaytab WHERE id = $1", [id])
        res.json("device was deleted!")
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`server has started on port ${process.env.PORT || 5000}`)
})
