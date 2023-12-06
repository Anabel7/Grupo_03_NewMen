const controller = {
    detalles: (req, res) => {
        res.render('products/detalles');
    },
    agregarProducto: (req, res) => {
        res.render('products/agregarProducto');
    },
    editarProducto: (req,res) => {
        res.render('products/editarProducto');
    }
}
module.exports = controller;