import InMemoryLoginParametersOutputAdapter from "../adapter/output/InMemoryLoginParametersOutputAdapter";
import TeamId from "../domain/TeamId";
import LoginParameters from "../domain/LoginParameters";
import ChoozrId from "../domain/ChoozrId";
import FakeMemberOutputAdapter from "../__tests-commons__/FakeMemberOutputAdapter";
import type JoinChoozrUseCase from "../port/input/JoinChoozrUseCase";
import MemberService from "../port/MemberService";
import Member from "../domain/Member";
import MemberId from "../domain/MemberId";
import MemberName from "../domain/MemberName";
import FakeTeamOutputAdapter from "../__tests-commons__/FakeTeamOutputAdapter";
import TeamName from "../domain/TeamName";

describe("join Choozr", () => {

    it("should join the team with the lowest number of members", async () => {
        const fakeMemberOutputAdapter = new FakeMemberOutputAdapter(0);
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter(0);
        const loginParameters = new LoginParameters("appId", "apiKey");
        inMemoryLoginParametersOutputAdapter.store(loginParameters);
        await fakeTeamOutputAdapter.createTeamWith(new ChoozrId("0"), new TeamName("team"), loginParameters);
        await fakeTeamOutputAdapter.createTeamWith(new ChoozrId("0"), new TeamName("team2"), loginParameters);
        const joinTeamUseCase: JoinChoozrUseCase = new MemberService(
            fakeMemberOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeTeamOutputAdapter
        );

        const member = await joinTeamUseCase.createMemberWith(new ChoozrId("choozrId"), new MemberName("anniversaire"));

        expect(member).toEqual(
            new Member(
                new MemberId("0"),
                new MemberName("anniversaire"),
                new TeamId("0")
            )
        );
    });

    it("can't join a Team if no login parameters are stored", async () => {
        const fakeMemberOutputAdapter = new FakeMemberOutputAdapter(0);
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter(0);
        const joinTeamUseCase: JoinChoozrUseCase = new MemberService(
            fakeMemberOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeTeamOutputAdapter
        );

        await expect(joinTeamUseCase.createMemberWith(new ChoozrId("teamId"), new MemberName("anniversaire"))).rejects.toThrow();
    });
});