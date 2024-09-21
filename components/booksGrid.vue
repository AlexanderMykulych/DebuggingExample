<script setup>
defineProps({
  booksData: Array,
  backet: Array,
})

const emit = defineEmits(['buy', 'remove'])
</script>

<template>
  <DataView :value="booksData" layout="grid">
    <template #grid="{ items }">
      <div class="grid grid-cols-12 gap-4">
        <booksGridItem
          v-for="(item, index) in items"
          :key="index"
          :book="item"
          :backet="backet"
          class="col-span-12 sm:col-span-4 md:col-span-4 xl:col-span-4 p-2"
          @buy="emit('buy', item)"
          @remove="emit('remove', item)"
        />
      </div>
    </template>
  </DataView>
</template>
