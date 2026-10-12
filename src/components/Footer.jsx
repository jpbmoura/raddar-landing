import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ct ft-grid">
        <div>
          <img src={logo} alt="Raddar" className="ft-logo" loading="lazy" width="589" height="128" />
          <p>Representação comercial e distribuição no varejo do Rio Grande do Norte.</p>
        </div>
        <div>
          <span className="label">Endereço</span>
          <p>
            Av. Romualdo Galvão, 2109 · Sala 515
            <br />
            Empresarial Trade Center · Lagoa Nova
            <br />
            Natal/RN · CEP 59.056-165
          </p>
        </div>
        <div>
          <span className="label">Empresa</span>
          <p>
            Camara e Rodrigues LTDA
            <br />
            CNPJ 51.844.529/0001-22
          </p>
        </div>
      </div>
      <div className="ct ft-bar">
        <span>© {new Date().getFullYear()} Raddar Representações</span>
        <a href="#topo">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
