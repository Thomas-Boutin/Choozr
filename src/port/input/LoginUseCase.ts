import type LoginParameters from "../../domain/LoginParameters";

export default interface LoginUseCase {
    login(parameters: LoginParameters): void;
}