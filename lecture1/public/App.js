// const element = (
//      (<div id="root-2">
//             <h2>Hello from index file</h2>
//         </div>)
// )
// ReactDOM.render(element, document.getElementById("root-1")); 

//class component
class Greeting extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "root-2"
    }, /*#__PURE__*/React.createElement("h2", null, "Hello from index file"));
  }
}

//functional component
function Welcome(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "root-3"
  }, /*#__PURE__*/React.createElement("h3", null, "Welcome to ", props.subject));
}
const subject = "Adv full-stack programming new";
const App = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Greeting, null), /*#__PURE__*/React.createElement(Welcome, {
    subject: subject
  }));
};
const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render( /*#__PURE__*/React.createElement(App, null));