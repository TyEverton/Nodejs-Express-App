const express = require('express') //calls the express library and gives us access to the library
const app = express() //instance of express

app.get('/', (req, res) => {
   res.send('Hello from my app!')
})

app.listen(6000, ()=> {
  console.log(`Server bumpin' on port 6000`)
})