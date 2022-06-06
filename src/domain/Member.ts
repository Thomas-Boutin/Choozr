import type TeamId from "./TeamId";
import type MemberId from "./MemberId";
import type MemberName from "./MemberName";

export default class Member {
    id: MemberId;
    name: MemberName;
    teamId: TeamId;

    constructor(id: MemberId, name: MemberName, teamId: TeamId) {
        this.id = id;
        this.name = name;
        this.teamId = teamId;
    }
}