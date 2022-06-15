import type Choozr from "../../domain/Choozr";

export default interface GetChoozrsUseCase {
    getChoozrs(): Promise<Choozr[]>;
}