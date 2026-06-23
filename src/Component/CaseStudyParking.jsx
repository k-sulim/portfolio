import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CaseStudyICatch.css';
import './CaseStudyParking.css';

export default function CaseStudyParking() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="cs-page">

      {/* ── Sticky mini nav ── */}
      <header className="cs-nav">
        <div className="cs-wrap cs-nav-inner">
          <div className="cs-brand">스마트 주차 안내</div>
          <nav className="cs-nav-links">
            <a href="#pk-discovery">발견</a>
            <a href="#pk-decisions">결정들</a>
            <a href="#pk-challenge">위기</a>
            <a href="#pk-awards">수상</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="cs-band cream cs-hero">
        <div className="cs-wrap">
          <span className="cs-overline">AI 주차 안내 시스템 · P-학기제 프로젝트</span>
          <h1>
            교내 주차 문제를 <em>직접 발견</em>하고,<br />
            4주 만에 AI로 해결했습니다
          </h1>
          <div className="cs-hero-row">
            <p className="cs-lede">
              현장 관찰에서 시작해 YOLO AI와 Raspberry Pi로 완성한 실시간 주차 안내 시스템.
              폭설이라는 돌발 변수까지 극복하며 최우수상과 우수상을 모두 수상했습니다.
              <span className="cs-en-note">
                Smart Parking Guidance — field-observed problem, built and shipped in 4 weeks.
              </span>
            </p>
            <div className="cs-chips">
              <span className="cs-tag navy">아이디어 발의 · 기획 · 연결 담당</span>
              <span className="cs-tag">5인 팀</span>
              <span className="cs-tag green">2024.11 – 12</span>
              <span className="cs-tag pk-award-chip">🏆 최우수상 · 우수상</span>
            </div>
          </div>
          <div className="cs-hero-img">
            <img src={process.env.PUBLIC_URL + '/images/parking.png'} alt="스마트 주차 안내 시스템 메인 화면" />
          </div>
        </div>
      </section>

      {/* ── Discovery: 어떻게 발견했나 ── */}
      <section id="pk-discovery" className="cs-band white">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">Problem Discovery</div>
            <h2>현장에서 직접 발견한 문제</h2>
            <p className="cs-en-sub">Field observation → problem definition → solution ideation</p>
          </div>

          <div className="pk-discovery-story">
            <div className="pk-story-step">
              <div className="pk-step-num">01</div>
              <div className="pk-step-body">
                <h4>반복되는 순환 운전</h4>
                <p>교내 주차장이 만차인지 아닌지 알 방법이 없어, 운전자들이 직접 돌아다니며 확인해야 했습니다. 저도 같은 경험을 반복했습니다.</p>
              </div>
            </div>
            <div className="pk-story-step">
              <div className="pk-step-num">02</div>
              <div className="pk-step-body">
                <h4>아이디어 제안</h4>
                <p>카메라로 주차장을 촬영하고, AI가 빈 자리를 자동으로 감지해 앱으로 안내하면 해결할 수 있다고 판단했습니다. 팀에 직접 아이디어를 제안하고 방향을 정의했습니다.</p>
              </div>
            </div>
            <div className="pk-story-step">
              <div className="pk-step-num">03</div>
              <div className="pk-step-body">
                <h4>시스템 구조 설계</h4>
                <p>IoT 카메라(Raspberry Pi) + YOLO AI 감지 + 사용자 앱 + 관리자 웹으로 이어지는 전체 구조를 처음부터 직접 설계했습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Decisions ── */}
      <section id="pk-decisions" className="cs-band cream">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">Key Decisions</div>
            <h2>4주 안에 완성하기 위한 세 가지 결정</h2>
            <p className="cs-en-sub">Scope, structure, and tradeoffs made in a 4-week sprint</p>
          </div>

          <div className="pk-decision-grid">
            <div className="pk-decision-card">
              <div className="pk-dec-num">D.01</div>
              <h4>핵심 기능에만 집중</h4>
              <p>실시간 감지 → 앱 표시라는 핵심 흐름을 먼저 완성하고, 부가 기능은 이후로 미뤘습니다. 4주라는 시간 안에 동작하는 제품을 만드는 것이 목표였습니다.</p>
            </div>
            <div className="pk-decision-card">
              <div className="pk-dec-num">D.02</div>
              <h4>사용자 앱 + 관리자 웹 분리</h4>
              <p>일반 운전자와 주차장 관리자가 필요로 하는 정보가 다르다는 것을 기획 단계에서 파악해, 두 개의 UI로 구조를 분리했습니다.</p>
            </div>
            <div className="pk-decision-card">
              <div className="pk-dec-num">D.03</div>
              <h4>프론트 공백 직접 메우기</h4>
              <p>프론트엔드 담당자 공백 발생 시, 백엔드와 프론트의 연결 부분을 직접 주도해 전체 흐름이 끊기지 않도록 했습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenge: 폭설 위기 ── */}
      <section id="pk-challenge" className="cs-band navy">
        <div className="cs-wrap">
          <div className="cs-bighead" style={{ paddingTop: 0 }}>
            <div className="cs-label">Crisis &amp; Response</div>
            <h2>4주차, 폭설이 내렸다</h2>
            <p className="cs-en-sub">An unexpected variable — and how we handled it</p>
          </div>

          <div className="pk-challenge-row">
            <div className="pk-challenge-card pk-problem">
              <div className="pk-ch-label">문제</div>
              <h4>주차라인이 보이지 않는다</h4>
              <p>폭설로 주차선이 눈에 덮여 카메라에 잡히지 않았고, AI 감지율이 급격히 떨어졌습니다. 제출 1주일 전의 일이었습니다.</p>
            </div>
            <div className="pk-challenge-arrow">→</div>
            <div className="pk-challenge-card pk-action">
              <div className="pk-ch-label">대응</div>
              <h4>방수 케이스 + 모델 재학습</h4>
              <p>카메라 보호를 위해 방수 케이스를 직접 제작하고, 악천후 데이터를 추가 수집해 YOLO 모델을 재학습시켰습니다.</p>
            </div>
            <div className="pk-challenge-arrow">→</div>
            <div className="pk-challenge-card pk-result">
              <div className="pk-ch-label">결과</div>
              <h4>4주 내 완성 · 수상</h4>
              <p>빠른 반복 대응으로 제출 기한 내에 안정적인 시스템을 완성. P-학기제 최우수상과 학생경진대회 우수상을 모두 수상했습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section id="pk-awards" className="cs-band white">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">Outcomes</div>
            <h2>현장에서 발견하고, 현장에서 인정받았습니다</h2>
          </div>

          <div className="pk-award-row">
            <div className="pk-award-card">
              <div className="pk-trophy">🏆</div>
              <div className="pk-award-title">P-학기제 최우수상</div>
              <div className="pk-award-org">가천대학교 · 2024.12</div>
            </div>
            <div className="pk-award-card">
              <div className="pk-trophy">🏆</div>
              <div className="pk-award-title">학생경진대회 우수상</div>
              <div className="pk-award-org">가천대학교 · 2025.01</div>
            </div>
            <div className="pk-award-card pk-learning">
              <div className="pk-trophy">💡</div>
              <div className="pk-award-title">PM 사이클 체득</div>
              <div className="pk-award-org">현장 관찰 → 문제 정의 → 솔루션 → 재기획</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 화면 스크린샷 ── */}
      <section className="cs-band white">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">Screenshots</div>
            <h2>시스템 화면</h2>
          </div>
          <div className="cs-screens-gallery">
            <img src={process.env.PUBLIC_URL + '/images/parking2.jpg'} alt="주차 안내 시스템 화면 2" />
            <img src={process.env.PUBLIC_URL + '/images/parking3.png'} alt="주차 안내 시스템 화면 3" />
            <img src={process.env.PUBLIC_URL + '/images/parking4.png'} alt="주차 안내 시스템 화면 4" />
            <img src={process.env.PUBLIC_URL + '/images/parking5.png'} alt="주차 안내 시스템 화면 5" />
          </div>
        </div>
      </section>

      {/* ── My Role ── */}
      <section className="cs-band navy cs-role-section">
        <div className="cs-wrap">
          <div className="cs-label" style={{ color: 'var(--cs-blue)' }}>My Role · PM</div>
          <h2>현장에서 문제를 발견하고, 해결까지 끝까지 책임졌습니다</h2>
          <p className="cs-en-sub">From field observation to shipped product, in 4 weeks.</p>
          <div className="cs-role-flow">
            <span className="cs-rf">현장 관찰</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">아이디어 제안</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">구조 설계</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">위기 대응</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">수상</span>
          </div>
          <div className="cs-role-grid">
            <div className="cs-rc">
              <div className="cs-rn">01 Discovery</div>
              <h4>문제 발견 · 아이디어 발의</h4>
              <p>직접 경험한 불편함을 서비스 아이디어로 구체화하고 팀에 제안해 프로젝트 방향을 정의했습니다.</p>
            </div>
            <div className="cs-rc">
              <div className="cs-rn">02 Architecture</div>
              <h4>시스템 구조 설계 · DB 설계</h4>
              <p>IoT - AI - 앱 - 관리자 웹으로 이어지는 전체 구조와 DB를 처음부터 설계하고 ERD를 직접 작성했습니다.</p>
            </div>
            <div className="cs-rc">
              <div className="cs-rn">03 Adaptability</div>
              <h4>돌발 변수 대응 · 완성</h4>
              <p>폭설과 프론트 공백이라는 두 가지 위기를 빠른 판단과 실행으로 극복하며 4주 안에 완성했습니다.</p>
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