require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const valo = {
    agents: ['Gekko', 'Harbor', 'Fade', 'Neon', 'Chamber', 'KAYO', 'Astra', 'Yoru', 'Skye', 'Raze', 'Jett', 'Omen', 'Breach', 'Killjoy', 'Reyna', 'Cypher', 'Viper', 'Sova', 'Sage', 'Phoenix', 'Brimstone'],
    maps: ['Bind', 'Haven', 'Split', 'Ascent', 'Icebox', 'Breeze', 'Fracture', 'Pearl', 'Lotus'],
    weapons: ['Classic', 'Shorty', 'Frenzy', 'Ghost', 'Sheriff', 'Stinger', 'Spectre', 'Bucky', 'Judge', 'Bulldog', 'Guardian', 'Phantom', 'Vandal', 'Marshal', 'Operator', 'Ares', 'Odin', 'Knife/Abilities']
};

function rand(arr) {
    return arr[Math.floor(Math.random()*arr.length)];    
}

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'valoagent') {
        interaction.reply("Pick " + rand(valo.agents) + "!!");
    }
    if (interaction.commandName === 'valomap') {
        interaction.reply("Play " + rand(valo.maps) + "!!");
    }
    if (interaction.commandName === 'valoweapon') {
        interaction.reply("Buy the " + rand(valo.weapons) + "!!");
    }
});

client.login(process.env.TOKEN);