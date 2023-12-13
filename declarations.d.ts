// Adds support for the inert attribute to React and JSX. Taken from the following issue:
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/39289#issue-509909553

declare module 'react' {
	interface DOMAttributes<T> {
		/**
		 * Indicates that the browser will ignore this element and its descendants,
		 * preventing some interactions and hiding it from assistive technology.
		 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert
		 * @todo Remove this stub declaration after https://github.com/facebook/react/pull/24730 is merged.
		 */
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
