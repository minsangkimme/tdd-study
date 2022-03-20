class UserService {
    constructor(userClient) {
        this.userClient = userClient;
        this.isLoggedIn = false;
    }

    login(id, password) {
        if (!this.isLoggedIn) {
            this.userClient
                .login(id, password)
                .then(data => {
                    this.isLoggedIn = data;
                    return this.isLoggedIn;
                });
        }
    }
}

module.exports = UserService;