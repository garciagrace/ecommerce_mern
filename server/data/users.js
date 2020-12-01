import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Super Admin',
    email: 'admin@shop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sample User',
    email: 'user@shop.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sample Me',
    email: 'sample@shop.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
