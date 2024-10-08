/*para manejar el sonido del video */
const video = document.getElementById('intro-video');
if(video!=null){video.volume = 0.3;} // Establece el volumen al 30%
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('intro-video');
    const muteBtn = document.getElementById('mute-btn');
    const muteIcon = document.getElementById('mute-icon');

    if(video!=null){
        muteBtn.addEventListener('click', function () {
            // Cambia el estado muted del video
            video.muted = !video.muted;
            
            // Cambia el icono dependiendo del estado de muted
            if (video.muted) {
                muteIcon.classList.remove('fa-volume-high'); // Icono para no muteado
                muteIcon.classList.add('fa-volume-xmark'); // Icono para muteado
            } else {
                muteIcon.classList.remove('fa-volume-xmark');
                muteIcon.classList.add('fa-volume-high');
            }
        });
    }



    //pantalla de detalle del producto
    const deleteButton = document.querySelector('.delete');
    if(deleteButton!=null){
        deleteButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace redirija
            Swal.fire({
                title: "Esta seguro de borrar el Objeto",
                text: "Este proceso no tiene retorno!!!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, confirmo el borrado"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Borrado!",
                        text: "El Objeto ha sido Eliminado.",
                        icon: "success"
                    });
                }
            });
        });
    }

    const editButton = document.querySelector('.edit');
    if (editButton != null) {
        editButton.addEventListener('click', function(event) {
            event.preventDefault();
            
            const href = this.getAttribute('href');

            Swal.fire({
                title: "¿Está seguro de editar el Objeto?",
                text: "Este proceso no tiene retorno!!!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, confirmo poder editarlo"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = href;
                }
            });
        });
    }

    //boton para guardar en crear objetos
    const btnGuardarButton = document.querySelector('.btn-guardar-objeto');
    if(btnGuardarButton!=null){
        btnGuardarButton.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
                title: '¿Estás seguro?',
                text: 'Vas a guardar el objeto en Weapons?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, enviar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('form-crear-objeto').submit();
                }
            });
        });
    }

    //pantalla contacto
    const contactoButton =document.getElementById('enviar-btn');
    if(contactoButton!=null){
        contactoButton.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
                title: '¿Estás seguro?',
                text: 'Vas a enviar la información de contacto.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, enviar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('form-contacto').submit();
                }
            });
        });
    }

    //pantalla login y registro
    const loginButton = document.getElementById('login-btn');
    if(loginButton!=null){
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
                title: 'Iniciar Sesión',
                text: '¿Estás seguro que quieres iniciar sesión?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, iniciar sesión',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('form-login').submit();
                }
            });
        });
    }
    // Evento para el botón de Registro
    const registroButton = document.getElementById('registro-btn');
    if(registroButton!=null){
        registroButton.addEventListener('click', function(e) {
            e.preventDefault();
            const clave = document.getElementById('registro-clave').value;
            const repetirClave = document.getElementById('registro-repetir-clave').value;
        
            if (clave !== repetirClave) {
                Swal.fire({
                    title: 'Error',
                    text: 'Las claves no coinciden. Por favor, verifica.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            } else {
                Swal.fire({
                    title: 'Registrar Cuenta',
                    text: '¿Estás seguro de que quieres registrarte?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, registrar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        document.getElementById('form-registro').submit();
                    }
                });
            }
        });
    }

    /*perfil actualizar*/
    const actualizarPerfilButton = document.getElementById('btn-guardar-perfil');
    if(actualizarPerfilButton!=null){
        actualizarPerfilButton.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
                title: 'Perfil de Usuario',
                text: '¿Estás seguro que quieres Actualizar la información?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, Actualizar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('formulario-perfil').submit();
                }
            });
        });
    }

        // Obtener elementos del DOM
        const modal = document.getElementById("modal-compra");
        const btnAbrirModal = document.getElementById("btn-proceder-compra");
        const btnCerrarModal = document.querySelector(".close");
        const totalPrecioCarrito = document.querySelector(".total-precio").getAttribute("data-total");
        const totalPrecioModal = document.querySelector(".total-precio-modal");
        const total = parseFloat(totalPrecioCarrito);
        // Abrir modal al hacer clic en el botón
        btnAbrirModal.addEventListener("click", function() {
            modal.style.display = "block";
            // Actualizar el precio total en el modal
            totalPrecioModal.textContent = total;
        });

        // Cerrar modal al hacer clic en la "x"
        btnCerrarModal.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // Cerrar modal si se hace clic fuera de él
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });

        // Validar el formulario (puedes agregar más validaciones)
        document.getElementById("form-compra").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Compra realizada por: " + totalPrecioCarrito);
            modal.style.display = "none";
        });

        function actualizarTotal(nuevoTotal) {
            const totalElemento = document.querySelector(".total-precio");
            
            // Actualizar el data-total
            totalElemento.setAttribute("data-total", nuevoTotal);
            
            // Actualizar el contenido visible del span, agregando el formato con $
            totalElemento.textContent = `$${nuevoTotal.toFixed(2)}`;
        }
        
        // Ejemplo de uso: cambiar el total a 20.99
        actualizarTotal(total);
    




















});


