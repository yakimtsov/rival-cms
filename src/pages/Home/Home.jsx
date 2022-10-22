import { Link } from 'react-router-dom';
import './home.css';
import FooterLogo from './img/logo.svg'

function Home() {
  return (
    <div className="home">
        <div className="container">
          <header>
            <nav className='home__navbar'>
              <ul className='home__navbar-list'>
                <li className='home__navbar-li'>Pricing</li>
                <li className='home__navbar-li'>About</li>
                <Link to='/login'><button className='button home__navbar-button'>Sign in</button></Link>
                
              </ul>
            </nav>
            </header>
            <main className="main-container">
              <h1 className="main__container-title">Rival<span>CMS</span></h1>
              <h3 className="main__container-pretitle">Fresh new way to build sites </h3>
              <Link to='/login'><button className='button main-container-button'>Get started free</button></Link>
              <h6 className="main__container-underbutton">*no card needed</h6>
              <div className="main-container__img">
                <img src={require('./img/main-img.png')} alt='no-img'/>
              </div>
            </main>
        </div>
        <footer className='footer'>
          <div className="container">
            <ul className="footer__list">
              <li className="footer__li">Register</li>
              <li className="footer__li">Terms & conditions</li>
              <li className="footer__li">Privacy policy</li>
              <li className="footer__li">Documentation</li>
              <li className="footer__li">Pricing</li>
              <li className="footer__li">Our blog</li>
              <div className="footer__list-logo">
                <img src={FooterLogo} alt="logo" />
                <p className="footer__list-logo-text">Rival<span>CMS</span></p>
              </div>
            </ul>
            
          </div>
        </footer>
    </div>
  );
}

export default Home;
