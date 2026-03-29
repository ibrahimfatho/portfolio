<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()

const query = groq`*[_type == "project"] | order(release desc) {
  name,
  "image": image.asset->url,
  link,
  release,
  featured
}`
const { data: projects } = await useSanityQuery<{
  name: string
  image: any
  link: string
  release: string
  featured: boolean
}[]>(query)
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      {{ $t('navigation.programming') }}
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      {{ locale === 'ar' ? 'قائمة بمشاريع البرمجة التي عملت عليها' : 'List of programming projects I worked on' }}
    </h2>
    <Divider class="mb-8 mt-2" />
    <div dir="ltr" class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project
      />
    </div>
  </section>
</template>
