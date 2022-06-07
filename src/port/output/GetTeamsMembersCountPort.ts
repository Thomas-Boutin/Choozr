import type ChoozrId from "../../domain/ChoozrId";
import type LoginParameters from "../../domain/LoginParameters";
import type TeamMembersCount from "../../domain/TeamMembersCount";

export default interface GetTeamsMembersCountPort {
    getTeamsMembersCountFrom(choozrId: ChoozrId, loginParameters: LoginParameters): Promise<TeamMembersCount[]>;
}
