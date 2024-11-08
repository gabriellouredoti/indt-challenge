# Procedimento de Instalação - Ambiente Local

## Pré requisitos: Node 18 ou superior

1. **Instalar as dependências do projeto:**

    Comando:

    ```
    npm i
    ```

2. **Criar ou copiar o arquivo de variáveis de ambiente:**

    ### 2.1 Certifique-se de que seu arquivo `param_env` seja copiado e chamado de `.env` na raiz do projeto.

    Comando:

    ```
    cp param_env .env
    ```

3. **Configurar variáveis de ambiente do banco de dados:**

    ### 3.1 Configuração do Aplicativo

    - Ambiente: `APP_ENV="local"`
    - Porta: `APP_PORT="3001"`
    - Versão: `APP_VERSION="SIMIP Backend v1.0.0"`

    ### 3.2 Configuração CORS

    - Origem Permitida: `CORS_ORIGIN="*"`
    - Métodos Permitidos: `CORS_METHODS="GET,HEAD,PUT,PATCH,POST,DELETE"`
    - Pré-voo: `CORS_PREFLIGHT="false"`
    - Status de Sucesso: `CORS_SUSS_STATUS="204"`

    ### 3.3 Configuração do Swagger

    - Título: `SWAGGER_TITLE="INDT"`
    - Descrição: `SWAGGER_DESCRIPTION="Users Access Control - Documentation"`
    - Versão: `SWAGGER_VERSION="1.0"`
    - Endpoint: `SWAGGER_ENDPOINT="swagger"`
    - URL da API: `SWAGGER_API_URL="http://localhost:3001"`

    ### 3.4 Configuração do TypeORM

    - Hostname do Banco de Dados: `DB_HOSTNAME="localhost"`
    - Porta do Banco de Dados: `DB_PORT="5432"`
    - Usuário do Banco de Dados: `DB_USERNAME="indt"`
    - Senha do Banco de Dados: `DB_PASSWORD="indt@2024"`
    - Schema do Banco de Dados: `DB_SCHEMA="db_access_control_system"`

    ### 3.5 Configuração do JWT

    - Segredo do Token de Acesso: `JWT_AT_SECRET="at-secret"`
    - Tempo de Expiração do Token de Acesso: `JWT_AT_EXPIRES="12h"`

4. **Executar as migrações no banco Postgres:**

    Comando:

    ```
    npm run migrate
    ```

5. **Utilizar seeders para inicialização de dados:**

    Comando:

    ```bash
    npm run data:sync
    ```

6. **Executar a aplicação:**

    Comando:

    ```
    npm run start:dev
    ```

7. **Testar a aplicação:**

    Acesse no seu navegador o endereço do Swagger que foi configurado no arquivo `.env`, por exemplo:

    ```
    http://localhost:3001/swagger
    ```

**Obs: Utilize o usuario: indt@email.com e senha: Indt@2024 gerados através das seeders**

# Procedimento de Instalação - Usando o Docker

## Pré requisitos: Docker

1. **Inicializar serviços do projeto database:**

    **Na raiz do repositório existem pastas: backend, database e frontend**

    Antes de inicializar os serviços do docker no projeto backend, é necessário inicializar o banco postgres que está na pasta database. Vá até a raiz do projeto database e execute o seguinte comando:

    Comando:

    ```
    docker-compose up --build
    ```

2. **Configurando .env DB_HOSTNAME com o IP da sua máquina local:**

    ### 2.1 Certifique-se de que seu arquivo .env esteja configurado com o IP da sua máquina.

    Em sistema operacional windows use o comando:

    ```
    ipconfig /all
    ```

    Em sistemas operacionais linux use o comando:

    ```
    ip a
    ```

    Após obter seu endereço IP subsitua o seguinte parametro no arquivo .env ex:

    ```
    DB_HOSTNAME="192.168.1.1"
    ```

3. **Inicializando projeto backend com docker-compose:**

    ### 3.1 Com o seu aquivo .env configurado execute o seguinte comando na raiz do projeto:

    Comando:

    ```
    docker-compose up --build
    ```

    ### 3.2 Após inicializar o serviço com o docker compose, realize o teste em seu navegaor através da url que você configurou no parametro da .env SWAGGER_API_URL=http://localhost:3001

    ```
    http://localhost:3001/swagger
    ```

**Obs: Utilize o usuario: indt@email.com e senha: Indt@2024 gerados através das seeders**
