import { useParams, Link, NavLink } from "react-router";
import { earbuds } from "../data/earbuds";
import {
  Star, Battery, Droplets, Bluetooth, Volume2, VolumeX,
  Check, ExternalLink, ShoppingBag, ShieldCheck, Search
} from "lucide-react";

const IMG_FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' fill='%23f8fafc'%3E%3Crect width='600' height='600' rx='24'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%2394a3b8'%3EFone%3C/text%3E%3C/svg%3E";

export function EarbudDetails() {
  const { id } = useParams();
  const earbud = earbuds.find(e => e.id === Number(id));

  if (!earbud) {
    return (
      <div className="min-vh-100 bg-white d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h2 className="fw-bold mb-4" style={{ color: "var(--hf-black)" }}>Fone não encontrado</h2>
          <Link to="/" className="btn hf-btn-blue rounded-pill px-4 py-2">Voltar para o início</Link>
        </div>
      </div>
    );
  }

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

      {/* Hero gradient – igual ao Home */}
      <div
        className="position-relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(0,102,255,0.07), rgba(255,255,255,0) 70%)",
        }}
      >
        <div className="container-xxl px-4 py-4">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb small mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-secondary text-decoration-none hf-table-link">Início</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/marcas" className="text-secondary text-decoration-none hf-table-link">{earbud.marca}</Link>
              </li>
              <li className="breadcrumb-item active fw-medium" style={{ color: "var(--hf-black)" }} aria-current="page">
                {earbud.nome}
              </li>
            </ol>
          </nav>

          <div className="row g-5 mb-5 align-items-start">
            {/* Coluna da imagem */}
            <div className="col-lg-6">
              <div className="sticky-top" style={{ top: "85px", zIndex: 1 }}>
                <div
                  className="overflow-hidden hf-detail-img-wrap"
                  style={{
                    aspectRatio: "1/1",
                    borderRadius: "1.5rem",
                    background: "#f8fafc",
                    border: "1px solid var(--hf-border)",
                    padding: "1.5rem",
                  }}
                >
                  <img
                    src={earbud.imagem}
                    alt={earbud.nome}
                    className="w-100 h-100 hf-detail-img"
                    style={{ objectFit: "contain", mixBlendMode: "multiply" }}
                    onError={(e) => { e.target.src = IMG_FALLBACK; }}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 px-1">
                  <span className="d-flex align-items-center gap-2 small text-secondary">
                    <ShieldCheck size={15} style={{ color: "var(--hf-blue)" }} />
                    Avaliado pela equipe Herefone
                  </span>
                  <span className="badge hf-badge-blue rounded-pill px-3 py-1" style={{ fontSize: "0.72rem" }}>
                    {earbud.categoria}
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna de informações */}
            <div className="col-lg-6">
              {/* Badges */}
              <div className="d-flex align-items-center gap-2 mb-3">
                <span
                  className="badge hf-badge-black rounded-pill px-3 py-1 text-uppercase"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.06em" }}
                >
                  {earbud.marca}
                </span>
                <span
                  className="badge hf-badge-blue rounded-pill px-3 py-1"
                  style={{ fontSize: "0.7rem" }}
                >
                  {earbud.perfilSonoro}
                </span>
              </div>

              <h1 className="display-6 fw-bold mb-3 lh-sm" style={{ color: "var(--hf-black)" }}>
                {earbud.nome}
              </h1>

              {/* Rating + Preço */}
              <div
                className="rounded-4 p-4 mb-4"
                style={{
                  background: "linear-gradient(135deg, #f8fafc 0%, var(--hf-blue-light) 100%)",
                  border: "1px solid var(--hf-blue-subtle)",
                }}
              >
                <div className="row g-3 align-items-center">
                  <div className="col-sm-6">
                    <div className="small fw-semibold text-secondary mb-1">Avaliação Editorial</div>
                    <div className="d-flex align-items-baseline gap-2">
                      <Star size={22} fill="#facc15" color="#facc15" />
                      <span className="fs-2 fw-bold" style={{ color: "var(--hf-black)" }}>
                        {earbud.avaliacao.toFixed(1)}
                      </span>
                      <span className="text-secondary small">/ 5.0</span>
                    </div>
                  </div>
                  <div className="col-sm-6 ps-sm-4" style={{ borderLeft: "1px solid var(--hf-blue-subtle)" }}>
                    <div className="small fw-semibold text-secondary mb-1">Menor Preço Encontrado</div>
                    <div className="fs-2 fw-bold" style={{ color: "var(--hf-blue)" }}>
                      R$ {earbud.preco.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-secondary fs-6 lh-lg mb-4">{earbud.descricao}</p>

              {/* Botões de compra */}
              <div className="d-grid gap-2 mb-4">
                <a
                  href={earbud.linkCompra}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn hf-btn-blue btn-lg d-flex align-items-center justify-content-center gap-2 fw-bold rounded-3 py-3"
                >
                  <ShoppingBag size={18} />
                  Ver na Amazon
                  <ExternalLink size={14} className="ms-1 opacity-75" />
                </a>
                <a
                  href={earbud.linkMercadoLivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn hf-btn-dark btn-lg d-flex align-items-center justify-content-center gap-2 fw-semibold rounded-3 py-3"
                >
                  Ver no Mercado Livre
                  <ExternalLink size={14} className="ms-1 opacity-75" />
                </a>
              </div>

              {/* Quick Specs */}
              <div className="row g-2">
                {[
                  {
                    label: "Cancelamento",
                    icon: earbud.cancelamentoRuido
                      ? <Volume2 size={18} style={{ color: "var(--hf-blue)" }} />
                      : <VolumeX size={18} className="text-secondary" />,
                    value: earbud.cancelamentoRuido ? "ANC Ativo" : "Sem ANC",
                    active: earbud.cancelamentoRuido,
                  },
                  {
                    label: "Bateria",
                    icon: <Battery size={18} style={{ color: "var(--hf-blue)" }} />,
                    value: earbud.autonomia,
                    active: true,
                  },
                  {
                    label: "Proteção",
                    icon: <Droplets size={18} style={{ color: "var(--hf-blue)" }} />,
                    value: earbud.resistenciaAgua,
                    active: true,
                  },
                  {
                    label: "Conexão",
                    icon: <Bluetooth size={18} style={{ color: "var(--hf-blue)" }} />,
                    value: earbud.conectividade,
                    active: true,
                  },
                ].map((spec) => (
                  <div key={spec.label} className="col-6">
                    <div
                      className="rounded-3 p-3 h-100 hf-spec-chip"
                      style={{
                        background: spec.active ? "var(--hf-blue-light)" : "#f8fafc",
                        border: `1px solid ${spec.active ? "var(--hf-blue-subtle)" : "var(--hf-border)"}`,
                      }}
                    >
                      <div className="small text-secondary mb-1 fw-medium">{spec.label}</div>
                      <div className="d-flex align-items-center gap-2">
                        {spec.icon}
                        <span
                          className="small fw-bold"
                          style={{ color: spec.active ? "var(--hf-black)" : "#64748b" }}
                        >
                          {spec.value}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specs Técnicas & Destaques */}
          <div className="row g-4 pt-2 pb-5">
            {/* Especificações Técnicas */}
            <div className="col-md-6">
              <div
                className="h-100 p-4 hf-detail-section-card"
                style={{
                  borderRadius: "1.25rem",
                  border: "1px solid var(--hf-border)",
                  background: "#ffffff",
                }}
              >
                <h2 className="h5 fw-bold mb-4" style={{ color: "var(--hf-black)" }}>
                  Especificações Técnicas
                </h2>
                <div className="d-flex flex-column">
                  {[
                    { label: "Fabricante", value: earbud.marca },
                    { label: "Drivers de Áudio", value: earbud.drivers },
                    { label: "Versão Bluetooth", value: earbud.conectividade },
                    { label: "Certificação de Resistência", value: earbud.resistenciaAgua },
                    { label: "Autonomia Estimada", value: earbud.autonomia },
                    { label: "Perfil de Equalização", value: earbud.perfilSonoro },
                    { label: "Disponibilidade", value: earbud.categoria },
                  ].map((spec, i, arr) => (
                    <div
                      key={spec.label}
                      className={`d-flex justify-content-between align-items-center py-3 ${i < arr.length - 1 ? "border-bottom" : ""}`}
                    >
                      <span className="small text-secondary">{spec.label}</span>
                      <span className="small fw-semibold" style={{ color: "var(--hf-black)" }}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Destaques */}
            <div className="col-md-6">
              <div
                className="h-100 p-4 hf-detail-section-card"
                style={{
                  borderRadius: "1.25rem",
                  border: "1px solid var(--hf-border)",
                  background: "#ffffff",
                }}
              >
                <h2 className="h5 fw-bold mb-4" style={{ color: "var(--hf-black)" }}>
                  Destaques e Avaliação
                </h2>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  {earbud.cancelamentoRuido && (
                    <li className="d-flex align-items-start gap-3">
                      <span className="hf-check-icon flex-shrink-0">
                        <Check size={14} />
                      </span>
                      <span className="small text-secondary">
                        Cancelamento Ativo de Ruído (ANC) para isolamento sonoro
                      </span>
                    </li>
                  )}
                  <li className="d-flex align-items-start gap-3">
                    <span className="hf-check-icon flex-shrink-0">
                      <Check size={14} />
                    </span>
                    <span className="small text-secondary">
                      Autonomia total de {earbud.autonomia} considerando o estojo de recarga
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <span className="hf-check-icon flex-shrink-0">
                      <Check size={14} />
                    </span>
                    <span className="small text-secondary">
                      Classificação {earbud.resistenciaAgua} para segurança contra suor e respingos
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <span className="hf-check-icon flex-shrink-0">
                      <Check size={14} />
                    </span>
                    <span className="small text-secondary">
                      Drivers dedicados de {earbud.drivers} para fidelidade acústica
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <span className="hf-check-icon flex-shrink-0">
                      <Check size={14} />
                    </span>
                    <span className="small text-secondary">
                      Conexão moderna via {earbud.conectividade} de baixa latência
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer – idêntico ao Home */}
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
