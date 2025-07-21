import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./components/Home";
import Description from "./components/Description";
import { useState } from "react";
import Main from "./components/Main";
import Form from "./components/Form";
import EditForm from "./components/EditForm";

const AppRouter = () => {
    const [menuVisible, setMenuVisible] = useState(false)


    const openBurger = () => {
        setMenuVisible(!menuVisible);
    };

    return(
        <Router>
            <div>
                <nav className="navigation">
                    <Link to='/'>Главная</Link> 
                    <Link to='/animals'>Виды</Link>
                    <Link to='/addnew'>Добавить</Link> 
                </nav>
                <svg onClick={openBurger} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-list burger-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                <div className="burger-menu">
                    <div className={`links ${menuVisible ? 'visible' : ''}`}>
                        <Link onClick={openBurger} to='/'>Главная</Link> 
                        <Link onClick={openBurger} to='/animals'>Виды</Link>
                        <Link onClick={openBurger} to='/addnew'>Добавить</Link>
                    </div> 
                </div>
                      
            </div>
            
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/animals' element={<Main/>}/>
                <Route path='/addnew' element={<Form/>}/>
                <Route path='/animals/:id' element={<Description/>}/>
                <Route path='/animals/:id/edit' element={<EditForm/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;