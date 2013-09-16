var Game = Backbone.Model.extend({
    initialize: function(){
        console.log('Oh hey!');
    },
    defaults: {
        name: 'Default title', 
        releaseDate: 2011, 
    }  
});

// Create a new game
var portal = new Game({ name: "Portal 2", releaseDate: 2011});

// release will hold the releaseDate value -- 2011 here
var release = portal.get('releaseDate');  

// Changes the name attribute  
portal.set({ name: "Portal 2 by Valve"});  
