import type ChoozrId from "../../domain/ChoozrId";
import type TeamMembersCount from "../../domain/TeamMembersCount";

export default interface GetTeamsMembersCountPort {
    getTeamsMembersCountFrom(choozrId: ChoozrId): Promise<TeamMembersCount[]>;
}
