import { configureStore, createSlice } from '@reduxjs/toolkit';

// ============================================
// 1. Theme Slice
// ============================================
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: localStorage.getItem('theme') || 'light',
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem('theme', state.mode);
    },
  },
});

// ============================================
// 2. Projects Slice
// ============================================
const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],
    loading: false,
    error: null,
    filter: 'all',
    searchQuery: '',
  },
  reducers: {
    setProjects: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// ============================================
// 3. UI Slice
// ============================================
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isModalOpen: false,
    selectedProject: null,
    isMobileMenuOpen: false,
    activeSection: 'home',
  },
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.selectedProject = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedProject = null;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

// ============================================
// 4. Visitor Slice
// ============================================
const visitorSlice = createSlice({
  name: 'visitor',
  initialState: {
    count: 0,
    hasVisited: sessionStorage.getItem('hasVisited') === 'true',
  },
  reducers: {
    setVisitorCount: (state, action) => {
      state.count = action.payload;
    },
    incrementVisitor: (state) => {
      if (!state.hasVisited) {
        state.count += 1;
        state.hasVisited = true;
        sessionStorage.setItem('hasVisited', 'true');
      }
    },
  },
});

// Export actions
export const { toggleTheme, setTheme } = themeSlice.actions;
export const { setProjects, setLoading, setError, setFilter, setSearchQuery } = projectsSlice.actions;
export const { openModal, closeModal, toggleMobileMenu, closeMobileMenu, setActiveSection } = uiSlice.actions;
export const { setVisitorCount, incrementVisitor } = visitorSlice.actions;

// ============================================
// Store
// ============================================
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    projects: projectsSlice.reducer,
    ui: uiSlice.reducer,
    visitor: visitorSlice.reducer,
  },
});

export default store;