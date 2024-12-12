const prompt = require('prompt-sync')();
// Creamos el array de libros
let libros = [
    {
        id: 1,
        titulo: "El origen de las especies",
        autor: "Charles Darwin",
        anio: 1859,
        genero: "Cientifica",
        disponible: true
    },
    {
        id: 2,
        titulo: "Bodas de sangre",
        autor: "Federico Garcia Lorca",
        anio: 1931,
        genero: "Teatro",
        disponible: true
    },
    {
        id: 3,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        anio: 1605,
        genero: "Novela",
        disponible: true
    },
    {
        id: 4,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupery",
        anio: 1943,
        genero: "Fabula",
        disponible: true
    },
    {
        id: 5,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        anio: 1953,
        genero: "Ciencia ficcion",
        disponible: true
    },
    {
        id: 6,
        titulo: "Cruzar la noche",
        autor: "Alicia Barberis",
        anio: 1813,
        genero: "Novela",
        disponible: true
    },
    {
        id: 7,
        titulo: "Los ojos del perro siberiano",
        autor: "Antonio Santa Ana",
        anio: 1998,
        genero: "Ficcion",
        disponible: true
    },
    {
        id: 8,
        titulo: "La Odisea",
        autor: "Homero",
        anio: -800,
        genero: "Epico",
        disponible: true
    },
    {
        id: 9,
        titulo: "La memoria de los seres perdidos",
        autor: "Jordi Sierra i Fabra",
        anio: 1998,
        genero: "Ficcion",
        disponible: true
    },
    {
        id: 10,
        titulo: "El hombre que queria recordar",
        autor: "Andrea Ferrari",
        anio: 2005,
        genero: "Ficcion",
        disponible: true
    }
];

console.log(libros); // Comprobamos el array de libros.


// Creamos el array de usuarios.
let usuarios = [
    {
        id: 1,
        nombre: "Stefani Poljak",
        email: "stefy_poljak@outlook.com",
        librosPrestados: []
    },
    {
        id: 2,
        nombre: "Valentina Arroyo",
        email: "valearroyo2015@gmail.com",
        librosPrestados: []
    },
    {
        id: 3,
        nombre: "Antonela Di Santo",
        email: "antodsc94@gmail.com",
        librosPrestados: []
    },
    {
        id: 4,
        nombre: "Esteban Dominguez",
        email: "estebanddom@gmail.com",
        librosPrestados: []
    },
    {
        id: 5,
        nombre: "Carlos Javier Rondan",
        email: "carlosjavier.rondan96@gmail.com",
        librosPrestados: []
    }
];

console.log(usuarios); // Comprobamos el array de usuarios


// a) Funcion para agregar un libro
function agregarLibro(id, titulo, autor, anio, genero) {
    libros.push({ id: id, titulo: titulo, autor: autor, anio: anio, genero: genero, disponible: true });
    console.log("Libro agregado correctamente: " + "ID: " + id + ", Titulo: " + titulo + ", Autor: " + autor + ", Año: " + anio + ", Genero: " + genero);
} 

// b) Funcion para buscar un libro por criterio especifico
function buscarLibro(criterio, valor) {
    let resultado = [];
    for (let i = 0; i < libros.length; i++) {
        if (libros[i][criterio] && libros[i][criterio].toString().toLowerCase() === valor.toString().toLowerCase()) {
            resultado.push(libros[i]);
        }
    }
    if (resultado.length > 0) {
        console.log("Libros encontrados:" + resultado);
    } else {
        console.log("No se encontraron libros con el criterio proporcionado.");
    }
}

// c) Funcion para ordenar libros utilizando bubble sort
function ordenarLibros(criterio) {
    for (let i = 0; i < libros.length - 1; i++) {
        for (let j = 0; j < libros.length - i - 1; j++) {
            if (libros[j][criterio] > libros[j + 1][criterio]) {
                let temp = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1] = temp;
            }
        }
    }
    console.log("Libros ordenados por" + criterio + ":" + libros);
}

// d) Funcion para borrar un libro por su ID
function borrarLibro(id) {
    let indice = -1;
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === id) {
            indice = i;
            break;
        }
    }
    if (indice !== -1) {
        let libroEliminado = libros.splice(indice, 1); // Utilizo .splice ara permitir modificar el contenido del array, así eliminar elementos, agregarlos o reemplazar los existentes
        console.log("Libro eliminado:" + libroEliminado);
    } else {
        console.log("No se encontro ningun libro con el ID proporcionado.");
    }
}


// a) Funcion para registrar un nuevo usuario
function registrarUsuario(nombre, email) {
    // Obtenemos el ID siguiente sumando 1 al ID del ultimo usuario
    let nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
    usuarios.push({ id: nuevoId, nombre: nombre, email: email, librosPrestados: [] });
    console.log("Usuario registrado correctamente: ID: " + nuevoId + ", Nombre: " + nombre + ", Email: " + email);
}

// b) Funcion para mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
    console.log("Lista de todos los usuarios:", usuarios);
    return usuarios; // Devuelve el array completo
}

// c) Funcion para buscar un usuario por mail
function buscarUsuario(email) {
    let usuarioEncontrado = usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase());
    if (usuarioEncontrado) {
        console.log("Usuario encontrado:", usuarioEncontrado);
        return usuarioEncontrado;
    } else {
        console.log("No se encontro ningun usuario con el mail proporcionado.");
        return null;
    }
}

// d) Funcion para borrar un usuario por nombre y mail
function borrarUsuario(nombre, email) {
    let indice = usuarios.findIndex(usuario => 
        usuario.nombre.toLowerCase() === nombre.toLowerCase() && 
        usuario.email.toLowerCase() === email.toLowerCase()
    );
    if (indice !== -1) {
        let usuarioEliminado = usuarios.splice(indice, 1); // Elimina el usuario del array
        console.log("Usuario eliminado:", usuarioEliminado[0]);
    } else {
        console.log("No se encontro ningun usuario con estos datos.");
    }
}


// a) Funcion para prestar un libro
function prestarLibro(idLibro, idUsuario) {
    // Buscamos el usuario por ID
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (!usuario) {
        console.log("No se encontro ningun usuario con este ID.");
        return;
    }

    // Buscamos el libro por ID
    let libro = libros.find(libro => libro.id === idLibro);
    if (!libro) {
        console.log("No se encontro ningun libro con este ID.");
        return;
    }

    // Verificamos si el libro esta disponible
    if (!libro.disponible) {
        console.log("El libro " + libro.titulo + " no esta disponible.");
        return;
    }

    // Marcamos el libro como no disponible y lo agregamos a la lista de libros prestados del usuario
    libro.disponible = false;
    usuario.librosPrestados.push(idLibro);
    console.log("Prestamo realizado con exito. Usuario: " + usuario.nombre + ", Libro: " + libro.titulo);
}

// b) Funcion para devolver un libro
function devolverLibro(idLibro, idUsuario) { // Buscamos el usuario por ID
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (!usuario) {
        console.log("No se encontro ningun usuario con el ID proporcionado.");
        return;
    }

    let indiceLibroPrestado = usuario.librosPrestados.indexOf(idLibro); // Verificamos si el libro esta en la lista de libros prestados del usuario
    if (indiceLibroPrestado === -1) {
        console.log("El libro con ID " + idLibro + " no fue prestado al usuario.");
        return;
    }

    let libro = libros.find(libro => libro.id === idLibro); // Buscamos el libro por ID
    if (!libro) {
        console.log("No se encontro ningun libro con este ID.");
        return;
    }

    libro.disponible = true; // Marcamos el libro como disponible y lo eliminamos de la lista de libros prestados del usuario

    usuario.librosPrestados.splice(indiceLibroPrestado, 1); // Eliminamos el ID del libro de la lista de libros prestados
    console.log("Devolucion realizada. Usuario: " + usuario.nombre + ", Libro: " + libro.titulo);
}


function generarReporteLibros() {
    // Cantidad total de libros
    const cantidadTotalLibros = libros.length;

    // Cantidad de libros prestados
    const cantidadLibrosPrestados = libros.filter(libro => !libro.disponible).length;

    // Cantidad de libros por genero
    const cantidadPorGenero = libros.reduce((acumulador, libro) => {
        acumulador[libro.genero] = (acumulador[libro.genero] || 0) + 1;
        return acumulador;
    }, {});

    // Libro más antiguo y más nuevo
    const libroMasAntiguo = libros.reduce((antiguo, libro) => 
        libro.anio < antiguo.anio ? libro : antiguo, libros[0]
    );

    const libroMasNuevo = libros.reduce((nuevo, libro) => 
        libro.anio > nuevo.anio ? libro : nuevo, libros[0]
    );

    // Generar el reporte
    const reporte = {
        cantidadTotalLibros: cantidadTotalLibros,
        cantidadLibrosPrestados: cantidadLibrosPrestados,
        cantidadPorGenero: cantidadPorGenero,
        libroMasAntiguo: libroMasAntiguo,
        libroMasNuevo: libroMasNuevo
    };

    console.log("Reporte de libros:", reporte);
    return reporte;
}



function librosConPalabrasEnTitulo() {
    // Usamos .filter() para recorrer todos los libros y filtrar aquellos cuyos titulos cumplen con los requisitos
    const librosFiltrados = libros.filter(libro => {
        const palabras = libro.titulo.split(" "); // Usamos el metodo .split() para separar el titulo por espacios y obtener cada palabra como un elemento del array.
        if (palabras.length <= 1) return false; // Comprobamos si tiene mas de una palabra. Si no es asi, descartamos el titulo.
        // Usando el metodo .every() en el array de palabras asegurando que cada palabra contenga solo letras (sin numeros ni caracteres especiales).
 return palabras.every(palabra => /^[a-zA-Z]+$/.test(palabra));   // Usando la expresion regex, en donde:  ^: Comienza la palabra ; [a-zA-Z]: Acepta solo letras (mayúsculas y minúsculas) ; +: Permite una o más letras ; $: Finaliza la palabra.
    });

    // Extraemos solo los titulos de los libros filtrados usando .map()
    const titulosFiltrados = librosFiltrados.map(libro => libro.titulo);

    // Mostramos el resultado en la consola
    console.log("Libros con mas de una palabra en el titulo (solo letras):", titulosFiltrados);

    return titulosFiltrados;
}


function calcularEstadisticas() {
    const anios = libros.map(libro => libro.anio); // Extraemos los años en un array

    // a. Calcular el promedio de los años
    let suma = 0;
    for (let i = 0; i < anios.length; i++) {
        suma += anios[i];
    }
    const promedio = Math.round(suma / anios.length); // Dividimos por la cantidad de elementos y redondeamos

    // b. Encontrar el año más frecuente
    const frecuenciaAnios = {};
    anios.forEach(anio => {
        frecuenciaAnios[anio] = (frecuenciaAnios[anio] || 0) + 1;
    });

    let anioMasFrecuente = null;
    let maxFrecuencia = 0;
    for (let anio in frecuenciaAnios) {
        if (frecuenciaAnios[anio] > maxFrecuencia) {
            maxFrecuencia = frecuenciaAnios[anio];
            anioMasFrecuente = parseInt(anio);
        }
    }

    // c. Calcular la diferencia en años entre el libro más antiguo y el más reciente
    let anioMasAntiguo = anios[0];
    let anioMasReciente = anios[0];
    for (let i = 1; i < anios.length; i++) {
        if (anios[i] < anioMasAntiguo) anioMasAntiguo = anios[i];
        if (anios[i] > anioMasReciente) anioMasReciente = anios[i];
    }
    const diferenciaAnios = anioMasReciente - anioMasAntiguo;

    // Retornamos las estadísticas como un objeto
    return { promedio, anioMasFrecuente, diferenciaAnios };
}

// Prueba de la función
const estadisticas = calcularEstadisticas();
console.log(estadisticas);



function normalizarDatos() {
    libros.forEach(libro => {
    libro.titulo = libro.titulo.toUpperCase(); // Convertimos el título a mayúsculas

    libro.autor = libro.autor.trim();// Eliminamos espacios en blanco al inicio y final del nombre del autor
    });
    
    usuarios.forEach(usuario => { // Chequeamos sobre cada usuario en su array
    usuario.email = usuario.email.toLowerCase(); // Chequeamos sobre cada usuario en su array
    });
}


function menuPrincipal() {
    let opcion;

    do {
    console.log("Bienvenido al sistema de biblioteca");
    console.log("1. Agregar un libro");
    console.log("2. Buscar un libro");
    console.log("3. Ordenar libros");
    console.log("4. Borrar un libro");
    console.log("5. Registrar un usuario");
    console.log("6. Mostrar todos los usuarios");
    console.log("7. Buscar un usuario");
    console.log("8. Borrar un usuario");
    console.log("9. Prestar un libro");
    console.log("10. Devolver un libro");
    console.log("11. Generar reporte de libros");
    console.log("12. Normalizar datos");
    console.log("13. Salir");
    
    opcion = parseInt(prompt("Ingrese una opción: "));
    switch (opcion) {
        case 1:
        // Lógica para agregar un libro
        let id = parseInt(prompt("Ingrese el ID del libro: "));
        let titulo = prompt("Ingrese el título del libro: ");
        let autor = prompt("Ingrese el autor del libro: ");
        let anio = parseInt(prompt("Ingrese el año de publicación: "));
        let genero = prompt("Ingrese el género del libro: ");
        agregarLibro(id, titulo, autor, anio, genero);
        break;
        case 2:
        // Lógica para buscar un libro
        let criterio = prompt("Ingrese el criterio de búsqueda (titulo, autor, año, genero): ");
        let valor = prompt("Ingrese el valor a buscar: ");
        buscarLibro(criterio, valor);
        break;
        case 3:
        // Ordenar libros
        let criterioOrden = prompt("Ingrese el criterio de ordenamiento (titulo, autor, anio): ");
        ordenarLibros(criterioOrden);
        break;
        case 4:
        // Borrar un libro
        let idLibroBorrar = parseInt(prompt("Ingrese el ID del libro a borrar: "));
        borrarLibro(idLibroBorrar);
        break;
        case 5:
        // Registrar un usuario

        break;
        case 6:
        // Mostrar todos los usuarios
        mostrarTodosLosUsuarios();
        break;
        case 7:
        // Buscar un usuario
        let emailBuscar = prompt("Ingrese el email del usuario a buscar: ");
        buscarUsuario(emailBuscar);
        break;
        case 8:
        // Borrar un usuario
        let nombreBorrar = prompt("Ingrese el nombre del usuario a borrar: ");
        let emailBorrar = prompt("Ingrese el email del usuario a borrar: ");
        borrarUsuario(nombreBorrar, emailBorrar);
        break;
        case 9:
        // Prestar un libro
        let idLibroPrestar = parseInt(prompt("Ingrese el ID del libro a prestar: "));
        let idUsuarioPrestar = parseInt(prompt("Ingrese el ID del usuario: "));
        prestarLibro(idLibroPrestar, idUsuarioPrestar);
        break;
        case 10:
        // Devolver un libro
        let idLibroDevolver = parseInt(prompt("Ingrese el ID del libro a devolver: "));
        let idUsuarioDevolver = parseInt(prompt("Ingrese el ID del usuario: "));
        devolverLibro(idLibroDevolver, idUsuarioDevolver);
        break;
        case 11:
        // Generar reporte de libros
        generarReporteLibros();
        break;
        case 12:
        // Normalizar datos
        break;
        case 13:
        console.log("¡Hasta luego!");
        break;
        default:
        console.log("Opción inválida. Por favor, ingrese un número del 1 al 13.");
        }
    } while (opcion !== 13);
}

menuPrincipal();