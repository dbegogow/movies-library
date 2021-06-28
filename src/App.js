import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
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
            <AuthProvider>
                <Header />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/register" component={RegisterForm} />
                    <PrivateRoute exact path="/home" component={Home} />
                    <PrivateRoute path="/home/movie/:movieId" component={Movie} />
                    <PrivateRoute path="/home/add-movie" render={() => <MovieForm serviceFunc={addMovie} />} />
                    <PrivateRoute path="/home/edit-movie/:movieId" render={() => <MovieForm serviceFunc={editMovie} />} />
                </Switch>
            </AuthProvider>
        </div>
    );
}

export default App;
