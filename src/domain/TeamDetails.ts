import type MemberName from "./MemberName";
import type TeamId from "./TeamId";
import type TeamName from "./TeamName";

export default class TeamDetails {
    teamId: TeamId;
    name: TeamName;
    membersNames: MemberName[];

    constructor(teamId: TeamId, name: TeamName, membersNames: MemberName[]) {
        this.teamId = teamId;
        this.name = name;
        this.membersNames = membersNames;
    }
}