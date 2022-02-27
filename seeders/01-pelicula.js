'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('peliculas', [
      {"titulo":"Man Who Left His Will on Film, The (Tôkyô sensô sengo hiwa)","sinopsis":"Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","adultos":true,"popularidad":8.0,"imagen":"http://dummyimage.com/232x100.png/dddddd/000000","fecha":"2022-02-21 12:32:43","createdAt":"2021-10-11 02:22:31","updatedAt":"2021-05-17 12:51:56"},
      {"titulo":"Budrus","sinopsis":"Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.","adultos":false,"popularidad":3.0,"imagen":"http://dummyimage.com/246x100.png/5fa2dd/ffffff","fecha":"2021-04-19 20:05:14","createdAt":"2021-12-05 14:04:31","updatedAt":"2021-10-19 08:59:21"},
      {"titulo":"Believer, The","sinopsis":"Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.","adultos":true,"popularidad":2.7,"imagen":"http://dummyimage.com/144x100.png/cc0000/ffffff","fecha":"2021-03-01 12:24:56","createdAt":"2022-02-13 00:47:10","updatedAt":"2022-01-15 22:02:21"},
      {"titulo":"A Smoky Mountain Christmas","sinopsis":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.","adultos":true,"popularidad":5.2,"imagen":"http://dummyimage.com/250x100.png/ff4444/ffffff","fecha":"2021-07-03 19:26:33","createdAt":"2021-02-28 05:58:03","updatedAt":"2021-05-04 12:13:05"},
      {"titulo":"It's a Boy Girl Thing","sinopsis":"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.","adultos":false,"popularidad":2.5,"imagen":"http://dummyimage.com/140x100.png/cc0000/ffffff","fecha":"2021-09-22 22:55:25","createdAt":"2022-01-22 03:16:47","updatedAt":"2022-01-19 13:49:06"},
      {"titulo":"Everybody's Got Somebody... Not Me","sinopsis":"Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.","adultos":false,"popularidad":5.1,"imagen":"http://dummyimage.com/193x100.png/5fa2dd/ffffff","fecha":"2021-06-19 14:55:22","createdAt":"2021-09-06 21:03:23","updatedAt":"2021-06-24 05:58:30"},
      {"titulo":"Tough Guise: Violence, Media & the Crisis in Masculinity","sinopsis":"Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.","adultos":false,"popularidad":9.4,"imagen":"http://dummyimage.com/178x100.png/dddddd/000000","fecha":"2021-12-26 08:48:49","createdAt":"2021-04-05 20:24:52","updatedAt":"2021-11-04 16:09:07"},
      {"titulo":"Deliverance","sinopsis":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.","adultos":true,"popularidad":1.0,"imagen":"http://dummyimage.com/188x100.png/dddddd/000000","fecha":"2021-04-22 00:10:09","createdAt":"2021-11-22 13:28:30","updatedAt":"2021-07-09 09:01:31"},
      {"titulo":"Lipton Cockton in the Shadows of Sodoma","sinopsis":"Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.","adultos":true,"popularidad":6.4,"imagen":"http://dummyimage.com/249x100.png/5fa2dd/ffffff","fecha":"2021-07-05 20:45:20","createdAt":"2021-05-16 12:44:01","updatedAt":"2021-03-05 16:24:50"},
  ], {});
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
