<template>
  <div>
    <header class="fixed top-0 left-0 right-0 z-50 pointer-events-none sm:px-6">
      <div class="flex items-center justify-between py-2">
        <div class="flex-1 pointer-events-auto pl-4 sm:pl-0 sm:visible">
          <Logo />
        </div>
        <div class="pointer-events-auto hidden sm:block">
          <LayoutNavbar />
        </div>
        <div class="flex-1 flex justify-end pointer-events-auto px-4 sm:px-0">
          <SettingsLanguageToggle />
        </div>
      </div>
    </header>

    <div class="fixed top-2 left-4 z-50 pointer-events-auto sm:hidden">
      <!-- Mobile logo can stay here if desired, but we already have it in the top header which is fixed. -->
    </div>

    <LayoutNavbar class="fixed bottom-0 z-50 w-full sm:hidden pointer-events-auto" />
    <div class="sm:mt-[60px] mb-[70px] sm:mb-0">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
