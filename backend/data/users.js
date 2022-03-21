import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@eventbrite.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Peter Johnson',
        email: 'peter@eventbrite.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'Brandon Lee',
        email: 'Brandon@eventbrite.com',
        password: bcrypt.hashSync('123456',10)
    },
]
export default users