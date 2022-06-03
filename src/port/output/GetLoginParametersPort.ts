import type LoginParameters from "../../domain/LoginParameters";

export default interface GetLoginParametersPort {
    getLoginParameters(): LoginParameters;
}
