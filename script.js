const CAMPO = document.getElementById('campo');
const RESULTADO = document.getElementById('resultado');

document.getElementById('btn').addEventListener("click", function (e) {
    e.preventDefault();

    var campo = CAMPO.value;
    var eventos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var problemas = Math.floor(Math.random() * eventos.length);
    var valor = eventos[problemas];

    switch (valor) {
        case 0:
            RESULTADO.innerHTML = `<p>Você falhou em buscar ${campo}, ao levantar da cadeira você caiu e por la ficou</p>`
            break;
        case 1:
            RESULTADO.innerHTML = `<p>Você falhou em buscar ${campo}, ao ir em direção da sua casa você foi atropelado</p>`
            break;
        case 2:
            RESULTADO.innerHTML = `<p>Você falhou em buscar ${campo}, ao chegar em casa você percebe que perdeu a chave, que azar<p/>`
            break;
        case 3:
            RESULTADO.innerHTML = `<p>Você falhou em buscar ${campo}, ao tentar abrir a porta a chave quebra, não foi dessa vez<p/>`
            break;
        case 4:
            RESULTADO.innerHTML = `<p>Você falhou em buscar ${campo}, ao entrar em casa não encontra o que procurava</p>`
            break;
        case 5:
            RESULTADO.innerHTML = `<p>Você falhou em buscar ${campo}, ao pegar ${campo} se quebra na sua mão, ta fortinho d+</p>`
            break;
        case 6:
            RESULTADO.innerHTML = `<p>Você falhou em buscar  ${campo}, cansado decide sentar um pouco no sofa, acaba caindo no sono e perdendo a hora</p>`
            break;
        case 7:
            RESULTADO.innerHTML = `<p>Você falhou em buscar  ${campo}, no caminho de volta para o curso você aceita uma carona de um estranho e nunca mais foi visto</p>`
            break;
        case 8:
            RESULTADO.innerHTML = `<p>Você falhou em buscar  ${campo}, demorou de mais pra voltar aula ja acabou</p>`
            break;
        case 9:
            RESULTADO.innerHTML = `<p>Você falhou em buscar  ${campo}, ao sentar na cadeira ela quebra, morrendo de vergonha você decide ficar deitado no chão de olhos fechados</p>`
            break;
        case 10:
            RESULTADO.innerHTML = `<p>Parabens você coseguiu buscar  ${campo} e voltar a tempo pra aula, incrivel!!!</p>`
    }

})