import Link from "next/link";
import { CircleHelp, Gamepad2, Home, Settings2, ShieldCheck, Trophy, Users, WalletCards, X } from "lucide-react";

const navItems = [
  { label: "Overview", href: "/", icon: Home, active: true },
  { label: "Play Ludo", href: "/play", icon: Gamepad2 },
  { label: "Play with friends", href: "/friends", icon: Users },
  { label: "Leaderboard", href: "/leaderboard", icon: Trophy },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <Link href="/" className="brand-lockup">
        <span className="brand-mark"><Gamepad2 size={22} /></span>
        <span><strong>LUDO<span>ARENA</span></strong><small>PLAY • CONNECT • ENJOY</small></span>
      </Link>
      <div className="nav-caption">MENU</div>
      <nav className="side-nav" aria-label="Main navigation">
        {navItems.map(({ label, href, icon: Icon, active }) => (
          <Link key={label} href={href} className={active ? "side-link active" : "side-link"}>
            <Icon size={18} strokeWidth={2.1} /><span>{label}</span>{active && <i />}
          </Link>
        ))}
      </nav>
      <div className="sidebar-divider" />
      <div className="nav-caption">YOUR SPACE</div>
      <nav className="side-nav">
        <Link href="/rewards" className="side-link"><WalletCards size={18} /><span>My rewards</span></Link>
        <Link href="/settings" className="side-link"><Settings2 size={18} /><span>Settings</span></Link>
      </nav>
      <div className="sidebar-bottom">
        <div className="help-card">
          <span className="help-icon"><CircleHelp size={18} /></span>
          <strong>Need a hand?</strong>
          <p>Find tips and learn how to play.</p>
          <Link href="/help">Visit help center <span>↗</span></Link>
        </div>
        <div className="sidebar-profile">
          <div className="avatar avatar-purple">R</div>
          <div className="profile-copy"><strong>Guest Player</strong><small>Free account</small></div>
          <span className="online-dot" />
        </div>
      </div>
    </aside>
  );
}
