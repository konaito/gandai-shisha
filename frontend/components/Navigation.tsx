"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { id: "why-shisha", label: "なぜシーシャか" },
  { id: "story", label: "なぜ作るのか" },
  { id: "about", label: "誰が作るのか" },
  { id: "concept", label: "ビジネスモデル" },
  { id: "permits", label: "許認可" },
  { id: "pricing", label: "料金設計" },
  { id: "unit-economics", label: "原価構造" },
  { id: "revenue", label: "収益シミュレーション" },
  { id: "properties", label: "候補物件" },
  { id: "competitors", label: "競合分析" },
  { id: "real-cases", label: "実例と教訓" },
  { id: "ventilation", label: "換気設備" },
  { id: "risks", label: "運営リスク" },
  { id: "strategy", label: "戦略" },
  { id: "negotiation", label: "交渉術" },
  { id: "investment", label: "コスト計画" },
  { id: "action-plan", label: "やることリスト" },
  { id: "assessment", label: "総合評価" },
  { id: "follow", label: "進捗を追う" },
];

export function Sidebar() {
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
      </nav>
    </aside>
  );
}

export function MobileNav() {
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
