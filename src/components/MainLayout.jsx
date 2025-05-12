import About from './About';
import Menu from './Menu';

const MainLayout = () => {
  return (
    <>
        <div id="about">
            <About />
        </div>
        <div id="menu">
            <Menu />
        </div>
    </>
  );
};

export default MainLayout;