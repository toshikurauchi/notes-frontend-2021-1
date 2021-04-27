import React from "react";
import Logo from "../Logo";
import "./index.css";

export default function AppBar(props) {
  return (
    <div className="appbar">
      <Logo src="/logo-getit.png" />
      <span className="subtitle">Como o Post-it, mas com outro verbo</span>
    </div>
  );
}
