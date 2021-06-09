import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/login">
                    <LoginForm />
                </Route>
                <Route path="/register">
                    <RegisterForm />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/home/add-movie">
                    <div>Add Movie</div>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
