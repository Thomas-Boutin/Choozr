import type LoginParameters from "../domain/LoginParameters";
import type LoginUseCase from "./input/LoginUseCase";
import type StoreLoginParametersPort from "./output/StoreLoginParametersPort";

export default class AuthenticationService implements LoginUseCase {
    private storeLoginParametersPort: StoreLoginParametersPort;

    constructor(
        storeLoginParametersPort: StoreLoginParametersPort
    ) {
        this.storeLoginParametersPort = storeLoginParametersPort;
    }

    login(parameters: LoginParameters): void {
       this.storeLoginParametersPort.store(parameters);
    }
}