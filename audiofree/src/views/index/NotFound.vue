<template>
   <main class="not-found">
      <div class="container">
         <h1 class="not-found__title">К сожалению, такой страницы не найдено</h1>
         <p class="not-found__paragraph">
            <router-link :to="{ name: 'home' }" class="not-found__link">Перейти на главную</router-link>
         </p>
         <p class="not-found__paragraph" v-if="previousPage">
            <a class="not-found__link">или вернуться на предыдущую страницу</a>
         </p>
      </div>
   </main>
</template>

<script>
export default {
   name: "NotFound",
   computed: {
      previousPage() {
         // return this.$route.back
      },
   },
};
</script>