import type Choozr from "../domain/Choozr";
import type ChoozrId from "../domain/ChoozrId";
import type ChoozrName from "../domain/ChoozrName";
import JoinChoozrURL from "../domain/JoinChoozrURL";
import type Team from "../domain/Team";
import type CreateChoozrUseCase from "./input/CreateChoozrUseCase";
import type GenerateJoinChoozrURLUseCase from "./input/GenerateJoinChoozrURLUseCase";
import type GetChoozrsUseCase from "./input/GetChoozrsUseCase";
import type GetChoozrTeamsUseCase from "./input/GetChoozrTeamsUseCase";
import type CreateChoozrPort from "./output/CreateChoozrPort";
import type GetChoozrsPort from "./output/GetChoozrsPort";
import type GetChoozrTeamsPort from "./output/GetChoozrTeamsPort";
import type GetLoginParametersPort from "./output/GetLoginParametersPort";

export default class ChoozrService implements CreateChoozrUseCase, GenerateJoinChoozrURLUseCase, GetChoozrsUseCase, GetChoozrTeamsUseCase {
    private createChoozrPort: CreateChoozrPort;
    private getLoginParametersPort: GetLoginParametersPort;
    private getChoozrsPort: GetChoozrsPort;
    private getChoozrTeamsPort: GetChoozrTeamsPort;

    constructor(
        createChoozrPort: CreateChoozrPort,
        getLoginParametersPort: GetLoginParametersPort,
        getChoozrsPort: GetChoozrsPort,
        getChoozrTeamsPort: GetChoozrTeamsPort,
    ) {
        this.createChoozrPort = createChoozrPort;
        this.getLoginParametersPort = getLoginParametersPort;
        this.getChoozrsPort = getChoozrsPort;
        this.getChoozrTeamsPort = getChoozrTeamsPort;
    }

    async getChoozrTeamsWith(choozrId: ChoozrId): Promise<Team[]> {
        const loginParameters = this.getLoginParametersPort.getLoginParameters();
        
        return await this.getChoozrTeamsPort.getChoozrTeamsWith(choozrId, loginParameters);
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