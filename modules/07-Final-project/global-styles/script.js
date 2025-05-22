const textarea = document.getElementById('textarea');
const writtenText = document.getElementById('writtenText');
const btnExecuteText = document.getElementById('btnExecuteText');

const checkboxes = document.querySelectorAll('.font-checkbox');


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    btnExecuteText.addEventListener('click', () => {
        console.log('Button clicked');
        console.log('Textarea value:', textarea.value);
        console.log('Written text element:', writtenText.textContent);
        // Quitar clases anteriores
        writtenText.classList.remove('font-onest', 'font-raleway', 'font-quicksand', 'font-figtree', 'font-manrope');

        // Encontrar el checkbox marcado
        const selected = Array.from(checkboxes).find(cb => cb.checked);

        if(textarea.value !== '') {
            writtenText.textContent = textarea.value;
        }

        if (selected) {
            // writtenText.textContent = textarea.value;
            writtenText.classList.add(selected.value);
        }

    });
});


checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        // Desmarcar los otros checkboxes (solo uno activo)
        checkboxes.forEach(other => {
            if (other !== cb) other.checked = false;
        });

        // Eliminar clases anteriores
        preview.classList.remove('font-onest', 'font-raleway', 'font-quicksand');

        // Si este checkbox está marcado, aplicar su clase
        if (cb.checked) {
            preview.classList.add(cb.value);
        }
    });
});