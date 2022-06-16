import InMemoryLoginParametersOutputAdapter from "../adapter/output/InMemoryLoginParametersOutputAdapter";
import Choozr from "../domain/Choozr";
import ChoozrId from "../domain/ChoozrId";
import ChoozrName from "../domain/ChoozrName";
import LoginParameters from "../domain/LoginParameters";
import Team from "../domain/Team";
import TeamId from "../domain/TeamId";
import TeamName from "../domain/TeamName";
import ChoozrService from "../port/ChoozrService";
import type GetChoozrsUseCase from "../port/input/GetChoozrsUseCase";
import type GetChoozrTeamsUseCase from "../port/input/GetChoozrTeamsUseCase";
import FakeChoozrOutputAdapter from "../__tests-commons__/FakeChoozrOutputAdapter";
import FakeTeam from "../__tests-commons__/FakeTeam";
import FakeTeamOutputAdapter from "../__tests-commons__/FakeTeamOutputAdapter";

describe("get choozr teams", () => {

    it("should get choozr teams", async () => {
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter(
            0,
            [],
            [
                new FakeTeam(
                    new TeamId("0"),
                    new TeamName("anniversaire"),
                    new ChoozrId("0"),
                    0
                ),
                new FakeTeam(
                    new TeamId("1"),
                    new TeamName("cake"),
                    new ChoozrId("3"),
                    0
                )
            ]
        );
        const fakeChoozrOutputAdapter = new FakeChoozrOutputAdapter();
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        inMemoryLoginParametersOutputAdapter.store(new LoginParameters("appId", "apiKey"));
        const getChoozrTeamsUseCase: GetChoozrTeamsUseCase = new ChoozrService(
            fakeChoozrOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeChoozrOutputAdapter,
            fakeTeamOutputAdapter,
        );

        const choozrTeams = await getChoozrTeamsUseCase.getChoozrTeamsWith(new ChoozrId("0"));

        expect(choozrTeams).toEqual(
            [
                new Team(
                    new TeamId("0"),
                    new TeamName("anniversaire"),
                    new ChoozrId("0"),
                )
            ]
        );
    });

    it("can't get choozr teams if no login parameters are stored", async () => {
        const fakeChoozrOutputAdapter = new FakeChoozrOutputAdapter(0);
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter();
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        const getChoozrTeamsUseCase: GetChoozrTeamsUseCase = new ChoozrService(
            fakeChoozrOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeChoozrOutputAdapter,
            fakeTeamOutputAdapter,
        );

       await expect(getChoozrTeamsUseCase.getChoozrTeamsWith(new ChoozrId("0"))).rejects.toThrow();
    });
});