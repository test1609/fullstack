
 1. copy index.js, package.json., src and public folder from lecture1
 2. delete app.js from public folder
 3. rename app.jsx file
 4. Rename App() which is a functional component to the name of the project
 5. Add required functional or class components
 6. Change the js file name in index.html
 7. Compile and watch and run it again.
 8. We can iterate all the elements using below syntax, we do not need for loop to iterate elements, we can do so by .map function. issueVar will hold the current value from issueList for all the iteration and that will iterate automatically.
 {issueList.map(issueVar=>
                    <IssueRow issue={issueVar} style={style}></IssueRow>
                    )}
 9. State variable are used to make generally API call result show on the UI each time. Below code will assign 0 to counter in the initial phase and then we need to use setCounter(counter + 1); method to update value and this will render the component automatically.
 const[counter, setCounter] = React.useState(0);

 10. Variables from one component can not be passed to another component.
 11. Lifting up a state: share the state varibale between the components which belongs to the same parent.
 12. Methods are used to pass data from one to another component to provide encapsulation
 13. In order to make database calls, a mediator called GraphQL will be used.
 14. we will add GraphQL dependencies by running "npm install graphql apollo-server-express"  to 1. to get graphQL functionality 2. Integration of GraphQL with Express.
 15. GET = READ = Query where Query is type (similar to data type)
 16. PUT/POST/DELETE = WRITE = Mutatuion where Mutatuion is type (similar to data type)
 17. For any custom data types, we need to have the specific data type added in the typeDefs
18. Client side fetch java script can be used using <script src="https://unpkg.com/whatwg-fetch@3.0.0/dist/fetch.umd.js"></script>
19. To make connection to database, we need to have driver installed, npm install mongoose will do it