const Tenant_Profile = require('../Models/Tenant_Profile')

const list_all = async (req, res) => {
        try{
           await Tenant_Profile.query()
            .then(Tenant_Profile => {
                res.json(Tenant_Profile)
            })
        }catch(error){
            res.send(error)
        }
      
    }
 const list_ByID = async(req, res) => {
    
    try{
        const id = parseInt(req.params.id)
        await Tenant_Profile.query()
            .where('tenant_id', id)
            .then(Tenant_Profile => {
                res.json(Tenant_Profile)
            })
    }catch(error){
        res.send(error)
    }
   
}   

 const create = async(req, res) => {
    try{
        const {tenant_name,Address,city,state,country,zip_code,phone,web_url}= req.body
        await Tenant_Profile.query().insert({
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
            res.json("Tenant added successfully")
        })

    }catch(error){
        res.send(error)
    }

}   

const Update = async (req, res) => {
    
    try{
        const id = parseInt(req.params.id)
        const {tenant_name,Address,city,state,country,zip_code,phone,web_url}= req.body
        await Tenant_Profile.query().where('tenant_id', id).patch({
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
            res.json("Tenant Updated successfully")
        })
    }catch(error){
        res.send(error)
    }
   
}

const Delete= async(req, res) => {
    
    try{
        const id = parseInt(req.params.id)
        await Tenant_Profile.query().delete()
            .where('tenant_id', id)
            .then(Tenant_Profile => {
                res.json('Tenant Deleted Successfully')
            })
    }catch(error){
        res.send(error)
    }
   
}

module.exports={
    list_all,
    list_ByID,
    create,
    Update,
    Delete
}