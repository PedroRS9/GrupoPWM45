export default class User {
    constructor(data) {

        if (!data) {
            this._exists = false
            return
        }

        this._exists = true
        this._id = data?.id
        this._email = data?.email
        this._password = data?.password
        this._name = data?.name
        this._lastLame = data?.lastLame
        this._country = data?.country
        this._province = data?.province
        this._subscription = data?.subscription
    }

    // *=> getters

    exists = () => this._exists

    id = () => this._id
    email = () => this._email
    password = () => this._password
    name = () => this._name
    lastLame = () => this._lastLame
    country = () => this._country
    province = () => this._province
    subscription = () => this._subscription


    isLoggedIn = () => { }

    login = () => { }
    logout = () => { }
}