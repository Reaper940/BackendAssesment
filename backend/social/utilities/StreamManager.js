const Tenant_Profile = require('../Models/Tenant_Profile')
const User_Profile = require('../Models/User_Profile')
const processMessage = async (kafkaMessage) => {

	//Start working here
	try{
//		console.log(kafkaMessage);
	if(kafkaMessage.event_name ==='tenant_created'){
		console.log("Tennant added");
		const inserted_tenant_data = await Tenant_Profile.query().insert(kafkaMessage.properties);
		console.log(inserted_tenant_data);
	}if(kafkaMessage.event_name ==='user_created'){
		console.log("User added");
		const inserted_user_data = await User_Profile.query().insert(kafkaMessage.properties);
		console.log(inserted_user_data);
	}
	}catch(error){
		console.log(error);
	}
	
					

};

module.exports = { processMessage };


