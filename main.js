//por aitageo
//carrito de compras

document.addEventListener('DOMContentLoaded',()=>{
   let count = 0;
   const carrito = document.getElementById('carrito');
   totalCarrito = [];
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
      const carritocount = document.getElementById('carrito-count');
      count++;
      carritocount.textContent = count;
      setTimeout( ()=>{
         boton.textContent = "agregando al carrito...";
      },0);
      e.preventDefault();
      console.log(`Diste click en un boton`);
      const datos = e.target.closest('.productos');
      leerDatos(datos);
      setTimeout( ()=>{
         boton.textContent = "agregado al carrito";
      },2000);
      setTimeout( ()=>{
         boton.textContent = "agregar al carrito";    
      },3000)
})

});


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
   const {imagen,titulo,precio,id} = producto;
   const contenedorCarrito = document.querySelector('.mostrar-carrito table tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
            <td><img src="${imagen}" class="imagen-carrito"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td><a href="#" class="btn btn-danger eliminar" data-id="${id}">X</a></td>`;
      contenedorCarrito.appendChild(row);
}


      const contenedorCarrito = document.querySelector('.mostrar-carrito table tbody');
      contenedorCarrito.addEventListener('click',(e)=>{
         if(e.target.classList.contains('eliminar')){
            eliminarProducto(e);
         }
      });
      
      function eliminarProducto(e){
         e.preventDefault();
         const productoId = e.target.getAttribute('data-id');
         console.log(productoId);
         e.target.parentElement.parentElement.remove();
         count--;
         const carritocount = document.getElementById('carrito-count');
         carritocount.textContent = count;
      }




//fin DOMContentLoaded
});


//fin carrito de compras