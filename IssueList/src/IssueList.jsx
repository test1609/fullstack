function IssueFilter() {
    return (
        <div>
            <h3>Welcome to IssueFilter</h3>
        </div>
    )
}
function IssueRow(props) {
    const {issue, style} = props;
    // props.id
    return (
    <tr>
        <td style={style}>{issue.Id}</td>
        <td style={style}>{issue.Owner}</td>
        <td style={style}>{issue.Status}</td>
        <td style={style}>{issue.Created}</td>
        <td style={style}>{issue.Effort}</td>
        <td style={style}>{issue.Due}</td>
        <td style={style}>{issue.Title}</td>
    </tr>
    )
}
function IssueTable() {
    const style = {
        border: '1px solid'
    }
    const issueList = [{
        Id:"1",
        Owner: "Person=A",
        Status: "Assigned",
        Created: "2020-01-01",
        Effort: "4",
        Due:"2020-01-05",
        Title: "First Issue"
    },
    {
        Id:"2",
        Owner: "Person=B",
        Status: "Assigned",
        Created: "2020-01-01",
        Effort: "4",
        Due:"2020-01-05",
        Title: "First Issue"
    }]
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
                    {issueList.map(issueVar=>
                    <IssueRow issue={issueVar} style={style}></IssueRow>
                    )}
                </tbody>
            </table>
        </div>
    )
}
function IssueAdd() {
    return (
        <div>
            <h3>Welcome to IssueAdd</h3>
        </div>
    )
}

const IssueList = () => {
    return (
        <div>
            <IssueFilter></IssueFilter>
            <hr />
            <IssueTable></IssueTable>
            <hr />
            <IssueAdd></IssueAdd>
        </div>
    )
}

const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render(<IssueList></IssueList>)