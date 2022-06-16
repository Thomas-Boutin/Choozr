import InMemoryLoginParametersOutputAdapter from "../adapter/output/InMemoryLoginParametersOutputAdapter";
import Choozr from "../domain/Choozr";
import ChoozrId from "../domain/ChoozrId";
import ChoozrName from "../domain/ChoozrName";
import LoginParameters from "../domain/LoginParameters";
import ChoozrService from "../port/ChoozrService";
import type CreateChoozrUseCase from "../port/input/CreateChoozrUseCase";
import FakeChoozrOutputAdapter from "../__tests-commons__/FakeChoozrOutputAdapter";
import FakeTeamOutputAdapter from "../__tests-commons__/FakeTeamOutputAdapter";

describe("create choozr", () => {

    it("should create a choozr with a given name", async () => {
        const fakeChoozrOutputAdapter = new FakeChoozrOutputAdapter();
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        inMemoryLoginParametersOutputAdapter.store(new LoginParameters("appId", "apiKey"));
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter();
        const createChoozrUseCase: CreateChoozrUseCase = new ChoozrService(
            fakeChoozrOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeChoozrOutputAdapter,
            fakeTeamOutputAdapter
        );

        const choozr = await createChoozrUseCase.createChoozrWith(new ChoozrName("anniversaire"));

        expect(choozr).toEqual(
            new Choozr(
                new ChoozrId("0"),
                new ChoozrName("anniversaire")
            )
        );
    });

    it("can't create a choozr if no login parameters are stored", async () => {
        const fakeChoozrOutputAdapter = new FakeChoozrOutputAdapter(0);
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        const fakeTeamOutputAdapter = new FakeTeamOutputAdapter();
        const createChoozrUseCase: CreateChoozrUseCase = new ChoozrService(
            fakeChoozrOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeChoozrOutputAdapter,
            fakeTeamOutputAdapter,
        );

       await expect(createChoozrUseCase.createChoozrWith(new ChoozrName("anniversaire"))).rejects.toThrow();
    });
});