<script setup lang="ts">
import { useFuse } from '@vueuse/integrations/useFuse'
import { ref } from 'vue'

const router = useRouter()

const visible = ref(false)

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

function optionClick() {
  visible.value = false
}

function mainPage() {
  router.push('/')
  visible.value = false
}
</script>

<template>
  <main>
    <Drawer v-model:visible="visible">
      <template #header>
        <div
          class="flex text-2xl gap-2 justify-center items-center cursor-pointer"
          @click="mainPage"
        >
          <div class="i-noto-man-detective text-5xl" />
          Debugging Detective
        </div>
      </template>
      <cases @click="optionClick" />
    </Drawer>
    <Button
      icon="pi pi-bars"
      class="absolute top-50% h-30px w-30px left-[-20px] hover:left-0px"
      @click="visible = true"
    />
    <slot />
  </main>
</template>
