<script setup>
defineProps({
  backet: Array,
})
</script>

<template>
  <div class="cursor-pointer w-100px">
    <div class="i-tabler:shopping-bag font-300 text-70px color-gray-500" />
    <div class="bg-green-500 color-white min-w-25px max-w-50px w-auto text-center b-rd-20px relative top-[-20px] right-[-36px]">
      <span>{{ backet.length }}</span>
    </div>
  </div>
</template>
