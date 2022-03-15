let heroA = document.querySelector('#hero-switch');
let action = document.querySelector('button')
let classehero = document.querySelector('#classhero')

action.onclick = function() {
let heroAsrc = heroA.getAttribute('src');

if(heroAsrc === "media/rogue-removebg-preview (2).png"){
        heroA.setAttribute('src', 'media/mago-removebg-preview.png')
        classehero.textContent = 'MAGO'

    }else if(heroAsrc === 'media/mago-removebg-preview.png'){
        heroA.setAttribute('src', 'media/barbaro-.png');
        classehero.textContent = 'BARBARO'
    
    }else{
        heroA.setAttribute('src', 'media/rogue-removebg-preview (2).png')
        classehero.textContent = 'GATUNO'
    }
}
