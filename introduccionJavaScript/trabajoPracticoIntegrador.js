// Punto 1: Estructura de Datos
// a)	Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
// id (número)
// titulo (string),
// autor (string),
// anio (número),
// genero (string),
// disponible (booleano).

// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
// id (número)
// nombre (string)
// email (string)
// librosPrestados (array de ids de libros).


const prompt = require("prompt-sync")();
//Creamos el array de libros con let
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

//Creamos el array de usuarios con let
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

// Punto 2: Funciones de Gestión de Libros-------------------------------------------------------------------------------------------------------------------------------------------
// a)	Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
// b)	Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
// c)	Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
// d)	Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.


// a) Funcion para agregar un libro
function agregarLibro(id, titulo, autor, anio, genero) {
    libros.push({ id: id, titulo: titulo, autor: autor, anio: anio, genero: genero, disponible: true });
    console.log("Libro agregado correctamente: " + "ID: " + id + ", Titulo: " + titulo + ", Autor: " + autor + ", Año: " + anio + ", Genero: " + genero);
} 

// b) Funcion para buscar un libro por criterio especifico
function buscarLibro(criterio, valor) {
    let resultado = [];
    //Convertimos los valores a minúsculas para una busqueda sin importar mayúsculas/minúsculas
    for (let i = 0; i < libros.length; i++) {
        if (
            libros[i][criterio] && 
            libros[i][criterio].toString().toLowerCase() === valor.toString().toLowerCase()
        ) {
            resultado.push(libros[i]);
        }
    }
    if (resultado.length > 0) {
        console.log("Libros encontrados:");
        resultado.forEach(libro => { //Uso de forEach para recorrer los resultados
            console.log(
                "ID: " + libro.id + 
                ", Titulo: " + libro.titulo + 
                ", Autor: " + libro.autor + 
                ", Año: " + libro.anio + 
                ", Genero: " + libro.genero + 
                ", Disponible: " + libro.disponible
            ); //Cada libro se imprime con sus atributos clave (id, titulo, autor, etc)
        });
    } else {
        console.log("No se encontraron libros con el criterio proporcionado.");
    }
}

// c) Funcion para ordenar libros utilizando bubble sort
function ordenarLibros(criterio) {
    for (let i = 0; i < libros.length - 1; i++) { //Usamos Bubble Sort para ordenar el array
        for (let j = 0; j < libros.length - i - 1; j++) {
            if (libros[j][criterio] > libros[j + 1][criterio]) {
                let temp = libros[j]; //En caso de estar desordenado, intercambiamos los elementos.
                libros[j] = libros[j + 1];
                libros[j + 1] = temp;
            }
        }
    }

    console.log("Libros ordenados por " + criterio + ":"); //imprime los libros ordenados
    libros.forEach(libro => {
        console.log(
            "ID: " + libro.id +
            ", Titulo: " + libro.titulo +
            ", Autor: " + libro.autor +
            ", Año: " + libro.anio +
            ", Género: " + libro.genero +
            ", Disponible: " + libro.disponible
        );
    });
}

// d) Funcion para borrar un libro por su ID
function borrarLibro(id) {
    let indice = -1;
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === id) { //Buscamos el índice del libro con el ID proporcionado
            indice = i;
            break;
        }
    }
    if (indice !== -1) { //Si encontramos el libro, comenzamos el sistema para eliminarlo:
        let libroEliminado = libros.splice(indice, 1); //Utilizo .splice ara permitir modificar el contenido del array, así eliminar elementos, agregarlos o reemplazar los existentes. En este caso, para eliminarlo
        console.log("Libro eliminado correctamente:");
        console.log(
            "ID: " + libroEliminado[0].id +
            ", Titulo: " + libroEliminado[0].titulo +
            ", Autor: " + libroEliminado[0].autor +
            ", Año: " + libroEliminado[0].anio +
            ", Género: " + libroEliminado[0].genero);
    } else {
        console.log("No se encontro ningun libro con el ID proporcionado.");
    }
}

//Punto 3: Gestión de Usuarios-------------------------------------------------------------------------------------------------------------------------------------------------------
// a)	Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
// b)	Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
// c)	Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
// d)	Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.


// a) Funcion para registrar un nuevo usuario
function registrarUsuario(nombre, email) {
    //Si el array está vacío, determinamos que el primer ID será 1
    let nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1; //Obtenemos el ID siguiente sumando 1 al ID del último usuario en el array
    //Agregamos el nuevo usuario al array de usuarios con su ID, nombre, email y una lista vacía de libros prestados
    usuarios.push({ id: nuevoId, nombre: nombre, email: email, librosPrestados: [0] });

    console.log("Usuario registrado correctamente: ID: " + nuevoId + ", Nombre: " + nombre + ", Email: " + email); //Informamos que el usuario fue registrado correctamente
}

// b) Funcion para mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
    //Imprimimos en la consola la lista completa de usuarios
    console.log("Lista de todos los usuarios:", usuarios);
    //Retornamos el array completo de los usuarios
    return usuarios;
}

// c) Funcion para buscar un usuario por su mail
function buscarUsuario(email) {
    let usuarioEncontrado = usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase()); //Se utiliza .find() para buscar el primer usuario cuyo email coincida sin importar mayúsculas/minúsculas
    //Si se encuentra el usuario, lo imprimimos en la consola
    if (usuarioEncontrado) {
        console.log("Usuario encontrado:", usuarioEncontrado);
        return usuarioEncontrado; // Retornamos la información del usuario
    } else {
        //Si no se encuentra, se informa que no hay coincidencias y se sugiere revisar los caracteres ingresados
        console.log("No existe ningun usuario con el mail proporcionado. Asegurese que los caracteres ingresados esten bien escritos.");
        return null;
    }
}

// d) Funcion para borrar un usuario por nombre y email
function borrarUsuario(nombre, email) {
    //Buscamos el índice del usuario que coincide con el nombre y el email proporcionados sin importar mayúsculas/minúsculas)
    let indice = usuarios.findIndex(usuario => 
        usuario.nombre.toLowerCase() === nombre.toLowerCase() && 
        usuario.email.toLowerCase() === email.toLowerCase()
    );
    //Si el índice es válido (diferente de -1), eliminamos al usuario del array
    if (indice == -1) {
        let usuarioEliminado = usuarios.splice(indice, 1); //Eliminamos el usuario usando .splice()
        //Imprimimos el usuario eliminado
        console.log("Usuario eliminado:", usuarioEliminado[0]);
    } else {
        //Si no se encuentra un usuario con esos datos, lo informamos
        console.log("No se encontro ningun usuario con estos datos.");
    }
}


// Punto 4: Sistema de Préstamos-----------------------------------------------------------------------------------------------------------------------------------------------------
// a)	Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
// b)	Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.

// a) Funcion para prestar un libro
function prestarLibro(idLibro, idUsuario) {
    //Buscamos al usuario en el array de usuarios por su ID
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (!usuario) {
        //Si el usuario no existe, mostramos un mensaje y terminamos la funcion, regresando al menu principal
        console.log("No se encontro ningun usuario con este ID.");
        return;
    }

    //Buscamos el libro en el array de libros por su ID
    let libro = libros.find(libro => libro.id === idLibro);
    if (!libro) {
        //Si el libro no existe, mostramos un mensaje y terminamos la funcion, regresando al menu principal
        console.log("No se encontro ningun libro con este ID.");
        return;
    }
    //Verificamos si el libro está disponible para ser prestado
    if (!libro.disponible) {
        //Si el libro no está disponible, mostramos un mensaje y terminamos la funcion, regresando al menu principal
        console.log("El libro " + libro.titulo + " no esta disponible.");
        return;
    }
    //Marcamos el libro como no disponible y agregamos el ID del libro a la lista de libros prestados del usuario
    libro.disponible = false;
    usuario.librosPrestados.push(idLibro);

    //Confirmamos que el préstamo se realizó correctamente
    console.log("Prestamo realizado exitosamente. Usuario: " + usuario.nombre + ", Libro: " + libro.titulo);
}

// b) Funcion para devolver un libro
function devolverLibro(idLibro, idUsuario) {
    // Buscamos el usuario por ID
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (!usuario) {
        console.log("No se encontro ningun usuario con el ID proporcionado.");
        return;
    }

    // Verificamos si el libro esta en la lista de libros prestados del usuario
    let indiceLibroPrestado = usuario.librosPrestados.indexOf(idLibro);
    if (indiceLibroPrestado === -1) {
        console.log("El libro con ID " + idLibro + " no fue prestado al usuario.");
        return;
    }

    // Buscamos el libro en el array de libros
    let libro = libros.find(libro => libro.id === idLibro);
    if (!libro) {
        console.log("No se encontro ningun libro con este ID.");
        return;
    }

    // Marcamos el libro como disponible
    libro.disponible = true;

    // Eliminamos el ID del libro de la lista de libros prestados del usuario
    usuario.librosPrestados.splice(indiceLibroPrestado, 1);

    // Mensaje de confirmacion
    console.log("Devolucion realizada con exito. Usuario: " + usuario.nombre + ", Libro: " + libro.titulo);
}

//Punto 5: Sistema de Préstamos------------------------------------------------------------------------------------------------------------------------------------------------------
// a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
// Cantidad total de libros.
// Cantidad de libros prestados.
// Cantidad de libros por género.
// Libro más antiguo y más nuevo

function generarReporteLibros() {
    //Calculamos la longitud del array de libros para obtener la cantidad total
    let cantidadTotalLibros = libros.length;

    //Cantidad de libros prestados
    //Usamos .filter() para seleccionar los libros que no están disponibles y contamos la cantidad de ellos
    let cantidadLibrosPrestados = libros.filter(libro => libro.disponible).length;

    //Cantidad de libros por género
    //Utilizamos .reduce() para agrupar los libros por género y contar cuántos hay de cada uno
    let cantidadPorGenero = libros.reduce((acumulador, libro) => {
        //Incrementamos el contador del género actual o lo inicia en 1 en caso de no existir
        acumulador[libro.genero] = (acumulador[libro.genero] || 0) + 1;
        return acumulador;
    }, {}); //Empezamos con un objeto vacío como acumulador

    //Libro más antiguo
    //Usamos .reduce() para encontrar el libro con el año de publicación más bajo
    let libroMasAntiguo = libros.reduce((antiguo, libro) => 
        libro.anio < antiguo.anio ? libro : antiguo, // Comparamos el año de publicación
        libros[0] // Partimos del primer libro como referencia inicial
    );

    //Libro más nuevo
    //Usamos .reduce() para encontrar el libro con el año de publicación más alto
    let libroMasNuevo = libros.reduce((nuevo, libro) => 
        libro.anio > nuevo.anio ? libro : nuevo, //Comparamos el año de publicación
        libros[0] //Partimos del primer libro como referencia inicial
    );

    //Generar el reporte consolidado
    let reporte = {
        cantidadTotalLibros: cantidadTotalLibros, //Total de libros
        cantidadLibrosPrestados: cantidadLibrosPrestados, //Total de libros prestados
        cantidadPorGenero: cantidadPorGenero, //cantidad de libros por género
        libroMasAntiguo: libroMasAntiguo, //Libro más antiguo
        libroMasNuevo: libroMasNuevo //Libro más nuevo
    };

    //Mostramos el reporte en la consola
    console.log("Reporte de libros:", reporte);

    //Devolvemos el reporte generado
    return reporte;
}

// Punto 6: Identificación Avanzada de libros----------------------------------------------------------------------------------------------------------------------------------------
// Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres). La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola. 
// En este punto además de colocar los métodos, tendrán que pensar muy bien la forma de filtrar para que solo sean letras. Piensen muy bien su lógica. (no permitiendo el método (…) o spread operator como fué mencionado en clase)

function librosConPalabrasEnTitulo() {
    const librosFiltrados = libros.filter(libro => {
        // Limpiamos el titulo y lo dividimos en palabras
        const palabras = libro.titulo.trim().split(" ").filter(palabra => palabra !== "");

        // Verificamos que tenga mas de una palabra y que todas las palabras contengan solo letras
        if (palabras.length <= 1) return false;
        return palabras.every(palabra => /^[a-zA-Z]+$/.test(palabra));
    });

    // Extraemos los titulos de los libros filtrados
    const titulosFiltrados = librosFiltrados.map(libro => libro.titulo);

    // Mostramos el resultado
    console.log("Libros con mas de una palabra en el titulo (solo letras):", titulosFiltrados);
    return titulosFiltrados;
}

// Punto 7: Cálculos Estadísticos----------------------------------------------------------------------------------------------------------------------------------------------------
// a)	Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
// Promedio de años de publicación de los libros.
// Año de publicación más frecuente.
// Diferencia en años entre el libro más antiguo y el más nuevo.

function calcularEstadisticas() {
    let anios = libros.map(libro => libro.anio); //Extraemos los años en un array

    // a. Calcular el promedio de los años
    let suma = 0; 
    for (let i = 0; i < anios.length; i++) {
        suma += anios[i]; //Usamos un bucle para sumar todos los años en el array
    }
    let promedio = Math.round(suma / anios.length); //Divide por la cantidad de años y redondea

    // b. Encontrar el año más frecuente
    let frecuenciaAnios = {}; //almacena la frecuencia de cada año
    anios.forEach(anio => {
        frecuenciaAnios[anio] = (frecuenciaAnios[anio] || 0) + 1;//Sumamos el contador de cada año en el array
    });
    let anioMasFrecuente = null; //Se comineza por el año más frecuente
    let maxFrecuencia = 0; //Se comienza por la máxima frecuencia en 0
    for (let anio in frecuenciaAnios) {
        if (frecuenciaAnios[anio] > maxFrecuencia) { //Si se encuentra un año con mayor frecuencia, se actualizan las variables
            maxFrecuencia = frecuenciaAnios[anio];
            anioMasFrecuente = parseInt(anio); //Convertimos el año a número
        }
    }

    // c. Calcular la diferencia en años entre el libro más antiguo y el más reciente
    let anioMasAntiguo = Math.min(...anios);//Iniciamos con los valores del año más antiguo y el más reciente con el primer elemento
    let anioMasReciente = Math.max(...anios);
    const diferenciaAnios = anioMasReciente - anioMasAntiguo;

    // Mostramos las estadisticas
    console.log("Promedio de anios de publicacion: " + promedio);
    console.log("Anio mas frecuente: " + anioMasFrecuente);
    console.log("Diferencia entre libro mas antiguo y mas reciente: " + diferenciaAnios);
    return { promedio, anioMasFrecuente, diferenciaAnios };
}

// Punto 8: Manejo de Cadenas--------------------------------------------------------------------------------------------------------------------------------------------------------
// a)	Crear una función normalizarDatos() que utilice métodos de strings para:
// Convertir todos los títulos a mayúsculas.
// Eliminar espacios en blanco al inicio y final de los nombres de autores.
// Formatear los emails de los usuarios a minúsculas

function normalizarDatos() {
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase(); // Convertimos el título a mayúsculas
        libro.autor = libro.autor.trim(); // Eliminamos espacios en blanco al inicio y final del nombre del autor
    });

    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase(); // Convertimos los emails a minúsculas
    });
}

// Punto 9: Interfaz de Usuario por Consola------------------------------------------------------------------------------------------------------------------------------------------
// a)	Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
// El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.


function menuPrincipal() {
    let opcion;
    do {
        console.log("Bienvenido! Elija una de las siguientes opciones:");
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
        console.log("13. Buscar libros con varias palabras en el titulo");
        console.log("14. Calcular estadisticas de los libros");
        console.log("15. Salir");

        opcion = parseInt(prompt("Ingrese una opcion: "));
        if (isNaN(opcion) || opcion < 1 || opcion > 15) {
            console.log("Por favor, ingrese una opcion valida.");
            continue;
        }

        switch (opcion) {
            case 1:
                let id = parseInt(prompt("Ingrese el ID del libro: "));
                let titulo = prompt("Ingrese el titulo del libro: ");
                let autor = prompt("Ingrese el autor del libro: ");
                let anio = parseInt(prompt("Ingrese el anio de publicacion: "));
                let genero = prompt("Ingrese el genero del libro: ");
                agregarLibro(id, titulo, autor, anio, genero);
                break;
            case 2:
                let criterio = prompt("Ingrese el criterio de busqueda (titulo, autor, anio, genero): ");
                let valor = prompt("Ingrese el valor a buscar: ");
                buscarLibro(criterio, valor);
                break;
            case 3:
                let criterioOrden = prompt("Ingrese el criterio de ordenamiento (titulo, autor, anio): ");
                ordenarLibros(criterioOrden);
                break;
            case 4:
                let idLibroBorrar = parseInt(prompt("Ingrese el ID del libro a borrar: "));
                borrarLibro(idLibroBorrar);
                break;
            case 5:
                let nombreUsuario = prompt("Ingrese el nombre del usuario: ");
                let emailUsuario = prompt("Ingrese el email del usuario: ");
                registrarUsuario(nombreUsuario, emailUsuario);
                break;
            case 6:
                mostrarTodosLosUsuarios();
                break;
            case 7:
                let emailBuscar = prompt("Ingrese el email del usuario a buscar: ");
                buscarUsuario(emailBuscar);
                break;
            case 8:
                let nombreBorrar = prompt("Ingrese el nombre del usuario a borrar: ");
                let emailBorrar = prompt("Ingrese el email del usuario a borrar: ");
                borrarUsuario(nombreBorrar, emailBorrar);
                break;
            case 9:
                let idLibroPrestar = parseInt(prompt("Ingrese el ID del libro a prestar: "));
                let idUsuarioPrestar = parseInt(prompt("Ingrese el ID del usuario: "));
                prestarLibro(idLibroPrestar, idUsuarioPrestar);
                break;
            case 10:
                let idLibroDevolver = parseInt(prompt("Ingrese el ID del libro a devolver: "));
                let idUsuarioDevolver = parseInt(prompt("Ingrese el ID del usuario: "));
                devolverLibro(idLibroDevolver, idUsuarioDevolver);
                break;
            case 11:
                generarReporteLibros();
                break;
            case 12:
                normalizarDatos();
                console.log("Datos normalizados correctamente.");
                break;
            case 13:
                librosConPalabrasEnTitulo();
                break;
            case 14:
                calcularEstadisticas();
                break;
            case 15:
                console.log("Hasta luego!");
                break;
        }
    } while (opcion !== 15);
}

// Ejecutar el menu principal
menuPrincipal();








//Ultimas correcciones: 
// not "!" 
// Comentarios
// pasar los const a let
// chequear las formulas math.
// correccion en implementacion forEach en busqueda de libros.
// eliminación de console.log s innecesarias que imprimían arrays en el menú principal, 
// invocación de opciones 13 y 14 en el menú principal.