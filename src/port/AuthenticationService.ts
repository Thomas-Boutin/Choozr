import type LoginParameters from "../domain/LoginParameters";
import type LoginUseCase from "./input/LoginUseCase";
import type GetLoginParametersPort from "./output/GetLoginParametersPort";
import type StoreLoginParametersPort from "./output/StoreLoginParametersPort";

export default class AuthenticationService implements LoginUseCase {
    private getLoginParametersPort: GetLoginParametersPort;
    private storeLoginParametersPort: StoreLoginParametersPort;

    constructor(
        getLoginParametersPort: GetLoginParametersPort,
        storeLoginParametersPort: StoreLoginParametersPort
    ) {
        this.getLoginParametersPort = getLoginParametersPort,
        this.storeLoginParametersPort = storeLoginParametersPort;
    }

    login(parameters: LoginParameters): void {
       this.storeLoginParametersPort.store(parameters);
    }
}