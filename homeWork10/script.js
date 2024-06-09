const users = {
    allUsers: [
        {
            name: 'Oleh',
            phone: '+380991111111',
            email: 'oleh@gmail.com'
        },
        {
            name: 'Anna',
            phone: '+380932222222',
            email: 'anna@gmail.com'
        },
        {
            name: 'Dasha',
            phone: '+380970000000',
            email: 'dasha@gmail.com'
        }
    ],
    setNewUser: function(name, phone, email) {
        if (!name || !email) {
            console.log("Name and email are required.");
            return;
        }

        if (!phone) {
            console.log("Phone number is missing. Defaulting -");
            phone = '-';
        }
        const newUser = {
            name: name,
            phone: phone,
            email: email
        };
        this.allUsers.push(newUser);
    },
    findUser: function(userName) {
        const user = this.allUsers.find(user => user.name === userName);
        return user ? user : `${userName} not found in your contacts`;
    }
};

console.log(users.findUser("Anna")); 
users.setNewUser('Alisa', '+385849695496', 'alisa@gmail.com');
console.log(users.allUsers);
