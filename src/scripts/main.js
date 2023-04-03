document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    
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
    
})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    buttons.forEach(botao => {
        botao.classList.remove('historia__tabs__button--is-active')
    })
}

function escondeHistorias(){
    const historiaContainer = document.querySelectorAll('[data-tab-id]')
    console.log(historiaContainer)
    historiaContainer.forEach(item => {
        item.classList.remove('historia__container--is-active')
    })


}