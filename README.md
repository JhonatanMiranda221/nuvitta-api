Nuvitta Backend 🍎

API robusta para gestão nutricional, focada em performance e escalabilidade. Este é um projeto autoral desenvolvido para consolidar práticas avançadas de desenvolvimento Back-End.


Origem do nome: Nutrição + Vita (vida em latim)



🎯 Objetivo

Criar um software completo para nutricionistas, semelhante ao Dietbox, Nutrium, WebDiet e Avanutri, porém mais moderno, intuitivo e acessível.

🚀 Proposta Técnica

O sistema utiliza o ecossistema NestJS para garantir uma arquitetura modular e de fácil manutenção, aplicando princípios de Clean Architecture e SOLID.

🛠 Tech Stack

Backend

CamadaTecnologiaRuntimeNode.jsFrameworkNestJS (TypeScript)ORMTypeORMDatabaseMySQLTestingJest

Frontend (futuro)

CamadaTecnologiaFrameworkReact / Next.jsEstilizaçãoTailwind CSSComponentesShadcn UI

⚙️ Setup do Projeto

Pré-requisitos


Node.js
MySQL


Instalação


Clone o repositório:


bashgit clone https://github.com/JhonatanMiranda221/projeto_nuvitta.git


Instale as dependências:


bashnpm install


Configure as variáveis de ambiente:


bashcp .env.example .env


Preencha o .env com suas configurações:


envDB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_NAME=db_nuvitta
DB_SYNC=true


Inicie o servidor:


bashnpm run start:dev

O servidor estará disponível em http://localhost:4000.

📂 Módulos

✅ Nutricionista

CRUD completo para gestão de nutricionistas.

MétodoEndpointDescriçãoGET/nutricionistaLista todosGET/nutricionista/:idBusca por IDGET/nutricionista/nome/:nomeBusca por nomePOST/nutricionistaCria nutricionistaPUT/nutricionista/:idAtualiza nutricionistaDELETE/nutricionista/:idDeleta nutricionista

✅ Paciente

CRUD completo para gestão de pacientes com relacionamento ao nutricionista.

MétodoEndpointDescriçãoGET/pacienteLista todosGET/paciente/:idBusca por IDGET/paciente/nome/:nomeBusca por nomePOST/pacienteCria pacientePUT/paciente/:idAtualiza pacienteDELETE/paciente/:idDeleta paciente

⏳ Avaliação Antropométrica

Registro de avaliações físicas dos pacientes com cálculos automáticos.

Campos: peso, altura, cintura, quadril, abdômen, braço, panturrilha, percentual de gordura, massa muscular, massa gorda, observações

Cálculos automáticos: IMC, RCQ, TMB, idade

⏳ Alimentos

CRUD de alimentos com integração à tabela TACO e Open Food Facts.

Arquitetura de consulta:

Pesquisa → Banco MySQL → Encontrou? → Retorna
                       → Não encontrou? → Open Food Facts → Salva → Retorna

⏳ Plano Alimentar

Criação e gestão de planos alimentares personalizados.

⏳ Refeições e Itens

Composição das refeições com itens alimentares.

⏳ Exportação PDF

Geração de relatórios e planos alimentares em PDF.

⏳ Dashboard

Visão geral com métricas e evolução dos pacientes.

⏳ Autenticação JWT

Login, proteção de rotas, refresh token e bcrypt para hash de senha.

⏳ Inteligência Artificial


Resumo automático da evolução do paciente
Geração de relatórios
Sugestão de plano alimentar
Substituições inteligentes de alimentos
Chat para nutricionista


🗺 Roadmap


 Configuração inicial do NestJS
 Módulo Nutricionista
 Módulo Paciente
 Módulo Avaliação Antropométrica
 Módulo Alimentos (TACO + Open Food Facts)
 Módulo Plano Alimentar
 Módulo Refeições e Itens
 Exportação PDF
 Dashboard
 Autenticação JWT + bcrypt
 Inteligência Artificial
 Frontend (React + Next.js)


🔗 Links


GitHub: github.com/JhonatanMiranda221
LinkedIn: linkedin.com/in/devjhonatanmiranda
