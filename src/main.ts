import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/input.css'
import { useTheme } from '@/composables/useTheme'

const { initTheme } = useTheme()
initTheme()

createApp(App).use(router).mount('#app')