function myFunction() {
    document.getElementById('Dropdown').classList.toggle('show');
    document.getElementById('Dropdown').parentElement.getElementsByClassName('aarrow')[0].classList.toggle('aarrowRot')
}
function Function() {
    document.getElementById('myDropdown1').classList.toggle('show');
    document.getElementById('myDropdown1').parentElement.getElementsByClassName('aarrow')[0].classList.toggle('aarrowRot')
}
var acc = document.getElementsByClassName("accordion_items")
var i

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active")
        var panel = this.nextElementSibling
        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
            document.getElementById('panel').parentElement.getElementsByClassName('arrow')[0].classList.toggle('aarrowRot')
        }
    });
}


/* let btns = document.querySelectorAll('.btn')
let txts = document.querySelectorAll('info')

btns.forEach((btn,index)=>{
    btn.onclick=()=>{
        document.querySelector('.btn.active').classList.remove('active')
        btn.classList.add('active')
        document.querySelector('.info.active').classList.remove('active')
        txts[index].classList.add('active')
    }
}) */

let btns = document.querySelectorAll('.btn')
let text = document.querySelectorAll('.information')
btns.forEach((btn, index) => {
    btn.onclick = () => {
        document.querySelector('.btn.active').classList.remove('active')
        btn.classList.add('active')
        document.querySelector('.information.active').classList.remove('active')
        text[index].classList.add('active')
    }
})