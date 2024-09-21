<script setup>
definePageMeta({
  label: 'Get Data from API. Books',
  groups: ['Network'],
})

const authorData = ref([])
const booksData = computed(() => {
  return authorData.value
    .flatMap(x => x.books.map(book => ({
      ...book,
      author: x.author,
    })))
})

const { data } = await useFetch('/api/books')

authorData.value = data.value

const backet = ref([])
function buyBook(book) {
  backet.value.push(book)
}
function removeBook(book) {
  const index = backet.value.findIndex(x => x.title === book.title)

  if (index > -1) {
    backet.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="flex flex-col gap-10 mx-10">
    <div class="flex justify-between items-center b-b-gray-300 b-b-solid b-b-1px sticky top-0 bg-white z-99 gap-5">
      <span class="text-10">
        Книжковий магазин
      </span>
      <BooksBacket class="right-10px" :backet="backet" />
    </div>
    <booksGrid :books-data="booksData" :backet="backet" @buy="buyBook" @remove="removeBook" />
  </div>
</template>
