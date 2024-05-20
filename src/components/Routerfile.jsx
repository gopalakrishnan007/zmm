import {  Routes, Route, useLocation } from "react-router-dom";
import SignIn from "./Signin";
import Form from "./Form";
import Forgotenpassword from './Forgotenpassword'
import Sellerform from "./Sellerform";
import Navbar from "./Navbar";
import Home from "./Home";
import Createuser from './Createuser.jsx'
import Otpverify from './Otpverify.jsx'

export default function Routerfile(){
    const loc = useLocation()
    const pat =['/signin',"/forgotenpassword",'/signup','/otppage']
    let rend = true;
    for(let x in pat){
        if(pat[x] === loc.pathname){
            rend = false;
            break;
        }
    }
    return(
        <>
            { rend ? <Navbar/> : null}  
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/signin" element={<SignIn/>} ></Route>
            <Route path="/form" element={<Form/>}></Route>
            <Route path="/forgotenpassword" element={<Forgotenpassword/>}></Route>
            <Route path="/sellerform" element={<Sellerform/>}></Route>
            <Route path="/signup" element={<Createuser/>}></Route>
            <Route path="/otppage" element={<Otpverify/>}></Route>
        </Routes>
        </>
    )
}