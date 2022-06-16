import InMemoryLoginParametersOutputAdapter from "../adapter/output/InMemoryLoginParametersOutputAdapter";
import Team from "../domain/Team";
import TeamId from "../domain/TeamId";
import TeamName from "../domain/TeamName";
import LoginParameters from "../domain/LoginParameters";
import TeamService from "../port/TeamService";
import FakeTeamOutputAdapter from "../__tests-commons__/FakeTeamOutputAdapter";
import ChoozrId from "../domain/ChoozrId";
import type GetTeamDetailsUseCase from "../port/input/GetTeamDetailsUseCase";
import TeamDetails from "../domain/TeamDetails";
import MemberName from "../domain/MemberName";

describe("get Team details", () => {

    it("should get Team details with a given id", async () => {
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter(
            0,
            [
                new TeamDetails(
                    new TeamId("teamId"),
                    new TeamName("anniversaire"),
                    [new MemberName("memberName")]
                )
            ]
        );
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        inMemoryLoginParametersOutputAdapter.store(new LoginParameters("appId", "apiKey"));
        const getTeamDetailsUseCase: GetTeamDetailsUseCase = new TeamService(
            fakeTeamOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeTeamOutputAdapter,
        );

        const teamDetails = await getTeamDetailsUseCase.getTeamDetailsBy(new TeamId("teamId"));

        expect(teamDetails).toEqual(
            new TeamDetails(
                new TeamId("teamId"),
                new TeamName("anniversaire"),
                [new MemberName("memberName")]
            )
        );
    });

    it("can't get Team details if no login parameters are stored", async () => {
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter(0);
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        const getTeamDetailsUseCase: GetTeamDetailsUseCase = new TeamService(
            fakeTeamOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeTeamOutputAdapter,
        );

        await expect(getTeamDetailsUseCase.getTeamDetailsBy(new TeamId("teamId"))).rejects.toThrow();
    });
});