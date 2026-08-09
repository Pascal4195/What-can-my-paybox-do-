import { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import CapabilityCard from "./components/CapabilityCard";
import CapabilityModal from "./components/CapabilityModal";
import HowItWorksFlow from "./components/HowItWorksFlow";
import ApprovalAutomation from "./components/ApprovalAutomation";
import OneMinuteGuide from "./components/OneMinuteGuide";
import SecuritySection from "./components/SecuritySection";
import EmptyState from "./components/EmptyState";
import Footer from "./components/Footer";
import { categories, capabilities } from "./data/capabilities";
import { searchCapabilities } from "./lib/search";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => searchCapabilities(capabilities, query), [query]);
  const isSearching = query.trim().length > 0;
  const selected = capabilities.find((c) => c.id === selectedId) ?? null;

  const scrollToCategory = (id: string) => {
    setQuery("");
    requestAnimationFrame(() => {
      document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero query={query} onQueryChange={setQuery} />
      <CategoryGrid onSelectCategory={scrollToCategory} />

      <section id="explore" className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        {isSearching ? (
          <>
            <p className="mb-6 text-center text-sm text-mist-500">
              {filtered.length} result{filtered.length === 1 ? "" : "s"} for "{query}"
            </p>
            {filtered.length === 0 ? (
              <EmptyState query={query} />
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((cap) => (
                  <CapabilityCard key={cap.id} capability={cap} onOpen={setSelectedId} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="space-y-16">
            {categories.map((cat) => {
              const items = capabilities.filter((c) => c.category === cat.id);
              if (items.length === 0) return null;
              return (
                <div key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-20">
                  <div className="mb-5 flex items-baseline justify-between">
                    <h2 className="font-display text-xl font-semibold text-mist-100 sm:text-2xl">{cat.name}</h2>
                    <span className="text-xs text-mist-600">{cat.blurb}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((cap) => (
                      <CapabilityCard key={cap.id} capability={cap} onOpen={setSelectedId} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <HowItWorksFlow />
      <ApprovalAutomation />
      <SecuritySection />
      <OneMinuteGuide />
      <Footer />

      <CapabilityModal capability={selected} onClose={() => setSelectedId(null)} />
    </div>
  );
}
