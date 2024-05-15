import './styles/index.scss';
import {Routes, Route, Link} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {toggleTheme, theme} = useTheme()
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>Main page</Link>
            <Link to='/about'>About page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageLazy/>}/>
                    <Route path='/about' element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;