const { Discord, Client, RichEmbed } = require('discord.js');
const client = new Client()
const config = require('./config.json')
const fetch = require('node-fetch');
const prefix = config.prefix;

client.on('ready', () => {
  console.log('yea perdonen dx')
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  if (command === "help"){
    const embed = new RichEmbed()
    .setDescription('**Invite:** https://discord.gg/NVMkrhU\n'+
                    '**Prefix:** !.\n'+
                    '**Commands:** help, ping, level, daily, latestsong, top, linkacc')
    message.channel.send(embed);
  }
  else if (command === "ping"){
    const ping = new RichEmbed()
    .setDescription(`${Math.floor(message.client.ping)}ms :joy:`)
    message.channel.send(ping);
  }
  else if (command === "level"){
    const level = args.join(" ");

    /* 
    
    HEY, REPLACE blissgamergdps.7m.pl/owodb with your gdps url/
    THANKS
    
    */
   
    fetch('http://blissgamergdps.7m.pl/owodb/tools/bot/levelSearchBot.php?str='+level)
    .then(res => res.text())
    .then(body => message.channel.send(body));
  }
  else if (command === "daily"){
    fetch('http://blissgamergdps.7m.pl/owodb/tools/bot/dailyLevelBot.php')
    .then(res => res.text())
    .then(body => message.channel.send(body));
  }
  else if (command === "latestsong"){
    fetch('http://blissgamergdps.7m.pl/owodb/tools/bot/latestSongBot.php')
    .then(res => res.text())
    .then(body => {
      const ls = new RichEmbed()
      .setTitle('The latest song is: ``'+body+'``')
      message.channel.send(ls);
    })
  }
  else if (command === "top"){
if (!args[0]) return message.channel.send("Valid types are: ``Stars, Diamonds, Coins, Usrcoins, Demons, CP, Orbs, Levels, Friends``");
    
    fetch('http://blissgamergdps.7m.pl/owodb/tools/bot/leaderboardsBot.php?type='+args[0]+"&page=0")
    .then(res => res.text())
    .then(body => {
      const top = new RichEmbed()
      .setDescription(body)
      message.channel.send(top);
    })
  }
  else if (command === "linkacc"){
    const account = args.join("");
    if (!account) return message.channel.send("Use: ``!.linkacc [account]``");
    fetch('http://blissgamergdps.7m.pl/owodb/tools/bot/discordLinkReq.php?account='+account+"&discordID="+message.author.id+"&secret="+config.secret)
    .then(res => res.text())
    .then(body => { message.reply('Check your in-game messages.')})
  }
});

client.login(config.token)