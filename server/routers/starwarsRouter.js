const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const starwarsSchema = new mongoose.Schema(
    {
        url: {type: String, required:true},
        name: {type: String, required:true}
    }
)

const starwars = mongoose.model('starwars', starwarsSchema, 'starwars');

router.post('/', function(request, response){
    let newFavorite = new starwars(request.body);
    console.log('Starwars thing to save is:', request.body);
    newFavorite.save(function(error, savedStarwars){
        if (error){
            console.log('error on saving starwars favorite', error);
            response.sendStatus(500);
        }
        else{
            response.sendStatus(200);
        }
    })
});


module.exports = router;