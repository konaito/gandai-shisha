"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { id: "story", label: "Story" },
  { id: "about", label: "About" },
  { id: "concept", label: "Concept" },
  { id: "permits", label: "Permits" },
  { id: "pricing", label: "Pricing" },
  { id: "unit-economics", label: "Unit Economics" },
  { id: "revenue", label: "Revenue" },
  { id: "properties", label: "Properties" },
  { id: "competitors", label: "Competitors" },
  { id: "real-cases", label: "Real Cases" },
  { id: "ventilation", label: "Ventilation" },
  { id: "risks", label: "Risks" },
  { id: "strategy", label: "Strategy" },
  { id: "negotiation", label: "Negotiation" },
  { id: "investment", label: "Investment" },
  { id: "action-plan", label: "Action Plan" },
  { id: "assessment", label: "Assessment" },
  { id: "follow", label: "Follow" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleNavClick = useCallback((id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleLogoClick = useCallback(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navLinks = NAV_ITEMS.map(({ id, label }) => (
    <a
      key={id}
      href={`#${id}`}
      className={activeSection === id ? "active" : ""}
      onClick={(e) => {
        e.preventDefault();
        handleNavClick(id);
      }}
    >
      {label}
    </a>
  ));

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar">
        <a
          href="#"
          className="sidebar-logo"
          onClick={(e) => { e.preventDefault(); handleLogoClick(); }}
        >
          BiPシーシャ
        </a>
        <nav className="sidebar-links">
          {navLinks}
        </nav>
      </aside>
      <div className="sidebar-spacer" />

      {/* Mobile top bar */}
      <div className="mobile-bar">
        <div className="mobile-bar-inner">
          <a
            href="#"
            className="mobile-bar-logo"
            onClick={(e) => { e.preventDefault(); handleLogoClick(); }}
          >
            BiPシーシャ
          </a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(id);
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
