let unsereHaustiere = [{
        tiertyp: "Katze",
        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]},
        {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
   
];

 console.log(unsereHaustiere[0].names[1]);
 console.log(unsereHaustiere[1].names[2]);
 console.log(unsereHaustiere[1].names);
 unsereHaustiere[1].names[1] = 'kaka';
 unsereHaustiere[1].names[2] = 'pisse';
 delete unsereHaustiere[1].names[0];
 console.log(unsereHaustiere[1].names);

