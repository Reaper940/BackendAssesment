const express = require('express');
const { Tenant_router } = require('./Routes/Tenant_ProfileRoutes');
const { User_router } = require('./Routes/User_ProfileRoutes');

// Complete Models to ensure validation
// Use Async/Await instead of then clauses (promise approach)



const port = process.env.PORT || 3000
console.log(port)
const app = express()

app.use(express.json())


// app.use('/', require('./Routes/User_ProfileRoutes').router)
// app.use('/', require('./Routes/Tenant_ProfileRoutes').Tenant_router)

// NOTE: follow this pattern
app.use('/user_profile', User_router)
app.use('/tenant_profile', Tenant_router)

app.listen(port,()=>{
    console.log('Listening on port: ' + port)
})