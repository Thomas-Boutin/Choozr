import InMemoryLoginParametersOutputAdapter from "../adapter/output/InMemoryLoginParametersOutputAdapter";
import Choozr from "../domain/Choozr";
import ChoozrId from "../domain/ChoozrId";
import ChoozrName from "../domain/ChoozrName";
import LoginParameters from "../domain/LoginParameters";
import ChoozrService from "../port/ChoozrService";
import type CreateChoozrUseCase from "../port/input/CreateChoozrUseCase";
import type GetChoozrsUseCase from "../port/input/GetChoozrsUseCase";
import FakeChoozrOutputAdapter from "../__tests-commons__/FakeChoozrOutputAdapter";

describe("get choozrs", () => {

    it("should get choozrs", async () => {
        const initialChoozrs: Choozr[] = [
            new Choozr(
                new ChoozrId("0"),
                new ChoozrName("anniversaire")
            )
        ];
        const fakeChoozrOutputAdapter = new FakeChoozrOutputAdapter(
            0,
            initialChoozrs
        );
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        inMemoryLoginParametersOutputAdapter.store(new LoginParameters("appId", "apiKey"));
        const getChoozrsUseCase: GetChoozrsUseCase = new ChoozrService(
            fakeChoozrOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeChoozrOutputAdapter
        );

        const choozrs = await getChoozrsUseCase.getChoozrs();

        expect(choozrs).toEqual(
            [
                new Choozr(
                    new ChoozrId("0"),
                    new ChoozrName("anniversaire")
                )
            ]
        );
    });

    it("can't get choozrs if no login parameters are stored", async () => {
        const fakeChoozrOutputAdapter = new FakeChoozrOutputAdapter(0);
        const inMemoryLoginParametersOutputAdapter = new InMemoryLoginParametersOutputAdapter();
        const getChoozrsUseCase: GetChoozrsUseCase = new ChoozrService(
            fakeChoozrOutputAdapter,
            inMemoryLoginParametersOutputAdapter,
            fakeChoozrOutputAdapter
        );

       await expect(getChoozrsUseCase.getChoozrs()).rejects.toThrow();
    });
});