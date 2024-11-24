import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <>
      <div>Contact</div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut aliquam
        distinctio cupiditate laborum magnam, doloremque sapiente quia. Quia ab
        distinctio, voluptas velit tempora, animi repellat, natus minima optio
        veniam pariatur.
      </p>

      <Link to={"email"}>Email</Link>
      <Link to={"phone"}>Phone</Link>
      <Outlet />
    </>
  );
}

export default Contact;
