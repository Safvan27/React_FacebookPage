import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import MouseIcon from '@material-ui/icons/Mouse';
import StarIcon from '@material-ui/icons/Star';
import ListIcon from '@material-ui/icons/List';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';


export const SidebarData= [
    {
        title:"Dashboard",
        icon:<HomeIcon/>,
        link:"/Dashboard"
        
    },
    {
        title:"Website",
        icon:<WebIcon/>,
        link:"/Website"
    },
    {
        title:"Visitors",
        icon:<MouseIcon/>,
        link:"/Visitors"
    },
    {
        title:"Reviews",
        icon:<StarIcon/>,
        link:"/Reviews"
    },
    {
        title:"Listings",
        icon:<ListIcon/>,
        link:"/Listings"
    },
    {
        title:"Appoinments",
        icon:<CalendarTodayIcon/>,
        link:"/Appoinments"
    },
    {
        title:"Settings",
        icon:<SettingsIcon/>,
        link:"/Settings"
    },
   

];



