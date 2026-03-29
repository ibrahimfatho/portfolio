<script setup lang="ts">
import { computed } from 'vue'

const { locale, setLocale } = useI18n()

const targetLocale = computed(() => locale.value === 'ar' ? 'en' : 'ar')
const targetLabel = computed(() => locale.value === 'ar' ? 'EN' : 'AR')

const switchLanguage = () => {
  setLocale(targetLocale.value)
}
</script>

<template>
  <button
    @click.stop="switchLanguage"
    class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-900/40 px-3 py-1.5 backdrop-blur-xl transition-all hover:bg-zinc-900/80 hover:border-white/20 cursor-pointer active:scale-95"
    aria-label="Toggle language"
  >
    <UIcon name="lucide:globe" class="size-4 text-neutral-300" />
    <span class="font-semibold text-sm text-neutral-300">{{ targetLabel }}</span>
  </button>
</template>
