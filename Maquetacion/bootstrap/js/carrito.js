class Carrito {
    //añadir producto carrito 
    comprarProducto(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }
    leerDatosProducto(producto) {
        const infoProducto = {
            titulo: producto.querySelector("h2").textContent, precio: producto.querySelector(".precio").textContent,
            imagen: producto.querySelector("img").src,
            id: producto.querySelector("a").getAttribute("data-id"),
            cantidad: 1
        }
        
        this.insertarCarrito(infoProducto)
    }
    insertarCarrito(producto) {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src = "${producto.imagen}" width=100>
        </td>
        <td> ${producto.titulo} </td>
        <td> ${producto.precio} </td>
        <td> ${producto.precio} </td>
        <a href= "#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
        `;
        listaProductos.appendChild(row);

    }
    eliminarProducto(e) {
        e.preventDefault();
        let producto, productoID;
        if (e.target.classList.contains("borrar-producto")) {
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector("a").getAttribute("data-id")
        }
    }
    vaciarCarrito(e) {
        e.preventDefault();
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        return false;
    }
}