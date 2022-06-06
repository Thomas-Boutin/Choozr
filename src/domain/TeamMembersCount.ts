import type TeamId from "./TeamId";

export default class TeamMembersCount {
    __teamMembersCountBrand: any;
    teamId: TeamId;
    membersCount: number;

    constructor(teamId: TeamId, membersCount: number) {
        this.teamId = teamId;
        this.membersCount = membersCount;
    }
}