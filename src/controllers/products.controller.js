
import {getConnection} from '../database/connection.js'
import sql from 'mssql';



export const getProducts = async (req, res) => {

     try {
    const pool = await getConnection();
    const result = await pool.request().execute('GetAllProductos');

    res.json(result.recordset);  // 👈 enviar array de productos como JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error obteniendo productos" });
  }
}


/******************************************************/
export const getProduct = async (req, res) => {
    

    try{


         const pool = await getConnection();
         const result = await pool
         .request()
         .input('id', sql.VarChar,req.params.id)
         .execute('GetProductoById')

         res.send('obteniendo producto con id ' + req.params.id)
         console.log(result)
    }

    catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error al consultar el producto' });
    }
}

/******************************************************/

export const postProducts = async (req, res) => {
    try {
        const {
            codigo_producto,
            nombre,
            gama,
            dimensiones,
            proveedor,
            descripcion,
            cantidad_en_stock,
            precio_venta,
            precio_proveedor
        } = req.body;

        const pool = await getConnection();

        const result = await pool.request()
            .input('codigo_producto', sql.VarChar, codigo_producto)
            .input('nombre', sql.VarChar, nombre)
            .input('gama', sql.VarChar, gama)
            .input('dimensiones', sql.VarChar, dimensiones)
            .input('proveedor', sql.VarChar, proveedor)
            .input('descripcion', sql.VarChar, descripcion)
            .input('cantidad_en_stock', sql.SmallInt, cantidad_en_stock)
            .input('precio_venta', sql.Decimal(10, 2), precio_venta)
            .input('precio_proveedor', sql.Decimal(10, 2), precio_proveedor)
            .execute('InsertProducto');

        res.json({
            message: 'Producto creado correctamente',
            result: result.recordset
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};


/******************************************************/

export const putProducts = async (req, res) => {
    try {
        const {
            codigo_producto,
            nombre,
            gama,
            dimensiones,
            proveedor,
            descripcion,
            cantidad_en_stock,
            precio_venta,
            precio_proveedor
        } = req.body;

        

        const pool = await getConnection();

        const result = await pool.request()
            .input('codigo_producto', sql.VarChar, codigo_producto)
            .input('nombre', sql.VarChar, nombre)
            .input('gama', sql.VarChar, gama)
            .input('dimensiones', sql.VarChar, dimensiones)
            .input('proveedor', sql.VarChar, proveedor)
            .input('descripcion', sql.VarChar, descripcion)
            .input('cantidad_en_stock', sql.Int, cantidad_en_stock)
            .input('precio_venta', sql.Decimal(10, 2), precio_venta)
            .input('precio_proveedor', sql.Decimal(10, 2), precio_proveedor)
            .execute('UpdateProducto');   

            console.log(result)
            res.send('actualizado el producto con id ' + req.params.id)

    

        

    } catch (error) {
        console.error("Error en putProducts:", error);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};



/********************************************************************/
export const deleteProducts = async (req, res) => {


     try{


         const pool = await getConnection();
         const result = await pool
         .request()
         .input('codigo_producto', sql.VarChar,req.params.id)
         .execute('DeleteProducto')

         
         
          res.send('eliminando el producto con id ' + req.params.id)
    }

    catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }









   
}


