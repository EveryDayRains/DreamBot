const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor('#e800d5')
    .addField("Название сервера",message.guild.name)
    .addField("Создание сервера",message.guild.createdAt)
    .addField("Вы присоеденились к серверу",message.guild.joinedAt)
    .addField("Кол-Во участников",message.guild.memberCount)
    .addField("Регион",message.guild.region)
    .setThumbnail(message.guild.iconURL)
    .setFooter("Бот Директор  by MrLivixx#9999","https://cdn.discordapp.com/avatars/502948927809781763/a_47bcdcb1908d5330595955cabeca5854.gif?size=512")

    bot.send(embed);

};
module.exports.help = {
    name: "serverinfo"
};