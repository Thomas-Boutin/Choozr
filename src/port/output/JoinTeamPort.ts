import type Member from "../../domain/Member";
import type MemberName from "../../domain/MemberName";
import type LoginParameters from "../../domain/LoginParameters";
import type TeamId from "../../domain/TeamId";

export default interface JoinTeamPort {
    createMemberWith(choozrId: TeamId, memberName: MemberName, loginParameters: LoginParameters): Promise<Member>;
}