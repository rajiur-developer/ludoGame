import Link from "next/link";
import type { LucideIcon } from "lucide-react";
export function FeatureCard({ title, description, icon: Icon, href, tag }: { title: string; description: string; icon: LucideIcon; href: string; tag?: string }) {
 return <Link href={href} className="feature-card"><div className="feature-card-icon"><Icon size={22}/></div>{tag && <span className="feature-tag">{tag}</span>}<h3>{title}</h3><p>{description}</p><span className="feature-arrow">↗</span></Link>;
}
