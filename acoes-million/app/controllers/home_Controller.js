const homeController = {
    index: (request, response, next)=> {
        response.render("index", { title: 'Express' });
    }
}

module.exports = homeController