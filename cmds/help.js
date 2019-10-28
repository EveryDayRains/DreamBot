const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Помощь")
    .setColor('#e800d5')
    .addField("d!help","Помощь по командам")
    .addField("d!ban","Бан пользователя ")
    .addField("d!clear","Очистка чата")
    .addField("d!userinfo","Информация об пользователе")
    .addField("d!serverinfo","Информация об сервере")
    .addField("d!kick","Кик пользователя")
    .addField("d!mute","Мут пользователя(Бета)")
    .addField("d!ping", "Проверка бота")
    .addField("d!say", "Бот скажет то что введёте")
    .addField("d!unmute","Размут пользователя" )
    .addField("d!unwarn", "Снять варн")
    .addField("d!warn", "Выдать варн")
    .addField("d!info", "Информация")
    .addField("d!vmhelp","Информация по модулю VimeApi")
    .setFooter("Бот Директор  by MrLivixx#9999","https://cdn.discordapp.com/avatars/502948927809781763/a_47bcdcb1908d5330595955cabeca5854.gif?size=512")
    bot.send(embed);

};
module.exports.help = {
    name: "help"
};