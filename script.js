const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const slides = document.querySelectorAll('.slider-image')
const bottom = document.getElementById('bottom')


let currentSliderIndex = 0
const dotcurent = []

function createDot() {
    const div = document.createElement('div')
    div.className = 'dot'
    bottom.appendChild(div)
    dotcurent.push(div)
}

function addDot() {
    slides.forEach(createDot)
    dotcurent[0].classList.add('active')
}

function addActiveClass() {
    dotcurent[currentSliderIndex].classList.add('active')
}

function removeActiveClass() {
    dotcurent[currentSliderIndex].classList.remove('active')
}

function showSlider() {
    slides[currentSliderIndex].classList.add("block");
}

function hideSlider() {
    slides[currentSliderIndex].classList.remove("block");
}

function nextSlider() {
    hideSlider()
    removeActiveClass()
    currentSliderIndex++

    if(currentSliderIndex > slides.length - 1) {
        currentSliderIndex = 0
    }
    addActiveClass()
    showSlider()
}

function previousSlider() {
    hideSlider()
    removeActiveClass()
    currentSliderIndex--

    if(currentSliderIndex < 0) {
        currentSliderIndex = slides.length - 1
    }
    addActiveClass()
    showSlider()
}

addDot()
arrowLeft.addEventListener('click', nextSlider)
arrowRight.addEventListener('click', previousSlider)

//
