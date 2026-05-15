import BackToTop from "@/components/BackToTop";

const C = { maxWidth: "1200px", margin: "0 auto", padding: "0 32px" } as const;

const SECTIONS = [
  {
    num: "01",
    title: "¿Qué es Bitcoin?",
    body: `Bitcoin es la primera forma de dinero en la historia que ningún gobierno, banco o corporación puede controlar. Para muchos, es un activo, algo en lo que invertir. Pero Bitcoin es mucho más que eso. No es solo dinero digital — es dinero soberano. Funciona en una red descentralizada donde miles de participantes independientes controlan las reglas. Ninguna persona o institución puede cambiarlas unilateralmente.

Bitcoin fue presentado en 2009 por Satoshi Nakamoto, una persona o grupo anónimo cuya identidad sigue siendo desconocida hasta hoy. Desde entonces, ha demostrado ser la red monetaria más segura jamás creada — y uno de los activos más valiosos del mundo.

Solo existirán 21 millones de Bitcoin. Es fijo. Los nuevos Bitcoin se emiten a través de un proceso llamado minería, donde computadoras especializadas protegen la red y son recompensadas con monedas recién creadas. Esta emisión sigue un cronograma predecible y disminuye con el tiempo, con el último Bitcoin previsto para ser minado alrededor del año 2140.

Compara eso con las monedas fiduciarias — impresas sin freno por los bancos centrales, expandiendo la oferta monetaria cuando conviene a la política y diluyendo silenciosamente su valor. El sistema fiduciario es una erosión constante del poder adquisitivo. Eso hace de Bitcoin el dinero más sólido que la humanidad ha conocido — más sólido que el oro, porque no es posible aumentar su oferta sin importar cuán alta sea la demanda. Escaso por diseño. Sin fronteras por naturaleza.

Alrededor de 1.700 millones de adultos en el mundo no tienen acceso a servicios bancarios. Bitcoin cambia eso. Si tienes acceso a internet, tienes acceso a Bitcoin. Sin solicitud, sin aprobación, sin institución requerida. No importa dónde naciste. Por primera vez en la historia, existe un dinero verdaderamente abierto y sin fronteras.`,
    aside: (
      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Oferta</div>
        <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000", marginBottom: "24px" }}>
          Solo existirán 21 millones de Bitcoin. Alrededor de 19,8 millones ya han sido minados.
        </p>
        <div style={{ paddingTop: "24px" }}>
          <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Autocustodia</div>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#000" }}>
            Con Bitcoin, puedes ser tu propio banco. Cuando mantienes Bitcoin en autocustodia, controlando tus propias claves privadas, nadie puede controlar tus fondos ni bloquear una transacción. Asumes plena soberanía sobre tu dinero.
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Volatilidad, adopción y la tendencia a largo plazo",
    body: `Sí, Bitcoin es volátil. Eso no es un defecto — es como funciona un activo en adopción inicial. A corto plazo, el precio se mueve de forma más agresiva. A largo plazo, la dirección siempre ha sido hacia arriba.

¿Por qué la volatilidad? Porque el mundo todavía está descubriendo qué es realmente Bitcoin. A medida que la adopción aumenta — de individuos a instituciones y naciones — la liquidez se profundiza y la volatilidad se comprime gradualmente. Eso ya está ocurriendo, ciclo tras ciclo.`,
    aside: (
      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Stack and HODL</div>
        <div style={{ fontSize: "15px", color: "#000", lineHeight: 1.8 }}>&ldquo;HODL&rdquo; comenzó como un error tipográfico de &ldquo;hold&rdquo; en un foro de Bitcoin en 2013, y se quedó. Se convirtió en una filosofía: no vendas por pánico. Compra consistentemente, mantén durante los ciclos. A largo plazo, la dirección siempre ha ido en un solo sentido.</div>
      </div>
    ),
  },
  {
    num: "03",
    title: "El ciclo de 4 años y el Halving",
    body: `Bitcoin tiene un shock de oferta integrado llamado Halving. Aproximadamente cada cuatro años, la cantidad de nuevos Bitcoin que entran al sistema se reduce a la mitad. Esto no es una decisión política — es impuesto por el propio protocolo, y los mineros que protegen la red reciben menos monedas nuevas con el tiempo. Esto reduce la tasa a la que nuevos Bitcoin entran en circulación — e históricamente ha precedido a grandes mercados alcistas. No por hype, sino por escasez programada que se encuentra con una demanda creciente.

Este ritmo de cuatro años es lo que la mayoría de la gente quiere decir cuando habla de ciclos de Bitcoin. Pero hay una pregunta abierta que vale reconocer: a medida que Bitcoin madura, ¿el ciclo de cuatro años seguirá repitiéndose de la misma manera? Algunos analistas dicen que la creciente adopción institucional y la liquidez más profunda pueden estar suavizando el patrón. De cualquier manera, una cosa permanece clara: los fundamentos no han cambiado, y la ventana para acumular Bitcoin barato solo se hace más pequeña con el tiempo.

El score en Bitcoin Beacon está diseñado para darte una idea de dónde estamos actualmente en ese ciclo.`,
    aside: (
      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Línea de Tiempo del Halving</div>
        {[
          { year: "2012", label: "1.° Halving", muted: false },
          { year: "2016", label: "2.° Halving", muted: false },
          { year: "2020", label: "3.° Halving", muted: false },
          { year: "2024", label: "4.° Halving", muted: false },
          { year: "~2028", label: "5.° Halving", muted: true },
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
    title: "¿Qué es DCA?",
    body: `DCA significa Dollar-Cost Averaging. Significa invertir una cantidad fija en un cronograma regular, independientemente del precio.

Intentar acertar el timing de Bitcoin es un juego donde la mayoría de las personas pierde. Entonces compras de forma consistente. Ejemplo: si inviertes $100 cada mes durante 24 meses, algunos meses comprarás a $60k por Bitcoin, otros a $70k, otros a $50k. Tu costo promedio reflejará el rango, no el peor momento.

También existe el DCA Dinámico — en lugar de una cantidad fija, inviertes más cuando los precios están bajos y menos cuando están altos, ajustando según la señal o el nivel de precio. Requiere más disciplina, pero puede mejorar tu precio promedio de entrada con el tiempo.

El DCA es ampliamente considerado la mejor estrategia para invertir en Bitcoin. Así es como los tenedores serios a largo plazo lo abordan. Elimina la emoción de la ecuación.`,
    aside: (
      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Ejemplo DCA</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Mes", "Precio", "Sats"].map((h) => (
                <th key={h} style={{ fontSize: "11px", color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "left", padding: "5px 0", fontWeight: 600, borderBottom: "0.8px solid #000", opacity: 0.55, fontFamily: "var(--font-space-grotesk),sans-serif" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Ene", "$50k", "200.000"],
              ["Feb", "$60k", "166.667"],
              ["Mar", "$70k", "142.857"],
              ["Prom.", "$59.322", "509.524"],
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
    title: "¿Qué son las métricas de riesgo?",
    body: `Bitcoin es el sistema financiero más transparente jamás creado. Nadie puede predecir el precio de Bitcoin con precisión, pero los datos on-chain pueden revelar patrones que históricamente han aparecido cerca de los máximos y mínimos de los ciclos.

Las métricas de riesgo son herramientas que leen estos datos y los traducen en señales. Estas señales reflejan comportamientos reales: ¿están acumulando los tenedores a largo plazo? ¿Está aumentando la presión de venta? ¿Está el mercado sobrecalentado?

Ninguna de estas métricas es perfecta. Pero combinadas, forman un cuadro más claro que cualquier indicador por sí solo. Esto es lo que hace el CBBI — agrega nueve métricas on-chain independientes en un único score entre 0 y 100. Bitcoin Beacon toma ese score y lo presenta de la forma más simple posible: un número, actualizado diariamente, con contexto en lenguaje simple. Piensa en estas métricas como una brújula, no un GPS. No te dirán el destino exacto, pero te ayudarán a no perderte.`,
    aside: (
      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-space-grotesk),sans-serif" }}>Nota</div>
        <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000" }}>
          Una métrica de riesgo no es una predicción de precio. Refleja patrones históricos, no certeza sobre el futuro.
        </p>
      </div>
    ),
  },
  {
    num: "06",
    title: "La tecnología y el ecosistema",
    body: `Si solo miras el precio de Bitcoin, estás perdiendo lo más valioso. Bitcoin es un protocolo. Piénsalo de la misma manera que piensas en internet — una capa base de valor, un conjunto de reglas abiertas que cualquier persona puede verificar y sobre las que puede construir.

La blockchain es un libro de contabilidad público que registra cada transacción jamás realizada. Es mantenido por miles de computadoras independientes (nodos) alrededor del mundo. Ningún punto único de fallo. Ningún punto único de control.

Sobre Bitcoin, ha crecido un ecosistema: la Lightning Network permite pagos instantáneos y de costo casi cero; Nostr es un protocolo abierto para comunicación descentralizada, resistente a la censura, sin permisos, construido sobre los mismos principios que Bitcoin. Una comunidad global de desarrolladores sigue construyendo herramientas que amplían lo que Bitcoin puede hacer.

No se trata de si el precio sube o baja. Se trata de si un sistema monetario neutro e incorruptible tiene un lugar en este mundo. Y por supuesto que la respuesta es sí. Es posible. Está ocurriendo. Y eso es muy poderoso.`,
    aside: (
      <div>
        {[
          { label: "Lightning Network", desc: "Pagos instantáneos y de bajo costo sobre Bitcoin." },
          { label: "Nostr",             desc: "Comunicación abierta y descentralizada usando Lightning de forma nativa." },
          { label: "Yendo más allá",    desc: "Liquid, Ark, Fedimint y otros están ampliando las capacidades de Bitcoin en pagos, privacidad y custodia." },
          { label: "Código abierto",    desc: "El código es público, auditable y mantenido por una comunidad global." },
          { label: "Autocustodia",      desc: "Mantén tu propio Bitcoin y asume plena soberanía sobre tu dinero." },
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
  { num: "01", title: "¿Qué es Bitcoin?" },
  { num: "02", title: "Volatilidad y adopción" },
  { num: "03", title: "El ciclo de 4 años" },
  { num: "04", title: "¿Qué es DCA?" },
  { num: "05", title: "Métricas de riesgo" },
  { num: "06", title: "Tecnología" },
];

export default function LearnPageES() {
  return (
    <>
      <section style={{ borderBottom: "0.8px solid #000", padding: "64px 0 52px" }}>
        <div className="page-hero-grid" style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.05, fontFamily: "var(--font-goudy), serif" }}>
            Entendiendo<br />Bitcoin
          </h1>
          <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            Adentrarse en el mundo de Bitcoin significa navegar por mucha información. Esta página cubre los conceptos fundamentales — las bases que necesitas para entender lo que estás viendo, por qué importan los ciclos y cómo interpretar las señales.
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
              <img src="/what_is_3.svg" alt="" aria-hidden style={{ position: "absolute", left: "calc(50vw - 867px)", top: "50%", transform: "translateY(calc(-50% + 32px))", width: "488px", maxWidth: "none", height: "auto", zIndex: 0, pointerEvents: "none" }} />
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
