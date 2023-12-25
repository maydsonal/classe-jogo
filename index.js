/*
Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
*/
//---------------------------------------------------------------------
/*
Instruções para entrega

# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

*/
//---------------------------------------------------------------------
/*
## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

*/
//---------------------------------------------------------------------
/*
## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 
 
Bons estudos 😉

*/


class heroi{

    constructor(nome,idade,tipo,ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar(){
        if(this.tipo === "mago"){
            return "O "+this.tipo+" atacou usando magia"
        }else if(this.tipo === "guerreiro"){
            return "O "+this.tipo+" atacou usando espada"
        }else if(this.tipo === "monge"){
            return "O "+this.tipo+" atacou usando artes marciais"
        }else if(this.tipo === "ninja"){
            return "O "+this.tipo+" atacou usando shuriken"
        }else{
            console.log("NENHUM TIPO INFORMADO")
        }
    }
}

const funcoes = [
    carregarPrimeiroHeroi,
    carregarSegundoHeroi,
    carregarTerceiroHeroi,
    carregarQuartoHeroi
];

function carregarPrimeiroHeroi(){
    let chamarHeroi = new heroi()
    chamarHeroi.nome = "Shang Tsung";
    chamarHeroi.idade = 60;
    chamarHeroi.tipo = "mago";
    return chamarHeroi.atacar()
}

function carregarSegundoHeroi(){
    let chamarHeroi = new heroi()
    chamarHeroi.nome = "Liu Kang";
    chamarHeroi.idade = 21;
    chamarHeroi.tipo = "guerreiro";
    return chamarHeroi.atacar()
}

function carregarTerceiroHeroi(){
    let chamarHeroi = new heroi()
    chamarHeroi.nome = "Kung Lao";
    chamarHeroi.idade = 25;
    chamarHeroi.tipo = "monge";
    return chamarHeroi.atacar()
}

function carregarQuartoHeroi(){
    let chamarHeroi = new heroi()
    chamarHeroi.nome = "Subzero";
    chamarHeroi.idade = 39;
    chamarHeroi.tipo = "ninja";
    return chamarHeroi.atacar()
}



for(let contador=0; contador < funcoes.length; contador++){
    console.log(funcoes[contador]());
}







