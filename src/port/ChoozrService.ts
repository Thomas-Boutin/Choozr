import type Choozr from "../domain/Choozr";
import type ChoozrId from "../domain/ChoozrId";
import type ChoozrName from "../domain/ChoozrName";
import JoinChoozrURL from "../domain/JoinChoozrURL";
import type CreateChoozrUseCase from "./input/CreateChoozrUseCase";
import type GenerateJoinChoozrURLUseCase from "./input/GenerateJoinChoozrURLUseCase";
import type CreateChoozrPort from "./output/CreateChoozrPort";
import type GetLoginParametersPort from "./output/GetLoginParametersPort";

export default class ChoozrService implements CreateChoozrUseCase, GenerateJoinChoozrURLUseCase {
    private createChoozrPort: CreateChoozrPort;
    private getLoginParametersPort: GetLoginParametersPort;

    constructor(
        createChoozrPort: CreateChoozrPort,
        getLoginParametersPort: GetLoginParametersPort,
    ) {
        this.createChoozrPort = createChoozrPort;
        this.getLoginParametersPort = getLoginParametersPort;
    }

    generateJoinChoozrURLWith(choozrId: ChoozrId): Promise<JoinChoozrURL> {
        const loginParameters = this.getLoginParametersPort.getLoginParameters();

        return Promise.resolve(new JoinChoozrURL(
            `https://thomas-boutin.github.io/Choozr/#/choozrs/${choozrId.value}/join?appId=${loginParameters.appId}&apiKey=${loginParameters.apiKey}`
        ));
    }

    async createChoozrWith(choozrName: ChoozrName): Promise<Choozr> {
        const loginParameters = this.getLoginParametersPort.getLoginParameters();

        return await this.createChoozrPort.createChoozrWith(choozrName, loginParameters);
    }
}