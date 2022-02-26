'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {"nombre":"Frannie Milvarnie","email":"fmilvarnie0@trellian.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":1,"apellidos":"Albacete", "nick": "administrador", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Nowell Davidofski","email":"ndavidofski1@aol.com","edad": 22, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Bearnard Niess","email":"bniess2@twitter.com","edad": 48, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Frannie Ishaki","email":"fishaki3@mapquest.com","edad": 28, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Goldina Peaple","email":"gpeaple4@nsw.gov.au","edad": 68, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Cassey Le Frank","email":"cle5@icq.com","edad": 28, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Cristobal McKinstry","email":"cmckinstry6@goodreads.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Laural Remmers","email":"lremmers7@unblog.fr","edad": 58, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Riobard Cape","email":"rcape8@oracle.com","edad": 22, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Abelard Simonutti","email":"asimonutti9@mlb.com","edad": 29, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Janice Wile","email":"jwilea@geocities.jp","edad": 33, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Costa Kelston","email":"ckelstonb@nature.com","edad": 12, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Poul Lautie","email":"plautiec@ucoz.com","edad": 10, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Bevin Spedding","email":"bspeddingd@europa.eu","edad": 20, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Mireielle Perfitt","email":"mperfitte@bizjournals.com","edad": 21, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Raina Bontine","email":"rbontinef@census.gov","edad": 22, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Benedetta Rickarsey","email":"brickarseyg@youku.com","edad": 23, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Albie Ygou","email":"aygouh@aol.com","edad": 24, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Allegra Riedel","email":"ariedeli@pen.io","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Kanickina Kerrod","email":"kkerrodj@issuu.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Ramon Lewtey","email":"rlewteyk@paginegialle.it","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Issiah Weatherhead","email":"iweatherheadl@time.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Ira Kybird","email":"ikybirdm@privacy.gov.au","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Barrett Moors","email":"bmoorsn@pcworld.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Broderick Kenion","email":"bkeniono@newsvine.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Uriel Meconi","email":"umeconip@wufoo.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Evangelia Tavner","email":"etavnerq@addthis.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Celie Tunnah","email":"ctunnahr@usatoday.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Allin Massard","email":"amassards@vistaprint.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Conney Donovin","email":"cdonovint@indiatimes.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Jsandye Dingsdale","email":"jdingsdaleu@canalblog.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Koenraad Eccott","email":"keccottv@gravatar.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Yettie Valentine","email":"yvalentinew@github.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Evaleen Faircloth","email":"efairclothx@irs.gov","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Kellen Woolens","email":"kwoolensy@tinyurl.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Silvester Kenneway","email":"skennewayz@newsvine.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Boris Marciskewski","email":"bmarciskewski10@lulu.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Mohandas Rainy","email":"mrainy11@yelp.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Oliy McGuirk","email":"omcguirk12@prlog.org","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Kanya Kinneir","email":"kkinneir13@dailymotion.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Bone Bake","email":"bbake14@census.gov","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Ezra Towse","email":"etowse15@blogspot.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Hill Sleaford","email":"hsleaford16@zimbio.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Randee Rentcome","email":"rrentcome17@yahoo.co.jp","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Margette Gapper","email":"mgapper18@dropbox.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Tawnya Grzegorzewski","email":"tgrzegorzewski19@hud.gov","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Shirley Maidlow","email":"smaidlow1a@flickr.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Xenia Figures","email":"xfigures1b@icq.com","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Valencia", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Ferdy Domoney","email":"fdomoney1c@joomla.org","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Getafe", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
      {"nombre":"Talia Yarnall","email":"tyarnall1d@icio.us","edad": 18, "contraseña":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),"rol":false,"apellidos":"Albacete", "nick": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
