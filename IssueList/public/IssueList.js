function IssueFilter() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Welcome to IssueFilter"));
}
function IssueRow(props) {
  const {
    issue,
    style
  } = props;
  // props.id
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Id), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Owner), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Status), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Created), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Effort), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Due), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Title));
}
function IssueTable() {
  const style = {
    border: '1px solid'
  };
  const issueList = [{
    Id: "1",
    Owner: "Person=A",
    Status: "Assigned",
    Created: "2020-01-01",
    Effort: "4",
    Due: "2020-01-05",
    Title: "First Issue"
  }, {
    Id: "2",
    Owner: "Person=B",
    Status: "Assigned",
    Created: "2020-01-01",
    Effort: "4",
    Due: "2020-01-05",
    Title: "Second Issue"
  }];
  const singleIssue = {
    Id: "3",
    Owner: "Person=c",
    Status: "Assigned",
    Created: "2020-01-01",
    Effort: "4",
    Due: "2020-01-05",
    Title: "Third Issue"
  };
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
    }, 2000);
  }, []);
  React.useEffect(() => {
    AddSingleIssue();
    console.log('Hello', counter);
  }, [counter]);
  const AddSingleIssue = () => {
    let issues = allIssues.slice();
    issues.push(singleIssue);
    setAllIssues(issues);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Welcome to IssueTable"), /*#__PURE__*/React.createElement("table", {
    style: style
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: style
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "OWNER"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "STATUS"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "CREATED"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "EFFORT"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "DUE"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "TITLE"))), /*#__PURE__*/React.createElement("tbody", null, allIssues.map(issueVar => /*#__PURE__*/React.createElement(IssueRow, {
    issue: issueVar,
    style: style
  })))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setCounter(counter + 1);
    }
  }, "Click Me"));
}
function IssueAdd() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Welcome to IssueAdd"));
}
const IssueList = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
};
const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render( /*#__PURE__*/React.createElement(IssueList, null));