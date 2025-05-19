import About from './About';
import Menu from './Menu';
import Social from './Social';
import Contact from './Contact';

const MainLayout = () => {
  return (
    <>
        <div id="about">
            <About />
        </div>        
        <div id="social">
            <Social />
        </div>
        <div id="menu">
            <Menu />
        </div>
        <div id="contact">
            <Contact />
        </div>
    </>
  );
};

export default MainLayout;