//função para alterar a foto da lata

function imgSlider(anything){
    document.querySelector('.pepsi').src = anything;
}

//função para alterar o background color

function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

//função para layout responsivo

function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');

}