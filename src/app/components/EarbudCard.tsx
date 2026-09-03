import { Earbud } from "../data/earbuds";
import { Star, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router";

interface EarbudCardProps {
  earbud: Earbud;
  position?: number;
}

export function EarbudCard({ earbud, position }: EarbudCardProps) {
  return (
    <Link 
      to={`/earbud/${earbud.id}`}
      className="group flex-shrink-0 w-[280px] cursor-pointer transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-gray-50 border border-gray-100">
        <img 
          src={earbud.imagem} 
          alt={earbud.nome}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {position && (
          <div className="absolute top-3 left-3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-lg font-bold px-4 py-2 rounded-xl shadow-lg">
              #{position}
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">{earbud.avaliacao.toFixed(1)}</span>
          </div>
        </div>
        {earbud.cancelamentoRuido && (
          <div className="absolute bottom-3 left-3">
            <div className="bg-black text-white text-xs font-medium px-2.5 py-1 rounded-full">
              ANC
            </div>
          </div>
        )}
      </div>
      <div className="px-1">
        <h3 className="text-gray-900 font-semibold mb-1 truncate group-hover:text-blue-600 transition-colors">
          {earbud.nome}
        </h3>
        <p className="text-gray-500 text-sm mb-2">{earbud.marca}</p>
        <p className="text-gray-900 font-bold text-lg">
          R$ {earbud.preco.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}