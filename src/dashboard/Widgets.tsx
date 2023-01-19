import React from "react";
import { Link } from "react-router-dom";
import "./widgets.css";

function Widgets() {
  return (
    <div className="link-list">
      <Link className="link-list" to="/dashboard">
        Dashboard
      </Link>
      <Link to="/alerts">Alerts</Link>
      <Link to="/statistics">Statistics</Link>
      <Link to="/tickets">Tickets</Link>
    </div>
  );
}

export default Widgets;
