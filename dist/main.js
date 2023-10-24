    const subBtn = document.querySelector('#subBtn')
    const disBtn = document.querySelector('#disBtn')
    const subDiv = document.querySelector('#subscribe')
    const disDiv = document.querySelector('#dismiss')
    const email = document.querySelector('#email')
    const error = document.querySelector('#valid')

function Email (){
    if(email.value == ''){
        error.classList.remove('hidden')
        console.log('error')
    }else {
    subDiv.classList.add('hidden')
    subDiv.classList.add('lg:hidden')
    disDiv.classList.remove('hidden')
    }
}
function Dismiss (){
    disDiv.classList.add('hidden')
    subDiv.classList.remove('hidden')
    subDiv.classList.remove('lg:hidden')
}

subBtn.addEventListener('click',Email)
disBtn.addEventListener('click',Dismiss)