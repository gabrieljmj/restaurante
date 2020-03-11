# Restaurante

--------------

É uma aplicacão simples, sem autenticação. Como o prazo era curto, quis desenvolver o máximo de recursos possíveis, mesmo faltando alguns como a página de impressão da nota.

Conta com 3 páginas:

* Novo pedido: realizar novo pedido, adicionando produtos no checkout, depois informando os dados da compra (nome do cliente, método de pagamento, troco).

* Pedidos a serem preparados: novos pedidos, que ainda não foram preparados. Atualizados automaticamento assim que adicionados. O botão "Pronto!" infmorma que o pedido estão pronto.

* Pedidos a serem entregues: pedidos prontos, e assim como os não preparados, informa assim que algum pedido estão pronto. É possível dizer que está entrgue através do botão "Entregue!".

## Backend

O backend foi desenvolvido utilizando o framework Laravel 6.

### Instalação

* Copie o arquivo ```.env.example``` e crie um arquivo ```.env```.
* Altere as configurações de banco de dados.
* Rode o comando ```php artisan key:generate```.
* Rode o comando ```php artisan storage:link``` para linkar o diretório de storage com o public.
* Rode o comando ```php artisan migrate --seed````para criar as tabelas no banco e adiconar alguns produtos.
* ```php artisan serve``` para iniciar o servidor.

## Frontend

O frontend da aplicação foi desenvolvido utilizando React.

### Pusher

Um detalhe que queria destacar é o realtime nos pedidos.

O recurso foi desenvolvido utilizando o serviço Pusher, que ajuda no desenvolvimento de features que utilizam sockets. Assim, toda vez um pedido novo é feito, a página de pedidos é atualizada automaticamento sem a utiliaçãp de long pooling, tocando um som de notificação. O mesmo vale para quando os pedidos estão prontos.

As keys podem ser alteradas no arquivo ```frontend/src/services/echo.js``` e no arquivo ```backend/.env```. No momento deixei configurado uma minha.

### Instalação

A aplicação é construída em cima do package ```create-react-app```, portanto, apenas rode os seguintes comandos:

* ```npm install``` ou ```yarn``` para instalar as dependências.
* ```npm start``` ou ```yarn start``` para iniciar o servidor.