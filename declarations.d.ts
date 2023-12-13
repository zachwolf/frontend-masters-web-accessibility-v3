// Adds support for the inert attribute to React and JSX. Taken from the following issue:
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/39289#issue-509909553

declare module 'react' {
	interface DOMAttributes<T> {
		inert?: '' | undefined;
	}
}

declare global {
	namespace JSX {
		interface IntrinsicAttributes {
			inert?: '' | undefined;
		}
	}
}

export {};
