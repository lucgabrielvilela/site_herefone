import { useParams, Link } from "react-router";
import { earbuds } from "../data/earbuds";
import { Star, Battery, Droplets, Bluetooth, Volume2, VolumeX, Speaker, ArrowLeft, Check, ExternalLink, ShoppingCart } from "lucide-react";

export function EarbudDetails() {
  const { id } = useParams<{ id: string }>();
  const earbud = earbuds.find(e => e.id === Number(id));

  if (!earbud) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-gray-900 text-2xl mb-4">Fone não encontrado</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Voltar para o início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-12 py-6">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Here<span className="text-blue-600">fone</span></h1>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Image */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
                <img 
                  src={earbud.imagem}
                  alt={earbud.nome}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {earbud.marca}
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">{earbud.nome}</h1>
            
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <span className="text-3xl font-bold text-gray-900">{earbud.avaliacao.toFixed(1)}</span>
                <span className="text-gray-500">/5.0</span>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-4xl font-bold text-gray-900">
                R$ {earbud.preco.toFixed(2)}
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {earbud.descricao}
            </p>

            {/* Links de Compra */}
            <div className="space-y-3 mb-8">
              <a 
                href={earbud.linkCompra}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Ver na Amazon
                <ExternalLink className="w-4 h-4" />
              </a>
              
              <a 
                href={`https://www.mercadolivre.com.br/${earbud.nome.replace(/\s+/g, '-').toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Ver no Mercado Livre
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  {earbud.cancelamentoRuido ? (
                    <>
                      <Volume2 className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-900">ANC Ativo</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-900">Sem ANC</span>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <Battery className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">{earbud.autonomia}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <Droplets className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-medium text-gray-900">{earbud.resistenciaAgua}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <Bluetooth className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-900">{earbud.conectividade}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Specs */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Especificações Técnicas</h2>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Marca</span>
                <span className="font-semibold text-gray-900">{earbud.marca}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Drivers</span>
                <span className="font-semibold text-gray-900">{earbud.drivers}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Conectividade</span>
                <span className="font-semibold text-gray-900">{earbud.conectividade}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Resistência</span>
                <span className="font-semibold text-gray-900">{earbud.resistenciaAgua}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-600">Autonomia</span>
                <span className="font-semibold text-gray-900">{earbud.autonomia}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Destaques do Produto</h2>
            <ul className="space-y-4">
              {earbud.cancelamentoRuido && (
                <li className="flex items-start gap-3">
                  <div className="bg-white rounded-full p-1 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Cancelamento Ativo de Ruído (ANC)</span>
                </li>
              )}
              <li className="flex items-start gap-3">
                <div className="bg-white rounded-full p-1 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Bateria de longa duração: {earbud.autonomia}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white rounded-full p-1 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Resistência {earbud.resistenciaAgua} contra água e suor</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white rounded-full p-1 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Drivers de {earbud.drivers} para som premium</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white rounded-full p-1 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Tecnologia {earbud.conectividade}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50 mt-20">
        <div className="max-w-[1400px] mx-auto px-12 py-12">
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