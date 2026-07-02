# 🍎 Nuvitta Backend

<div align="center">

## Gestão inteligente para profissionais de nutrição

Uma plataforma completa para nutricistas gerenciarem pacientes, avaliações, planos alimentares e evolução nutricional.

</div>

---

# 📖 Sobre o projeto

O **Nuvitta** é um sistema de gestão nutricional desenvolvido para auxiliar nutricionistas no acompanhamento completo de seus pacientes.


---

# 🎯 Objetivo

Criar uma plataforma onde nutricionistas possam:

* 👤 Gerenciar pacientes
* 📊 Registrar avaliações antropométricas
* 🥗 Criar planos alimentares personalizados
* 📈 Acompanhar evolução dos pacientes
* 📄 Gerar relatórios nutricionais
* 🤖 Utilizar inteligência artificial como assistente nutricional

---

# 🛠 Tecnologias utilizadas

## Backend

* NestJS
* Node.js
* TypeScript
* TypeORM
* MySQL
* Class Validator
* Class Transformer

## Futuro Frontend

* React
* Next.js
* Tailwind CSS
* Shadcn UI

---

# 🏗 Arquitetura

O projeto utiliza uma arquitetura modular baseada no NestJS.

Fluxo da aplicação:

```
Cliente
   |
   ↓
Controller
   |
   ↓
Service
   |
   ↓
Repository
   |
   ↓
Database
```

Responsabilidades:

### Controllers

Responsáveis por receber as requisições HTTP e direcionar para os serviços.

### Services

Contêm as regras de negócio da aplicação.

### Entities

Representam as tabelas e relacionamentos do banco de dados.

### DTOs

Responsáveis pela validação e transferência dos dados.

---

# 🚀 Como executar

## Clone o repositório

```bash
git clone https://github.com/JhonatanMiranda221/nuvitta-api.git
```

## Instale as dependências

```bash
npm install
```

## Configure as variáveis de ambiente

```bash
cp .env.example .env
```

## Inicie o servidor

```bash
npm run start:dev
```

Servidor disponível em:

```
http://localhost:4000
```

---

# ⚙️ Variáveis de ambiente

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_NAME=db_nuvitta
DB_SYNC=true
```

---

# 📦 Módulos

## ✅ Nutricionista

Módulo responsável pelo gerenciamento dos profissionais.

Funcionalidades:

* Cadastro de nutricionistas
* Atualização de informações
* Busca por ID
* Busca por nome
* Controle de CRN

Rotas:

| Método | Rota                      | Descrição              |
| ------ | ------------------------- | ---------------------- |
| GET    | /nutricionista            | Lista todos            |
| GET    | /nutricionista/:id        | Busca por ID           |
| GET    | /nutricionista/nome/:nome | Busca por nome         |
| POST   | /nutricionista            | Cria nutricionista     |
| PUT    | /nutricionista/:id        | Atualiza nutricionista |
| DELETE | /nutricionista/:id        | Remove nutricionista   |

---

## ✅ Paciente

Módulo responsável pelo gerenciamento dos pacientes vinculados aos nutricistas.

Funcionalidades:

* Cadastro de pacientes
* Validação de dados
* Busca por ID
* Busca por nome
* Atualização de informações
* Controle de pacientes ativos
* Relacionamento Nutricionista → Pacientes

Relacionamento:

```
Nutricionista (1)
        |
        |
        N
Paciente
```

Rotas:

| Método | Rota                 | Descrição         |
| ------ | -------------------- | ----------------- |
| GET    | /paciente            | Lista todos       |
| GET    | /paciente/:id        | Busca por ID      |
| GET    | /paciente/nome/:nome | Busca por nome    |
| POST   | /paciente            | Cria paciente     |
| PUT    | /paciente/:id        | Atualiza paciente |
| DELETE | /paciente/:id        | Remove paciente   |

---

# 🔜 Próximos módulos

| Módulo                             | Status                |
| ---------------------------------- | --------------------- |
| Avaliação Antropométrica           | 🔜 Em desenvolvimento |
| Alimentos (TACO + Open Food Facts) | 🔜 Planejado          |
| Plano Alimentar                    | 🔜 Planejado          |
| Refeições e Itens                  | 🔜 Planejado          |
| Exportação PDF                     | 🔜 Planejado          |
| Dashboard                          | 🔜 Planejado          |
| Autenticação JWT + bcrypt          | 🔜 Planejado          |
| Inteligência Artificial            | 🔜 Planejado          |
| Frontend React + Next.js           | 🔜 Planejado          |

---

# 🗺 Roadmap

* [x] Configuração inicial do NestJS
* [x] Módulo Nutricionista
* [x] Módulo Paciente
* [ ] Avaliação Antropométrica
* [ ] Banco de alimentos TACO
* [ ] Integração Open Food Facts
* [ ] Plano Alimentar
* [ ] Refeições e Itens
* [ ] Exportação PDF
* [ ] Dashboard
* [ ] Autenticação JWT + bcrypt
* [ ] Inteligência Artificial
* [ ] Frontend React + Next.js

---

# 👨‍💻 Autor

**Jhonatan Miranda**

Desenvolvedor Backend em formação com foco em Node.js e NestJS.

Projeto desenvolvido com objetivo de aplicar boas práticas de arquitetura, organização de código e desenvolvimento de uma aplicação real.

🔗 Links:

GitHub:
github.com/JhonatanMiranda221

LinkedIn:
linkedin.com/in/devjhonatanmiranda
