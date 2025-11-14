const btnMobile = document.getElementById('btn-mobile');
// const você usa para valores que não serão alterados

function toggleMenu(event) { // função para alternar o menu hambúrger utilizando o evento trigger (toggleMenu), associado ao parâmetro event, que irá disparar a função, seja click ou touchstart (para dispositivos mobile)
    if (event.type === 'touchstart') event.preventDefault(); // se o evento for do tipo touchstart, ele previne o comportamento padrão do navegador (exemplo: rolagem da página)

    const nav = document.getElementById('nav'); // declarando a variável nav que seleciona o elemento com o ID 'nav

    nav.classList.toggle('active'); // alterna a classe active no elemento nav, mostrando ou ocultando o menu

    const active = nav.classList.contains('active'); // verifica se a classe 'active' está presente no elemento nav e armazena o resultado na variável active (true or false)

    event.currentTarget.setAttribute('aria-expanded', active); // define o atributo 'area-expanded' do botão com o valor da variável active para acessibilidade

        if (active) { //se o menu estiver aberto
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu'); // define o atributo 'aria-label' do botão para 'Fechar Menu'
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu'); // caso contrário, define o atributo 'aria-label' do botão para 'Abrir Menu'                
        }
}

btnMobile.addEventListener('click', toggleMenu) // adiciona um ouvinte de evento ao botão do menu hambúrger, que chama a função toggleMenu quando o botão é clicado

btnMobile.addEventListener('touchstart', toggleMenu) // adiciona um ouvinte de evento ao botão do menu hambúrger, que chama a função toggleMenu quando o botão é tocado em dispositivos móveis