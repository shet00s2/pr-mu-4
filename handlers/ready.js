const {token} = require('../settiings/credentials.json');

module.exports = {

    ready : (bot) => {
        bot.login(token)
        bot.on('ready', () => {
           bot.user.setGame("( *help ) KC-GAMER", "https://www.twitch.tv/shandowgaming");
            bot.user.setStatus('online');
            console.log('I am ready to play MUSICS!!');
        });
    }
    
};
