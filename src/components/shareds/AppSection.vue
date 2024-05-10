<script setup></script>
<template>
  <div class="container py-8">
    <div
      class="flex items-center justify-between border-b border-gray-200 pb-1"
    >
      <slot name="header" />
    </div>
    <div class="pt-8">
      <slot name="content" />
    </div>
  </div>
</template>
