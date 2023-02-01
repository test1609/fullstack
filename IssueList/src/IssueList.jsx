function IssueFilter() {
    return (
        <div>
            <h3>Welcome to IssueFilter</h3>
        </div>
    )
}
function IssueRow(props) {
    const { issue, style } = props;
    // props.id
    return (
        <tr>
            <td style={style}>{issue.Id}</td>
            <td style={style}>{issue.Owner}</td>
            <td style={style}>{issue.Status}</td>
            <td style={style}>{new Date(issue.Created).toUTCString()}</td>
            <td style={style}>{issue.Effort}</td>
            <td style={style}>{new Date(issue.Due).toUTCString()}</td>
            <td style={style}>{issue.Title}</td>
        </tr>
    )
}
function IssueTable({allIssues}) {
    const style = {
        border: '1px solid'
    }
    /*
    const issueList = [{
        Id: "1",
        Owner: "Person=A",
        Status: "Assigned",
        Created: "2020-01-01",
        Effort: "4",
        Due: "2020-01-05",
        Title: "First Issue"
    },
    {
        Id: "2",
        Owner: "Person=B",
        Status: "Assigned",
        Created: "2020-01-01",
        Effort: "4",
        Due: "2020-01-05",
        Title: "Second Issue"
    }]

    const singleIssue = {
        Id: "3",
        Owner: "Person=c",
        Status: "Assigned",
        Created: "2020-01-01",
        Effort: "4",
        Due: "2020-01-05",
        Title: "Third Issue"
    }

    const [allIssues, setAllIssues] = React.useState([]);
    const [counter, setCounter] = React.useState(0);
    console.log(counter);
    React.useEffect(() => {
        // Try to simulate an API call
        setTimeout(() => {
            // setCounter(counter + 1);
            setAllIssues(issueList);
            // AddSingleIssue();
            // console.log('Hello', counter);
        }, 2000)
    }, [])

    // React.useEffect(() => {
    //     AddSingleIssue();
    //     console.log('Hello', counter);
    // }, [counter])

    const AddSingleIssue = () => {
        let issues = allIssues.slice();
        issues.push(singleIssue);
        setAllIssues(issues);
    }
*/
    return (
        <div>
            <h3>Welcome to IssueTable</h3>
            <table style={style}>
                <thead>
                    <tr>
                        <th style={style}>ID</th>
                        <th style={style}>OWNER</th>
                        <th style={style}>STATUS</th>
                        <th style={style}>CREATED</th>
                        <th style={style}>EFFORT</th>
                        <th style={style}>DUE</th>
                        <th style={style}>TITLE</th>
                    </tr>
                </thead>
                <tbody>
                    {allIssues.map(issueVar =>
                        <IssueRow issue={issueVar} style={style}></IssueRow>
                    )}
                </tbody>
            </table>
            <button type="button" onClick={() => {
                // setCounter(counter + 1)
                AddSingleIssue();
            }}>Click Me</button>
        </div>
    )
}
function IssueAdd({AddSingleIssue}) {
    const HandleSubmit = (e)=>{
        e.preventDefault();
        let form = document.forms.addIssue;
        console.log(form);
        let singleIssue = {
            Owner: form.owner.value,
            Status: form.status.value,
            Effort: form.effort.value,
            Created: new Date(),
            Due: new Date(),
            Title: form.title.value,
        }
        console.log(singleIssue);
        AddSingleIssue(singleIssue);
    }
    return (
        <div>
            {/* <button type="button" onClick={() => {
                // setCounter(counter + 1)
                AddSingleIssue.AddSingleIssue();
            }}>Click Me</button> */}
            
            <h3>Welcome to IssueAdd</h3>
            <form  name = "addIssue" onSubmit={HandleSubmit
            }>
                <label for="owner">Owner:</label>
                <input type="text" id="owner" name="owner" />
                <label for="status">Status:</label>
                <input type="text" id="status" name="status"/>
                <label for="effort">Effort:</label>
                <input type="text" id="effort" name="effort"/>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const IssueList = () => {
    const issueList = [{
        Id: "1",
        Owner: "Person=A",
        Status: "Assigned",
        Created: "2020-01-01",
        Effort: "4",
        Due: "2020-01-05",
        Title: "First Issue"
    },
    {
        Id: "2",
        Owner: "Person=B",
        Status: "Assigned",
        Created: "2020-01-01",
        Effort: "4",
        Due: "2020-01-05",
        Title: "Second Issue"
    }]
  
    const [allIssues, setAllIssues] = React.useState([]);
   
    React.useEffect(() => {
        // Try to simulate an API call
        setTimeout(() => {
            // setCounter(counter + 1);
            setAllIssues(issueList);
            // AddSingleIssue();
            // console.log('Hello', counter);
        }, 2000)
    }, [])

    const singleIssue = {
        Id: "3",
        Owner: "Person=c",
        Status: "Assigned",
        Created: "2020-01-01",
        Effort: "4",
        Due: "2020-01-05",
        Title: "Third Issue"
    }

    const AddSingleIssue = (singleIssue) => {
        singleIssue.Id = allIssues.length+1;
        let issues = allIssues.slice();
        issues.push(singleIssue);
        setAllIssues(issues);
    }

    return (
        <div>
            <IssueFilter></IssueFilter>
            <hr />
            <IssueTable allIssues={allIssues}></IssueTable>
            <hr />
            <IssueAdd AddSingleIssue={AddSingleIssue}></IssueAdd>
        </div>
    )
}

const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render(<IssueList></IssueList>)