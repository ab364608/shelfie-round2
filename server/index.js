require('dotenv').config();
const express = require('express');
const massive = require('massive');

const {viewInventory, createProduct, deleteProduct} = require('./controller')

const app = express();

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database Connected')
})
.catch(err => console.log(err))

app.use(express.json());

app.get('/api/inventory', viewInventory);
app.post('/api/product', createProduct);
app.delete('/api/inventory/:id', deleteProduct);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}`);
})