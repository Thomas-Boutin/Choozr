import type ChoozrId from "./ChoozrId";
import type TeamId from "./TeamId";
import type TeamName from "./TeamName";

export default class Team {
    id: TeamId;
    name: TeamName;
    choozrId: ChoozrId;

    constructor(id: TeamId, name: TeamName, choozrId: ChoozrId) {
        this.id = id;
        this.name = name;
        this.choozrId = choozrId;
    }
}