import InMemoryLoginParametersOutputAdapter from "../adapter/output/InMemoryLoginParametersOutputAdapter";
import LoginParameters from "../domain/LoginParameters";
import ChoozrId from "../domain/ChoozrId";
import type GenerateJoinChoozrURLUseCase from "../port/input/GenerateJoinChoozrURLUseCase";
import ChoozrService from "../port/ChoozrService";
import FakeChoozrOutputAdapter from "../__tests-commons__/FakeChoozrOutputAdapter";
import JoinChoozrURL from "../domain/JoinChoozrURL";
import FakeTeamOutputAdapter from "../__tests-commons__/FakeTeamOutputAdapter";

describe("generate an URL to join a choozr", () => {

    it("should generate an URL which contains the choozr id", async () => {
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        const loginParameters = new LoginParameters("appId", "apiKey");
        inMemoryLoginParametersOutputAdapter.store(loginParameters);
        const fakeChoozrOutputAdapter = new FakeChoozrOutputAdapter(0);
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter();
        const generateJoinChoozrURLUseCase: GenerateJoinChoozrURLUseCase = new ChoozrService(
            fakeChoozrOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeChoozrOutputAdapter,
            fakeTeamOutputAdapter,
        );

        const url = await generateJoinChoozrURLUseCase.generateJoinChoozrURLWith(new ChoozrId("choozrId"));

        expect(url).toEqual(
            new JoinChoozrURL(
                "https://thomas-boutin.github.io/Choozr/#/choozrs/choozrId/join?appId=appId&apiKey=apiKey"
            )
        );
    });

    it("should generate an URL which contains the api key and the app id", async () => {
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        const loginParameters = new LoginParameters("appId2", "apiKey");
        inMemoryLoginParametersOutputAdapter.store(loginParameters);
        const fakeChoozrOutputAdapter = new FakeChoozrOutputAdapter(0);
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter();
        const generateJoinChoozrURLUseCase: GenerateJoinChoozrURLUseCase = new ChoozrService(
            fakeChoozrOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeChoozrOutputAdapter,
            fakeTeamOutputAdapter,
        );

        const url = await generateJoinChoozrURLUseCase.generateJoinChoozrURLWith(new ChoozrId("choozrId"));

        expect(url).toEqual(
            new JoinChoozrURL(
                "https://thomas-boutin.github.io/Choozr/#/choozrs/choozrId/join?appId=appId2&apiKey=apiKey"
            )
        );
    });

    it("should generate an URL which contains the app id", async () => {
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        const loginParameters = new LoginParameters("appId", "apiKey2");
        inMemoryLoginParametersOutputAdapter.store(loginParameters);
        const fakeChoozrOutputAdapter = new FakeChoozrOutputAdapter(0);
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter();
        const generateJoinChoozrURLUseCase: GenerateJoinChoozrURLUseCase = new ChoozrService(
            fakeChoozrOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeChoozrOutputAdapter,
            fakeTeamOutputAdapter,
        );

        const url = await generateJoinChoozrURLUseCase.generateJoinChoozrURLWith(new ChoozrId("choozrId"));

        expect(url).toEqual(
            new JoinChoozrURL(
                "https://thomas-boutin.github.io/Choozr/#/choozrs/choozrId/join?appId=appId&apiKey=apiKey2"
            )
        );
    });
});