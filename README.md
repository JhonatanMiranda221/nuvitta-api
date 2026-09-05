# 🍎 Nuvitta Backend

**Gestão inteligente para profissionais de nutrição**

> ⚠️ Projeto em construção — funcionalidades sendo implementadas ativamente.

## 📖 Sobre o projeto

O **Nuvitta** é um sistema de gestão nutricional desenvolvido para auxiliar nutricionistas no acompanhamento completo de seus pacientes.

## 🎯 Objetivo

- 👤 Gerenciar pacientes
- 📊 Registrar avaliações antropométricas
- 📈 Acompanhar evolução dos pacientes
- 💰 Controlar financeiro da clínica
- 📄 Gerar relatórios nutricionais
- 🤖 Utilizar inteligência artificial como assistente nutricional

## 🛠 Tecnologias

**Backend:** NestJS · Node.js · TypeScript · TypeORM · MySQL · Class Validator

**Frontend (futuro):** React · Next.js · Tailwind CSS · Shadcn UI

## 🚀 Como executar

```bash
git clone https://github.com/JhonatanMiranda221/nuvitta-api.git
npm install
cp .env.example .env
npm run start:dev
```

Servidor em `http://localhost:4000`

## ⚙️ Variáveis de ambiente

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_NAME=db_nuvitta
DB_SYNC=true
```

## 📦 Módulos

### ✅ Nutricionista

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /nutricionista | Lista todos |
| GET | /nutricionista/:id | Busca por ID |
| GET | /nutricionista/nome/:nome | Busca por nome |
| POST | /nutricionista | Cria nutricionista |
| PUT | /nutricionista/:id | Atualiza nutricionista |
| DELETE | /nutricionista/:id | Remove nutricionista |

### ✅ Paciente

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /paciente | Lista todos |
| GET | /paciente/:id | Busca por ID |
| GET | /paciente/nome/:nome | Busca por nome |
| POST | /paciente | Cria paciente |
| PUT | /paciente/:id | Atualiza paciente |
| DELETE | /paciente/:id | Remove paciente |

### ✅ Avaliação Antropométrica

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /avaliacao | Lista todas |
| GET | /avaliacao/:id | Busca por ID |
| GET | /avaliacao/paciente/:id | Busca por paciente |
| POST | /avaliacao | Cria avaliação |
| PUT | /avaliacao/:id | Atualiza avaliação |
| DELETE | /avaliacao/:id | Remove avaliação |

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

## 🔗 Integrações

| Integração | Finalidade | Status |
|------------|-----------|--------|
| ViaCEP | Busca de endereço pelo CEP | 🔜 Planejado |
| Resend | Email de confirmação de consulta | 🔜 Planejado |
| Mercado Pago | Pagamento de consultas com sandbox | 🔜 Planejado |

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

## 👨‍💻 Autor

**Jhonatan Miranda** — Desenvolvedor Backend em formação com foco em Node.js e NestJS.

- [GitHub](https://github.com/JhonatanMiranda221)
- [LinkedIn](https://linkedin.com/in/devjhonatanmiranda)
