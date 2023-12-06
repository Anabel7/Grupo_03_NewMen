const controller = {
    admin: (req, res) => {
        res.render('user/admin');
    },
    login: (req, res) => {
        res.render('user/login');
    },
    registro: (req, res) => {
        res.render('user/registro');
    }
}
module.exports = controller;