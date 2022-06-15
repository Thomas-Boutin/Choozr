import type Choozr from "../domain/Choozr";
import type ChoozrId from "../domain/ChoozrId";
import type ChoozrName from "../domain/ChoozrName";
import JoinChoozrURL from "../domain/JoinChoozrURL";
import type CreateChoozrUseCase from "./input/CreateChoozrUseCase";
import type GenerateJoinChoozrURLUseCase from "./input/GenerateJoinChoozrURLUseCase";
import type GetChoozrsUseCase from "./input/GetChoozrsUseCase";
import type CreateChoozrPort from "./output/CreateChoozrPort";
import type GetChoozrsPort from "./output/GetChoozrsPort";
import type GetLoginParametersPort from "./output/GetLoginParametersPort";

export default class ChoozrService implements CreateChoozrUseCase, GenerateJoinChoozrURLUseCase, GetChoozrsUseCase {
    private createChoozrPort: CreateChoozrPort;
    private getLoginParametersPort: GetLoginParametersPort;
    private getChoozrsPort: GetChoozrsPort;

    constructor(
        createChoozrPort: CreateChoozrPort,
        getLoginParametersPort: GetLoginParametersPort,
        getChoozrsPort: GetChoozrsPort,
    ) {
        this.createChoozrPort = createChoozrPort;
        this.getLoginParametersPort = getLoginParametersPort;
        this.getChoozrsPort = getChoozrsPort;
    }

    async getChoozrs(): Promise<Choozr[]> {
        const loginParameters = this.getLoginParametersPort.getLoginParameters();
        
        return await this.getChoozrsPort.getChoozrsWith(loginParameters);
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