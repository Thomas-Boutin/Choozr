import type Choozr from "../../domain/Choozr";
import type ChoozrName from "../../domain/ChoozrName";

export default interface CreateChoozrUseCase {
    createChoozrWith(choozrName: ChoozrName): Choozr;
}