import logo from "../assets/logo.png";
import { MSG, go } from "../content";
import { WhatsIcon } from "./Icons";

const LINKS = [
  ["#problema", "Problema"],
  ["#como", "Como funciona"],
  ["#marcas", "Marcas"],
  ["#cobertura", "Cobertura"],
  ["#faq", "Dúvidas"],
];

export default function Header({ scrolled, barOn }) {
  return (
    <header className={`hd ${scrolled ? "is-scrolled" : ""} ${barOn ? "bar-on" : ""}`}>
      <div className="ct hd-in">
        <a href="#topo" className="hd-brand" aria-label="Raddar — início">
          <img src={logo} alt="Raddar" className="hd-logo" width="589" height="128" />
        </a>
        <nav className="hd-nav" aria-label="Seções">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <button className="bt bt-sm" onClick={() => go(MSG.header)}>
          <WhatsIcon s={14} /> Ver preços
        </button>
      </div>
    </header>
  );
}
