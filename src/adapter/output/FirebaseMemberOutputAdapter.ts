import Member from "../../domain/Member";
import MemberId from "../../domain/MemberId";
import type MemberName from "../../domain/MemberName";
import type LoginParameters from "../../domain/LoginParameters";
import type JoinTeamPort from "../../port/output/JoinTeamPort";
import type TeamId from "../../domain/TeamId";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, runTransaction } from "firebase/firestore";
import { app } from "./FirebaseInitializer";

export default class FirebaseMemberOutputAdapter implements JoinTeamPort {
    async createMemberWith(teamId: TeamId, memberName: MemberName, loginParameters: LoginParameters): Promise<Member> {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, loginParameters.apiKey, loginParameters.appId);
        const db = getFirestore(app);
        const teamRef = doc(db, "Team", teamId.value);
        const memberRef = doc(db, "Member");

        await runTransaction(db, async (transaction) => {
            const teamfDoc = await transaction.get(teamRef);
            if (!teamfDoc.exists()) {
                throw new Error("Document does not exist!");
            }

            const newMembersCount = (teamfDoc.data().membersCount as number) + 1;
            transaction.update(teamRef, { membersCount: newMembersCount });
            transaction.set(memberRef, {
                name: memberName.value,
                teamId: teamId.value
            });
        });

        return new Member(
            new MemberId(memberRef.id),
            memberName,
            teamId
        );
    }
}