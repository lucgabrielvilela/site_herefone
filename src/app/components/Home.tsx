import { EarbudRow } from "./EarbudRow";
import { topCustoBeneficio, topMelhores, paraEsportes, novidades } from "../data/earbuds";
import { Search, Sparkles } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-12 py-6">
          <div className="flex items-center gap-12">
            <h1 className="text-4xl font-bold text-gray-900">
              Here<span className="text-blue-600">fone</span>
            </h1>
            <nav className="flex gap-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Rankings</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Marcas</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Guias</a>
            </nav>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 transition-all hover:shadow-sm">
            <Search className="w-4 h-4 text-gray-600" />
            <span className="text-gray-600 text-sm">Buscar</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-[1600px] mx-auto px-12 py-20">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Rankings atualizados em Março 2026</span>
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Os Melhores Fones<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TWS do Mercado
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Rankings completos, análises detalhadas e as melhores ofertas de fones True Wireless Stereo.
          </p>
        </div>
      </section>

      {/* Rankings Sections */}
      <div className="max-w-[1600px] mx-auto pb-20">
        <EarbudRow title="Top 10 Custo-Benefício" earbuds={topCustoBeneficio} showPosition={true} />
        <EarbudRow title="Top 10 Melhores" earbuds={topMelhores} showPosition={true} />
        <EarbudRow title="Para Esportes" earbuds={paraEsportes} showPosition={true} />
        <EarbudRow title="Novidades" earbuds={novidades} showPosition={false} />
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-12 py-12">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Here<span className="text-blue-600">fone</span></h3>
              <p className="text-gray-600 text-sm">Rankings e reviews confiáveis de fones TWS</p>
            </div>
            <p className="text-gray-500 text-sm">© 2026 Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}