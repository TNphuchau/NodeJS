class SiteController{
    
    // [GET] / home
    home(req, res){
        res.render('home');
    }

    // [GET] / search
    search(req, res){
        res.render('search');
    }

    // [GET] / search
    contract(req, res){
        res.send('contract');
    }

}

module.exports = new SiteController;