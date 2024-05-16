export const queries = {
    
    // usuarios
    getUsuarios: 'SELECT * FROM USUARIO', 


    // items
    getItems: 'SELECT ITEM_DETALLE.ITEM_DETALLE_ID, ITEM_DETALLE.ITEM_DETALLE_SUCURSAL_ID, ITEM_DETALLE.ITEM_DETALLE_ITEM_ID, ITEM.ITEM_DESCRIPCION, ITEM.ITEM_RUBRO_ID, RUBRO.RUBRO_DESCRIPCION, ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID, CATEGORIA.CATEGORIA_DESCRIPCION, ITEM_DETALLE.ITEM_DETALLE_STOCK_MINIMO, ITEM_DETALLE.ITEM_DETALLE_UNIDAD_ID, UNIDAD.UNIDAD_DESCRIPCION, ITEM_DETALLE.ITEM_DETALLE_MARCA, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_UNO, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_DOS, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_TRES, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_CUATRO, ITEM_DETALLE.ITEM_DETALLE_STATUS, ITEM_DETALLE.ITEM_DETALLE_FECHA_FABRICACION, ITEM_DETALLE.ITEM_DETALLE_FECHA_VENCIMIENTO, ITEM_DETALLE.ITEM_DETALLE_OBSERVACION FROM ITEM_DETALLE LEFT OUTER JOIN ITEM ON ITEM_DETALLE.ITEM_DETALLE_ITEM_ID = ITEM.ITEM_ID LEFT OUTER JOIN RUBRO ON ITEM.ITEM_RUBRO_ID = RUBRO.RUBRO_ID LEFT OUTER JOIN CATEGORIA ON ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID = CATEGORIA.CATEGORIA_ID LEFT OUTER JOIN UNIDAD ON ITEM_DETALLE.ITEM_DETALLE_UNIDAD_ID = UNIDAD.UNIDAD_ID', 

    getItemsRubroId: 'SELECT ITEM_DETALLE.ITEM_DETALLE_ID, ITEM_DETALLE.ITEM_DETALLE_SUCURSAL_ID, ITEM_DETALLE.ITEM_DETALLE_ITEM_ID, ITEM.ITEM_DESCRIPCION, ITEM.ITEM_RUBRO_ID, RUBRO.RUBRO_DESCRIPCION, ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID, CATEGORIA.CATEGORIA_DESCRIPCION, ITEM_DETALLE.ITEM_DETALLE_STOCK_MINIMO, ITEM_DETALLE.ITEM_DETALLE_UNIDAD_ID, UNIDAD.UNIDAD_DESCRIPCION, ITEM_DETALLE.ITEM_DETALLE_MARCA, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_UNO, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_DOS, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_TRES, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_CUATRO, ITEM_DETALLE.ITEM_DETALLE_STATUS, ITEM_DETALLE.ITEM_DETALLE_FECHA_FABRICACION, ITEM_DETALLE.ITEM_DETALLE_FECHA_VENCIMIENTO, ITEM_DETALLE.ITEM_DETALLE_OBSERVACION FROM ITEM_DETALLE LEFT OUTER JOIN ITEM ON ITEM_DETALLE.ITEM_DETALLE_ITEM_ID = ITEM.ITEM_ID LEFT OUTER JOIN RUBRO ON ITEM.ITEM_RUBRO_ID = RUBRO.RUBRO_ID LEFT OUTER JOIN CATEGORIA ON ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID = CATEGORIA.CATEGORIA_ID LEFT OUTER JOIN UNIDAD ON ITEM_DETALLE.ITEM_DETALLE_UNIDAD_ID = UNIDAD.UNIDAD_ID WHERE ITEM.ITEM_RUBRO_ID = @id', 

    getItemsCategoriaId: 'SELECT ITEM_DETALLE.ITEM_DETALLE_ID, ITEM_DETALLE.ITEM_DETALLE_SUCURSAL_ID, ITEM_DETALLE.ITEM_DETALLE_ITEM_ID, ITEM.ITEM_DESCRIPCION, ITEM.ITEM_RUBRO_ID, RUBRO.RUBRO_DESCRIPCION, ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID, CATEGORIA.CATEGORIA_DESCRIPCION, ITEM_DETALLE.ITEM_DETALLE_STOCK_MINIMO, ITEM_DETALLE.ITEM_DETALLE_UNIDAD_ID, UNIDAD.UNIDAD_DESCRIPCION, ITEM_DETALLE.ITEM_DETALLE_MARCA, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_UNO, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_DOS, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_TRES, ITEM_DETALLE.ITEM_DETALLE_IMAGEN_CUATRO, ITEM_DETALLE.ITEM_DETALLE_STATUS, ITEM_DETALLE.ITEM_DETALLE_FECHA_FABRICACION, ITEM_DETALLE.ITEM_DETALLE_FECHA_VENCIMIENTO, ITEM_DETALLE.ITEM_DETALLE_OBSERVACION FROM ITEM_DETALLE LEFT OUTER JOIN ITEM ON ITEM_DETALLE.ITEM_DETALLE_ITEM_ID = ITEM.ITEM_ID LEFT OUTER JOIN RUBRO ON ITEM.ITEM_RUBRO_ID = RUBRO.RUBRO_ID LEFT OUTER JOIN CATEGORIA ON ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID = CATEGORIA.CATEGORIA_ID LEFT OUTER JOIN UNIDAD ON ITEM_DETALLE.ITEM_DETALLE_UNIDAD_ID = UNIDAD.UNIDAD_ID WHERE ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID = @id', 


    // rubros
    getRubros: 'SELECT RUBRO_ID, RUBRO_DESCRIPCION, RUBRO_ICONO FROM RUBRO', 


    // categorias
    getCategorias: 'SELECT CATEGORIA_ID, CATEGORIA_DESCRIPCION, CATEGORIA_RUBRO_ID, CATEGORIA_ICONO FROM CATEGORIA', 

    getCategoriasRubroId: 'SELECT CATEGORIA_ID, CATEGORIA_DESCRIPCION, CATEGORIA_RUBRO_ID, CATEGORIA_ICONO FROM CATEGORIA WHERE CATEGORIA_RUBRO_ID = @id', 

    getCiudades: 'SELECT CIUDAD_ID, CIUDAD_DESCRIPCION, CIUDAD_PROVINCIA_ID, PROVINCIA.PROVINCIA_DESCRIPCION, CIUDAD_PROPIEDADES, CIUDAD_IMAGEN FROM CIUDAD LEFT OUTER JOIN PROVINCIA ON CIUDAD.CIUDAD_PROVINCIA_ID = PROVINCIA.PROVINCIA_ID', 
    
    getCiudadesProvinciaId: 'SELECT CIUDAD_ID, CIUDAD_DESCRIPCION, CIUDAD_PROVINCIA_ID, PROVINCIA.PROVINCIA_DESCRIPCION, CIUDAD_PROPIEDADES, CIUDAD_IMAGEN FROM CIUDAD LEFT OUTER JOIN PROVINCIA ON CIUDAD.CIUDAD_PROVINCIA_ID = PROVINCIA.PROVINCIA_ID WHERE CIUDAD_PROVINCIA_ID = @id', 

    getProvincias: 'SELECT PROVINCIA_ID, PROVINCIA_DESCRIPCION FROM PROVINCIA', 

    getInmuebles: 'SELECT * FROM INMUEBLE', 

}