class JsonUsers {
    constructor(usersUrl) {
        this.userUrl = usersUrl
    }

    users = () => fetch(this.userUrl).then(data => data.json()).then(data => data.users)

    findById = (id) => this.users().then(data => data.find(user => user.id == id))
    findByEmail = email => this.users().then(data => data.find(user => user.email === email))
}


export default new JsonUsers('../data/users.json')