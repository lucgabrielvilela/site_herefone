import { Link, NavLink } from "react-router";
import { marcas } from "../data/earbuds";
import { Star, ExternalLink, Package } from "lucide-react";

const IMG_FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' fill='%23f1f5f9'%3E%3Crect width='400' height='300' rx='8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%2394a3b8'%3EFone%3C/text%3E%3C/svg%3E";

const brandLogos = {
  "Lenovo": "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
  "QCY": "https://down-tx-br.img.susercontent.com/5a7bd7936bead082be18d718f75fb075_tn.webp",
  "Anker": "https://anthembranding.com/imager/media/Client-Logos/100745/Anker-logo-1_50fddbcdf1bc5728890207d304f83f3a.webp",
  "Moondrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl93Apxsby8ZjVdISHGO3M0UZxB_f9OHPRDcUpzAXaD7iJacAVCNvcBwg&s=10",
  "Kuba": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3DgS1FQjnO6HWLdUER_83RQ50HTIJ9NpTK4pnB_J5rqCxHmLHLAUWdmo&s=10",
  "Realme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rHDOe64vJVdUTI2uXONCBRTw5Joj__at6t4rR3dzxg&s=10",
  "Samsung": "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/360_197_1.png?$720_N_PNG$",
  "Apple": "https://cdn-icons-png.flaticon.com/256/0/747.png",
};

const brandColors = {
  "Lenovo": "#e2001a",
  "QCY": "#007bff",
  "Anker": "#00b4d8",
  "Moondrop": "#7c3aed",
  "Kuba": "#16a34a",
  "Realme": "#f59e0b",
  "Samsung": "#1428a0",
  "Apple": "#1d1d1f",
};

const brandDescriptions = {
  "Lenovo": "Gigante da tecnologia chinesa, conhecida por notebooks e acessórios com excelente custo-benefício. Seus fones são focados em gamers e usuários casuais que buscam qualidade sem gastar muito.",
  "QCY": "Marca chinesa especializada em fones TWS acessíveis com tecnologia de ponta. Destaque pelo ANC eficiente e suporte ao codec LDAC em produtos de entrada. Presença forte no Brasil via importação.",
  "Anker": "Referência mundial em acessórios e carregadores, a linha Soundcore da Anker oferece fones com excelente autonomia, ANC de alta performance e app robusto de configuração.",
  "Moondrop": "Marca audiófila chinesa famosa por sintonizações baseadas em curvas de referência como Harman e Diffuse Field. Favorita da comunidade Hi-Fi por qualidade sonora muito acima do preço.",
  "Kuba": "Marca brasileira fundada com foco em qualidade sonora acessível ao público nacional. O Mali 2 foi sintonizado por Leonardo Drummond (Mind The Headphone) e é o primeiro TWS com ANC da marca.",
  "Realme": "Sub-marca da OPPO focada em jovens e custo-benefício. Os Buds Air combinam design moderno, ANC competente e grande autonomia de bateria para competir no mercado intermediário.",
  "Samsung": "Líder global em eletrônicos, os Galaxy Buds são integrados ao ecossistema Android e Galaxy AI. O Galaxy Buds3 FE traz o novo design Blade e recursos de IA para tradução em tempo real.",
  "Apple": "O padrão ouro em fones premium. Os AirPods Pro são benchmark absoluto em ANC, qualidade de chamadas e integração com o ecossistema Apple. Chip H2 e áudio espacial personalizado.",
};

export function Marcas() {
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

      {/* Header */}
      <div className="bg-white border-bottom">
        <div className="container-xl px-4 py-5">
          <div className="d-flex align-items-center gap-3 mb-2">
            <Package size={32} className="text-primary" />
            <h1 className="display-6 fw-bold text-dark mb-0">Marcas</h1>
          </div>
          <p className="text-secondary mb-0">Conheça as fabricantes e seus produtos disponíveis no Herefone.</p>
        </div>
      </div>

      <div className="container-xl px-4 py-5">
        <div className="row g-4">
          {marcas.map((marca) => {
            const cor = brandColors[marca.nome] || "#6c757d";
            return (
              <div key={marca.nome} className="col-12">
                <div className="card border-0 shadow-sm hf-marca-card" style={{ borderRadius: "1.25rem", overflow: "hidden" }}>
                  {/* Brand header */}
                  <div className="card-header border-0 py-4 px-4" style={{ background: `linear-gradient(135deg, ${cor}15, ${cor}08)`, borderLeft: `4px solid ${cor}` }}>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="d-flex align-items-center gap-4">
                        <div
                          className="d-flex align-items-center justify-content-center bg-white rounded-3 shadow-sm p-3"
                          style={{ width: "70px", height: "70px", flexShrink: 0 }}
                        >
                          {brandLogos[marca.nome] ? (
                            <img
                              src={brandLogos[marca.nome]}
                              alt={marca.nome}
                              style={{ maxWidth: "50px", maxHeight: "35px", objectFit: "contain" }}
                              onError={(e) => { e.target.style.display = "none"; }}
                            />
                          ) : (
                            <span className="fw-bold text-dark">{marca.nome[0]}</span>
                          )}
                        </div>
                        <div>
                          <h2 className="h4 fw-bold text-dark mb-1">{marca.nome}</h2>
                          <div className="d-flex align-items-center gap-3">
                            <span className="small text-muted">{marca.fones.length} produto{marca.fones.length > 1 ? "s" : ""}</span>
                            <span className="d-flex align-items-center gap-1 small">
                              <Star size={13} fill="#facc15" color="#facc15" />
                              <span className="fw-semibold">{marca.melhorAvaliacao.toFixed(1)}</span>
                              <span className="text-muted">melhor nota</span>
                            </span>
                            <span className="small text-muted">
                              A partir de <span className="fw-semibold text-dark">R$ {marca.menorPreco.toFixed(2)}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {brandDescriptions[marca.nome] && (
                      <p className="text-secondary small mt-3 mb-0" style={{ maxWidth: "700px" }}>
                        {brandDescriptions[marca.nome]}
                      </p>
                    )}
                  </div>

                  {/* Products */}
                  <div className="card-body p-4">
                    <div className="row g-3">
                      {marca.fones.map((fone) => (
                        <div key={fone.id} className="col-sm-6 col-md-4 col-lg-3">
                          <Link
                            to={`/earbud/${fone.id}`}
                            className="card border text-decoration-none hf-mini-card h-100"
                            style={{ borderRadius: "0.875rem" }}
                          >
                            <div className="overflow-hidden" style={{ aspectRatio: "4/3", borderRadius: "0.875rem 0.875rem 0 0" }}>
                              <img
                                src={fone.imagem}
                                alt={fone.nome}
                                className="w-100 h-100 hf-mini-img"
                                style={{ objectFit: "cover" }}
                                onError={(e) => { e.target.src = IMG_FALLBACK; }}
                              />
                            </div>
                            <div className="card-body p-3">
                              <h3 className="h6 fw-semibold text-dark mb-1 hf-card-title" style={{ fontSize: "0.875rem" }}>
                                {fone.nome}
                              </h3>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="fw-bold text-dark small">R$ {fone.preco.toFixed(2)}</span>
                                <div className="d-flex align-items-center gap-1">
                                  <Star size={11} fill="#facc15" color="#facc15" />
                                  <span className="small text-muted">{fone.avaliacao.toFixed(1)}</span>
                                </div>
                              </div>
                              {fone.cancelamentoRuido && (
                                <span className="badge bg-success-subtle text-success border border-success-subtle mt-2" style={{ fontSize: "0.7rem" }}>ANC</span>
                              )}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
