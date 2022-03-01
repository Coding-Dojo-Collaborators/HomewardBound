/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Core components
import Navbar from '../components/Navbars/Navbar';
import LandingPageHeader from '../components/Headers/LandingPageHeader';
import Footer from '../components/Footer/Footer';

// Styles
import 'bootstrap/scss/bootstrap.scss';
import 'assets/scss/paper-kit.scss';
import 'assets/css/bootstrap.min.css';
import 'assets/css/paper-kit.css';
import 'assets/demo/main-demo.css';

// Blocks
import Block1Process from './LandingPageBlocks/Block1AdoptionProcess';
import Block2Adopt from './LandingPageBlocks/Block2Adopt';
import Block3Services from './LandingPageBlocks/Block3Services';
import Block4About from '../views/LandingPageBlocks/Block4About';
import Block5Contact from '../views/LandingPageBlocks/Block5Contact';

// Login
import Cookies from 'js-cookie';

export default ({ setUser, loggedInUser, setLoggedInUser }) => {
  // const [changeUser, setChangeUser] = useState();
  const history = useHistory();

  document.documentElement.classList.remove('nav-open');

  useEffect(() => {
    document.body.classList.add('profile-page');
    return function cleanup() {
      document.body.classList.remove('profile-page');
    };
  });

  useEffect(() => {
    loggedInUser !== 'no user' &&
      history.push('/dashboard');
  });

  let logout = () => {
    setLoggedInUser('no user');
    Cookies.remove('user_id');
    history.push('/');
  }

  return (
    <div id='top' >
      <Navbar
        page='landing'
        logout={logout}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      <LandingPageHeader />
      <div className='main '>
        <div id='adopt' className='py-4'>
          <Block1Process />
        </div>
        <Block2Adopt />
        <div id="services" className='py-5'>
          <Block3Services />
        </div>
        <div id="about" className='pt-5'>
          <Block4About />
        </div>
        <div id="contact" className=''>
          <Block5Contact />
        </div>
        <Footer />
      </div>
    </div>
  )
};
