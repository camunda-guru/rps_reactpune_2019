import React, {Component} from 'react'
import './menu.css'
import  'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Link,Switch,Route,withRouter, Redirect} from 'react-router-dom'
import NewRequest from "../newrequest/newrequest";
import {Costs} from "../costs/costs";
import {ViewRequest} from "../viewrequest/viewrequest";
import Services from "../services/services";
import {Login} from "../login/login";
const AuthService = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 5)
    },
    logout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 5)
    }
};

const SecretRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        AuthService.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
);

const AuthStatus = withRouter(({ history }) => (
    AuthService.isAuthenticated ? (
        <p>
            Welcome! <button onClick={() => {
            AuthService.logout(() => history.push('/'))
        }}>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
));

class Menu extends Component
{



   /* componentWillMount() {
        // will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
        this.props.history.listen(() => {
            // view new URL
            console.log('New URL', this.props.history.location.pathname);
        });
    }*/
    render()
    {
        return(

            <BrowserRouter>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav mr-auto">
                                {
                                    this.props.elements.map(item=>(

                                        <li key={item.id} className="menuStyle">

                                            <Link to={item.name}> {item.name}</Link>

                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path='/NewVisa' component={NewRequest}>

                        </Route>
                        <Route exact path='/Costs' component={Costs}>

                        </Route>
                        <Route exact path='/VisaStatus' component={ViewRequest}>

                        </Route>

                       {/* <Route path="/login" component={Login}/>*/}
                        <Route path='/Services' component={Services}>

                        </Route>
                    </Switch>


                </div>
            </BrowserRouter>
        )
    }
}


export default withRouter(Menu);



