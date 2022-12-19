const express = require('express')
const Tenant_router = express.Router()

const Tenant_Profile = require('../Models/Tenant_Profile')


//Get Route for all Tenant_ Profiles
Tenant_router.get('/Tenant_Profiles', (req, res) => {
    try{
        Tenant_Profile.query()
        .then(Tenant_Profile => {
            res.json(Tenant_Profile)
        })
    }catch(error){
        res.send(error)
    }
  
})
//Get Route for a Specific Tenant Profile.
Tenant_router.get('/Tenant_Profiles/:id', (req, res) => {
    
    try{
        const id = parseInt(req.params.id)
        Tenant_Profile.query()
            .where('tenant_id', id)
            .then(Tenant_Profile => {
                res.json(Tenant_Profile)
            })
    }catch(error){
        res.send(error)
    }
   
})
//Post Route for Creating a new Tenant Profile.
Tenant_router.post('/Tenant_Profiles', (req, res) => {
        const {tenant_name,Address,city,state,country,zip_code,phone,web_url}= req.body
        Tenant_Profile.query().insert({
                    'tenant_name':tenant_name,
                    'Address':Address,
                    'city':city,
                    'state':state,
                    'country':country,
                    'zip_code':zip_code,
                    'phone':phone,
                    'web_url':web_url

        })
        .then(Tenant_Profile =>{
            res.json("User added successfully")
        })
})
//Put Route for updating a specific Tenant Profile.
Tenant_router.put('/Tenant_Profiles/:id', (req, res) => {
    
    try{
        const id = parseInt(req.params.id)
        const {tenant_name,Address,city,state,country,zip_code,phone,web_url}= req.body
        Tenant_Profile.query().where('tenant_id', id).patch({
                    'tenant_name':tenant_name,
                    'Address':Address,
                    'city':city,
                    'state':state,
                    'country':country,
                    'zip_code':zip_code,
                    'phone':phone,
                    'web_url':web_url

        })
        .then(Tenant_Profile =>{
            res.json("User Updated successfully")
        })
    }catch(error){
        res.send(error)
    }
   
})
//Delete Route for updating a specific Tenant Profile.
Tenant_router.delete('/Tenant_Profiles/:id', (req, res) => {
    
    try{
        const id = parseInt(req.params.id)
        Tenant_Profile.query().delete()
            .where('tenant_id', id)
            .then(Tenant_Profile => {
                res.json('User Deleted Successfully')
            })
    }catch(error){
        res.send(error)
    }
   
})

module.exports = {
    Tenant_router
}