import type TeamId from "../domain/TeamId";
import type MemberName from "../domain/MemberName";
import type LoginParameters from "../domain/LoginParameters";
import Member from "../domain/Member";
import MemberId from "../domain/MemberId";
import type JoinTeamPort from "../port/output/JoinTeamPort";

export default class FakeMemberOutputAdapter implements JoinTeamPort {
    private initialMemberNumberId: number;

    constructor(initialMemberNumberId: number) {
        this.initialMemberNumberId = initialMemberNumberId;
    }

    createMemberWith(teamId: TeamId, memberName: MemberName, _loginParameters: LoginParameters): Promise<Member> {
        const team = new Member(
            new MemberId(this.initialMemberNumberId.toString()),
            memberName,
            teamId
        );
        this.initialMemberNumberId++;

        return Promise.resolve(team);
    }
}
