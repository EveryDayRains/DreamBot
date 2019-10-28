const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о пользователе")
    .setColor('#e800d5')
    .addField("Имя",a.username)
    .addField("Тэг",a.tag)
    .addField("Дискриминатор",a.discriminator)
    .addField("Создание аккаунта",a.createdAt)
    .addField("ID",a.id)
    .addField("Вы бот?",a.bot)
    .setThumbnail(a.avatarURL)
    .setFooter("Бот Директор  by MrLivixx#9999","https://cdn.discordapp.com/avatars/502948927809781763/a_47bcdcb1908d5330595955cabeca5854.gif?size=512")
    bot.send(embed);

};
module.exports.help = {
    name: "userinfo"
};