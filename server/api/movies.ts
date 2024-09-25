export default defineEventHandler((event) => {
  event.node.res.setHeader('Custom-Header', `${Math.floor(Math.random() * 10) + 1}`)

  if (event.node.req.headers.ua) {
    return {
      movies: [
        {
          title: 'Захар Беркут',
          director: 'Ахтем Сеітаблаєв',
          release_year: 2019,
          genre: 'Історичний',
          rating: 7.5,
          cast: [
            {
              actor: 'Роман Луцький',
              role: 'Іван Беркута',
            },
            {
              actor: 'Олег Волощенко',
              role: 'Захар Беркут',
            },
          ],
          box_office: {
            budget: 113000000,
            gross_usa: 3000000,
            gross_worldwide: 9000000,
          },
        },
        {
          title: 'Плем\'я',
          director: 'Мирослав Слабошпицький',
          release_year: 2014,
          genre: 'Драма',
          rating: 8.0,
          cast: [
            {
              actor: 'Григорій Фесенко',
              role: 'Сергій',
            },
            {
              actor: 'Яна Новікова',
              role: 'Анна',
            },
          ],
          box_office: {
            budget: 1500000,
            gross_usa: 135000,
            gross_worldwide: 515000,
          },
        },
        {
          title: 'Дике Поле',
          director: 'Ярослав Лодигін',
          release_year: 2018,
          genre: 'Драма',
          rating: 7.2,
          cast: [
            {
              actor: 'Олег Москаленко',
              role: 'Герман',
            },
            {
              actor: 'Володимир Ямненко',
              role: 'Калинич',
            },
          ],
          box_office: {
            budget: 37000000,
            gross_usa: 100000,
            gross_worldwide: 300000,
          },
        },
        {
          title: 'Кіборги',
          director: 'Ахтем Сеітаблаєв',
          release_year: 2017,
          genre: 'Військовий',
          rating: 8.4,
          cast: [
            {
              actor: 'В\'ячеслав Довженко',
              role: 'Серпень',
            },
            {
              actor: 'Макар Тихомиров',
              role: 'Мажор',
            },
          ],
          box_office: {
            budget: 48000000,
            gross_usa: 200000,
            gross_worldwide: 850000,
          },
        },
        {
          title: 'Толока',
          director: 'Михайло Іллєнко',
          release_year: 2020,
          genre: 'Історичний',
          rating: 7.0,
          cast: [
            {
              actor: 'Іванна Іллєнко',
              role: 'Катерина',
            },
            {
              actor: 'Дмитро Рибалевський',
              role: 'Михайло',
            },
          ],
          box_office: {
            budget: 15000000,
            gross_usa: 50000,
            gross_worldwide: 250000,
          },
        },
        {
          title: 'Мої думки тихі',
          director: 'Антоніо Лукіч',
          release_year: 2019,
          genre: 'Комедія',
          rating: 8.1,
          cast: [
            {
              actor: 'Ірма Вітовська',
              role: 'Галина',
            },
            {
              actor: 'Андрій Лідаговський',
              role: 'Вадим',
            },
          ],
          box_office: {
            budget: 9000000,
            gross_usa: 150000,
            gross_worldwide: 550000,
          },
        },
      ],
    }
  }

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
