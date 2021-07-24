import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Ryan',
            email: 'admin1@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            isSeller: true,
        },
        {
            name: 'Irah',
            email: 'admin2@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            isSeller: true,
        },
        {
            name: 'Sarah',
            email: 'user1@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
            isSeller: false,
        },
    ]
}

export default data;