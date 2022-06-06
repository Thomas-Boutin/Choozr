import type ChoozrId from "./ChoozrId";
import type Member from "./Member";
import type TeamName from "./TeamName";

export default class TeamDetails {
    name: TeamName;
    choozrId: ChoozrId;
    members: Member[];

    constructor(name: TeamName, choozrId: ChoozrId, members: Member[]) {
        this.name = name;
        this.choozrId = choozrId;
        this.members = members;
    }
}