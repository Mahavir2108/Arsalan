const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Instance = require('./models/instance');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://mahavirthakur20604:<NtOYYVM9VSPad7x2>@arsalan.uuzf71r.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});

// Define route to handle form submission
app.post('/submit', async (req, res) => {
    try {
        // Create a new instance document
        const newInstance = new Instance({
            name: req.body.instanceName,
            host: req.body.host,
            port: req.body.port
        });
        
        // Save the instance to the database
        await newInstance.save();
        
        res.json({ message: 'Instance created successfully' });
    } catch (error) {
        console.error('Error creating instance:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
