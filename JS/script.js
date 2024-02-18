// JavaScript
/*
Este JavaScript agrega un evento de 'mouseover'
a cada celda de la tabla que cambia el color de fondo
a gris claro cuando el mouse se mueve sobre la celda.
y un evento de 'mouseout' que cambia el color de fondo
de la celda a blanco cuando el mouse se mueve fuera de la celda.
*/
document.querySelectorAll('td').forEach(td => {
    td.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f0f0f0';
    });
    td.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#fff';
    });
});