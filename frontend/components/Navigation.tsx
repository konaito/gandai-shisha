"use client";

import { useState, useEffect, useCallback } from "react";

type NavEntry =
  | { type: "category"; label: string }
  | { type: "link"; id: string; label: string };

const NAV_ITEMS: NavEntry[] = [
  { type: "category", label: "Origin" },
  { type: "link", id: "why-shisha", label: "なぜシーシャか" },
  { type: "link", id: "story", label: "なぜ作るのか" },
  { type: "link", id: "about", label: "誰が作るのか" },
  { type: "category", label: "Business" },
  { type: "link", id: "concept", label: "ビジネスモデル" },
  { type: "link", id: "properties", label: "候補物件" },
  { type: "link", id: "competitors", label: "競合分析" },
  { type: "category", label: "Numbers" },
  { type: "link", id: "pricing", label: "料金設計" },
  { type: "link", id: "unit-economics", label: "原価構造" },
  { type: "link", id: "revenue", label: "収益シミュレーション" },
  { type: "link", id: "investment", label: "コスト計画" },
  { type: "category", label: "Operations" },
  { type: "link", id: "permits", label: "許認可" },
  { type: "link", id: "ventilation", label: "換気設備" },
  { type: "link", id: "risks", label: "運営リスク" },
  { type: "link", id: "real-cases", label: "実例と教訓" },
  { type: "category", label: "Execution" },
  { type: "link", id: "strategy", label: "戦略" },
  { type: "link", id: "negotiation", label: "交渉術" },
  { type: "link", id: "action-plan", label: "やることリスト" },
  { type: "category", label: "" },
  { type: "link", id: "assessment", label: "総合評価" },
  { type: "link", id: "follow", label: "進捗を追う" },
];

const NAV_LINKS = NAV_ITEMS.filter((item): item is Extract<NavEntry, { type: "link" }> => item.type === "link");

export function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach(({ id }) => {
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <aside className="sidebar">
      <a
        href="#"
        className="sidebar-logo"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        BiPシーシャ
      </a>
      <nav className="sidebar-links">
        {NAV_ITEMS.map((item, i) =>
          item.type === "category" ? (
            item.label ? (
              <div key={`cat-${i}`} className="sidebar-category">{item.label}</div>
            ) : (
              <div key={`cat-${i}`} className="sidebar-divider" />
            )
          ) : (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          )
        )}
      </nav>
    </aside>
  );
}

export function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach(({ id }) => {
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

  return (
    <>
      <button
        className="hamburger-float"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        {menuOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <a
          href="#"
          className="mobile-menu-logo"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          BiPシーシャ
        </a>
        {NAV_ITEMS.map((item, i) =>
          item.type === "category" ? (
            item.label ? (
              <div key={`cat-${i}`} className="mobile-menu-category">{item.label}</div>
            ) : (
              <div key={`cat-${i}`} className="mobile-menu-divider" />
            )
          ) : (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          )
        )}
      </div>
    </>
  );
}
