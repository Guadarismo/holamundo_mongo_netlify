// hello there!
// 
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that. 
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.


/*
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb+srv://impresionesnoor:sOXr4tkPbTSICur1@cluster0.e02krmg.mongodb.net/'; // Replace with your MongoDB connection string

// Connect to MongoDB
//mongodb+srv://impresionesnoor:sOXr4tkPbTSICur1@cluster0.e02krmg.mongodb.net/
//clientesalmavera
//coleclientes
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    const db = client.db('clientesalmavera'); // Replace with your database name
    console.log('Connected to MongoDB');

    // Handle form submission
    app.post('/', async (req, res) => {
      const { name, id, dateOfBirth } = req.body;

      try {
        const result = await db.collection('coleclientes').insertOne({ name, id, dateOfBirth });
        console.log(`User data inserted with ID: ${result.insertedId}`);
        res.send('Datos guardados exitosamente!');
      } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Error guardando los datos');
      }
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Serve the function
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

exports.handler = app;


let test001 = 5+8;
exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'World'
    return {
        statusCode: 200,
        body: `Hello ${subject} and ${test001}!`,
    }
}
*/