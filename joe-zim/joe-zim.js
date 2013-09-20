var Person = Backbone.Model.extend({

    initialize: function() {
        this.bind('change:height', function(){
            console.log(this.get('name'), ' height changed');
        });
        this.on('invalid', function(m, error){
            console.log(error);
        });
        console.log('Hello world!');
    },
    defaults: {
        name: 'Alex'
    },
    validate: function(attrs){
        if (attrs.height < 150) {
            return 'You are not very tall for this job';
        }
    }

});


var varya = new Person({ name: 'Varya', height: 163 });

console.log(varya.get('name'));

var someone = new Person();
someone.set('height', 180, { validate: true });

console.log(someone.get('name'));
console.log(someone.get('height'));

var kid = new Person({name: 'Tanya'});
kid.set('height', 130, { validate: true });
