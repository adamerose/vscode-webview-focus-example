import * as vscode from 'vscode';
import { CatScratchEditorProvider } from './catScratchEditor';
import { PawDrawEditorProvider } from './pawDrawEditor';

export const extensionState: {
	activeDocument: vscode.TextDocument | undefined;
	activeWebviewPanel: vscode.WebviewPanel | undefined;
} = {
	// Need to manually track the CustomTextEditor's document
	// https://github.com/microsoft/vscode/issues/102110#issuecomment-656868579
	activeDocument: undefined,
	activeWebviewPanel: undefined,
};

export function activate(context: vscode.ExtensionContext) {
	// Register our custom editor providers
	context.subscriptions.push(CatScratchEditorProvider.register(context));
	context.subscriptions.push(PawDrawEditorProvider.register(context));
}
