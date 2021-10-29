// console.log("teste de saida  js");
       
        // console.log("teste de saida")
        
        // let nome;
        // nome = "Igor Santos Vaz"
        // console.log(nome)
        // nome= 5
        // console.log(nome)

        // var idade = 21
        // console.log(idade)
        // {
        //     let idade = 33
        //     console.log(idade)
        // }
        // console.log(idade)

        // const bobo = "guilherme"        
        // console.log(bobo);
        
        let nomes = []
        nomes.push("Ana")
        nomes.push("Lana")
        nomes.push(25)
        nomes.unshift("igor")
        nomes[5] = 777 
        console.log(nomes);
        console.log(typeof nomes[3]);
        console.log(nomes[0]);
        console.log(nomes)
       let ultimo= nomes.pop()
        console.log(nomes)
        console.log(ultimo);

        delete nomes[2]
        console.log(nomes);


        for (let i=0; i<nomes.length; i++){
            console.log("o valor", nomes[i], "esta na posição " , i)
        }

        for(none of nomes){
            console.log("o conteudo é",none)
        }