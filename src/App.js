//Imports go here
//import Homepage from './components/Homepage'
//import EmployePage from './components/EmployePage';
import './App.css';
import EmployePage from './components/EmployePage';
import Homepage from './components/Homepage';
// This is the Main [CEO] file --> PRIMARY state Lives Here
//---> Components are housed here
//---> Hooks === useState, useEffect

function App() {
    const topics = ["Employee Directory", "Employee"]

    let allEmployees = [
        {
            name: "James King",
            position: "President and CEO",
            image: ""
        },
        {
            name: "Julie Taylor",
            position: "Vp of Marketing",
            image: ""
        },
        {
            name: "Eugene Lee",
            position: "CFO",
            image: ""
        },
        {
            name: "John Williams",
            position: "VP of Engineering",
            image: ""
        },
        {
            name: "Ray Moore",
            position: "VP of Sales",
            image: ""
        },
        {
            name: "Paul Jones",
            position: "QA Manager",
            image: ""
        },
    ]

    return ( 
        <div className = "App" >
        <Homepage title={topics[0]} workers = {allEmployees}/ >
        <EmployePage title={topics[1]}/ >
        </div>
    );
}
export default App;