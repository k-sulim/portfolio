import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CaseStudyICatch.css';
import './CaseStudyFarm2you.css';

export default function CaseStudyFarm2you() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="cs-page">

      {/* ── Sticky mini nav ── */}
      <header className="cs-nav">
        <div className="cs-wrap cs-nav-inner">
          <div className="cs-brand">Farm2you</div>
          <nav className="cs-nav-links">
            <a href="#f2y-problem">시장 문제</a>
            <a href="#f2y-bridge">연결 전략</a>
            <a href="#f2y-craft">기획 산출물</a>
            <a href="#f2y-role">My Role</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="cs-band cream cs-hero">
        <div className="cs-wrap">
          <span className="cs-overline">농산물 직거래 플랫폼 · 구름톤 유니브 4기</span>
          <h1>
            농부와 소비자 사이의<br />
            <em>유통 마진</em>을 없앴습니다
          </h1>
          <div className="cs-hero-row">
            <p className="cs-lede">
              유통 과정에서 가격이 올라가는 구조로 농부는 낮은 수익을, 소비자는 높은 가격을 감당합니다.
              두 사용자군을 직접 연결하는 양면 시장 플랫폼을 기획하고 팀을 이끌었습니다.
              <span className="cs-en-note">
                Farm2you — B2C marketplace bridging farmers and consumers directly.
              </span>
            </p>
            <div className="cs-chips">
              <span className="cs-tag navy">기획 파트 리드</span>
              <span className="cs-tag">6인 팀</span>
              <span className="cs-tag green">2025.05</span>
              <span className="cs-tag">구름톤 유니브</span>
            </div>
          </div>
          <div className="cs-hero-img">
            <img src={process.env.PUBLIC_URL + '/images/farm2you.webp'} alt="Farm2you 농산물 직거래 플랫폼 메인 화면" />
          </div>
        </div>
      </section>

      {/* ── Dual Market Problem ── */}
      <section id="f2y-problem" className="cs-band white">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">Market Problem</div>
            <h2>같은 농산물, 다른 고통</h2>
            <p className="cs-en-sub">A structural inefficiency hurting both sides of the market</p>
          </div>

          <div className="f2y-dual">
            <div className="f2y-market-card f2y-farmer">
              <div className="f2y-market-label">농부 side</div>
              <h3>열심히 키워도 남는 게 없다</h3>
              <p>유통 단계가 길어질수록 농부에게 돌아오는 수익은 줄어듭니다. 여러 중간 단계를 거치며 마진이 쌓이고, 정작 생산자는 낮은 가격을 받습니다.</p>
              <ul className="f2y-pain-list">
                <li>복잡한 유통 단계로 수익률 저하</li>
                <li>직접 판로 개척의 어려움</li>
                <li>소비자 니즈를 알기 어려움</li>
              </ul>
            </div>
            <div className="f2y-bridge-arrow">↔</div>
            <div className="f2y-market-card f2y-consumer">
              <div className="f2y-market-label">소비자 side</div>
              <h3>신선한 농산물이 왜 이렇게 비쌀까</h3>
              <p>유통 마진이 소매가에 반영되어 소비자는 생산 원가보다 훨씬 높은 가격을 지불합니다. 생산지와 소비자 사이의 거리감도 신뢰를 낮춥니다.</p>
              <ul className="f2y-pain-list">
                <li>유통 마진으로 높아진 소매가</li>
                <li>생산지·농부 정보 불투명</li>
                <li>신선도 신뢰 어려움</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bridge Solution ── */}
      <section id="f2y-bridge" className="cs-band navy">
        <div className="cs-wrap">
          <div className="cs-bighead" style={{ paddingTop: 0 }}>
            <div className="cs-label">Solution Bridge</div>
            <h2>양면 시장을 하나로 연결하다</h2>
            <p className="cs-en-sub">How we connected both sides with one platform</p>
          </div>

          <div className="f2y-bridge-grid">
            <div className="f2y-bridge-card">
              <div className="f2y-bc-num">01</div>
              <h4>농부가 직접 올리는 마켓</h4>
              <p>생산자가 상품을 등록하고 가격을 직접 설정. 중간 단계를 없애 농부의 수익과 소비자 가격을 동시에 개선합니다.</p>
            </div>
            <div className="f2y-bridge-card">
              <div className="f2y-bc-num">02</div>
              <h4>농장 문의 → 카카오 채팅</h4>
              <p>소비자가 농장에 직접 문의할 수 있는 카카오 채널을 연동. 생산자-소비자 간 직접 소통 경로를 열었습니다.</p>
            </div>
            <div className="f2y-bridge-card">
              <div className="f2y-bc-num">03</div>
              <h4>상품 등록·관리 권한 생산자에게</h4>
              <p>농부가 직접 상품을 등록·수정·삭제할 수 있어 플랫폼이 중간자가 아닌 도구가 됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Planning Craft ── */}
      <section id="f2y-craft" className="cs-band white">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">Planning Craft</div>
            <h2>기획자로서 만든 것들</h2>
            <p className="cs-en-sub">Deliverables produced as planning lead</p>
          </div>

          <div className="f2y-deliverable-grid">
            <div className="f2y-deliverable">
              <div className="f2y-del-icon">📋</div>
              <h4>서비스 기획서</h4>
              <p>양면 시장 구조 분석, 핵심 기능 정의, 우선순위 결정 근거를 담은 기획 문서 작성</p>
            </div>
            <div className="f2y-deliverable">
              <div className="f2y-del-icon">🎨</div>
              <h4>Figma 프로토타입</h4>
              <p>농부용 화면(등록·관리)과 소비자용 화면(탐색·문의)을 모두 포함한 완성도 높은 프로토타입 제작</p>
            </div>
            <div className="f2y-deliverable">
              <div className="f2y-del-icon">📡</div>
              <h4>API 명세서</h4>
              <p>개발팀이 막힘 없이 진행할 수 있도록 엔드포인트, 요청/응답 형식을 상세히 정의</p>
            </div>
            <div className="f2y-deliverable">
              <div className="f2y-del-icon">🎤</div>
              <h4>발표 PPT · 발표</h4>
              <p>데모데이 발표 자료 제작 및 직접 발표. 양면 시장 가치 제안을 명확히 전달했습니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 화면 스크린샷 ── */}
      <section className="cs-band cream">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">Screenshots</div>
            <h2>서비스 화면</h2>
          </div>
          <div className="cs-screens-gallery">
            <img src={process.env.PUBLIC_URL + '/images/farm2you2.webp'} alt="Farm2you 화면 2" />
            <img src={process.env.PUBLIC_URL + '/images/farm2you3.webp'} alt="Farm2you 화면 3" />
            <img src={process.env.PUBLIC_URL + '/images/farm2you4.webp'} alt="Farm2you 화면 4" />
            <img src={process.env.PUBLIC_URL + '/images/farm2you5.webp'} alt="Farm2you 화면 5" />
          </div>
        </div>
      </section>

      {/* ── My Role ── */}
      <section id="f2y-role" className="cs-band navy cs-role-section">
        <div className="cs-wrap">
          <div className="cs-label" style={{ color: 'var(--cs-blue)' }}>My Role · Planning Lead</div>
          <h2>아이디어에서 발표까지, 기획의 처음과 끝을 책임졌습니다</h2>
          <p className="cs-en-sub">Led planning from market analysis to demo day presentation.</p>
          <div className="cs-role-flow">
            <span className="cs-rf">양면 시장 분석</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">기능 범위 결정</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">Figma · API명세</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">데모데이 발표</span>
          </div>
          <div className="cs-role-grid">
            <div className="cs-rc">
              <div className="cs-rn">01 Market Design</div>
              <h4>양면 시장 구조 설계</h4>
              <p>농부와 소비자 각 사용자군의 니즈를 분석하고, 두 쪽이 모두 이득을 얻는 서비스 구조를 설계했습니다.</p>
            </div>
            <div className="cs-rc">
              <div className="cs-rn">02 Scope Management</div>
              <h4>현실적인 기능 범위 조율</h4>
              <p>팀원 역량을 파악하며 실현 가능한 범위로 좁혀나갔고, 개발이 막히는 지점에서 대안 방향을 직접 제안했습니다.</p>
            </div>
            <div className="cs-rc">
              <div className="cs-rn">03 Full Deliverables</div>
              <h4>기획 산출물 전체 작성</h4>
              <p>기획서, Figma 프로토타입, API 명세서까지 모든 산출물을 직접 작성해 개발팀의 진행 기반을 마련했습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="cs-band cream cs-foot">
        <div className="cs-wrap">
          <button className="cs-back" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            ↑ 맨 위로
          </button>
          <div style={{ textAlign: 'right' }}>
            <div className="cs-nm">김수림 · Sulim Kim</div>
            <div className="cs-ct">Service Planner / PM &nbsp;·&nbsp; joy06270@naver.com</div>
            <div style={{ marginTop: 12 }}>
              <Link to="/projects" style={{ fontFamily: 'var(--cs-en)', fontSize: 13, color: 'var(--cs-blue-700)', textDecoration: 'none', fontWeight: 600 }}>
                ← 모든 프로젝트 보기
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}