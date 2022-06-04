import Airtable, { FieldSet } from "airtable";
import Member from "../../domain/Member";
import MemberId from "../../domain/MemberId";
import MemberName from "../../domain/MemberName";
import type LoginParameters from "../../domain/LoginParameters";
import type JoinTeamPort from "../../port/output/JoinTeamPort";
import TeamId from "../../domain/TeamId";
import type Record from "airtable/lib/record";

export default class RESTMemberOutputAdapter implements JoinTeamPort {
    async createMemberWith(teamId: TeamId, memberName: MemberName, loginParameters: LoginParameters): Promise<Member> {
        const airtable = new Airtable({ apiKey: loginParameters.apiKey }).base(loginParameters.appId);
        const records = await airtable("Member").create([
            {
                "fields": {
                    "name": memberName.value,
                    "Team": [
                        teamId.value
                    ]
                }
            },
        ]);

        return records.map(this.recordToMember)[0];
    }

    private recordToMember = (record: Record<FieldSet>): Member => {
        return new Member(
            new MemberId(record.id),
            new MemberName(record.get("name") as string),
            new TeamId(record.get("id (from Team)") as string)
        );
    };
}