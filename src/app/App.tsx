import './styles/index.scss';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {toggleTheme, theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Main page</Link>
            <Link to='/about'>About page</Link>
            <AppRouter/>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
        </div>
    );
};

export default App;