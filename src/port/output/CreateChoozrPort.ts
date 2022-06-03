import type Choozr from "../../domain/Choozr";
import type ChoozrName from "../../domain/ChoozrName";
import type LoginParameters from "../../domain/LoginParameters";

export default interface CreateChoozrPort {
    createChoozrWith(choozrName: ChoozrName, loginParameters: LoginParameters): Promise<Choozr>;
}