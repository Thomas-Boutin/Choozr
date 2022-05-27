import type LoginParameters from "../domain/LoginParameters";
import type LoginUseCase from "./input/LoginUseCase";

export default class AuthenticationService implements LoginUseCase {
    login(parameters: LoginParameters): void {
        alert("Logged!");
    }
}