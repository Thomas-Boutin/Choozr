import type Choozr from "../../domain/Choozr";
import type ChoozrName from "../../domain/ChoozrName";
import type LoginParameters from "../../domain/LoginParameters";
import type CreateChoozrPort from "../../port/output/CreateChoozrPort";

export default class RESTChoozrOutputAdapter implements CreateChoozrPort {
    createChoozrWith(choozrName: ChoozrName, loginParameters: LoginParameters): Choozr {
        throw new Error("Method not implemented.");
    }
}