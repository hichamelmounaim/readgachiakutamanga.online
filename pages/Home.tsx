import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Star, MessageCircle, Bookmark } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useManga } from '../context/MangaContext';
import { ARCS } from '../constants';

const Home: React.FC = () => {
  const { chapters } = useManga();
  const latestChapter = chapters[0];
  const [continueChapter, setContinueChapter] = React.useState<number | null>(null);

  React.useEffect(() => {
    const saved = localStorage.getItem('gachiakuta_last_chapter');
    if (saved) setContinueChapter(parseInt(saved, 10));
  }, []);

  return (
    <>
      <SEOHead
        title="Read Gachiakuta Manga Online Free — All Chapters"
        description="Read Gachiakuta Manga Online Free in High Quality. All chapters by Kei Urana available instantly — no sign-up required. Latest releases updated fast."
        canonicalUrl="https://readgachiakutamanga.online/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Gachiakuta Manga",
            "url": "https://readgachiakutamanga.online",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://readgachiakutamanga.online/manga?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "ComicSeries",
            "name": "Gachiakuta",
            "alternateName": ["ガチアクタ"],
            "description": "Rudo is a boy from the Slums who is falsely accused of murder and thrown into the Pit — a massive landfill below the floating city — where he must survive using the supernatural power of Reapers.",
            "url": "https://readgachiakutamanga.online/",
            "image": "https://readgachiakutamanga.online/gachiakuta-manga-cover.jpg",
            "author": {
              "@type": "Person",
              "name": "Kei Urana"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Kodansha",
              "url": "https://www.kodansha.co.jp"
            },
            "genre": ["Action", "Adventure", "Shounen", "Dark Fantasy"],
            "startDate": "2022-02-16",
            "inLanguage": "en",
            "numberOfEpisodes": chapters.length,
            "contentRating": "Teen",
            "isAccessibleForFree": true,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "ratingCount": "12000",
              "bestRating": "5",
              "worstRating": "1"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is the Gachiakuta manga finished?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, the Gachiakuta manga is not finished. It is currently ongoing and new chapters are released weekly in Weekly Shōnen Magazine by Kei Urana."
                }
              },
              {
                "@type": "Question",
                "name": "Did Gachiakuta manga end?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, Gachiakuta has not ended. The manga continues to be serialized in Weekly Shōnen Magazine with new chapters released regularly."
                }
              },
              {
                "@type": "Question",
                "name": "When did Gachiakuta manga come out?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gachiakuta manga began serialization in 2022 in Weekly Shōnen Magazine, published by Kodansha. It was created by author and illustrator Kei Urana."
                }
              },
              {
                "@type": "Question",
                "name": "Who is the author of Gachiakuta manga?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gachiakuta is written and illustrated by Kei Urana. It has been serialized in Weekly Shōnen Magazine since 2022."
                }
              },
              {
                "@type": "Question",
                "name": "How many volumes does Gachiakuta manga have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gachiakuta manga has multiple compiled volumes released by Kodansha. The series is ongoing, so new volumes are released periodically as chapters accumulate."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between Gachiakuta anime and manga?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Gachiakuta manga offers more detailed art and additional story content that the anime condenses or simplifies. The manga is the original source material and is ahead of the anime adaptation in terms of story progression."
                }
              }
            ]
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-bb-dark py-20">
        <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
          <img
            src="/gachiakuta-manga-cover.jpg"
            alt="Gachiakuta Manga Official Cover Artwork - Read Online Free"
            width="1920"
            height="1080"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bb-dark via-bb-dark/60 to-transparent z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

          <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-4 drop-shadow-2xl tracking-tighter text-center">
            GACHIAKUTA <span className="text-bb-blue">MANGA</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl text-center mb-10 font-light leading-relaxed">
            Read Gachiakuta Manga Online In High Quality, All Chapters and Volumes in English With HD scans and No Sign-Up Required.
          </p>

          {/* Info Card - Dark by default, Light/Dark supported if needed, but keeping Dark for Hero */}
          <div className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 mb-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Left Column: Stats & Meta */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">

                {/* Rating Block */}
                <div className="col-span-2 sm:col-span-4 flex items-center gap-3 mb-2" aria-label="rated 4.8 out of 5 stars">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4].map(i => <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />)}
                    <Star className="fill-yellow-400/30 text-yellow-400 w-5 h-5" />
                  </div>
                  <span className="text-3xl font-bold text-white">4.8</span>
                  <span className="text-sm text-gray-400 mt-1 ml-2">Average 4.8 / 5 out of 45k</span>
                </div>

                {/* Info Fields */}
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Rank</span>
                  <span className="text-white font-medium">1st, 20M views</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Release</span>
                  <span className="text-white font-medium">2022</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Status</span>
                  <span className="text-green-400 font-bold">Ongoing</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Type</span>
                  <span className="text-white font-medium">Action, Fantasy, Urban Fantasy</span>
                </div>

                <div className="col-span-2 sm:col-span-4 flex flex-col gap-3 mt-2">
                  <div className="flex flex-wrap gap-2 items-center border-t border-white/5 pt-3">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mr-2">Author(s):</span>
                    <span className="text-white hover:text-bb-blue cursor-pointer transition-colors">Kei Urana</span>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center border-t border-white/5 pt-3">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mr-2">Genre(s):</span>
                    {["Action","Fantasy","Urban Fantasy","Shonen","Sci-Fi"].map(g => (
                      <span key={g} className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">
                        {g},
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 items-start border-t border-white/5 pt-3">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Synopsis:</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Falsely accused of a crime, Ludo is thrown into the Abyss. In this waste-filled wasteland, he joins the Janitors, using trash as Jinki weapons to fight beasts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Actions/Social Proof */}
              <div className="flex lg:flex-col justify-center items-center gap-8 min-w-[140px]">
                <div className="text-center group w-full">
                  <MessageCircle className="w-8 h-8 text-gray-500 group-hover:text-bb-blue mx-auto mb-2 transition-colors" />
                  <span className="block text-2xl font-bold text-white">256</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Comments</span>
                </div>
                <div className="w-px h-12 bg-white/10 lg:w-16 lg:h-px"></div>
                <button
                  onClick={() => {
                    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
                    alert(`Press ${isMac ? 'Cmd' : 'Ctrl'} + D to bookmark this page!`);
                  }}
                  className="text-center group cursor-pointer w-full focus:outline-none"
                  aria-label="Bookmark this page"
                >
                  <Bookmark className="w-8 h-8 text-bb-blue mx-auto mb-2 fill-bb-blue group-hover:scale-110 transition-transform" />
                  <span className="block text-2xl font-bold text-white">1k</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide group-hover:text-bb-blue transition-colors">Bookmark Now</span>
                </button>
              </div>
            </div>
          </div>

          {latestChapter && (
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              {continueChapter ? (
                <Link
                  to={`/chapter/${continueChapter}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-bb-blue hover:bg-blue-700 shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
                >
                  ▶ Continue — Chapter {continueChapter}
                </Link>
              ) : (
                <Link
                  to="/chapter/1"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-bb-blue hover:bg-blue-700 shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
                >
                  Start Reading — Chapter 1
                </Link>
              )}
              <Link
                to={`/chapter/${latestChapter.number}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-lg font-bold rounded-lg text-white hover:bg-white hover:text-black transition-all"
              >
                Latest: Chapter {latestChapter.number}
              </Link>
            </div>
          )}
        </div>
      </section >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Latest Chapters Grid */}
        {/* Latest Chapters Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <BookOpen className="text-bb-blue" /> Latest Releases
            </h2>
            <Link to="/manga" className="text-bb-blue hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {chapters.slice(0, 12).map((chapter) => (
              <Link
                key={chapter.id}
                to={`/chapter/${chapter.number}`}
                className="group relative flex flex-col justify-between h-full bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-200 dark:border-white/10 p-5 hover:border-bb-blue/50 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-bb-blue/10"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-bb-blue uppercase tracking-wider">
                    Chapter {chapter.number}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-bb-blue transition-colors line-clamp-2">
                    {chapter.title}
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Read Now</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-bb-blue group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-sm">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">About Gachiakuta</h2>
            <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 max-w-none space-y-4">
              <p>
                <strong className="text-gray-900 dark:text-white">Gachiakuta</strong> is an acclaimed manga series written and illustrated by <strong className="text-gray-900 dark:text-white">Kei Urana</strong>. It has been serialized in <strong className="text-gray-900 dark:text-white">Weekly Shōnen Magazine</strong> since <strong className="text-gray-900 dark:text-white">2022</strong>, published by Kodansha. The story is an ongoing action-fantasy series that has quickly built a global fanbase.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Synopsis</h3>
              <p>
                Falsely accused of a crime, <strong className="text-gray-900 dark:text-white">Ludo (Rudo)</strong> is thrown into the Abyss — a massive trash-filled wasteland beneath society. In this brutal underworld, he discovers the <strong className="text-gray-900 dark:text-white">Janitors</strong>, warriors who use discarded trash as <strong className="text-gray-900 dark:text-white">Jinki</strong> weapons to fight monstrous beasts called <strong className="text-gray-900 dark:text-white">Enjin</strong>. Fuelled by rage and a desire for truth, Ludo embarks on a journey that will shake the foundations of both worlds.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Key Characters</h3>
              <p>
                The series features a rich cast including <strong className="text-gray-900 dark:text-white">Rudo (Ludo)</strong> — the hot-headed protagonist, <strong className="text-gray-900 dark:text-white">Enjin</strong> — his powerful Jinki companion, <strong className="text-gray-900 dark:text-white">Regto</strong> — a senior Janitor, and <strong className="text-gray-900 dark:text-white">Amo</strong> — a pivotal character in the series' major arcs.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">About the Gachiakuta Manga Author — Kei Urana</h3>
              <p>
                <strong className="text-gray-900 dark:text-white">Kei Urana</strong> is both the writer and illustrator of Gachiakuta. Urana's dynamic art style — featuring intense action panels, expressive characters, and detailed world-building — has been praised as one of the standout qualities of the series. Gachiakuta is Urana's major serialized work in Weekly Shōnen Magazine.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Gachiakuta Manga Covers &amp; Art</h3>
              <p>
                The <strong className="text-gray-900 dark:text-white">Gachiakuta manga covers</strong> and interior art are known for their striking visual design, with bold color palettes and detailed character artwork. Each volume cover showcases Kei Urana's distinctive illustration style. Iconic <strong className="text-gray-900 dark:text-white">Gachiakuta manga panels</strong> have become popular fan favorites shared across social media.
              </p>
            </div>
          </div>
        </section>

        {/* Major Story Arcs */}
        {/* FAQ Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="text-bb-blue" />
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Is the Gachiakuta Manga Finished?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                No, <strong>Gachiakuta manga is not finished</strong>. The series is currently ongoing and new chapters continue to be released in <strong>Weekly Shōnen Magazine</strong> by Kei Urana. You can read all available chapters here free.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Did Gachiakuta Manga End?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                No, <strong>Gachiakuta has not ended</strong>. The manga is still being serialized with new chapters released regularly. The story is actively ongoing with major plot arcs still unfolding.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">When Did Gachiakuta Manga Come Out?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                <strong>Gachiakuta manga</strong> began serialization in <strong>2022</strong> in Weekly Shōnen Magazine, published by Kodansha. It was created by <strong>Kei Urana</strong>, who serves as both author and illustrator.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Who is the Gachiakuta Manga Author?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                <strong>Gachiakuta</strong> is written and illustrated by <strong>Kei Urana</strong>. Urana is the sole creator responsible for both the story and artwork of the series, which has been serialized in Weekly Shōnen Magazine since 2022.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">How Many Volumes Does Gachiakuta Have?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                <strong>Gachiakuta manga volumes</strong> are released by Kodansha as the series progresses. Since the manga is ongoing, new compiled volumes are published periodically. Individual chapters can be read online here as they release.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Gachiakuta Anime vs Manga — Which is Better?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                The <strong>Gachiakuta manga</strong> is the original source material and offers more detailed panels, art, and story content than the anime adaptation. Manga readers are significantly ahead of the anime in terms of plot progression.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Where to Read Gachiakuta Manga Free Online?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                You can <strong>read Gachiakuta manga online free</strong> right here at readgachiakutamanga.online. All chapters are available in high quality with no sign-up required. Start with <Link to="/chapter/1" className="text-bb-blue hover:underline">Chapter 1</Link>.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Where should I start reading?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                If you are new to the series, start with <Link to="/chapter/1" className="text-bb-blue hover:underline">Chapter 1</Link>. The story builds progressively, so starting from the beginning is highly recommended to fully appreciate the character development and relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Improved SEO Content Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-sm">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">Read Gachiakuta Manga Online Free</h2>
            <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 max-w-none space-y-4">
              <p>
                Welcome to <strong>readgachiakutamanga.online</strong> — your go-to site to <strong className="text-bb-blue">read Gachiakuta manga online free</strong>. We provide high-quality scans of every chapter the moment they release. No registration, no paywalls — just the <strong>Gachiakuta manga</strong> you want, instantly.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Read Gachiakuta Manga Chapters Online</h3>
              <p>
                Our complete <strong>Gachiakuta manga chapter</strong> library covers everything from <Link to="/chapter/1" className="text-bb-blue hover:underline">Chapter 1</Link> through the latest release. Browse all <strong>Gachiakuta manga chapters</strong> on our <Link to="/manga" className="text-bb-blue hover:underline">manga list page</Link>. Each chapter loads fast with optimized HD scans for the best <strong>Gachiakuta manga online</strong> reading experience on any device.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Gachiakuta Manga Series Background</h3>
              <p>
                Created by <strong>Kei Urana</strong>, <em>Gachiakuta</em> launched in Weekly Shōnen Magazine in 2022 and quickly rose to prominence. The series blends action, dark fantasy, and social commentary into a gripping story about survival, identity, and justice. Its <strong>Gachiakuta manga art</strong> — especially the dynamic battle panels — has made it a fan favorite for screenshot collections and artwork tributes worldwide. Physical <strong>Gachiakuta manga volumes</strong> are available through retailers like Amazon for collectors who prefer physical copies.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* More Manga Network Banner */}
      <div className="bg-[#0d1117] border-t border-white/5 py-14 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <span className="text-bb-blue text-xs font-bold uppercase tracking-widest block mb-2">More from Our Network</span>
          <h2 className="text-2xl font-heading font-bold text-white">Also Reading?</h2>
          <p className="text-gray-500 text-sm mt-2">Explore more top manga series — all free, all high quality.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { name: 'Kagurabachi', url: 'https://kagurabachimanga.online/', desc: 'Enchanted blade revenge', emoji: '⚔️' },
            { name: 'Blue Lock', url: 'https://readbluelockmanga.online/', desc: 'Soccer & ego battle', emoji: '⚽' },
            { name: 'Dandadan', url: 'https://readdandadanmanga.online/', desc: 'Aliens & ghosts chaos', emoji: '👾' },
            { name: 'Nano Machine', url: 'https://nanomachinemanga.online/', desc: 'Futuristic murim rise', emoji: '⚙️' },
            { name: 'Kingdom', url: 'https://readkingdommanga.online/', desc: '876 ch. epic history', emoji: '🏯' },
          ].map(site => (
            <a key={site.url} href={site.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 p-5 bg-white/3 border border-white/5 rounded-xl hover:border-bb-blue/30 hover:bg-bb-blue/5 transition-all text-center">
              <span className="text-3xl">{site.emoji}</span>
              <span className="font-bold text-white text-sm group-hover:text-bb-blue transition-colors">{site.name}</span>
              <span className="text-xs text-gray-500">{site.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;