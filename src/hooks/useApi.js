import { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setProjects,
  setLoading,
  setError,
  setVisitorCount,
  incrementVisitor,
} from '../store/store';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "iCatch — AI CCTV 케어 플랫폼",
    category: "ai",
    period: "2024.09 – 2024.12",
    role: "팀장 · 백엔드 개발 · 기획 리드",
    summary: "독거노인과 반려동물 보호자, 두 사용자군의 불안을 하나의 서비스로 해결하는 AI CCTV 케어 플랫폼",
    images: [
      "/portfolio/images/icatch.webp",
      "/portfolio/images/icatch2.webp",
    ],
    links: [
      { label: "Figma 화면 설계", url: "https://www.figma.com/design/U7q3BFl7Cwp1FX2dVc5W2J/Untitled?node-id=0-1&p=f" },
      { label: "ERD 설계", url: "https://www.erdcloud.com/d/E9X8bDBY7BEFeSCuo" },
    ],
    tags: ["Java", "Spring Boot", "React", "IoT", "AI", "ERD 설계"],
    background: "독거노인과 반려동물을 혼자 두고 외출하는 보호자가 실시간으로 상태를 확인할 수 없다는 문제를 정의했습니다. 두 사용자군의 불안 포인트를 각각 분석해 하나의 플랫폼으로 해결하는 서비스를 기획하고 팀장으로 프로젝트를 이끌었습니다.",
    features: [
      { name: "실시간 CCTV 모니터링", desc: "IoT 카메라로 집 안 상황을 실시간으로 확인" },
      { name: "AI 이상 감지 알림", desc: "이상 행동 감지 시 보호자에게 즉시 알림 발송" },
      { name: "IoT 응답 시간 모니터링", desc: "감지 이벤트 발생 시 서버 응답 시간을 관리자 웹에서 실시간 확인" },
      { name: "다중 사용자 지원", desc: "독거노인 보호자·반려동물 보호자 각각의 니즈에 맞는 맞춤 기능 제공" },
    ],
    myRole: [
      "팀장으로서 전체 서비스 기획 리드 및 팀원 역할 분담",
      "두 사용자군(독거노인·반려동물) 니즈 분석 및 기능 구조 설계",
      "DB 설계 주도 (ERD, 테이블 관계·PK·타입 정의)",
      "이상 감지 알림 핵심 전환 플로우 설계",
      "IoT 응답 시간 실시간 모니터링 기능 구현",
      "백엔드 API 개발 (Spring Boot)",
    ],
    challenge: {
      problem: "독거노인 보호자와 반려동물 보호자라는 서로 다른 두 사용자군의 니즈를 하나의 서비스 구조로 담아내는 것",
      solution: "두 사용자군의 불안 포인트를 각각 분석해 공통 기능과 개별 기능을 구분하여 서비스 구조를 설계. IoT 응답 시간을 관리자 웹에서 모니터링할 수 있도록 지표 추적 기반을 직접 구현",
      result: "두 사용자군의 문제를 하나의 플랫폼으로 해결하는 B2C 서비스 완성",
    },
    achievements: [
      "B2C 양면 시장에서 두 사용자군의 니즈를 동시에 풀어내는 기획 역량 향상",
      "DB 설계부터 백엔드 개발, 기획까지 end-to-end 경험",
      "IoT 지표 모니터링 기반 구현으로 데이터 추적 역량 확보",
      "팀장으로서 4개월간 일정 관리 및 팀원 소통 주도",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "스마트 주차 안내 시스템",
    category: "ai",
    period: "2024.09 – 2024.12",
    role: "아이디어 기획 · 백엔드/프론트 연결 담당",
    summary: "교내 주차 문제를 현장 관찰로 발견하고, YOLO AI와 Raspberry Pi로 실시간 주차 현황을 안내하는 시스템",
    images: [
      "/portfolio/images/parking.jpg",
      "/portfolio/images/parking2.jpg",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Xzar79/MuhanParking" },
    ],
    tags: ["YOLO", "Raspberry Pi", "Python", "Spring Boot", "React", "IoT"],
    background: "교내 주차장 만차 여부를 운전자가 직접 확인해야 해서 불필요한 순환 운전이 반복되는 문제를 직접 경험하고 발견했습니다. 카메라와 AI로 실시간 주차 현황을 감지해 앱으로 안내하면 해결할 수 있다고 판단해 아이디어를 제안하고 서비스 방향을 정의했습니다.",
    features: [
      { name: "실시간 주차 감지", desc: "Raspberry Pi 카메라로 주차장 촬영 → YOLO AI가 빈 자리 자동 감지" },
      { name: "사용자 앱", desc: "빈 자리 현황을 실시간으로 확인할 수 있는 모바일 앱" },
      { name: "관리자 웹", desc: "주차장 전체 현황 및 IoT 기기 상태를 모니터링하는 관리자 대시보드" },
      { name: "폭설 대응 재학습", desc: "폭설 환경 데이터 추가 수집 후 AI 모델 재학습으로 악천후 인식률 유지" },
    ],
    myRole: [
      "교내 주차 문제 현장 관찰 → 서비스 아이디어 제안 및 방향 정의",
      "사용자 앱·관리자 웹 포함 전체 시스템 구조 설계",
      "DB 설계 (ERD, 테이블 관계·PK·타입 정의)",
      "프론트엔드 담당자 공백 발생 시 백엔드·프론트 연결 부분 주도적으로 처리",
      "폭설 변수 발생 시 방수 케이스 직접 제작 + AI 모델 재학습 주도",
    ],
    challenge: {
      problem: "4주라는 짧은 개발 기간으로 기획을 완벽히 확정하지 못한 채 개발을 시작했고, 폭설 발생으로 주차라인이 카메라에 보이지 않는 예상치 못한 변수도 발생",
      solution: "기획→개발→재기획 사이클을 빠르게 반복하며 대응. 폭설 문제는 방수 케이스를 직접 제작하고 악천후 데이터를 추가 수집해 AI 모델을 재학습시켜 4주 내 완성",
      result: "P-학기제 학내 최우수상 및 학생경진대회 우수상 수상",
    },
    achievements: [
      "P-학기제 학내 최우수상 수상 (가천대학교, 2024.12)",
      "P-학기제 학생경진대회 우수상 수상 (가천대학교, 2025.01)",
      "현장 관찰 → 문제 정의 → 솔루션 기획으로 이어지는 PM 사이클 경험",
      "기획→개발→재기획 빠른 반복 사이클 체득",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Farm2you — 농산물 직거래 플랫폼",
    category: "web",
    period: "2025.03 – 2025.06",
    role: "기획 파트 리드",
    summary: "유통 마진 문제로 손해를 보는 농부와 비싼 값에 사는 소비자를 직접 연결하는 B2C 농산물 직거래 플랫폼",
    images: [
      "/portfolio/images/farm2you.webp",
    ],
    links: [
      { label: "Figma 프로토타입", url: "https://www.figma.com/design/rIEMvN2KyPtJ1ync08u3za/%EC%84%B1%EC%9E%A5%ED%86%A4-6%ED%8C%80?node-id=0-1&p=f" },
      { label: "API 명세서", url: "https://www.notion.so/API-1f599d97679781b5a0bcc2bd22a84836" },
    ],
    tags: ["React", "Spring Boot", "MySQL", "Figma", "API 명세", "구름톤 유니브"],
    background: "유통 과정에서 가격이 올라가는 구조적 문제로 소비자는 비싼 값에, 농부는 낮은 수익으로 농산물을 거래하는 문제를 발견했습니다. 생산자와 소비자를 직접 연결하는 플랫폼을 기획해 양측의 니즈를 동시에 해결하고자 했습니다.",
    features: [
      { name: "농산물 마켓", desc: "생산자(농부)가 직접 상품을 등록하고 소비자가 구매하는 직거래 구조" },
      { name: "농장 문의하기", desc: "소비자가 농장에 직접 카카오 채팅으로 문의 가능" },
      { name: "상품 등록·관리", desc: "생산자가 직접 상품 등록·수정·삭제 가능" },
      { name: "카카오 채널 연동", desc: "구매자·판매자 문의를 위한 카카오 채널 개설" },
    ],
    myRole: [
      "서비스 기획서 작성 — 생산자·소비자 양면 시장 구조 설계",
      "발표 PPT 제작 및 발표",
      "Figma 프로토타입 제작",
      "API 명세서 작성",
      "팀원 개발 역량 파악 후 기능 범위 조정 및 우선순위 설정",
    ],
    challenge: {
      problem: "팀원 대부분이 실무 경험이 많지 않아 처음에 기능 범위를 어디까지 잡아야 할지 불분명했음",
      solution: "먼저 전체 기능을 제안한 뒤 실현 가능성을 함께 검토하며 범위를 좁히는 방식으로 진행. '모두가 한 가지씩은 새로운 기술에 도전한다'는 원칙 수립",
      result: "B2C 양면 서비스에서 두 사용자군의 니즈를 동시에 풀어가는 기획 경험 확보",
    },
    achievements: [
      "구름톤 유니브 4기 기획 파트 수료",
      "B2C 양면 시장 기획 경험",
      "기획서·Figma·API 명세 전 산출물 직접 작성",
    ],
    featured: false,
  },
  {
    id: 4,
    title: "GrowMe — 자기성장 멘탈헬스 앱",
    category: "app",
    period: "2025.03 – 2025.06",
    role: "기획 파트 · 프론트엔드 담당",
    summary: "자기성장 과정에서 지속적인 동기부여와 멘탈 관리를 도와주는 앱. 기획자로 합류했으나 프론트엔드 이탈로 화면 개발까지 주도",
    images: [
      "/portfolio/images/growme.webp",
      "/portfolio/images/growme2.png",
    ],
    links: [
      { label: "Figma 화면 설계", url: "https://www.figma.com/design/1R9tRvNWKbWdpeNniY7GgG/31-%EA%B7%B8%EB%A1%9C%EC%9A%B0%EB%AF%B8-design?node-id=51-224&p=f" },
      { label: "ERD 설계", url: "https://www.erdcloud.com/d/QTKJtoHewY5LXW7DF" },
      { label: "발표 자료", url: "https://www.figma.com/slides/H8YGSeuFCOvnGazcpXvzPJ/31-%EA%B7%B8%EB%A1%9C%EC%9A%B0%EB%AF%B8-%EB%B0%9C%ED%91%9C-%EC%9E%90%EB%A3%8C?node-id=0-1&p=f" },
    ],
    tags: ["React", "Spring Boot", "Figma", "구름톤 유니브 해커톤"],
    background: "자기성장 과정에서 지속적인 동기부여와 멘탈 관리가 어렵다는 문제를 정의하고, 작은 성장을 기록하고 응원받을 수 있는 앱을 기획했습니다. 해커톤 시작 2일 만에 프론트엔드 담당자와 연락이 두절되어 기획과 프론트엔드를 동시에 맡게 됐습니다.",
    features: [
      { name: "기분 기록", desc: "매일 기분을 선택해 감정 상태를 기록" },
      { name: "식물 성장 시스템", desc: "꾸준히 기록할수록 나만의 식물이 성장하는 게이미피케이션 요소" },
      { name: "그루와 채팅", desc: "AI 캐릭터 '그루'와 오늘 있었던 일을 이야기하며 위로 받는 채팅 기능" },
      { name: "커뮤니티", desc: "비슷한 고민을 가진 사람들과 익명으로 소통" },
    ],
    myRole: [
      "서비스 기획 및 사용자 플로우 설계",
      "프론트엔드 담당자 이탈로 화면 구성부터 전담하는 프론트 개발 맡음",
      "기획 문서를 기반으로 직접 화면 구현",
      "백엔드 팀원들과 API 연동 및 데이터 흐름 조율",
    ],
    challenge: {
      problem: "해커톤 시작 2일 만에 프론트엔드 담당자와 연락이 두절되어 기획과 프론트엔드를 동시에 담당해야 하는 상황 발생",
      solution: "기획 문서를 기반으로 직접 화면을 구현하고, 백엔드 팀원들과 API 연동 및 데이터 흐름을 조율하며 주도적으로 대응",
      result: "기획 단계에서 기술 구현 난이도를 사전에 검토하는 것의 중요성을 배움",
    },
    achievements: [
      "돌발 상황에서 역할을 유연하게 확장하고 주도적으로 대응하는 실행력 확보",
      "처음으로 화면 구성부터 end-to-end 프론트엔드 개발 경험",
      "기획자가 개발을 이해하는 것의 중요성 체감",
    ],
    featured: false,
  },
];

const SKILLS_DATA = [
  { id: 1, category: "데이터 & 분석", items: ["SQL", "Python (pandas, matplotlib, Seaborn)", "ERD 설계 (draw.io, ERDCloud)", "ADSP 준비 중"], proficiency: 72 },
  { id: 2, category: "서비스 기획", items: ["서비스 기획서 작성", "Figma 프로토타입", "API 명세서 작성", "사용자 플로우 설계"], proficiency: 80 },
  { id: 3, category: "Backend", items: ["Java", "Spring Boot", "JPA / Hibernate", "REST API 설계"], proficiency: 78 },
  { id: 4, category: "Frontend", items: ["React", "Redux Toolkit", "HTML/CSS", "JavaScript"], proficiency: 40 },
  { id: 5, category: "Database", items: ["MySQL", "Oracle", "MongoDB", "ERD 설계"], proficiency: 75 },
  { id: 6, category: "DevOps & Tools", items: ["Git/GitHub", "Docker", "AWS (EC2, RDS)", "Linux"], proficiency: 60 },
  { id: 7, category: "협업 도구", items: ["Notion", "Figma", "Slack", "draw.io"], proficiency: 90 },
];

const TIMELINE_DATA = [
  {
    id: 1,
    date: "2025.03 – 2025.06",
    title: "구름톤 유니브 4기 — 기획 파트",
    description: "카카오·구름 주최 기획 스터디, Farm2you·GrowMe 프로젝트 개발",
    details: [
      "매주 강의 수강 및 스터디 진행",
      "Farm2you — 농산물 직거래 플랫폼 기획 파트 리드",
      "GrowMe — 자기성장 멘탈헬스 앱 기획 + 프론트엔드 담당 (해커톤)",
    ],
    type: "activity",
  },
  {
    id: 2,
    date: "2024.09 – 2024.12",
    title: "iCatch — AI CCTV 케어 플랫폼",
    description: "졸업 프로젝트 팀장으로 B2C 양면 케어 서비스 기획 및 개발",
    details: [
      "독거노인·반려동물 보호자 두 사용자군 니즈 동시 분석",
      "DB 설계 주도 (ERD, 테이블 관계·PK·타입)",
      "IoT 응답 시간 실시간 모니터링 기능 구현",
    ],
    type: "project",
  },
  {
    id: 3,
    date: "2024.09 – 2024.12",
    title: "스마트 주차 안내 시스템 — 최우수상·우수상",
    description: "현장 관찰로 문제를 발견하고, YOLO AI로 해결한 P-학기제 프로젝트",
    details: [
      "교내 주차 문제 현장 관찰 → 아이디어 제안 → 서비스 기획",
      "폭설 변수 발생 시 방수 케이스 제작 + AI 재학습으로 4주 내 완성",
      "P-학기제 최우수상 · 학생경진대회 우수상 수상",
    ],
    type: "project",
  },
  {
    id: 4,
    date: "2024.03 – 2024.07",
    title: "코드인 — 교내 개발 동아리",
    description: "가천대학교 개발 동아리 활동, 조별 언어 스터디 주 1회",
    details: ["Java, Python 등 언어 스터디 참여"],
    type: "activity",
  },
  {
    id: 5,
    date: "2024.03",
    title: "가천대학교 컴퓨터공학과 편입",
    description: "백엔드 개발에서 서비스 기획·데이터 분석으로 관심 확장",
    details: ["Java, Spring Boot, React 등 개발 역량 심화"],
    type: "education",
  },
  {
    id: 6,
    date: "2022.09",
    title: "카페 파트타임 시작",
    description: "4년 이상 고객 응대 경험으로 실제 유저 공감력 형성",
    details: [
      "고객 응대 및 운영 경험 4년 이상",
      "신규 직원 트레이닝 담당",
    ],
    type: "activity",
  },
  {
    id: 7,
    date: "2020.03 – 2023.01",
    title: "한양여자대학교 스마트IT과 졸업",
    description: "전문학사 졸업, 개발의 기초를 다진 시기",
    details: ["Java, 데이터베이스, 네트워크 등 기초 학습"],
    type: "education",
  },
];

export function useProjects() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    try {
      dispatch(setProjects(PROJECTS_DATA));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }, [dispatch]);
}

export function useSkills() {
  const [skills] = useState(SKILLS_DATA);
  const [loading] = useState(false);
  return { skills, loading };
}

export function useTimeline() {
  const [timeline] = useState(TIMELINE_DATA);
  const [loading] = useState(false);
  return { timeline, loading };
}

export function useVisitor() {
  const dispatch = useDispatch();
  useEffect(() => {
    const stored = parseInt(localStorage.getItem('visitorCount') || '0', 10);
    const hasVisited = sessionStorage.getItem('hasVisited') === 'true';
    if (!hasVisited) {
      const newCount = stored + 1;
      localStorage.setItem('visitorCount', newCount);
      sessionStorage.setItem('hasVisited', 'true');
      dispatch(setVisitorCount(newCount));
      dispatch(incrementVisitor());
    } else {
      dispatch(setVisitorCount(stored));
    }
  }, [dispatch]);
}

export function useScrollToSection() {
  const sectionRefs = useRef({});
  const registerSection = useCallback((name, ref) => {
    sectionRefs.current[name] = ref;
  }, []);
  const scrollToSection = useCallback((name) => {
    const section = sectionRefs.current[name];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);
  return { registerSection, scrollToSection, sectionRefs };
}

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsIntersecting(entry.isIntersecting); },
      { threshold: 0.1, ...options }
    );
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => { if (currentTarget) observer.unobserve(currentTarget); };
  }, [options]);
  return { targetRef, isIntersecting };
}

export function useGuestbook() {
  const dispatch = useDispatch();
  const createEntry = useCallback(async (name, message) => {
    try {
      const entry = {
        id: Date.now(),
        name: name || '익명',
        message,
        createdAt: new Date().toISOString(),
      };
      dispatch({ type: 'guestbook/addEntry', payload: entry });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, [dispatch]);
  const removeEntry = useCallback(async (id) => {
    dispatch({ type: 'guestbook/removeEntry', payload: id });
  }, [dispatch]);
  return { createEntry, removeEntry };
}