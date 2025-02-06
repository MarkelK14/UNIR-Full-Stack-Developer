const scriptLoader = (url) => {

    return new Promise((resolve, rejected) => {
        const newscript = document. createElement('script')
        newscript.src = url
        document.body.append(newscript)
        newscript.addEventListener('load', ()=>{
            resolve()
        })
        newscript.addEventListener('error', ()=>{
            rejected()
        })
    })
}
    
document.addEventListener('DOMContentLoaded', () => {
    scriptLoader('https://cdn.jsdelivr.net/npm/chart.js').then(()=>{
        // ya tengo disponible la libreria de las graficas
        console.log('libreria cargada')
    })
})