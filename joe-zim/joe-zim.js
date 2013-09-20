var Person = Backbone.Model.extend({

    initialize: function() {
        console.log('Hello world!');
    },
    defaults: {
        name: 'Alex'
    }

});


var varya = new Person({ name: 'Varya', height: '163 cm' });

console.log(varya.get('name'));

var someone = new Person();

console.log(someone.get('name'));
