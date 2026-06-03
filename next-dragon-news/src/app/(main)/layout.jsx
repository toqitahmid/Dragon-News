import Header from '../components/shared/Header';
import MarqueeComponent from '../components/shared/Marquee';
import Navbar from '../components/shared/Navbar';

const MainLayout = ({children}) => {
    return (
        <>
            <Header></Header>
            <MarqueeComponent></MarqueeComponent>
            <Navbar></Navbar>
            {children}
        </>
    );
};

export default MainLayout;