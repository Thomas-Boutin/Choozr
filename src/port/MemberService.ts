import type ChoozrId from "../domain/ChoozrId";
import type Member from "../domain/Member";
import type MemberName from "../domain/MemberName";
import type JoinChoozrUseCase from "./input/JoinChoozrUseCase";
import type JoinTeamPort from "./output/JoinTeamPort";
import type GetLoginParametersPort from "./output/GetLoginParametersPort";
import type GetTeamsMembersCountPort from "./output/GetTeamsMembersCountPort";

export default class MemberService implements JoinChoozrUseCase {
    private joinTeamPort: JoinTeamPort;
    private getLoginParametersPort: GetLoginParametersPort;
    private getTeamsMembersCountPort: GetTeamsMembersCountPort;

    constructor(
        joinTeamPort: JoinTeamPort,
        getLoginParametersPort: GetLoginParametersPort,
        getTeamsMembersCountPort: GetTeamsMembersCountPort,
    ) {
        this.joinTeamPort = joinTeamPort;
        this.getLoginParametersPort = getLoginParametersPort;
        this.getTeamsMembersCountPort = getTeamsMembersCountPort;
    }

    async createMemberWith(choozrId: ChoozrId, memberName: MemberName): Promise<Member> {
        const loginParameters = this.getLoginParametersPort.getLoginParameters();
        const teamsMembersCount = await this.getTeamsMembersCountPort.getTeamsMembersCountFrom(choozrId);
        teamsMembersCount.sort((a, b) => a.membersCount - b.membersCount); 

        return await this.joinTeamPort.createMemberWith(teamsMembersCount[0].teamId, memberName, loginParameters);
    }
}