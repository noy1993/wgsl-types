import { WgslTypes } from './wgsl-types';
import * as vscode from 'vscode';

const editor = new WgslTypes();

class WgslCompletionItemProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		if (context.triggerCharacter === undefined) {
			return editor.completion;
		}
		else if (context.triggerCharacter === '@') {
			console.log("token");
			return editor.tokens;
		}
		return;
	}

	resolveCompletionItem?(item: vscode.CompletionItem, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem> {
		return;
	}
}

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "wgsl-types" is now active!');

	let provider = vscode.languages.registerCompletionItemProvider('wgsl', new WgslCompletionItemProvider(), "", "@");
	context.subscriptions.push(provider);
}

// This method is called when your extension is deactivated
export function deactivate() {

}
