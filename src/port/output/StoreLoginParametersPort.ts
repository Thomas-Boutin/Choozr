import type LoginParameters from "../../domain/LoginParameters";

export default interface StoreLoginParametersPort {
    store(parameters: LoginParameters): void;
}