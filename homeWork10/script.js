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
        const newUser = {
            name: name,
            phone: phone,
            email: email
        };
        this.allUsers.push(newUser);
    },
    findUser: function(userName) {
        return this.allUsers.find(user => user.name === userName);
    }
};

console.log(users.findUser("Anna")); 
users.setNewUser('Alisa', '+385849695496', 'alisa@gmail.com');
console.log(users.allUsers);
