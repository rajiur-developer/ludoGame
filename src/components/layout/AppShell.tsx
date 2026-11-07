"use client";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
export function AppShell({ children }: { children: React.ReactNode }) {
 const [menuOpen,setMenuOpen]=useState(false);
 return <div className="app-shell">
  {menuOpen&&<button className="mobile-backdrop" aria-label="Close navigation" onClick={()=>setMenuOpen(false)}/>}
  <Sidebar mobileOpen={menuOpen} onNavigate={()=>setMenuOpen(false)}/>
  <div className="main-column"><Topbar onMenuClick={()=>setMenuOpen(!menuOpen)}/><main className="main-content">{children}</main></div>
 </div>;
}