import React from 'react';
import "../App.css";
import {SidebarData} from './SidebarData';
import Dashboard from './Dashboard';
import Listings from './Listings';
import{
    BrowserRouter as Router,
    Switch,
    Route,Link
} from 'react-router-dom';

function Sidebar() {
    return (
        
    <div className ="Sidebar">
        
        <ul className = "SidebarList">
            {SidebarData.map((val,key)=>{
                  return(
                    <li 
                         key={key}
                        className="row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={()=>{
                         window.location.pathname = val.link;
                         }}>
            
                        <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
                        <Router>
                            <Link to={val.link}></Link>
                        <Switch>
                            <Route path="/Listings"><Listings/></Route>
                            
                           
                        </Switch>
                        </Router>
                        


                    </li>
        );
        

    
})}
</ul>
</div>

);
    
}

export default Sidebar;
