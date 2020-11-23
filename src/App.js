
import "./App.css";
import Sidebar from "./Components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Listing from "./Components/Listings";
import Header from './Components/Header';
import Facebook from './Components/Facebook';
import { Component } from "react";
import Postfacebook from './Components/Post-facebook';
class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="App">
          <div className="header">
            <div className="facebook">
              <Facebook/>
            </div>
            <Header/>
          </div>
          <Sidebar/>
        </div>
        
      </div>
    )
  }
}


export default App;
