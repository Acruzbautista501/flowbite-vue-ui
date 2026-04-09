<script setup lang="ts">
import { ref } from 'vue'
import BaseBanner from '@/components/ui/banner/BaseBanner.vue'

const showDefaultBanner = ref(true)
const showBottomBanner = ref(true)
const showMarketingBanner = ref(true)
const showNewsletterBanner = ref(true)
const showInfoBanner = ref(true)
const showSuccessBanner = ref(true)
const showWarningBanner = ref(true)
const showDangerBanner = ref(true)

const newsletterEmail = ref('')
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
    <!-- Sticky banners -->
    <BaseBanner
      v-model:visible="showDefaultBanner"
      id="default-banner"
      variant="default"
      position="top"
      icon="megaphone"
      message="New brand identity has been launched for the Flowbite Library."
      :actions="[
        {
          label: 'Learn more',
          href: '#',
          variant: 'ghost',
        },
      ]"
    />

    <BaseBanner
      v-model:visible="showBottomBanner"
      id="bottom-banner"
      variant="bottom"
      position="bottom"
      icon="discount"
      message="Get 5% commission per sale."
      :actions="[
        {
          label: 'Become a partner',
          href: '#',
          variant: 'ghost',
        },
      ]"
    />

    <div class="max-w-6xl mx-auto px-6 py-28 space-y-14">
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight">
          Banner - Flowbite 4 en Vue 3
        </h1>
        <p class="mt-2 text-slate-600 dark:text-slate-400">
          Implementación reusable con Composition API + TypeScript + TailwindCSS 4
        </p>
      </div>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Default sticky banner</h2>
        <div class="relative border border-dashed border-slate-300 dark:border-slate-700 rounded-xl min-h-[140px] overflow-hidden">
          <BaseBanner
            v-model:visible="showDefaultBanner"
            variant="default"
            :sticky="false"
            position="top"
            icon="megaphone"
            message="New brand identity has been launched for the Flowbite Library."
            :actions="[
              {
                label: 'Learn more',
                href: '#',
                variant: 'ghost',
              },
            ]"
          />
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Bottom banner position</h2>
        <div class="relative border border-dashed border-slate-300 dark:border-slate-700 rounded-xl min-h-[160px] overflow-hidden">
          <BaseBanner
            v-model:visible="showBottomBanner"
            variant="bottom"
            :sticky="false"
            position="bottom"
            icon="discount"
            message="Get 5% commission per sale."
            :actions="[
              {
                label: 'Become a partner',
                href: '#',
                variant: 'ghost',
              },
            ]"
          />
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Marketing CTA banner</h2>
        <div class="relative min-h-[180px]">
          <BaseBanner
            v-model:visible="showMarketingBanner"
            variant="marketing"
            :sticky="false"
            position="floating"
            icon="info"
            title="Flowbite"
            message="Build websites even faster with components on top of Tailwind."
            :actions="[
              {
                label: 'Sign Up',
                href: '#',
                variant: 'primary',
              },
            ]"
          />
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Newsletter sign-up banner</h2>
        <div class="relative border border-dashed border-slate-300 dark:border-slate-700 rounded-xl min-h-[180px] overflow-hidden">
          <BaseBanner
            v-model:visible="showNewsletterBanner"
            variant="newsletter"
            :sticky="false"
            position="top"
            icon="mail"
            dismissible
          >
            <template #content>
              <form
                class="flex flex-col items-center w-full md:flex-row md:space-x-4 space-y-4 md:space-y-0"
                @submit.prevent
              >
                <label
                  for="email"
                  class="shrink-0 mb-4 me-auto text-sm font-medium text-heading dark:text-white md:mb-0 md:me-4 md:m-0"
                >
                  Sign up now
                </label>

                <input
                  id="email"
                  v-model="newsletterEmail"
                  type="email"
                  class="block w-full md:w-64 px-3 py-2.5 bg-neutral-secondary-medium dark:bg-slate-800 border border-default dark:border-slate-700 text-heading dark:text-white text-sm rounded-base shadow-xs placeholder:text-body dark:placeholder:text-slate-400 focus:ring-brand focus:border-brand"
                  placeholder="Enter your email"
                  required
                />

                <button
                  type="submit"
                  class="w-full md:w-auto text-white bg-brand hover:bg-brand-strong border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-sm px-4 py-2.5 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </template>
          </BaseBanner>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Informational banner</h2>
        <div class="relative border border-dashed border-slate-300 dark:border-slate-700 rounded-xl min-h-[180px] overflow-hidden">
          <BaseBanner
            v-model:visible="showInfoBanner"
            variant="informational"
            :sticky="false"
            position="top"
            icon="info"
            title="Integration is the key"
            message="You can integrate Flowbite with many tools to make your work even more efficient and lightning fast based on Tailwind."
            :actions="[
              {
                label: 'Sign Up',
                href: '#',
                variant: 'primary',
              },
            ]"
          />
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Status banners</h2>

        <div class="space-y-4">
          <BaseBanner
            v-model:visible="showSuccessBanner"
            variant="success"
            :sticky="false"
            position="top"
            icon="success"
            title="Success"
            message="Your project has been deployed successfully."
          />

          <BaseBanner
            v-model:visible="showWarningBanner"
            variant="warning"
            :sticky="false"
            position="top"
            icon="warning"
            title="Warning"
            message="There are pending changes that haven't been saved yet."
          />

          <BaseBanner
            v-model:visible="showDangerBanner"
            variant="danger"
            :sticky="false"
            position="top"
            icon="error"
            title="Error"
            message="Something went wrong while processing your request."
          />
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Custom slot example</h2>

        <BaseBanner
          variant="marketing"
          :sticky="false"
          position="floating"
          icon="custom"
          dismissible
        >
          <template #icon>
            <div class="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-700 dark:text-violet-300 font-bold">
              AI
            </div>
          </template>

          <template #content>
            <div class="space-y-1">
              <h3 class="text-base font-semibold text-heading dark:text-white">
                Launch your SaaS faster
              </h3>
              <p class="text-sm text-body dark:text-slate-300">
                Use reusable UI components with Vue 3, TypeScript and TailwindCSS 4.
              </p>
            </div>
          </template>

          <template #actions>
            <button
              class="text-white bg-brand hover:bg-brand-strong border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-sm px-4 py-2.5 transition-colors duration-200"
            >
              Start now
            </button>
          </template>
        </BaseBanner>
      </section>
    </div>
  </div>
</template>