// const element = (
//      (<div id="root-2">
//             <h2>Hello from index file</h2>
//         </div>)
// )
// ReactDOM.render(element, document.getElementById("root-1")); 

//class component
class Greeting extends React.Component {
    render() {

        return (<div id="root-2">
            <h2>Hello from index file</h2>
        </div>)

    }
}

//functional component
function Welcome(props){
    return(
        <div id="root-3"> 
            <h3>Welcome to {props.subject}</h3>
        </div>
    )
}

const subject = "Adv full-stack programming new";

const App = ()=>{
    return(
        <div>
            <Greeting></Greeting>
            <Welcome subject={subject}></Welcome>
        </div>
    )
}

const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render(<App></App>)