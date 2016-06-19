Hola @vermicida, aquí subo la práctica donde podrás ver lo que solicitas...

##Sí o sí

**1. Una barra de herramientas con un buscador de productos**

**2. Una página que muestre los productos resultantes de una búsqueda.**

En estos dos puntos apliqué los siguientes conocimientos...
- **Componentes...** `products` que se encarga de mostrar los filtros (por nombre, categoría y distancia) y la lista de productos
- **Directivas...** `productRow` que sirve para pintar la información de un producto dentro de una tabla que lista a productos
- **Filtros...**
    + `ProductsByCategoryName`, que se encarga de filtrar los productos por categoría
- **Servicios...**
    + `ProductService`, para obtener los productos
    + `UserService`, para obtener los usuarios
    + `CategoryService`, para obtener las categorías

**3. Una página que muestre los detalles de un producto concreto.**

En este punto apliqué...

- Componentes... `productDetails` que se encarga de mostrar el detalle de un producto

##Keep coding
Aquí apliqué los siguiente...

- **Filtros...**
    + `ProductPrefix`, que se encarga de mostrar la categoría del producto como prefijo de su nombre en el listado de productos
    + `ProductsByDistance`, que se encarga de filtrar los productos por la distancia de sus vendedores con respecto a la del usuario que visualiza 'whatapop'
- **Web Storage...**, en `Local Storage` para almacenar las selecciones de los filtros antes mencionados, permitiendo así mantener la selección que el usuario había hecho antes de ir al detalle de un producto
- **Geolocalización**, para obtener la ubicación del usuario de 'whatapop' que quiere obtener los productos por distancia de su vendedor


Espero que todo esté correcto!!!
Gracias y saludos