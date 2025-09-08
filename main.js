//por aitageo
//carrito de compras

document.addEventListener('DOMContentLoaded',()=>{
 const carrito = document.getElementById('carrito');
 carrito.addEventListener('mouseover', ()=>{
    const contenedorCarrito = document.querySelector('.mostrar-carrito');
    contenedorCarrito.style.display = "block";
    
 })

 carrito.addEventListener('mouseout', ()=>{
    const contenedorCarrito = document.querySelector('.mostrar-carrito');
    contenedorCarrito.style.display = "none";
    
 })
 


});


//fin carrito de compras