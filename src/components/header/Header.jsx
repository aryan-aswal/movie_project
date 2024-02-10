import React, { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
      window.addEventListener("scroll",controlNavbar);
      return () => {
        window.removeEventListener("scroll",controlNavbar);
      }
    },[lastScrollY])

    useEffect(()=>{
      window.scrollTo(0,0);
    },[location])

    const controlNavbar = () => {
      if(window.scrollY > 180) {
        if(window.scrollY > lastScrollY && !mobileMenu) {
          setShow("hide");
        } else {
          setShow("show");
        }
      } else {
        setShow("top");
      } 
      setLastScrollY(window.scrollY);
    }
    const openMobileMenu = () =>{
      setMobileMenu(true);
      setShowSearch(false);
    }
    const searchQueryHandler= (event) =>{
      if((event.key === 'Enter' || event.type === "click") && query.length > 0) {
          navigate(`search/${query}`);
          setTimeout(()=>{
            setShowSearch(false);
          },1000);
      }
    }
    const navigationHandler = (type) => {
      if(type === 'movie') {
        navigate('/explore/movie');
      } else {
        navigate('/explore/tv');
      }
      setMobileMenu(false);
    }
    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}> 
          <ContentWrapper>
            <div className="logo">
              <img src={logo} alt="" onClick={()=>navigate('/')}/>
            </div>
            <ul className="menuItems">
              <li className="menuItem" onClick={()=>navigationHandler("movie")}>Movies</li>
              <li className="menuItem" onClick={()=>navigationHandler("tv")}>TV Shows</li>
              <li className="menuItem"><input type="text" name="" id="" placeholder={`Search...`} onChange={(e)=>{setQuery(e.target.value)}} onKeyUp={searchQueryHandler} className="SearchBar"/></li>
            </ul>

            <div className="mobileMenuItems">
            <li className="MenuItem"><input type="text" name="" id="" placeholder='Search...' onChange={(e)=>{setQuery(e.target.value)}} onKeyUp={searchQueryHandler} className="mobileSearchBar"/></li>
              { mobileMenu ? 
                (<VscChromeClose onClick={()=> setMobileMenu(false)}/>) 
                : 
                (<SlMenu onClick={openMobileMenu}/>)
              }
            </div>
          </ContentWrapper>
        </header>
    );
};

export default Header;
