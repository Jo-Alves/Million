const homeController = {
    index: (req, res) => {
        res.render('index', { title: 'Express' });
    }
}

module.exports = homeController;