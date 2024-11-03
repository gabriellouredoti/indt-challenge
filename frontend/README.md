# Procedimento de Instalação

## Pré requisitos: Node 18 ou superior

1. **Instalar as dependências do projeto:**

    Comando:

    ```
    npm i
    ```

2. **Alterar BASE_URL do projeto para a integração com serviço de backend:**

    #### Substitua o VITE_API_BASE_URL de acordo com o endereço e porta configurado no serviço backend.

    Ex:

    ```
    VITE_API_BASE_URL="http://localhost:3001"
    ```

3. **Execute o projeto:**

    Comando:

    ```
    npm run dev
    ```

4. **Acesse o endereço gerado no terminal e verifique se o serviço está sendo executado por exemplo:**

    ```
    http://localhost:5173
    ```
