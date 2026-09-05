# 🍎 Nuvitta Backend
<div align="center">

## Gestão inteligente para profissionais de nutrição

Uma plataforma completa para nutricionistas gerenciarem pacientes, avaliações e evolução nutricional.
> ⚠️ **Projeto em construção** — funcionalidades sendo implementadas ativamente.
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

📦 Módulos
✅ Nutricionista

Gerenciamento dos profissionais da plataforma

Método	Rota	Descrição
GET	/nutricionista	Lista todos
GET	/nutricionista/:id	Busca por ID
GET	/nutricionista/nome/:nome	Busca por nome
POST	/nutricionista	Cria nutricionista
PUT	/nutricionista/:id	Atualiza nutricionista
DELETE	/nutricionista/:id	Remove nutricionista
✅ Paciente

Gerenciamento dos pacientes vinculados ao nutricionista

Método	Rota	Descrição
GET	/paciente	Lista todos
GET	/paciente/:id	Busca por ID
GET	/paciente/nome/:nome	Busca por nome
POST	/paciente	Cria paciente
PUT	/paciente/:id	Atualiza paciente
DELETE	/paciente/:id	Remove paciente
✅ Avaliação Antropométrica

Registro de avaliações físicas dos pacientes com cálculos automáticos

Método	Rota	Descrição
GET	/avaliacao	Lista todas
GET	/avaliacao/:id	Busca por ID
GET	/avaliacao/paciente/:id	Busca por paciente
POST	/avaliacao	Cria avaliação
PUT	/avaliacao/:id	Atualiza avaliação
DELETE	/avaliacao/:id	Remove avaliação
🔜 Próximos módulos
Módulo	Status
Consulta	🔜 Em desenvolvimento
Agenda	🔜 Planejado
Financeiro	🔜 Planejado
Exportação PDF	🔜 Planejado
Dashboard	🔜 Planejado
Autenticação JWT + bcrypt	🔜 Planejado
Inteligência Artificial	🔜 Planejado
Frontend React + Next.js	🔜 Planejado
🔗 Integrações
Integração	Finalidade	Status
ViaCEP	Busca de endereço pelo CEP no cadastro do paciente	🔜 Planejado
Resend	Email de confirmação de consulta e lembretes	🔜 Planejado
Mercado Pago	Pagamento de consultas com sandbox	🔜 Planejado
🗺 Roadmap

Fase 1 — Base ✅

 Configuração inicial do NestJS
 Módulo Nutricionista
 Módulo Paciente
 Avaliação Antropométrica

Fase 2 — Clínica 🔜

 Módulo Consulta
 Agenda

Fase 3 — Integrações 🔜

 ViaCEP
 Resend
 Mercado Pago

Fase 4 — Relatórios 🔜

 Exportação PDF
 Dashboard

Fase 5 — Segurança 🔜

 Autenticação JWT
 bcrypt

Fase 6 — IA 🔜

 Inteligência Artificial

Fase 7 — Frontend 🔜

 React + Next.js + Tailwind + Shadcn UI


# 👨‍💻 Autor

**Jhonatan Miranda**

Desenvolvedor Backend em formação com foco em Node.js e NestJS.

Projeto desenvolvido com objetivo de aplicar boas práticas de arquitetura, organização de código e desenvolvimento de uma aplicação real.

🔗 Links:

GitHub:
github.com/JhonatanMiranda221

LinkedIn:
linkedin.com/in/devjhonatanmiranda
