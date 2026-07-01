const express = require("express");

const cors = require("cors");



const app = express();

app.use(cors());

app.use(express.json());



let contacts = [

    {

        id:1,

        name: "Arthur Hanquier",

        email: "arthurhanquier081@gmail.com",

        phone: "+55(21)98284-7631"

},

    {

        id:2,

        name: "Allan Andrade",

        email: "allanmagodoti@gmail.com",

        phone: "+55(21)98112-5965"

},

    {

        id:3,

        name: "Anakin Skywalker",

        email: "anakinskywalker@gmail.com",

        phone: "+55(21)2571-4301"

}

];

let nextId = 4;



app.get("/",(req, res) => {res.json({

    message: "API Minha Agenda"

})});//callback functions e arrow functions



//localhost:8080/



app.get("/contatos",(req, res) => {

    res.json(contacts);

});



app.get("/contato/:id",(req, res) => {

    const id = Number(req.params.id);



    const contact = contacts.find(contact => contact.id === id);

    

    //tratamento de erro: caso Id nao encontrado

    if (!contact) {

        return res.status(400).json({

            message: "Contato não encontrado"

        });

    };



    res.json(contact);

});



app.post("/contatos",(req, res) => {

    const { name, email, phone } = req.body || {};

    

    const NewContact = {

        id: nextId,

        name,

        email,

        phone

    }

    contacts.push(NewContact);

    nextId++



    res.status(201).json(NewContact);

});



app.put("/contato/:id",(req, res) => {

    const id = Number(req.params.id);



    const { name, email, phone } = req.body || {};



    const contact = contacts.find(contact => contact.id === id)



    //tratamento de erro: se nao houver o contato

    if (!contact) {

        return res.status(404).json(

            {

                message: "Contato não encontrado"

            });

    };

    

    if (name !== undefined) {

        contact.name = name;

    };

    

    if (email !== undefined) {

        contact.email = email;

    };

    

    if (phone !== undefined) {

        contact.phone = phone;

    };



    res.json(contact);

});





app.delete("/contato/:id",(req, res) => {

    const id = Number(req.params.id);



    contactExists = contacts.some(contact => contact.id === id );



    // tratamento de erro: Se o contato nao existir

    if (!contactExists) {

        return res.status(404).json({

            message: "Contato inexistente"

        });

    };



    contacts = contacts.filter(contact => contact.id !== id);



    res.status(204).send();

});







app.listen(8080, () => {

    console.log("Servidor rodando na porta 8080")

})