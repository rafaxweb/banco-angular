// mostrarClientes(clientes);
// mostrarGestores(gestores);

// en funciones-gestor
export function obtenerGestores(gestores: any) {
    //mostrarGestores(gestores)

    // Añadir la propiedad activo
    const gestoresNuevo = gestores.map((gestor: any) => {
        gestor.activo = true;
        return gestor;
    });
    //console.log(gestoresNuevo);

    // Filtrar mayores de id = 2
    const gestoresNuevo2 = gestores.filter((gestor: any) => {
        return gestor.id > 2;
    })
    // console.log(gestoresNuevo2);

    // Buscar gestor con id===1
    const gestorId1 = gestores.filter((gestor: any) => {
        return gestor.id === 1;
    })
    //console.log(gestorId1);

    // 
    const indiceEncontrado = gestores.findIndex((gestor: any) => {return gestor.id === 2})
    console.log(indiceEncontrado);
}





