//PRODUCTOS
const productos =[
    //PERFUMES HOMBRE
    {
        id: "perfume hombre-01",
        titulo:"Perfume Hombre 01",
        imagen:"./img/hombres/img1.jpg",
        categoria:{
            nombre:"Para Ellos",
            id:"ellos"
        },
        precio: 10000
    },
    {
        id: "perfume hombre-02",
        titulo:"Perfume Hombre 02",
        imagen:"./img/hombres/img-2.jpg",
        categoria:{
            nombre:"Para Ellos",
            id:"ellos"
        },
        precio: 10000
    },
    {
        id: "perfume hombre-03",
        titulo:"Perfume Hombre 03",
        imagen:"./img/hombres/img.3.jpg",
        categoria:{
            nombre:"Para Ellos",
            id:"ellos"
        },
        precio: 10000
    },
    {
        id: "perfume hombre-04",
        titulo:"Perfume Hombre 04",
        imagen:"./img/hombres/img4.jpg",
        categoria:{
            nombre:"Para Ellos",
            id:"ellos"
        },
        precio: 10000
    },
    {
        id: "perfume hombre-05",
        titulo:"Perfume Hombre 05",
        imagen:"./img/hombres/img5.jpg",
        categoria:{
            nombre:"Para Ellos",
            id:"ellos"
        },
        precio: 10000
    },
    {
        id: "perfume hombre-06",
        titulo:"Perfume Hombre 06",
        imagen:"./img/hombres/img.6.jpg",
        categoria:{
            nombre:"Para Ellos",
            id:"ellos"
        },
        precio: 10000
    },
    //PERFUMES MUJERES
    {
        id: "perfume mujer-01",
        titulo:"Perfume Mujer 01",
        imagen:"./img/mujeres/perfume1.jpg",
        categoria:{
            nombre:"Para Ellas",
            id:"ellas"
        },
        precio: 10000
    },
    {
        id: "perfume mujer-02",
        titulo:"Perfume Mujer 02",
        imagen:"./img/mujeres/perfume-2.jpg",
        categoria:{
            nombre:"Para Ellas",
            id:"ellas"
        },
        precio: 10000
    },
    {
        id: "perfume mujer-03",
        titulo:"Perfume Mujer 03",
        imagen:"./img/mujeres/perfume3.jpg",
        categoria:{
            nombre:"Para Ellas",
            id:"ellas"
        },
        precio: 10000
    },
    {
        id: "perfume mujer-04",
        titulo:"Perfume Mujer 04",
        imagen:"./img/mujeres/perfume4.jpg",
        categoria:{
            nombre:"Para Ellas",
            id:"ellas"
        },
        precio: 10000
    },
    {
        id: "perfume mujer-05",
        titulo:"Perfume Mujer 05",
        imagen:"./img/mujeres/perfume5.jpg",
        categoria:{
            nombre:"Para Ellas",
            id:"ellas"
        },
        precio: 10000
    },
    {
        id: "perfume mujer-06",
        titulo:"Perfume Mujer 06",
        imagen:"./img/mujeres/perfume6.jpg",
        categoria:{
            nombre:"Para Ellas",
            id:"ellas"
        },
        precio: 10000
    },
    //PARA LOS MAS CHICOS
    {
        id: "perfume niño-01",
        titulo:"Perfume Niño 01",
        imagen:"./img/niños/perfume1.jpg",
        categoria:{
            nombre:"Para los mas chicos",
            id:"chicos"
        },
        precio: 10000
    },
    {
        id: "perfume niña-02",
        titulo:"Perfume Niña 02",
        imagen:"./img/niños/perfume2.jpg",
        categoria:{
            nombre:"Para los mas chicos",
            id:"chicos"
        },
        precio: 10000
    },
    {
        id: "perfume niño-03",
        titulo:"Perfume Niño 03",
        imagen:"./img/niños/perfume3.png",
        categoria:{
            nombre:"Para los mas chicos",
            id:"chicos"
        },
        precio: 10000
    },
    {
        id: "perfume niña-04",
        titulo:"Perfume Niña 04",
        imagen:"./img/niños/perfume4.png",
        categoria:{
            nombre:"Para los mas chicos",
            id:"chicos"
        },
        precio: 10000
    },
    {
        id: "perfume niña-05",
        titulo:"Perfume Niña 05",
        imagen:"./img/niños/perfume5.jpg",
        categoria:{
            nombre:"Para los mas chicos",
            id:"chicos"
        },
        precio: 10000
    },
    {
        id: "perfume niño-06",
        titulo:"Perfume Niño 06",
        imagen:"./img/niños/perfume6.jpg",
        categoria:{
            nombre:"Para los mas chicos",
            id:"chicos"
        },
        precio: 10000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalle">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        
        contenedorProductos.append(div);

    })
    actualizarBotonesAgregar();
}
cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e)=>{
        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
            
        } else{
           tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
        
    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else{
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado); 
    }
    actualizarNumerito()
   

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce ((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito;
}