function IssueFilter() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Welcome to IssueFilter"));
}
function IssueRow() {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "1"), /*#__PURE__*/React.createElement("td", null, "Person-A"), /*#__PURE__*/React.createElement("td", null, "Assigned"), /*#__PURE__*/React.createElement("td", null, "2020-10-10"), /*#__PURE__*/React.createElement("td", null, "2d"), /*#__PURE__*/React.createElement("td", null, "2020-10-12"), /*#__PURE__*/React.createElement("td", null, "First Issue"));
}
function IssueTable() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Welcome to IssueTable"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "OWNER"), /*#__PURE__*/React.createElement("th", null, "STATUS"), /*#__PURE__*/React.createElement("th", null, "CREATED"), /*#__PURE__*/React.createElement("th", null, "EFFORT"), /*#__PURE__*/React.createElement("th", null, "DUE"), /*#__PURE__*/React.createElement("th", null, "TITLE"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(IssueRow, null), /*#__PURE__*/React.createElement(IssueRow, null))));
}
function IssueAdd() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Welcome to IssueAdd"));
}
const IssueList = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
};
const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render( /*#__PURE__*/React.createElement(IssueList, null));