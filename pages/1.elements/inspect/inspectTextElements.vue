<script setup lang="ts">
definePageMeta({
  label: 'Inspect Text Elements',
  groups: ['Elements'],
})
</script>

<template>
  <div class="m-10">
    <h1>Книги українських авторів</h1>

    <section class="book-section">
      <h2 class="book-title">
        Маруся Чурай
      </h2>
      <p class="book-author">
        Автор: Ліна Костенко
      </p>
      <img src="/images/marusa-churai.png" alt="Маруся Чурай" class="h-120px">
      <p><strong>Жанр:</strong> Історичний роман</p>
      <p><strong>Рік видання:</strong> 1979</p>
      <p>
        <em>Маруся Чурай</em> — це історичний роман про легендарну українську народну співачку і поетку, який відображає боротьбу за честь та свободу в контексті трагічної долі героїні.
      </p>
      <blockquote>
        "У цьому романі оживає епоха, яка не лише пробуджує почуття національної гідності, але й відкриває простір для роздумів про свободу і долю."
      </blockquote>
    </section>

    <section class="book-section">
      <h2 class="book-title">
        Кобзар
      </h2>
      <p class="book-author">
        Автор: Тарас Шевченко
      </p>
      <img src="/images/kobzar.png" alt="Кобзар" class="h-110px">
      <p><strong>Жанр:</strong> Поезія</p>
      <p><strong>Рік видання:</strong> 1840</p>
      <p>
        <em>Кобзар</em> — це збірка віршів та поем Тараса Шевченка, яка стала символом української культури та відображає духовну боротьбу українського народу за свободу та незалежність.
      </p>
      <ul>
        <li>Перший випуск «Кобзаря» містив лише вісім віршів.</li>
        <li>Це одна з найважливіших книг української літератури.</li>
        <li>Вірші з «Кобзаря» були написані у важливі моменти життя поета.</li>
      </ul>
    </section>

    <section class="book-section">
      <h2 class="book-title">
        Записки українського самашедшого
      </h2>
      <p class="book-author">
        Автор: Ліна Костенко
      </p>
      <img src="/images/zapysky.png" alt="Записки українського самашедшого" class="h-110px">
      <p><strong>Жанр:</strong> Сучасна проза</p>
      <p><strong>Рік видання:</strong> 2010</p>
      <p>
        <em>Записки українського самашедшого</em> — це роман-роздум про сучасне суспільство через призму особистого досвіду головного героя, що відкриває теми суспільної кризи, медіа-впливу та глобалізації.
      </p>
    </section>

    <footer>
      © 2024 Книжковий магазин українських авторів.
    </footer>
  </div>
</template>

<style scoped>
h1 {
  color: #333;
}
.book-section {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 15px;
}
.book-section img {
  float: right;
  margin-left: 15px;
  max-width: 150px;
}
.book-title {
  color: #007bff;
  font-size: 1.4em;
  margin-top: 0;
}
.book-author {
  font-style: italic;
  color: #555;
}
ul {
  padding-left: 20px;
}
blockquote {
  background-color: #f1f1f1;
  border-left: 5px solid #007bff;
  margin: 15px 0;
  padding: 10px;
  font-style: italic;
  color: #555;
}
footer {
  margin-top: 30px;
  font-size: 0.9em;
  color: #777;
  text-align: center;
}
</style>
