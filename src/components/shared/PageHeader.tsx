import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PageHeader({ eyebrow, title, description, backHref = "/", backLabel = "Back to overview", action }: { eyebrow: string; title: string; description: string; backHref?: string; backLabel?: string; action?: React.ReactNode }) {
  return <div className="page-header">
    <div><Link href={backHref} className="back-link"><ArrowLeft size={14}/>{backLabel}</Link><span className="section-kicker">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>
    {action && <div className="page-header-action">{action}</div>}
  </div>;
}
