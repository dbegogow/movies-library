import { Route, Switch } from 'react-router-dom';
import './utils/firebase';
import { addMovie, editMovie } from './services/postMoviesService';
import Home from './components/Home';
import Movie from './components/Movie';
import Login from './components/Login';
import Header from './components/Header';
import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';
import MovieForm from './components/Forms/MovieForm';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route exact path="/home" component={Home} />
                <Route path="/home/movie/:movieId" component={Movie} />
                <Route path="/home/add-movie" render={() => <MovieForm serviceFunc={addMovie} />} />
                <Route path="/home/edit-movie/:movieId" render={() => <MovieForm serviceFunc={editMovie} />} />
            </Switch>
        </div>
    );
}

export default App;
