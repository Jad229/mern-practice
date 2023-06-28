const express = require("express"); // imports express into our app
const dotenv = require("dotenv").config(); // allows us to have a .env file with our variables
const port = process.env.PORT || 5000; // a variable to hold our port
const { errorHandler } = require("./middleware/errorMiddleware");
// initializes a instance of our express app
const app = express();

// middleware to parse body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// redirects request to the routes folder goalRoutes file
app.use("/api/goals", require("./routes/goalRoutes"));

// overwrites the default express error handler
app.use(errorHandler);

// sets app to listen on port and log that it has started
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
