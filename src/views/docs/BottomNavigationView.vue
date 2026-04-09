<script setup lang="ts">
import { ref } from 'vue'
import {
  faHouse,
  faWallet,
  faGear,
  faUser,
  faMagnifyingGlass,
  faBookmark,
  faPlus,
  faBell,
  faMicrophone,
  faCamera,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons'

import BaseBottomNavigation from '@/components/ui/bottom-navigation/BaseBottomNavigation.vue'
import type { BottomNavigationItem } from '@/interfaces/ui/bottom-navigation/BottomNavigation'

const activeDefault = ref<string | number>('home')
const activeBordered = ref<string | number>('wallet')
const activeAppBar = ref<string | number>('settings')
const activeControls = ref<string | number>('mic')

const defaultItems: BottomNavigationItem[] = [
  { id: 'home', label: 'Home', icon: faHouse, active: true },
  { id: 'wallet', label: 'Wallet', icon: faWallet },
  { id: 'settings', label: 'Settings', icon: faGear },
  { id: 'profile', label: 'Profile', icon: faUser },
]

const borderedItems: BottomNavigationItem[] = [
  { id: 'home', label: 'Home', icon: faHouse },
  {
    id: 'wallet',
    label: 'Wallet',
    icon: faWallet,
    badge: { value: 3, variant: 'primary' },
    active: true,
  },
  { id: 'settings', label: 'Settings', icon: faGear },
  { id: 'profile', label: 'Profile', icon: faUser },
]

const appBarItems: BottomNavigationItem[] = [
  { id: 'home', label: 'Home', icon: faHouse },
  { id: 'wallet', label: 'Wallet', icon: faWallet },
  { id: 'settings', label: 'Settings', icon: faGear, active: true },
  { id: 'profile', label: 'Profile', icon: faUser },
]

const buttonGroupItems: BottomNavigationItem[] = [
  { id: 'home', label: 'Home', icon: faHouse },
  { id: 'bookmark', label: 'Bookmark', icon: faBookmark },
  { id: 'new', label: 'New Post', icon: faPlus, active: true },
  { id: 'search', label: 'Search', icon: faMagnifyingGlass },
  { id: 'settings', label: 'Settings', icon: faGear },
]

const controlsItems: BottomNavigationItem[] = [
  { id: 'mic', label: 'Mute', icon: faMicrophone, active: true },
  { id: 'camera', label: 'Camera', icon: faCamera },
  { id: 'info', label: 'Info', icon: faCircleInfo },
  { id: 'profile', label: 'Profile', icon: faUser },
]

const cardItems: BottomNavigationItem[] = [
  { id: 'latest', label: 'Latest', icon: faBell, active: true },
  { id: 'following', label: 'Following', icon: faUser },
  { id: 'favorites', label: 'Favorites', icon: faBookmark },
  { id: 'settings', label: 'Settings', icon: faGear },
]

function handleCenterAction() {
  window.alert('Nueva acción central')
}
</script>

<template>
  <section class="space-y-16 px-4 py-10 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
    <div class="space-y-3">
      <h1 class="text-4xl font-black tracking-tight sm:text-5xl">
        Bottom Navigation
      </h1>
      <p class="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">
        Componente UI reutilizable inspirado en Flowbite, construido con Vue 3,
        TypeScript, TailwindCSS y soporte completo para dark mode.
      </p>
    </div>

    <!-- Default -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Default</h2>
      <div class="relative min-h-[180px] rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
        <BaseBottomNavigation
          v-model="activeDefault"
          :items="defaultItems"
          variant="default"
          position="relative"
        />
      </div>
    </div>

    <!-- Bordered -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Bordered</h2>
      <div class="relative min-h-[180px] rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
        <BaseBottomNavigation
          v-model="activeBordered"
          :items="borderedItems"
          variant="bordered"
          position="relative"
        />
      </div>
    </div>

    <!-- App Bar -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">App Bar</h2>
      <div class="relative min-h-[220px] rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
        <BaseBottomNavigation
          v-model="activeAppBar"
          :items="appBarItems"
          variant="app-bar"
          position="relative"
          :center-action="{
            label: 'Create new item',
            icon: faBell,
            onClick: handleCenterAction,
          }"
        />
      </div>
    </div>

    <!-- Button Group -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Button Group</h2>
      <div class="space-y-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div class="inline-flex rounded-2xl border border-gray-200 bg-gray-50 p-1 dark:border-gray-700 dark:bg-gray-800">
          <button class="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white">
            New
          </button>
          <button class="rounded-xl px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-300">
            Popular
          </button>
          <button class="rounded-xl px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-300">
            Following
          </button>
        </div>

        <div class="relative min-h-[180px]">
          <BaseBottomNavigation
            :items="buttonGroupItems"
            variant="button-group"
            position="relative"
          />
        </div>
      </div>
    </div>

    <!-- Card -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Inside Card</h2>
      <div class="mx-auto max-w-md overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div class="max-h-[320px] space-y-4 overflow-y-auto p-5">
          <div
            v-for="n in 6"
            :key="n"
            class="rounded-2xl border border-gray-200 p-4 dark:border-gray-700"
          >
            <div class="mb-2 flex items-center gap-3">
              <div class="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div>
                <p class="font-semibold">Notification {{ n }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Example content for bottom navigation card layout.
                </p>
              </div>
            </div>
          </div>
        </div>

        <BaseBottomNavigation
          :items="cardItems"
          variant="card"
          position="relative"
          :rounded="false"
        />
      </div>
    </div>

    <!-- Controls -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Meeting Controls</h2>
      <div class="space-y-4 rounded-3xl border border-gray-200 bg-gray-950 p-6 text-white shadow-sm dark:border-gray-800">
        <div class="text-center text-lg font-semibold">12:43 PM</div>

        <div class="relative min-h-[180px] rounded-2xl bg-gray-900/70">
          <BaseBottomNavigation
            v-model="activeControls"
            :items="controlsItems"
            variant="controls"
            position="relative"
            :show-top-border="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>