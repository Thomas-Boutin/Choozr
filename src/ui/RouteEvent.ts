import type ChoozrId from "../domain/ChoozrId";
import type TeamId from "../domain/TeamId";

export type RouteEvent = "routeEvent";

export interface RouteEventDetail { };

export const Logged = {} as RouteEventDetail;

export class ChoozrCreated implements RouteEventDetail {
    __choozrCreatedBrand: any;
    readonly choozrId: ChoozrId;

    constructor(choozrId: ChoozrId) {
        this.choozrId = choozrId;
    }
};

export class ChoozrClicked implements RouteEventDetail {
    __choozrClickedBrand: any;
    readonly choozrId: ChoozrId;

    constructor(choozrId: ChoozrId) {
        this.choozrId = choozrId;
    }
};

export class TeamClicked implements RouteEventDetail {
    __teamClickedBrand: any;
    readonly teamId: TeamId;

    constructor(teamId: TeamId) {
        this.teamId = teamId;
    }
};

export class TeamJoined implements RouteEventDetail {
    __teamJoinedBrand: any;
    readonly teamId: TeamId;

    constructor(teamId: TeamId) {
        this.teamId = teamId;
    }
};