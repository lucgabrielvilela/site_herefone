import { useState } from "react";
import { Link, NavLink } from "react-router";
import { BookOpen, ChevronRight, Zap, Globe, Music, ShoppingCart, Bluetooth, Volume2 } from "lucide-react";

const guias = [
  {
    id: "anc",
    icon: Volume2,
    cor: "#7c3aed",
    corBg: "#7c3aed15",
    titulo: "O que é ANC e vale a pena?",
    resumo: "Cancelamento Ativo de Ruído usa microfones para captar ruídos externos e gerar ondas inversas que os cancelam.",
    conteudo: [
      {
        subtitulo: "Como funciona",
        texto: "O ANC usa microfones externos para captar o ruído ambiente em tempo real. O processador interno gera uma onda sonora com fase invertida que cancela o ruído antes de chegar ao seu ouvido. O resultado é uma redução significativa de sons contínuos como motores, ar-condicionado e barulho de rua."
      },
      {
        subtitulo: "Tipos de ANC",
        texto: "• ANC Passivo: Apenas o isolamento físico do fone in-ear bloqueando ruídos.\n• ANC Ativo (Feedforward): Microfones externos captam e cancelam antes de entrar no fone.\n• ANC Híbrido: Microfones externos + internos para cancelamento mais preciso. O mais eficaz."
      },
      {
        subtitulo: "Vale a pena?",
        texto: "Depende do seu uso! Se você usa transporte público, trabalha em escritórios barulhentos ou estuda em locais movimentados, o ANC faz uma diferença enorme. Para uso casual em casa ou exercícios, talvez não seja essencial. Considere que o ANC consome mais bateria."
      },
      {
        subtitulo: "Nossos fones com ANC",
        texto: "No Herefone destacamos: QCY T13 ANC (melhor custo-benefício), QCY MeloBuds Pro (46dB, impressionante), Kuba Mali 2 (feito no Brasil com ANC), Anker Soundcore Liberty 4NC (98% de redução) e Apple AirPods Pro 2 (benchmark do mercado)."
      }
    ]
  },
  {
    id: "importado-vs-brasil",
    icon: Globe,
    cor: "#059669",
    corBg: "#05966915",
    titulo: "Importado vs. Disponível no Brasil",
    resumo: "A diferença entre comprar um fone importado e um disponível oficialmente no Brasil vai além do preço.",
    conteudo: [
      {
        subtitulo: "Fones Importados",
        texto: "Geralmente chegam pelo AliExpress, Amazon internacional ou importadores. Os preços são muito mais baixos, mas podem ter incidência de imposto na alfândega (acima de US$50). Não têm garantia oficial no Brasil e o suporte é pelo fabricante no exterior."
      },
      {
        subtitulo: "Disponíveis no Brasil",
        texto: "Vendidos por distribuidores oficiais, têm nota fiscal, garantia legal de 1 ano, suporte em português e não correm risco de taxação. Costumam custar 30–80% mais do que a versão importada, mas a segurança da compra é muito maior."
      },
      {
        subtitulo: "Quando importar?",
        texto: "Vale importar quando a diferença de preço for expressiva (acima de 40%), o produto não estiver disponível no Brasil, ou você tiver experiência com importação. Atenção ao limite de isenção de US$50 da Receita Federal."
      },
      {
        subtitulo: "Recomendação",
        texto: "Para iniciantes: Fique com produtos disponíveis no Brasil. Para quem já importou antes: fones de até R$150 importados costumam chegar sem taxa. Acima disso, o risco de taxação aumenta."
      }
    ]
  },
  {
    id: "perfil-sonoro",
    icon: Music,
    cor: "#d97706",
    corBg: "#d9770615",
    titulo: "Natural vs. Energético: Perfis Sonoros",
    resumo: "O perfil sonoro define como o fone apresenta as frequências. Entender isso ajuda a escolher o fone certo para o seu gosto.",
    conteudo: [
      {
        subtitulo: "Som Natural (Neutro)",
        texto: "Fiel à gravação original. Graves, médios e agudos em equilíbrio. Preferido por audiófilos e quem curte todos os gêneros musicais. Exemplos: Moondrop Space Travel 2, Kuba Mali 2, Apple AirPods Pro 2. Ideal para: Rock, Clássico, Jazz, Vocal."
      },
      {
        subtitulo: "Som Energético (V-Shape)",
        texto: "Graves e agudos exagerados, médios recuados. Mais impactante e divertido para ouvir casual. Preferido por quem curte Electronic, Hip-Hop e músicas com muita bateria. Exemplos: QCY T13 ANC, Anker Soundcore P20i, Liberty 4NC."
      },
      {
        subtitulo: "Qual escolher?",
        texto: "Se você curte música variada e quer fidelidade: Neutro/Natural.\nSe você curte bass pesado e músicas eletrônicas: Energético.\nSe quiser flexibilidade: Fones com app de EQ permitem ajustar o perfil ao seu gosto."
      },
      {
        subtitulo: "Apps de EQ",
        texto: "QCY App (para T13 e MeloBuds), Soundcore App (para P20i e Liberty 4NC) permitem personalizar completamente o perfil sonoro com equalizador gráfico. No Android, o app Wavelet é uma ótima alternativa universal."
      }
    ]
  },
  {
    id: "bluetooth",
    icon: Bluetooth,
    cor: "#2563eb",
    corBg: "#2563eb15",
    titulo: "Bluetooth 5.0 ao 6.0: qual a diferença?",
    resumo: "As versões do Bluetooth impactam diretamente na estabilidade, latência e alcance da conexão dos seus fones.",
    conteudo: [
      {
        subtitulo: "Bluetooth 5.0 e 5.1",
        texto: "Versões mais antigas mas ainda estáveis. Alcance de até 40m, velocidade de 2 Mbps. Latência em torno de 100-200ms. Presente em fones mais baratos e antigos. Funciona muito bem para o dia a dia."
      },
      {
        subtitulo: "Bluetooth 5.2 e 5.3",
        texto: "Melhorias em eficiência energética e estabilidade de conexão. Suporte a LE Audio (Low Energy Audio) para qualidade superior com menor consumo. A maioria dos fones atuais usa 5.3. Boa escolha."
      },
      {
        subtitulo: "Bluetooth 5.4",
        texto: "Versão mais recente amplamente adotada. Suporte a Auracast (compartilhar áudio com múltiplos fones). Usado no QCY MeloBuds Pro, Realme Buds Air 7 e Samsung Galaxy Buds3 FE."
      },
      {
        subtitulo: "Bluetooth 6.0",
        texto: "O mais novo, anunciado em 2024. Traz recursos de 'Channel Sounding' para localização precisa de dispositivos e melhorias em latência. O Kuba Mali 2 é um dos primeiros fones a adotá-lo."
      }
    ]
  },
  {
    id: "como-comprar",
    icon: ShoppingCart,
    cor: "#dc2626",
    corBg: "#dc262615",
    titulo: "Guia de Compra: Como Escolher seu Fone",
    resumo: "Um roteiro prático para você não errar na hora de comprar seu próximo fone TWS.",
    conteudo: [
      {
        subtitulo: "1. Defina seu orçamento",
        texto: "Até R$200: Ótimas opções importadas (Lenovo GM2 Pro, QCY T13 ANC).\nR$200–R$450: O ponto doce do custo-benefício (QCY MeloBuds Pro, Kuba Mali 2, Liberty 4NC).\nR$450–R$900: Premium acessível (Realme Buds Air 7, Samsung Galaxy Buds3 FE).\nAcima de R$900: Linha de luxo (Apple AirPods Pro 2)."
      },
      {
        subtitulo: "2. ANC é essencial para você?",
        texto: "Usa transporte público ou trabalha em locais barulhentos? → Priorize ANC.\nUsa principalmente em casa ou academia? → ANC passivo pode ser suficiente, economize no preço."
      },
      {
        subtitulo: "3. Onde comprar?",
        texto: "Brasil oficial: Amazon.com.br, Shopee, Mercado Livre (vendedor oficial).\nImportado: AliExpress, Shopee Internacional (verifique reputação do vendedor).\nKuba Mali 2: Diretamente em kuba.audio para garantia e suporte nacional."
      },
      {
        subtitulo: "4. Checklist final",
        texto: "• Verificar especificações reais (drivers, BT, bateria)\n• Conferir certificação IP de resistência à água\n• Checar se o modelo possui aplicativo oficial de equalização\n• Verificar se o codec (LDAC, AAC) é compatível com seu celular\n• Analisar avaliações e medições de resposta de frequência"
      }
    ]
  },
  {
    id: "latencia",
    icon: Zap,
    cor: "#0891b2",
    corBg: "#0891b215",
    titulo: "Latência em Fones TWS: o que saber",
    resumo: "O atraso no áudio pode arruinar sua experiência ao assistir vídeos ou jogar. Saiba como evitar esse problema.",
    conteudo: [
      {
        subtitulo: "O que é latência?",
        texto: "É o atraso entre o sinal de áudio enviado pelo dispositivo e o som que você ouve. Em fones Bluetooth, isso pode variar de 40ms a 300ms. Latências acima de 100ms são perceptíveis em vídeos (lábios fora de sincronia)."
      },
      {
        subtitulo: "Modo Gaming/Jogo",
        texto: "Muitos fones (como o Lenovo GM2 Pro e QCY T13 ANC) têm um 'Modo Gamer' que reduz a latência para 60-80ms. Ative-o ao jogar ou assistir vídeos para melhor sincronia."
      },
      {
        subtitulo: "Codecs e latência",
        texto: "aptX Low Latency: ~40ms (melhor para jogos, raro em TWS).\nLC3 (LE Audio): ~20-30ms (futuro do BT audio).\nAAC (Apple): Variável, bom no iOS.\nSBC: Maior latência, até 200ms."
      },
      {
        subtitulo: "Dica prática",
        texto: "Para jogos mobile: use fones com Modo Gaming e Bluetooth 5.3+.\nPara filmes no computador: use o VLC ou ajuste o delay de áudio no software.\nPara filmes no celular: a maioria dos apps modernos compensa automaticamente o delay."
      }
    ]
  }
];

function GuiaCard({ guia, onSelect }) {
  const Icon = guia.icon;
  return (
    <div
      className="card border-0 shadow-sm hf-guia-card h-100"
      style={{ borderRadius: "1rem", cursor: "pointer", borderLeft: `4px solid ${guia.cor}` }}
      onClick={() => onSelect(guia.id)}
    >
      <div className="card-body p-4">
        <div
          className="rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
          style={{ width: "48px", height: "48px", background: guia.corBg }}
        >
          <Icon size={22} style={{ color: guia.cor }} />
        </div>
        <h3 className="h6 fw-bold text-dark mb-2">{guia.titulo}</h3>
        <p className="text-secondary small mb-3">{guia.resumo}</p>
        <span className="small fw-semibold d-flex align-items-center gap-1" style={{ color: guia.cor }}>
          Ler guia <ChevronRight size={14} />
        </span>
      </div>
    </div>
  );
}

function GuiaDetail({ guia, onBack }) {
  const Icon = guia.icon;
  return (
    <div>
      <button
        onClick={onBack}
        className="btn btn-link text-secondary text-decoration-none ps-0 mb-4 d-flex align-items-center gap-2 fw-medium"
      >
        ← Voltar para todos os guias
      </button>
      <div className="card border-0 shadow-sm" style={{ borderRadius: "1.25rem", overflow: "hidden" }}>
        <div
          className="card-header border-0 py-4 px-4"
          style={{ background: `linear-gradient(135deg, ${guia.corBg}, #ffffff)` }}
        >
          <div className="d-flex align-items-center gap-3 mb-2">
            <div
              className="rounded-3 d-inline-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: "52px", height: "52px", background: guia.corBg }}
            >
              <Icon size={26} style={{ color: guia.cor }} />
            </div>
            <h1 className="h4 fw-bold text-dark mb-0">{guia.titulo}</h1>
          </div>
          <p className="text-secondary mb-0 ms-5 ps-3">{guia.resumo}</p>
        </div>
        <div className="card-body p-4 p-md-5">
          {guia.conteudo.map((section, i) => (
            <div key={i} className={`pb-4 ${i < guia.conteudo.length - 1 ? "border-bottom mb-4" : ""}`}>
              <h2 className="h6 fw-bold mb-3" style={{ color: guia.cor }}>
                {section.subtitulo}
              </h2>
              <p className="text-secondary mb-0" style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}>
                {section.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GuiasPage() {
  const [selectedId, setSelectedId] = useState(null);
  const guiaAtual = guias.find(g => g.id === selectedId);

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
            <BookOpen size={32} className="text-primary" />
            <h1 className="display-6 fw-bold text-dark mb-0">Guias</h1>
          </div>
          <p className="text-secondary mb-0">Tudo que você precisa saber para comprar o fone certo.</p>
        </div>
      </div>

      <div className="container-xl px-4 py-5">
        {guiaAtual ? (
          <GuiaDetail guia={guiaAtual} onBack={() => setSelectedId(null)} />
        ) : (
          <>
            <p className="text-secondary mb-4 lead">Escolha um tema para aprender mais:</p>
            <div className="row g-4">
              {guias.map((guia) => (
                <div key={guia.id} className="col-md-6 col-lg-4">
                  <GuiaCard guia={guia} onSelect={setSelectedId} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
