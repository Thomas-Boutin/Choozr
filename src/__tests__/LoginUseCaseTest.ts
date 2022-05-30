import AuthenticationService from "../port/AuthenticationService";
import type LoginUseCase from "../port/input/LoginUseCase";

describe('login', () => {

    it('should be true', () => {
        const loginUseCase: LoginUseCase = new AuthenticationService()
        expect(true).toBe(true);
    });
});