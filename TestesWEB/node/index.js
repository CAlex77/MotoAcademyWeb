// const moduloA = require('./moduloA')

// const valorIndex = 20;

// function pegarValorIndex(){
//     const valorIndex = 20;
//     console.log('valor index = '+valorIndex);
    
// }

// pegarValorIndex()

// moduloA.valorModuloA()

const express = require('express');

const app = express();
const port = 3333;

let users = [
    {id:1, name: "Euclides"},
    {id:2, name: "Carlos"},
    {id:3, name: "Victor"},
];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get('/users/:id', function(req, res){
    const id = parseInt(req.params.id)
    const userIndex = users.find(user => user.id === id);
    console.log(userIndex);

    if(userIndex) {
        res.json(userIndex)
    }
    else {
        res.status(404).json({message: "Usuario nao encontrado"})
    }
})

app.post("/users", (req, res) => {
    const {name} = req.body;
    const id = users.length+1;

    const newUser = {id, name};

    users.push(newUser);
    res.status(201).json(newUser);
});

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    users = users.filter((user) => user.id !== id);

    res.sendStatus(204)
})

app.put('users/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    const {name} = req.body
    userIndex = users.findIndex(user => user.id === id);

    if(userIndex != -1) {
        users[userIndex].name = name;
        res.json(users[userIndex])
    }
    else {
        res.status(400).json({message: "Usuario nao encontrado"})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});