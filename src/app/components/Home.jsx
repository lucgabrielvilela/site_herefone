import { Link, NavLink } from "react-router";
import { EarbudRow } from "./EarbudRow";
import { earbuds } from "../data/earbuds";
import { Search, ArrowRight, Trophy, TrendingUp, Zap, Globe } from "lucide-react";

const topCustoBeneficio = [...earbuds].sort((a, b) => {
  const score = (e) => e.avaliacao / (e.preco / 100);
  return score(b) - score(a);
}).slice(0, 6);

const topMelhores = [...earbuds].sort((a, b) => b.avaliacao - a.avaliacao).slice(0, 6);

const disponivelBrasil = earbuds.filter(e => e.categoria === "Disp. Brasil");
const importados = earbuds.filter(e => e.categoria === "Importado");

export function Home() {
  return (
    <div className="min-vh-100 bg-white">
      {/* Header */}
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
                  `text-decoration-none fw-medium px-3 py-2 rounded-3 hf-nav-link ${isActive ? "text-primary bg-primary bg-opacity-10" : "text-secondary"}`
                }
              >
                Rankings
              </NavLink>
              <NavLink
                to="/marcas"
                className={({ isActive }) =>
                  `text-decoration-none fw-medium px-3 py-2 rounded-3 hf-nav-link ${isActive ? "text-primary bg-primary bg-opacity-10" : "text-secondary"}`
                }
              >
                Marcas
              </NavLink>
              <NavLink
                to="/guias"
                className={({ isActive }) =>
                  `text-decoration-none fw-medium px-3 py-2 rounded-3 hf-nav-link ${isActive ? "text-primary bg-primary bg-opacity-10" : "text-secondary"}`
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

      {/* Hero Section – Blue & Black Themed */}
      <section
        className="px-4 pt-5 pb-5 text-center position-relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0, 102, 255, 0.12), rgba(255, 255, 255, 0) 80%)",
        }}
      >
        <div className="container-xxl py-4" style={{ maxWidth: "860px" }}>
          {/* Badge */}
          <div className="d-inline-flex align-items-center gap-2 px-3.5 py-1.5 rounded-pill bg-white border border-primary border-opacity-25 shadow-sm mb-4">
            <span
              className="badge bg-dark text-white rounded-pill px-2.5 py-1 text-uppercase fw-bold"
              style={{ fontSize: "0.68rem", letterSpacing: "0.06em" }}
            >
              Here<span className="hf-text-blue">fone</span>
            </span>
            <span className="small text-dark fw-semibold">
              Rankings e Reviews de Fones TWS • 2026
            </span>
          </div>

          {/* Title */}
          <h2
            className="display-4 fw-bold text-dark mb-3 tracking-tight lh-sm"
            style={{ fontWeight: 850 }}
          >
            Os Melhores Fones <br className="d-none d-sm-inline" />
            <span className="hf-text-blue position-relative">TWS do Mercado</span>
          </h2>

          {/* Subtitle */}
          <p
            className="lead text-secondary mx-auto mb-4"
            style={{ maxWidth: "640px", fontSize: "1.15rem", lineHeight: "1.65" }}
          >
            Rankings técnicos, testes detalhados e comparativos lado a lado para você escolher o fone sem fio certo pelo melhor custo-benefício.
          </p>

          {/* CTA Buttons */}
          <div className="d-flex gap-3 justify-content-center flex-wrap pt-2 mb-4">
            <Link
              to="/ranking"
              className="btn hf-btn-blue btn-lg px-4 py-3 fw-bold rounded-pill d-inline-flex align-items-center gap-2 shadow"
            >
              Ver Rankings
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/guias"
              className="btn btn-dark btn-lg px-4 py-3 fw-bold rounded-pill shadow-sm"
            >
              Guias de Compra
            </Link>
          </div>

          {/* Quick Filters / Category Pills */}
          <div className="d-flex justify-content-center flex-wrap gap-2 pt-2">
            <Link
              to="/ranking"
              className="badge bg-white text-dark border px-3 py-2 rounded-pill text-decoration-none shadow-xs d-inline-flex align-items-center gap-1.5 hf-nav-link"
            >
              <TrendingUp size={14} className="hf-text-blue" />
              <span>Custo-Benefício</span>
            </Link>
            <Link
              to="/ranking"
              className="badge bg-white text-dark border px-3 py-2 rounded-pill text-decoration-none shadow-xs d-inline-flex align-items-center gap-1.5 hf-nav-link"
            >
              <Trophy size={14} className="hf-text-blue" />
              <span>Mais Bem Avaliados</span>
            </Link>
            <Link
              to="/ranking"
              className="badge bg-white text-dark border px-3 py-2 rounded-pill text-decoration-none shadow-xs d-inline-flex align-items-center gap-1.5 hf-nav-link"
            >
              <Zap size={14} className="hf-text-blue" />
              <span>Cancelamento (ANC)</span>
            </Link>
            <Link
              to="/ranking"
              className="badge bg-white text-dark border px-3 py-2 rounded-pill text-decoration-none shadow-xs d-inline-flex align-items-center gap-1.5 hf-nav-link"
            >
              <Globe size={14} className="hf-text-blue" />
              <span>Disponíveis no Brasil</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar – Blue & Black Contrast */}
      <section className="bg-light border-top border-bottom py-3.5 mb-4">
        <div className="container-xxl px-4">
          <div className="row g-3 text-center">
            <div className="col-6 col-md-3">
              <div className="fw-bold fs-3 text-dark">{earbuds.length}</div>
              <div className="small text-muted fw-semibold">Fones analisados</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fw-bold fs-3 hf-text-blue">
                {earbuds.filter((e) => e.cancelamentoRuido).length}
              </div>
              <div className="small text-muted fw-semibold">Com cancelamento ANC</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fw-bold fs-3 text-dark">
                R$ {Math.min(...earbuds.map((e) => e.preco)).toFixed(0)}
              </div>
              <div className="small text-muted fw-semibold">A partir de (menor preço)</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fw-bold fs-3 hf-text-blue">
                {[...new Set(earbuds.map((e) => e.marca))].length}
              </div>
              <div className="small text-muted fw-semibold">Grandes marcas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings Sections */}
      <div className="container-xxl pb-5 pt-2">
        <EarbudRow title="Melhor Custo-Benefício" earbuds={topCustoBeneficio} showPosition={true} />
        <EarbudRow title="Melhores Avaliados" earbuds={topMelhores} showPosition={true} />
        <EarbudRow title="Disponíveis no Brasil" earbuds={disponivelBrasil} showPosition={false} />
        <EarbudRow title="Importados" earbuds={importados} showPosition={false} />
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
