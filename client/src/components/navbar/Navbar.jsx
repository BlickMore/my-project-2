import React from "react";
import logo from "../../assets/navbar-logo.svg";
import css from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className={css.navbar_cont}>
        <img className={css.navbar_logo} src={logo} alt="" />
        <ul className={css.navbar_pages}>
          <li><NavLink to='/'>Главная</NavLink></li>
          <li><NavLink to='/news'>News</NavLink></li>
          <li><NavLink to='/analytics'>Analytics</NavLink></li>
          <li><NavLink to='/contacts'>Contacts</NavLink></li>
        </ul>
        <ul className={css.navbar_join}>
          <li>
            <NavLink to='/login'>ЛОгин</NavLink>
          </li>
          <li>
            <NavLink to='/registration'>Регистрация</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
