<script setup lang="ts">
import { useFuse } from '@vueuse/integrations/useFuse'
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'click'): void
}>()

const router = useRouter()

const search = ref('')
const selectedValue = ref()

function getGroupsFromPath(path: string) {
  const paths = path.split('/').filter(x => !!x)

  return paths.slice(0, paths.length - 1)
}
const items = computed(() => router.getRoutes()
  .filter(x => x.meta.label)
  .map(x => ({
    ...x.meta,
    page: x,
    groups: getGroupsFromPath(x.path),
  })),
)

const { results } = useFuse(search, items.value, {
  fuseOptions: {
    keys: ['label', 'groups'],
  },
})

const filteredItems = computed(() => {
  if (results.value?.length > 0) {
    return results.value.map(x => x.item)
  }

  return items.value
})

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const treeItems = computed(() => {
  const tree = []
  function findInTree(root, label) {
    return root.find(x => x.label === label)
  }

  filteredItems.value.forEach((item) => {
    let node = tree

    item.groups.forEach((group) => {
      const childNode = findInTree(node, group)

      if (childNode) {
        node = childNode.children
      }
      else {
        const newNode = {
          key: group,
          label: group,
          children: [],
        }
        node.push(newNode)

        node = newNode.children
      }
    })

    node.push({
      key: item.label,
      label: item.label,
      page: item.page,
    })
  })

  return tree.sort((a, b) => a.label.localeCompare(b.label))
})

function optionClick(option) {
  if (!option.page) {
    return
  }

  router.push(option.page)

  emit('click')
}

const expandedKeys = ref({})

function expandAll() {
  const allGroupsExpandObj = Object.fromEntries(
    filteredItems.value
      .flatMap(x => x.groups)
      .map(x => [x, true]),
  )

  expandedKeys.value = allGroupsExpandObj
};

onMounted(() => expandAll())
</script>

<template>
  <div class="flex flex-col gap-5 w-full">
    <FloatLabel>
      <InputText id="search" v-model="search" class="w-full" />
      <label for="search">🔍Search</label>
    </FloatLabel>
    <Tree v-model:expanded-keys="expandedKeys" :value="treeItems" class="w-full md:w-[30rem]">
      <template #default="{ node }">
        <div class="cursor-pointer" @click="optionClick(node)">
          {{ decodeURIComponent(capitalizeFirstLetter(node.label)) }}
        </div>
      </template>
    </Tree>
  </div>
</template>
