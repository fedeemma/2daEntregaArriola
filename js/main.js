const carrito = []

const pelicula = [{codigo: 1014, nombre: 'Rápidos y Furiosos 10', precio: 6500},
                  {codigo: 1322, nombre: 'Creed 3', precio: 7000},
                  {codigo: 2345, nombre: 'La Extorsión', precio: 7500},
                  {codigo: 1487, nombre: 'Súper Mario Bross', precio: 6200}]


function buscarPelicula(codigo) {
    let peliculaSeleccionada = pelicula.find((pelicula)=> pelicula.codigo === codigo )
    return peliculaSeleccionada
}

function comprar() {
    let codigo = prompt("Ingresa el código de la película:")
    let peliculaElegida = buscarPelicula(parseInt(codigo))


    if (peliculaElegida === undefined) {
        alert("No se encontró la película elegida.")
    } else {
        carrito.push(peliculaElegida)
        alert(peliculaElegida.nombre + " la película ha sido seleccionada con éxito.")
        let respuesta = confirm("¿Querés seleccionar otras películas más?")
        if (respuesta === true) {
            comprar()
        } else {
            const shop = new Compra(carrito)
            let subtotal = shop.obtenerSubtotal()
            console.log("El importe total a abonar es $ ", subtotal.toLocaleString("es-AR"))    
        }
    }
}

comprar()