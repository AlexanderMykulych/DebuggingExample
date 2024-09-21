<script setup>
definePageMeta({
  label: 'Get Data from API',
  groups: ['Network'],
})

const data = ref([])
async function getMovies() {
  const { data: moviesData } = await useFetch('/api/movies')

  data.value = moviesData.value.movies
}

const castModalVisible = ref(false)
const selectedMovie = ref(null)

function showCast(movie) {
  selectedMovie.value = movie

  castModalVisible.value = true
}
</script>

<template>
  <div class="flex flex-col gap-10 m-10">
    <Button @click="getMovies">
      Get Movies
    </Button>

    <DataTable :value="data" table-style="min-width: 50rem" striped-rows>
      <Column field="title" sortable header="Title" />
      <Column field="director" sortable header="Director" />
      <Column field="release_year" header="Year" />
      <Column field="genre" header="Genre" />
      <Column field="rating" sortable header="Rating" />
      <Column header="Rating">
        <template #body="{ data }">
          <button @click="showCast(data)">
            Show Cast
          </button>
        </template>
      </Column>
    </DataTable>

    <Dialog
      v-if="selectedMovie"
      v-model:visible="castModalVisible"
      modal
      :header="`${selectedMovie.title} cast`"
      :style="{ width: '25rem' }"
    >
      <DataTable v-if="selectedMovie.cast" :value="selectedMovie.cast" striped-rows>
        <Column field="actor" header="Actor" />
        <Column field="role" header="Role" />
      </DataTable>
    </Dialog>
  </div>
</template>
