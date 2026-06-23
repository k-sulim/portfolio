import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CaseStudyICatch.css';

export default function CaseStudyICatch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-page">

      {/* ── Sticky mini nav ── */}
      <header className="cs-nav">
        <div className="cs-wrap cs-nav-inner">
          <div className="cs-brand">iCatch</div>
          <nav className="cs-nav-links">
            <a href="#cs-problem">Problem</a>
            <a href="#cs-insight">Insight</a>
            <a href="#cs-features">Features</a>
            <a href="#cs-role">My Role</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="cs-band cream cs-hero">
        <div className="cs-wrap">
          <span className="cs-overline">AI CCTV Care Platform · 졸업 프로젝트</span>
          <h1>
            혼자 둔 가족과 반려동물을,<br />
            <em>실시간</em>으로 지켜봐요
          </h1>
          <div className="cs-hero-row">
            <p className="cs-lede">
              AI 이상감지 CCTV로 독거 어르신과 반려동물을 실시간 모니터링하는 양면 케어 플랫폼.
              보호자는 모바일 앱으로, 시설 관리자는 웹 대시보드로 연결됩니다.
              <span className="cs-en-note">
                iCatch — AI-powered CCTV care platform for elderly & pets.
              </span>
            </p>
            <div className="cs-chips">
              <span className="cs-tag navy">팀장 · 백엔드 · 기획 리드</span>
              <span className="cs-tag">5인 팀</span>
              <span className="cs-tag green">2025.03 – 06</span>
              <span className="cs-tag">졸업 프로젝트</span>
            </div>
          </div>

          <div className="cs-hero-img">
            <img src={process.env.PUBLIC_URL + '/images/icatch.webp'} alt="iCatch 앱 메인 화면" />
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="cs-problem" className="cs-band white cs-prob">
        <div className="cs-wrap">
          <div className="cs-bighead">
            <div className="cs-label">Problem</div>
            <h2>외출 중 가족과 반려동물, 괜찮을까?</h2>
            <p className="cs-en-sub">Defining the anxiety gap for caregivers</p>
          </div>
          <div className="cs-prob-list">
            <div className="cs-prob-item">
              <div>
                <h4>실시간 확인 수단이 없다</h4>
                <p>독거 어르신이나 반려동물을 혼자 두고 외출한 보호자는 문자나 전화 외에 상태를 확인할 방법이 없습니다.</p>
              </div>
            </div>
            <div className="cs-prob-item">
              <div>
                <h4>이상 징후를 사람이 24시간 볼 수 없다</h4>
                <p>낙상·장시간 미동 같은 위험 상황은 실시간 모니터링 없이는 사후에야 파악됩니다. 사람이 항시 관찰하는 건 현실적으로 불가능합니다.</p>
              </div>
            </div>
            <div className="cs-prob-item">
              <div>
                <h4>두 사용자군의 니즈가 전혀 다르다</h4>
                <p>개인 보호자(앱)와 시설 관리자(웹)가 원하는 정보와 인터페이스가 다릅니다. 단일 UI로는 양쪽 모두를 만족시킬 수 없습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HMW ── */}
      <section className="cs-band navy">
        <div className="cs-wrap cs-hmw-block">
          <div className="cs-label">Key Insight · HMW</div>
          <h2>
            서로 다른 두 사용자군의 불안을,{' '}
            <u>하나의 플랫폼</u>으로 어떻게 동시에 풀까?
          </h2>
        </div>
      </section>

      {/* ── Research / Qualitative Insight ── */}
      <section id="cs-insight" className="cs-band navy cs-insight-section">
        <div className="cs-wrap">
          <div className="cs-bighead" style={{ paddingTop: 0 }}>
            <div className="cs-label">Research &amp; Insight</div>
            <h2>사용자 인터뷰에서 발견한 것</h2>
            <p className="cs-en-sub">
              In-depth interview × 6 · 현장 관찰 · 팀 리드 의사결정 경험
            </p>
          </div>
          <div className="cs-insight-grid">
            <div className="cs-insight-card">
              <div className="cs-itype">보호자 인터뷰</div>
              <blockquote>
                문자로 안부 확인하는 게 하루에 다섯 번은 됩니다. 그래도 불안해요.
              </blockquote>
              <span className="cs-source">— 보호자 A, 20대 직장인 · 독거 부모 케어</span>
              <p style={{ marginTop: 14 }}>
                전화·문자 외에 실시간 상태를 알 방법이 없다는 것이 핵심 불안 포인트였습니다.
              </p>
            </div>
            <div className="cs-insight-card">
              <div className="cs-itype">현장 관찰</div>
              <p>
                시설 관리자 1명이 동시에 6–8명의 CCTV를 수동 모니터링. 순찰 공백 시 이상 징후 인지가 지연됩니다.
              </p>
              <span className="cs-insight-arrow">
                → AI 자동 감지로 공백 제거
              </span>
            </div>
            <div className="cs-insight-card">
              <div className="cs-itype">기획 인사이트</div>
              <p>
                사용자 인터뷰 과정에서 개인 보호자와 시설 관리자가 원하는 정보와 UI가 완전히 달랐습니다.
              </p>
              <span className="cs-insight-arrow">
                → "하나의 앱"이 아닌 "하나의 플랫폼, 두 개의 뷰"로 구조 재정의
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Competitive Analysis ── */}
      <section className="cs-band cream cs-comp">
        <div className="cs-wrap">
          <div className="cs-bighead" style={{ paddingTop: 0 }}>
            <div className="cs-label">Competitive Analysis</div>
            <h2>경쟁 서비스와 무엇이 다른가</h2>
          </div>
          <div className="cs-comp-grid">
            <table className="cs-ctable">
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>서비스</th>
                  <th>실시간 영상</th>
                  <th>AI 이상감지</th>
                  <th>양면 사용자</th>
                  <th>즉시 알림</th>
                </tr>
              </thead>
              <tbody>
                <tr className="cs-me">
                  <th>iCatch</th>
                  <td className="cs-yes">●</td>
                  <td className="cs-yes">●</td>
                  <td className="cs-yes">●</td>
                  <td className="cs-yes">●</td>
                </tr>
                <tr>
                  <th>카카오홈뷰</th>
                  <td className="cs-yes">●</td>
                  <td className="cs-no">○</td>
                  <td className="cs-no">○</td>
                  <td>중간</td>
                </tr>
                <tr>
                  <th>일반 스마트홈 CCTV</th>
                  <td className="cs-yes">●</td>
                  <td className="cs-no">○</td>
                  <td className="cs-no">○</td>
                  <td>있음</td>
                </tr>
                <tr>
                  <th>병원·시설 관리 시스템</th>
                  <td className="cs-no">○</td>
                  <td className="cs-no">○</td>
                  <td className="cs-yes">●</td>
                  <td>있음</td>
                </tr>
              </tbody>
            </table>

            <div className="cs-pos-map">
              <div className="cs-axis cs-pmx"></div>
              <div className="cs-axis cs-pmy"></div>
              <span className="cs-alab" style={{ top: '3%', left: '50%', transform: 'translateX(-50%)' }}>AI 자동 감지 ↑</span>
              <span className="cs-alab" style={{ bottom: '3%', left: '50%', transform: 'translateX(-50%)' }}>수동 모니터링 ↓</span>
              <span className="cs-alab" style={{ top: '50%', left: '2%', transform: 'translateY(-50%)' }}>개인용</span>
              <span className="cs-alab" style={{ top: '50%', right: '2%', transform: 'translateY(-50%)' }}>양면</span>
              <div className="cs-node cs-me" style={{ left: '62%', top: '24%' }}>
                <span className="cs-pin"></span><small>iCatch</small>
              </div>
              <div className="cs-node" style={{ left: '28%', top: '52%' }}>
                <span className="cs-pin"></span><small>카카오홈뷰</small>
              </div>
              <div className="cs-node" style={{ left: '22%', top: '62%' }}>
                <span className="cs-pin"></span><small>스마트홈 CCTV</small>
              </div>
              <div className="cs-node" style={{ left: '74%', top: '68%' }}>
                <span className="cs-pin"></span><small>시설 관리 시스템</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IA & Wireframe ── */}
      <section className="cs-band white cs-ia-section">
        <div className="cs-wrap">
          <div className="cs-bighead" style={{ paddingTop: 0 }}>
            <div className="cs-label">IA &amp; Wireframe</div>
            <h2>정보구조와 핵심 전환 플로우</h2>
          </div>

          <div className="cs-ia-root-row">
            <div className="cs-ia-box root" style={{ minWidth: 140 }}>iCatch</div>
          </div>
          <div className="cs-ia-row">
            <div className="cs-ia-col">
              <div className="cs-ia-box">사용자 앱 — 홈</div>
              <div className="cs-ia-box sub">실시간 CCTV 영상</div>
              <div className="cs-ia-box sub">이상감지 알림</div>
            </div>
            <div className="cs-ia-col">
              <div className="cs-ia-box">사용자 앱 — 기기</div>
              <div className="cs-ia-box sub">기기 등록·관리</div>
              <div className="cs-ia-box sub">마이페이지</div>
            </div>
            <div className="cs-ia-col">
              <div className="cs-ia-box">관리자 웹 — 대시보드</div>
              <div className="cs-ia-box sub">이상감지 이력</div>
              <div className="cs-ia-box sub">응답시간 모니터링</div>
            </div>
            <div className="cs-ia-col">
              <div className="cs-ia-box">관리자 웹 — 기기</div>
              <div className="cs-ia-box sub">전체 기기 목록</div>
              <div className="cs-ia-box sub">상태 일괄 확인</div>
            </div>
          </div>

          <div className="cs-flow">
            <div className="cs-wf">
              <div className="cs-scr">
                <div className="cs-skel" style={{ height: 10, width: '55%' }}></div>
                <div className="cs-skel" style={{ height: 80 }}></div>
                <div className="cs-skel" style={{ height: 20, marginTop: 'auto', borderRadius: 7 }}></div>
              </div>
              <div className="cs-cap">① 실시간 모니터링<small>보호자 앱 홈</small></div>
            </div>
            <span className="cs-arrow">→</span>
            <div className="cs-wf">
              <div className="cs-scr" style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div className="cs-skel" style={{ height: 44, width: 44, borderRadius: '50%' }}></div>
                <div className="cs-skel" style={{ height: 10, width: '70%' }}></div>
                <div className="cs-skel" style={{ height: 8, width: '50%' }}></div>
              </div>
              <div className="cs-cap">② AI 이상감지 발생<small>푸시 알림 발송</small></div>
            </div>
            <span className="cs-arrow">→</span>
            <div className="cs-wf">
              <div className="cs-scr">
                <div className="cs-skel" style={{ height: 10, width: '50%' }}></div>
                <div className="cs-skel" style={{ height: 90, borderRadius: 10 }}></div>
              </div>
              <div className="cs-cap">③ 보호자 확인 · 조치<small>알림 상세 &amp; 영상 확인</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section id="cs-features" className="cs-band cream cs-feat-section">
        <div className="cs-wrap">
          <div className="cs-bighead" style={{ paddingBottom: 10 }}>
            <div className="cs-label">Core Features</div>
            <h2>불안을 해소하는 4가지 장치</h2>
          </div>

          <div className="cs-frow">
            <div className="cs-fimg">
              <img src={process.env.PUBLIC_URL + '/images/icatch2.webp'} alt="실시간 CCTV 모니터링 화면" />
            </div>
            <div>
              <div className="cs-fn">F.01</div>
              <h4>실시간 CCTV 모니터링</h4>
              <p>보호자는 모바일 앱에서 언제든 집 안 실시간 영상을 확인할 수 있습니다. IoT 카메라와 서버 간 응답 지연을 최소화해 즉각적인 확인이 가능합니다.</p>
            </div>
          </div>

          <div className="cs-frow">
            <div className="cs-fimg">
              <img src={process.env.PUBLIC_URL + '/images/icatch3.webp'} alt="AI 이상감지 알림 화면" />
            </div>
            <div>
              <div className="cs-fn">F.02</div>
              <h4>AI 이상감지 즉시 알림</h4>
              <p>낙상·장시간 미동·비정상 행동을 AI가 자동 감지해 보호자에게 즉시 푸시 알림을 발송합니다. 사람이 직접 모니터링하지 않아도 위험 상황을 놓치지 않습니다.</p>
            </div>
          </div>

          <div className="cs-frow">
            <div className="cs-fimg">
              <img src={process.env.PUBLIC_URL + '/images/icatch4.webp'} alt="관리자 웹 대시보드 화면" />
            </div>
            <div>
              <div className="cs-fn">F.03</div>
              <h4>관리자 웹 실시간 대시보드</h4>
              <p>시설 관리자는 웹에서 전체 기기 현황·이상감지 이력·IoT 응답시간을 한눈에 확인합니다. 순찰 공백 없이 다수를 동시에 관리할 수 있습니다.</p>
            </div>
          </div>

          <div className="cs-frow">
            <div className="cs-fimg">
              <img src={process.env.PUBLIC_URL + '/images/icatch5.webp'} alt="양면 사용자 구조 화면" />
            </div>
            <div>
              <div className="cs-fn">F.04</div>
              <h4>양면 사용자 구조</h4>
              <p>개인 보호자(앱)와 시설 관리자(웹)가 같은 IoT 디바이스 데이터를 각자의 맥락에서 활용합니다. 하나의 플랫폼에 두 개의 최적화된 뷰를 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Extra Screen ── */}
      <section className="cs-band cream">
        <div className="cs-wrap">
          <div className="cs-screens-gallery">
            <img src={process.env.PUBLIC_URL + '/images/icatch6.webp'} alt="iCatch 추가 화면" />
          </div>
        </div>
      </section>

      {/* ── My Role ── */}
      <section id="cs-role" className="cs-band navy cs-role-section">
        <div className="cs-wrap">
          <div className="cs-label" style={{ color: 'var(--cs-blue)' }}>My Role · Leadership</div>
          <h2>아이디어를 제안하고, 우선순위를 정하고, 다른 직군과 협업해 완성했습니다</h2>
          <p className="cs-en-sub">From idea to shipped product — leading a cross-functional team of 5.</p>

          <div className="cs-role-flow">
            <span className="cs-rf">아이디어 발의</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">팀장으로 우선순위 결정</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">백엔드 · 프론트 협업</span>
            <span className="cs-ar">→</span>
            <span className="cs-rf">출시</span>
          </div>

          <div className="cs-role-grid">
            <div className="cs-rc">
              <div className="cs-rn">01 Ideation</div>
              <h4>아이디어 발의 &amp; 구조 설계</h4>
              <p>독거노인·반려동물 케어라는 양면 시장 기회를 포착하고, 사용자 앱과 관리자 웹으로 구조를 분리하는 아이디어를 제안해 프로젝트 방향을 정의했습니다.</p>
            </div>
            <div className="cs-rc">
              <div className="cs-rn">02 Prioritization</div>
              <h4>팀장으로 일정 · 범위 조율</h4>
              <p>졸업 프로젝트 3개월 안에 핵심 기능만 출시하기 위해 백로그를 정리하고 스프린트를 조율했습니다. DB 설계와 ERD를 직접 주도해 개발 기반을 만들었습니다.</p>
            </div>
            <div className="cs-rc">
              <div className="cs-rn">03 Collaboration</div>
              <h4>백엔드 · 프론트 크로스 협업</h4>
              <p>직접 Spring Boot 백엔드를 개발하며 기획 의도가 API 설계까지 이어지도록 조율하고, 프론트 팀원과 UI 스펙을 맞춰 완성했습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="cs-band cream cs-foot">
        <div className="cs-wrap">
          <button
            className="cs-back"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            ↑ 맨 위로
          </button>
          <div style={{ textAlign: 'right' }}>
            <div className="cs-nm">김수림 · Sulim Kim</div>
            <div className="cs-ct">Service Planner / PM &nbsp;·&nbsp; joy06270@naver.com</div>
            <div style={{ marginTop: 12 }}>
              <Link
                to="/projects"
                style={{
                  fontFamily: 'var(--cs-en)',
                  fontSize: 13,
                  color: 'var(--cs-blue-700)',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                ← 모든 프로젝트 보기
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
