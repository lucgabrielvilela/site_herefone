import { Link } from "react-router";
import { Star } from "lucide-react";

const IMG_FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280' fill='%23f1f5f9'%3E%3Crect width='280' height='280' rx='16'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%2394a3b8'%3EFone%3C/text%3E%3C/svg%3E";

export function EarbudCard({ earbud, position }) {
  return (
    <Link
      to={`/earbud/${earbud.id}`}
      className="text-decoration-none hf-card-link"
      style={{ flexShrink: 0, width: "280px" }}
    >
      <div className="card border-0 hf-card h-100">
        {/* Image */}
        <div className="position-relative overflow-hidden" style={{ aspectRatio: "1/1", borderRadius: "1rem" }}>
          <img
            src={earbud.imagem}
            alt={earbud.nome}
            className="w-100 h-100 hf-card-img"
            style={{ objectFit: "cover" }}
            onError={(e) => { e.target.src = IMG_FALLBACK; }}
          />
          {/* Position badge */}
          {position && (
            <div className="position-absolute top-0 start-0 m-2">
              <span className={`badge ${position <= 3 ? "bg-primary text-white" : "bg-dark text-white"} px-2.5 py-1.5 fw-bold shadow-sm`}>
                #{position}
              </span>
            </div>
          )}
          {/* Rating badge */}
          <div className="position-absolute top-0 end-0 m-2">
            <span className="badge bg-white text-dark d-flex align-items-center gap-1 px-2 py-1 shadow-sm">
              <Star size={12} fill="#facc15" color="#facc15" />
              <span className="small fw-semibold">{earbud.avaliacao.toFixed(1)}</span>
            </span>
          </div>
          {/* ANC badge */}
          {earbud.cancelamentoRuido && (
            <div className="position-absolute bottom-0 start-0 m-2">
              <span className="badge bg-primary text-white small fw-semibold">ANC</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="pt-3 px-1">
          <h3 className="h6 fw-semibold text-dark mb-1 text-truncate hf-card-title">
            {earbud.nome}
          </h3>
          <p className="text-secondary small mb-1">{earbud.marca}</p>
          <p className="fw-bold text-dark mb-0">
            R$ {earbud.preco.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
}
