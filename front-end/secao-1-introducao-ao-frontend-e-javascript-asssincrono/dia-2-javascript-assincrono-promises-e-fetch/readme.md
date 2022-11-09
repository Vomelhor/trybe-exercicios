Exercícios - agora, a prática
API de Super Heróis
Vamos criar uma aplicação que busca a imagem e o nome de uma super heroína ou um super herói. Para isso, utilize a SuperHero API. A aplicação deve contar também com um alerta, para o caso da API retornar algum erro. Aqui vale uma sugestão: experimente usar a biblioteca SweetAlert2 😉

Animação do Exercício

Crie um projeto npm do zero
Estruture uma página HTML que contenha: um card com a imagem da super heroína ou do super herói e um botão
O card deve conter a imagem e o nome da pessoa. Esses dados serão providos pela API (Se liga aí: você pode ler a documentação da API para saber exatamente quais campos você deve utilizar aqui)
O botão deve gerar um número aleatório, que será o ID utilizado para a API (Se liga aí: você pode simular um erro da API se solicitar um id maior do que a APi pode retornar. Por exemplo: há 500 ids cadastrados e você solicita um número aleatório até 750)
O botão deve buscar na API pelo ID e renderizar na tela o nome e a imagem da pessoa
Caso haja algum erro durante a requisição à API, a aplicação deve emitir um alerta informando o erro ocorrido
Atenção: A API SuperHero API utiliza um token de acesso criado com uma conta no Facebook. Caso você não tenha ou não deseje utilizar uma conta do Facebook, há essa outra API que possui os mesmos dados, porém retornados de uma forma diferente. Aconselhamos a você a olhar como essa API funciona e, ao final do gabarito, conferir uma solução proposta usando a mesma.

