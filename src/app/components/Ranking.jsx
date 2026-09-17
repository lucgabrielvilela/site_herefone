import { Link, NavLink } from "react-router";
import { earbuds } from "../data/earbuds";
import { Star, Trophy, TrendingUp, Zap, Globe } from "lucide-react";

const IMG_FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' fill='%23e5e7eb'%3E%3Crect width='52' height='52' rx='6'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='20' fill='%239ca3af'%3E%3F%3C/text%3E%3C/svg%3E";

function RankingTable({ title, icon: Icon, color, items }) {
  return (
    <div className="mb-5">
      <div className="d-flex align-items-center gap-3 mb-4">
        <div className={`rounded-3 p-2 ${color}`}>
          <Icon size={22} className="text-white" />
        </div>
        <h2 className="h4 fw-bold text-dark mb-0">{title}</h2>
      </div>
      <div className="card border-0 shadow-sm" style={{ borderRadius: "1rem", overflow: "hidden" }}>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light">
              <tr>
                <th className="ps-4 py-3 text-muted small fw-semibold" style={{ width: "50px" }}>#</th>
                <th className="py-3 text-muted small fw-semibold">Produto</th>
                <th className="py-3 text-muted small fw-semibold text-center">Avaliação</th>
                <th className="py-3 text-muted small fw-semibold text-center">ANC</th>
                <th className="py-3 text-muted small fw-semibold text-center">Categoria</th>
                <th className="py-3 pe-4 text-muted small fw-semibold text-end">Preço</th>
              </tr>
            </thead>
            <tbody>
              {items.map((earbud, i) => (
                <tr key={earbud.id}>
                  <td className="ps-4">
                    <span className={`badge ${i < 3 ? "bg-dark text-white" : "bg-light text-secondary"} fw-bold px-2.5 py-1.5`}>
                      {i + 1}
                    </span>
                  </td>
                  <td>
                    <Link to={`/earbud/${earbud.id}`} className="d-flex align-items-center gap-3 text-decoration-none">
                      <img
                        src={earbud.imagem}
                        alt={earbud.nome}
                        className="rounded-3 border"
                        style={{ width: "52px", height: "52px", objectFit: "cover", flexShrink: 0 }}
                        onError={(e) => { e.target.src = IMG_FALLBACK; }}
                      />
                      <div>
                        <div className="fw-semibold text-dark hf-table-link">{earbud.nome}</div>
                        <div className="small text-muted">{earbud.marca}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="text-center">
                    <span className="d-inline-flex align-items-center gap-1">
                      <Star size={14} fill="#facc15" color="#facc15" />
                      <span className="fw-semibold small">{earbud.avaliacao.toFixed(1)}</span>
                    </span>
                  </td>
                  <td className="text-center">
                    {earbud.cancelamentoRuido
                      ? <span className="badge bg-success-subtle text-success border border-success-subtle small">Sim</span>
                      : <span className="badge bg-light text-muted border small">Não</span>
                    }
                  </td>
                  <td className="text-center">
                    <span className={`badge small ${earbud.categoria === "Importado" ? "bg-warning-subtle text-warning border border-warning-subtle" : "bg-info-subtle text-info border border-info-subtle"}`}>
                      {earbud.categoria}
                    </span>
                  </td>
                  <td className="pe-4 text-end">
                    <span className="fw-bold text-dark">R$ {earbud.preco.toFixed(2)}</span>
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
    <div className="min-vh-100 bg-light">
      {/* Nav */}
      <header className="sticky-top bg-white border-bottom shadow-sm" style={{ zIndex: 1000 }}>
        <div className="container-xl d-flex align-items-center justify-content-between px-4 py-3">
          <Link to="/" className="text-decoration-none">
            <span className="h5 fw-bold text-dark mb-0">Here<span className="text-primary">fone</span></span>
          </Link>
          <nav className="d-flex gap-1">
            <NavLink to="/ranking" className={({ isActive }) => `text-decoration-none fw-medium px-3 py-2 rounded-3 hf-nav-link ${isActive ? "text-primary bg-primary bg-opacity-10" : "text-secondary"}`}>Rankings</NavLink>
            <NavLink to="/marcas" className={({ isActive }) => `text-decoration-none fw-medium px-3 py-2 rounded-3 hf-nav-link ${isActive ? "text-primary bg-primary bg-opacity-10" : "text-secondary"}`}>Marcas</NavLink>
            <NavLink to="/guias" className={({ isActive }) => `text-decoration-none fw-medium px-3 py-2 rounded-3 hf-nav-link ${isActive ? "text-primary bg-primary bg-opacity-10" : "text-secondary"}`}>Guias</NavLink>
          </nav>
        </div>
      </header>
      {/* Page header */}
      <div className="bg-white border-bottom">
        <div className="container-xl px-4 py-4">
          <div className="d-flex align-items-center gap-3 mb-1">
            <Trophy size={28} className="text-primary" />
            <h1 className="display-6 fw-bold text-dark mb-0">Rankings</h1>
          </div>
          <p className="text-secondary mb-0">Compare todos os fones TWS do mercado lado a lado.</p>
        </div>
      </div>

      <div className="container-xl px-4 py-5">
        <RankingTable
          title="Melhores Avaliados"
          icon={Trophy}
          color="bg-primary"
          items={porAvaliacao}
        />
        <RankingTable
          title="Melhor Custo-Benefício"
          icon={TrendingUp}
          color="bg-success"
          items={custoBeneficio}
        />
        <RankingTable
          title="Com Cancelamento de Ruído (ANC)"
          icon={Zap}
          color="bg-danger"
          items={comANC}
        />
        <RankingTable
          title="Disponíveis no Brasil (Menor Preço)"
          icon={Globe}
          color="bg-info"
          items={disponivelBR}
        />
      </div>
    </div>
  );
}
