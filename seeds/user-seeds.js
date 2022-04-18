const { User } = require('../models');

const userData = [
    {
        username: "Leo_the_Cat",
        password: "p@ssword1"
    },
    {
        username: "Coco_the_Cat",
        password: "p@ssword2"
    },
    {
        username: "Sassy_Sage",
        password: "p@ssword3"
    },
    {
        username: "Caption_Ginyu",
        password: "p@ssword4"
    },
    {
        username: "PShertzi",
        password: "p@ssword5"
    }
    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;