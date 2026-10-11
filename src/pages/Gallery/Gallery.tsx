import { useState, useEffect, useMemo, useCallback } from 'react';
import { ALBUMS, GALLERY_ITEMS, type GalleryItem } from './galleryData';

export function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  // Filter items
  const filteredPhotos = useMemo(() => {
    if (selectedAlbum === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.albumKey === selectedAlbum);
  }, [selectedAlbum]);

  // Current active index in filtered list
  const activeIndex = useMemo(() => {
    if (!activePhoto) return -1;
    return filteredPhotos.findIndex((p) => p.id === activePhoto.id);
  }, [activePhoto, filteredPhotos]);

  // Handlers for next / prev in lightbox
  const showNext = useCallback(() => {
    if (activeIndex === -1 || filteredPhotos.length === 0) return;
    const nextIdx = (activeIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIdx]);
  }, [activeIndex, filteredPhotos]);

  const showPrev = useCallback(() => {
    if (activeIndex === -1 || filteredPhotos.length === 0) return;
    const prevIdx = (activeIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIdx]);
  }, [activeIndex, filteredPhotos]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!activePhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePhoto(null);
      else if (e.key === 'ArrowRight') showNext();
      else if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto, showNext, showPrev]);

  // Current active album metadata if an album is selected
  const activeAlbumMeta = useMemo(() => {
    if (selectedAlbum === 'all') return null;
    return ALBUMS.find((a) => a.key === selectedAlbum) || null;
  }, [selectedAlbum]);

  return (
    <div className="relative min-h-screen bg-[#06141a] text-zinc-100 font-sans selection:bg-blue-600 selection:text-white pt-24 pb-28 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-blue-600/15 via-emerald-600/10 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-700/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-mono tracking-wider uppercase mb-5 backdrop-blur-md shadow-lg shadow-blue-950/50">
            <svg
              className="w-3.5 h-3.5 text-blue-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <span>TCET Capture &times; S4DS Archives</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-5 font-['Nippo',sans-serif]">
            Visual{' '}
            <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
              Chronicles
            </span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-['ArsenalSC',sans-serif] tracking-wide">
            Moments, milestones, and high-energy breakthroughs from the Even Semester 2026: Clash of
            Prompt, Analytrix Datathon &amp; Conclave, and Zephyr Days 1&ndash;3.
          </p>

          {/* TCET Capture Credit Banner */}
          <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-3 p-2 px-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 backdrop-blur-md">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <span>📸</span> Captured by TCET Capture
            </span>
            <span className="text-zinc-600 hidden sm:inline">&bull;</span>
            <a
              href="http://instagram.com/tcet_capture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors font-medium"
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>@tcet_capture</span>
            </a>
            <span className="text-zinc-600 hidden sm:inline">&bull;</span>
            <a
              href="mailto:tcap@tcetmumbai.in"
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-[11px]"
            >
              <span>tcap@tcetmumbai.in</span>
            </a>
          </div>
        </header>

        {/* Albums Showcase Grid */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Featured Event Albums ({ALBUMS.length})
            </h2>
            <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
              Click album to filter curated shots
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALBUMS.map((album) => {
              const isSelected = selectedAlbum === album.key;
              return (
                <div
                  key={album.key}
                  onClick={() => setSelectedAlbum(isSelected ? 'all' : album.key)}
                  className={`group relative rounded-2xl overflow-hidden p-4 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-blue-950/70 to-zinc-900 border-blue-500 shadow-xl shadow-blue-900/30 ring-1 ring-blue-500'
                      : 'bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/90'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-1.5">
                        {album.category}
                      </span>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {album.title}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-1">{album.subtitle}</p>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800/80 px-2 py-1 rounded-md border border-zinc-700/60 shrink-0">
                      {album.photoCount}+ photos
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
                    {album.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80 text-xs">
                    <span
                      className={`font-mono text-[11px] font-medium transition-colors ${isSelected ? 'text-blue-400' : 'text-zinc-400 group-hover:text-white'}`}
                    >
                      {isSelected ? '✓ Showing Selected' : 'Filter Photos'}
                    </span>
                    <a
                      href={album.photosAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors underline-offset-4 hover:underline"
                    >
                      <span>Full Album</span>
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Filter Toolbar */}
        <section className="sticky top-20 z-30 mb-8 py-3 bg-[#06141a]/90 backdrop-blur-xl border-y border-zinc-800/80">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedAlbum('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
                  selectedAlbum === 'all'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                All Moments ({GALLERY_ITEMS.length})
              </button>
              {ALBUMS.map((alb) => (
                <button
                  key={alb.key}
                  type="button"
                  onClick={() => setSelectedAlbum(alb.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
                    selectedAlbum === alb.key
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {alb.title.replace('Zephyr 2026 - ', '')}
                </button>
              ))}
            </div>

            {activeAlbumMeta && (
              <a
                href={activeAlbumMeta.photosAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-cyan-900/50 transition-colors shrink-0"
              >
                <span>View Google Photos Album ({activeAlbumMeta.photoCount}+)</span>
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </section>

        {/* Curated Photos Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800/80 shadow-lg hover:shadow-2xl hover:border-zinc-700 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative w-full aspect-[4/3] bg-zinc-950 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="w-full flex items-center justify-between text-xs text-white">
                      <span className="font-mono text-cyan-300 text-[11px] flex items-center gap-1">
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="15 3 21 3 21 9" />
                          <polyline points="9 21 3 21 3 15" />
                          <line x1="21" y1="3" x2="14" y2="10" />
                          <line x1="3" y1="21" x2="10" y2="14" />
                        </svg>
                        Expand Lightbox
                      </span>
                      <span className="text-zinc-400 text-[11px] font-mono">
                        {item.width}&times;{item.height}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-4 bg-zinc-900/90 border-t border-zinc-800/70 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mb-1 font-['Technor',sans-serif]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-zinc-800/50 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>{item.albumTitle}</span>
                    <span className="text-blue-400 group-hover:translate-x-0.5 transition-transform">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-20 text-zinc-500 font-mono text-sm">
              No photos found in this category.
            </div>
          )}
        </section>

        {/* Bottom TCET Capture Showcase Card */}
        <section className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-zinc-900 to-emerald-950/30 border border-zinc-800 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <span className="text-2xl mb-2 inline-block">📸</span>
            <h3 className="text-2xl font-bold text-white mb-2">
              TCET Capture &mdash; Official Media Team
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
              Every photo in this gallery was captured with dedication and artistry by the TCET
              Capture crew. Follow their work and explore the complete event archives.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="http://instagram.com/tcet_capture"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-semibold shadow-lg shadow-pink-600/20 hover:scale-105 transition-transform"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Follow on Instagram</span>
              </a>
              <a
                href="mailto:tcap@tcetmumbai.in"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Contact tcap@tcetmumbai.in</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-2xl transition-opacity animate-in fade-in"
          onClick={() => setActivePhoto(null)}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-zinc-800/80 bg-zinc-900/90 text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {activePhoto.category}
                </span>
                <span className="font-mono text-zinc-400">
                  Photo {activeIndex + 1} of {filteredPhotos.length}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activePhoto.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-zinc-400 hover:text-white font-mono transition-colors text-[11px]"
                >
                  <span>Open Full Size</span>
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Photo View with Navigation Chevrons */}
            <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-transform active:scale-90 cursor-pointer shadow-xl backdrop-blur-md"
                aria-label="Previous photo"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-transform active:scale-90 cursor-pointer shadow-xl backdrop-blur-md"
                aria-label="Next photo"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Bottom Caption & Album Link */}
            <div className="p-4 sm:p-5 bg-zinc-900 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="max-w-xl">
                <h3 className="text-base font-bold text-white mb-0.5">{activePhoto.title}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">{activePhoto.caption}</p>
                <span className="text-[11px] font-mono text-zinc-500 mt-1 block">
                  {activePhoto.albumTitle} &bull; {activePhoto.width}&times;{activePhoto.height} px
                </span>
              </div>

              {/* Link to Full Event Album in Google Photos */}
              {(() => {
                const alb = ALBUMS.find((a) => a.key === activePhoto.albumKey);
                if (!alb) return null;
                return (
                  <a
                    href={alb.photosAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium shadow-md shadow-blue-600/30 transition-colors shrink-0"
                  >
                    <span>Open Album ({alb.photoCount}+ Photos)</span>
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
