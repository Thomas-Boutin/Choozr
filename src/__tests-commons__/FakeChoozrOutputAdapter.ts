import Choozr from "../domain/Choozr";
import ChoozrId from "../domain/ChoozrId";
import type ChoozrName from "../domain/ChoozrName";
import type CreateChoozrPort from "../port/output/CreateChoozrPort";

export default class FakeChoozrOutputAdapter implements CreateChoozrPort {
    private initialChoozrNumberId: number;

    constructor(initialChoozrNumberId: number) {
        this.initialChoozrNumberId = initialChoozrNumberId;
    }

    createChoozrWith(choozrName: ChoozrName): Choozr {
        const choozr = new Choozr(
            new ChoozrId(this.initialChoozrNumberId.toString()),
            choozrName
        )
        this.initialChoozrNumberId++

        return choozr;
    }
}