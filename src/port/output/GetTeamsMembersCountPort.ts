import type TeamMembersCount from "../../domain/TeamMembersCount";

export default interface GetTeamsMembersCountPort {
    getTeamsMembersCount(): Promise<TeamMembersCount[]>;
}
