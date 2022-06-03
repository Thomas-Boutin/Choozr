import type Choozr from "../domain/Choozr";
import type ChoozrName from "../domain/ChoozrName";
import type CreateChoozrUseCase from "./input/CreateChoozrUseCase";
import type CreateChoozrPort from "./output/CreateChoozrPort";
import type GetLoginParametersPort from "./output/GetLoginParametersPort";

export default class ChoozrService implements CreateChoozrUseCase {
    private createChoozrPort: CreateChoozrPort;
    private getLoginParametersPort: GetLoginParametersPort;

    constructor(
        createChoozrPort: CreateChoozrPort,
        getLoginParametersPort: GetLoginParametersPort,
    ) {
        this.createChoozrPort = createChoozrPort;
        this.getLoginParametersPort = getLoginParametersPort;
    }

    async createChoozrWith(choozrName: ChoozrName): Promise<Choozr> {
        const loginParameters = this.getLoginParametersPort.getLoginParameters();

        return await this.createChoozrPort.createChoozrWith(choozrName, loginParameters);
    }
}