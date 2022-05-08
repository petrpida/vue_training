<script>
import { teams } from "../data";

export default {
    data() {
        return {
            teams: teams
        }
    },
    computed: {
        sortTeams() {
            return this.teams.slice().sort((a,b) => {
                return a.team.localeCompare(b.team)
            })
        }
    }
}
</script>

<template>
    <ul>
        <li 
        v-for="team in sortTeams"
        :key="teams.id"
        >{{ team.team }}</li>
    </ul>
</template>

<style scoped>
.container > ul {
  display: block;
  width: 50%;
  margin: 0 auto;
  border: 1px solid #bababa;
  border-radius: 5px;
  list-style-type: none;
  padding: 0;
}
.container > ul li {
  padding: .5em .75em;
  text-align: center;
}
.container > ul li:not(:last-child) {
  border-bottom: 1px solid #cdcdcd;
}
.container > ul li:nth-child(even) {
  background: #efefef;
}
</style>