const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.route('/api/sms').post((req, res) => {
  res.send(201, req.body)
})
const cors = require('cors')
var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

app.listen(8000, () => {
    console.log('Server started!')
  })

  app.route('/api/sms').get((req, res) => {
    // const requestedCatName = req.params['name']
    const accountSid = 'ACdc53a41e89fc59ab2b84ae963fbbfe7d';
const authToken = '0bdf9dcdd3bd958a56101d6f786cac3f';
const client = require('twilio')(accountSid, authToken);
client.messages
  .create({
     body: 'Someone loaded JordanAllenLewis.com',
     from: '+15109013637',
     to: '+19258190063'
   })
  .then(message => console.log(message.sid));
  
    // res.send({ name: requestedCatName })
  })
  