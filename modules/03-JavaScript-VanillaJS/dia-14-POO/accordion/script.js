document.addEventListener('DOMContentLoaded', () => {
    const accordionElements = document.querySelectorAll('.accordion')
    accordionElements.forEach(accordionElement => {
        const accordionInstance = new Accordion(accordionElement)
        accordionInstance.init()
    })
});