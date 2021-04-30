import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Style.css'
export default function Sidebar() {
  return (
    <div>
      <div className="sidenav">
        <h2>PRODUCT</h2>
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
      </div>
    </div>
  );
}
