import React from "react";
import Input from "../../utils/Input/Input";
import css from "./Register.module.css";

export default function Register() {
  return (
    <>
      <div className={css.cont_register}>
        <ul className={css.cont_center}>
          <li className={css.input_style}><Input type="text" placeholder="Введите email" /></li>
          <li className={css.input_style}><Input type="text" placeholder="Введите nickname" /></li>
          <li className={css.input_style}><Input type="text" placeholder="Введите password" /></li>
          <li className={css.input_style}><Input type="text" placeholder="Confirm password" /></li>

          <button>Register</button>
        </ul>
      </div>
    </>
  );
}
