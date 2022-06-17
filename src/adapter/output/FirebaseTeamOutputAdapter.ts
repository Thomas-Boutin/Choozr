import Team from "../../domain/Team";
import TeamId from "../../domain/TeamId";
import TeamName from "../../domain/TeamName";
import type LoginParameters from "../../domain/LoginParameters";
import type CreateTeamPort from "../../port/output/CreateTeamPort";
import ChoozrId from "../../domain/ChoozrId";
import type GetTeamsMembersCountPort from "../../port/output/GetTeamsMembersCountPort";
import TeamMembersCount from "../../domain/TeamMembersCount";
import type GetTeamDetailsPort from "../../port/output/GetTeamDetailsPort";
import TeamDetails from "../../domain/TeamDetails";
import MemberName from "../../domain/MemberName";
import type GetChoozrTeamsPort from "../../port/output/GetChoozrTeamsPort";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, query, limit, getDocs, QueryDocumentSnapshot, addDoc, where, getDoc, doc } from "firebase/firestore";
import { app } from "./FirebaseInitializer";


export default class FirebaseTeamOutputAdapter implements CreateTeamPort, GetTeamsMembersCountPort, GetTeamDetailsPort, GetChoozrTeamsPort {
    async getChoozrTeamsWith(choozrId: ChoozrId, loginParameters: LoginParameters): Promise<Team[]> {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, loginParameters.apiKey, loginParameters.appId);
        const db = getFirestore(app);

        const first = query(collection(db, "Team"), limit(50), where("choozrId", "==", choozrId.value));
        const documentSnapshots = await getDocs(first);

        return documentSnapshots.docs.map(this.snapshotToTeam);
    }

    async getTeamDetailsWith(teamId: TeamId, loginParameters: LoginParameters): Promise<TeamDetails> {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, loginParameters.apiKey, loginParameters.appId);
        const db = getFirestore(app);

        const teamSnapshot = await getDoc(doc(db, "Team", teamId.value));
        const teamName = new TeamName(teamSnapshot.get("name") as string);
        const firstMembers = query(collection(db, "Member"), limit(50), where("teamId", "==", teamId.value));
        const membersSnapshots = await getDocs(firstMembers);
        const membersNames = membersSnapshots.docs.map((member) => new MemberName(member.get("name") as string));

        return new TeamDetails(teamId, teamName, membersNames);
    }

    async getTeamsMembersCountFrom(choozrId: ChoozrId, loginParameters: LoginParameters): Promise<TeamMembersCount[]> {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, loginParameters.apiKey, loginParameters.appId);
        const db = getFirestore(app);

        const first = query(collection(db, "Team"), limit(50), where("choozrId", "==", choozrId.value));
        const documentSnapshots = await getDocs(first);

        return documentSnapshots.docs.map(this.snapshotToTeamMembersCount);
    }

    async createTeamWith(choozrId: ChoozrId, teamName: TeamName, loginParameters: LoginParameters): Promise<Team> {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, loginParameters.apiKey, loginParameters.appId);
        const db = getFirestore(app);

        const docRef = await addDoc(collection(db, "Team"), {
            name: teamName.value,
            choozrId: choozrId.value,
            membersCount: 0
        });

        return new Team(
            new TeamId(docRef.id),
            teamName,
            choozrId
        );
    }

    private snapshotToTeamMembersCount = (record: QueryDocumentSnapshot): TeamMembersCount => {
        return new TeamMembersCount(
            new TeamId(record.id),
            record.get("membersCount") as number
        );
    };

    private snapshotToTeam = (record: QueryDocumentSnapshot): Team => {
        return new Team(
            new TeamId(record.id),
            new TeamName(record.get("name") as string),
            new ChoozrId(record.get("choozrId") as string)
        );
    };
}