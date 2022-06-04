import type ChoozrId from "../domain/ChoozrId";

export type RouteEvent = "routeEvent";

export interface RouteEventDetail {};

export const Logged = {} as RouteEventDetail;

export class ChoozrCreated implements RouteEventDetail {
    readonly choozrId: ChoozrId;

    constructor(choozrId: ChoozrId) {
        this.choozrId = choozrId;
    }
} ;