class UserClient {
    login(id, password) {
        return fetch('http://example.com/login/id+password')
        .then(respose => respose.json());
    }
}

module.exports = UserClient;