const { createPool } = require('mysql');
const express = require('express');
const app = express();
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "college",
    connectionLimit: 10
});

pool.query('SELECT * from userinformation', (err, result, fields) => {  // cheking the pool
    if (err) {
        return console.log(err);
    }
    return console.log(result);
});

// Define a route to handle client requests
app.get('/getPool', (req, res) => {
    // Send the pool object to the client
    res.json({ pool });
});

// Define additional routes here
// Example: Handling a POST request
app.post('/someRoute', (req, res) => {
    // Handle the POST request here
    res.send('POST request received');
});

// Start listening for incoming requests on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
