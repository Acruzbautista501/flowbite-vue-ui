<script setup lang="ts">
import BaseAvatar from '@/components/ui/avatar/BaseAvatar.vue'
import BaseAvatarGroup from '@/components/ui/avatar/BaseAvatarGroup.vue'

const avatarUrl = 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
const avatarUrl2 = 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
const avatarUrl3 = 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
const avatarUrl4 = 'https://flowbite.com/docs/images/people/profile-picture-4.jpg'

const avatarGroup = [
  { src: avatarUrl, tooltip: 'Jese Leos' },
  { src: avatarUrl2, tooltip: 'Roberta Casas' },
  { src: avatarUrl3, tooltip: 'Bonnie Green' },
  { src: avatarUrl4, tooltip: 'John Doe' },
  { initials: 'AL', tooltip: 'Aldair' },
]
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white p-8">
    <div class="max-w-6xl mx-auto space-y-12">
      <div>
        <h1 class="text-3xl font-bold mb-2">Avatar</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Componente Avatar inspirado en Flowbite con Vue 3 + TypeScript + Tailwind CSS.
        </p>
      </div>

      <!-- Default -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Default avatar</h2>
        <div class="flex items-center gap-4 flex-wrap">
          <BaseAvatar :src="avatarUrl" rounded="full" />
          <BaseAvatar :src="avatarUrl" rounded="base" />
        </div>
      </section>

      <!-- Bordered -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Bordered</h2>
        <div class="flex items-center gap-4 flex-wrap">
          <BaseAvatar :src="avatarUrl" bordered rounded="full" />
          <BaseAvatar :src="avatarUrl" bordered rounded="base" />
        </div>
      </section>

      <!-- Placeholder Icon -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Placeholder icon</h2>
        <div class="flex items-center gap-4 flex-wrap">
          <BaseAvatar placeholder="icon" />
          <BaseAvatar placeholder="icon" rounded="base" />
        </div>
      </section>

      <!-- Placeholder Initials -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Placeholder initials</h2>
        <div class="flex items-center gap-4 flex-wrap">
          <BaseAvatar placeholder="initials" initials="JL" />
          <BaseAvatar placeholder="initials" initials="AC" rounded="base" />
        </div>
      </section>

      <!-- Tooltip -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Avatar tooltip</h2>
        <div class="flex items-center gap-8 flex-wrap pt-10">
          <BaseAvatar :src="avatarUrl" tooltip="Jese Leos" rounded="base" />
          <BaseAvatar :src="avatarUrl4" tooltip="Roberta Casas" rounded="base" />
          <BaseAvatar :src="avatarUrl3" tooltip="Bonnie Green" rounded="base" />
        </div>
      </section>

      <!-- Dot Indicator -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Dot indicator</h2>
        <div class="flex items-center gap-6 flex-wrap">
          <BaseAvatar
            :src="avatarUrl"
            status="online"
            status-position="top-right"
          />
          <BaseAvatar
            :src="avatarUrl"
            rounded="base"
            status="busy"
            status-position="top-right"
          />
          <BaseAvatar
            :src="avatarUrl"
            status="online"
            status-position="bottom-left"
          />
          <BaseAvatar
            :src="avatarUrl"
            rounded="base"
            status="away"
            status-position="bottom-right"
          />
        </div>
      </section>

      <!-- Stacked -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Stacked</h2>
        <div class="space-y-4">
          <BaseAvatarGroup :items="avatarGroup.slice(0, 4)" />
          <BaseAvatarGroup :items="avatarGroup" :max="3" />
        </div>
      </section>

      <!-- Avatar text -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Avatar text</h2>
        <div class="flex flex-col gap-4">
          <BaseAvatar
            :src="avatarUrl"
            text
            name="Jese Leos"
            subtitle="Joined in August 2014"
          />
          <BaseAvatar
            placeholder="initials"
            initials="AC"
            text
            name="Aldair Cruz"
            subtitle="Frontend Developer"
          />
        </div>
      </section>

      <!-- User dropdown -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">User dropdown</h2>
        <div class="flex items-center gap-4">
          <BaseAvatar
            :src="avatarUrl"
            dropdown
            name="Bonnie Green"
            email="name@flowbite.com"
            tooltip="Abrir menú"
          />
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="flex items-center gap-4 flex-wrap">
          <BaseAvatar :src="avatarUrl" size="xs" rounded="sm" />
          <BaseAvatar :src="avatarUrl" size="sm" rounded="sm" />
          <BaseAvatar :src="avatarUrl" size="md" rounded="base" />
          <BaseAvatar :src="avatarUrl" size="lg" rounded="base" />
          <BaseAvatar :src="avatarUrl" size="xl" rounded="base" />
          <BaseAvatar :src="avatarUrl" size="2xl" rounded="base" />
        </div>
      </section>
    </div>
  </div>
</template>