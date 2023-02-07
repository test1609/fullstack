require('./src/models/db')
const Issue = require('./src/models/issues')
const express = require("express");
const { ApolloServer } = require('apollo-server-express');

let greetMessage = "Welcom to graphQL!";
const tempList = [{
    Id: "1",
    Owner: "New Person=A",
    Status: "Assigned",
    Created: new Date("2020-01-01"),
    Effort: "4",
    Due: new Date("2020-01-05"),
    Title: "First Issue"
},
{
    Id: "2",
    Owner: "Person=B",
    Status: "Assigned",
    Created: new Date("2020-01-01"),
    Effort: "4",
    Due:  new Date("2020-01-05"),
    Title: "Second Issue"
}];
const typeDefs = `
    type issue{
        Id: Int,
        Owner: String,
        Status: String,
        Created: String,
        Effort: Int,
        Due: String,
        Title: String
    }
    type Query {
        greet: String!,
        issueList : [issue!]
    }
   
    type Mutation {
        setGreetMessage(message: String!): String        
    }
`;
const resolvers = {
    Query: {
        greet: () => greetMessage,
        issueList
    },
    Mutation: {
        setGreetMessage        
    },
};

async function issueList(){
    return (await Issue.find());
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

app.use(express.static('public'))

server.start()
    .then(function(){
        server.applyMiddleware({app, path:'/graphql', cors: true})
    })




function setGreetMessage(_, { message }) {
    return greetMessage = message;
}

app.listen(3000, ()=>{
    console.log("Server Started...");
})