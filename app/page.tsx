import Image from "next/image";

export default function Home() {
  const board = [
    { rank: "DCG", name: "Caroline Niagwan" },
    { rank: "DCG", name: "CC Dim" },
    { rank: "DCG", name: "Tijjani Abe fsi PhD" },
    { rank: "DCG", name: "Timi Bomodi" },
    { rank: "ACG", name: "Babatunde Olomu fsi PhD" },
    { rank: "CC",  name: "Abdulmumeen Njobdi" },
    { rank: "DCG", name: "Dera Nnadi" },
    { rank: "DCG", name: "Musa Omale PhD" },
    { rank: "CC",  name: "Emmanuel Oshoba" },
    { rank: "CC",  name: "GI Aliyu" },
    { rank: "DC",  name: "JR Ayodele", role: "Secretary" },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ── HERO ── */}
      <section className="relative bg-linear-to-br from-[#006600] via-[#004d00] to-[#1a1a00] text-white overflow-hidden">
        <span className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
        <span className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-yellow-400/10" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 flex flex-col items-center text-center gap-8">
          {/* logo */}
          <Image
            src="/logo2.png"
            alt="NCS Course 1/92 Association logo"
            width={220}
            height={260}
            className="object-contain drop-shadow-xl"
            quality={100}
            priority
          />

          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              NCS Course&nbsp;1/92 Association
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-green-200 font-medium">
              Nigeria Customs Service &mdash; Batch 1992
            </p>
          </div>

          <p className="max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
            An association of dedicated officers who were trained
            in&nbsp;1992, bound by service, integrity, and a shared commitment to
            the economic growth of Nigeria.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#about"
              className="px-7 py-3 rounded-full bg-yellow-400 text-green-900 font-semibold hover:bg-yellow-300 transition-colors shadow"
            >
              Learn More
            </a>
            <a
              href="#board"
              className="px-7 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Board of Trustees
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🇳🇬",
              title: "Our Heritage",
              body: "Trained in 1992, Course 1/92 represents a distinguished cohort in the history of the Nigeria Customs Service.",
            },
            {
              icon: "🤝",
              title: "Our Bond",
              body: "We are united by shared training, mutual respect, and decades of professional service protecting Nigeria's borders and revenue.",
            },
            {
              icon: "🌟",
              title: "Our Purpose",
              body: "This association serves to foster social interaction and unity, to offer all forms of assistance empowering members of the association.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold text-green-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOARD OF TRUSTEES ── */}
      <section id="board" className="bg-linear-to-b from-green-50 to-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-extrabold text-center text-green-900 mb-2">
            Board of Trustees
          </h2>
          <p className="text-center text-gray-500 mb-12 text-sm">
            Leadership guiding the association
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {board.map((member, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl bg-white border border-gray-100 shadow-sm px-5 py-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-700 text-white font-bold text-sm shrink-0">
                  {member.rank}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 leading-snug">{member.name}</p>
                  {member.role && (
                    <p className="text-xs text-green-700 font-medium mt-0.5">{member.role}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-green-900 text-green-200 py-10 text-center text-sm">
        <p className="font-semibold text-white text-base">NCS Course 1/92 Association</p>
        <p className="mt-1">Nigeria Customs Service</p>
        <p className="mt-4 text-xs text-green-500">
          &copy; {new Date().getFullYear()} NCS Course 1/92 Association. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
