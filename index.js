//modüller baş
const fs = require("fs");
const Discord = require("discord.js");
const discord = require("discord.js");
const { Intents, Client, MessageEmbed } = require("discord.js")
const ayarlar = require("./ayarlar.json");
const { token, prefix, colors, modmail } = require("./settings.json")
const translate = require("./tools/translate")


const client = new Client({
  intents: [32767,
Intents.FLAGS.GUILDS,
Intents.FLAGS.GUILD_MESSAGES,
Intents.FLAGS.GUILD_MEMBERS,
Intents.FLAGS.GUILD_MESSAGES,
Intents.FLAGS.DIRECT_MESSAGES,
  ], partials: ["CHANNEL"]
})

//modüller son
//log baş
client.once("ready", () => {
  console.log(`Başarıyla aktif oldum`)
});
//log son
//random buton baş

//random buton son


//command handler baş
client.once("ready", () => {
  console.log(`Logged in as @${client.user.tag}!`);
});

const log = (message) => {
  console.log(` ${message}`);
};

client.slashCommands = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
require("./slashhandler")(client);
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err); //
  log(`${files.length} komut yüklenecek.`);
  files.forEach((f) => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach((alias) => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = (command) => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let inflames = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((inflames, alias) => {
        if (inflames === command) client.aliases.delete(alias);
      });
      client.commands.set(command, inflames);
      inflames.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, inflames.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = (command) => {
  return new Promise((resolve, reject) => {
    try {
      let inflames = require(`./komutlar/${command}`);
      client.commands.set(command, inflames);
      inflames.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, inflames.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = (command) => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let inflames = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((inflames, alias) => {
        if (inflames === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//command handler son

//command handler baş
client.once("ready", () => {
  console.log(`Logged in as @${client.user.tag}!`);
});

//bot oynuyor baş
client.on("ready", async () => {
  console.log("Durum başarıyla ayarlandı")
     client.user.setActivity("İletişim için DM", 
       { url: 'https://twitch.tv/idrisozdmrr',
       type: 'STREAMING' }); 
})
//bot oynuyor son

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------//
//          Kurallar-Bilgilendirme          //
client.on('messageCreate', message => {//kurallar resim1
  if (message.content === 'atroxkurallarresim') {
return message.channel.send(`https://cdn.discordapp.com/attachments/915585149855485992/915585231195623534/kurallar.png`)}})

client.on('messageCreate', message => {//kurallar embed1
  if (message.content === 'atroxswkurallar1') {
return message.channel.send(`||
||**<:dot:918230175806803978>Tüm metin kanallarında yalnızca Türkçe kullanılmaktadır.** Moderatörler buraya gönderilen tüm mesajları okuyabilmelidir.
**<:dot:918230175806803978>Diğer kullanıcılara taciz etmek yasaktır.** Irkçılığa, cinsiyetçiliğe, yabancı düşmanlığına, transfobiye, homofobiye, kadın düşmanlığına vb. asla izin verilmez.
**<:dot:918230175806803978>Tüm tartışmaları medeni ve doğru kanallarda tutun.** Sizden konuşmanızı başka kanallarda yapmanızı isteyebiliriz.
**<:dot:918230175806803978>Uygunsuz dil kullanmayınız.** Başkalarına karşı her zaman saygılı olun.
**<:dot:918230175806803978>Kişisel dramalarınızı sohbetten uzak tutun.** Başkaları hakkında ne hissettiğinize bakılmaksızın sohbette veya DM'lerde tacize asla izin verilmez.
**<:dot:918230175806803978>Başka kimliklere bürünme.** Moderatörlerin, ünlü kişiliklerin veya üyelerin kimliğine bürünülmez.
**<:dot:918230175806803978>Spam & Flood yapma.** Sohbet odalarında spam yapmana ve başkalarını spam yapmaya teşvik etmeye de izin verilmez. 
**<:dot:918230175806803978>NSFW** içeriği veya yasa dışı faaliyetlerle ilgili konuşma yok.
**<:dot:918230175806803978>Uygunsuz veya rahatsız edici kullanıcı adları, durumlar veya profil resimleri yok.** Bunları değiştirmeniz istenebilir.
`)}})

client.on('messageCreate', message => {//kurallar embed2
   if (message.content === 'atroxswkurallar2') {
return message.channel.send(`
**<:dot:918230175806803978>Uygun olduğunda spoiler kullanın.** ||spoiler|| olarak karşımıza çıkıyor.
**<:dot:918230175806803978>Politika yok.** Politika ve dinler gibi ciddi konuları konuşmak yasaktır. Medeni bir tavırla yaklaşılsa bile, burası yeri değil.
**<:dot:918230175806803978>Reklam yok.** kendi reklamını yapmak, talepte bulunmak veya reklam yaptırmak yasaktır. Buna kullanıcı DM'leri de dahildir.
**<:dot:918230175806803978>Onaylanmadıkça bağlantılara izin verilmez.** Belirli rollerdeki kullanıcıların bağlantı paylaşılmasına izin verilir.
**<:dot:918230175806803978>Filtrelerden kaçmayın.** Bu hem kelimeler hem de bağlantılar için geçerlidir. Bir şey silinirse, bir sebepten dolayı silinir!
**<:dot:918230175806803978>Kullanıcılara gereksiz yere ping atmayın.** Bu, yöneticiler, moderatörler, tanınmış kişiler ve üyeleri için geçerlidir.
**<:dot:918230175806803978>Moderatörler son sözü söyler.** Bu sunucunun çalışmasını sağlayan gönüllüleri dinleyin ve saygı gösterin.
**<:dot:918230175806803978>Discord'un Kullanım Koşullarına ve Yönergelerine uyunuz!**
   <:arroww:918230175869714432> https://discord.com/terms 
   <:arroww:918230175869714432> https://discord.com/guidelines`)}})


   client.on('messageCreate', message => {//kurallar resim2
if (message.content === 'atroxkurallarresim2') {
   return message.channel.send(`https://cdn.discordapp.com/attachments/915585149855485992/915585256256598046/yetkililerle_iletiisim.png`)}})







   client.on('messageCreate', message => {//kurallar resim2
if (message.content === '₅') {
    return message.channel.send(`
Kural ihlallerini, doğrudan mesajlarda tacizi veya diğer moderasyon işlemlerini bildirmek için <@917855222246830090>'e doğrudan mesaj gönderebilirsiniz, moderatörlerimizden biri en kısa sürede size yardımcı olacaktır.

Moderatörlerin anında müdahalesini gerektiren durumlar için, sunucuda **5. seviyeye ulaşmış** kullanıcılar **/emergency <sebep>** komutunu kullanabilirsiniz. Lütfen komutun yanlış kullanımının ceza almanıza neden olacağını unutmayın.

 <:start:918502755017044038><:mid:918502754916388916><:endd:918502754949931108> ***DAVET LİNKİ***  <:start:918502755017044038><:mid:918502754916388916><:endd:918502754949931108>

 https://discord.gg/node
`)}})



client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxbilgilendirmeresim1') {
return message.channel.send(`https://cdn.discordapp.com/attachments/915585149855485992/915596786788356127/KANALLAR_ROLLER.png`)}})


client.on('messageCreate', message => {//kurallar resim2
   if (message.content === 'atroxkanallar') {
return message.channel.send(`
 <:start:918502755017044038><:mid:918502754916388916><:endd:918502754949931108> ***KANALLAR***  <:start:918502755017044038><:mid:918502754916388916><:endd:918502754949931108>

**<:dot:918230175806803978> Duyuru**
**•** <#918152558348992543> - Sunucu ile ilgili duyuruları alacağınız kanaldır.
**•** <#917823573119365120> - Belirli rolleri alabileceğiniz kanaldır.

**<:dot:918230175806803978> TOPLULUK**
**•** <#917817875132211241> - Genel sohbet kanalıdır.
**•** <#917818162983092294> - Botları kullanabileceiniz komut kanalıdır.
**•** <#917817954513608808> - Resim ve video yükleyebileceğiniz medya kanalıdır.

**<:dot:918230175806803978> DİĞER**
**•** <#918847601699352606> - Herhangi bir konuda yardıma ihtiyacın olduğunda yardım alabileceğin kanal.
**•** <#918847625204232222> - Sunucu hakkındaki istek ve önerilerin oylandığı kanaldır.

**<:dot:918230175806803978> TAVERN**
**•** <#918848636983599154> - VİP sohbet kanalıdır.
**•** <#918848766289784862> - <#918848791799558204> VİP ses kanallarıdır
**• NOT** - Yukarıdaki kanallar <@&918157266346188841> rolünü gerektirir.

**•** <#918848869528395847> - <#918848886913785896> - <#918848909961474088> - <#918849216351187044> Genel ses kanallarıdır.
||
||
`)}})


client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxroller') {
return message.channel.send(`

 <:start:918502755017044038><:mid:918502754916388916><:endd:918502754949931108> ***ROLLER***  <:start:918502755017044038><:mid:918502754916388916><:endd:918502754949931108>

Kullanıcılar, <#917823573119365120>'de birden çok rolü kendileri atayabilir. Bunlar, bir renk rolünün yanı sıra güncelleme etkinlik ve duyuru için bildirim rollerini içerir.

**<:dot:918230175806803978> ÜST YÖNETİCİ**
**•** <@&918496417738264648> - <@917855222246830090>'a özel roldür.
**•** <@&918585968737533962> - Kurucu rolüdür.
**•** <@&917804535341281323> - Sunucu yönetim kuruludur.
**•** <@&917803728009060424> - Yönetici permidir.

**<:dot:918230175806803978> MODERASYON**
**•** <@&918376352883810304> - Sunucu yönetim ekibidir.
**•** <@&917805707829604383> - Sunucu ile ilgilenen düzen sağlayan kişilere verilen roldür.
**•** <@&917871074039975966> - Yetkili ekibine yeni katılan kişilere verilen roldür.

**<:dot:918230175806803978> ÖZEL**
**•** <@&918157266346188841> - Ayrıcalıklarına sahip kullanıcılara verilen roldür.
**•** <@&918852607575982100> - <@&917804535341281323>'lara kendini kanıtlamış olan içerik üreticilerine verilen roldür.
**•** <@&917871272136957972> - Sunucu içindeki etkinlikeri yöneten & oluşturan kişilerdir.

**<:dot:918230175806803978> ÜYE & BOT**
**•** <@&917837235536146532> - Tüm üyelere verilen roldür
**•** <@&917874397157671012> - Botlara verilen roldür.
||
||
`)}})

client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxroller2') {
return message.channel.send(`
**<:dot:918230175806803978> DUYURU**
**•** <@&918370209256054845> - Sunucu güncellemelerini takip etmenize yarayan roldür.
**•** <@&918370267137450034> - Etkinlik bildirimlerini almanıza yarayan roldür.
**• NOT** - <#917823573119365120> kanalından alınır

**<:dot:918230175806803978> LEVEL**
**•** <@&918845460456824902> <@&918845860736040981> <@&918846166559522836> <@&918845856197799996> <@&918846181659013180> <@&918845858592735253> Seviye rolleridir.
||
||
`)}})




client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxbilgilendirmeresim2') {
return message.channel.send(`https://cdn.discordapp.com/attachments/915585149855485992/915596738188951572/avantaj_ve_oduller.png`)}})

client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxavantajödül') {
return message.channel.send(`
Kullanıcılar, metin ve ses kanallarımıza katılarak XP kazanırlar. XP'ler özelliklerin kilidini açmak ve sunucu içinde ödüller almak için kullanılır. Mevcut ödüller aşağıdaki gibidir:

**<:dot:918230175806803978> EVERYONE**
• Standart emojileri yollayabilme

**<:dot:918230175806803978> 5 LEVEL**
•/emergency komudunu kullanabilme
•Ses kanallarına ekran paylaşabilme
•Etkinliklere katılabilme

**<:dot:918230175806803978> 10 LEVEL**
•Mesajlara tepki ekleyebilme.

**<:dot:918230175806803978> 20 LEVEL**
•Sohbet kanalına dosya yükleyebilme
•Kullanıcı adını değiştirebilme

**<:dot:918230175806803978> 30 LEVEL**
•Avantajı yok ama harika bir rol.

**<:dot:918230175806803978> 40 LEVEL**
•Avantajı yok ama harika bir rol.

**<:dot:918230175806803978> 50 LEVEL**
•Adınızın diğer üyelerden ayrı görünmesi
•Alt başlık oluşturabilme

`)}})

client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxbilgilendirmeresim3') {
return message.channel.send(`https://cdn.discordapp.com/attachments/915585149855485992/915585256256598046/yetkililerle_iletiisim.png`)}})


client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxyetkililereulaşım2') {
return message.channel.send(`
Kural ihlallerini, doğrudan mesajlarda tacizi veya diğer moderasyon işlemlerini bildirmek için <@917855222246830090>'e doğrudan mesaj gönderebilirsiniz, moderatörlerimizden biri en kısa sürede size yardımcı olacaktır.

Moderatörlerin anında müdahalesini gerektiren durumlar için, sunucuda **5. seviyeye ulaşmış** kullanıcılar **/emergency <sebep>** komutunu kullanabilirsiniz. Lütfen komutun yanlış kullanımının ceza almanıza neden olacağını unutmayın.
`)}})

client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxyetkililereulaşım2') {
return message.channel.send(`https://cdn.discordapp.com/attachments/915585149855485992/915597583144083506/SIKCA_SORULANLAR.png`)}})




client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxsıkcasorulanlar1') {
return message.channel.send(`
**<:dot:918230175806803978> Nasıl moderatör veya etkinlik organizatörü olabilirim?**
Ekibimize yeni kişiler ararken bunu <#918152558348992543>'dan duyuracağız ve başvuru yapabileceksiniz. Bazı pozisyonlarımızın, sunucu içinde belirli bir aktivite seviyesi ve deneyim gibi gereksinimleri olabileceğini unutmayın. Ekibimize katılmakla ilgileniyorsanız, lütfen bir sonraki başvuruyu bekleyin: Ekibimize doğrudan mesaj göndermek veya sohbette ping atmak, kabul edilme şansınızı artırmaz.
||
||
`)}})

client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxsıkcasorulanlar2') {
return message.channel.send(`
**<:dot:918230175806803978> Sunucu ile ilgili bir önerim var ne yapmlıyım ?**
**/dilekce** komudu ile oylamaya sunabilirsin ve <#918847625204232222> kanalında açılan oylamaya göre fikrin değerlendirilir.
||
||
`)}})

client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxsıkcasorulanlar3') {
return message.channel.send(`
**<:dot:918230175806803978> Neden X özelliğine erişimim yok?**
Sunucu güvenliği ve düzeni açısından bazı özellikler varsayılan olarak devre dışı bırakılmıştır. Bunların çoğu, sunucuda aktif olarak ve seviye atlayarak açılabilir. Rollere sahip tüm kullanılabilir izinler yukarıda listelenmiştir.
||
||
`)}})


client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxsıkcasorulanlar4') {
return message.channel.send(`
**<:dot:918230175806803978> Bir hata & bug buldum, nereye bildirebilirim?**
**/bildir <Bug & Hata>** komudu ile bizlere bildirebilirsin.
||
||
`)}})

client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxsıkcasorulanlar5') {
return message.channel.send(`
**<:dot:918230175806803978> Sunucuda kullanabileceğim komutlar hangileri?**
Kullanıların kullanabileceği komutlar <#917818162983092294> kanalındaki sabiitlenenler kısmında mevcut.
||
||
`)}})

client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxyetkilikurallarresim') {
    return message.channel.send(`https://cdn.discordapp.com/attachments/915585149855485992/917398271574540378/yetkili_kurallar.png`)}})


client.on('messageCreate', message => {//kurallar resim2
      if (message.content === 'atroxyetkilikurallarresim2') {
        return message.channel.send(`https://cdn.discordapp.com/attachments/915585149855485992/917398262892347412/YETKILI_GOREVLER.png`)}})

        client.on('messageCreate', message => {//kurallar resim2
          if (message.content === 'atroxyetkilikurallar') {
            return message.channel.send(`
**<:dot:918230175806803978>  + **
**•** Sunucudaki botlardan sorumludur.
**•** Üst düzey terfi işlemlerinden sorumludur.
**•** Yetkili kanallarından sorumludur.            
**•** Sunucu ile ilgli duyuruları atar.

**<:dot:918230175806803978> <@&905186936619151428>**
**•** Yetkili ekibinden sorumludur.
**•** Ban yetkisine sahiptir.
**•** Terfi işlemlerinden sorumludur.
**•** Yetkili ve Etkinlik Organizatörü alımlarını yapar.
**•** <@&916394160175603773> ile birlikte etkinlikleri düzenler ve denetler.
**•** Jail atma yetkisine sahiptir.

**<:dot:918230175806803978> <@&905186936619151427>**
**•** Sunucu düzeinden sorumludur.
**•** Kick yetkisine sahiptir.
**•** <@&905186936619151426>'lerden sorumludur.
**•** <#915966358829813780> kanalından sorumludur.
**•** <#915924126525427712> kanalından sorumludur.
**•** <#915696717431717909> kanalnıdan sorumludur.
**•** Modmail kanallarından sorumludur.
**•** Bildirilen bug ve hatalardan sorumludur.
**•** Mute atma yetkisine sahiptir

**<:dot:918230175806803978> <@&905186936619151426>**
**•** Kanallara atılan mesajlardan sorumludur.
**•** Üyelerden sorumludur.
**•** <#915966358829813780> kanalından sorumludur.
**•** Warn atma yetkisine sahiptir.
||
||
`)}})

client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'wqewqweq') {
    return message.channel.send(`sa`)}})


client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxyetkilikurallar2') {
    return message.channel.send(`
 <:start:918502755017044038><:mid:918502754916388916><:endd:918502754949931108> *** KOMUTLARIN KULLANIMLARI ***  <:start:918502755017044038><:mid:918502754916388916><:endd:918502754949931108>

**<:dot:918230175806803978> Warn  <@159985870458322944>**
/warn @kişi <sebep>
/infractions @kişi

**<:dot:918230175806803978> Mute  <@536991182035746816>**
w!mute @kişi <sebep>
w!unmute @kişi <sebep>

**<:dot:918230175806803978> Karantina  <@536991182035746816>**
w!q @kişi <sebep>
w!uq @kişi <sebep>


 <:start:918502755017044038><:mid:918502754916388916><:endd:918502754949931108> *** CEZALAR ***  <:start:918502755017044038><:mid:918502754916388916><:endd:918502754949931108>

**<:dot:918230175806803978> 2 Uyarı = 30 dk Mute**

**<:dot:918230175806803978> 5 Uyarı = Kalıcı Olarak Ban**
||
||
`)}})




client.on('messageCreate', message => {//kurallar resim2
  if (message.content === 'atroxyetkilikurallar3') {
    return message.channel.send(`
||
||
**<:dot:918230175806803978> Reklam yok.** Herhangi bir nedenle üyelere reklam yapma.
**<:dot:918230175806803978> Sabırlı ol.** Üst yetkililere ne zaman yetki atlayacağım diye sorular sorma.
**<:dot:918230175806803978> Her zaman dikkat.** Yetkilerini doğru ve düzenli bir şekilde kullan.Yetkin ile başkalarına üstünlük sağlama.
**<:dot:918230175806803978> Sadece burda.** Başka sunucular ve insanla hakkında konuşmamaya özen göster.
**<:dot:918230175806803978> Gereksiz kullanma.** Gereksiz yere kullanıcılara warn,mute,jail vb. şeyler atma.
**<:dot:918230175806803978> Dikkat et.** Warn,mute,jail vb. atarken açıklama girdiğne emin ol.
**<:dot:918230175806803978> Ayrımcılık yok.** <#905186936635932711> kanalındaki kurallar hala senin için geçerli.
`)}})






//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//















































//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
client.on("ready", async () => {
    const guild = client.guilds.cache.get(modmail.server_id)

    if (!guild?.me.permissions.has("ADMINISTRATOR")) {
 console.log(translate("startup.PERMISSION_REQUIRED"))
 return process.kill(process.pid);
    } else if (!modmail.role_ids.length) {
 console.log(translate("startup.MISSING_ROLE_IDS"))
 return process.kill(process.pid);
    } else if (!guild.channels.cache.find(x => x.name === "Mod Mail")) {
 console.log(translate("startup.SETUP_MESSAGE_1"))

 await guild.channels.create('Mod Mail', {
     type: "GUILD_CATEGORY",
     position: guild.channels.length + 1,
     permissionOverwrites: modmail.role_ids.map(role => {
  return { id: role, allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"] }
     }).concat({
  id: guild.roles.everyone.id,
  deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
     })
 })

 console.log(translate("startup.SETUP_MESSAGE_2"))
    }

    console.log(translate("startup.CONNECTED", { name: client.user.username, memberCount: guild.memberCount }))
})

/**
 * Main Part
 */

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (!message.guild) {
 const guild = client.guilds.cache.get(modmail.server_id) || await client.guilds.fetch(modmail.server_id).catch(m => { })
 const member = guild?.members.cache.get(message.author.id) || await guild?.members.fetch(message.author.id).catch(err => { })


 if (!member) return console.log(translate("system.MEMBER_NOT_FOUND", { member: message.author.tag }))

 const category = guild.channels.cache.find((x) => x.name == "Mod Mail")
 if (!category) return console.log(translate("system.PARENT_MISSING"))

 let channel = guild.channels.cache.find((x) => x.name == message.author.id && x.parentId === category.id)

 if (!channel) {
     channel = await guild.channels.create(message.author.tag, {
  type: "text",
  parent: category.id,
  topic: translate("system.CHANNEL_TOPIC", { member: message.author.tag })
     })

     let success_embed = new MessageEmbed()
  .setAuthor(translate("system.SUCCESS_EMBED.AUTHOR"))
  .setColor("GREEN")
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription(translate("system.SUCCESS_EMBED.DESCRIPTION"))

     message.author.send({ embeds: [success_embed] })


     let details_embed = new MessageEmbed()
  .setAuthor(translate("system.DETAILS_EMBED.AUTHOR"), message.author.displayAvatarURL({
      dynamic: true
  }))
  .setColor("BLUE")
  .setThumbnail(message.author.displayAvatarURL({
      dynamic: true
  }))
  .setDescription(translate("system.DETAILS_EMBED.DESCRIPTION", { content: message.content }))
  .addField("Kullanıcı Adı", message.author.username)
  .addField("Kullanıcı Id", message.author.id)
  .setTimestamp()
       


     return channel.send({ embeds: [details_embed] })
 }

 let content_embed = new MessageEmbed()
     .setColor("YELLOW")
     .setFooter(message.author.tag, message.author.displayAvatarURL({
  dynamic: true
     }))
     .setDescription(message.content)

 if (message.attachments.size) content_embed.setImage(message.attachments.map(x => x)[0].proxyURL)
 channel.send({ embeds: [content_embed] })

    } else if (message.channel.parentId) {
 const category = message.guild.channels.cache.find((x) => x.name == "Mod Mail")
 if (!category) return console.log(translate("system.PARENT_MISSING"))

 if (message.channel.parentId === category.id) {
     let member = message.guild.members.cache.get(message.author.id) || await message.guild.members.fetch(message.author.id).catch(err => { })
     if (!member) return message.channel.send(translate("system.MEMBER_NOT_FOUND", { member: message.author.tag }))

     let content_embed = new MessageEmbed()
  .setColor("GREEN")
  .setFooter(message.author.username, message.author.displayAvatarURL({
      dynamic: true
  }))
  .setDescription(translate("system.DETAILS_EMBED.DESCRIPTION", { content: message.content }))

     if (message.attachments.size) content_embed.setImage(message.attachments.map(x => x)[0].proxyURL)
     return member.send({ embeds: [content_embed] })
 }
    }
})



/**
 * Mail Closing system
 */
client.on("channelDelete", async (channel) => {
    const category = channel.guild.channels.cache.find((x) => x.name == "Mod Mail")
    if (!category) return console.log(translate("system.PARENT_MISSING"))

    const member = channel.guild.members.cache.get(channel.name) || await channel.guild.members.fetch(channel.name).catch(err => { })
    if (!member) return console.log(translate("system.MEMBER_NOT_FOUND", { member: "XXX" }))

    const embed = new MessageEmbed()
 .setAuthor(translate("system.DELETE_EMBED.AUTHOR"), client.user.displayAvatarURL())
 .setColor('RED')
 .setThumbnail(client.user.displayAvatarURL())
 .setDescription(translate("system.DELETE_EMBED.DESCRIPTION"))

    return member.send({ embeds: [embed] }).catch(err => { })
})


















//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//













client.on("ready", () => {
  var embed = new discord.MessageEmbed()
  .setTitle("bur Nere la ha atroxmuş atroxsa sorun yok.")
  .setDescription(`ayn kardeşim rol felan alıyon işte`)
  .setFooter("InFlames yaptı bu kodu felan ")
  .setColor("AQUA")
const butonlar = new discord.MessageActionRow()
    .addComponents(
      new discord.MessageButton()
        .setCustomId('rol1')
        .setLabel('Etkinlik Duyuru')
        .setStyle('PRIMARY'),
    )
        .addComponents(
          new discord.MessageButton()
            .setCustomId('rol2')
            .setLabel('Sunucu Güncellemeleri')
            .setStyle('PRIMARY')
        )
 client.channels.cache.get("918949806532083733").messages.fetch("918958243814985758").then(m => { m.edit({embeds: [embed], components: [butonlar]}) })

client.on("clickButton", async i => {
let ilkrol = "918370267137450034"
let ikirol = "918370209256054845"
  if (i.customId === 'rol1') {
       if(!i.member.roles.has(ilkrol)) { i.member.roles.add(ilkrol) } else { i.member.roles.remove(ilkrol) }
  }
  if (i.customId === 'rol2') {
       if(!i.member.roles.has(ikirol)) { i.member.roles.add(ikirol) } else { i.member.roles.remove(ikirol) }
  }
});
})




















//token kısmı//

client.login(ayarlar.token).then(a => {
  console.log(`✅ Tokene Bağlanıldı | Bot "${client.user.tag}" İsmi İle Giriş Yaptı. `)}).catch(a => {
  return console.log('⛔ Bot Başlatılamadı Hatalı Token ! ')
})

//token son
//ayrıntılı hata baş
process.on("warning", (e) => console.warn(e.stack));
//ayrıntılı hata son
