import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import LoginForm from './components/LoginForm';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <LoginForm />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
