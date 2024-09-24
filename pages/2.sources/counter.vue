<script setup lang="ts">
definePageMeta({
  label: 'Counter',
  groups: ['Sources'],
})

const counter = ref(0)
function inc() {
  counter.value += 1
}
function dec() {
  counter.value -= 1
}
</script>

<template>
  <div class="flex flex-col gap-5 w-full h-full items-center justify-center">
    <div>
      Counter: {{ counter }}
    </div>
    <div class="flex gap-5">
      <button @click="inc">
        +1
      </button>
      <button @click="dec">
        -1
      </button>
    </div>
  </div>
</template>
