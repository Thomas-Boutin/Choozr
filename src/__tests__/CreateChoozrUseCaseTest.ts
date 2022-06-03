import Choozr from "../domain/Choozr";
import ChoozrId from "../domain/ChoozrId";
import ChoozrName from "../domain/ChoozrName";
import ChoozrService from "../port/ChoozrService";
import type CreateChoozrUseCase from "../port/input/CreateChoozrUseCase";
import FakeChoozrOutputAdapter from "../__tests-commons__/FakeChoozrOutputAdapter";

describe("create choozr", () => {

    it("should create a choozr with a given name", () => {
        const fakeChoozrOutputAdapter = new FakeChoozrOutputAdapter(0)
        const createChoozrUseCase: CreateChoozrUseCase = new ChoozrService(
            fakeChoozrOutputAdapter,
        )
        const choozr = createChoozrUseCase.createChoozrWith(new ChoozrName("anniversaire"))

        expect(choozr).toEqual(
            new Choozr(
                new ChoozrId("0"),
                new ChoozrName("anniversaire")
            )
        );
    });
});