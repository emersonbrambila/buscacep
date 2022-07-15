# Monorepo - Teste Eureka

#### DESCRIÇÃO DO TESTE
<hr>

<p>
Aplicação escrite em monorepo para ajudar um usuário a fazer a consulta de um CEP. Onde ao
informar um CEP a tela apresentará informações de endereço como bairro, município e
logradouro. Para tal crie uma um api rest com integração com o serviço ViaCEP e uma
aplicação web.
</p>

<p>
Front-end em ReactJS
Back-end em NodeJS
Banco de dados Sqlite3
ORM Knex
</p>

#### LAYOUT
<hr>

<table>
  <tr>
    <td>
    https://user-images.githubusercontent.com/15688770/179237477-47159994-73fd-4c80-8dbe-63d4842c318e.png
    </td>
    <td>
    https://user-images.githubusercontent.com/15688770/179238219-477a491c-e5d6-4cb4-8ee7-54b0f1745239.png
    </td>
  </tr>
</table>

#### Instalação
<hr>
<p>Use o gerenciador de pacotes de sua escolha, na raiz do projeto e nas pastas server/client (caso seja necessário) execute:</p>
<pre>
npm install
</pre>

#### Banco de dados
<hr>
<p>Acesse a pasta "app/server" e execute o comando para gerar o banco de dados Sqlite3 caso necessário:</p>
<pre>
npm run migration
</pre>

#### Utilização
<hr>

#### Back-end
<p>Acesse a pasta "app/server" e execute o comando:</p>
<pre>
npm run dev
</pre>

#### Front-end
<p>Acesse a pasta "app/client" e execute o comando:</p>
<pre>
npm run start
</pre>
