const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация об боте")
    .setColor('#e800d5')
    .addField("Я написан на discord.js","Я основан на боте <@635934054725844992>")
    .addField("Создатель бота","<@572285950034444298>")
    .addField("Ссылки:","[Тема на форуме VimeWorld](https://forum.vimeworld.ru)")
    .addField(" Сервер бота:", "[Тыкни сюда пж](https://discord.gg/uX8PdJX)")
    .addField("Репозитрорий на github", "[НЕ НАЖИМАТЬ](https://github.com/MrLivixx/Director)")
    .setFooter("Бот Директор  by MrLivixx#9999","https://cdn.discordapp.com/avatars/502948927809781763/a_47bcdcb1908d5330595955cabeca5854.gif?size=512")
    bot.send(embed);

};
module.exports.help = {
    name: "info"
};
