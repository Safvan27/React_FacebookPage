import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import history from './History';

import Postfacebook from './Post-facebook';

import "./Listing.css";
import{
  BrowserRouter as Router,
  Switch,
  Route,Link
} from 'react-router-dom';

function Listing() {
    return (

    <Table  striped bordered hover>
  <thead>
    <tr>
      <th colSpan='9'>Listings</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
        <td></td>
      <td>Source</td>
      <td>Name</td>
      <td>Address</td>
      <td>Phone</td>
      <td>Rating</td>
      <td>Listed</td>
      <td>Status</td>
      <td>Action</td>
      
    </tr>
    <tr>
    
        <td><FacebookIcon/></td>
      <td>Facebook</td>
      <td>ABC Dental</td>
      <td>2101 California</td>
      <td>111.111.1111</td>
      <td>3/5</td>
      <td>Yes</td>
      <td><DoneIcon color="primary"/></td>
      <td><button type="button" class="btn btn-primary">Update</button></td>

    </tr>
    <tr>
        <td><LinkedInIcon/></td>
      <td>LinkedIn</td>
      <td>ABC Dental</td>
      <td>2101 California</td>
      <td>111.111.1111</td>
      <td>3/5</td>
      <td>Yes</td>
      <td><ClearIcon color="secondary"/></td>
      <td><button type="button" class="btn btn-primary">Update</button></td>
      
    </tr>
    <tr>
        <td><TwitterIcon/></td>
      <td>Twitter</td>
      <td>ABC Dental</td>
      <td>2101 California</td>
      <td>111.111.1111</td>
      <td>3/5</td>
      <td>Yes</td>
      <td><ClearIcon color="secondary"/></td>
      <td><button type="button" class="btn btn-primary">Update</button></td>
      
    </tr>
    <tr>
        <td><LinkedInIcon/></td>
      <td>LinkedIn</td>
      <td>ABC Dental</td>
      <td>2101 California</td>
      <td>111.111.1111</td>
      <td>3/5</td>
      <td>Yes</td>
      <td><ClearIcon color="secondary"/></td>
      <td><button type="button" class="btn btn-primary">Update</button></td>
      
    </tr>
    <tr>
        <td><TwitterIcon/></td>
      <td>Twitter</td>
      <td>ABC Dental</td>
      <td>2101 California</td>
      <td>111.111.1111</td>
      <td>3/5</td>
      <td>Yes</td>
      <td><ClearIcon color="secondary"/></td>
      <td><button type="button" class="btn btn-primary">Update</button></td>
      
    </tr>

    
  </tbody>
</Table>
    )
}
export default Listing;