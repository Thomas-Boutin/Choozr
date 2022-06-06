import type ChoozrId from "../../domain/ChoozrId";
import type Member from "../../domain/Member";
import type MemberName from "../../domain/MemberName";

export default interface JoinChoozrUseCase {
    createMemberWith(choozrId: ChoozrId, memberName: MemberName): Promise<Member>;
}