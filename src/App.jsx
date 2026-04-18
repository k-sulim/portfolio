import { BrowserRouter, Route, Routes, Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store, { toggleTheme, closeMobileMenu, toggleMobileMenu } from "./store/store";
import { useVisitor } from "./hooks/useApi";
import Index from "./Component/Index";
import {About} from "./Component/About";
import Timeline from "./Component/Timeline";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import ProjectModal from "./Component/ProjectModal";
import "./App.css";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);
  const { isMobileMenuOpen } = useSelector((state) => state.ui);
  const { count } = useSelector((state) => state.visitor);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    dispatch(closeMobileMenu());
  }, [location, dispatch]);

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
  ];

  return (
      <nav ref={navRef} className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            <span className="logo-bracket">&lt;</span>
            KSL
            <span className="logo-bracket">/&gt;</span>
          </Link>

          <div className="nav-links">
            {navLinks.map((link) => (
                <Link
                    key={link.path}
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.label}
                </Link>
            ))}
          </div>

          <div className="nav-controls">
          <span className="visitor-count">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            {count}
          </span>

            <button
                className="theme-toggle"
                onClick={() => dispatch(toggleTheme())}
                aria-label="Toggle theme"
            >
              {mode === 'light' ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
              ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
              )}
            </button>

            <button
                className="mobile-menu-btn"
                onClick={() => dispatch(toggleMobileMenu())}
                aria-label="Toggle menu"
            >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
              <Link
                  key={link.path}
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
          ))}
        </div>
      </nav>
  );
}

function Footer() {
  return (
      <footer>
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-name">© 2025 Kim Sul-im</p>
            <p className="footer-desc">데이터로 문제를 해결하는 개발자</p>
          </div>
          <div className="footer-links">
            <a href="mailto:joy06270@naver.com" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a href="https://github.com/k-sulim" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
  );
}

function AppContent() {
  const { mode } = useSelector((state) => state.theme);
  const { isModalOpen } = useSelector((state) => state.ui);

  useVisitor();

  useEffect(() => {
    document.body.setAttribute('data-theme', mode);
  }, [mode]);

  return (
      <div className={`app ${mode}`}>
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>

        <Footer />

        {isModalOpen && <ProjectModal />}
      </div>
  );
}

export default function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </Provider>
  );
}