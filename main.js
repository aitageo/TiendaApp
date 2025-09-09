//por aitageo
//carrito de compras

document.addEventListener('DOMContentLoaded',()=>{
 const carrito = document.getElementById('carrito');
 carrito.addEventListener('mouseover', ()=>{
    const contenedorCarrito = document.querySelector('.mostrar-carrito');
    contenedorCarrito.style.display = "block";
    
 })

 carrito.addEventListener('mouseleave', (e)=>{
    const contenedorCarrito = document.querySelector('.mostrar-carrito');
    e.preventDefault();
    setTimeout( ()=>{
       contenedorCarrito.style.display = "none";
    
    },1000); 
 });

const botones = document.querySelectorAll('.btn-primary');
botones.forEach((boton)=>{
    boton.addEventListener('click', (e)=>{
      e.preventDefault();
      console.log(`Diste click en un boton`);
      const datos = document.querySelector('.btn-primary').parentNode.parentNode;
      leerDatos(datos);
          
    })

})

function leerDatos(datos){
    const infoProducto = {
        imagen: datos.querySelector('img').src,
        titulo: datos.querySelector('h5').textContent,
        precio: datos.querySelector('.precio').textContent,
        id: datos.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoProducto);
      insertarCarrito(infoProducto);
    
};

function insertarCarrito(producto){
   const contenedorCarrito = document.querySelector('.mostrar-carrito table tbody');
    const row = document.createElement('div');
    row.innerHTML = `
    <div class="row">
        <div class="col-4">
            <img src="${producto.imagen}" width="20%">
            </div>`;
      contenedorCarrito.appendChild(row);

}

//fin DOMContentLoaded
});


//fin carrito de compras