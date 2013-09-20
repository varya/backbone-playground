var Person = Backbone.Model.extend({

    initialize: function() {
        this.bind('change:height', function(){
            console.log(this.get('name'), ' height changed');
        });
        console.log('Hello world!');
    },
    defaults: {
        name: 'Alex'
    }

});


var varya = new Person({ name: 'Varya', height: '163 cm' });

console.log(varya.get('name'));

var someone = new Person();
someone.set('height', '180 cm');

console.log(someone.get('name'));
console.log(someone.get('height'));
