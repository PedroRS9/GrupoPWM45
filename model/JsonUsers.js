class JsonUsers {
    constructor(usersUrl) {
        this.userUrl = usersUrl
    }

    //nextId = () => fetch(this.userUrl).then(data => data.json()).then(data => data.nextId)
    users = () => fetch(this.userUrl).then(data => data.json()).then(data => data.users)
    post = (body) => fetch(this.userUrl, { method: "PUT", body }).then(data => data.json())

    findById = (id) => this.users().then(data => data.find(user => user.id == id))

    findByEmail = email => this.users().then(data => data.find(user => user.email === email))

    /*
    createUser = ({ ...user }) => this.users().then(data => {
        data.users.push({ ...user, id: this.nextId() })

        console.log(data)
        return this.post(data)
    })
    */
}


export default new JsonUsers('../data/users.json')