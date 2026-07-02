import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // 1. Buscar tarefas do seu back-end (Porta 8181)
  const buscarTarefas = async () => {
    try {
      const resposta = await fetch('http://localhost:8181/api/tasks');
      const dados = await resposta.json();
      setTasks(dados);
    } catch (erro) {
      console.error("Erro ao buscar tarefas:", erro);
    }
  };

  useEffect(() => {
    buscarTarefas();
  }, []);

  // 2. Adicionar tarefa no back-end
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (taskInput.trim() === '') return;

    try {
      const resposta = await fetch('http://localhost:8181/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: taskInput })
      });

      if (resposta.status === 201) {
        setTaskInput('');
        buscarTarefas(); // Recarrega a lista
      }
    } catch (erro) {
      console.error("Erro ao adicionar tarefa:", erro);
    }
  };

  // 3. Deletar tarefa no back-end
  const handleDeleteTask = async (id) => {
    try {
      const resposta = await fetch(`http://localhost:8181/api/tasks/${id}`, {
        method: 'DELETE'
      });
      if (resposta.ok) {
        buscarTarefas();
      }
    } catch (erro) {
      console.error("Erro ao deletar tarefa:", erro);
    }
  };

  // 4. Alternar status concluído (Opcional - usando o seu PUT)
  const handleToggleTask = async (task) => {
    try {
      await fetch(`http://localhost:8181/api/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !task.completed })
      });
      buscarTarefas();
    } catch (erro) {
      console.error("Erro ao atualizar tarefa:", erro);
    }
  };

  return (
    <div className="container-mobile">
      <div className="smartphone-screen">
        <div className="app-header">
          <h1>Minhas Tarefas</h1>
          <span>Prática 4 - Interface Mobile</span>
        </div>

        <form onSubmit={handleAddTask} className="todo-form">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="todo-input"
          />
          <button type="submit" className="todo-button">+</button>
        </form>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Tudo pronto por aqui! 🎉</p>
          ) : (
            <ul>
              {tasks.map(task => (
                <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <p onClick={() => handleToggleTask(task)} style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none', opacity: task.completed ? 0.5 : 1 }}>
                    {task.title}
                  </p>
                  <button onClick={() => handleDeleteTask(task.id)} className="delete-btn">X</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;