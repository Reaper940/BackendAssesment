const express = require('express');
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
// const databaseConfig = require('./database/DatabaseConfig');
const {User_router} = require('./Routes/User_ProfileRoutes')
const {Tenant_router} = require('./Routes/Tenant_ProfileRoutes')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(databaseConfig.initializeDB());

app.get('/', async (req, res) => {

	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

});

app.use('/User_Profiles', User_router)//require('./Routes/User_ProfileRoutes').router)
app.use('/Tenant_Profiles', Tenant_router )//require('./Routes/Tenant_ProfileRoutes').Tenant_router)


app.listen(process.env.PORT || 4000, async () => {
	
	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});