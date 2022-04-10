const { Post } = require('../models');

const postData = [
    {
        title: "Ginyu Force rules",
        post_content: "Ginyu Force rules! Ginyu Forece Rules! Ginyu Force Rules!",
        user_id: 3
    },
    {
        title: "Coco keeps sleeping in my bed",
        post_content: "Local cat Coco has been caught again sleeping in my bed",
        user_id: 1
    },
    {
        title: "New Cat in town!",
        post_content: "New Cat Leo has taken over the house since being adopted",
        user_id: 2

    },
   
    {
        title: "Just Tech News goes public!",
        post_content: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 4
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;