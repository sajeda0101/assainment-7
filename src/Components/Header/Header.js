import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTree } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    
    return (
        <div className="header">
<h1><FontAwesomeIcon icon={faTree} className="fachange"></FontAwesomeIcon>
        Save World</h1>
          <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/activity">Activity</a></li>
                <li><a href="/help">Help</a></li>
            </ul>
          </nav>
        </div>
    );
};

export default Header;