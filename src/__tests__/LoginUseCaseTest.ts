import InMemoryLoginParametersOutputAdapter from "../adapter/output/InMemoryLoginParametersOutputAdapter";
import LoginParameters from "../domain/LoginParameters";
import AuthenticationService from "../port/AuthenticationService";
import type LoginUseCase from "../port/input/LoginUseCase";

describe("login", () => {

    it("should store the given login parameters", () => {
        const inMemoryLoginParametersRepository = new InMemoryLoginParametersOutputAdapter();
        const loginUseCase: LoginUseCase = new AuthenticationService(
            inMemoryLoginParametersRepository,
        );
        loginUseCase.login(new LoginParameters("appId", "apiKey"));

        expect(inMemoryLoginParametersRepository.getLoginParameters()).toEqual(new LoginParameters("appId", "apiKey"));
    });
});