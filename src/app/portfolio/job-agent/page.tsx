'use client';
import { motion } from 'framer-motion';

export default function JobAgent() {
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
              An agent that reads the job market every night
            </h1>
            <div className="relative mb-8">
              <div className="w-full h-px bg-[#dddddd]" />
              <div className="flex justify-between mt-3">
                <span className="text-[#666666] text-lg font-light">AI agents</span>
                <span className="text-[#666666] text-lg font-light">2026</span>
              </div>
            </div>
            <p className="text-[#333333] text-lg font-light leading-relaxed max-w-2xl">
              A personal project, and the one I learned the most from. An autonomous agent
              running on a schedule on my own server: it browses job boards, reads a profile
              of what I am looking for, and tells me which roles are worth my time and what
              I am missing for the ones that are not.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.section {...fade} className="w-full bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-8">what it does</p>

          <div className="bg-white border border-[#dddddd] rounded-lg overflow-hidden max-w-2xl">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#eeeeee]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]" />
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p className="text-[#9E3B37]">20:00 &mdash; scheduled run</p>
              <p className="text-[#666666] mt-3">browsing 3 boards &middot; reading profile</p>
              <p className="text-[#333333] mt-4">
                <span className="text-[#999999]">HAVE</span> &nbsp;the requirements I already meet
              </p>
              <p className="text-[#333333] mt-1">
                <span className="text-[#999999]">MISSING</span> &nbsp;the ones I do not
              </p>
              <p className="text-[#333333] mt-1">
                <span className="text-[#999999]">GAP</span> &nbsp;how far off the role actually is
              </p>
              <p className="text-[#333333] mt-1">
                <span className="text-[#999999]">TO&nbsp;DO</span> &nbsp;what would close it
              </p>
            </div>
          </div>

          <p className="text-[#666666] text-lg font-light leading-relaxed max-w-2xl mt-10">
            The output arrives as a message, not a dashboard I have to remember to open. That
            was deliberate: an automation nobody looks at is an automation nobody uses.
          </p>
        </div>
      </motion.section>

      <motion.section {...fade} className="w-full border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-10">how it is built</p>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
            {[
              {
                h: 'Always-on Linux host',
                p: 'An Ubuntu VM rather than my laptop, so a scheduled run never depends on a machine being awake. The agent runs as a systemd user service with lingering enabled, so it survives logout and comes back on its own after a reboot.',
              },
              {
                h: 'Private by default',
                p: 'Nothing is exposed to the internet. The host sits on a Tailscale network \u2014 a WireGuard mesh \u2014 so the only way in is from a device already on it. No open port, no public endpoint.',
              },
              {
                h: 'Scheduled, unattended',
                p: 'A cron schedule triggers the run at 20:00. Nobody starts it, and nobody needs to be watching when it finishes.',
              },
              {
                h: 'Real browsing',
                p: 'It drives headless Chrome against the actual boards, because the listings that matter are not in any API and are rendered client side.',
              },
              {
                h: 'A profile it reads each run',
                p: 'What I am looking for lives in a file the agent reads every time, not in the prompt. Changing my criteria means editing one file, not rewriting the agent.',
              },
              {
                h: 'Delivered where I already am',
                p: 'Results arrive through a Discord gateway on the same host, so the output lands in a conversation rather than in a log file I would have to remember to read.',
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

      <motion.section {...fade} className="w-full bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-5">the part that was actually hard</p>
          <p className="text-[#333333] text-lg font-light leading-relaxed max-w-2xl mb-6">
            The first version looked like it worked. It was not until I checked a listing that
            I found the agent had invented it.
          </p>
          <p className="text-[#666666] text-lg font-light leading-relaxed max-w-2xl mb-6">
            When the browser failed, the agent quietly fell back to what it already knew and
            produced a confident, plausible, wrong answer. A silent failure that still returns
            something is far more dangerous than one that stops.
          </p>
          <p className="text-[#333333] text-lg font-light leading-relaxed max-w-2xl">
            The fix was not a better prompt. It was making <span className="font-medium">browsing
            failed</span> an acceptable outcome &mdash; the agent is required to report that it
            could not read a board, and is not permitted to fill the gap. The same rule I apply
            to automations at work: an unattended process must hand over what it could not do
            rather than guess at it.
          </p>
        </div>
      </motion.section>

      <motion.section {...fade} className="w-full">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-5">why it is here</p>
          <p className="text-[#333333] text-lg font-light leading-relaxed max-w-2xl">
            It is a small project, but it is the same shape as the work I do for clients:
            something that runs on its own, on a schedule, against systems that were never
            built to be automated, and that tells a person honestly when it could not finish.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
