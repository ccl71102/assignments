var musician = {
    name: "John",
    age: 24,
    instruments: [
        {
            name: "guitar",
            numberOfStrings: 6
        }],
    instrumentList: function() {
        var instrumentListString = "";
        for(var i = 0; i < this.instruments.length; i++) {
            instrumentListString = instrumentListString + this.instrument[i] + " ";
        }
        return instrumentListString;
    },
    bandMates: [
        {
            name: "Susan",
            age: 26,
            instruments: [
                {
                    name: "bass",
                    numberOfStrings: 5
                },
                {
                    name: "vocals",
                    numberOfStrings: 0
                }
            ],
            instrumentList: function() {
                var instrumentListString = "";
                for(var i = 0; i < this.instruments.length; i++) {
                    instrumentListString = instrumentListString + this.instrument[i] + " ";
                }
                return instrumentListString;
            },
            bandMates: []
        },
        {
            name: "Steve",
            age: 29,
            instruments: [
                {
                    name: "drums",
                    numberOfStrings: 0
                }],
            instrumentList: function() {
                var instrumentListString = "";
                for(var i = 0; i < this.instruments.length; i++) {
                    instrumentListString = instrumentListString + this.instrument[i] + " ";
                }
                return instrumentListString;
            },
            bandMates: []
        }
    ]
};


musician.isBandLeader = true;
musician.location = "Salt Lake City";

musician.instruments[0].tuning = "DAFCGD";

musician.instruments[1] = {name: "cowbell", numberOfStrings: 0};
musician.instruments[2] = {name: "banjo", numberOfStrings: 5};

console.log(musician);
console.log(musician.instruments);
console.log(musician.bandMates[0]);


