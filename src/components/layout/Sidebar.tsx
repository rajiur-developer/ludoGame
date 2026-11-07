"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleHelp, Gamepad2, Home, Settings2, Trophy, Users, WalletCards, UserRound, Globe2 } from "lucide-react";

const navItems = [
  { label: "Overview", href: "/", icon: Home },
  { label: "Play Ludo", href: "/play", icon: Gamepad2 },
  { label: "Online rooms", href: "/play/online", icon: Globe2 },
  { label: "Friends", href: "/friends", icon: Users },
  { label: "Leaderboard", href: "/leaderboard", icon: Trophy },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/" className="brand-lockup">
        <span className="brand-mark"><Gamepad2 size={22} /></span>
        <span><strong>LUDO<span>ARENA</span></strong><small>PLAY • CONNECT • ENJOY</small></span>
      </Link>
      <div className="nav-caption">MENU</div>
      <nav className="side-nav" aria-label="Main navigation">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
          return <Link key={label} href={href} className={active ? "side-link active" : "side-link"}>
            <Icon size={18} strokeWidth={2.1} /><span>{label}</span>{active && <i />}
          </Link>;
        })}
      </nav>
      <div className="sidebar-divider" />
      <div className="nav-caption">YOUR SPACE</div>
      <nav className="side-nav">
        <Link href="/profile" className={pathname === "/profile" ? "side-link active" : "side-link"}><UserRound size={18}/><span>My profile</span></Link>
        <Link href="/rewards" className={pathname === "/rewards" ? "side-link active" : "side-link"}><WalletCards size={18}/><span>My rewards</span></Link>
        <Link href="/settings" className={pathname === "/settings" ? "side-link active" : "side-link"}><Settings2 size={18}/><span>Settings</span></Link>
      </nav>
      <div className="sidebar-bottom">
        <div className="help-card">
          <span className="help-icon"><CircleHelp size={18}/></span>
          <strong>Need a hand?</strong><p>Find tips and learn how to play.</p>
          <Link href="/help">Visit help center <span>↗</span></Link>
        </div>
        <div className="sidebar-profile">
          <div className="avatar avatar-purple">G</div>
          <div className="profile-copy"><strong>Guest Player</strong><small><Link href="/login">Sign in / Register</Link></small></div>
          <span className="online-dot"/>
        </div>
      </div>
    </aside>
  );
}
