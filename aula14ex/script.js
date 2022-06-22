function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passos = document.getElementById('txtpassos')
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert('[ERRO] Verifique os dados novamente.')
        res.innerHTML = 'Impossível contar!'
        res.style.color = 'red'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p == 0) {
            window.alert('[ERRO] Número de passo inválidos! Considerando PASSO = 1.')
            P = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c =i;c<=f; c+=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else if (f < i) {
            //contagem decescente
            for (let c =i;c >= f; c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    
        
    }
    
}