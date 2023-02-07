const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.7wsi70e.mongodb.net/test_sharddha?retryWrites=true&w=majority');
mongoose.connection.on("connected", function () {
  console.log("Application is connected to Databse");
});