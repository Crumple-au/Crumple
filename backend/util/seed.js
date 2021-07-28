import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Ryan',
            email: 'admin1@example.com',
            password: bcrypt.hashSync('1234', 8),
            description: 'Hey This my Ryan description. here i will talk about who i am and what art i sell',
            isAdmin: true,
            isSeller: true,
        },
        {
            name: 'Irah',
            email: 'admin2@example.com',
            password: bcrypt.hashSync('1234', 8),
            description: "Hey This my Irah description. I'm an admin on Crumple",
            isAdmin: true,
            isSeller: true,
        },
        {
            name: 'Sarah',
            email: 'user1@example.com',
            password: bcrypt.hashSync('1234', 8),
            description: 'Hey This my Sarah description. Im an artist and i use this site to sell my art!',
            isAdmin: false,
            isSeller: false,
        },
    ]
}

export default data;