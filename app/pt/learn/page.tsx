import BackToTop from "@/components/BackToTop";

const C = { maxWidth: "1200px", margin: "0 auto", padding: "0 32px" } as const;

const SECTIONS = [
  {
    num: "01",
    title: "O que é Bitcoin?",
    body: `Bitcoin é a primeira forma de dinheiro na história que nenhum governo, banco ou corporação pode controlar. Para muitos, é um ativo, algo para investir. Mas o Bitcoin é muito mais do que isso. Não é apenas dinheiro digital — é dinheiro soberano. Funciona em uma rede descentralizada onde milhares de participantes independentes controlam as regras. Nenhuma pessoa ou instituição pode alterá-las unilateralmente.

Bitcoin foi apresentado em 2009 por Satoshi Nakamoto, uma pessoa ou grupo anônimo cuja identidade permanece desconhecida até hoje. Desde então, provou ser a rede monetária mais segura já criada — e um dos ativos mais valiosos do mundo.

Existirão apenas 21 milhões de Bitcoin. É fixo. Novos Bitcoin são emitidos por meio de um processo chamado mineração, onde computadores especializados protegem a rede e são recompensados com moedas recém-criadas. Essa emissão segue um cronograma previsível e diminui ao longo do tempo, com o último Bitcoin previsto para ser minerado por volta do ano 2140.

Compare isso com as moedas fiduciárias — impressas sem freio pelos bancos centrais, expandindo a oferta monetária sempre que convém à política e diluindo silenciosamente seu valor. O sistema fiduciário é uma erosão constante do poder de compra. Isso torna o Bitcoin o dinheiro mais sólido que a humanidade já conheceu — mais sólido que o ouro, porque não é possível aumentar sua oferta, não importa quão alta seja a demanda. Escasso por design. Sem fronteiras por natureza.

Em torno de 1,7 bilhão de adultos no mundo não têm acesso a serviços bancários. O Bitcoin muda isso. Se você tem acesso à internet, tem acesso ao Bitcoin. Sem solicitação, sem aprovação, sem instituição necessária. Não importa onde você nasceu. Pela primeira vez na história, existe um dinheiro verdadeiramente aberto e sem fronteiras.`,
    aside: (
      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Oferta</div>
        <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000", marginBottom: "24px" }}>
          Apenas 21 milhões de Bitcoin existirão. Cerca de 19,8 milhões já foram minerados.
        </p>
        <div style={{ paddingTop: "24px" }}>
          <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Autocustódia</div>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#000" }}>
            Com o Bitcoin, você pode ser seu próprio banco. Quando você mantém Bitcoin em autocustódia, controlando suas próprias chaves privadas, ninguém pode controlar seus fundos ou bloquear uma transação. Você assume plena soberania sobre seu dinheiro.
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Volatilidade, adoção e a tendência de longo prazo",
    body: `Sim, o Bitcoin é volátil. Isso não é um defeito — é como funciona um ativo em adoção inicial. No curto prazo, o preço se move de forma mais agressiva. No longo prazo, a direção sempre foi pra cima.

Por que a volatilidade? Porque o mundo ainda está descobrindo o que o Bitcoin realmente é. À medida que a adoção aumenta — de indivíduos a instituições e nações — a liquidez se aprofunda e a volatilidade gradualmente se comprime. Isso já está acontecendo, ciclo após ciclo.`,
    aside: (
      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Stack and HODL</div>
        <div style={{ fontSize: "15px", color: "#000", lineHeight: 1.8 }}>&ldquo;HODL&rdquo; começou como um erro de digitação de &ldquo;hold&rdquo; em um fórum Bitcoin de 2013, e ficou. Tornou-se uma filosofia: não venda em pânico. Compre consistentemente, mantenha durante os ciclos. No longo prazo, a direção sempre foi de apenas um jeito.</div>
      </div>
    ),
  },
  {
    num: "03",
    title: "O ciclo de 4 anos e o Halving",
    body: `O Bitcoin tem um choque de oferta embutido chamado Halving. Aproximadamente a cada quatro anos, a quantidade de novos Bitcoin que entram no sistema é cortada pela metade. Isso não é uma decisão política — é imposto pelo próprio protocolo, e os mineradores que protegem a rede recebem menos novas moedas ao longo do tempo. Isso reduz a taxa na qual novos Bitcoin entram em circulação — e historicamente precedeu grandes mercados de alta. Não por hype, mas por escassez programada encontrando demanda crescente.

Esse ritmo de quatro anos é o que a maioria das pessoas quer dizer quando fala em ciclos do Bitcoin. Mas há uma questão em aberto que vale reconhecer: à medida que o Bitcoin amadurece, o ciclo de quatro anos continuará se repetindo da mesma forma? Alguns analistas dizem que a crescente adoção institucional e a liquidez mais profunda podem estar suavizando o padrão. De qualquer forma, uma coisa permanece clara: os fundamentos não mudaram, e a janela para acumular Bitcoin barato só fica menor com o tempo.

O score no Bitcoin Beacon é projetado para dar uma noção de onde estamos atualmente nesse ciclo.`,
    aside: (
      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Linha do Tempo do Halving</div>
        {[
          { year: "2012", label: "1º Halving", muted: false },
          { year: "2016", label: "2º Halving", muted: false },
          { year: "2020", label: "3º Halving", muted: false },
          { year: "2024", label: "4º Halving", muted: false },
          { year: "~2028", label: "5º Halving", muted: true },
        ].map((h) => (
          <div key={h.year} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "9px 0", borderBottom: "0.8px solid #000", opacity: h.muted ? 0.55 : 1 }}>
            <span style={{ fontSize: "14px", fontWeight: 300 }}>{h.year}</span>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", fontFamily: "var(--font-space-grotesk),sans-serif" }}>{h.label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "04",
    title: "O que é DCA?",
    body: `DCA significa Dollar-Cost Averaging. Significa investir um valor fixo em um cronograma regular, independentemente do preço.

Tentar acertar o timing do Bitcoin é um jogo onde a maioria das pessoas perde. Então você compra consistentemente. Exemplo: se você investe R$500 todo mês por 24 meses, em alguns meses você comprará a R$300k por Bitcoin, em outros a R$350k, em outros a R$250k. Seu custo médio refletirá o intervalo, não o pior momento.

Existe também o DCA Dinâmico — em vez de um valor fixo, você investe mais quando os preços estão baixos e menos quando estão altos, ajustando pelo sinal ou nível de preço. Exige mais disciplina, mas pode melhorar seu preço médio de entrada ao longo do tempo.

O DCA é amplamente considerado a melhor estratégia para investir em Bitcoin. É assim que os detentores sérios de longo prazo abordam o assunto. Remove a emoção da equação.`,
    aside: (
      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Exemplo de DCA</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Mês", "Preço", "Sats"].map((h) => (
                <th key={h} style={{ fontSize: "11px", color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "left", padding: "5px 0", fontWeight: 600, borderBottom: "0.8px solid #000", opacity: 0.55, fontFamily: "var(--font-space-grotesk),sans-serif" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Jan", "R$250k", "200.000"],
              ["Fev", "R$300k", "166.667"],
              ["Mar", "R$350k", "142.857"],
              ["Média", "R$296k", "509.524"],
            ].map(([month, price, sats]) => (
              <tr key={month}>
                <td style={{ fontSize: "13px", padding: "7px 0", borderBottom: "0.8px solid #000" }}>{month}</td>
                <td style={{ fontSize: "13px", padding: "7px 0", borderBottom: "0.8px solid #000" }}>{price}</td>
                <td style={{ fontSize: "13px", padding: "7px 0", borderBottom: "0.8px solid #000" }}>{sats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    num: "05",
    title: "O que são métricas de risco?",
    body: `O Bitcoin é o sistema financeiro mais transparente já criado. Ninguém pode prever o preço do Bitcoin com precisão, mas os dados on-chain podem revelar padrões que historicamente apareceram perto dos topos e fundos dos ciclos.

As métricas de risco são ferramentas que leem esses dados e os traduzem em sinais. Esses sinais refletem comportamentos reais: os detentores de longo prazo estão acumulando? A pressão de venda está aumentando? O mercado está superaquecido?

Nenhuma dessas métricas é perfeita. Mas combinadas, formam um quadro mais claro do que qualquer indicador isolado. É isso que o CBBI faz — agrega nove métricas on-chain independentes em um único score entre 0 e 100. O Bitcoin Beacon pega esse score e o apresenta da forma mais simples possível: um número, atualizado diariamente, com contexto em linguagem simples. Pense nessas métricas como uma bússola, não um GPS. Elas não dizem o destino exato, mas ajudam você a não ficar perdido.`,
    aside: (
      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Nota</div>
        <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000" }}>
          Uma métrica de risco não é uma previsão de preço. Reflete padrões históricos, não certeza sobre o futuro.
        </p>
      </div>
    ),
  },
  {
    num: "06",
    title: "A tecnologia e o ecossistema",
    body: `Se você olha apenas para o preço do Bitcoin, está perdendo o ponto mais valioso. Bitcoin é um protocolo. Pense nele da mesma forma que você pensa na internet — uma camada base de valor, um conjunto de regras abertas que qualquer pessoa pode verificar e construir sobre.

A blockchain é um livro-razão público que registra cada transação já realizada. É mantido por milhares de computadores independentes (nós) ao redor do mundo. Nenhum ponto único de falha. Nenhum ponto único de controle.

Sobre o Bitcoin, um ecossistema cresceu: a Lightning Network permite pagamentos instantâneos e de custo quase zero; o Nostr é um protocolo aberto para comunicação descentralizada, resistente à censura, sem permissão, construído sobre os mesmos princípios do Bitcoin. Uma comunidade global de desenvolvedores continua construindo ferramentas que expandem o que o Bitcoin pode fazer.

Não é sobre o preço subir ou descer. É sobre um sistema monetário neutro e incorruptível ter um lugar no mundo. E claro que a resposta é sim. É possível. Está acontecendo. E isso é muito poderoso.`,
    aside: (
      <div>
        {[
          { label: "Lightning Network", desc: "Pagamentos instantâneos e de baixo custo sobre o Bitcoin." },
          { label: "Nostr",             desc: "Comunicação aberta e descentralizada usando Lightning nativamente." },
          { label: "Indo além",         desc: "Liquid, Ark, Fedimint e outros estão expandindo as capacidades do Bitcoin em pagamentos, privacidade e custódia." },
          { label: "Código aberto",     desc: "O código é público, auditável e mantido por uma comunidade global." },
          { label: "Autocustódia",      desc: "Mantenha seu próprio Bitcoin e assuma plena soberania sobre seu dinheiro." },
        ].map((item) => (
          <div key={item.label} style={{ marginBottom: "32px" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>{item.label}</div>
            <div style={{ fontSize: "15px", color: "#000", lineHeight: 1.8 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    ),
  },
];

const TOC_ITEMS = [
  { num: "01", title: "O que é Bitcoin?" },
  { num: "02", title: "Volatilidade e adoção" },
  { num: "03", title: "O ciclo de 4 anos" },
  { num: "04", title: "O que é DCA?" },
  { num: "05", title: "Métricas de risco" },
  { num: "06", title: "Tecnologia" },
];

export default function LearnPagePT() {
  return (
    <>
      <section style={{ borderBottom: "0.8px solid #000", padding: "64px 0 52px" }}>
        <div className="page-hero-grid" style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.05, fontFamily: "var(--font-goudy), serif" }}>
            Entendendo<br />o Bitcoin
          </h1>
          <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            Entrar no mundo do Bitcoin significa navegar por muita informação. Esta página cobre os conceitos fundamentais — as bases que você precisa para entender o que está vendo, por que os ciclos importam e como interpretar os sinais.
          </p>
        </div>
      </section>

      <div style={{ borderBottom: "0.8px solid #000" }}>
        <div className="learn-toc-grid" style={{ ...C, display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
          {TOC_ITEMS.map((item, i) => (
            <a key={item.num} href={`#section-${item.num}`} style={{ padding: "22px 0", paddingRight: "16px", borderRight: i < 5 ? "0.8px solid #000" : undefined, paddingLeft: i > 0 ? "16px" : 0, textDecoration: "none", display: "block" }}>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", marginBottom: "8px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>{item.num}</div>
              <div style={{ fontSize: "15px", fontWeight: 500, color: "#000", lineHeight: 1.4 }}>{item.title}</div>
            </a>
          ))}
        </div>
      </div>

      {SECTIONS.map((section, i) => (
        <div key={section.num} id={`section-${section.num}`} style={{ borderBottom: i < SECTIONS.length - 1 ? "0.8px solid #000" : undefined, position: "relative" }}>
          {section.num === "06" && (
            <div className="learn-illustration" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "calc(50vw - 379px)", overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/tech.svg" alt="" aria-hidden style={{ position: "absolute", left: "calc(50vw - 884px)", top: "270px", width: "505px", maxWidth: "none", height: "auto", zIndex: 0, pointerEvents: "none" }} />
            </div>
          )}
          {section.num === "01" && (
            <div className="learn-illustration" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "calc(50vw - 379px)", overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/what_is_3.svg" alt="" aria-hidden style={{ position: "absolute", left: "calc(50vw - 867px)", top: "50%", transform: "translateY(calc(-50% + 82px))", width: "488px", maxWidth: "none", height: "auto", zIndex: 0, pointerEvents: "none" }} />
            </div>
          )}
          <div className="learn-section-grid" style={{ ...C, display: "grid", gridTemplateColumns: "calc(100% / 6) 1fr 260px", position: "relative", zIndex: 1 }}>
            <div className="learn-col-num" style={{ borderRight: "0.8px solid #000", padding: "44px 24px 44px 0" }}>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>{section.num}</div>
              <div style={{ fontSize: "18px", fontWeight: 500, color: "#000", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{section.title}</div>
            </div>
            <div className="learn-col-body" style={{ padding: "44px 44px" }}>
              {section.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.9, color: "#000", marginBottom: "18px" }}>{para.trim()}</p>
              ))}
            </div>
            <div className="learn-col-aside" style={{ borderLeft: "0.8px solid #000", padding: "44px 0 44px 28px" }}>
              {section.aside}
            </div>
          </div>
        </div>
      ))}
      <BackToTop />
    </>
  );
}
