<script setup>
const props = defineProps({
  book: Object,
  backet: Array,
})

const emit = defineEmits(['buy', 'remove'])

const instancesInBacketCount = computed(() => props.backet?.filter(x => x.title === props.book?.title)?.length)
const isInBacket = computed(() => instancesInBacketCount.value > 0)

function buyBook() {
  if (props.backet.length > 5) {
    showPopup()
  }
  emit('buy')
}
</script>

<template>
  <div>
    <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
      <div class="bg-surface-50 flex justify-center rounded p-4">
        <div class="relative mx-auto">
          <img class="rounded w-full max-h-200px" :src="book.coverImage" :alt="book.name" style="max-width: 300px">
        </div>
      </div>
      <div class="pt-6">
        <div class="flex flex-row justify-between items-start gap-2">
          <div class="h-100px">
            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ book.genre }}</span>
            <div class="text-lg font-medium mt-1">
              {{ book.title }} ({{ book.author }})
            </div>
          </div>
          <div class="bg-surface-100 p-1 b-rd-30px">
            <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
              <span class="text-surface-900 font-medium text-sm">{{ book.year }} рік</span>
              <i class="pi pi-star-fill text-yellow-500" />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-6 mt-6">
          <span class="text-2xl font-semibold">${{ book.price }}</span>
          <div class="flex flex-col gap-2">
            <template v-if="isInBacket">
              <div>
                В корзині ({{ instancesInBacketCount }})
              </div>
              <div class="flex gap-10">
                <Button
                  icon="pi pi-shopping-cart"
                  label="-1"
                  class="flex-auto whitespace-nowrap"
                  @click="emit('remove')"
                />
                <Button
                  icon="pi pi-shopping-cart"
                  label="+1"
                  class="flex-auto whitespace-nowrap"
                  @click="emit('buy')"
                />
              </div>
            </template>
            <Button
              v-else
              icon="pi pi-shopping-cart"
              :label="isInBacket ? '+1' : 'Купити'"
              class="flex-auto whitespace-nowrap"
              @click="buyBook"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
