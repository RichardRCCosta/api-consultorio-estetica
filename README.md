## 📌 API - Consultório de Estética

API RESTful para gerenciamento de um consultório de estética, desenvolvida com Node.js, Express e MongoDB. A aplicação permite o cadastro e controle de pacientes, profissionais, procedimentos e agendamentos.

---

### 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- Nodemon (para desenvolvimento)

---

### 📁 Estrutura do Projeto

```
api-consultorio-estetica-main/
│
├── server.js                   # Inicialização do servidor
├── package.json                # Dependências e scripts
└── src/
    ├── app.js                  # Configuração do app Express
    ├── config/
    │   └── dbConnect.js        # Conexão com o banco MongoDB
    ├── controllers/            # Lógica dos endpoints
    ├── dtos/                   # Objetos de transferência de dados
    ├── models/                 # Modelos do Mongoose
    ├── repositories/           # Acesso ao banco de dados
    ├── routes/                 # Definição das rotas
    └── services/               # Regras de negócio
```

---

### ⚙️ Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/api-consultorio-estetica.git
cd api-consultorio-estetica
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o banco MongoDB:**

Altere a string de conexão em `src/config/dbConnect.js` com sua URL MongoDB.

4. **Inicie o servidor:**

```bash
npm start
```

O servidor rodará por padrão na porta `3000`.

---

### 📨 Endpoints Principais

| Método | Rota                         | Descrição                          |
|--------|------------------------------|------------------------------------|
| GET    | `/pacientes`                | Lista todos os pacientes           |
| POST   | `/pacientes`                | Cadastra um novo paciente          |
| PUT    | `/pacientes/:id`            | Atualiza um paciente               |
| DELETE | `/pacientes/:id`            | Remove um paciente                 |
| GET    | `/profissionais`            | Lista todos os profissionais       |
| POST   | `/procedimentos`            | Cadastra um procedimento           |
| POST   | `/agendamentos`             | Cria um novo agendamento           |

---

### 👤 Autor

- **Seu Nome** - [@seu-usuario](https://github.com/seu-usuario)
