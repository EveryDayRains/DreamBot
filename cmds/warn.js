const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    if(!profile[rUser.id])return bot.send("Пользователя нету в profile.json");
    profile[rUser.id].warns++;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    if(profile[rUser.id].warns >=5){
        message.guild.member(rUser).kick("5/5 Предупреждений");
    }
    let embed = new Discord.RichEmbed()
    .setDescription("Предупреждение")
    .setColor('#e800d5')
    .addField("Администратор",message.author.username)
    .addField("Выдал предупреждение",`${rUser.user.username}`)
    .addField("Количество предупрежденией",`${profile[rUser.id].warns}/5`)
    .setFooter("Бот Директор  by MrLivixx#9999","https://cdn.discordapp.com/avatars/502948927809781763/a_47bcdcb1908d5330595955cabeca5854.gif?size=512")

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "warn"
};