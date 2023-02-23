const express = require('express')
const User_Controller = require('../Controller/User_Controller')
const User_router = express.Router()


// Ideally your route file should be calling a set of function instead of database calls. You can introduce a controller that should contain the 
// business logic and a set of utility files that separately can deal with different database calls such as a utility file that deals with only
// Tenant database table.

const User_Profile = require('../Models/User_Profile')

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