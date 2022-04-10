const { User } = require('../models');

const userData = [
    {
        username: "Leo_the_Cat",
        twitter: "LeoCat",
        github: "LeoCat",
        email: "Leo_Cat@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Coco_the_Cat",
        twitter: "CocoCat",
        github: "CocoCat",
        email: "Coco_Cat@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "Sassy_Sage",
        twitter: "Sage",
        github: "Sage",
        email: "Sage_Sassy@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Caption_Ginyu",
        twitter: "Ginyu_Force",
        github: "Ginyu_Force",
        email: "CPT_Ginyu@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "PShertzi",
        twitter: "Pshertzi",
        github: "Pshertzi",
        email: "Pshertzi@gmail.com",
        password: "p@ssword5"
    }
    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;