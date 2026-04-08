import { ref, computed } from 'vue'

type ThemeMode = 'light' | 'dark'

const theme = ref<ThemeMode>('light')

const setHtmlTheme = (mode: ThemeMode) => {
  const html = document.documentElement

  if (mode === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

const applyTheme = (mode: ThemeMode) => {
  theme.value = mode
  setHtmlTheme(mode)
  localStorage.setItem('theme', mode)
}

const initTheme = () => {
  const saved = localStorage.getItem('theme') as ThemeMode | null

  if (saved === 'dark' || saved === 'light') {
    theme.value = saved
    setHtmlTheme(saved)
    return
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const initialTheme: ThemeMode = prefersDark ? 'dark' : 'light'

  theme.value = initialTheme
  setHtmlTheme(initialTheme)
}

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  const toggleTheme = () => {
    const newTheme: ThemeMode = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(newTheme)
  }

  return {
    theme,
    isDark,
    applyTheme,
    toggleTheme,
    initTheme,
  }
}