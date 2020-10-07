const HomeController = {
    index: (request, response, next) => {
        response.render("index", { title: "[API] Usuário" })
    }
}

module.exports = HomeController