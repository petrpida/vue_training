<template>
  <div class="logos">
    <img src="https://www.fortunaliga.cz/photo/club/85x85/club_6.png?4" alt="Banik-logo" width="100" height="100">
    <img src="https://www.fortunaliga.cz/photo/club/85x85/club_17.png?4" alt="Olomouc-logo" width="100" height="100">
    <img src="https://www.fortunaliga.cz/photo/club/85x85/club_89.png?4" alt="Slavia-logo" width="100" height="100">
    <img src="https://www.fortunaliga.cz/photo/club/85x85/club_5.png?4" alt="Sparta-logo" width="100" height="100">
    <img src="https://www.fortunaliga.cz/photo/club/85x85/club_9.png?4" alt="Plzen-logo" width="100" height="100">
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: '',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.logos {
  display: flex;
  justify-content: space-between;
  padding: 100px;
  margin-top: 100px;
}
</style>