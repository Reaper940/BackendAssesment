const express = require('express')
const Tenant_Controller = require('../Controller/Tenant_Controller')
const Tenant_router = express.Router()
const Tenant_Profile = require('../Models/Tenant_Profile')

// Ideally your route file should be calling a set of function instead of database calls. You can introduce a controller that should contain the 
// business logic and a set of utility files that separately can deal with different database calls such as a utility file that deals with only
// Tenant database table.



//Get Route for all Tenant_ Profiles
Tenant_router.get('/', Tenant_Controller.list_all)


//Get Route for a Specific Tenant Profile.
Tenant_router.get('/:id', Tenant_Controller.list_ByID)


//Post Route for Creating a new Tenant Profile.
Tenant_router.post('/', Tenant_Controller.create)


//Put Route for updating a specific Tenant Profile.
Tenant_router.put('/:id',Tenant_Controller.Update)


//Delete Route for deleting a specific Tenant Profile.
Tenant_router.delete('/:id', Tenant_Controller.Delete)

module.exports = {
    Tenant_router
}