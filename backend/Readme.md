
//Setting up backend using express

1.Create a backend folder
2.Create a package.json file using npm init -y
3.Create a .env file
4.Create a app.js file
5.Install express and nodemon
6.Create a routes folder
7.Create a product.js and order.js file
8.Create a controllers folder
9.Create a productController.js and orderController.js file
10.In productController.js file create a get method for single product and all products and export it
11.In orderController.js file create a createOrder method and export it
12.Add these above two methods in product.js and order.js file
13.create routes in the app.js file and use that routes using app.use method
14.Test these methods working by thunder client extension
Save the tested api routes in thunder client


//Connecting Database using mongoDB

1.open MongoDB atlas in the desktop
2.In the local host click on the three dots and copy the connection string 
3.Create a file named createDatabase.js inside the config folder
4.In the .env file add the connection string
5.Install mongoose
6.Inside the createDatabase.js file create a function called connectDatabase
7.Inside the connectDatabase function connect to the database using mongoose.connect method
8.Call the connectDatabase function in the app.js file


//Creating Product Model

1.create a file named productModel.js inside the models folder
2.In the productModel.js file create a schema
3.Create a model using mongoose.model method
4.Export the model

//Building the get products api
1.Create a getProducts method in the productController.js file
2.In the getProducts method get all the products from the database
3.Send the products in the response
4.Test the api using thunder client

//Create a folder called data and create a product.json file with some products(Dummy Data)

//Building the get single product api
1.Create a getSingleProduct method in the productController.js file
2.In the getSingleProduct method get a single product from the database
3.Send the product in the response
4.Test the api using thunder client

//Building the create order api
1.Create a createOrder method in the orderController.js file
2.In the createOrder method get the cartItems from the request body
3.Get the amount from the cartItems
4.Create a new order in the database
5.Send the order in the response
6.Test the api using thunder client
