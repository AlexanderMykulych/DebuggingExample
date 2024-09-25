<script setup>
definePageMeta({
  label: 'Counter',
  groups: ['Sources'],
})

const counter = ref(0)

function logCounter() {
  console.log('Hello from logCounter')

  console.log('Counter value: ', counter.value)
}

function inc() {
  counter.value += 3

  logCounter()
}
function dec() {
  if (counter.value <= 1) {
    throw new Error('Must be greater than 0')
  }

  counter.value -= 1
}

function incNumber(n) {
  inc()

  if (n > 1) {
    incNumber(n - 1)
  }
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
      <button @click="incNumber(10)">
        +10
      </button>
    </div>
  </div>
</template>
