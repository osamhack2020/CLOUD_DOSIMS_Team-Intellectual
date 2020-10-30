    import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//페이지 import
import Register from '../Register'; 
import Login from '../Login';
import Home from '../Home';
import LocationManage from '../Admin/LocationManage';
import PassApply from '../Soldier/PassApply';
import PassConfirm from '../Admin/PassConfirm';
import PassDetail from '../Soldier/PassDetail';
import Profile from '../Profile';
import MessageSend from '../Soldier/MessageSend';
import MessageSendAdmin from '../Admin/MessageSendAdmin';
import MessageConfirm from '../Soldier/MessageConfirm';
import MessageConfirmAdmin from '../Admin/MessageConfirmAdmin';
import testbeta from '../testbeta';
import Dashboard from '../Admin/Dashboard';


//hihi
class App extends Component{
    render(){
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/Register" component={Register}/>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/LocationManage" component={LocationManage}/>
                    <Route exact path="/PassApply" component={PassApply}/>
                    <Route exact path="/PassConfirm" component={PassConfirm}/>
                    <Route exact path="/PassDetail" component={PassDetail}/>
                    <Route exact path="/Profile" component={Profile}/>
                    <Route exact path="/MessageSend" component={MessageSend}/>
                    <Route exact path="/MessageSendAdmin" component={MessageSendAdmin}/>
                    <Route exact path="/MessageConfirm" component={MessageConfirm}/>
                    <Route exact path="/MessageConfirmAdmin" component={MessageConfirmAdmin}/>
                    <Route exact path="/Dashboard" component={Dashboard}/>
                    <Route exact path="/testbeta" component={testbeta}/>
                </Switch>
            </Router>
            
        </div>
    )}
}
export default App;