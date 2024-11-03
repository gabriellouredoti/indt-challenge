# Procedimento de Instalação - Usando o Docker

## Pré requisitos: Docker

1. **Inicializar serviços do projeto database:**

   **Na raiz do do projeto database e execute o seguinte comando:**

   Comando:

   ```
   docker-compose up --build
   ```

   **Esse comando irá inicializar os serviços do banco de dados postgres**

   **Obs: Caso queira acessar o pgadmin o endereço e porta são:**

   ```
   http://localhost:8005
   ```

   **usuário: admin@admin.com e senha: admin**

   Para acessar o banco pelo pgadmin use os seguintes parâmetros:

   **_hostname/address: db_**

   **_port: 5432_**

   **_maintenance database: db_access_control_system_**

   **_username: indt_**

   **_password: indt@2024_**
