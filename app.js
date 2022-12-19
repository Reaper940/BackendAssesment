const express = require('express')
const port = process.env.PORT || 3000
console.log(port)
const app = express()

app.use(express.json())


app.use('/', require('./Routes/User_ProfileRoutes').router)
app.use('/', require('./Routes/Tenant_ProfileRoutes').Tenant_router)

app.listen(port,()=>{
    console.log('Listening on port: ' + port)
})