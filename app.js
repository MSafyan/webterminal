const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyparser = require("body-parser");
const services = require('./services/render');

const app = express();
// app.use(express.json());
app.use(bodyparser.urlencoded({ extended : true}))
app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// mongodb+srv://Safyan:qwertyasdf@cluster0-f9smh.mongodb.net/natrous?retryWrites=true&w=majority
// mongodb://localhost:27017/natours
//nothin

const connectDB = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/natours', {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});
		console.log(`connected to DB`);
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};
connectDB();


app.get('/add-user', services.add_user)

app.get('/update-user', services.update_user)

app.use('/api/',require('./routes/fucultyRoute'));

app.get('/', services.homeRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Running at ${PORT}`);
});
