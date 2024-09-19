<script setup lang="ts">
import { useFuse } from '@vueuse/integrations/useFuse'
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'click'): void
}>()

const router = useRouter()

const search = ref('')
const selectedValue = ref()
const items = computed(() => router.getRoutes()
  .filter(x => x.meta.label)
  .map(x => ({
    ...x.meta,
    page: x,
  })),
)

const { results } = useFuse(search, items.value, {
  fuseOptions: {
    keys: ['label'],
  },
})

const filteredItems = computed(() => {
  if (results.value?.length > 0) {
    return results.value.map(x => x.item)
  }

  return items.value
})
const groupedItems = computed(() => {
  const result = filteredItems.value.reduce((prevValue, current) => {
    const groups = current.groups

    groups.forEach((group) => {
      if (!prevValue[group]) {
        prevValue[group] = {
          label: '',
          items: [],
        }
      }

      prevValue[group].label = group
      prevValue[group].items.push(current)
    })

    return prevValue
  }, {})

  return Object.entries(result).map(([_key, value]) => value)
})

function optionClick(option) {
  router.push(option.page)

  emit('click')
}
</script>

<template>
  <div class="flex flex-col gap-5 w-full">
    <FloatLabel>
      <InputText id="search" v-model="search" class="w-full" />
      <label for="search">🔍Search</label>
    </FloatLabel>
    <Listbox
      v-model="selectedValue" :options="groupedItems"
      option-label="label" option-group-label="label" option-group-children="items"
      class="w-full h-full" list-style="max-height:100%;"
    >
      <template #option="{ option }">
        <div @click="optionClick(option)">
          {{ option.label }}
        </div>
      </template>
    </Listbox>
  </div>
</template>
