require('./src/models/db')
const Issue = require('./src/models/issues')
const express = require("express");
const { ApolloServer } = require('apollo-server-express');

let greetMessage = "Welcom to graphQL!";
// const tempList = [{
//     Id: "1",
//     Owner: "New Person=A",
//     Status: "Assigned",
//     Created: new Date("2020-01-01"),
//     Effort: "4",
//     Due: new Date("2020-01-05"),
//     Title: "First Issue"
// },
// {
//     Id: "2",
//     Owner: "Person=B",
//     Status: "Assigned",
//     Created: new Date("2020-01-01"),
//     Effort: "4",
//     Due: new Date("2020-01-05"),
//     Title: "Second Issue"
// }];
const typeDefs = `
    enum StatusType{
        Fixed,
        Assigned,
        Resolved,
        Rejected
    }
    type issue{
        Id: Int,
        Owner: String,
        Status: StatusType,
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
        addSingleIssue(Status: String!, Owner:String!, Effort:Int, Title: String!): String   
    }
`;
const resolvers = {
    Query: {
        greet: () => greetMessage,
        issueList
    },
    Mutation: {
        setGreetMessage,
        addSingleIssue
    },
};

async function issueList() {
    return (await Issue.find());
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

app.use(express.static('public'))

server.start()
    .then(function () {
        server.applyMiddleware({ app, path: '/graphql', cors: true })
    })


function setGreetMessage(_, { message }) {
    return greetMessage = message;
}

async function addSingleIssue(_, { Owner, Status, Effort, Title }) {
    console.log(Status, Owner, Effort, Title);
    let singleIssue = {
        Owner: Owner,
        Status: Status,
        Title: Title,
        Effort: Effort,
        Created: new Date(),
        Due: new Date(),
    }
    await Issue.find({}).count(async function (err, cnt) {
        if (err) {
            return
        } else {
            singleIssue.Id = cnt + 1;
            console.log(singleIssue);
            return await Issue.create(singleIssue);
        }
    })
    return Status;
}

app.listen(3000, () => {
    console.log("Server Started...");
})