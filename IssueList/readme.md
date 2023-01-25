
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
 