import Link from "next/link";
import { Gamepad2, Home } from "lucide-react";
export default function NotFound(){return <main className="not-found-page"><div className="not-found-mark"><Gamepad2 size={30}/></div><span className="section-kicker">404 · WRONG TURN</span><h1>Oops! This path<br/>is out of the board.</h1><p>The page you are looking for does not exist or may have moved.</p><Link href="/" className="primary-action"><Home size={16}/> Back to overview</Link></main>}
