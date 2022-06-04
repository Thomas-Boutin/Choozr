import InMemoryLoginParametersOutputAdapter from "../adapter/output/InMemoryLoginParametersOutputAdapter";
import Team from "../domain/Team";
import TeamId from "../domain/TeamId";
import TeamName from "../domain/TeamName";
import LoginParameters from "../domain/LoginParameters";
import TeamService from "../port/TeamService";
import type CreateTeamUseCase from "../port/input/CreateTeamUseCase";
import FakeTeamOutputAdapter from "../__tests-commons__/FakeTeamOutputAdapter";
import ChoozrId from "../domain/ChoozrId";

describe("create Team", () => {

    it("should create a Team with a given name", async () => {
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter(0);
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        inMemoryLoginParametersOutputAdapter.store(new LoginParameters("appId", "apiKey"));
        const createTeamUseCase: CreateTeamUseCase = new TeamService(
            fakeTeamOutputAdapter,
            inMemoryLoginParametersOutputAdapter
        );

        const team = await createTeamUseCase.createTeamWith(new ChoozrId("choozrId"), new TeamName("anniversaire"));

        expect(team).toEqual(
            new Team(
                new TeamId("0"),
                new TeamName("anniversaire"),
                new ChoozrId("choozrId")
            )
        );
    });

    it("can't create a Team if no login parameters are stored", async () => {
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter(0);
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        const createTeamUseCase: CreateTeamUseCase = new TeamService(
            fakeTeamOutputAdapter,
            inMemoryLoginParametersOutputAdapter
        );

       await expect(createTeamUseCase.createTeamWith(new ChoozrId("choozrId"), new TeamName("anniversaire"))).rejects.toThrow();
    });
});