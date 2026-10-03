'use client';
import { motion } from 'framer-motion';

export default function NoticeAI() {
  const fade = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7 },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full border-b border-b-[#dddddd]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl font-normal text-[#333333] leading-tight mb-6">
              Semantic search over European public tenders
            </h1>
            <div className="relative mb-8">
              <div className="w-full h-px bg-[#dddddd]" />
              <div className="flex justify-between mt-3">
                <span className="text-[#666666] text-lg font-light">AI &amp; full stack</span>
                <span className="text-[#666666] text-lg font-light">2025</span>
              </div>
            </div>
            <p className="text-[#333333] text-lg font-light leading-relaxed max-w-2xl">
              Public tenders are published across dozens of national portals, in dozens of
              languages. Keyword search misses anything phrased differently to how you
              searched for it. This platform scrapes EU and Slovenian tender portals,
              translates every notice, and lets you search by meaning rather than by keyword.
            </p>
            <p className="text-[#999999] text-sm font-light mt-6 max-w-2xl">
              A two-person project. I built the frontend and added pagination to the notices
              API; the scraping, translation and embedding services are my collaborator&apos;s work.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.section {...fade} className="w-full bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-10">the pipeline</p>

          <svg viewBox="0 0 760 260" className="w-full h-auto max-w-3xl" role="img"
               aria-label="Pipeline: two scrapers feed a translator, then an embedder, into a Postgres database with pgvector, which serves a search API and the frontend.">
            <defs>
              <marker id="na" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#B0B0B0" />
              </marker>
              <style>{`
                .nt { font-size: 11px; fill: #333333; }
                .ns { font-size: 8.5px; fill: #999999; }
                .ne { stroke: #B0B0B0; fill: none; }
              `}</style>
            </defs>

            <rect x="0" y="12" width="150" height="48" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
            <text x="75" y="34" textAnchor="middle" className="nt">TED</text>
            <text x="75" y="48" textAnchor="middle" className="ns">EU tenders daily</text>

            <rect x="0" y="80" width="150" height="48" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
            <text x="75" y="102" textAnchor="middle" className="nt">eNaročanje</text>
            <text x="75" y="116" textAnchor="middle" className="ns">Slovenian portal</text>

            <path d="M 150 36 L 180 36 L 180 70 L 206 70" className="ne" markerEnd="url(#na)" />
            <path d="M 150 104 L 180 104 L 180 70" className="ne" />

            <rect x="210" y="46" width="140" height="48" rx="6" fill="#FFFFFF" stroke="#DDDDDD" />
            <text x="280" y="68" textAnchor="middle" className="nt">translate</text>
            <text x="280" y="82" textAnchor="middle" className="ns">everything to English</text>

            <line x1="350" y1="70" x2="386" y2="70" className="ne" markerEnd="url(#na)" />

            <rect x="390" y="46" width="140" height="48" rx="6" fill="#FFFFFF" stroke="#333333" strokeWidth="1.2" />
            <text x="460" y="68" textAnchor="middle" className="nt">embed</text>
            <text x="460" y="82" textAnchor="middle" className="ns">1024-dim vectors</text>

            <path d="M 530 70 L 566 70 L 566 110 L 390 110 L 390 136" className="ne" markerEnd="url(#na)" />

            <rect x="250" y="140" width="280" height="48" rx="6" fill="#FAFAFA" stroke="#DDDDDD" />
            <text x="390" y="162" textAnchor="middle" className="nt">Postgres + pgvector</text>
            <text x="390" y="176" textAnchor="middle" className="ns">notices, translations, embeddings</text>

            <line x1="390" y1="188" x2="390" y2="206" className="ne" markerEnd="url(#na)" />

            <rect x="250" y="210" width="280" height="44" rx="6" fill="#FFFFFF" stroke="#333333" strokeWidth="1.2" />
            <text x="390" y="230" textAnchor="middle" className="nt">search</text>
            <text x="390" y="244" textAnchor="middle" className="ns">by meaning, country and CPV code</text>
          </svg>

          <p className="text-[#666666] text-lg font-light leading-relaxed max-w-2xl mt-12">
            Every service runs as its own container with a background loop: the scrapers look
            for new notices, the translator picks up anything not yet translated, the embedder
            picks up anything not yet embedded. Nothing waits on anything else.
          </p>
        </div>
      </motion.section>

      <motion.section {...fade} className="w-full border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-5">how the search works</p>
          <p className="text-[#333333] text-lg font-light leading-relaxed max-w-2xl mb-8">
            Typing a query does not look for those words. The query is translated, turned into
            a vector, and compared against every notice by cosine distance &mdash; so a search
            for <span className="italic">road maintenance</span> also returns a notice about
            resurfacing works, even though it shares no words with the query.
          </p>
          <p className="text-[#666666] text-lg font-light leading-relaxed max-w-2xl">
            Hard filters run first: country, and CPV code, the EU&apos;s own procurement
            classification. The meaning-based ranking is applied to what survives, which keeps
            the results both relevant and genuinely narrow.
          </p>
        </div>
      </motion.section>

      <motion.section {...fade} className="w-full bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-10">my part</p>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
            {[
              {
                h: 'Pagination, then the thing that consumes it',
                p: 'The notices endpoint returned everything in one response. I added paging to it on the Python side, then built the infinite scroll that reads it \u2014 an IntersectionObserver on a sentinel element that pulls the next page as it comes into view.',
              },
              {
                h: 'Three ways to browse',
                p: 'Everything, by country, or by CPV code \u2014 the EU procurement classification. Each tab loads its own filter list from the API, and picking one re-queries the search endpoint rather than filtering in the browser.',
              },
              {
                h: 'Filters that live in the URL',
                p: 'The active tab and filter are read from and written to the query string, so a filtered view is a link. You can send someone every open tender in a category instead of telling them which boxes to tick.',
              },
              {
                h: 'Search as a modal',
                p: 'The semantic search sits over whatever you are already looking at rather than on its own page, so you can try a phrasing, see what comes back, and go straight back to browsing.',
              },
              {
                h: 'Search that non-experts can use',
                p: 'CPV codes and country IDs are not how people think about tenders. The filtering UI had to hide that without taking the precision away.',
              },
              {
                h: 'Containerised alongside the rest',
                p: 'Wiring the frontend into the Docker Compose stack so the whole system comes up with one command. Around 5,900 lines across 37 files.',
              },
            ].map((b) => (
              <div key={b.h}>
                <h3 className="text-[#333333] font-medium mb-2">{b.h}</h3>
                <p className="text-[#666666] font-light leading-relaxed">{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fade} className="w-full">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-8">stack</p>
          <div className="flex flex-wrap gap-2 max-w-3xl">
            {[
              'Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui', 'framer-motion',
              'FastAPI', 'Python', 'PostgreSQL', 'pgvector', 'SQLAlchemy', 'Alembic',
              'sentence-transformers', 'Keycloak', 'Docker Compose',
            ].map((t) => (
              <span key={t} className="text-sm text-[#666666] border border-[#dddddd] rounded-full px-4 py-1.5 bg-white">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
