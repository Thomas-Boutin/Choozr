import type LoginParameters from "../../domain/LoginParameters";
import type TeamId from "../../domain/TeamId";
import type TeamDetails from "../../domain/TeamDetails";

export default interface GetTeamDetailsPort {
    getTeamDetailsWith(teamId: TeamId, loginParameters: LoginParameters): Promise<TeamDetails>;
}