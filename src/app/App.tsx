import './styles/index.scss';
import {Routes, Route, Link} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib/classNames/classNames";

const App = () => {
    const {toggleTheme, theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>Main page</Link>
            <Link to='/about'>About page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;