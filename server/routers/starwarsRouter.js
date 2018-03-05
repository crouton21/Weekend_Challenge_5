const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const starwarsSchema = new mongoose.Schema(
    {
        url: {type: String, required:true},
        name: {type: String},
        birth_year: {type: String},
        gender: {type: String},
        climate: {type: String},
        population: {type: String},
        title: {type: String},
        release_date: {type: String},
        director: {type: String},
        model: {type: String},
        passengers: {type: String},
        manufacturer: {type: String},
        language: {type: String},
        classification: {type: String},
        type: {type:String}
    }
)

const starwars = mongoose.model('starwars', starwarsSchema, 'starwars');

router.post('/person', function(request, response){
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

router.post('/planet', function(request, response){
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

router.post('/film', function(request, response){
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

router.post('/starship', function(request, response){
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

router.post('/vehicle', function(request, response){
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

router.post('/species', function(request, response){
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

router.get('/', function(request, response){
    starwars.find({}, function(error, foundFavorites){
        if(error){
            console.log('error on getting favorites', error);
            response.sendStatus(500);
        }
        else{
            response.send(foundFavorites)
        }
    })
});

router.delete('/:id', function(request, response){
    let id = request.params.id;
    starwars.findByIdAndRemove(
        {"_id": id},
        function(error, starwarsDeleted){
            if (error){
                console.log('error on deleting starwars', error);
                response.sendStatus(500);
            }
            else{
                response.sendStatus(200)
            }
        }
    )
});


module.exports = router;