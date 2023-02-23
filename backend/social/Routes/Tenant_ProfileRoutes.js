const express = require('express')
const Tenant_Controller = require('../Controller/Tenant_Controller')
const Tenant_router = express.Router()


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