const axios = require('axios');

const leagueId = [
    4328,   // English Premier League
    4331,   // German Bundesliga
    4332,   // Italian Serie A
    4334,   // French Ligue 1
    4335,   // Spanish La Liga
    4337,   // Dutch Eredivisie
    4344,   // Portuguese Primeira Liga
    4346,   // American Major League Soccer
    4351,   // Brazilian Brasileirao
    4359    // Chinese Super League
]

const API_KEY = 1
let abc;
Promise.all(
    leagueId.map(async lid => {
        const { data: { teams: teamList } } = await axios.get(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/lookup_all_teams.php?id=${lid}`);
        return teamList.map(({ strTeam, strTeamBadge }) => ({
            name: strTeam.toLowerCase(),
            logo: strTeamBadge
        }))
    })
).then(parsedTeamList => {
    abc = Array.prototype.concat.apply([], parsedTeamList)
    const ans = {};
    abc.map(({ name, logo }) => ans[name] = logo);
    console.log(JSON.stringify(ans));
})

