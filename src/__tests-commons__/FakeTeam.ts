import type ChoozrId from "../domain/ChoozrId";
import type TeamId from "../domain/TeamId";
import type TeamName from "../domain/TeamName";

export default class FakeTeam {
    id: TeamId;
    name: TeamName;
    choozrId: ChoozrId;
    membersCount: number;

    constructor(id: TeamId, name: TeamName, choozrId: ChoozrId, membersCount: number) {
        this.id = id;
        this.name = name;
        this.choozrId = choozrId;
        this.membersCount = membersCount;
    }
}