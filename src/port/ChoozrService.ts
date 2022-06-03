import type Choozr from '../domain/Choozr';
import type ChoozrName from '../domain/ChoozrName';
import type CreateChoozrUseCase from './input/CreateChoozrUseCase';
import type CreateChoozrPort from './output/CreateChoozrPort';

export default class ChoozrService implements CreateChoozrUseCase {
    private createChoozrPort: CreateChoozrPort;

    constructor(
        createChoozrPort: CreateChoozrPort
    ) {
        this.createChoozrPort = createChoozrPort;
    }

    createChoozrWith(choozrName: ChoozrName): Choozr {
        return this.createChoozrPort.createChoozrWith(choozrName);
    }
}