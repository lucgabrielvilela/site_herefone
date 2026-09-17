import { Link, NavLink } from "react-router";
import { earbuds } from "../data/earbuds";
import { Star, Trophy, TrendingUp, Zap, Globe, Search } from "lucide-react";

const IMG_FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' fill='%23f1f5f9'%3E%3Crect width='52' height='52' rx='8'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='%2394a3b8'%3E%3F%3C/text%3E%3C/svg%3E";

function PositionBadge({ position }) {
  if (position <= 3) {
    return (
      <span
        className="badge fw-bold px-2 py-1"
        style={{
          background: "var(--hf-blue)",
          color: "#fff",
          fontSize: "0.78rem",
          minWidth: "28px",
        }}
      >
        {position}
      </span>
    );
  }
  return (
    <span
      className="badge fw-bold px-2 py-1"
      style={{
        background: "var(--hf-black)",
        color: "#fff",
        fontSize: "0.78rem",
        minWidth: "28px",
      }}
    >
      {position}
    </span>
  );
}

function RankingTable({ title, icon: Icon, accentColor, items }) {
  return (
    <div className="mb-5">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div
          className="rounded-3 p-2 d-flex align-items-center justify-content-center"
          style={{ background: accentColor, width: "40px", height: "40px" }}
        >
          <Icon size={20} color="#fff" />
        </div>
        <h2 className="h5 fw-bold mb-0" style={{ color: "var(--hf-black)" }}>
          {title}
        </h2>
      </div>
      <div
        className="border overflow-hidden bg-white"
        style={{ borderRadius: "1rem", borderColor: "var(--hf-border)" }}
      >
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--hf-border)", background: "#f8fafc" }}>
                <th className="ps-4 py-3 text-secondary small fw-semibold" style={{ width: "52px" }}>#</th>
                <th className="py-3 text-secondary small fw-semibold">Produto</th>
                <th className="py-3 text-secondary small fw-semibold text-center">Avaliação</th>
                <th className="py-3 text-secondary small fw-semibold text-center">ANC</th>
                <th className="py-3 text-secondary small fw-semibold text-center d-none d-md-table-cell">Categoria</th>
                <th className="py-3 pe-4 text-secondary small fw-semibold text-end">Preço</th>
              </tr>
            </thead>
            <tbody>
              {items.map((earbud, i) => (
                <tr key={earbud.id} style={{ borderBottom: "1px solid var(--hf-border)" }}>
                  <td className="ps-4">
                    <PositionBadge position={i + 1} />
                  </td>
                  <td>
                    <Link
                      to={`/earbud/${earbud.id}`}
                      className="d-flex align-items-center gap-3 text-decoration-none"
                    >
                      <img
                        src={earbud.imagem}
                        alt={earbud.nome}
                        className="rounded-3 border flex-shrink-0"
                        style={{ width: "48px", height: "48px", objectFit: "cover" }}
                        onError={(e) => { e.target.src = IMG_FALLBACK; }}
                      />
                      <div>
                        <div className="fw-semibold hf-table-link" style={{ color: "var(--hf-black)" }}>
                          {earbud.nome}
                        </div>
                        <div className="small text-secondary">{earbud.marca}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="text-center">
                    <span className="d-inline-flex align-items-center gap-1">
                      <Star size={13} fill="#facc15" color="#facc15" />
                      <span className="fw-semibold small" style={{ color: "var(--hf-black)" }}>
                        {earbud.avaliacao.toFixed(1)}
                      </span>
                    </span>
                  </td>
                  <td className="text-center">
                    {earbud.cancelamentoRuido ? (
                      <span
                        className="badge small fw-semibold"
                        style={{
                          background: "var(--hf-blue-light)",
                          color: "var(--hf-blue)",
                          border: "1px solid var(--hf-blue-subtle)",
                        }}
                      >
                        Sim
                      </span>
                    ) : (
                      <span
                        className="badge small fw-semibold"
                        style={{
                          background: "#fff1f2",
                          color: "#e11d48",
                          border: "1px solid #fecdd3",
                        }}
                      >
                        Não
                      </span>
                    )}
                  </td>
                  <td className="text-center d-none d-md-table-cell">
                    <span
                      className="badge small fw-semibold"
                      style={
                        earbud.categoria === "Importado"
                          ? { background: "#fffbeb", color: "#b45309", border: "1px solid #fde68a" }
                          : { background: "var(--hf-blue-light)", color: "var(--hf-blue)", border: "1px solid var(--hf-blue-subtle)" }
                      }
                    >
                      {earbud.categoria}
                    </span>
                  </td>
                  <td className="pe-4 text-end">
                    <span className="fw-bold" style={{ color: "var(--hf-blue)" }}>
                      R$ {earbud.preco.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function Ranking() {
  const porAvaliacao = [...earbuds].sort((a, b) => b.avaliacao - a.avaliacao);
  const custoBeneficio = [...earbuds].sort((a, b) => {
    const score = (e) => e.avaliacao / (e.preco / 100);
    return score(b) - score(a);
  });
  const comANC = earbuds.filter(e => e.cancelamentoRuido).sort((a, b) => b.avaliacao - a.avaliacao);
  const disponivelBR = earbuds.filter(e => e.categoria === "Disp. Brasil").sort((a, b) => a.preco - b.preco);

  return (
    <div className="min-vh-100 bg-white">
      {/* Header – idêntico ao Home */}
      <header className="sticky-top bg-white border-bottom shadow-xs" style={{ zIndex: 1000 }}>
        <div className="container-xxl d-flex align-items-center justify-content-between px-4 py-3">
          <div className="d-flex align-items-center gap-4">
            <Link to="/" className="text-decoration-none">
              <h1 className="h4 fw-bold text-dark mb-0 tracking-tight">
                Here<span className="hf-text-blue">fone</span>
              </h1>
            </Link>
            <nav className="d-none d-md-flex gap-1">
              <NavLink
                to="/ranking"
                className={({ isActive }) =>
                  `text-decoration-none fw-medium px-3 py-2 rounded-3 hf-nav-link ${isActive ? "hf-text-blue bg-primary bg-opacity-10" : "text-secondary"}`
                }
              >
                Rankings
              </NavLink>
              <NavLink
                to="/marcas"
                className={({ isActive }) =>
                  `text-decoration-none fw-medium px-3 py-2 rounded-3 hf-nav-link ${isActive ? "hf-text-blue bg-primary bg-opacity-10" : "text-secondary"}`
                }
              >
                Marcas
              </NavLink>
              <NavLink
                to="/guias"
                className={({ isActive }) =>
                  `text-decoration-none fw-medium px-3 py-2 rounded-3 hf-nav-link ${isActive ? "hf-text-blue bg-primary bg-opacity-10" : "text-secondary"}`
                }
              >
                Guias
              </NavLink>
            </nav>
          </div>
          <Link
            to="/ranking"
            className="btn btn-outline-dark rounded-pill d-flex align-items-center gap-2 px-3 py-2 text-decoration-none small fw-medium"
          >
            <Search size={15} className="hf-text-blue" />
            <span className="d-none d-sm-inline">Ver catálogo</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div
        className="border-bottom"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(0,102,255,0.07), rgba(255,255,255,0) 70%)",
        }}
      >
        <div className="container-xxl px-4 py-5">
          <div className="d-flex align-items-center gap-3 mb-2">
            <Trophy size={30} style={{ color: "var(--hf-blue)" }} />
            <h1 className="display-6 fw-bold mb-0" style={{ color: "var(--hf-black)" }}>
              Rankings
            </h1>
          </div>
          <p className="text-secondary mb-0" style={{ maxWidth: "520px" }}>
            Compare todos os fones TWS lado a lado — avaliação, preço, ANC e disponibilidade no Brasil.
          </p>
        </div>
      </div>

      {/* Tables */}
      <div className="container-xxl px-4 py-5">
        <RankingTable
          title="Melhores Avaliados"
          icon={Trophy}
          accentColor="var(--hf-blue)"
          items={porAvaliacao}
        />
        <RankingTable
          title="Melhor Custo-Benefício"
          icon={TrendingUp}
          accentColor="var(--hf-black)"
          items={custoBeneficio}
        />
        <RankingTable
          title="Com Cancelamento de Ruído (ANC)"
          icon={Zap}
          accentColor="#e11d48"
          items={comANC}
        />
        <RankingTable
          title="Disponíveis no Brasil — Menor Preço"
          icon={Globe}
          accentColor="#0891b2"
          items={disponivelBR}
        />
      </div>

      {/* Footer */}
      <footer className="border-top bg-light">
        <div className="container-xxl px-4 py-5">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
            <div>
              <h3 className="h5 fw-bold text-dark mb-1">
                Here<span className="hf-text-blue">fone</span>
              </h3>
              <p className="text-secondary small mb-0">Rankings e reviews confiáveis de fones TWS</p>
            </div>
            <div className="text-end">
              <p className="text-muted small mb-0">© 2026 Todos os direitos reservados</p>
              <p className="small mb-0" style={{ color: "var(--hf-blue)", fontWeight: 600 }}>
                Feito por Lucas Vilela
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

