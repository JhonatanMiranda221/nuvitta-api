# Nuvitta Backend 🍎

API robusta para gestão nutricional, focada em performance e escalabilidade. Este é um projeto autoral desenvolvido para consolidar práticas avançadas de desenvolvimento Back-End.

## 🚀 Proposta Técnica

O sistema utiliza o ecossistema NestJS para garantir uma arquitetura modular e de fácil manutenção, aplicando princípios de Clean Architecture e SOLID.

## 🛠 Tech Stack

| Camada | Tecnologia |
|---|---|
| Runtime | Node.js |
| Framework | NestJS (TypeScript) |
| ORM | TypeORM |
| Database | MySQL |
| Testing | Jest |

## ⚙️ Setup do Projeto

### Pré-requisitos
- Node.js
- MySQL

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/projeto_nuvitta.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Preencha o `.env` com suas configurações:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_NAME=db_nuvitta
DB_SYNC=true
```

5. Inicie o servidor:
```bash
npm run start:dev
```

O servidor estará disponível em `http://localhost:4000`.

## 📂 Módulos

### ✅ Nutricionista
CRUD completo para gestão de nutricionistas.

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/nutricionista` | Lista todos |
| GET | `/nutricionista/:id` | Busca por ID |
| GET | `/nutricionista/nome/:nome` | Busca por nome |
| POST | `/nutricionista` | Cria nutricionista |
| PUT | `/nutricionista/:id` | Atualiza nutricionista |
| DELETE | `/nutricionista/:id` | Deleta nutricionista |

📄 [Documentação completa da API](./NUTRICIONISTA_API.md)

## 🗺 Roadmap

- [x] Configuração inicial do NestJS
- [x] Módulo Nutricionista
- [ ] Módulo Paciente
- [ ] Módulo Consulta
- [ ] Autenticação JWT
- [ ] Hash de senha
- [ ] Testes unitários com Jest
