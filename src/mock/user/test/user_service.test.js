const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');

jest.mock('../user_client');

describe('UserService', () => {
    const login = jest.fn(async() => 'success');
    UserClient.mockImplementation(() => {
        return {
            login,
        }
    });

    beforeEach(() => {
        userService = new UserService(new UserClient());
        login.mockClear();
        UserClient.mockClear();
    })

    it('first login', () => {
        userService.login('abc', 'abc');

        expect(login.mock.calls.length).toBe(1);
    })

    it('user already login', () => {
        userService.login('abc', 'abc');
        userService.login('abc', 'abc');

        expect(login.mock.calls.length).toBe(1);
    })
});
