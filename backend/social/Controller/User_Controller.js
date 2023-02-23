const { modelPaths } = require('../Models/User_Profile')
const User_Profile = require('../Models/User_Profile')

const list_all = async(req, res) => {
    await User_Profile.query()
        .then(User_Profile => {
            res.json(User_Profile)
        })
} 

const list_ByID = async(req, res) => {
    try{
        const id = parseInt(req.params.id)
    await User_Profile.query()
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
    
}


const create = async(req, res) => {
    try{
        const {first_name,last_name,department,designation,tenant_id,image_url,city,country,bio,social_links,employee_id} = req.body
       await User_Profile.query().insert({
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

}

const update = async(req, res) => {
    try{
        let id = parseInt(req.params.id)
        const {first_name,last_name,department,designation,tenant_id,image_url,city,country,bio,social_links,employee_id} = req.body
        await User_Profile.query()
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

    }catch(error){
        res.send(error)
    }
}


const Delete = async(req, res) => {
    let id = parseInt(req.params.id)
    await User_Profile.query().delete()
        .where('user_id', id)
        .then(User_Profile => {
            res.json("User Deleted Successfully")
        })
}

module.exports = {
        list_all,
        list_ByID,
        create,
        update,
        Delete
}