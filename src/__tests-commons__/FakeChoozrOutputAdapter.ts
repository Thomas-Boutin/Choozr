import Choozr from "../domain/Choozr";
import ChoozrId from "../domain/ChoozrId";
import type ChoozrName from "../domain/ChoozrName";
import type LoginParameters from "../domain/LoginParameters";
import type CreateChoozrPort from "../port/output/CreateChoozrPort";
import type GetChoozrsPort from "../port/output/GetChoozrsPort";

export default class FakeChoozrOutputAdapter implements CreateChoozrPort, GetChoozrsPort {
    private initialChoozrNumberId: number;
    private choozrs: Choozr[];

    constructor(initialChoozrNumberId: number = 0, choozrs: Choozr[] = []) {
        this.initialChoozrNumberId = initialChoozrNumberId;
        this.choozrs = choozrs;
    }

    getChoozrsWith(_loginParameters: LoginParameters): Promise<Choozr[]> {
        return Promise.resolve(this.choozrs);
    }

    createChoozrWith(choozrName: ChoozrName, _loginParameters: LoginParameters): Promise<Choozr> {
        const choozr = new Choozr(
            new ChoozrId(this.initialChoozrNumberId.toString()),
            choozrName
        );
        this.choozrs.push(choozr);
        this.initialChoozrNumberId++;

        return Promise.resolve(choozr);
    }
}
