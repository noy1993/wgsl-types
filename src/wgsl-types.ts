import { Builtin } from "./builtin/builtin";
import * as vscode from 'vscode';

export class WgslTypes {
    public readonly builtin = new Builtin();
    public readonly completion: vscode.CompletionItem[] = [];
    public readonly tokens: vscode.CompletionItem[] = [];
    constructor() {
        // keyword
        let keywordCompletion = this.builtin.keywords.map(k => new vscode.CompletionItem(k.name, vscode.CompletionItemKind.Keyword));
        this.completion.push(...keywordCompletion);

        // struct
        let structCompletion = this.builtin.structs.map(s => {
            let item = new vscode.CompletionItem(
                { label: s.name, description: s.description },
                vscode.CompletionItemKind.Struct);
            if (s.snippet !== undefined) {
                item.insertText = new vscode.SnippetString(`${s.name}${s.snippet}`);
            }
            return item;
        });
        this.completion.push(...structCompletion);

        // function
        // let functionCompletion = this.builtin.functions.map(f => {
        //     let item = new vscode.CompletionItem(
        //         { label: f.name, detail: f.overload },
        //         vscode.CompletionItemKind.Function,
        //     );
        //     item.detail = f.name;
        //     item.insertText = new vscode.SnippetString(`${f.name}($1)$2`);

        //     if (f.parameter !== undefined && f.description !== undefined) {
        //         item.documentation = new vscode.MarkdownString(`${f.parameter}\n\n ${f.description}`);
        //     }
        //     else if (f.description !== undefined) {
        //         item.documentation = new vscode.MarkdownString(f.description);
        //     }
        //     else if (f.parameter !== undefined) {
        //         item.documentation = new vscode.MarkdownString(f.parameter);
        //     }
        //     item.commitCharacters = ["dsadas"];

        //     return item;
        // });
        // this.completion.push(...functionCompletion);

        // value
        let valueCompletion = this.builtin.values.map(f => new vscode.CompletionItem({ label: f.name, description: f.stage + (f.input ? '(input)' : '(output)'), detail: ':' + f.type }, vscode.CompletionItemKind.Field));
        this.completion.push(...valueCompletion);

        // enum
        let enumCompletion = this.builtin.enum.map(f => new vscode.CompletionItem(f.name, vscode.CompletionItemKind.Enum));
        this.completion.push(...enumCompletion);

        // tokens
        let tokenCompletion = this.builtin.tokens.map(t => {
            let item = new vscode.CompletionItem(t.name, vscode.CompletionItemKind.Method);
            if (t.snippet !== undefined) {
                item.insertText = new vscode.SnippetString(`${t.name}${t.snippet}`);
            }
            return item;
        });
        this.tokens.push(...tokenCompletion);
    }
}