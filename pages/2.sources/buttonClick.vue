<script setup>
definePageMeta({
  label: 'Button Native Click',
  groups: ['Sources'],
})

function onClick() {
  alert('Button clicked!')
}
</script>

<template>
  <div>
    <button @click="onClick">
      Click Here!
    </button>
  </div>
</template>
