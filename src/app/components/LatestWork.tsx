'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  thumb: ReactNode;
};

/* ---------- shared diagram language ----------
   Four rows plus a ground bar, a lane label down the left, and one
   emphasised box per diagram. All four are built from these helpers so
   they cannot drift apart. */

const ROW = [16, 80, 144, 208];
const BAR_Y = 262;
const LEFT = 56;
const FULL_W = 354;
const MID = LEFT + FULL_W / 2;

const LEAD_CLS = 'transition-[stroke] duration-500 ease-out group-hover:stroke-[#9E3B37]';
const BAR_CLS = 'transition-[fill] duration-500 ease-out group-hover:fill-[#E7E7E7]';
const WIRE_CLS = 'transition-[stroke] duration-500 ease-out group-hover:stroke-[#B4B4B4]';

const COLS: Record<1 | 2 | 3, { x: number; w: number }[]> = {
  1: [{ x: LEFT, w: FULL_W }],
  2: [{ x: LEFT, w: 170 }, { x: 240, w: 170 }],
  3: [{ x: LEFT, w: 110 }, { x: 178, w: 110 }, { x: 300, w: 110 }],
};
const cx = (n: 1 | 2 | 3, i: number) => COLS[n][i].x + COLS[n][i].w / 2;

const Lane = ({ r, t }: { r: number; t: string }) => (
  <text x={46} y={ROW[r] + 22} textAnchor="end" fontSize="6.5" fill="#C8C8C8" letterSpacing="1">{t}</text>
);

const Box = ({ n, i, r, t, s, lead }: { n: 1 | 2 | 3; i: number; r: number; t: string; s?: string; lead?: boolean }) => {
  const { x, w } = COLS[n][i];
  return (
    <g>
      <rect
        x={x} y={ROW[r]} width={w} height={36} rx={5}
        fill="#FFFFFF" stroke={lead ? '#333333' : '#DDDDDD'} strokeWidth={lead ? 1.2 : 1}
        className={lead ? LEAD_CLS : undefined}
      />
      <text x={x + w / 2} y={ROW[r] + (s ? 16 : 22)} textAnchor="middle" fontSize="9.5" fill="#333333">{t}</text>
      {s && <text x={x + w / 2} y={ROW[r] + 28} textAnchor="middle" fontSize="7" fill="#999999">{s}</text>}
    </g>
  );
};

const Bar = ({ t }: { t: string }) => (
  <g>
    <rect x={LEFT} y={BAR_Y} width={FULL_W} height={22} rx={4} fill="#F0F0F0" className={BAR_CLS} />
    <text x={MID} y={BAR_Y + 14} textAnchor="middle" fontSize="7" fill="#999999">{t}</text>
  </g>
);

const nextY = (r: number) => (r + 1 < ROW.length ? ROW[r + 1] : BAR_Y);

const Fan = ({ from, r, to }: { from: number; r: number; to: number[] }) => {
  const y1 = ROW[r] + 36, y2 = nextY(r), mid = (y1 + y2) / 2;
  return (
    <g stroke="#D4D4D4" strokeWidth="1" fill="none" className={WIRE_CLS}>
      <path d={`M${from} ${y1} L${from} ${mid}`} />
      {to.length > 1 && <path d={`M${Math.min(...to)} ${mid} L${Math.max(...to)} ${mid}`} />}
      {to.map((x) => <path key={x} d={`M${x} ${mid} L${x} ${y2}`} />)}
    </g>
  );
};

const Join = ({ from, r, to }: { from: number[]; r: number; to: number }) => {
  const y1 = ROW[r] + 36, y2 = nextY(r), mid = (y1 + y2) / 2;
  return (
    <g stroke="#D4D4D4" strokeWidth="1" fill="none" className={WIRE_CLS}>
      {from.map((x) => <path key={x} d={`M${x} ${y1} L${x} ${mid}`} />)}
      {from.length > 1 && <path d={`M${Math.min(...from)} ${mid} L${Math.max(...from)} ${mid}`} />}
      <path d={`M${to} ${mid} L${to} ${y2}`} />
    </g>
  );
};

const Frame = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 420 296" className="w-full h-auto" aria-hidden="true">{children}</svg>
);

export default function LatestWork() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Enterprise Process Automation',
      description:
        'Software robots that run business processes end to end for some of the largest companies in Slovenia, Triglav and Petrol among them — inside SAP and the custom applications each has built for itself over the years. Most of the work happens before any code: mapping how a process actually runs, then deciding what to automate and what should stay with people. Built in Power Automate Desktop where there is no API, and in workflow tools where there is one.',
      stack: ['Power Automate Desktop', 'SAP', 'Power Platform', 'n8n', 'RPA'],
      thumb: (
        <Frame>
          <Lane r={0} t="DISCOVER" />
          <Lane r={1} t="DECIDE" />
          <Lane r={2} t="EXECUTE" />
          <Lane r={3} t="SYSTEMS" />
          <Box n={2} i={0} r={0} t="the business" s="people doing the work" />
          <Box n={2} i={1} r={0} t="consulting" s="how it really runs" />
          <Join from={[cx(2, 0), cx(2, 1)]} r={0} to={MID} />
          <Box n={2} i={0} r={1} t="process design" s="what to automate" lead />
          <Box n={2} i={1} r={1} t="rules & exceptions" s="and what stays manual" />
          <Fan from={MID} r={1} to={[cx(2, 0), cx(2, 1)]} />
          <Box n={2} i={0} r={2} t="RPA" s="systems with no API" />
          <Box n={2} i={1} r={2} t="n8n workflows" s="systems with an API" />
          <Join from={[cx(2, 0), cx(2, 1)]} r={2} to={MID} />
          <Box n={1} i={0} r={3} t="SAP · custom in-house apps" s="the systems nobody is replacing" />
          <Join from={[MID]} r={3} to={MID} />
          <Bar t="run logs · exceptions · a person steps in" />
        </Frame>
      ),
    },
    {
      id: 2,
      title: 'Job Market Agent',
      description:
        'An autonomous agent that browses job boards every night, reads a profile of what I am looking for, and reports every role as what I already have, what I am missing, and what would close the gap. It runs on an Ubuntu VM as a systemd service on a cron schedule, drives a real headless browser, and delivers to Discord.',
      stack: ['AI agents', 'Linux VM', 'systemd + cron', 'Tailscale', 'headless Chrome', 'Discord'],
      thumb: (
        <Frame>
          <Lane r={0} t="TRIGGER" />
          <Lane r={1} t="BROWSE" />
          <Lane r={2} t="REASON" />
          <Lane r={3} t="REPORT" />
          <Box n={1} i={0} r={0} t="20:00, every night" s="cron on an always-on Ubuntu VM" />
          <Fan from={MID} r={0} to={[cx(3, 0), cx(3, 1), cx(3, 2)]} />
          <Box n={3} i={0} r={1} t="optius" />
          <Box n={3} i={1} r={1} t="mojedelo" />
          <Box n={3} i={2} r={1} t="slo-tech" />
          <Join from={[cx(3, 0), cx(3, 1), cx(3, 2)]} r={1} to={MID} />
          <Box n={2} i={0} r={2} t="the agent" s="reads each listing" lead />
          <Box n={2} i={1} r={2} t="my profile" s="a file, not a prompt" />
          <Join from={[cx(2, 0), cx(2, 1)]} r={2} to={MID} />
          <Box n={1} i={0} r={3} t="HAVE · MISSING · GAP · TO DO" s="per role, with the gap named" />
          <Join from={[MID]} r={3} to={MID} />
          <Bar t="delivered to Discord · reports failure rather than guessing" />
        </Frame>
      ),
    },
    {
      id: 3,
      title: 'NoticeAI',
      description:
        'Scrapes EU and Slovenian tender portals, translates every notice to English, and embeds it so you can search by meaning rather than by keyword — a search for road maintenance also returns a notice about resurfacing works, which shares none of those words. I built the frontend: browsing by country or by EU procurement code, with the active filter kept in the URL so a filtered view can be shared, and infinite scroll over the paginated endpoint I added to the API. Postgres with pgvector ranks what comes back by cosine distance.',
      stack: ['Next.js', 'TypeScript', 'FastAPI', 'pgvector', 'shadcn/ui'],
      thumb: (
        <Frame>
          <Lane r={0} t="SCRAPE" />
          <Lane r={1} t="ENRICH" />
          <Lane r={2} t="STORE" />
          <Lane r={3} t="SEARCH" />
          <Box n={2} i={0} r={0} t="TED" s="EU tenders daily" />
          <Box n={2} i={1} r={0} t="eNaročanje" s="Slovenian portal" />
          <Join from={[cx(2, 0), cx(2, 1)]} r={0} to={MID} />
          <Box n={2} i={0} r={1} t="translate" s="everything to English" />
          <Box n={2} i={1} r={1} t="embed" s="1024-dim vectors" lead />
          <Join from={[cx(2, 0), cx(2, 1)]} r={1} to={MID} />
          <Box n={1} i={0} r={2} t="Postgres + pgvector" s="notices, translations, embeddings" />
          <Fan from={MID} r={2} to={[cx(2, 0), cx(2, 1)]} />
          <Box n={2} i={0} r={3} t="country · CPV" s="hard filters first" />
          <Box n={2} i={1} r={3} t="cosine distance" s="then ranked by meaning" />
          <Join from={[cx(2, 0), cx(2, 1)]} r={3} to={MID} />
          <Bar t="Next.js · filters kept in the URL · infinite scroll" />
        </Frame>
      ),
    },
    {
      id: 4,
      title: 'Rituals Skincare',
      description:
        'A skincare brand site built on a small design system rather than page by page: one colour palette, one type scale, and a set of components reused everywhere. Designed in Figma and built in Next.js and Tailwind, so the look stays consistent as pages get added.',
      stack: ['Figma', 'Next.js', 'Tailwind', 'design system'],
      thumb: (
        <Frame>
          <Lane r={0} t="DIRECTION" />
          <Lane r={1} t="SYSTEM" />
          <Lane r={2} t="BUILD" />
          <Lane r={3} t="PAGES" />
          <Box n={1} i={0} r={0} t="brand direction" s="what it should feel like" lead />
          <Fan from={MID} r={0} to={[cx(3, 0), cx(3, 1), cx(3, 2)]} />
          <Box n={3} i={0} r={1} t="colour" />
          <Box n={3} i={1} r={1} t="type" />
          <Box n={3} i={2} r={1} t="components" />
          <Join from={[cx(3, 0), cx(3, 1), cx(3, 2)]} r={1} to={MID} />
          <Box n={2} i={0} r={2} t="Figma" s="designed once" />
          <Box n={2} i={1} r={2} t="Next.js + Tailwind" s="built once" />
          <Join from={[cx(2, 0), cx(2, 1)]} r={2} to={MID} />
          <Box n={1} i={0} r={3} t="home · product · story" s="assembled from the same parts" />
          <Join from={[MID]} r={3} to={MID} />
          <Bar t="one look, however many pages get added" />
        </Frame>
      ),
    },
  ];

  return (
    <section className="w-full border-t border-t-[#dddddd] bg-[#fafafa] py-26">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="flex items-center justify-center mb-12 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-center text-gray-500 text-sm tracking-widest whitespace-nowrap">
            <motion.span
              initial={{ backgroundSize: '0% 6px' }}
              whileInView={{ backgroundSize: '100% 6px' }}
              viewport={{ once: true, amount: 0.9 }}
              transition={{ duration: 0.8, ease: [0.3, 0.9, 0.4, 1], delay: 0.25 }}
              style={{
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 6' preserveAspectRatio='none'><path d='M1 3.4 C 45 2.2 90 4.4 134 3 C 162 2.1 182 3.5 199 2.6' stroke='%239E3B37' stroke-width='1.1' fill='none' stroke-linecap='round'/></svg>")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 100%',
                paddingBottom: '6px',
                boxDecorationBreak: 'clone',
                WebkitBoxDecorationBreak: 'clone',
              }}
            >
              SOME OF MY LATEST WORK
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((x) => (
            <div
              key={x.id}
              className="group relative z-0 h-full flex flex-col rounded-lg overflow-hidden bg-white
                         transition-[transform,box-shadow] duration-500 ease-out
                         hover:z-20 hover:-translate-y-2 hover:scale-[1.07]
                         hover:shadow-[0_24px_55px_-20px_rgba(0,0,0,0.3)]"
            >
              <div className="w-full bg-[#f2f3f5] px-4 py-5 shrink-0">
                {x.thumb}
              </div>

              <div className="flex flex-col grow p-6">
                <h3 className="text-lg font-light text-[#353535] mb-3 transition-colors duration-500 group-hover:text-[#111111]">
                  {x.title}
                </h3>
                <p className="text-sm font-light text-[#747474] leading-relaxed grow">
                  {x.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-[#eeeeee]">
                  {x.stack.map((t, i) => (
                    <span
                      key={t}
                      style={{ transitionDelay: `${i * 55}ms` }}
                      className="text-[11px] font-light text-[#888888] bg-white
                                 border border-[#e4e4e4] rounded-full px-2.5 py-1
                                 transition-[transform,background-color,border-color,color] duration-300 ease-out
                                 group-hover:-translate-y-0.5 group-hover:scale-[1.04]
                                 group-hover:border-[#D8B1AF] group-hover:bg-[#FAF4F3] group-hover:text-[#9E3B37]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
