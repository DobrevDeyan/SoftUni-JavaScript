function problemOne(input) {
    let username = input.shift();

    while (input[0] !== "Registration") {
        let tokens = input.shift().split(" ");
        // console.log(line)

        if (tokens[0] === "Letters") {
            if (tokens[1] === "Lower") {
                username = username.toLowerCase();
                console.log(username);
            } else if (tokens[1] === "Upper") {
                username = username.toUpperCase()
                console.log(username);
            }
        } else if (tokens[0] === "Reverse") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            if (startIndex >= 0 && endIndex >= 0 && startIndex <= username.length && endIndex <= username.length) {
                let temp = username.substring(startIndex, endIndex + 1);
                let reversed = temp.split("").reverse().join("");
                console.log(reversed);
            }
        } if (tokens[0] === "Substring") {
            let substitute = tokens[1];
            if (username.includes(substitute)) {
                username = username.replace(substitute, "");
                console.log(username);
            } else {
                console.log(`The username ${username} doesn't contain ${substitute}.`)
            }
        } if (tokens[0] === "Replace") {
            let substitute = tokens[1];
            username = username.split(substitute).join("-");
            console.log(username);
        } if (tokens[0] === "IsValid") {
            let char = tokens[1];
            if (username.includes(char)) {
                console.log(`Valid username.`);
            } else {
                console.log(`${char} must be contained in your username.`);
            }
        }
    }
}
// problemOne(["John", "Letters Lower", "Substring SA", "IsValid @", "Registration"]);
// problemOne(["ThisIsSoftUni", "Reverse 1 3", "Replace S", "Substring hi", "Registration"]);



function problemTwo(input) {
    input.shift();
    let count = 0;
    let pattern = /(U\$)(?<username>[A-Z]+[a-z]{2,})(\1)(P@\$)(?<password>[A-Za-z]{5,}[\d]+)(P@\$)/g;

    for (let inputElement of input) {
        let match = pattern.exec(inputElement);
        if (match !== null) {

            let userName = match.groups['username'];
            let passWord = match.groups['password'];

            console.log(`Registration was successful`);
            console.log(`Username: ${userName}, Password: ${passWord}`);
            count++;
            match = pattern.exec(input);

        } else if (true) {
            console.log(`Invalid username or password`);
        }
    }
    console.log(`Successful registrations: ${count}`);
}
// problemTwo(["3", "U$MichaelU$P@$asdqwe123P@$", "U$NameU$P@$PasswordP@$", "U$UserU$P@$ad2P@$"]);
// problemTwo(["2", "U$TommyU$P@$asdqwe123P@$", "Sara 1232412"]);



function problemThree(input) {
    let raidCommands = {
        "Add": add,
        "Attack": takeDamage,
        "Delete": deleted,
    };
    let raid = {};
    while (input[0] !== 'Results') {
        let [command, ...parameters] = input.shift().split(":");
        let action = raidCommands[command];
        action(...parameters);
    }


    let sortedRaid = Object.entries(raid).sort(
        (a, b) => {
            return (b[1].health - a[1].health) || (a[0].localeCompare(b[0]));
        }
    );

    console.log(`People count: ${sortedRaid.length}`);
    for (let raidMember of sortedRaid) {
        console.log(`${raidMember[0]} - ${raidMember[1].health} - ${raidMember[1].energy}`);
    }

    function add(name, health, energy) {
        health = Number(health);
        energy = Number(energy);

        if (raid.hasOwnProperty(name)) {
            raid[name].health += health;
        } else {
            raid[name] = {
                health: Number(health),
                energy: Number(energy),
            }
        }
    }
    function takeDamage(attacker, defender, damage) {
        damage = Number(damage);
        if (raid.hasOwnProperty(attacker) && raid.hasOwnProperty(defender)) {
            let currentDefenderHealth = raid[defender].health -= damage;
            let currenAttackerEnergy = raid[attacker].energy -= 1;
            if (currentDefenderHealth <= 0) {
                delete raid[defender];
                console.log(`${defender} was disqualified!`);
            }
            if (currenAttackerEnergy <= 0) {
                delete raid[attacker];
                console.log(`${attacker} was disqualified!`);
            }
        }
    }
    function deleted(item) {
        if (raid.hasOwnProperty(item)) {
            delete raid[item];
        }
        if (item === "All") {
            Object.getOwnPropertyNames(raid).forEach(function (prop) {
                delete raid[prop];
            })
        }
    }
}
// problemThree(["Add:Mark:1000:5",
//     "Add:Clark:1000:2",
//     "Attack:Clark:Mark:500",
//     "Attack:Clark:Mark:800",
//     "Add:Charlie:4000:10",
//     "Results"]);
// problemThree(["Add:Bonnie:3000:5",
//     "Add:Kent:10000:10",
//     "Add:Johny:4000:10",
//     "Attack:Johny:Bonnie:400",
//     "Add:Johny:3000:5",
//     "Add:Peter:7000:1",
//     "Delete:Kent",
//     "Results"]);
// problemThree(["Add:Bonnie:3000:5",
//     "Add:Johny:4000:10",
//     "Delete:All",
//     "Add:Bonnie:3333:3",
//     "Add:Aleks:1000:70",
//     "Add:Tom:4000:1",
//     "Results"])
