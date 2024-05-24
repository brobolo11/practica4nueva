$(document).ready(function () {
    // Función de búsqueda
    $('.boton').click(function () {
        var searchTerm = $('.barra').val().toLowerCase();
        $('.nombre').each(function () {
            var text = $(this).text().toLowerCase();
            var tarjeta = $(this).closest('.tarjeta');
            if (text.indexOf(searchTerm) === -1) {
                tarjeta.hide();
            } else {
                tarjeta.show();
            }
        });
    });

    // Event delegation para borrar tarjeta
    $(document).on('click', '.botonborrar', function () {
        $(this).closest('.tarjeta').remove();
    });

    // Mostrar el modal
    var modal = $('#crearTarjetaModal');
    var btn = $('#boton-mostrar-modal');
    var span = $('.close');

    btn.click(function () {
        modal.show();
    });

    span.click(function () {
        modal.hide();
    });

    $(window).click(function (event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });

    // Función para crear nueva tarjeta
    $('#boton-crear').click(function () {
        var nombre = $('#nombre').val();
        var apellidos = $('#apellidos').val();
        var descripcion = $('#descripcion').val();
        var imagen = $('#imagen').val();

        if (nombre && apellidos && descripcion && imagen) {
            var nuevaTarjeta = `
                <div class="tarjeta">
                    <div class="foto">
                        <img src="${imagen}">
                    </div>
                    <div class="texto">
                        <p class="nombre">${nombre}</p>
                        <p class="apellidos">${apellidos}</p>
                        <p class="descripcion">${descripcion}</p>
                        <input type="button" value="Borrar" class="botonborrar">
                    </div>
                </div>
            `;

            $('.clientes').append(nuevaTarjeta);

            // Limpiar los campos de entrada y ocultar el modal
            $('#nombre').val('');
            $('#apellidos').val('');
            $('#descripcion').val('');
            $('#imagen').val('');
            modal.hide();
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
});
