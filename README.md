# 김수림 포트폴리오 🚀

React 기반 개인 포트폴리오 웹사이트입니다.

## 📌 사용된 핵심 기술 (수업 내용 반영)

### 1. React Router (SPA)
- `BrowserRouter`, `Routes`, `Route`, `Link` 컴포넌트 활용
- 페이지 새로고침 없이 빠른 화면 전환 구현
- 파일: `src/App.jsx`

### 2. Redux & Redux Toolkit (상태 관리)
- `configureStore`로 스토어 설정
- `createSlice`로 리듀서 생성 (theme, projects, ui, visitor, guestbook)
- 전역 상태: 다크모드, 프로젝트 필터, 모달 상태, 방문자 수
- 파일: `src/store/store.js`

### 3. REST API & async/await (비동기 통신)
- json-server를 활용한 로컬 REST API 서버
- `fetch` API로 CRUD 작업 구현
  - **GET**: 프로젝트, 스킬, 타임라인, 방명록 조회
  - **POST**: 방명록 작성
  - **DELETE**: 방명록 삭제
  - **PUT**: 방문자 수 업데이트
- 파일: `src/hooks/useApi.js`

### 4. useMemo (성능 최적화)
- 프로젝트 필터링 연산 최적화
- 카테고리별 프로젝트 수 계산 메모이제이션
- 스킬 정렬 연산 최적화
- 파일: `src/Component/Projects.jsx`, `src/Component/Skills.jsx`

### 5. useRef (DOM 접근 & 값 유지)
- 검색 입력창 참조
- 모달 외부 클릭 감지
- 타임라인 아이템 애니메이션 참조
- 폼 입력창 포커스 관리
- 파일: 각 컴포넌트에서 활용

### 6. React Hooks
- `useState`: 로컬 상태 관리
- `useEffect`: 컴포넌트 라이프사이클 관리
- `useRef`: DOM 요소 참조
- `useSelector`, `useDispatch`: Redux 상태 접근

### 7. json-server (개발 환경)
- 별도 백엔드 없이 REST API 테스트 환경 구축
- 파일: `db.json`

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | React 18, React Router 6 |
| 상태관리 | Redux Toolkit, React-Redux |
| 스타일링 | CSS Variables, Flexbox, Grid |
| API | REST API (json-server) |
| 폰트 | Pretendard, JetBrains Mono |

## 📁 프로젝트 구조

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── Component/
│   │   ├── Index.jsx       # 메인 페이지
│   │   ├── About.jsx       # 자기소개
│   │   ├── Timeline.jsx    # 타임라인
│   │   ├── Projects.jsx    # 프로젝트 (useMemo 활용)
│   │   ├── ProjectModal.jsx # 프로젝트 상세 모달
│   │   ├── Skills.jsx      # 스킬 (useMemo 활용)
│   │   └── Guestbook.jsx   # 방명록 (CRUD)
│   ├── store/
│   │   └── store.js        # Redux 스토어 (createSlice)
│   ├── hooks/
│   │   └── useApi.js       # 커스텀 훅 (REST API)
│   ├── App.jsx             # 메인 앱 (Router)
│   ├── App.css             # 스타일시트
│   └── index.js            # 엔트리 포인트
├── db.json                  # json-server 데이터
└── package.json
```

## 🚀 실행 방법

### 1. 의존성 설치
```bash
npm install
```

### 2. json-server 실행 (터미널 1)
```bash
npm run server
# http://localhost:3001 에서 API 서버 실행
```

### 3. React 앱 실행 (터미널 2)
```bash
npm start
# http://localhost:3000 에서 앱 실행
```

### 또는 동시 실행
```bash
npm install concurrently --save-dev
npm run dev
```

## 📝 주요 기능

1. **다크모드/라이트모드**: Redux로 전역 테마 상태 관리
2. **프로젝트 필터링**: useMemo로 최적화된 카테고리별 필터
3. **프로젝트 검색**: 실시간 검색 기능
4. **방명록 CRUD**: REST API로 작성/삭제 기능
5. **방문자 카운트**: 세션 기반 방문자 수 트래킹
6. **반응형 디자인**: 모바일/태블릿/데스크톱 대응

## 👨‍💻 개발자

**김수림** - 가천대학교 컴퓨터공학과 4학년

---

이 포트폴리오는 React 수업에서 배운 내용을 종합적으로 활용하여 제작되었습니다.
