//======================

const mongoose = require('mongoose')
 const express = require('express');
 const router = express.Router();
 const Schema = require('../models/donuts.js');
 
 const DonutModel = Schema.DonutModel 

//======================
// require express, router, mongoose, Donut schema


//======================
// INDEX


    //Create a GET new route "/new" that renders the new.hbs form

//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (req, res) => {
    DonutModel.find({})
        .then((donuts) => {
            res.render('donuts/index', {
                donuts: donuts
            })
        })
        .catch((error) => {
            console.log(error)
        })
        
})



//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form

router.get('/new.hbs', (request, response) => {
    
        response.render('donuts/new')
    })

//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (request, response) => {
    const donutsId = request.params.id

    donutsModel.findById(donutsId)
        .then((donuts) => {
            response.render('donuts/show', {
                donuts: donuts
            })
        })})




//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"

router.post('/index.hbs', (request, response) => {
    
        const newdonut = request.body
        donutModel.create(newdonut)
        .then(() => {
            response.redirect('/donuts')
        })
    })

//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (request, response) => {
    
        const donutsId = request.params.id
    
        donutsModel.findById(donutsId)
            .then((donuts) => {
    
                
                response.render('donuts/edit', {
                    donuts: donuts
                })
            })
            .catch((error) => {
                console.log(error)
            })
    
    })


//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)

router.put('/show.hbs', (request, response) => {
    
        const donutsIdToUpdate = request.params.id
    
        const updatedDonuts = request.body
    
        donustModel.findByIdAndUpdate(donutsIdToUpdate, updateddonuts, { new: true })
            .then(() => {
    
                response.redirect(`/donuts/${donutsIdToUpdate}`)
            })
            .catch((error) => {
                console.log(error)
            })
    })



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"

// DELETE route WITH A BUTTON
router.delete('/:id', (request, response) => {
    
        const donutsId = request.params.id
    
        donutsModel.findByIdAndRemove(donutsId)
            .then((donuts) => {
    
                response.redirect('/donuts')
            })
            .catch((error) => {
                console.log(error)
            })
    })



//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;
