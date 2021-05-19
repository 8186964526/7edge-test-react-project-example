import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/Dashboard';

function App() {
  return (
    <div className="App">
        <div className="App">
                <BrowserRouter >
                    <div className="AppRouting" >
                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                        </Switch>
                    </div>
                </BrowserRouter>

            </div>
    </div>
  );
}

export default App;
