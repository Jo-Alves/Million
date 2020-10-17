const homeController = {
    index: (request, response)=> {
        response.render('index', { title: 'Express' });
      }
}

module.exports = homeController;