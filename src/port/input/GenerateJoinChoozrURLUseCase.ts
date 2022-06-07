import type ChoozrId from "../../domain/ChoozrId";
import type JoinChoozrURL from "../../domain/JoinChoozrURL";

export default interface GenerateJoinChoozrURLUseCase {
    generateJoinChoozrURLWith(choozrId: ChoozrId): Promise<JoinChoozrURL>;
}