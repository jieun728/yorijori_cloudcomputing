const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db= {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.user = require("./user.js")(sequelize, Sequelize); //사용자


// Users and Addresses
// db.user.belongsTo(db.address, { foreignKey: 'addressId' });
// db.address.hasMany(db.user, { foreignKey: 'addressId' });

// Users and Posts
// db.user.hasMany(db.post, { foreignKey: 'userId' });
// db.post.belongsTo(db.user, { foreignKey: 'userId' });


module.exports= db;
