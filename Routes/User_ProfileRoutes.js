const express = require('express')
const User_router = express.Router()

const User_Profile = require('../Models/User_Profile')
//Get Route for all User Profiles
User_router.get('/User_Profiles', (req, res) => {
    User_Profile.query()
        .then(User_Profile => {
            res.json(User_Profile)
        })
})
//Get Route for a Specific User Profile.
User_router.get('/User_Profiles/:id', (req, res) => {
    try{
        const id = parseInt(req.params.id)
    User_Profile.query()
        .where('user_id', id)
        .then(User_Profile => {
            if (User_Profile.length === 0){
                console.log("Arry is empty")
                res.json("User not found.")
            }
            else{
                res.json(User_Profile)
            }
        })
    }catch(error){
        res.send(error.message)
    }
    
})
//Post Routes for Creating new User_Profile
User_router.post('/User_Profiles', (req, res) => {
    try{
        const {first_name,last_name,department,designation,tenant_id,image_url,city,country,bio,social_links,employee_id} = req.body
        User_Profile.query().insert({
            'first_name':first_name,
             'last_name':last_name,
             'department':department,
             'designation':designation,
             'tenant_id':tenant_id,
             'image_url':image_url,
             'city':city,
             'country':country,
             'bio':bio,
             'social_links':social_links,
             'employee_id':employee_id
        })
        .then(User_Profile => {
                res.json("User added successfully")
            })
    }catch(error){
        res.send(error)
    }

})

//Put Route for Updating a student.
User_router.put('/User_Profiles/:id', (req, res) => {
    let id = parseInt(req.params.id)
    const {first_name,last_name,department,designation,tenant_id,image_url,city,country,bio,social_links,employee_id} = req.body
    User_Profile.query()
        .where('user_id', id).patch({
            'first_name':first_name,
            'last_name':last_name,
            'department':department,
            'designation':designation,
            'tenant_id':tenant_id,
            'image_url':image_url,
            'city':city,
            'country':country,
            'bio':bio,
            'social_links':social_links,
            'employee_id':employee_id

        })
        .then(user => {
            res.json("User Updated Successfully")
        })
})
//Route to Delete a specific User_ProfileId
User_router.delete('/User_Profiles/:id', (req, res) => {
    let id = parseInt(req.params.id)
    User_Profile.query().delete()
        .where('user_id', id)
        .then(User_Profile => {
            res.json("User Deleted Successfully")
        })
})



module.exports = {
    User_router
}