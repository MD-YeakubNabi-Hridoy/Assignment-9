import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Pages/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default MainLayout;