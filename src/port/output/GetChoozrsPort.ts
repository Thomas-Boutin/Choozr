import type Choozr from "../../domain/Choozr";
import type LoginParameters from "../../domain/LoginParameters";

export default interface GetChoozrsPort {
    getChoozrsWith(loginParameters: LoginParameters): Promise<Choozr[]>;
}