import type Member from "../../domain/Member";
import type MemberName from "../../domain/MemberName";
import type TeamId from "../../domain/TeamId";

export default interface JoinTeamUseCase {
    createMemberWith(teamId: TeamId, memberName: MemberName): Promise<Member>;
}