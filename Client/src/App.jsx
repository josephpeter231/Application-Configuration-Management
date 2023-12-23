import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Provider} from 'react-redux'

import Home from "./Components/Home";
import Intro from "./Components/Intro";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile/Profile";
import LoginOrSignup from "./Components/Login/LoginOrSignup";
import Configuration from "./Components/Configuration";
import DeveloperConfiguration from "./Components/DeveloperConfiguration";
import DeveloperHome from "./Components/DeveloperHome";
import Allstud from "./Components/Allstud.jsx";
import store from "./Store/store.js";
import View from "./Components/View.jsx";
import View2 from "./Components/View2.jsx";
import Edit from "./Components/Edit.jsx"

function App() {
  

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DeveloperHome/>} exact />
        <Route path="/home"  element={<Home/>}/>
        <Route path="/developerhome"  element={<DeveloperHome/>}/>
        <Route path="/profile"  element={<Profile/>}/>
        <Route path='/loginOrSignup' element={<LoginOrSignup/>}/>
        <Route path='/DeveloperHome' element={<DeveloperHome/>}/>
        <Route  path='/Developerconfig' element={<DeveloperConfiguration />} />
        <Route  path='/allconfig' element={<Allstud />} />
        <Route path='/config' element={<Configuration/>}/>
        <Route path='/developerconfig' element={<DeveloperConfiguration/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/view2/:id' element={<View2/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path="*"  element={<PageNotFound/>}/>

      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
