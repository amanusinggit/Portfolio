import { Outlet } from 'react-router';
import Header from './Components/Header';
   
const App = () => {
    return (
        <div className='container'>
            <Header />
            <Outlet />
        </div>
    );
}

export default App;