<template>
  <footer class="footer">
    <p class="text">
      Данное приложение создано в целях обучения студентом энтузиастом, которому завтра нужно идти
      на склад.
    </p>
    <div class="social_media">
        <a class="link" href="https://vk.com/ne4eburashkaa">вк</a>
        <a class="link" href="https://github.com/skiddrnme">гитхаб</a>
        <a class="link" href="https://t.me/skiddinrmne">телега</a>
    </div>
  </footer>
</template>
<script setup></script>
<style scoped>
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.link{
    margin-left: 10px;
}
</style>
