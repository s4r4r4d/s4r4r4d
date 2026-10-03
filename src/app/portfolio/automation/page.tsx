'use client';
import { motion } from 'framer-motion';

export default function Automation() {
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
              Software robots that run business processes end to end
            </h1>
            <div className="relative mb-8">
              <div className="w-full h-px bg-[#dddddd]" />
              <div className="flex justify-between mt-3">
                <span className="text-[#666666] text-lg font-light">Automation</span>
                <span className="text-[#666666] text-lg font-light">2025 &ndash; present</span>
              </div>
            </div>
            <p className="text-[#333333] text-lg font-light leading-relaxed max-w-2xl">
              At Comtrade System Integration I build automations in Power Automate for some of
              the largest companies in Slovenia, Triglav and Petrol among them. Much of the work
              is consulting: sitting with the people who do the process, mapping how it actually
              runs, and defining what should be automated before anything gets built.
            </p>
            <p className="text-[#999999] text-sm font-light mt-6 max-w-2xl">
              Client work, so no screenshots and no process specifics. What follows is the
              shape of it.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.section {...fade} className="w-full bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-5">the problem</p>
          <p className="text-[#333333] text-lg font-light leading-relaxed max-w-2xl mb-6">
            Large organisations run on systems nobody is replacing: SAP, and the custom
            applications each company has built for itself over the years, alongside the usual
            CRMs and internal portals. Plenty of them have no API worth using. So the work that
            connects them is done by people, by hand, the same way every day.
          </p>
          <p className="text-[#666666] text-lg font-light leading-relaxed max-w-2xl">
            That work is slow, it is easy to get wrong, and it occupies people who should be
            handling the cases that actually need a decision.
          </p>
        </div>
      </motion.section>

      <motion.section {...fade} className="w-full border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-5">before a line of code</p>
          <p className="text-[#333333] text-lg font-light leading-relaxed max-w-2xl mb-10">
            The automation is the easy half. The half that decides whether it was worth building
            happens first, with the client:
          </p>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
            {[
              {
                h: 'Map it as it runs',
                p: 'Not as the documentation says it runs. Those are rarely the same process, and the difference is where automations break.',
              },
              {
                h: 'Find the exceptions',
                p: 'Every process has cases that do not fit. Finding them early decides what the robot does when reality does not match the rules.',
              },
              {
                h: 'Decide the scope',
                p: 'Which steps are worth automating, which are too rare to pay back, and which need a person to stay in the loop.',
              },
              {
                h: 'Agree what stays manual',
                p: 'Saying what will not be automated is as much of the job as saying what will. It is what keeps the automation trustworthy.',
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
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-5">how it is built</p>
          <p className="text-[#333333] text-lg font-light leading-relaxed max-w-2xl mb-12">
            Two routes, chosen per system rather than per project.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
            <div className="bg-white border border-[#dddddd] rounded-lg p-7">
              <h3 className="text-[#333333] font-medium mb-1">RPA</h3>
              <p className="text-[#999999] text-sm font-light mb-4">Power Automate Desktop</p>
              <p className="text-[#666666] font-light leading-relaxed">
                For systems with no usable API. The robot drives the interface the same way a
                person would, inside the client environment.
              </p>
            </div>
            <div className="bg-white border border-[#dddddd] rounded-lg p-7">
              <h3 className="text-[#333333] font-medium mb-1">Workflows</h3>
              <p className="text-[#999999] text-sm font-light mb-4">Power Platform, n8n</p>
              <p className="text-[#666666] font-light leading-relaxed">
                For systems that can be talked to properly. Faster, far less brittle, and the
                first choice whenever it is available.
              </p>
            </div>
          </div>

          <p className="text-[#666666] text-lg font-light leading-relaxed max-w-2xl mt-12">
            Both run unattended on a schedule, write a log of what ran and what failed, and
            hand anything they could not resolve to a person instead of guessing.
          </p>
        </div>
      </motion.section>

      <motion.section {...fade} className="w-full">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-[#999999] mb-5">what I take from it</p>
          <p className="text-[#333333] text-lg font-light leading-relaxed max-w-2xl">
            Carrying an automation from the first conversation through to something running in
            production is the part I want more of. The technical work is only ever as good as
            the decision about what to automate in the first place.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
