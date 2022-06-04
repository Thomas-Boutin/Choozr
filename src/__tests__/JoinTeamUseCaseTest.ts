import InMemoryLoginParametersOutputAdapter from "../adapter/output/InMemoryLoginParametersOutputAdapter";
import TeamId from "../domain/TeamId";
import TeamName from "../domain/TeamName";
import LoginParameters from "../domain/LoginParameters";
import ChoozrId from "../domain/ChoozrId";
import FakeMemberOutputAdapter from "../__tests-commons__/FakeMemberOutputAdapter";
import type JoinTeamUseCase from "../port/input/JoinTeamUseCase";
import MemberService from "../port/MemberService";
import Member from "../domain/Member";
import MemberId from "../domain/MemberId";
import MemberName from "../domain/MemberName";

describe("join Team", () => {

    it("should join a Team with a given name", async () => {
        const fakeMemberOutputAdapter = new FakeMemberOutputAdapter(0);
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        inMemoryLoginParametersOutputAdapter.store(new LoginParameters("appId", "apiKey"));
        const joinTeamUseCase: JoinTeamUseCase = new MemberService(
            fakeMemberOutputAdapter,
            inMemoryLoginParametersOutputAdapter
        );

        const member = await joinTeamUseCase.createMemberWith(new ChoozrId("choozrId"), new TeamName("anniversaire"));

        expect(member).toEqual(
            new Member(
                new MemberId("0"),
                new MemberName("anniversaire"),
                new TeamId("choozrId")
            )
        );
    });

    it("can't join a Team if no login parameters are stored", async () => {
        const fakeMemberOutputAdapter = new FakeMemberOutputAdapter(0);
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        const joinTeamUseCase: JoinTeamUseCase = new MemberService(
            fakeMemberOutputAdapter,
            inMemoryLoginParametersOutputAdapter
        );

        await expect(joinTeamUseCase.createMemberWith(new TeamId("teamId"), new TeamName("anniversaire"))).rejects.toThrow();
    });
});