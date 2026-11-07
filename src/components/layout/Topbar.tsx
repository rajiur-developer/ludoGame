"use client";
import { Bell, ChevronDown, Globe2, Menu, Search } from "lucide-react";
import { useState } from "react";
export function Topbar({onMenuClick}:{onMenuClick?:()=>void}) {
 const [language,setLanguage]=useState<"EN"|"বাংলা">("EN");
 return <header className="topbar">
  <button className="mobile-menu icon-button" aria-label="Open menu" onClick={onMenuClick}><Menu size={20}/></button>
  <div className="breadcrumb"><span>Pages</span><b>/</b><strong>Overview</strong></div>
  <div className="topbar-actions">
   <button className="search-button" onClick={()=>window.location.assign("/search")}><Search size={17}/><span>Search anything</span><kbd>⌘ K</kbd></button>
   <button className="language-button" onClick={()=>setLanguage(language==="EN"?"বাংলা":"EN")} aria-label="Change language"><Globe2 size={17}/>{language}<ChevronDown size={14}/></button>
   <button className="icon-button notification-button" aria-label="Notifications" onClick={()=>window.location.assign("/notifications")}><Bell size={18}/><i/></button>
   <div className="topbar-avatar">G</div>
  </div>
 </header>;
}