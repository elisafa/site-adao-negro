document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    const panels = document.querySelectorAll('.personagens__container__painel')
    const perguntas = document.querySelectorAll('.sobre__perguntas__item__pergunta')

    buttons.forEach(button => {
        button.addEventListener('click', function(botao){
            const alvo = botao.target.dataset.tabButton
            const alvoImagem = document.querySelector(`[data-tab-id=${alvo}]`)
            escondeHistorias()
            alvoImagem.classList.add('historia__container--is-active')
            removeBotaoAtivo()
            botao.target.classList.add('historia__tabs__button--is-active')
        })
    })

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeClasseActivePersonagens()
            panel.classList.add('personagens__container-active')
        })
    })

    perguntas.forEach(pergunta =>{
        pergunta.addEventListener('click', function(){
            pergunta.classList.toggle('sobre__perguntas__item__pergunta--pseudo')
            pergunta.nextElementSibling.classList.toggle('sobre__perguntas__item__resposta--abrir')

        })
    })
})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    buttons.forEach(botao => {
        botao.classList.remove('historia__tabs__button--is-active')
    })
}

function escondeHistorias(){
    const historiaContainer = document.querySelectorAll('[data-tab-id]')
    historiaContainer.forEach(item => {
        item.classList.remove('historia__container--is-active')
    })
}

function removeClasseActivePersonagens(){
    const panels = document.querySelectorAll('.personagens__container__painel')
    panels.forEach(panel => {
        panel.classList.remove('personagens__container-active')
    })
}
