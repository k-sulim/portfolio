import { useEffect, useState } from 'react';
import './CaseStudyICatch.css';
import './CombinedProjects.css';

const PUB = process.env.PUBLIC_URL;

const NAV_ITEMS = [
  { id: 'icatch',   label: 'iCatch' },
  { id: 'parking',  label: '스마트 주차' },
  { id: 'farm2you', label: 'Farm2you' },
  { id: 'growme',   label: 'GrowMe' },
];

const NAV_OFFSET = 88 + 52; // main pill nav (88px) + project tab nav (52px)

export default function CombinedProjects() {
  const [activeId, setActiveId] = useState('icatch');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && NAV_ITEMS.some(n => n.id === hash)) {
      // small delay so the page finishes rendering before scrolling
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
          window.scrollTo({ top, behavior: 'smooth' });
          setActiveId(hash);
        }
      }, 120);
    } else {
      window.scrollTo(0, 0);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.1, rootMargin: `-${NAV_OFFSET}px 0px -40% 0px` }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="cs-page cp-page">

      {/* ── Project Tab Navigator ── */}
      <nav className="cp-nav">
        <div className="cp-nav-inner">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              className={`cp-nav-tab ${activeId === id ? 'active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>


      {/* ================================================================
          01 · iCatch — AI CCTV Care Platform
      ================================================================ */}
      <section id="icatch" className="cp-project">

        {/* Header */}
        <div className="cp-proj-hd">
          <div className="cs-wrap">
            <div className="cp-proj-num">PROJECT 01</div>
            <div className="cp-proj-overline">AI CCTV Care Platform · 졸업 프로젝트</div>
            <h2>
              혼자 둔 가족과 반려동물을,<br />
              <em>실시간</em>으로 지켜봐요
            </h2>
            <div className="cp-proj-meta">
              <span className="cp-tag blue">팀장 · 기획 · 백엔드</span>
              <span className="cp-tag">5인 팀</span>
              <span className="cp-tag green">2025.03 – 06</span>
              <span className="cp-tag">졸업 프로젝트</span>
            </div>
          </div>
        </div>

        {/* Overview + Mobile Hero */}
        <div className="cs-band cream">
          <div className="cs-wrap">
            <div className="cp-hero-cols">
              <div>
                <p className="cp-lede">
                  AI 이상감지 CCTV로 독거 어르신과 반려동물을 실시간 모니터링하는 양면 케어 플랫폼.
                  보호자는 모바일 앱으로, 시설 관리자는 웹 대시보드로 연결됩니다.
                </p>
                <div className="cp-prob-list">
                  <div className="cp-prob-item">
                    <span className="cp-prob-dot">●</span>
                    <div>
                      <strong>실시간 확인 수단이 없다</strong>
                      <p>독거 어르신·반려동물을 혼자 두고 외출한 보호자는 전화 외에 상태를 확인할 방법이 없습니다.</p>
                    </div>
                  </div>
                  <div className="cp-prob-item">
                    <span className="cp-prob-dot">●</span>
                    <div>
                      <strong>24시간 사람이 볼 수 없다</strong>
                      <p>낙상·장시간 미동 같은 위험 상황은 실시간 모니터링 없이는 사후에야 파악됩니다.</p>
                    </div>
                  </div>
                  <div className="cp-prob-item">
                    <span className="cp-prob-dot">●</span>
                    <div>
                      <strong>두 사용자군의 니즈가 다르다</strong>
                      <p>개인 보호자(앱)와 시설 관리자(웹)가 원하는 UI·정보가 달라 단일 플랫폼으로 해결 불가능합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cp-hero-portrait">
                <img src={`${PUB}/images/icatch.webp`} alt="iCatch 앱 메인 화면" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Features */}
        <div className="cs-band white">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label">Mobile App · 보호자</div>
              <h3>불안을 해소하는 핵심 기능</h3>
            </div>
            <div className="cp-frows">
              <div className="cp-frow">
                <div className="cp-fimg">
                  <img src={`${PUB}/images/icatch2.webp`} alt="실시간 CCTV 모니터링" />
                </div>
                <div>
                  <div className="cp-fn">F.01</div>
                  <h4>실시간 CCTV 모니터링</h4>
                  <p>보호자는 모바일 앱에서 언제든 집 안 실시간 영상을 확인할 수 있습니다.
                    IoT 카메라와 서버 간 응답 지연을 최소화해 즉각적인 확인이 가능합니다.</p>
                </div>
              </div>
              <div className="cp-frow">
                <div className="cp-fimg">
                  <img src={`${PUB}/images/icatch3.webp`} alt="AI 이상감지 알림" />
                </div>
                <div>
                  <div className="cp-fn">F.02</div>
                  <h4>AI 이상감지 즉시 알림</h4>
                  <p>낙상·장시간 미동·비정상 행동을 AI가 자동 감지해 보호자에게 즉시 푸시 알림을 발송합니다.
                    사람이 직접 모니터링하지 않아도 위험 상황을 놓치지 않습니다.</p>
                </div>
              </div>
              <div className="cp-frow">
                <div className="cp-fimg">
                  <img src={`${PUB}/images/icatch5.webp`} alt="양면 사용자 구조" />
                </div>
                <div>
                  <div className="cp-fn">F.03</div>
                  <h4>양면 사용자 구조</h4>
                  <p>개인 보호자(앱)와 시설 관리자(웹)가 같은 IoT 디바이스 데이터를 각자의 맥락에서 활용합니다.
                    하나의 플랫폼에 두 개의 최적화된 뷰를 제공합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Screenshot Gallery */}
        <div className="cs-band cream">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label">앱 스크린샷</div>
              <h3>보호자 앱 화면</h3>
            </div>
            <div className="cp-gallery">
              <img src={`${PUB}/images/icatch1.webp`} alt="iCatch 화면 1" />
              <img src={`${PUB}/images/icatch2.webp`} alt="실시간 모니터링" />
              <img src={`${PUB}/images/icatch3.webp`} alt="AI 알림" />
              <img src={`${PUB}/images/icatch5.webp`} alt="사용자 구조" />
              <img src={`${PUB}/images/icatch6.webp`} alt="iCatch 화면 6" />
            </div>
          </div>
        </div>

        {/* Admin Web — New Section */}
        <div className="cs-band navy">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label" style={{ color: 'var(--cs-blue)' }}>Admin Web · 시설 관리자</div>
              <h3 style={{ color: '#fff' }}>시설 관리자를 위한 실시간 웹 대시보드</h3>
              <p>
                개인 보호자 앱과 별개로, 시설 관리자는 웹 기반 대시보드에서 수십 개의 기기를 동시에 모니터링합니다.
                1명이 다수를 관리할 수 있어 순찰 공백과 사람 의존도를 동시에 줄입니다.
              </p>
            </div>
            <div className="cp-admin-features">
              <div className="cp-admin-feat">
                <div className="cp-af-num">01</div>
                <h4>전체 기기 현황 모니터링</h4>
                <p>등록된 모든 IoT 카메라의 연결 상태·배터리·마지막 감지 시각을 한 화면에서 실시간으로 확인합니다.</p>
              </div>
              <div className="cp-admin-feat">
                <div className="cp-af-num">02</div>
                <h4>이상감지 이력 &amp; 조치 기록</h4>
                <p>AI가 감지한 이상 상황의 이력을 시간순으로 확인하고, 관리자가 조치 여부를 직접 기록할 수 있습니다.</p>
              </div>
              <div className="cp-admin-feat">
                <div className="cp-af-num">03</div>
                <h4>IoT 응답시간 모니터링</h4>
                <p>카메라-서버 간 응답 지연을 수치로 추적해 네트워크 이슈를 사전에 감지하고 알림을 발송합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Web Screenshot Gallery */}
        <div className="cs-band white">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label">관리자 웹 스크린샷</div>
              <h3>대시보드 화면</h3>
            </div>
            <div className="cp-web-gallery">
              <img src={`${PUB}/images/icatch4.webp`}  alt="관리자 대시보드" />
              <img src={`${PUB}/images/icatch7.webp`}  alt="관리자 화면 2" />
              <img src={`${PUB}/images/icatch8.webp`}  alt="관리자 화면 3" />
              <img src={`${PUB}/images/icatch9.webp`}  alt="관리자 화면 4" />
              <img src={`${PUB}/images/icatch10.webp`} alt="관리자 화면 5" />
              <img src={`${PUB}/images/icatch11.webp`} alt="관리자 화면 6" />
              <img src={`${PUB}/images/icatch12.webp`} alt="관리자 화면 7" />
              <img src={`${PUB}/images/icatch13.webp`} alt="관리자 화면 8" />
            </div>
          </div>
        </div>

        {/* My Role */}
        <div className="cs-band navy">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label" style={{ color: 'var(--cs-blue)' }}>My Role · Leadership</div>
              <h3 style={{ color: '#fff' }}>아이디어에서 출시까지, 팀을 이끌었습니다</h3>
            </div>
            <div className="cp-role-grid">
              <div className="cp-role-card">
                <div className="cp-role-num">01 Ideation</div>
                <h4>아이디어 발의 &amp; 구조 설계</h4>
                <p>독거노인·반려동물 케어라는 양면 시장 기회를 포착하고, 사용자 앱 + 관리자 웹으로 구조를 분리하는 아이디어를 제안해 프로젝트 방향을 정의했습니다.</p>
              </div>
              <div className="cp-role-card">
                <div className="cp-role-num">02 Prioritization</div>
                <h4>팀장으로 일정 · 범위 조율</h4>
                <p>졸업 프로젝트 3개월 안에 핵심 기능만 출시하기 위해 백로그를 정리하고 스프린트를 조율했습니다. DB 설계와 ERD를 직접 주도했습니다.</p>
              </div>
              <div className="cp-role-card">
                <div className="cp-role-num">03 Collaboration</div>
                <h4>백엔드 · 프론트 크로스 협업</h4>
                <p>직접 Spring Boot 백엔드를 개발하며 기획 의도가 API 설계까지 이어지도록 조율하고, 프론트 팀원과 UI 스펙을 맞춰 완성했습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          02 · 스마트 주차 안내 — AI Parking Guidance
      ================================================================ */}
      <section id="parking" className="cp-project">

        {/* Header */}
        <div className="cp-proj-hd">
          <div className="cs-wrap">
            <div className="cp-proj-num">PROJECT 02</div>
            <div className="cp-proj-overline">AI 주차 안내 시스템 · P-학기제 프로젝트</div>
            <h2>
              교내 주차 문제를 <em>직접 발견</em>하고,<br />
              4주 만에 AI로 해결했습니다
            </h2>
            <div className="cp-proj-meta">
              <span className="cp-tag blue">아이디어 발의 · 기획 · 연결</span>
              <span className="cp-tag">5인 팀</span>
              <span className="cp-tag green">2024.11 – 12</span>
              <span className="cp-tag red">🏆 최우수상 · 우수상</span>
            </div>
          </div>
        </div>

        {/* Overview + Landscape Hero */}
        <div className="cs-band cream">
          <div className="cs-wrap">
            <div className="cp-hero-cols">
              <div>
                <p className="cp-lede">
                  현장 관찰에서 시작해 YOLO AI와 Raspberry Pi로 완성한 실시간 주차 안내 시스템.
                  폭설이라는 돌발 변수까지 극복하며 최우수상과 우수상을 모두 수상했습니다.
                </p>
                <div className="cp-prob-list">
                  <div className="cp-prob-item">
                    <span className="cp-prob-dot">●</span>
                    <div>
                      <strong>반복되는 순환 운전</strong>
                      <p>교내 주차장이 만차인지 알 방법이 없어, 운전자들이 직접 돌아다니며 확인해야 했습니다. 저도 같은 경험을 반복했습니다.</p>
                    </div>
                  </div>
                  <div className="cp-prob-item">
                    <span className="cp-prob-dot">●</span>
                    <div>
                      <strong>실시간 정보 부재</strong>
                      <p>현재 빈 자리 수, 위치 정보가 실시간으로 제공되지 않아 주차 진입 전에는 상황을 알 수 없습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cp-hero-landscape">
                <img src={`${PUB}/images/parking.png`} alt="스마트 주차 안내 시스템" />
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Story */}
        <div className="cs-band white">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label">Problem Discovery</div>
              <h3>현장에서 직접 발견한 문제</h3>
            </div>
            <div className="cp-steps">
              <div className="cp-step">
                <div className="cp-step-num">01</div>
                <div>
                  <h4>반복되는 순환 운전</h4>
                  <p>교내 주차장이 만차인지 아닌지 알 방법이 없어 운전자들이 직접 돌아다니며 확인해야 했습니다. 저도 같은 경험을 반복했습니다.</p>
                </div>
              </div>
              <div className="cp-step">
                <div className="cp-step-num">02</div>
                <div>
                  <h4>아이디어 제안</h4>
                  <p>카메라로 주차장을 촬영하고 AI가 빈 자리를 자동으로 감지해 앱으로 안내하면 해결 가능하다고 판단. 팀에 직접 아이디어를 제안해 방향을 정의했습니다.</p>
                </div>
              </div>
              <div className="cp-step">
                <div className="cp-step-num">03</div>
                <div>
                  <h4>시스템 구조 설계</h4>
                  <p>IoT 카메라(Raspberry Pi) + YOLO AI 감지 + 사용자 앱 + 관리자 웹으로 이어지는 전체 구조를 처음부터 직접 설계했습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="cs-band cream">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label">Screenshots</div>
              <h3>시스템 화면</h3>
            </div>
            <div className="cp-web-gallery cols-2">
              <img src={`${PUB}/images/parking2.jpg`} alt="주차 안내 시스템 화면 2" />
              <img src={`${PUB}/images/parking3.png`} alt="주차 안내 시스템 화면 3" />
              <img src={`${PUB}/images/parking4.png`} alt="주차 안내 시스템 화면 4" />
              <img src={`${PUB}/images/parking5.png`} alt="주차 안내 시스템 화면 5" />
            </div>
          </div>
        </div>

        {/* Crisis */}
        <div className="cs-band navy">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label" style={{ color: 'var(--cs-blue)' }}>Crisis &amp; Response</div>
              <h3 style={{ color: '#fff' }}>4주차, 폭설이 내렸다</h3>
            </div>
            <div className="cp-challenge-row">
              <div className="cp-ch-card problem">
                <div className="cp-ch-label">문제</div>
                <h4>주차라인이 보이지 않는다</h4>
                <p>폭설로 주차선이 눈에 덮여 카메라에 잡히지 않았고, AI 감지율이 급격히 떨어졌습니다. 제출 1주일 전의 일이었습니다.</p>
              </div>
              <div className="cp-ch-arrow">→</div>
              <div className="cp-ch-card action">
                <div className="cp-ch-label">대응</div>
                <h4>방수 케이스 + 모델 재학습</h4>
                <p>카메라 보호를 위해 방수 케이스를 직접 제작하고, 악천후 데이터를 추가 수집해 YOLO 모델을 재학습시켰습니다.</p>
              </div>
              <div className="cp-ch-arrow">→</div>
              <div className="cp-ch-card result">
                <div className="cp-ch-label">결과</div>
                <h4>4주 내 완성 · 수상</h4>
                <p>빠른 반복 대응으로 제출 기한 내에 안정적인 시스템을 완성. P-학기제 최우수상과 학생경진대회 우수상을 모두 수상했습니다.</p>
              </div>
            </div>

            {/* Awards */}
            <div className="cp-award-row">
              <div className="cp-award-card" style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)' }}>
                <div className="trophy">🏆</div>
                <div className="cp-award-title" style={{ color: '#fff' }}>P-학기제 최우수상</div>
                <div className="cp-award-org" style={{ color: 'rgba(255,255,255,.55)' }}>가천대학교 · 2024.12</div>
              </div>
              <div className="cp-award-card" style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)' }}>
                <div className="trophy">🏆</div>
                <div className="cp-award-title" style={{ color: '#fff' }}>학생경진대회 우수상</div>
                <div className="cp-award-org" style={{ color: 'rgba(255,255,255,.55)' }}>가천대학교 · 2025.01</div>
              </div>
              <div className="cp-award-card" style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)' }}>
                <div className="trophy">💡</div>
                <div className="cp-award-title" style={{ color: '#fff' }}>PM 사이클 체득</div>
                <div className="cp-award-org" style={{ color: 'rgba(255,255,255,.55)' }}>현장 관찰 → 문제 정의 → 솔루션 → 재기획</div>
              </div>
            </div>
          </div>
        </div>

        {/* My Role */}
        <div className="cs-band navy">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label" style={{ color: 'var(--cs-blue)' }}>My Role · PM</div>
              <h3 style={{ color: '#fff' }}>현장에서 문제를 발견하고, 해결까지 끝까지 책임졌습니다</h3>
            </div>
            <div className="cp-role-grid">
              <div className="cp-role-card">
                <div className="cp-role-num">01 Discovery</div>
                <h4>문제 발견 · 아이디어 발의</h4>
                <p>직접 경험한 불편함을 서비스 아이디어로 구체화하고 팀에 제안해 프로젝트 방향을 정의했습니다.</p>
              </div>
              <div className="cp-role-card">
                <div className="cp-role-num">02 Architecture</div>
                <h4>시스템 구조 설계 · DB 설계</h4>
                <p>IoT → AI → 앱 → 관리자 웹으로 이어지는 전체 구조와 DB를 처음부터 설계하고 ERD를 직접 작성했습니다.</p>
              </div>
              <div className="cp-role-card">
                <div className="cp-role-num">03 Adaptability</div>
                <h4>돌발 변수 대응 · 완성</h4>
                <p>폭설과 프론트 공백이라는 두 가지 위기를 빠른 판단과 실행으로 극복하며 4주 안에 완성했습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          03 · Farm2you — 농산물 직거래 플랫폼
      ================================================================ */}
      <section id="farm2you" className="cp-project">

        {/* Header */}
        <div className="cp-proj-hd">
          <div className="cs-wrap">
            <div className="cp-proj-num">PROJECT 03</div>
            <div className="cp-proj-overline">농산물 직거래 플랫폼 · 구름톤 유니브 4기</div>
            <h2>
              농부와 소비자 사이의<br />
              <em>유통 마진</em>을 없앴습니다
            </h2>
            <div className="cp-proj-meta">
              <span className="cp-tag blue">기획 파트 리드</span>
              <span className="cp-tag">6인 팀</span>
              <span className="cp-tag green">2025.05</span>
              <span className="cp-tag">구름톤 유니브</span>
            </div>
          </div>
        </div>

        {/* Overview + Landscape Hero */}
        <div className="cs-band cream">
          <div className="cs-wrap">
            <div className="cp-hero-cols">
              <div>
                <p className="cp-lede">
                  유통 과정에서 가격이 올라가는 구조로 농부는 낮은 수익을, 소비자는 높은 가격을 감당합니다.
                  두 사용자군을 직접 연결하는 양면 시장 플랫폼을 기획하고 팀을 이끌었습니다.
                </p>
                <div className="cp-prob-list">
                  <div className="cp-prob-item">
                    <span className="cp-prob-dot">●</span>
                    <div>
                      <strong>복잡한 유통 구조</strong>
                      <p>유통 단계가 길어질수록 농부에게 돌아오는 수익은 줄어들고, 소비자 가격은 올라갑니다.</p>
                    </div>
                  </div>
                  <div className="cp-prob-item">
                    <span className="cp-prob-dot">●</span>
                    <div>
                      <strong>생산자-소비자 간 정보 단절</strong>
                      <p>소비자는 생산지·농부 정보를 알기 어렵고, 농부는 소비자 니즈를 파악할 방법이 없습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cp-hero-landscape">
                <img src={`${PUB}/images/farm2you.webp`} alt="Farm2you 메인 화면" />
              </div>
            </div>
          </div>
        </div>

        {/* Dual Market */}
        <div className="cs-band white">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label">Market Problem</div>
              <h3>같은 농산물, 다른 고통</h3>
            </div>
            <div className="cp-dual-market">
              <div className="cp-market-card farmer">
                <div className="cp-market-label">농부 side</div>
                <h4>열심히 키워도 남는 게 없다</h4>
                <p>유통 단계가 길어질수록 농부에게 돌아오는 수익은 줄어듭니다. 여러 중간 단계를 거치며 마진이 쌓이고, 정작 생산자는 낮은 가격을 받습니다.</p>
              </div>
              <div className="cp-bridge-arrow">↔</div>
              <div className="cp-market-card consumer">
                <div className="cp-market-label">소비자 side</div>
                <h4>신선한 농산물이 왜 이렇게 비쌀까</h4>
                <p>유통 마진이 소매가에 반영되어 소비자는 생산 원가보다 훨씬 높은 가격을 지불합니다. 생산지와 소비자 사이의 거리감도 신뢰를 낮춥니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="cs-band cream">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label">Screenshots</div>
              <h3>서비스 화면</h3>
            </div>
            <div className="cp-gallery">
              <img src={`${PUB}/images/farm2you.webp`}  alt="Farm2you 메인" />
              <img src={`${PUB}/images/farm2you2.webp`} alt="Farm2you 화면 2" />
              <img src={`${PUB}/images/farm2you3.webp`} alt="Farm2you 화면 3" />
              <img src={`${PUB}/images/farm2you4.webp`} alt="Farm2you 화면 4" />
              <img src={`${PUB}/images/farm2you5.webp`} alt="Farm2you 화면 5" />
            </div>
          </div>
        </div>

        {/* Bridge Solution */}
        <div className="cs-band navy">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label" style={{ color: 'var(--cs-blue)' }}>Solution Bridge</div>
              <h3 style={{ color: '#fff' }}>양면 시장을 하나로 연결하다</h3>
            </div>
            <div className="cp-bridge-grid">
              <div className="cp-bridge-card">
                <div className="cp-bc-num">01</div>
                <h4>농부가 직접 올리는 마켓</h4>
                <p>생산자가 상품을 등록하고 가격을 직접 설정. 중간 단계를 없애 농부의 수익과 소비자 가격을 동시에 개선합니다.</p>
              </div>
              <div className="cp-bridge-card">
                <div className="cp-bc-num">02</div>
                <h4>농장 문의 → 카카오 채팅</h4>
                <p>소비자가 농장에 직접 문의할 수 있는 카카오 채널을 연동. 생산자-소비자 간 직접 소통 경로를 열었습니다.</p>
              </div>
              <div className="cp-bridge-card">
                <div className="cp-bc-num">03</div>
                <h4>기획 산출물 전체 제작</h4>
                <p>기획서, Figma 프로토타입, API 명세서까지 모든 산출물을 직접 작성해 개발팀의 진행 기반을 마련했습니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Role */}
        <div className="cs-band navy">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label" style={{ color: 'var(--cs-blue)' }}>My Role · Planning Lead</div>
              <h3 style={{ color: '#fff' }}>아이디어에서 발표까지, 기획의 처음과 끝을 책임졌습니다</h3>
            </div>
            <div className="cp-role-grid">
              <div className="cp-role-card">
                <div className="cp-role-num">01 Market Design</div>
                <h4>양면 시장 구조 설계</h4>
                <p>농부와 소비자 각 사용자군의 니즈를 분석하고, 두 쪽이 모두 이득을 얻는 서비스 구조를 설계했습니다.</p>
              </div>
              <div className="cp-role-card">
                <div className="cp-role-num">02 Scope Management</div>
                <h4>현실적인 기능 범위 조율</h4>
                <p>팀원 역량을 파악하며 실현 가능한 범위로 좁혀나갔고, 개발이 막히는 지점에서 대안 방향을 직접 제안했습니다.</p>
              </div>
              <div className="cp-role-card">
                <div className="cp-role-num">03 Full Deliverables</div>
                <h4>기획 산출물 전체 작성</h4>
                <p>기획서, Figma 프로토타입, API 명세서까지 모든 산출물을 직접 작성해 개발팀의 진행 기반을 마련했습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          04 · GrowMe — 자기성장 멘탈헬스 앱
      ================================================================ */}
      <section id="growme" className="cp-project">

        {/* Header */}
        <div className="cp-proj-hd">
          <div className="cs-wrap">
            <div className="cp-proj-num">PROJECT 04</div>
            <div className="cp-proj-overline">자기성장 멘탈헬스 앱 · 구름톤 유니브 해커톤</div>
            <h2>
              기획자로 시작해<br />
              <em>프론트까지</em> 완성했습니다
            </h2>
            <div className="cp-proj-meta">
              <span className="cp-tag blue">기획 · 프론트엔드 (돌발 겸임)</span>
              <span className="cp-tag">5인 팀</span>
              <span className="cp-tag green">2025.09</span>
              <span className="cp-tag red">⚡ 돌발 역할 확장</span>
            </div>
          </div>
        </div>

        {/* Overview + Hero */}
        <div className="cs-band cream">
          <div className="cs-wrap">
            <div className="cp-hero-cols">
              <div>
                <p className="cp-lede">
                  해커톤 2일 차, 프론트엔드 담당자가 이탈했습니다.
                  기획자로 합류했지만 기획 문서를 들고 직접 화면을 구현했습니다.
                  계획 밖의 역할 확장이 가장 큰 성장이 됐습니다.
                </p>
                <div className="cp-prob-list">
                  <div className="cp-prob-item">
                    <span className="cp-prob-dot">●</span>
                    <div>
                      <strong>원래 역할: 서비스 기획 전담</strong>
                      <p>사용자 플로우 설계, 핵심 기능 정의, 기획 문서 작성이 맡은 역할이었습니다.</p>
                    </div>
                  </div>
                  <div className="cp-prob-item">
                    <span className="cp-prob-dot">●</span>
                    <div>
                      <strong>Day 2: 프론트엔드 담당자 연락 두절</strong>
                      <p>화면 구현 담당자와 연락이 닿지 않아 팀 전체가 멈출 수 있는 위기 상황이 됐습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cp-hero-portrait">
                <img src={`${PUB}/images/growme.webp`} alt="GrowMe 앱 화면" />
              </div>
            </div>
          </div>
        </div>

        {/* Crisis Timeline */}
        <div className="cs-band navy">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label" style={{ color: 'var(--cs-blue)' }}>What Happened</div>
              <h3 style={{ color: '#fff' }}>D+2, 예상치 못한 일이 생겼다</h3>
            </div>
            <div className="cp-timeline">
              <div className="cp-tl-event">
                <div className="cp-tl-day">Day 0</div>
                <div className="cp-tl-line">
                  <div className="cp-tl-dot"></div>
                  <div className="cp-tl-connector"></div>
                </div>
                <div className="cp-tl-body">
                  <h4>해커톤 시작 · 기획자로 합류</h4>
                  <p>팀 구성 완료. 서비스 기획 담당으로 합류. 사용자 플로우와 기능 정의를 시작했습니다.</p>
                </div>
              </div>
              <div className="cp-tl-event">
                <div className="cp-tl-day crisis">Day 2</div>
                <div className="cp-tl-line">
                  <div className="cp-tl-dot crisis"></div>
                  <div className="cp-tl-connector"></div>
                </div>
                <div className="cp-tl-body">
                  <h4>프론트엔드 담당자 연락 두절</h4>
                  <p>화면 구현 담당자와 연락이 닿지 않았습니다. 팀 전체가 멈출 수 있는 위기였습니다.</p>
                </div>
              </div>
              <div className="cp-tl-event">
                <div className="cp-tl-day">Day 2</div>
                <div className="cp-tl-line">
                  <div className="cp-tl-dot action"></div>
                  <div className="cp-tl-connector"></div>
                </div>
                <div className="cp-tl-body">
                  <h4>결정: 내가 직접 한다</h4>
                  <p>기획 문서를 기반으로 직접 화면을 구현하기로 결정. React로 화면 개발을 시작했습니다.</p>
                </div>
              </div>
              <div className="cp-tl-event">
                <div className="cp-tl-day">최종</div>
                <div className="cp-tl-line">
                  <div className="cp-tl-dot success"></div>
                  <div className="cp-tl-connector"></div>
                </div>
                <div className="cp-tl-body">
                  <h4>기획 + 프론트엔드 동시에 완성</h4>
                  <p>데모데이까지 서비스를 완성해 발표. 기획자가 직접 화면을 만드는 end-to-end 경험을 했습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response */}
        <div className="cs-band white">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label">How I Responded</div>
              <h3>기획 문서가 개발 가이드가 됐습니다</h3>
            </div>
            <div className="cp-steps">
              <div className="cp-step">
                <div className="cp-step-num">01</div>
                <div>
                  <h4>기획 문서 → 화면 구현</h4>
                  <p>사전에 작성한 사용자 플로우와 기능 정의를 그대로 코드로 옮겼습니다. 기획이 명확했기 때문에 구현 방향을 빠르게 잡을 수 있었습니다.</p>
                </div>
              </div>
              <div className="cp-step">
                <div className="cp-step-num">02</div>
                <div>
                  <h4>백엔드 팀과 API 연동 협업</h4>
                  <p>화면을 만들면서 동시에 백엔드 팀원들과 API 스펙을 맞추고 데이터 흐름을 조율했습니다. 기획자와 개발자 사이에서 언어를 통역하는 역할을 했습니다.</p>
                </div>
              </div>
              <div className="cp-step">
                <div className="cp-step-num">03</div>
                <div>
                  <h4>기술 구현 난이도 사전 검토의 중요성 인식</h4>
                  <p>이 경험을 통해 기획 단계에서 기술 구현 가능성을 함께 검토하는 것이 얼마나 중요한지 체득했습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="cs-band cream">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label">Screenshots</div>
              <h3>앱 화면</h3>
            </div>
            <div className="cp-gallery">
              <img src={`${PUB}/images/growme.webp`}  alt="GrowMe 메인" />
              <img src={`${PUB}/images/growme2.png`}  alt="GrowMe 화면 2" />
              <img src={`${PUB}/images/growme3.webp`} alt="GrowMe 화면 3" />
              <img src={`${PUB}/images/growme4.webp`} alt="GrowMe 화면 4" />
              <img src={`${PUB}/images/growme5.webp`} alt="GrowMe 화면 5" />
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="cs-band white">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label">Reflection</div>
              <h3>예상 밖의 경험에서 배운 것</h3>
            </div>
            <div className="cp-reflection-grid">
              <div className="cp-reflection-card">
                <div className="cp-ref-icon">🔁</div>
                <h4>기획과 개발은 연결되어 있다</h4>
                <p>직접 구현해보며 기획 의도가 코드로 어떻게 표현되는지 체감했습니다. 기획자가 개발을 이해할수록 더 나은 기획을 할 수 있습니다.</p>
              </div>
              <div className="cp-reflection-card">
                <div className="cp-ref-icon">⚡</div>
                <h4>돌발 상황은 가장 빠른 성장의 기회</h4>
                <p>편안한 역할 안에 있었다면 프론트엔드를 직접 할 기회가 없었을 것입니다. 위기가 오히려 역량의 경계를 넓혔습니다.</p>
              </div>
              <div className="cp-reflection-card">
                <div className="cp-ref-icon">📐</div>
                <h4>기획 단계에서 기술 검토 필수</h4>
                <p>구현 난이도를 사전에 파악했다면 더 현실적인 기획이 가능했을 것입니다. PM은 기술과 기획 사이를 잇는 사람이어야 합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Role */}
        <div className="cs-band navy">
          <div className="cs-wrap">
            <div className="cp-section-head">
              <div className="cp-label" style={{ color: 'var(--cs-blue)' }}>My Role · Adaptability</div>
              <h3 style={{ color: '#fff' }}>계획 밖의 역할까지 맡아, 끝까지 책임졌습니다</h3>
            </div>
            <div className="cp-role-grid">
              <div className="cp-role-card">
                <div className="cp-role-num">01 Planning</div>
                <h4>서비스 기획 · 플로우 설계</h4>
                <p>사용자 니즈 분석부터 핵심 기능 정의, 사용자 플로우 설계까지 기획 전반을 담당했습니다.</p>
              </div>
              <div className="cp-role-card">
                <div className="cp-role-num">02 Execution</div>
                <h4>프론트엔드 화면 개발</h4>
                <p>기획 문서를 기반으로 React 화면을 직접 구현하고, 백엔드 팀과 API 연동을 조율했습니다.</p>
              </div>
              <div className="cp-role-card">
                <div className="cp-role-num">03 Growth</div>
                <h4>End-to-end PM 역량 확인</h4>
                <p>기획에서 개발까지 전 과정을 경험하며 기획자가 개발을 이해해야 하는 이유를 직접 체득했습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
