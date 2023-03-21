import users from './JsonUsers.js'

import User from './User.js'


export default {

    findById: id => users.findById(id).then(user => new User(user)),

    findByEmail: email => users.findByEmail(email).then(user => new User(user)),

    createUser: ({ name, email, password, lastLame = null, country = null, province = null, subscription = null }) => {
        return users.createUser({ email })
    }
}