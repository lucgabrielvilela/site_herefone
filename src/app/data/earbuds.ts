export interface Earbud {
  id: number;
  nome: string;
  preco: number;
  avaliacao: number;
  cancelamentoRuido: boolean;
  autonomia: string;
  marca: string;
  imagem: string;
  descricao: string;
  resistenciaAgua: string;
  conectividade: string;
  drivers: string;
  linkCompra: string;
}

export const earbuds: Earbud[] = [
  // Top Custo-Benefício
  {
    id: 1,
    nome: "QCY T13 ANC",
    preco: 189.90,
    avaliacao: 4.5,
    cancelamentoRuido: true,
    autonomia: "30 horas",
    marca: "QCY",
    imagem: "https://images.unsplash.com/photo-1570993492903-ba4c3088f100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxY3klMjBlYXJidWRzJTIwYWZmb3JkYWJsZXxlbnwxfHx8fDE3NzQ0NjczMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "Excelente custo-benefício com cancelamento ativo de ruído e longa duração de bateria.",
    resistenciaAgua: "IPX5",
    conectividade: "Bluetooth 5.3",
    drivers: "10mm",
    linkCompra: "https://www.amazon.com/QCY-T13-ANC-Bluetooth-Earbuds/dp/B08N555555"
  },
  {
    id: 2,
    nome: "Redmi Buds 4",
    preco: 249.90,
    avaliacao: 4.6,
    cancelamentoRuido: true,
    autonomia: "36 horas",
    marca: "Xiaomi",
    imagem: "https://images.unsplash.com/photo-1624947216381-b994eb54e9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4aWFvbWklMjByZWRtaSUyMGVhcmJ1ZHM8ZW58MXx8fHwxNzc0NDY3MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "Ótimo som, ANC eficiente e design confortável. Perfeito para o dia a dia.",
    resistenciaAgua: "IP54",
    conectividade: "Bluetooth 5.2",
    drivers: "10mm",
    linkCompra: "https://www.amazon.com/Redmi-Buds-4-Bluetooth-Earbuds/dp/B08N555555"
  },
  {
    id: 3,
    nome: "Edifier TWS1 Pro",
    preco: 299.90,
    avaliacao: 4.4,
    cancelamentoRuido: false,
    autonomia: "32 horas",
    marca: "Edifier",
    imagem: "https://images.unsplash.com/photo-1662198876798-7d1e4f1a42bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGlmaWVyJTIwd2lyZWxlc3MlMjBlYXJidWRzfGVufDF8fHx8MTc3NDQ2NzMzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "Qualidade sonora premium com graves potentes. Ideal para música.",
    resistenciaAgua: "IPX5",
    conectividade: "Bluetooth 5.0",
    drivers: "13mm",
    linkCompra: "https://www.amazon.com/Edifier-TWS1-Pro-Bluetooth-Earbuds/dp/B08N555555"
  },
  {
    id: 4,
    nome: "Realme Buds Air 3",
    preco: 229.90,
    avaliacao: 4.3,
    cancelamentoRuido: true,
    autonomia: "30 horas",
    marca: "Realme",
    imagem: "https://images.unsplash.com/photo-1756576501784-3c3474212d44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsbWUlMjBlYXJidWRzJTIwYmxhY2t8ZW58MXx8fHwxNzc0NDY3MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "Design elegante e cancelamento de ruído eficaz por um preço acessível.",
    resistenciaAgua: "IPX5",
    conectividade: "Bluetooth 5.2",
    drivers: "10mm",
    linkCompra: "https://www.amazon.com/Realme-Buds-Air-3-Bluetooth-Earbuds/dp/B08N555555"
  },
  {
    id: 5,
    nome: "Anker Soundcore Life P3",
    preco: 349.90,
    avaliacao: 4.7,
    cancelamentoRuido: true,
    autonomia: "35 horas",
    marca: "Anker",
    imagem: "https://images.unsplash.com/photo-1751134519328-f7e699265a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmtlciUyMGVhcmJ1ZHMlMjBjaGFyZ2luZ3xlbnwxfHx8fDE3NzQ0NjczMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "Múltiplos modos de áudio e ANC híbrido. Excelente para todas as situações.",
    resistenciaAgua: "IPX5",
    conectividade: "Bluetooth 5.0",
    drivers: "11mm",
    linkCompra: "https://www.amazon.com/Anker-Soundcore-Life-P3-Bluetooth-Earbuds/dp/B08N555555"
  },

  // Top Melhores (Premium)
  {
    id: 6,
    nome: "Apple AirPods Pro 2",
    preco: 2499.00,
    avaliacao: 4.9,
    cancelamentoRuido: true,
    autonomia: "30 horas",
    marca: "Apple",
    imagem: "https://images.unsplash.com/photo-1574920164507-e651b363da83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb2RzJTIwcHJvJTIwd2lyZWxlc3MlMjBlYXJidWRzfGVufDF8fHx8MTc3NDQ2NzMzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "O melhor ANC do mercado com áudio espacial e integração perfeita com iOS.",
    resistenciaAgua: "IPX4",
    conectividade: "Bluetooth 5.3",
    drivers: "Custom",
    linkCompra: "https://www.amazon.com/Apple-AirPods-Pro-2-Bluetooth-Earbuds/dp/B08N555555"
  },
  {
    id: 7,
    nome: "Sony WF-1000XM5",
    preco: 2199.00,
    avaliacao: 4.9,
    cancelamentoRuido: true,
    autonomia: "24 horas",
    marca: "Sony",
    imagem: "https://images.unsplash.com/photo-1771707164892-57c8c6d015e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb255JTIwd2lyZWxlc3MlMjBlYXJidWRzJTIwd2hpdGV8ZW58MXx8fHwxNzc0NDY3MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "Qualidade sonora excepcional com LDAC e o melhor cancelamento de ruído da Sony.",
    resistenciaAgua: "IPX4",
    conectividade: "Bluetooth 5.3",
    drivers: "8.4mm Dynamic",
    linkCompra: "https://www.amazon.com/Sony-WF-1000XM5-Bluetooth-Earbuds/dp/B08N555555"
  },
  {
    id: 8,
    nome: "Samsung Galaxy Buds2 Pro",
    preco: 1399.00,
    avaliacao: 4.7,
    cancelamentoRuido: true,
    autonomia: "29 horas",
    marca: "Samsung",
    imagem: "https://images.unsplash.com/photo-1722150635400-781fa4b5f40e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1zdW5nJTIwZ2FsYXh5JTIwYnVkcyUyMGJsYWNrfGVufDF8fHx8MTc3NDQ2NzMzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "Design premium com som Hi-Fi de 24 bits e integração perfeita com Galaxy.",
    resistenciaAgua: "IPX7",
    conectividade: "Bluetooth 5.3",
    drivers: "10mm Coaxial",
    linkCompra: "https://www.amazon.com/Samsung-Galaxy-Buds2-Pro-Bluetooth-Earbuds/dp/B08N555555"
  },
  {
    id: 9,
    nome: "Bose QuietComfort Earbuds II",
    preco: 1999.00,
    avaliacao: 4.8,
    cancelamentoRuido: true,
    autonomia: "24 horas",
    marca: "Bose",
    imagem: "https://images.unsplash.com/photo-1773874958365-919ab8b526a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3NlJTIwZWFyYnVkcyUyMGNhc2V8ZW58MXx8fHwxNzc0NDY3MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "ANC personalizado e conforto superior. O melhor da Bose em formato compacto.",
    resistenciaAgua: "IPX4",
    conectividade: "Bluetooth 5.3",
    drivers: "9.3mm",
    linkCompra: "https://www.amazon.com/Bose-QuietComfort-Earbuds-II-Bluetooth-Earbuds/dp/B08N555555"
  },
  {
    id: 10,
    nome: "Sennheiser Momentum True Wireless 3",
    preco: 2299.00,
    avaliacao: 4.8,
    cancelamentoRuido: true,
    autonomia: "28 horas",
    marca: "Sennheiser",
    imagem: "https://images.unsplash.com/photo-1676315636995-a5d5df17b192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5uaGVpc2VyJTIwZWFyYnVkcyUyMHByZW1pdW18ZW58MXx8fHwxNzc0NDY3MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "Audiofilia no bolso com suporte a aptX Adaptive e design premium.",
    resistenciaAgua: "IPX4",
    conectividade: "Bluetooth 5.2",
    drivers: "7mm TrueResponse",
    linkCompra: "https://www.amazon.com/Sennheiser-Momentum-True-Wireless-3-Bluetooth-Earbuds/dp/B08N555555"
  },

  // Para Esportes
  {
    id: 11,
    nome: "JBL Reflect Flow Pro",
    preco: 799.00,
    avaliacao: 4.5,
    cancelamentoRuido: true,
    autonomia: "30 horas",
    marca: "JBL",
    imagem: "https://images.unsplash.com/photo-1622473776277-c57c423daf63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYmwlMjB3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBibHVlfGVufDF8fHx8MTc3NDQ2NzMzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "Resistente ao suor com encaixe seguro. Perfeito para treinos intensos.",
    resistenciaAgua: "IP68",
    conectividade: "Bluetooth 5.0",
    drivers: "6.8mm",
    linkCompra: "https://www.amazon.com/JBL-Reflect-Flow-Pro-Bluetooth-Earbuds/dp/B08N555555"
  },
  {
    id: 12,
    nome: "Beats Fit Pro",
    preco: 1299.00,
    avaliacao: 4.6,
    cancelamentoRuido: true,
    autonomia: "27 horas",
    marca: "Beats",
    imagem: "https://images.unsplash.com/photo-1583360173899-b3124bc238d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF0cyUyMHdpcmVsZXNzJTIwZWFyYnVkcyUyMHJlZHxlbnwxfHx8fDE3NzQ0NjczMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "Design esportivo com chip H1 da Apple e ajuste perfeito para exercícios.",
    resistenciaAgua: "IPX4",
    conectividade: "Bluetooth 5.2",
    drivers: "Custom",
    linkCompra: "https://www.amazon.com/Beats-Fit-Pro-Bluetooth-Earbuds/dp/B08N555555"
  },
  {
    id: 13,
    nome: "Jabra Elite 7 Active",
    preco: 899.00,
    avaliacao: 4.6,
    cancelamentoRuido: true,
    autonomia: "30 horas",
    marca: "Jabra",
    imagem: "https://images.unsplash.com/photo-1726741692510-0eb5d1187780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWJyYSUyMGVsaXRlJTIwZWFyYnVkc3xlbnwxfHx8fDE3NzQ0NjczMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "ShakeGrip Technology e MultiSensor Voice. Ideal para atletas.",
    resistenciaAgua: "IP57",
    conectividade: "Bluetooth 5.2",
    drivers: "6mm",
    linkCompra: "https://www.amazon.com/Jabra-Elite-7-Active-Bluetooth-Earbuds/dp/B08N555555"
  },

  // Novidades
  {
    id: 14,
    nome: "Nothing Ear (2)",
    preco: 899.00,
    avaliacao: 4.5,
    cancelamentoRuido: true,
    autonomia: "36 horas",
    marca: "Nothing",
    imagem: "https://images.unsplash.com/photo-1763822145976-3da20748f3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RoaW5nJTIwZWFyJTIwd2lyZWxlc3N8ZW58MXx8fHwxNzc0NDY3MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    descricao: "Design transparente icônico com som equilibrado e ANC aprimorado.",
    resistenciaAgua: "IP54",
    conectividade: "Bluetooth 5.3",
    drivers: "11.6mm",
    linkCompra: "https://www.amazon.com/Nothing-Ear-2-Bluetooth-Earbuds/dp/B08N555555"
  }
];

export const topCustoBeneficio = earbuds.slice(0, 5);
export const topMelhores = earbuds.slice(5, 10);
export const paraEsportes = earbuds.filter(e => [11, 12, 13].includes(e.id));
export const novidades = earbuds.filter(e => [14, 1, 2].includes(e.id));