require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {name: 'valoagent', description: 'returns a random valorant agent'},
    {name: 'valomap', description: 'returns a random valorant map'},
    {name: 'valoweapon', description: 'returns a random valorant weapon'}
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )
        console.log("Registered commands.")
    } catch (error) {
        console.log(error)
    }
})();