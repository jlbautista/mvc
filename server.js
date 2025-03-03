const PORT = process.env.PORT || 3001;
const app = require('./app');
const db = require('./config/db');

// Connect to DB
db.sync()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.error('Error connecting to the database: ', err);
    });

// Start the server only if this file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}