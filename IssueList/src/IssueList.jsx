function IssueFilter() {
    return (
        <div>
            <h3>Welcome to IssueFilter</h3>
        </div>
    )
}
function IssueRow() {
    return (
        <tr>
        <td>1</td>
        <td>Person-A</td>
        <td>Assigned</td>
        <td>2020-10-10</td>
        <td>2d</td>
        <td>2020-10-12</td>
        <td>First Issue</td>
    </tr>
    )
}
function IssueTable() {
    return (
        <div>
            <h3>Welcome to IssueTable</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>OWNER</th>
                        <th>STATUS</th>
                        <th>CREATED</th>
                        <th>EFFORT</th>
                        <th>DUE</th>
                        <th>TITLE</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow></IssueRow>
                    <IssueRow></IssueRow>
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