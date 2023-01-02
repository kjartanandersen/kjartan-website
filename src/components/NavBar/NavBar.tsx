import React from 'react';
import { Link } from 'react-router-dom';
import {Props} from './Model/Model'


import './NavBarStyles.css';


const NavBar = ({activeComp, children}: Props) => {
  return (
    
    <div className='nav-container'>
          <div className='navbar'>
            <div className="navbar-nav">
              <div className='navbar-item'>
                <Link to='/' className={`nav-link ${activeComp === "home" ? "nav-active" : ""}`} >About</Link>
              </div>
              
              <div className='navbar-item'>
                <Link to='/cv' className={`nav-link ${activeComp === "cv" ? "nav-active" : ""}`} >My CV</Link>  
              </div>
              
              <div className='navbar-item'>
                <Link to='/todo' className={`nav-link ${activeComp === "todo" ? "nav-active" : ""}`}>Todo App</Link>  
              </div>
               
              
            </div>
            </div>

      {children}


        <div className="navbar-footer">
          <p className='navbar-footer-copy'>
            Copyright: {new Date().getFullYear()}
          </p>
        </div>
    </div>
  );
};


export default NavBar;

/*
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    

  }

  render () {
    const children = this.props.children;
    return (
      <div>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to='/' className='nav-link'>Home</Link> 
              <Link to='/dynamic' className='nav-link'>Dynamic</Link>
            </div>
          </div>

        </div>
      </nav>
      {children}
    </div>
      );
  }
}
*/






/*
<div className='nav-link-border'>
          <Link to="/"><div className='nav-link-box'>Home </div></Link>
          <Link to="/dynamic"><div className='nav-link-box'> Dynamic </div></Link>
          <Link to='/about'> <div className='nav-link-box-about'>About</div> </Link>

    {children}
    </div>
*/
/*
<Container>
      <Link to="/">
        <Header as="h1" >
          webpack-for-react
        </Header>
      </Link>
      {children}
      <Divider />
      <p >
        Made with <Icon name="heart" color="red" /> by Esau Silva
      </p>
    </Container>


*/