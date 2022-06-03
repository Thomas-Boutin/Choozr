import type ChoozrId from './ChoozrId';
import type ChoozrName from './ChoozrName';

export default class Choozr {
    id: ChoozrId;
    name: ChoozrName;

    constructor(id: ChoozrId, name: ChoozrName) {
        this.id = id;
        this.name = name;
    }
}