//3rd party
window.jQuery = $ = require('jquery');
var $ = require('jquery');
var Backbone = require('backbone');
var Swagger = require('swagger-client');
var bootstrap = require('bootstrap-sass/assets/javascripts/bootstrap.js');


//local
var router = require('./router.js'); // app main router


$(function(){

Backbone.history.start();



// var client = new Swagger({
//   url: 'http://petstore.swagger.io/v2/swagger.json',
//   success: function() {
//     client.pet.getPetById({petId:7},{responseContentType: 'application/json'},function(pet){
//       console.log('pet', pet);
//     });
//   }
// });



});
