import { MarkdownString } from "vscode";
export interface IFunction {
    name: string;
    overload: string;
    parameter?: string;
    description?: string;
}

export interface IKeyWord {
    name: string;
}

export interface IStruct {
    name: string;
    snippet?: string;
    description?: string,
}

export interface IToken {
    name: string;
    snippet?: string;
}

export interface IValue {
    name: string,
    stage: 'vertex' | 'fragment' | 'compute';
    input: boolean;
    type: string;
}