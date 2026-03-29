<template>
  <div class="mt-6 pb-20">
    <Divider />
    <footer class="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6">
      <AboutSignature class="text-[#797979] hidden w-42 translate-x-16 -mb-12 mt-4 sm:block" />
      <AboutSignature class="text-[#797979] black w-32 translate-x-14 -mb-8 mt-4 sm:hidden" />
      <span class="text-center text-sm text-muted">
        © {{ new Date().getFullYear() }}, Ibrahim Fatho - {{ $t("global.all_rights_reserved") }}.
      </span>
    </footer>
  </div>
</template>
