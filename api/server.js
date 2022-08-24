// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/todo", {
//     userNewUriParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log("Connected to MongoDB"))
//     .catch(console.error);

// const Todo = require('./models/Todo');

// app.get('./todos', async(req, res)=>{
//     const todos = await Todo.find();
//     res.json(todos);
// });

// app.listen(3001, () => console.log("Server started on port 3001"));




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

// Models
const Todo = require('./models/Todo');

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();

    res.json(todos);
});


app.listen(3001, () => console.log("Server started on port 3001"));