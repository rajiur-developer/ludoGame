import { Award, Gamepad2, Star, Users } from "lucide-react";

const stats = [
  { label: "Games played", value: "24", detail: "+4 this week", icon: Gamepad2, tone: "orange" },
  { label: "Friends online", value: "08", detail: "Ready to play", icon: Users, tone: "blue" },
  { label: "Your best streak", value: "05", detail: "Keep it going!", icon: Award, tone: "purple" },
  { label: "Arena points", value: "1,250", detail: "Earned by playing", icon: Star, tone: "green" },
];

export function QuickStats() {
  return <section className="stats-grid" aria-label="Player statistics">
    {stats.map(({ label, value, detail, icon: Icon, tone }) => (
      <article className="stat-card" key={label}>
        <div className={`stat-icon ${tone}`}><Icon size={19} /></div>
        <div className="stat-copy"><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>
      </article>
    ))}
  </section>;
}
