// Import required node modules
const express = require('express');
const cors = require('cors');
const path = require('path');

// Creates app
const app = express();

// Configures app
app.set('port', process.env.PORT || 8000);

// Configures middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Configures app routes
app.use('/api/date', require(path.join(__dirname, './routes/date.routes')));

// Listen app at port
app.listen(app.get('port'), () => {
	console.log('date api running at port', app.get('port'));
});
