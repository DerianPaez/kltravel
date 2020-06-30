// Header desplegable
const header = document.querySelector('header')
const logo = document.getElementById('logo')
const link = document.getElementsByClassName('link')
const menu = document.getElementById('menu-mobile')

const mediaQuery = window.matchMedia('screen and (min-width: 768px)')

function headerActive(){
    header.classList.add('header-is-active')
    header.style.color= "black"
    logo.src="images/Logo-black.png";
    for(var i = 0; i < link.length; i++){
        link[i].style.color = "black";
    }
    
}

function headerDesactive(){
    header.classList.remove('header-is-active')
    header.style.color= "white"
    logo.src="images/Logo-white.png";
    for(var i = 0; i < link.length; i++){
        link[i].style.color = "white";
    }
}

document.addEventListener('scroll', dinamycMenu)
        function dinamycMenu() {
            if (window.pageYOffset >= 30) {
                headerActive()
            }  else {
                headerDesactive()
                
            }
        }

// mediaQuery.addListener(validation)
// validation(mediaQuery)
// function validation(evento) {
    
//     if (evento.matches){
//         console.log("true")
//         document.addEventListener('scroll', dinamycMenu)
//         function dinamycMenu() {
//             if (window.pageYOffset >= 30) {
//                 headerActive()
//             }  else {
//                 headerDesactive()
//                 for(var i = 0; i < link.length; i++)
//                 {
//                     link[i].style.color = "white";
//                 }
//             }
//         }

//     } else {
//         console.log("false")
        
//     }
// }



