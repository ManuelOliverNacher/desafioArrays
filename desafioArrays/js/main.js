const productos=[
    {id:1, nombre:"Buzo Oversize", precio:6500, categoria:"Buzos"},
    {id:2, nombre:"Buzo Ajustados", precio:6500, categoria:"Buzos"},
    {id:3, nombre:"Remeras", precio:3200, categoria:"Remera"},
    {id:4, nombre:"Camperas", precio:7000, categoria:"Campera"},
]
let verProductos= productos.filter(productos=> productos.categoria === "Buzos")
console.log(verProductos);
console.log("-------------------------");
let verPrecio= productos.filter(productos=> productos.precio >= 6000)
console.log(verPrecio);
productos.push({
    id:5, nombre:"Joggins", precio:2500, categoria:"Pantalon"
})
console.log("-------------------------");
console.log(productos)