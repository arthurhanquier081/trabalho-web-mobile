import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Estados para os campos do formulário e listagem da API
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [contatos, setContatos] = useState([]);

  // Requisição GET para buscar os contatos no back-end (Porta 8080)
  const buscarContatos = async () => {
    try {
      const resposta = await fetch('http://localhost:8080/contatos');
      const dados = await resposta.json();
      setContatos(dados);
    } catch (erro) {
      console.error("Erro ao buscar contatos:", erro);
    }
  };

  // Carrega a lista de contatos ao montar o componente
  useEffect(() => {
    buscarContatos();
  }, []);

  // Requisição POST para cadastrar um novo contato (Porta 8080)
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nome || !email || !telefone) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Enviando as propriedades em inglês (name, email, phone) que o seu back-end espera
    const novoContato = { name: nome, email: email, phone: telefone };

    try {
      const resposta = await fetch('http://localhost:8080/contatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoContato)
      });

      // Validação do status 201 e atualização da tela
      if (resposta.status === 201) {
        alert("Contato cadastrado com sucesso!");
        setNome('');
        setEmail('');
        setTelefone('');
        buscarContatos(); // Atualiza a lista automaticamente
      }
    } catch (erro) {
      console.error("Erro ao cadastrar contato:", erro);
    }
  };

  return (
    <div className="container-principal">
      <h2>Cadastro de Contatos - Minha Agenda</h2>
      
      {/* Formulário de cadastro de contatos */}
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label>Nome:</label>
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            placeholder="Digite o nome completo"
          />
        </div>

        <div className="campo">
          <label>E-mail:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="exemplo@gmail.com"
          />
        </div>

        <div className="campo">
          <label>Telefone:</label>
          <input 
            type="text" 
            value={telefone} 
            onChange={(e) => setTelefone(e.target.value)} 
            placeholder="(21) 99999-9999"
          />
        </div>

        <button type="submit" className="botao-salvar">Salvar Contato</button>
      </form>

      {/* Renderização da lista obtida da API */}
      <div className="lista-contatos">
        <h3>Contatos Salvos</h3>
        {contatos.length === 0 ? (
          <p>Nenhum contato cadastrado ainda.</p>
        ) : (
          <ul>
            {contatos.map((contato) => (
              <li key={contato.id} className="contato-item">
                <strong>{contato.name}</strong> - {contato.email} - {contato.phone}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;