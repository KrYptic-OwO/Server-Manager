const { Client, User, ClientUser, GuildManager } = require('discord.js');
const client = new Client();
const token = 'ODM5NTU0NDE0ODg0NDIxNjQz.YJLV-g.GyDyOv3CHZOZf_QaRmSLy7tQRY0';
var {helpCommands} = require('./Misc. JS Files/CommandList');
var {adminList} = require('./Misc. JS Files/AdminList');
const tutorialLink = 'https://www.youtube.com/watch?v=j_sD9udZnCk';
const websiteTutorialLink = 'https://www.freecodecamp.org/';
var gunEq = false;
var bazooka = false;
var gun = false;
var {players} = require('./Misc. JS Files/ServerMembers');
var playersDead = false;
var serverBits = 0;
var messageStore = '';
var {patchNotes, currentUse} = require('./Misc. JS Files/PatchNotes')
var botOnline = true;
var {goldenOne} = require('./Misc. JS Files/AdminList')
const hakaiBotToken = 'ODQwOTgwMzI2MjU1NTU4NzI3.YJgF9g.y9s1ogKyA3Tw8ZnbB0yloNqooVw';
var hakaiMSG = '';

client.once('ready', () => {
    console.log('Server Manager Running');
})

client.on('message', message => {
    const MessageChannel = message.channel;
    const MessageContent = message.content;
    const MessageLowerCase = MessageContent.toLowerCase();
    const rngNum = Math.ceil(Math.random() * 2);
    const rngNum2 = Math.ceil(Math.random() * 3)
    const rngNum3 = Math.ceil(Math.random() * 5);
    var userGold = message.member.roles.cache.has('839964004779556884');
    var userSus = message.member.roles.cache.has('802635001388728420');
    var userAngel = message.member.roles.cache.has('803726105349455933');
    var deleteThis = client.emojis.cache.get('840282199878271057');
    const hasBot = message.member.roles.cache.has('840833330102534195');

    function Help(){
        switch(rngNum){
            case 1:
                MessageChannel.send(helpCommands);
                break;
            case 2:
                MessageChannel.send('No')
                break;
        }
    }

    function kumatora(){
        MessageChannel.send('According to the WIKI:\nGAAAAAAAAAAAAAAAAAAAAAAAAY');
    }

    function showTutorialInfo(link, web){
        MessageChannel.send(String(web) + '\n' + String(link))
    }

    function showIfAdmin(){
        if(userGold){
            MessageChannel.send('You have admin');
        } else {
            MessageChannel.send('You do not have admin');
        }
    }

    function gold(){
        if(userGold){
            switch(rngNum3){
                case 1:
                    MessageChannel.send('Le Best Boi');
                    break;
                case 2:
                    MessageChannel.send('Best of Best Bois');
                    break;
                case 3:
                    MessageChannel.send('Very Good Boi');
                    break;
                case 4:
                    MessageChannel.send('EA Sports\nIts in the gold');
                    break;
                case 5:
                    MessageChannel.send('You shoot');
                    break;
            }
        } else {
            MessageChannel.send('Come back when your a little more, mmmmmmmm, golden');
        }
    }

    function gun(){
        if(!gunEq){
            MessageChannel.send('You eqip your rusty gun')
            return gunEq = true;
        }

        if(gunEq){
        switch(rngNum3){
            case 1:
                MessageChannel.send('Pew Pew');
                break;
            case 2:
                MessageChannel.send('Bang Bang');
                break;
            case 3:
                MessageChannel.send('Pow Pow');
                break;
            case 4:
                MessageChannel.send('Bang Pow');
                break;
            case 5:
                MessageChannel.send('Pow Pow Bang');
                break;
        }
    }
    }

    function goldGun(){
        if(!gunEq){
                MessageChannel.send('You equip the golden gun');
                return gunEq = true;
        }

        if(gunEq){
        switch(rngNum3){
            case 1:
                MessageChannel.send('Chang Chang');
                break;
            case 2:
                MessageChannel.send('Bang Chang');
                break;
            case 3:
                MessageChannel.send('Nyooom');
                break;
            case 4:
                MessageChannel.send('Bang Pow');
                break;
            case 5:
                MessageChannel.send('You equip the golden bazooka');
                return bazooka = true;
                break;
        }
        }
    }

    function bazookaUse(){
    if(!gunEq){
        MessageChannel.send(':deletethis:')
        return gunEq = true;
    } else if(gunEq) {
        switch(rngNum3){
            case 1:
                MessageChannel.send('BAAAAAAAAAAAAM');
                break;
            case 2:
                MessageChannel.send('CL-CHING, PFFFFFFFFFF');
                break;
            case 3:
                MessageChannel.send('NYRRRRRRRRRRRRRRRR');
                break;
            case 4:
                MessageChannel.send('10 civilians killed');
                break;
            case 5:
                if(!playersDead){
                    killAllPlayers();
                return playersDead = true;
                } else {
                    MessageChannel.send();
                }
            return bazooka = true;
        }
    }
    }

    function killAllPlayers(){
        for(var i = 0; i < players.length; i++){
            MessageChannel.send(String(players[i]) + ' is dead');
        }
    }

    function test(){
        MessageChannel.send('Bot Working');
    }

    function susGun(){
        if(!gunEq){
            message.channel.send(`${deleteThis}`);
            return gunEq = true;
        } else if(gunEq) {
        switch(rngNum3){
            case 1:
                MessageChannel.send('EEEEEEEEEEEEEEEEEEEEEEE');
                break;
            case 2:
                MessageChannel.send('CL-CH, POOOOOOOOOOOOOOOOM');
                break;
            case 3:
                MessageChannel.send('BFEWWWWWWWWWWWWWWW');
                break;
            case 4:
                MessageChannel.send('1 civilians killed');
                break;
            case 5:
                MessageChannel.send('5 civillians killed')
                break;
        }
        }
    }

    function kumatora(){
        switch(rngNum2){
            case 1:
                MessageChannel.send('Gay');
                break;
            case 2:
                MessageChannel.send('Lesbian');
                break;
            case 3:
                kumatora();
                break;
        }
    }

    function unequipGoldenBazooka(){
        MessageChannel.send('Unequipped golden bazooka');
        return bazooka = false
    }

    function unequipGoldenGun(){
        MessageChannel.send('You unequip the golden gun');
        return gunEq = false;
    }

    function unequipNormalGun(){
        MessageChannel.send('You unequip your gun');
        return gunEq = false;
    }

    function displayAdminList(){
        MessageChannel.send('Current Admins:\n\n' + adminList);
    }

    function reviveAllPlayers(){
        for(var i = 0; i < players.length; i++){
            MessageChannel.send(String(players[i] + ' revived\n'))
        }

        return playersDead = false;
    }

    function addToServerBits(){
        return serverBits += 12000;
    }

    function displayServerBits(){
        MessageChannel.send(String(serverBits));
    }

    function storeMessage(){
        messageStore = MessageContent;
        MessageChannel.send('Message Stored Succesfully!')

        return messageStore;
    }

    function repeatStore(){
        MessageChannel.send(messageStore.replace('Store', ''));
    }

    function kick(){
        if(userGold || userAngel || userSus || hasBot){

            const member = message.mentions.users.first();

            if(member){

                const memberTarget = message.guild.members.cache.get(member.id);

                memberTarget.kick('Kicked for Testing Purposes');

                MessageChannel.send('User kicked!');

            } else {

                MessageChannel.send('You cant kick that member');

            }

        }
    }

    function displayAllServerMembers(){
        MessageChannel.send(players);
    }

    function displayPatchNotes(){
        for(var i = 0; i < patchNotes.length; i++){
            MessageChannel.send(patchNotes[i]);
        }
    }

    function displayCurrentUse(){
        MessageChannel.send(currentUse);
    }

    function displayGoldenOne(){
        MessageChannel.send(goldenOne);
    }

    function removeStore(){
        MessageChannel.send('Message Deleted from Store');

        return storeMessage = '';
    }

    function evolve(bot, msg){
        client.login(bot);

        MessageChannel.send(String(msg) + '\n\n(Discord bot has evolved)');
    }

    if(MessageLowerCase == 'test'){
        test();
    }

    if(MessageLowerCase == 'help'){
        Help();
    }

    if(MessageLowerCase == 'kumatora'){
        kumatora();
    }

    if(MessageLowerCase == 'tutorial'){
        showTutorialInfo(tutorialLink, websiteTutorialLink);
    }

    if(MessageLowerCase == 'admin'){
        showIfAdmin();
    }

    if(MessageLowerCase == 'gold'){
        gold();
    }

    if(MessageLowerCase == 'gun' && !userGold && !userSus){
        gun();
    } else if(MessageLowerCase == 'gun' && userGold && !bazooka){
        goldGun();
    } else if(MessageLowerCase == 'gun' && userGold && bazooka){
        bazookaUse();
    } else if(MessageLowerCase == 'gun' && userSus) {
        susGun();
    }

    if(MessageLowerCase == 'ub' && userGold){
        unequipGoldenBazooka();
    }

    if(MessageLowerCase == 'ug' && userGold && !bazooka){
        unequipGoldenGun();
    } else if(MessageLowerCase == 'ug' && !userGold){
        unequipNormalGun();
    }

    if(MessageLowerCase == 'adminlist'){
        displayAdminList();
    }

    if(MessageLowerCase == 'reviveall' && playersDead == true && userGold){
        reviveAllPlayers();
    }

    if(MessageLowerCase == 'serverbits'){
        displayServerBits();
    }

    if(typeof MessageContent == 'string'){
        addToServerBits();
    }

    if(/Store/.test(MessageContent) && !hasBot){
        storeMessage();
        return;
    }

    if(MessageLowerCase == 'repeat' && !hasBot){
        repeatStore();
        return;
    }

    if(/Kick /.test(MessageContent) && !hasBot){
        kick();
    } else if(MessageLowerCase == 'kick'){
        MessageChannel.send('Mention a Player infront of Kick Please: ```Kick <PlayerID>```')
    }

    if(MessageLowerCase == 'current server members'){
        displayAllServerMembers();
    }

    if(MessageLowerCase == 'patch notes'){
        displayPatchNotes();
    }

    if(MessageLowerCase == 'current use'){
        displayCurrentUse();
    }

    if(MessageLowerCase == 'golden one'){
        displayGoldenOne();
    }

    if(MessageLowerCase == 'remove stored object'){
        removeStore();
    }

    if(/hakai/i.test(MessageContent) && !hasBot){
        hakai();
    }

    if(MessageLowerCase == 'evolve'){
        evolve(hakaiBotToken, 'Hakai...');
    }
})

client.login(token);
