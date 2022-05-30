import InMemoryLoginParametersRepository from "../adapter/output/InMemoryLoginParametersRepository";
import LoginParameters from "../domain/LoginParameters";
import AuthenticationService from "../port/AuthenticationService";
import type LoginUseCase from "../port/input/LoginUseCase";

describe('login', () => {

    it('should store the given login parameters', () => {
        const inMemoryLoginParametersRepository = new InMemoryLoginParametersRepository()
        const loginUseCase: LoginUseCase = new AuthenticationService(
            inMemoryLoginParametersRepository,
            inMemoryLoginParametersRepository
        )
        loginUseCase.login(new LoginParameters("appId", "apiKey"))

        expect(inMemoryLoginParametersRepository.getLoginParameters()).toEqual(new LoginParameters("appId", "apiKey"));
    });
});