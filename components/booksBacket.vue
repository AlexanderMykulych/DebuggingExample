<script setup>
const props = defineProps({
  backet: Array,
})

const emit = defineEmits(['removeByTitle'])

const isAnyBookInBacket = computed(() => props.backet.length > 0)

const backetGrouped = computed(() => {
  const grouped = props.backet.reduce((prev, cur) => {
    if (!prev[cur.title]) {
      prev[cur.title] = []
    }

    prev[cur.title].push(cur)

    return prev
  }, {})

  return Object.entries(grouped).map(([title, items]) => ({
    title,
    count: items.length,
  }))
})

const backetDialogVisible = ref(false)

function openBacket() {
  backetDialogVisible.value = true
}

function removeByTitle(title) {
  emit('removeByTitle', title)
}
</script>

<template>
  <div
    :class="isAnyBookInBacket ? 'cursor-pointer' : ''"
    class="w-100px" @click="openBacket"
  >
    <div class="i-tabler:shopping-bag font-300 text-70px color-gray-500" />
    <div v-if="isAnyBookInBacket" class="bg-green-500 color-white min-w-25px max-w-50px w-auto text-center b-rd-20px relative top-[-20px] right-[-36px]">
      <span>{{ backet.length }}</span>
    </div>
  </div>
  <Dialog
    v-model:visible="backetDialogVisible"
    modal
    header="Корзина"
    :style="{ width: '25rem' }"
  >
    <DataTable v-if="backetGrouped.length > 0" :value="backetGrouped" striped-rows>
      <Column field="title" header="Книга" />
      <Column field="count" header="Кількість" />
      <Column>
        <template #body="{ data }">
          <div class="i-material-symbols:delete-sharp cursor-pointer" @click="removeByTitle(data.title)" />
        </template>
      </Column>
    </DataTable>
  </Dialog>
</template>
