// Generated from MyGrammar.g4 by ANTLR 4.5.4-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

export class MyGrammar extends Lexer {
	public static readonly A=1;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"A"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'a'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "A"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammar._LITERAL_NAMES, MyGrammar._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public getVocabulary(): Vocabulary {
		return MyGrammar.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MyGrammar._ATN, this);
	}

	@Override
	public getGrammarFileName(): string { return "MyGrammar.g4"; }

	@Override
	public getRuleNames(): string[] { return MyGrammar.ruleNames; }

	@Override
	public getSerializedATN(): string { return MyGrammar._serializedATN; }

	@Override
	public getModeNames(): string[] { return MyGrammar.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x03\x07\b\x01"+
		"\x04\x02\t\x02\x03\x02\x03\x02\x02\x02\x02\x03\x03\x02\x03\x03\x02\x02"+
		"\x06\x02\x03\x03\x02\x02\x02\x03\x05\x03\x02\x02\x02\x05\x06\x07c\x02"+
		"\x02\x06\x04\x03\x02\x02\x02\x03\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammar.__ATN) {
			MyGrammar.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammar._serializedATN));
		}

		return MyGrammar.__ATN;
	}

}