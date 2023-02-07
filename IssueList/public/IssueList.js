function IssueFilter() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Welcome to IssueFilter"));
}
function IssueRow(props) {
  const {
    issue,
    style,
    arr
  } = props;
  console.log({
    arr
  });
  console.log({
    arr
  });
  // props.id
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Id), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Owner), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Status), /*#__PURE__*/React.createElement("td", {
    style: style
  }, new Date(parseInt(issue.Created)).toLocaleDateString()), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Effort), /*#__PURE__*/React.createElement("td", {
    style: style
  }, new Date(parseInt(issue.Due)).toLocaleDateString()), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Title));
}
function IssueTable({
  allIssues
}) {
  const style = {
    border: '1px solid'
  };
  const arr = [1, 2, 3];
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
    style: style,
    arr: arr[0]
  })))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      // setCounter(counter + 1)
      AddSingleIssue();
    }
  }, "Click Me"));
}
function IssueAdd({
  AddSingleIssue
}) {
  const HandleSubmit = e => {
    e.preventDefault();
    let form = document.forms.addIssue;
    console.log(form);
    let singleIssue = {
      Owner: form.owner.value,
      Status: form.status.value,
      Effort: form.effort.value,
      Created: new Date(),
      Due: new Date(),
      Title: form.title.value
    };
    console.log(singleIssue);
    AddSingleIssue(singleIssue);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Welcome to IssueAdd"), /*#__PURE__*/React.createElement("form", {
    name: "addIssue",
    onSubmit: HandleSubmit
  }, /*#__PURE__*/React.createElement("label", {
    for: "owner"
  }, "Owner:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "owner",
    name: "owner"
  }), /*#__PURE__*/React.createElement("label", {
    for: "status"
  }, "Status:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "status",
    name: "status"
  }), /*#__PURE__*/React.createElement("label", {
    for: "effort"
  }, "Effort:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "effort",
    name: "effort"
  }), /*#__PURE__*/React.createElement("label", {
    for: "title"
  }, "Title:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "title",
    name: "title"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
}
const IssueList = () => {
  let query = `
        query  {
            issueList {
                Id
                Status
                Owner
                Effort
                Created
                Due
                Title
            }
      }
    `;
  /* const issueList = [{
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
  */
  const [allIssues, setAllIssues] = React.useState([]);
  React.useEffect(function () {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(async response => {
      let tempIssues = await response.json();
      let tempList = tempIssues.data.issueList;
      console.log(tempIssues);
      setAllIssues(tempList);
    });
  }, []);
  /*React.useEffect(() => {
      // Try to simulate an API call
      setTimeout(() => {
          // setCounter(counter + 1);
          setAllIssues(issueList);
          // AddSingleIssue();
          // console.log('Hello', counter);
      }, 2000)
  }, [])
  */
  const singleIssue = {
    Id: "3",
    Owner: "Person=c",
    Status: "Assigned",
    Created: "2020-01-01",
    Effort: "4",
    Due: "2020-01-05",
    Title: "Third Issue"
  };
  const AddSingleIssue = singleIssue => {
    singleIssue.Id = allIssues.length + 1;
    let issues = allIssues.slice();
    issues.push(singleIssue);
    setAllIssues(issues);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
    allIssues: allIssues
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, {
    AddSingleIssue: AddSingleIssue
  }));
};
const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render( /*#__PURE__*/React.createElement(IssueList, null));