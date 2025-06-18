# 💆‍♀️ API de Consultório de Estética

Uma **API RESTful completa** para gerenciar as operações de um consultório de estética, incluindo o controle de **pacientes**, **profissionais**, **procedimentos** e **agendamentos**.

---

## 📌 Descrição

Este projeto consiste em uma **API robusta e escalável** construída com **Node.js** e **Express.js**, seguindo uma arquitetura **em camadas** (Controllers, Services, Repositories) que garante **organização, legibilidade e manutenção eficiente**.

* 🔐 Autenticação via **JWT**
* 📄 Documentação interativa com **Swagger**
* 🧠 Lógica de negócio bem definida com uso de **DTOs**

---

## 🚀 Funcionalidades Principais

* ✅ **CRUD de Pacientes**
* ✅ **CRUD de Profissionais**
* ✅ **CRUD de Procedimentos**
* ✅ **CRUD de Agendamentos** com regras de negócio
* 🔐 **Login com geração de Token JWT**
* 📘 **Swagger** para documentação interativa da API

---

## 🧱 Arquitetura do Projeto

```
📁 src
├── 📂 controllers     # Recebem requisições e retornam respostas
├── 📂 services        # Lógica de negócio
├── 📂 repositories    # Comunicação com o banco de dados
├── 📂 models          # Schemas do Mongoose
├── 📂 routes          # Definição de rotas e middlewares
├── 📂 middlewares     # Funções de autenticação e validações
└── 📂 dtos            # Objetos de transferência de dados
```

---

## 🛠️ Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [JWT](https://jwt.io/)
* [Swagger](https://swagger.io/)
* [dotenv](https://github.com/motdotla/dotenv)

---

## ✅ Pré-requisitos

* Node.js `v14+`
* NPM ou Yarn
* MongoDB (local ou Atlas)

---

## ⚙️ Instalação e Execução

```bash
# 1. Clone o repositório
git clone https://URL-DO-SEU-REPOSITORIO.git
cd nome-do-diretorio

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
touch .env
```

### 🧾 Exemplo do arquivo `.env`

```env
DB_CONNECTION_STRING=mongodb+srv://<user>:<password>@cluster.mongodb.net/sua-database
JWT_SECRET=seu-segredo-super-secreto
```

```bash
# 4. Inicie o servidor
npm start
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 📚 Documentação da API (Swagger)

Acesse no navegador:

🔗 [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## 🌐 Endpoints da API

### 🔐 Autenticação

| Método | Rota     | Descrição                               | Autenticação |
| ------ | -------- | --------------------------------------- | ------------ |
| POST   | `/login` | Realiza o login e retorna um token JWT. | ❌ Pública    |

> 💡 A senha é o **telefone** do profissional.

---

### 👤 Pacientes

| Método | Rota              | Descrição                | Autenticação |
| ------ | ----------------- | ------------------------ | ------------ |
| GET    | `/pacientes`      | Lista todos os pacientes | ✅ JWT        |
| GET    | `/pacientes/{id}` | Busca paciente por ID    | ✅ JWT        |
| POST   | `/pacientes`      | Cria um novo paciente    | ✅ JWT        |
| PUT    | `/pacientes/{id}` | Atualiza paciente por ID | ✅ JWT        |
| DELETE | `/pacientes/{id}` | Remove paciente por ID   | ✅ JWT        |

---

### 👩‍⚕️ Profissionais

| Método | Rota                  | Descrição                    | Autenticação |
| ------ | --------------------- | ---------------------------- | ------------ |
| GET    | `/profissionais`      | Lista todos os profissionais | ✅ JWT        |
| GET    | `/profissionais/{id}` | Busca profissional por ID    | ✅ JWT        |
| POST   | `/profissionais`      | Cria um novo profissional    | ✅ JWT        |
| PUT    | `/profissionais/{id}` | Atualiza profissional por ID | ✅ JWT        |
| DELETE | `/profissionais/{id}` | Remove profissional por ID   | ✅ JWT        |

---

### 💅 Procedimentos

| Método | Rota                  | Descrição                    | Autenticação |
| ------ | --------------------- | ---------------------------- | ------------ |
| GET    | `/procedimentos`      | Lista todos os procedimentos | ✅ JWT        |
| GET    | `/procedimentos/{id}` | Busca procedimento por ID    | ✅ JWT        |
| POST   | `/procedimentos`      | Cria um novo procedimento    | ✅ JWT        |
| PUT    | `/procedimentos/{id}` | Atualiza procedimento por ID | ✅ JWT        |
| DELETE | `/procedimentos/{id}` | Remove procedimento por ID   | ✅ JWT        |

---

### 📅 Agendamentos

| Método | Rota                 | Descrição                   | Autenticação |
| ------ | -------------------- | --------------------------- | ------------ |
| GET    | `/agendamentos`      | Lista todos os agendamentos | ✅ JWT        |
| GET    | `/agendamentos/{id}` | Busca agendamento por ID    | ✅ JWT        |
| POST   | `/agendamentos`      | Cria um novo agendamento    | ✅ JWT        |
| PUT    | `/agendamentos/{id}` | Atualiza agendamento por ID | ✅ JWT        |
| DELETE | `/agendamentos/{id}` | Remove agendamento por ID   | ✅ JWT        |

---
