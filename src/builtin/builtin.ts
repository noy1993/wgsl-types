import { tokens } from './info/tokens';
import { accessMode, addressSpace, keywords } from './info/keywords';
import { functions } from './info/functions';
import { structs } from './info/structs';
import { IFunction, IKeyWord, IStruct, IToken, IValue } from './info/interfaces';
import { values } from './info/values';

export class Builtin {
    public readonly functions: IFunction[];
    public readonly keywords: IKeyWord[];
    public readonly enum: IKeyWord[];
    public readonly structs: IStruct[];
    public readonly tokens: IToken[];
    public readonly values: IValue[];
    constructor() {
        this.functions = functions;
        this.keywords = keywords;
        this.structs = structs;
        this.tokens = tokens;
        this.values = values;
        this.enum = accessMode;
        this.enum.push(...addressSpace);
    }
}