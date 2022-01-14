# Beer House

Web application for a client of beer delivery

## Installation

First install all dependencies for frontend and backend with:

```
npm install
```

Then, in the root directory create a **.env** file with the following data:

```
PORT=5000

DB_CONNECTION=
```

Create a NoSQL database with any client, and add your connection string to the DB variable in the **.env** file. For example:

```
DB_CONNECTION=mongodb+srv://yourusername:<password>@cluster1.2h1zk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

In the root directory, type and execute to start the **backend**:

```
npm start
```

In the client directory, type and execute to start the **frontend**:

```
npm start
```

## Used technology

### Frontend

- React

### Backend

- NodeJS

## Demo

If you want to see the demo of this proyect deployed, you can visit:
https://beerhouse-ba.herokuapp.com/
