<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>rank</th>
                    <th>club</th>
                    <th>games</th>
                    <th>wins</th>
                    <th>draws</th>
                    <th>losses</th>
                    <th>score</th>
                    <th>points</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in teamsCounted">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.gamesPlayed }}</td>
                    <td>{{ item.wins }}</td>
                    <td>{{ item.draws }}</td>
                    <td>{{ item.losses }}</td>
                    <td>{{ item.score }}</td>
                    <td>{{ item.points }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import { teams, games } from "../data.js"

export default {
    name: 'Ranking',
    props: '',
    data() {
        return {
            teams: teams,
            games: games
        }
    },
    methods: {
        getValues(element) {
            const values = {
                name: element.team,
                gamesPlayed: 0,
                wins: 0,
                draws: 0,
                losses: 0,
                goalsActive: 0,
                goalsPasive: 0,
                score: "",
                points: 0
            }
            this.games.forEach((item) => {
                if (element.id === item.homeTeam) {
                    values.gamesPlayed += 1;
                    values.goalsActive += item.homeTeamGoals;
                    values.goalsPasive += item.awayTeamGoals;
                    if (item.homeTeamGoals > item.awayTeamGoals) {
                        values.points += 3;
                        values.wins += 1;
                    }
                    if (item.homeTeamGoals === item.awayTeamGoals) {
                        values.points += 1;
                        values.draws += 1;
                    }
                    if (item.homeTeamGoals < item.awayTeamGoals) {
                        values.losses += 1;
                    }
                }
                if (element.id === item.awayTeam) {
                    values.gamesPlayed += 1;
                    values.goalsActive += item.awayTeamGoals;
                    values.goalsPasive += item.homeTeamGoals;
                    if (item.homeTeamGoals < item.awayTeamGoals) {
                        values.points += 3;
                        values.wins += 1;
                    }
                    if (item.homeTeamGoals === item.awayTeamGoals) {
                        values.points += 1;
                        values.draws += 1;
                    }
                    if (item.homeTeamGoals > item.awayTeamGoals) {
                        values.losses += 1;
                    }
                }
            })
            values.score = `${values.goalsActive} : ${values.goalsPasive}`
            //console.log(values)

            return values
        }
    },

    computed: {
        teamsCounted() {
            const arr = []

            this.teams.map((el) => {
                console.log(this.getValues(el))
                arr.push(this.getValues(el))
                // console.log(this.getValues(el))
                //arr.push(this.getValues(el))
            })
            console.log(arr)
            return arr.sort((a, b) => {
                if (a.points > b.points) return -1
                if (a.points < b.points) return 1
                if ((a.goalsActive - a.goalsPasive) > (b.goalsActive - b.goalsPasive)) return -1
                if ((a.goalsActive - a.goalsPasive) < (b.goalsActive - b.goalsPasive)) return 1
                if (a.goalsActive > b.goalsActive) return -1
                if (a.goalsActive < b.goalsActive) return 1
                return 0
            })
        },
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