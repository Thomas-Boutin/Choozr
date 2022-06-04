import type ChoozrId from "../domain/ChoozrId";
import type TeamId from "../domain/TeamId";

export type RouteEvent = "routeEvent";

export interface RouteEventDetail { };

export const Logged = {} as RouteEventDetail;

export class ChoozrCreated implements RouteEventDetail {
    readonly choozrId: ChoozrId;

    constructor(choozrId: ChoozrId) {
        this.choozrId = choozrId;
    }
};

export class TeamCreated implements RouteEventDetail {
    readonly teamId: TeamId;

    constructor(teamId: TeamId) {
        this.teamId = teamId;
    }
};