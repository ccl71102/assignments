
var chair = {
    color: "black",
    isAvailable: false,
    canSpin: true,
    sit: function(){
        if(!this.isAvailable) {
            return "You're sitting on this chair";
        }
        else {
            return "This chair is available";
        }
    }
};

var car = {
    color: "silver",
    cylinders: 8,
    drivetrain: "RWD",
    honk: function(){
        return "beep";
    }
};

var glasses = {
    cost: 500.00,
    tint: "black",
    color: "blue",
    wear: function() {
        return "You are wearing glasses";
    }
}

var guitar = {
    strings: 8,
    color: "red",
    tuning: "EBGDAEBF#",
    downtune: function() {
        if(this.tuning === "DAFCGDAE") {
            return "That's too low";
        }
        else {
            this.tuning = "DAFCGDAE";
            return "It's now tuned to " + this.tuning;
        }
    }
};

var board = {
    color: "white",
    usesChalk: false,
    usesMarker: true,
    checkType: function() {
        if(this.usesMarker) {
            return "You can use a marker on it";
        } else {
            return "You can use chalk on it";
        }
    }
};

var monitor = {
    color: "black",
    isOn: true,
    isWorking: true,
    isRunning: function() {
        if(this.isWorking) {
            if(this.isOn) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    
};

var desk = {
    color: "gray",
    isFlat: true,
    isFirm: true,
    isUsable: function() {
        if(this.isFlat && this.isFirm) {
            return true;
        } else {
            return false;
        }
    }
};

var coffee = {
    hasCream: true,
    isHot: true,
    roast: "medium",
    countryOfOrigin: "Mexico",
    isDrinkable: function() {
        if(this.hasCream && this.isHot){
            return true;
        } else {
            return false;
        }
    }
};

var phone = {
    color: "black",
    carrier: "AT&T",
    applications: ["Google Maps", "Google Mail", "Stopwatch", "Google Chrome"],
    showApps: function(){
        return this.applications;
    }
};

var light = {
    color: "white",
    isOn: true,
    power: 50, //watts
    switch: function(){
        if(this.isOn) {
            this.isOn = false;
        } else {
            this.isOn = true;
        }
    }
};

var items = [chair, car, glasses, guitar, board, monitor, desk, coffee, phone, light];

console.log(items[7].isDrinkable());

var property;

for(property in light) {
    console.log(light[property]);
}