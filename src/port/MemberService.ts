import type ChoozrId from "../domain/ChoozrId";
import type Member from "../domain/Member";
import type MemberName from "../domain/MemberName";
import type JoinTeamUseCase from "./input/JoinTeamUseCase";
import type JoinTeamPort from "./output/JoinTeamPort";
import type GetLoginParametersPort from "./output/GetLoginParametersPort";

export default class MemberService implements JoinTeamUseCase {
    private joinTeamPort: JoinTeamPort;
    private getLoginParametersPort: GetLoginParametersPort;

    constructor(
        joinTeamPort: JoinTeamPort,
        getLoginParametersPort: GetLoginParametersPort,
    ) {
        this.joinTeamPort = joinTeamPort;
        this.getLoginParametersPort = getLoginParametersPort;
    }

    async createMemberWith(teamId: ChoozrId, memberName: MemberName): Promise<Member> {
        const loginParameters = this.getLoginParametersPort.getLoginParameters();

        return await this.joinTeamPort.createMemberWith(teamId, memberName, loginParameters);
    }
}