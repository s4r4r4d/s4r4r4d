'use client';

import { motion } from 'framer-motion';

export default function Experience() {

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
          <motion.div
            className="w-full lg:w-[34%] shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-10 font-semibold text-[#333333]">
              My experience
            </h2>

            <div className="space-y-4 max-w-prose">
              <p className="text-md text-[#666666] leading-relaxed">
                At Comtrade System Integration I build software robots in Power Automate that run business processes for large enterprise clients. Much of it is consulting: working directly with the client, mapping how the process actually runs, and defining what should be automated.
              </p>
              <p className="text-md text-[#666666] leading-relaxed">
                Prior to that I worked as a developer building the interface for a document management system at SRC (Vue.js, TypeScript). The whole process &mdash; from gathering user feedback and design through to implementation &mdash; is documented in my <a href="/graduation_thesis.pdf" download="Sara_Radojicic_Thesis.pdf"><u>graduation thesis</u></a>.
              </p>
              <p className="text-md text-[#666666] leading-relaxed">
                In my own time I build AI agents. That&apos;s where I&apos;m heading next.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:flex-1 min-w-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-widest text-[#999999] mb-5">
              how an automated process fits together
            </p>

            <div className="hidden md:block w-full">
            <svg viewBox="0 0 770 500" className="w-full h-auto" role="img"
                 aria-label="Layered view of an automated process: discovery with the business team, decisioning by an AI agent over rules and an LLM, execution through RPA or n8n, the client systems themselves, and an operate layer of run logs and dashboards that feeds back into the agent.">
              <defs>
                <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#B0B0B0" />
                </marker>
                <style>{`
                  .lane { font-size: 8.5px; fill: #BBBBBB; letter-spacing: 1.2px; }
                  .t { font-size: 10px; fill: #333333; }
                  .st { font-size: 8px; fill: #999999; }
                  .edge { stroke: #B0B0B0; fill: none; }
                `}</style>
              </defs>

              <text x="88" y="62" textAnchor="end" className="lane">DISCOVER</text>
              <rect x="100" y="30" width="190" height="56" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
              <text x="195" y="54" textAnchor="middle" className="t">business team</text>
              <text x="195" y="69" textAnchor="middle" className="st">the people doing the work</text>
              <line x1="290" y1="58" x2="306" y2="58" className="edge" markerEnd="url(#ar)" />
              <rect x="310" y="30" width="190" height="56" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
              <text x="405" y="54" textAnchor="middle" className="t">consulting</text>
              <text x="405" y="69" textAnchor="middle" className="st">how the process really runs</text>
              <line x1="500" y1="58" x2="516" y2="58" className="edge" markerEnd="url(#ar)" />
              <rect x="520" y="30" width="190" height="56" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
              <text x="615" y="54" textAnchor="middle" className="t">process design</text>
              <text x="615" y="69" textAnchor="middle" className="st">what to automate, what to keep</text>

              <path d="M 615 86 L 615 106 L 405 106 L 405 122" className="edge" markerEnd="url(#ar)" />

              <text x="88" y="158" textAnchor="end" className="lane">DECIDE</text>
              <rect x="100" y="126" width="190" height="56" rx="6" fill="#FAFAFA" stroke="#DDDDDD" />
              <text x="195" y="150" textAnchor="middle" className="t">rules &amp; process data</text>
              <text x="195" y="165" textAnchor="middle" className="st">answers already written down</text>
              <line x1="290" y1="154" x2="306" y2="154" className="edge" markerEnd="url(#ar)" />
              <rect x="310" y="126" width="190" height="56" rx="6" fill="#FFFFFF" stroke="#333333" />
              <text x="405" y="150" textAnchor="middle" className="t">AI agent</text>
              <text x="405" y="165" textAnchor="middle" className="st">runs each case against that design</text>
              <line x1="516" y1="154" x2="504" y2="154" className="edge" markerStart="url(#ar)" markerEnd="url(#ar)" />
              <text x="510" y="118" textAnchor="middle" className="st">prompt / response</text>
              <rect x="520" y="126" width="190" height="56" rx="6" fill="#FAFAFA" stroke="#DDDDDD" />
              <text x="615" y="150" textAnchor="middle" className="t">LLM</text>
              <text x="615" y="165" textAnchor="middle" className="st">handles the unstructured parts</text>

              <path d="M 405 182 L 405 206 L 247 206 L 247 218" className="edge" markerEnd="url(#ar)" />
              <path d="M 405 182 L 405 206 L 563 206 L 563 218" className="edge" markerEnd="url(#ar)" />

              <text x="88" y="254" textAnchor="end" className="lane">EXECUTE</text>
              <rect x="100" y="222" width="295" height="56" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
              <text x="247" y="246" textAnchor="middle" className="t">RPA &mdash; Power Automate Desktop</text>
              <text x="247" y="261" textAnchor="middle" className="st">for systems with no API</text>
              <rect x="415" y="222" width="295" height="56" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
              <text x="563" y="246" textAnchor="middle" className="t">n8n workflows</text>
              <text x="563" y="261" textAnchor="middle" className="st">for systems with an API</text>

              <path d="M 247 278 L 247 298 L 405 298 L 405 314" className="edge" markerEnd="url(#ar)" />
              <path d="M 563 278 L 563 298 L 405 298" className="edge" />

              <text x="88" y="344" textAnchor="end" className="lane">SYSTEMS</text>
              <rect x="100" y="318" width="610" height="52" rx="6" fill="#FAFAFA" stroke="#DDDDDD" />
              <text x="405" y="338" textAnchor="middle" className="t">the systems the client already has</text>
              <text x="405" y="353" textAnchor="middle" className="st">ERP · CRM · internal portals · legacy desktop apps &mdash; the ones nobody is replacing</text>

              <path d="M 405 370 L 405 390 L 247 390 L 247 406" className="edge" markerEnd="url(#ar)" />

              <text x="88" y="442" textAnchor="end" className="lane">OPERATE</text>
              <rect x="100" y="410" width="295" height="56" rx="6" fill="#FAFAFA" stroke="#DDDDDD" />
              <text x="247" y="434" textAnchor="middle" className="t">run logs &amp; exceptions</text>
              <text x="247" y="449" textAnchor="middle" className="st">what ran, what failed, what needs a decision</text>
              <line x1="395" y1="438" x2="411" y2="438" className="edge" markerEnd="url(#ar)" />
              <rect x="415" y="410" width="295" height="56" rx="6" fill="#FFFFFF" stroke="#333333" />
              <text x="563" y="434" textAnchor="middle" className="t">dashboards &amp; controls</text>
              <text x="563" y="449" textAnchor="middle" className="st">people watch the agents, approve, step in</text>
              <rect x="664" y="418" width="36" height="15" rx="3" fill="#333333" />
              <text x="682" y="429" textAnchor="middle" fontSize="8" letterSpacing="0.8" fill="#FFFFFF">UI</text>

              <path d="M 710 438 L 742 438 L 742 154 L 714 154" className="edge" strokeDasharray="4 4" markerEnd="url(#ar)" />
              <text x="738" y="300" textAnchor="middle" className="st" transform="rotate(-90 738 300)">decisions feed back</text>
            </svg>
            </div>

            <div className="md:hidden w-full">
            <svg viewBox="0 0 340 724" className="w-full h-auto" role="img"
                 aria-label="Layered view of an automated process: discovery with the business team, decisioning by an AI agent over rules and an LLM, execution through RPA or n8n, the client systems themselves, and an operate layer of run logs and dashboards that feeds back into the agent.">
              <defs>
                <marker id="arm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#B0B0B0" />
                </marker>
                <style>{`
                  .mlane { font-size: 8.5px; fill: #BBBBBB; letter-spacing: 1.2px; }
                  .mt { font-size: 11px; fill: #333333; }
                  .mst { font-size: 8.5px; fill: #999999; }
                  .medge { stroke: #B0B0B0; fill: none; }
                `}</style>
              </defs>

              <text x="10" y="12" className="mlane">DISCOVER</text>
              <rect x="10" y="20" width="290" height="50" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
              <text x="155" y="42" textAnchor="middle" className="mt">business team</text>
              <text x="155" y="57" textAnchor="middle" className="mst">the people doing the work</text>
              <line x1="155" y1="70" x2="155" y2="84" className="medge" markerEnd="url(#arm)" />
              <rect x="10" y="84" width="290" height="50" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
              <text x="155" y="106" textAnchor="middle" className="mt">consulting</text>
              <text x="155" y="121" textAnchor="middle" className="mst">how the process really runs</text>
              <line x1="155" y1="134" x2="155" y2="148" className="medge" markerEnd="url(#arm)" />
              <rect x="10" y="148" width="290" height="50" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
              <text x="155" y="170" textAnchor="middle" className="mt">process design</text>
              <text x="155" y="185" textAnchor="middle" className="mst">what to automate, what to keep</text>
              <line x1="155" y1="198" x2="155" y2="216" className="medge" markerEnd="url(#arm)" />

              <text x="10" y="232" className="mlane">DECIDE</text>
              <rect x="10" y="240" width="138" height="54" rx="6" fill="#FAFAFA" stroke="#DDDDDD" />
              <text x="79" y="262" textAnchor="middle" className="mt">rules &amp; data</text>
              <text x="79" y="277" textAnchor="middle" className="mst">answers already written down</text>
              <rect x="162" y="240" width="138" height="54" rx="6" fill="#FAFAFA" stroke="#DDDDDD" />
              <text x="231" y="262" textAnchor="middle" className="mt">LLM</text>
              <text x="231" y="277" textAnchor="middle" className="mst">the unstructured parts</text>
              <line x1="79" y1="294" x2="79" y2="320" className="medge" markerEnd="url(#arm)" />
              <line x1="210" y1="294" x2="210" y2="320" className="medge" markerStart="url(#arm)" markerEnd="url(#arm)" />
              <text x="268" y="310" textAnchor="middle" className="mst">prompt / response</text>
              <rect x="10" y="320" width="290" height="50" rx="6" fill="#FFFFFF" stroke="#333333" />
              <text x="155" y="342" textAnchor="middle" className="mt">AI agent</text>
              <text x="155" y="357" textAnchor="middle" className="mst">runs each case against that design</text>

              <path d="M 155 370 L 155 396 L 79 396 L 79 412" className="medge" markerEnd="url(#arm)" />
              <path d="M 155 396 L 231 396 L 231 412" className="medge" markerEnd="url(#arm)" />

              <text x="10" y="404" className="mlane">EXECUTE</text>
              <rect x="10" y="412" width="138" height="64" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
              <text x="79" y="434" textAnchor="middle" className="mt">RPA</text>
              <text x="79" y="449" textAnchor="middle" className="mst">Power Automate Desktop</text>
              <text x="79" y="462" textAnchor="middle" className="mst">for systems with no API</text>
              <rect x="162" y="412" width="138" height="64" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
              <text x="231" y="434" textAnchor="middle" className="mt">n8n</text>
              <text x="231" y="449" textAnchor="middle" className="mst">workflows</text>
              <text x="231" y="462" textAnchor="middle" className="mst">for systems with an API</text>

              <path d="M 79 476 L 79 496 L 155 496 L 155 516" className="medge" markerEnd="url(#arm)" />
              <path d="M 231 476 L 231 496 L 155 496" className="medge" />

              <text x="10" y="504" className="mlane">SYSTEMS</text>
              <rect x="10" y="516" width="290" height="64" rx="6" fill="#FAFAFA" stroke="#DDDDDD" />
              <text x="155" y="538" textAnchor="middle" className="mt">the systems the client already has</text>
              <text x="155" y="553" textAnchor="middle" className="mst">ERP · CRM · internal portals · legacy desktop apps</text>
              <text x="155" y="566" textAnchor="middle" className="mst">&mdash; the ones nobody is replacing</text>

              <line x1="155" y1="580" x2="155" y2="600" className="medge" markerEnd="url(#arm)" />

              <text x="10" y="596" className="mlane">OPERATE</text>
              <rect x="10" y="600" width="290" height="50" rx="6" fill="#FAFAFA" stroke="#DDDDDD" />
              <text x="155" y="622" textAnchor="middle" className="mt">run logs &amp; exceptions</text>
              <text x="155" y="637" textAnchor="middle" className="mst">what ran, what failed, what needs a decision</text>
              <line x1="155" y1="650" x2="155" y2="664" className="medge" markerEnd="url(#arm)" />
              <rect x="10" y="664" width="290" height="50" rx="6" fill="#FFFFFF" stroke="#333333" />
              <text x="148" y="686" textAnchor="middle" className="mt">dashboards &amp; controls</text>
              <text x="155" y="701" textAnchor="middle" className="mst">people watch the agents, approve, step in</text>
              <rect x="246" y="672" width="36" height="15" rx="3" fill="#333333" />
              <text x="264" y="683" textAnchor="middle" fontSize="8" letterSpacing="0.8" fill="#FFFFFF">UI</text>

              <path d="M 300 689 L 328 689 L 328 345 L 304 345" className="medge" strokeDasharray="4 4" markerEnd="url(#arm)" />
              <text x="316" y="520" textAnchor="middle" className="mst" transform="rotate(-90 316 520)">decisions feed back</text>
            </svg>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
