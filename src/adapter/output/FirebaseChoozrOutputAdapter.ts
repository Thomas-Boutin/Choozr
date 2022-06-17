import Choozr from "../../domain/Choozr";
import ChoozrId from "../../domain/ChoozrId";
import ChoozrName from "../../domain/ChoozrName";
import type LoginParameters from "../../domain/LoginParameters";
import type CreateChoozrPort from "../../port/output/CreateChoozrPort";
import type GetChoozrsPort from "../../port/output/GetChoozrsPort";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, query, limit, getDocs, QueryDocumentSnapshot, addDoc } from "firebase/firestore";
import { app } from "./FirebaseInitializer";

export default class FirebaseChoozrOutputAdapter implements CreateChoozrPort, GetChoozrsPort {
    async getChoozrsWith(loginParameters: LoginParameters): Promise<Choozr[]> {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, loginParameters.apiKey, loginParameters.appId);
        const db = getFirestore(app);

        const first = query(collection(db, "Choozr"), limit(50));
        const documentSnapshots = await getDocs(first);

        return documentSnapshots.docs.map(this.snapshotsToChoozr);
    }

    async createChoozrWith(choozrName: ChoozrName, loginParameters: LoginParameters): Promise<Choozr> {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, loginParameters.apiKey, loginParameters.appId);
        const db = getFirestore(app);

        const docRef = await addDoc(collection(db, "Choozr"), {
            name: choozrName.value,
        });

        return new Choozr(
            new ChoozrId(docRef.id),
            choozrName
        );
    }

    private snapshotsToChoozr = (record: QueryDocumentSnapshot): Choozr => {
        return new Choozr(
            new ChoozrId(record.id),
            new ChoozrName(record.get("name") as string),
        );
    };
}

