exports.homePage = (req, res) => {

    res.render('index', {
        title: 'Page Title'
    });
};

exports.addStore = (req, res) => {

    res.render('editStore', {
        title: 'Add Store'
    });
};

exports.createStore = (req, res) => {

    res.json(req.body);
};