const Discord = require('discord.js');
const client = new Discord.Client();
const AutoRole = require("discord-auto-role");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('/ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
           */
          member.ban({
            reason: 'Ils étaient mauvais!',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('Je ai pas pu interdire le membre');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('Cet utilisateur na pas le doit');
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply('Tu nas pas le permission pour Ban un joueur ou ta pas le Droit <3');
      }
    }
  });

  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('/kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`il a eu un kick ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('Je ai pas pu donner un coup de pied au membre');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('Cet utilisateur na pas le doit');
        }
      // Otherwise, if no user was mentioned
      } else {
        message.reply('Tu nas pas le permission pour Kick un joueur ou ta pas le Droit <3');
      }
    }
  });
  
client.on('message', function(message) {
  if (message.content == "/ip") {
      try {
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
              messages = message.channel.fetchMessages();
              message.channel.bulkDelete(messages);
          }
      } catch(e) {
          message.channel.send("L'IP du serveur pour nous rejoindre est juste ici ! ---> skimocraft.minesr.com");
          console.log(e);
      }
  }

});

client.on('message', function(message) {
  if (message.content == "/face") {
      try {
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
              messages = message.channel.fetchMessages();
              message.channel.bulkDelete(messages);
          }
      } catch(e) {
          message.channel.send("Je vous rappelle qu'on a une page Facebook n'hésitez pas à acheter votre petit j'aime et à la partager autour de vous https://www.facebook.com/SkimoCraft-303689540388654/");
          console.log(e);
      }
  }

});

client.on('message', function(message) {
  if (message.content == "/site") {
      try {
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
              messages = message.channel.fetchMessages();
              message.channel.bulkDelete(messages);
          }
      } catch(e) {
          message.channel.send("Le site de SkimoCraft est disponible juste ici ! ---> https://www.skimocraft.com/");
          console.log(e);
      }
  }

});

client.on('message', function(message) {
  if (message.content == "/help") {
      try {
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
              messages = message.channel.fetchMessages();
              message.channel.bulkDelete(messages);
          }
      } catch(e) {
          message.channel.send("Commnds Disponible /site /ip /face /pay /vote /info /rg /bvn /staff /info /info /mute | Bot Créer Par @Heredia13#1997");
          console.log(e);
      }
  }

});

client.on('message', function(message) {
  if (message.content == "/vote") {
      try {
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
              messages = message.channel.fetchMessages();
              message.channel.bulkDelete(messages);
          }
      } catch(e) {
          message.channel.send("Alles Vote pour les serveur SkimoCraft : Vote 1 : https://www.serveurs-minecraft.org/vote.php?id=55213 Vote 2 : http://www.topminecraft.fr/vote.php?id=5026 Merci pour ton vote pour le serveur");
          console.log(e);
      }
  }
});

  client.on('message', function(message) {
    if (message.content == "/pay") {
        try {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                messages = message.channel.fetchMessages();
                message.channel.bulkDelete(messages);
            }
        } catch(e) {
            message.channel.send("Don pour le serveur : https://paypal.me/bastienjules ");
            console.log(e);
        }
  }
});

client.on('message', function(message) {
  if (message.content == "/info") {
      try {
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
              messages = message.channel.fetchMessages();
              message.channel.bulkDelete(messages);
          }
      } catch(e) {
          message.channel.send("Qui Je suis ? Je suis Skimocraft je suis en bot créer par mon Creator : Heredia13 / https://www.twitch.tv/heredia13 / https://twitter.com/LiHeredia2011?lang=fr Un Problemes du Bot ? Email : ProHeredia13@hotmail.com ou mp discord à Heredia13#1997");
          console.log(e);
      }
}
});

client.on('message', function(message) {
    if (message.content == "/rg") {
        try {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                messages = message.channel.fetchMessages();
                message.channel.bulkDelete(messages);
            }
        } catch(e) {
            message.channel.send("Voila Les Régles du serveur #réglement Merci");
            console.log(e);
        }
  }
});

client.on('message', msg => {
    if (msg.content === 'crack') {
      msg.reply('Non Le serveur Ne pas en Crack Merci !');
    }
  });

  client.on('message', function(message) {
    if (message.content == "/bvn") {
        try {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                messages = message.channel.fetchMessages();
                message.channel.bulkDelete(messages);
            }
        } catch(e) {
            message.channel.send("Bienvenue à toi sur le discord Offciel SkimoCraft Pour Bien de Lire Les Régles du discord #réglement !");
            console.log(e);
        }
    }
  
  });

  client.on('message', function(message) {
    if (message.content == "/staff") {
        try {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                messages = message.channel.fetchMessages();
                message.channel.bulkDelete(messages);
            }
        } catch(e) {
            message.channel.send("Fondateur : Yuno_Sama / Co-Fondateur  corbeaujuju / Adminitrateur : Dark_Steel , NaiventH / Modérateur : Heredia13 , VTM_TrolZz Quides / Davoolt , @(⌐■_■) ɗσυɗσυ (⌐■_■)");
            console.log(e);
        }
    }
  
  });

  client.on('message', function(message) {
    if (message.content == "/ferme") {
        try {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                messages = message.channel.fetchMessages();
                message.channel.bulkDelete(messages);
            }
        } catch(e) {
            message.channel.send("Candidateur close Fermeture");
            console.log(e);
        }
    }
  
  });

  client.on('message', function(message) {
    if (message.content == "/ouver") {
        try {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                messages = message.channel.fetchMessages();
                message.channel.bulkDelete(messages);
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour fer la command");
                message.delete(1000);
                
            }
        } catch(e) {
            message.channel.send("Candidateur Ouverture");
            console.log(e);
        }
    }
  
  });

  client.on('message', msg => {
    if (msg.content === 'modo') {
      msg.reply('Oui ? Un est Disponible Dis moi ton problème ?');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'remboursement') {
      msg.reply('pas de remboursement méme dans Minecraft');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'sava') {
      msg.reply('Nickel je Travail pour Modération du discord et les command avec mon creator : heredia13#1997');
    }
  });

  client.on('message', function(message) {
    if (message.content == "/mute") {
        try {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                messages = message.channel.fetchMessages();
                message.channel.bulkDelete(messages);
            }
        } catch(e) {
            message.channel.send("Ah oui Mais Non je kick Yuno_Sama Tapi 1 oui / 2 non");
            console.log(e);
        }
    }
  
  });

  client.on('message', msg => {
    if (msg.content === 'ah') {
      msg.reply('Mais non je troll Ah Ah Ah Ah');
    }
  });

  client.on('message', function(message) {
    if (message.content == "/clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

client.on('message', msg => {
    if (msg.content === 'afk') {
      msg.reply('ferme afk interdite ');
    }
  });

  client.on('ready', () => {
    client.user.setStatus('idle')
    client.user.setPresence({
        game: {
          name: 'SkimoCraft | /help | ip : skimocraft.minesr.com',
          type: 0
        }
    });
    console.log('bot active');
  });

    client.login('NDg2NDc3MDM1Nzk2MDM3NjM0.DnmiPg.N9ln0C_rXC0ipnEvAcHKuVh4ERA');
