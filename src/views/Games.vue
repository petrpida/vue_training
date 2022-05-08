<template>
  <div>
    <table>
        <thead>
            <tr>
                <th>date</th>
                <th>home</th>
                <th></th>
                <th>away</th>
                <th>result</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="game in sortGames"
                :key="game.id">
              <td>{{ game.date }}</td>
              <td>{{ teams[game.homeTeam - 1].team }}</td>
              <td>vs.</td>
              <td>{{ teams[game.awayTeam - 1].team }}</td>
              <td>{{ game.homeTeamGoals + " : " + game.awayTeamGoals }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { teams, games } from "../data.js"

export default {
  name: 'Game',
  props: '',
  data () {
    return {
        teams: teams,
        games: games
    }
  },
  computed: {
    sortGames() {
        return this.games.slice().sort((a, b) => {
            return a.date.localeCompare(b.date)
        })
    }
  }
}
</script>

<style scoped>
.container table {
  border: 1px solid #bababa;
  margin: 0 auto;
  border-collapse: collapse;
}
.container table th {
  background: #cdcdcd;
  border: none;
  text-align: center;
  padding: 1em;
}
.container table tr {
  border-bottom: 1px solid #cdcdcd;
}
.container table tr:nth-child(even) {
  background: #efefef;
}
.container table td {
  padding: 1em;
  text-align: center;
}
</style>