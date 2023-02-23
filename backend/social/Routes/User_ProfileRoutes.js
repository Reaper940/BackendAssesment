const express = require('express')
const User_Controller = require('../Controller/User_Controller')
const User_router = express.Router()

//Get Route for all User Profiles
User_router.get('/', User_Controller.list_all)


//Get Route for a Specific User Profile.
User_router.get('/:id', User_Controller.list_ByID)



//Post Routes for Creating new User_Profile
User_router.post('/', User_Controller.create)

//Put Route for Updating a User Profile.
User_router.put('/:id', User_Controller.update)


//Route to Delete a specific User_ProfileId
User_router.delete('/:id', User_Controller.Delete)



module.exports = {
    User_router
}