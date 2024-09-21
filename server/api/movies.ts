export default defineEventHandler(() => {
  return {
    movies: [
      {
        title: 'Eclipse of the Dawn',
        director: 'Jane Roberts',
        release_year: 2022,
        genre: 'Drama',
        rating: 8.3,
        cast: [
          {
            actor: 'Mark Dawson',
            role: 'John Reynolds',
          },
          {
            actor: 'Emily Clark',
            role: 'Sarah Matthews',
          },
        ],
        box_office: {
          budget: 50000000,
          gross_usa: 150000000,
          gross_worldwide: 300000000,
        },
      },
      {
        title: 'Starlight Chronicles',
        director: 'Michael Anderson',
        release_year: 2021,
        genre: 'Sci-Fi',
        rating: 7.9,
        cast: [
          {
            actor: 'Lucas Grant',
            role: 'Captain Ezra',
          },
          {
            actor: 'Sophie Mitchell',
            role: 'Lt. Claire',
          },
        ],
        box_office: {
          budget: 100000000,
          gross_usa: 250000000,
          gross_worldwide: 600000000,
        },
      },
      {
        title: 'Whispers of the Forest',
        director: 'Alice Cooper',
        release_year: 2020,
        genre: 'Fantasy',
        rating: 6.5,
        cast: [
          {
            actor: 'John Walters',
            role: 'Dorian the Guide',
          },
          {
            actor: 'Linda Parker',
            role: 'Queen Elara',
          },
        ],
        box_office: {
          budget: 75000000,
          gross_usa: 180000000,
          gross_worldwide: 350000000,
        },
      },
      {
        title: 'Silent Echoes',
        director: 'David Harris',
        release_year: 2019,
        genre: 'Horror',
        rating: 5.7,
        cast: [
          {
            actor: 'Aaron Stone',
            role: 'Detective Mills',
          },
          {
            actor: 'Natalie Grey',
            role: 'Julia Harper',
          },
        ],
        box_office: {
          budget: 20000000,
          gross_usa: 40000000,
          gross_worldwide: 80000000,
        },
      },
      {
        title: 'Beyond the Horizon',
        director: 'Sarah Thompson',
        release_year: 2023,
        genre: 'Adventure',
        rating: 8.9,
        cast: [
          {
            actor: 'Henry Young',
            role: 'Captain Ross',
          },
          {
            actor: 'Emma Davis',
            role: 'Navigator Lucy',
          },
        ],
        box_office: {
          budget: 120000000,
          gross_usa: 350000000,
          gross_worldwide: 900000000,
        },
      },
    ],
  }
})
