# First MERN application

This is the product of following [this](https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66) MERN application guide.

## Goals
* Understand the connection between client <-> server <-> database
* Learn how to set up a basic MongoDB database
* Run a server that takes in data and does CRUD opperations on the database.
* Have an interactive web view that is used to perform the various CRUD operations by interacting with the server.

## Thoughts

Overall, this was a great tutorial. It covered all of the basics that I needed. After going through this tutorial, I feel better about my ability to now create a custom, but simple, MERN application that supports CRUD operations.

One downside to this tutorial was the fact that the React code is quite out of a date and required a bit of debugging and modification to get working. Some issues I had were...
1. Using Routes instead of Switch
2. Route syntax had changed and my components weren't being rendered, took a while to figure out the issue. The use of the `element` prop fixed the issue.
3. React Table seems to have changed quite a bit since this tutorial was written. I decided to forgo that piece and just have a simple list of movies printed out.
