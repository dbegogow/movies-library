import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';
import AddMovieForm from './components/Forms/AddMovieForm';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route exact path="/home" component={Home} />
                <Route path="/home/movie/:movieId" component={Login} />
                <Route path="/home/add-movie" component={AddMovieForm} />
            </Switch>
        </div>
    );
}

export default App;
