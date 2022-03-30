const db = require('../dataBase/users.db')

module.exports = {
    findAll: () => db,

    insertUser: (userObject) => {
        db.push(userObject);
        console.log(db)
    },

    findOneById: (userId) => db[userId],

    deleteUserById: (userId) => {
        const removeIndex = db.findIndex( item => item.id === db[userId] )
        return removeIndex
        console.log(removeIndex)
    }
};