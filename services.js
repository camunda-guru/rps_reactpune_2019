import React,{Component} from 'react'
import {BrowserRouter,Link,Switch,Route,withRouter} from 'react-router-dom'
import './services.css'
import NewRequest from "../newrequest/newrequest";

const services = ({ match })=>(
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="rootStyle">
                    <li className="serviceStyle">
                        <Link to={`${match.url}/Tourist`}>Tourist</Link></li>
                    <li className="serviceStyle">
                        <Link to={`${match.url}/Business`}>Business</Link></li>
                    <li className="serviceStyle">
                        <Link to={`${match.url}/Transit`}>Transit</Link></li>
                </ul>
                    </div>
                </nav>

                <Route exact path={`${match.url}/Tourist`}
                       render={() => (
                           <div> This is tourist visa
                    <Link to={`/Services`}>
                        Back to Services
                    </Link>

                </div>)}/>
                <Route exact path={`${match.url}/Business`}
                       component={() => (<div> This is business visa </div>)}/>
                <Route exact path={`${match.url}/Transit`}
                       component={() => (<div> This is Transit </div>)}/>

            </div>
);

export default services;