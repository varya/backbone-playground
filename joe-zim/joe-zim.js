var Person = Backbone.Model.extend({

    initialize: function() {
        console.log('Hello world!');
    }

});


var person = new Person({ name: 'Varya', height: '163 cm' });

console.log(person.get('name'));
