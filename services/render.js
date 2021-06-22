const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    console.log(req.headers.host);
    axios.get(`https://a3webs.herokuapp.com/api`)
        .then(function(response){
            res.render('index', { users : response.data.Faculties });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get(`https://a3webs.herokuapp.com/api/${req.query.id }`)
        .then(function(userdata){

            res.render("update_user", { user : userdata.data.Faculties})
        })
        .catch(err =>{
            res.send(err);
        })
}