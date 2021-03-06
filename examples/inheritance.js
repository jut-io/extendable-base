var Base = require('extendable-base');

var Animal = Base.extend({
    initialize: function() {
        this.classname = "Animal";
        this.chain = this.classname;
    },

    ident : function() {
        return 'I am an ' + this.classname;
    },

    legs : function() {
        return 'I have ' + this._legs + ' legs';
    }
});

var TwoLegged = Animal.extend({
    // Prototype properties can be set inline
    _legs: 2
});

var FourLegged = Animal.extend({
    // Initialize is called for all classes
    initialize : function() {
        this._legs = 4;
        this.chain = this.chain + "->FourLegged";
    }
});

var Furry = {
    initialize: function() {
        this.chain = this.chain + "->Furry";
    },
    fur: function() {
        return 'I have ' + this.fur_color + ' fur';
    }
};

var FurryDog = FourLegged.extend(Furry).extend({
    classname: 'FurryDog',

    initialize: function(fur_color) {
        this.fur_color = fur_color;
        this.chain = this.chain + "->FurryDog";
    }
});

module.exports = {
    Animal: Animal,
    TwoLegged: TwoLegged,
    FourLegged: FourLegged,
    Furry: Furry,
    FurryDog: FurryDog
};
