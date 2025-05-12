import About from './About';
import Menu from './Menu';
import Social from './Social';

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
    </>
  );
};

export default MainLayout;