import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { MyGrammar } from './MyGrammar';

let lexer = new MyGrammar(new ANTLRInputStream("a"));
let tokens = new CommonTokenStream(lexer);
tokens.fill();

for (let token of tokens.getTokens()) {
	console.log(String(token));
}
