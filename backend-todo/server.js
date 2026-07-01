//api do todoApp



const express = require("express");

const cors = require("cors");



const app = express();

const PORT = 8181;



app.use(cors());

app.use(express.json());



let tasks = [

  {

    id: 1,

    title: "Estudar para o Banco do Brasil",

    completed: true

  },

    {

        id: 2,

    title: "Estudar para a Caixa Econômica",

    completed: true

},

    {

        id: 3,

    title: "Assinar a posse em concurso bancário",

    completed: false

},

    {

        id: 4,

    title: "Concluir uma graduação de ensino superior",

    completed: false

},

    {

        id: 5,

    title: "Começar a focar em concursos da minha especialidade após o concurso bancário",

    completed: false

}

];



let nextId = 6;



// Rota inicial

app.get("/", (req, res) => {

  res.send("API TodoApp rodando!");

});



// Listar tarefas

app.get("/api/tasks", (req, res) => {

  res.json(tasks);

});



// Buscar tarefa por ID

app.get("/api/tasks/:id", (req, res) => {

  const id = Number(req.params.id);



  const task = tasks.find(t => t.id === id);



  if (!task) {

    return res.status(404).json({ message: "Tarefa não encontrada" });

  }



  res.json(task);

});



// Criar tarefa

app.post("/api/tasks", (req, res) => {

  const { title } = req.body;



  if (!title) {

    return res.status(400).json({ message: "O título é obrigatório" });

  }



  const newTask = {

    id: nextId++,

    title,

    completed: false

  };



  tasks.push(newTask);



  res.status(201).json(newTask);

});



// Atualizar tarefa

app.put("/api/tasks/:id", (req, res) => {

  const id = Number(req.params.id);

  const { title, completed } = req.body;



  const task = tasks.find(t => t.id === id);



  if (!task) {

    return res.status(404).json({ message: "Tarefa não encontrada" });

  }



  if (title !== undefined) {

    task.title = title;

  }



  if (completed !== undefined) {

    task.completed = completed;

  }



  res.json(task);

});



// Deletar tarefa

app.delete("/api/tasks/:id", (req, res) => {

  const id = Number(req.params.id);



  const taskExists = tasks.some(t => t.id === id);



  if (!taskExists) {

    return res.status(404).json({ message: "Tarefa não encontrada" });

  }



  tasks = tasks.filter(t => t.id !== id);



  res.json({ message: "Tarefa removida com sucesso" });

});



app.listen(PORT, () => {

  console.log(`Servidor rodando em http://localhost:${PORT}`);

});