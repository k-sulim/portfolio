import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CaseStudyICatch.css';
import './CaseStudyGrowMe.css';

export default function CaseStudyGrowMe() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="cs-page">

      {/* ── Sticky mini nav ── */}
      <header className="cs-nav">
        <div className="cs-wrap cs-nav-inner">
          <div className="cs-brand">GrowMe</div>
          <nav className="cs-nav-links">
            <a href="#gm-plan">기획</a>
            <a href="#gm-crisis">위기</a>
            <a href="#gm-response">대응</a>
            <a href="#gm-reflection">배운 것</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="cs-band cream cs-hero">
        <div className="cs-wrap">
          <span className="cs-overline">자기성장 멘탈헬스 앱 · 구름톤 유니브 해커톤</span>
          <h1>
            기획자로 시작해<br />
            <em>프론트까지</em> 완성했습니다
          </h1>
          <div className="cs-hero-row">
            <p className="cs-lede">
              해커톤 2일 차, 프론트엔드 담당자가 이탈했습니다.
              기획자로 합류했지만 기획 문서를 들고 직접 화면을 구현했습니다.
              계획 밖의 역할 확장이 가장 큰 성장이 됐습니다.
              <span className="cs-en-note">
                GrowMe — a mental wellness app built under unexpected role expansion.
              </span>
            </p>
            <div className="cs-chips">
              <span className="cs-tag navy">기획 · 프론트엔드 (돌발 겸임)</span>
              <span className="cs-tag">5인 팀</span>
              <span className="cs-tag green">2025.09</span>
              <span className="cs-tag gm-crisis-chip">⚡ 돌발 역할 확장</span>
            </div>
          </div>
          <div className="cs-hero-img">
            <img src={process.env.PUBLIC_URL + '/images/growme.webp'} alt="GrowMe 앱 메인 화면" />
          </div>
        </div>
      </section>

      {/* ── Original Plan ── */}
      <section id="gm-plan" className="cs-band white">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">The Plan</div>
            <h2>원래 맡은 역할: 서비스 기획</h2>
            <p className="cs-en-sub">What was planned — before day 2</p>
          </div>

          <div className="gm-plan-grid">
            <div className="gm-plan-card">
              <h4>서비스 기획</h4>
              <p>자기성장 과정에서 동기부여와 멘탈 관리가 어렵다는 문제를 정의하고, 사용자 플로우와 핵심 기능을 설계했습니다.</p>
            </div>
            <div className="gm-plan-card">
              <h4>핵심 기능 정의</h4>
              <ul className="gm-feature-list">
                <li>기분 기록 — 매일 감정 상태 트래킹</li>
                <li>식물 성장 게이미피케이션 — 꾸준한 기록 동기 부여</li>
                <li>AI 캐릭터 '그루' 채팅 — 위로와 대화</li>
                <li>익명 커뮤니티 — 비슷한 고민 공유</li>
              </ul>
            </div>
            <div className="gm-plan-card gm-plan-original">
              <div className="gm-plan-role-label">원래 계획</div>
              <p className="gm-plan-role">기획 전담<br /><span>개발은 다른 팀원이</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Crisis Timeline (navy) ── */}
      <section id="gm-crisis" className="cs-band navy">
        <div className="cs-wrap">
          <div className="cs-bighead" style={{ paddingTop: 0 }}>
            <div className="cs-label">What Happened</div>
            <h2>D+2, 예상치 못한 일이 생겼다</h2>
            <p className="cs-en-sub">A timeline of the unexpected</p>
          </div>

          <div className="gm-timeline">
            <div className="gm-event">
              <div className="gm-event-left">
                <div className="gm-event-day">Day 0</div>
              </div>
              <div className="gm-event-dot gm-dot-normal"></div>
              <div className="gm-event-body">
                <h4>해커톤 시작 · 기획자로 합류</h4>
                <p>팀 구성 완료. 서비스 기획 담당으로 합류. 사용자 플로우와 기능 정의를 시작했습니다.</p>
              </div>
            </div>
            <div className="gm-event">
              <div className="gm-event-left">
                <div className="gm-event-day gm-day-crisis">Day 2</div>
              </div>
              <div className="gm-event-dot gm-dot-crisis"></div>
              <div className="gm-event-body">
                <h4>프론트엔드 담당자 연락 두절</h4>
                <p>화면 구현 담당자와 연락이 닿지 않았습니다. 팀 전체가 멈출 수 있는 위기였습니다.</p>
              </div>
            </div>
            <div className="gm-event">
              <div className="gm-event-left">
                <div className="gm-event-day">Day 2</div>
              </div>
              <div className="gm-event-dot gm-dot-action"></div>
              <div className="gm-event-body">
                <h4>결정: 내가 직접 한다</h4>
                <p>기획 문서를 기반으로 직접 화면을 구현하기로 결정. React로 화면 개발을 시작했습니다.</p>
              </div>
            </div>
            <div className="gm-event">
              <div className="gm-event-left">
                <div className="gm-event-day">최종</div>
              </div>
              <div className="gm-event-dot gm-dot-success"></div>
              <div className="gm-event-body">
                <h4>기획 + 프론트엔드 동시에 완성</h4>
                <p>데모데이까지 서비스를 완성해 발표. 기획자가 직접 화면을 만드는 end-to-end 경험을 했습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Response: 어떻게 대응했나 ── */}
      <section id="gm-response" className="cs-band white">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">How I Responded</div>
            <h2>기획 문서가 개발 가이드가 됐습니다</h2>
            <p className="cs-en-sub">Turning planning artifacts into implementation</p>
          </div>

          <div className="gm-response-list">
            <div className="gm-response-item">
              <div className="gm-resp-num">01</div>
              <div className="gm-resp-body">
                <h4>기획 문서 → 화면 구현</h4>
                <p>사전에 작성한 사용자 플로우와 기능 정의를 그대로 코드로 옮겼습니다. 기획이 명확했기 때문에 구현 방향을 빠르게 잡을 수 있었습니다.</p>
              </div>
            </div>
            <div className="gm-response-item">
              <div className="gm-resp-num">02</div>
              <div className="gm-resp-body">
                <h4>백엔드 팀과 API 연동 협업</h4>
                <p>화면을 만들면서 동시에 백엔드 팀원들과 API 스펙을 맞추고 데이터 흐름을 조율했습니다. 기획자와 개발자 사이에서 언어를 통역하는 역할을 했습니다.</p>
              </div>
            </div>
            <div className="gm-response-item">
              <div className="gm-resp-num">03</div>
              <div className="gm-resp-body">
                <h4>기술 구현 난이도 사전 검토의 중요성 인식</h4>
                <p>이 경험을 통해 기획 단계에서 기술 구현 가능성을 함께 검토하는 것이 얼마나 중요한지 체득했습니다. 기획자가 개발을 이해해야 하는 이유를 실감했습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section id="gm-reflection" className="cs-band cream">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">Reflection</div>
            <h2>예상 밖의 경험에서 배운 것</h2>
            <p className="cs-en-sub">What unexpected challenges taught me</p>
          </div>

          <div className="gm-reflection-cards">
            <div className="gm-reflection-card">
              <div className="gm-ref-icon">🔁</div>
              <h4>기획과 개발은 연결되어 있다</h4>
              <p>직접 구현해보며 기획 의도가 코드로 어떻게 표현되는지 체감했습니다. 기획자가 개발을 이해할수록 더 나은 기획을 할 수 있습니다.</p>
            </div>
            <div className="gm-reflection-card">
              <div className="gm-ref-icon">⚡</div>
              <h4>돌발 상황은 가장 빠른 성장의 기회</h4>
              <p>편안한 역할 안에 있었다면 프론트엔드를 직접 할 기회가 없었을 것입니다. 위기가 오히려 역량의 경계를 넓혔습니다.</p>
            </div>
            <div className="gm-reflection-card">
              <div className="gm-ref-icon">📐</div>
              <h4>기획 단계에서 기술 검토 필수</h4>
              <p>구현 난이도를 사전에 파악했다면 더 현실적인 기획이 가능했을 것입니다. PM은 기술과 기획 사이를 잇는 사람이어야 합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 화면 스크린샷 ── */}
      <section className="cs-band cream">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">Screenshots</div>
            <h2>앱 화면</h2>
          </div>
          <div className="cs-screens-gallery">
            <img src={process.env.PUBLIC_URL + '/images/growme2.png'} alt="GrowMe 화면 2" />
            <img src={process.env.PUBLIC_URL + '/images/growme3.webp'} alt="GrowMe 화면 3" />
            <img src={process.env.PUBLIC_URL + '/images/growme4.webp'} alt="GrowMe 화면 4" />
            <img src={process.env.PUBLIC_URL + '/images/growme5.webp'} alt="GrowMe 화면 5" />
          </div>
        </div>
      </section>

      {/* ── My Role ── */}
      <section className="cs-band navy cs-role-section">
        <div className="cs-wrap">
          <div className="cs-label" style={{ color: 'var(--cs-blue)' }}>My Role · Adaptability</div>
          <h2>계획 밖의 역할까지 맡아, 끝까지 책임졌습니다</h2>
          <p className="cs-en-sub">Planning, pivoting, and shipping — all in one hackathon.</p>
          <div className="cs-role-flow">
            <span className="cs-rf">서비스 기획</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">돌발 역할 확장</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">프론트 개발</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">API 협업 완성</span>
          </div>
          <div className="cs-role-grid">
            <div className="cs-rc">
              <div className="cs-rn">01 Planning</div>
              <h4>서비스 기획 · 플로우 설계</h4>
              <p>사용자 니즈 분석부터 핵심 기능 정의, 사용자 플로우 설계까지 기획 전반을 담당했습니다.</p>
            </div>
            <div className="cs-rc">
              <div className="cs-rn">02 Execution</div>
              <h4>프론트엔드 화면 개발</h4>
              <p>기획 문서를 기반으로 React 화면을 직접 구현하고, 백엔드 팀과 API 연동을 조율했습니다.</p>
            </div>
            <div className="cs-rc">
              <div className="cs-rn">03 Growth</div>
              <h4>End-to-end PM 역량 확인</h4>
              <p>기획에서 개발까지 전 과정을 경험하며 기획자가 개발을 이해해야 하는 이유를 직접 체득했습니다.</p>
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