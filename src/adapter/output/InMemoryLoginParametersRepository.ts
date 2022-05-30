import type LoginParameters from "../../domain/LoginParameters";
import type GetLoginParametersPort from "../../port/output/GetLoginParametersPort";
import type StoreLoginParametersPort from "../../port/output/StoreLoginParametersPort";

export default class InMemoryLoginParametersRepository implements GetLoginParametersPort, StoreLoginParametersPort {
    private parameters?: LoginParameters = undefined

    store(parameters: LoginParameters): void {
       this.parameters = parameters;
    }

    getLoginParameters(): LoginParameters {
        return this.parameters;
    }
}