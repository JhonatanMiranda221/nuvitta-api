<div align="center">

# 🍎 Nuvitta Backend

**Gestão inteligente para profissionais de nutrição**

Uma plataforma completa para nutricionistas gerenciarem pacientes, avaliações e evolução nutricional.

> ⚠️ Projeto em construção — funcionalidades sendo implementadas ativamente.

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white)](https://typeorm.io/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

</div>

---

## 📖 Sobre o projeto

O **Nuvitta** é um sistema de gestão nutricional desenvolvido para auxiliar nutricionistas no acompanhamento completo de seus pacientes.

> **Origem do nome:** Nutrição + *Vita* (vida em latim)

---

## 🎯 Objetivo

Criar uma plataforma onde nutricionistas possam:

- 👤 Gerenciar pacientes
- 📊 Registrar avaliações antropométricas
- 📈 Acompanhar evolução dos pacientes
- 💰 Controlar financeiro da clínica
- 📄 Gerar relatórios nutricionais
- 🤖 Utilizar inteligência artificial como assistente nutricional

---

## 🛠 Tecnologias utilizadas

### Backend
- NestJS
- Node.js
- TypeScript
- TypeORM
- MySQL
- Class Validator
- Class Transformer

### Futuro Frontend
- React
- Next.js
- Tailwind CSS
- Shadcn UI

---

## 🏗 Arquitetura

O projeto utiliza uma arquitetura modular baseada no NestJS.

**Fluxo da aplicação:**

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

**Responsabilidades:**

- **Controllers** — Responsáveis por receber as requisições HTTP e direcionar para os serviços.
- **Services** — Contêm as regras de negócio da aplicação.
- **Entities** — Representam as tabelas e relacionamentos do banco de dados.
- **DTOs** — Responsáveis pela validação e transferência dos dados.

---

## 🚀 Como executar

```bash
# Clone o repositório
git clone https://github.com/JhonatanMiranda221/nuvitta-api.git

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie o servidor
npm run start:dev
```

Servidor disponível em `http://localhost:4000`

---

## ⚙️ Variáveis de ambiente

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_NAME=db_nuvitta
DB_SYNC=true
```

---

## 📦 Módulos

### ✅ Nutricionista

Gerenciamento dos profissionais da plataforma.

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /nutricionista | Lista todos |
| GET | /nutricionista/:id | Busca por ID |
| GET | /nutricionista/nome/:nome | Busca por nome |
| POST | /nutricionista | Cria nutricionista |
| PUT | /nutricionista/:id | Atualiza nutricionista |
| DELETE | /nutricionista/:id | Remove nutricionista |

---

### ✅ Paciente

Gerenciamento dos pacientes vinculados ao nutricionista.

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /paciente | Lista todos |
| GET | /paciente/:id | Busca por ID |
| GET | /paciente/nome/:nome | Busca por nome |
| POST | /paciente | Cria paciente |
| PUT | /paciente/:id | Atualiza paciente |
| DELETE | /paciente/:id | Remove paciente |

---

### ✅ Avaliação Antropométrica

Registro de avaliações físicas dos pacientes com cálculos automáticos.

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /avaliacao | Lista todas |
| GET | /avaliacao/:id | Busca por ID |
| GET | /avaliacao/paciente/:id | Busca por paciente |
| POST | /avaliacao | Cria avaliação |
| PUT | /avaliacao/:id | Atualiza avaliação |
| DELETE | /avaliacao/:id | Remove avaliação |

---

### 🔜 Próximos módulos

| Módulo | Status |
|--------|--------|
| Consulta | 🔜 Em desenvolvimento |
| Agenda | 🔜 Planejado |
| Financeiro | 🔜 Planejado |
| Exportação PDF | 🔜 Planejado |
| Dashboard | 🔜 Planejado |
| Autenticação JWT + bcrypt | 🔜 Planejado |
| Inteligência Artificial | 🔜 Planejado |
| Frontend React + Next.js | 🔜 Planejado |

---

## 🔗 Integrações

| Integração | Finalidade | Status |
|------------|-----------|--------|
| ViaCEP | Busca de endereço pelo CEP no cadastro do paciente | 🔜 Planejado |
| Resend | Email de confirmação de consulta e lembretes | 🔜 Planejado |
| Mercado Pago | Pagamento de consultas com sandbox | 🔜 Planejado |

---

## 🗺 Roadmap

**Fase 1 — Base ✅**
- [x] Configuração inicial do NestJS
- [x] Módulo Nutricionista
- [x] Módulo Paciente
- [x] Avaliação Antropométrica

**Fase 2 — Clínica 🔜**
- [ ] Módulo Consulta
- [ ] Agenda

**Fase 3 — Integrações 🔜**
- [ ] ViaCEP
- [ ] Resend
- [ ] Mercado Pago

**Fase 4 — Relatórios 🔜**
- [ ] Exportação PDF
- [ ] Dashboard

**Fase 5 — Segurança 🔜**
- [ ] Autenticação JWT
- [ ] bcrypt

**Fase 6 — IA 🔜**
- [ ] Inteligência Artificial

**Fase 7 — Frontend 🔜**
- [ ] React + Next.js + Tailwind + Shadcn UI

---

## 👨‍💻 Autor

**Jhonatan Miranda**

Desenvolvedor Backend em formação com foco em Node.js e NestJS.

Projeto desenvolvido com objetivo de aplicar boas práticas de arquitetura, organização de código e desenvolvimento de uma aplicação real.

- GitHub: [github.com/JhonatanMiranda221](https://github.com/JhonatanMiranda221)
- LinkedIn: [linkedin.com/in/devjhonatanmiranda](https://linkedin.com/in/devjhonatanmiranda)
