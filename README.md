# 🥗 Nuvitta API — Módulo Nutricionista

Documentação dos endpoints do módulo Nutricionista.

**Base URL:** `http://localhost:4000`  
**Branch:** `feature/nutricionista-module`

---

## Endpoints

### 1. Criar Nutricionista
**POST** `/nutricionista`

**Body:**
```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "123456",
  "crn": "CRN-3/12345",
  "especialidade": "Clínica",
  "telefone": "11999999999"
}
```

> `especialidade` e `telefone` são opcionais.

**Resposta:** `201 Created`
```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "123456",
  "crn": "CRN-3/12345",
  "especialidade": "Clínica",
  "telefone": "11999999999",
  "createdAt": "2026-04-28T19:23:55.666Z",
  "updatedAt": "2026-04-28T19:23:55.666Z"
}
```

---

### 2. Listar todos os Nutricionistas
**GET** `/nutricionista`

**Resposta:** `200 OK`
```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com",
    "senha": "123456",
    "crn": "CRN-3/12345",
    "especialidade": null,
    "telefone": null,
    "createdAt": "2026-04-28T19:23:55.666Z",
    "updatedAt": "2026-04-28T19:23:55.666Z"
  }
]
```

---

### 3. Buscar Nutricionista por ID
**GET** `/nutricionista/:id`

**Parâmetro:** `id` — ID do nutricionista

**Resposta:** `200 OK`
```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "123456",
  "crn": "CRN-3/12345",
  "especialidade": null,
  "telefone": null,
  "createdAt": "2026-04-28T19:23:55.666Z",
  "updatedAt": "2026-04-28T19:23:55.666Z"
}
```

**Erro:** `404 Not Found`
```json
{
  "message": "Nutricionista não encontrado",
  "statusCode": 404
}
```

---

### 4. Buscar Nutricionista por Nome
**GET** `/nutricionista/nome/:nome`

**Parâmetro:** `nome` — Nome ou parte do nome

> A busca é parcial e case-insensitive. Ex: `jo` encontra `João Silva`.

**Resposta:** `200 OK`
```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com",
    "senha": "123456",
    "crn": "CRN-3/12345",
    "especialidade": null,
    "telefone": null,
    "createdAt": "2026-04-28T19:23:55.666Z",
    "updatedAt": "2026-04-28T19:23:55.666Z"
  }
]
```

---

### 5. Atualizar Nutricionista
**PUT** `/nutricionista/:id`

**Parâmetro:** `id` — ID do nutricionista

**Body:**
```json
{
  "nome": "João Silva Atualizado",
  "email": "joao@email.com",
  "senha": "123456",
  "crn": "CRN-3/12345"
}
```

**Resposta:** `200 OK`
```json
{
  "id": 1,
  "nome": "João Silva Atualizado",
  "email": "joao@email.com",
  "senha": "123456",
  "crn": "CRN-3/12345",
  "especialidade": null,
  "telefone": null,
  "createdAt": "2026-04-28T19:23:55.666Z",
  "updatedAt": "2026-04-28T19:30:00.000Z"
}
```

**Erro:** `404 Not Found`
```json
{
  "message": "Nutricionista não encontrado",
  "statusCode": 404
}
```

---

### 6. Deletar Nutricionista
**DELETE** `/nutricionista/:id`

**Parâmetro:** `id` — ID do nutricionista

**Resposta:** `204 No Content`

**Erro:** `404 Not Found`
```json
{
  "message": "Nutricionista não encontrado",
  "statusCode": 404
}
```

---

## Validações

| Campo | Obrigatório | Regras |
|---|---|---|
| nome | ✅ | String, não vazio |
| email | ✅ | Formato de email válido |
| senha | ✅ | Mínimo 6 caracteres |
| crn | ✅ | String, não vazio, único |
| especialidade | ❌ | String |
| telefone | ❌ | String |

---

## Pendências

- [ ] Hash da senha antes de salvar
- [ ] Busca por nome sem acento (collation MySQL)
- [ ] Autenticação JWT
- [ ] Testes unitários com Jest
