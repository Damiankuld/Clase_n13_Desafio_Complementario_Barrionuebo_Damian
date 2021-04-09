//----------------------------DOM----------------------------//
//Mostrar y ocultar atributos de heroe
const mostrar=()=>{
    document.querySelector(`#infoHero`).style.display = ``;
}
const ocultar=()=>{
    document.querySelector(`#infoHero`).style.display = `none`;
}
//-----------------------------------------------------------//
//Heroes
//mostrar skills
const showContent=(hero,entidad,storage,turno,skillID)=>{
    //Orden de atque
    position = turno;

    //nombre y estadisticas
    let healthPoint = localStorage.getItem(storage);
    let statsHero = document.querySelector(`#statsHero`);
    statsHero.innerText=`${healthPoint}`;
    let nameHero = document.querySelector(`#nameHero`);
    nameHero.innerText=`${entidad.name}`;

    //portrait
    let portrait=document.querySelector(`#portraitHero`);
    portrait.innerHTML=`<img src="assets/images/chapters/portraits/${hero}.png">`;

    //quitar todas las selecciones
    let select1=document.querySelector(`#position1`);
    select1.classList.remove("columna-hover");
    let select2=document.querySelector(`#position2`);
    select2.classList.remove("columna-hover");
    let select3=document.querySelector(`#position3`);
    select3.classList.remove("columna-hover");
    //agregar nueva seleccion
    let selected=document.querySelector(`#position${turno}`);
    selected.classList.add("columna-hover");
}
//$('#skillCruzado').hide();
$('#skillBarbara').hide();
$('#skillArbalestera').hide();

showContent('cruzado', cruzado, 'hpHero1', 1); //eleccion incial
//showContent('barbara', barbara, hpHero2, 2);
//showContent('arbalestera', arbalestera, hpHero3, 3);

//-----------------------------------------------------------//
//Enemy
//mostrar contenido de enemigo
const showContentEnemy=(name,position,columna,defend)=>{
    let hP = localStorage.getItem(position);
    let nameEnemy = document.querySelector(`#nameEnemy`);
    nameEnemy.innerText = `${name.name}`;
    let hpEnemy = document.querySelector(`#hpEnemy`);
    hpEnemy.innerText="HP:" + hP;
    //variables de objetivo
    objetivoName = name.name;
    objetivoPosition = name;
    defendName = defend;
   
    console.log(defend.defendPositionName);
    console.log(defendName);

    //quitar todas las selecciones
    removeSelectEnemy();
    //agregar la nueva
    let selected=document.querySelector(`#enemy${columna}`);
    selected.classList.add("columnaN2-hover");
}
const removeSelectEnemy=()=>{
    let select1=document.querySelector(`#enemy1`);
    select1.classList.remove("columnaN2-hover");
    let select2=document.querySelector(`#enemy2`);
    select2.classList.remove("columnaN2-hover");
    let select3=document.querySelector(`#enemy3`);
    select3.classList.remove("columnaN2-hover");
}
//showContentEnemy(esqueletoEscudero.name,'hpEnemy1');
const showEnemy=()=>{
    document.querySelector(`#statsEnemy`).style.display = ``;
}
const hideEnemy=()=>{
    document.querySelector(`#statsEnemy`).style.display = `none`;
}
//Boton de combate
const showButton=()=>{
    document.querySelector('#buttonCombat').style.display = ``;
}
const hideButton=()=>{
    document.querySelector('#buttonCombat').style.display = `none`;
}
hideButton();

//-----------------------------------------------------------//
//-------------------------animacion-------------------------//
//funciones de animacion
const mostrarAnimaciones=()=>{
    //esconder unidades
    $('#position1').hide();
    $('#position2').hide();
    $('#position3').hide();
    $('#enemy1').hide();
    $('#enemy2').hide();
    $('#enemy3').hide();
    //mostrar unidades seleccionadas
    $('.animacionHero').show();
    $('.animacionEnemy').show();
}
const ocultarAnimaciones=()=>{
    $('.animacionHero').hide();
    $('.animacionHeroEfecto').hide();
    $('.animacionEnemy').hide();
    $('#position1').show();
    $('#position2').show();
    $('#position3').show();
    $('#enemy1').show();
    $('#enemy2').show();
    $('#enemy3').show();
}
const animacionDeAtaque=()=>{
    //animacion heroe
    $('.animacionHero').animate({
       'margin-left': '150',
   }, 600);
   $('.animacionHero').animate({
       'margin-left': '210',
   }, 1000);

     //animacion heroe efecto
     $('.animacionHeroEfecto').animate({
           
    }, 600);
    $('.animacionHeroEfecto').animate({
    
    }, 900);
   
   //animacion enemigo
   $('.animacionEnemy').animate({
       'margin-right': '-50',
   }, 700);
   $('.animacionEnemy').animate({
       'margin-right': '-90',
   }, 1000);
   
   //animacion background
   $('.battle').animate({
      'background-size': '2300',
   },1000);
       $('.battle').animate({
          'background-size': '1600',
       },1000, function(){
           ocultarAnimaciones();
       });
}
//-----------------------------------------------------------//
//----------------------cruzado-skills-----------------------//
const cruzadoSkill1animacion=()=>{
    $(document).ready(function(){
        //audio
        let audio=document.querySelector('#cruzado-skill-1');
        audio.play();
        let impactShield=document.querySelector('#impactShield');
        impactShield.play();
        //esconder unidades
        mostrarAnimaciones();       
        //posicion de ataque
        let heroAnim=document.querySelector('.animacionHeroEfecto');
        heroAnim.innerHTML='<img class="animacion-crusado-skill-1-anim" src="assets/images/chapters/cruzado/animacion/animation-smite.png">';
        let hero=document.querySelector('.animacionHero');
        hero.innerHTML='<img class="animacion-crusado-skill-1" src="assets/images/chapters/cruzado/animacion/crusader.sprite.attack_sword.png"/>';
        //posicion de defensa enemigo
        let enemy=document.querySelector('.animacionEnemy');
        enemy.innerHTML='<img  src="assets/images/enemys/ruinas/esqueletoEscudero/skeleton_defender_defend.png"/>';
        //animacion heroe
        animacionDeAtaque();
    });   
}
const cruzadoSkill2animacion=()=>{
    $(document).ready(function(){
        //audio
        let cruzadoSkill2=document.querySelector('#cruzado-skill-2');
        cruzadoSkill2.play();
        //esconder unidades
        mostrarAnimaciones();
        //posicion de ataque
        let hero=document.querySelector('.animacionHero');
        hero.innerHTML='<img class="animacion-crusado-skill-2-body" src="assets/images/chapters/cruzado/animacion/crusader.sprite.attack_scroll.png"/>';
        let heroAnim=document.querySelector('.animacionHeroEfecto');
        heroAnim.innerHTML='<img class="animacion-crusado-skill-2-anim" src="assets/images/chapters/cruzado/animacion/animation_accusation.png"></img>';        
        //posicion de defensa enemigo
        let enemy=document.querySelector('.animacionEnemy');
        enemy.innerHTML='<img src="assets/images/enemys/ruinas/esqueletoEscudero/skeleton_defender_defend.png"/>';
        //animacion heroe
        animacionDeAtaque();
    }); 
}
const cruzadoSkill3animacion=()=>{
    $(document).ready(function(){
        //audio
        let cruzadoSkill3=document.querySelector('#cruzado-skill-3');
        cruzadoSkill3.play();
        //esconder unidades
        mostrarAnimaciones();
        //posicion de ataque
        let hero=document.querySelector('.animacionHero');
        hero.innerHTML='<img style="height: 690px" class="animacion-crusado-skill-3-body" src="assets/images/chapters/cruzado/animacion/crusader_banner.png"/>';
        //let heroAnim=document.querySelector('.animacionHeroEfecto');
        //heroAnim.innerHTML='<img class="animacion-crusado-skill-2-anim" src="/assets/images/chapters/cruzado/animacion/animation_accusation.png"></img>';        
        //posicion de defensa enemigo
        let enemy=document.querySelector('.animacionEnemy');
        enemy.innerHTML='<img src="assets/images/enemys/ruinas/esqueletoEscudero/skeleton_defender_defend.png"/>';
        //animacion heroe
        animacionDeAtaque();
    }); 
}
//-----------------------------------------------------------//
//-----------------------barbara-skills----------------------//
const barbaraSkill1animacion=()=>{
    $(document).ready(function(){
        //audio
        let audio=document.querySelector('#barbaraSkill1');
        audio.play();
        //esconder unidades
        mostrarAnimaciones();
        //posicion de ataque
        let hero=document.querySelector('.animacionHero');
        hero.innerHTML='<img style="height: 390px" class="animacion-barbara-skill-1-body" src="assets/images/chapters/barbara/animacion/helion_attack.png"/>';
        let heroAnim=document.querySelector('.animacionHeroEfecto');
        heroAnim.innerHTML='<img class="animacion-barbara-skill-1-anim" src="assets/images/chapters/barbara/animacion/animacion_attack.png"></img>';
        //posicion de defensa enemigo
        objetivoDefend(defendName);
        //animacion heroe
        animacionDeAtaque();
    });
}
const barbaraSkill2animacion=()=>{
    $(document).ready(function(){
        //audio
        let audio=document.querySelector('#barbaraSkill2');
        audio.play();
        //esconder unidades
        mostrarAnimaciones();
        //posicion de ataque
        let hero=document.querySelector('.animacionHero');
        hero.innerHTML='<img style="height: 590px" class="animacion-barbara-skill-2-body" src="assets/images/chapters/barbara/animacion/hellion_leap.png"/>';
        let heroAnim=document.querySelector('.animacionHeroEfecto');
        heroAnim.innerHTML='<img class="animacion-barbara-skill-2-anim" src="assets/images/chapters/barbara/animacion/animacion_leap.png"></img>';
        //posicion de defensa enemigo
        objetivoDefend(defendName);
        //animacion heroe
        animacionDeAtaque();
    });
}
const barbaraSkill3animacion=()=>{
    $(document).ready(function(){
        //audio
        let audio=document.querySelector('#barbaraSkill3');
        audio.play();
        //esconder unidades
        mostrarAnimaciones();
        //posicion de ataque
        let hero=document.querySelector('.animacionHero');
        hero.innerHTML='<img style="height: 390px" class="animacion-barbara-skill-1-body" src="assets/images/chapters/barbara/animacion/helion_attack.png"/>';
        let heroAnim=document.querySelector('.animacionHeroEfecto');
        heroAnim.innerHTML='<img class="animacion-barbara-skill-1-anim" src="assets/images/chapters/barbara/animacion/animacion_attack.png"></img>';
        //posicion de defensa enemigo
        objetivoDefend(defendName);
        //animacion heroe
        animacionDeAtaque();
    });
}
//-----------------------------------------------------------//
//---------------------arbalestera-skills--------------------//


//-----------------------------------------------------------//
//-------------------posiciones-de-defensa-------------------//
const objetivoDefend=(a)=>{
    switch (a) {
        case 'esqueletoEscudero':
            let enemy=document.querySelector('.animacionEnemy');
            enemy.innerHTML='<img src="assets/images/enemys/ruinas/esqueletoEscudero/skeleton_defender_defend.png"/>';
            break;
        case 'esqueletoGuerrero':
            let enemy2=document.querySelector('.animacionEnemy');
            enemy2.innerHTML='<img src="assets/images/enemys/ruinas/esqueletoGuerrero/skeleton_defend.png"/>';
            break;
        default:
            let enemy3=document.querySelector('.animacionEnemy');
            enemy3.innerHTML='<img src="assets/images/enemys/ruinas/esqueletoArbalestero/arbalist_defend.png"/>';
            break;
    }
}

