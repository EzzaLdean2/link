const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log('---------------');

  console.log(' Mo3 Bot Is Online')

  console.log('---------------')

  client.user.setStatus("Online")

    client.user.setActivity(" Broadcast Server",{type: 'WATCHING'})

});

            var prefix = "#" ;
            
           
            const adminprefix = "#";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

const devs = ['470500980342128650'];//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

client.on('message', message => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    

if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  client.user.setGame(argresult);

    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)

} else 

  if (message.content.startsWith(adminprefix + 'setname')) {

client.user.setUsername(argresult).then

    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)

return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");

} else

  if (message.content.startsWith(adminprefix + 'setavatar')) {

client.user.setAvatar(argresult);

  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);

      } else     

if (message.content.startsWith(adminprefix + 'setT')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");

    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)

}

});
             
            
  const misaka = new Set();

    client.on('message', async msg => {

  if(msg.content.startsWith("رابط")) {

  if (misaka.has(msg.author.id)) {

    let misakaemb = new Discord.RichEmbed()

    .setDescription(`يجب عليك الانتظار 24 ساعه!`)

    .setColor(`RED`)

    return msg.channel.send(misakaemb).then(message => {

     message.delete(10000) 

    })

    

    }

    misaka.add(msg.author.id);

  

   msg.channel.createInvite({

        thing: true,

        maxUses: 5,

        maxAge: 86400,

  }).then(invite =>

   msg.author.sendMessage(`
         <@${msg.author.id}> 
         **maxUses: 5 **
         ${invite.url}`)

  )

    msg.channel.send(`**:link: Invite Linke Sent In DM Successfully**`)

  }

    setTimeout(() => {

    },86400000);

    })          
            
            
           
           
           
client.on('message',message =>{

    

    if(message.content.startsWith(prefix + 'top')) {

  message.guild.fetchInvites().then(i =>{

  var invites = [];

   

  i.forEach(inv =>{

    var [invs,i]=[{},null];

     

    if(inv.maxUses){

        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;

    }else{

        invs[inv.code] =+ inv.uses;

    }

        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);

   

  });

  var embed = new Discord.RichEmbed()

  .setColor("#000000")

  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)

  

           message.channel.send({ embed: embed });

   

  });

   

    }

  });
  
  
  
  
  
  
  
  
client.on('message', message => {

if (message.content.startsWith('-inv-info')) {

let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 

  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;

  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL

  message.guild.fetchInvites().then(invs => {

    let member = client.guilds.get(message.guild.id).members.get(oi);

    let personalInvites = invs.filter(i => i.inviter.id === oi);

    let urll = invs.filter(i => i.inviter.id === oi);

    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);

    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);

   let exec = personalInvites.reduce((p, v) => v.inviter);

 let possibleInvites = [['Total de membros recrutados:']];

possibleInvites.push([inviteCount, exec]);

        let user = message.mentions.users.first() || message.author;

        let mem = message.guild.member(user);

        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();

        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

const alpha = new Discord.RichEmbed()

.setAuthor(img)

.addField('🏆 Invite Infos',  `\n\n► لقد قمت بدعوة ما مجموعه \`\`${Number(inviteCount)}\`\` عضو.\n\n► لقد انضممت لسرفر مند\`${daysJoined.toFixed(0)}\`يوم .\n\n► لقد انضممت بهذه الدعوة\`${exec}\``,true)

.setThumbnail(imagemm)

.setColor(0x4959e9);

message.channel.send(alpha);

});

};

  });
            

client.login(process.env.BOT_TOKEN);  //
