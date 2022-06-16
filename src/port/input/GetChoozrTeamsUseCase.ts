import type ChoozrId from "../../domain/ChoozrId";
import type Team from "../../domain/Team";

export default interface GetChoozrTeamsUseCase {
    getChoozrTeamsWith(choozrId: ChoozrId): Promise<Team[]>;
}