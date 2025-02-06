class Accordion {
    constructor(element) {
        this.element = element
    }

    init(){
        const accordionBtn = this.element.querySelector('.accordion__button')
        accordionBtn.addEventListener('click', () => {
            this.element.classList.toggle('accordion--open')
        })
    }
}