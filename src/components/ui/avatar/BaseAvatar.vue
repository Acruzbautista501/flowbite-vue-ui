<script setup lang="ts">
import { computed } from 'vue'
import { useAvatar } from '@/composables/ui/avatar/useAvatar'
import type { AvatarProps } from '@/interfaces/ui/avatar/Avatar'

const props = withDefaults(defineProps<AvatarProps>(), {
  alt: 'Avatar',
  size: 'lg',
  rounded: 'full',
  bordered: false,
  ringColor: 'ring-default',
  placeholder: 'icon',
  status: 'none',
  statusPosition: 'bottom-right',
  clickable: false,
  text: false,
  dropdown: false,
  dropdownItems: () => [
    { label: 'Dashboard', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Earnings', href: '#' },
    { label: 'Sign out', href: '#', danger: true },
  ],
})

const {
  isDropdownOpen,
  wrapperClasses,
  avatarBoxClasses,
  imageClasses,
  placeholderClasses,
  iconClasses,
  showImage,
  showInitials,
  showIcon,
  statusClasses,
  textContainerClasses,
  subtitleClasses,
  tooltipClasses,
  dropdownMenuClasses,
  toggleDropdown,
  onImageError,
} = useAvatar(props)

const rootTag = computed(() => (props.clickable || props.dropdown ? 'button' : 'div'))
</script>

<template>
  <div
    ref="rootRef"
    class="relative inline-block"
  >
    <!-- VERSION CON TEXTO -->
    <div
      v-if="text"
      class="flex items-center gap-2.5"
    >
      <component
        :is="rootTag"
        class="group relative inline-flex shrink-0"
        :class="{ 'cursor-pointer': clickable || dropdown }"
        :type="clickable || dropdown ? 'button' : undefined"
        @click="toggleDropdown"
      >
        <div :class="wrapperClasses">
          <div :class="avatarBoxClasses">
            <!-- Imagen -->
            <img
              v-if="showImage"
              :src="src"
              :alt="alt"
              :class="imageClasses"
              @error="onImageError"
            />

            <!-- Placeholder -->
            <div
              v-else
              :class="placeholderClasses"
            >
              <span
                v-if="showInitials"
                class="font-medium"
              >
                {{ initials }}
              </span>

              <svg
                v-else-if="showIcon"
                :class="iconClasses"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <!-- Dot indicator -->
            <span
              v-if="status !== 'none'"
              :class="statusClasses"
            />
          </div>

          <!-- Tooltip -->
          <div
            v-if="tooltip"
            :class="tooltipClasses"
          >
            {{ tooltip }}
            <div class="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900 dark:bg-gray-700" />
          </div>
        </div>
      </component>

      <div :class="textContainerClasses">
        <div>{{ name }}</div>
        <div
          v-if="subtitle"
          :class="subtitleClasses"
        >
          {{ subtitle }}
        </div>
      </div>
    </div>

    <!-- VERSION NORMAL -->
    <component
      :is="rootTag"
      v-else
      class="group relative inline-flex shrink-0"
      :class="{ 'cursor-pointer': clickable || dropdown }"
      :type="clickable || dropdown ? 'button' : undefined"
      @click="toggleDropdown"
    >
      <div :class="wrapperClasses">
        <div :class="avatarBoxClasses">
          <!-- Imagen -->
          <img
            v-if="showImage"
            :src="src"
            :alt="alt"
            :class="imageClasses"
            @error="onImageError"
          />

          <!-- Placeholder -->
          <div
            v-else
            :class="placeholderClasses"
          >
            <span
              v-if="showInitials"
              class="font-medium"
            >
              {{ initials }}
            </span>

            <svg
              v-else-if="showIcon"
              :class="iconClasses"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <!-- Dot indicator -->
          <span
            v-if="status !== 'none'"
            :class="statusClasses"
          />
        </div>

        <!-- Tooltip -->
        <div
          v-if="tooltip"
          :class="tooltipClasses"
        >
          {{ tooltip }}
          <div class="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900 dark:bg-gray-700" />
        </div>
      </div>
    </component>

    <!-- Dropdown -->
    <div
      v-if="dropdown && isDropdownOpen"
      :class="dropdownMenuClasses"
    >
      <div
        v-if="name || email"
        class="border-b border-gray-200 px-4 py-3 text-sm text-gray-900 dark:border-gray-700 dark:text-white"
      >
        <div
          v-if="name"
          class="font-medium"
        >
          {{ name }}
        </div>
        <div
          v-if="email"
          class="truncate text-gray-500 dark:text-gray-400"
        >
          {{ email }}
        </div>
      </div>

      <ul class="p-2 text-sm font-medium">
        <li
          v-for="(item, index) in dropdownItems"
          :key="index"
        >
          <a
            :href="item.href || '#'"
            class="block w-full rounded-md p-2 transition-colors"
            :class="
              item.danger
                ? 'text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
            "
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>