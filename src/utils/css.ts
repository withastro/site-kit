type LowercaseCharacter =
	| 'a'
	| 'b'
	| 'c'
	| 'd'
	| 'e'
	| 'f'
	| 'g'
	| 'h'
	| 'i'
	| 'j'
	| 'k'
	| 'l'
	| 'm'
	| 'n'
	| 'o'
	| 'p'
	| 'q'
	| 'r'
	| 's'
	| 't'
	| 'u'
	| 'v'
	| 'w'
	| 'x'
	| 'y'
	| 'z'
type AllCharacter = LowercaseCharacter | Uppercase<LowercaseCharacter>
type NonEmptyString = `${AllCharacter}${string}`

type CSSCustomProperties = `var(--${NonEmptyString})` | `--${NonEmptyString}`

function isCustomPropertyShorthand(value: string): value is `--${NonEmptyString}` {
	return /^--\D{1,100}/.test(value)
}

type LengthUnit =
	| 'vmin'
	| 'vmax'
	| 'vh'
	| 'vw'
	| '%'
	| 'ch'
	| 'ex'
	| 'em'
	| 'rem'
	| 'in'
	| 'cm'
	| 'mm'
	| 'pt'
	| 'pc'
	| 'px'

export type CSSLength = `${number}${LengthUnit}` | CSSCustomProperties

export function isCssLength(string_: string): string_ is CSSLength {
	if (typeof string_ !== 'string') {
		return false
	}

	return [
		/^\d{0,10000}\.?\d{1,10000}(vmin|vmax|vh|vw|%|ch|ex|em|rem|in|cm|mm|pt|pc|px)$/,
		/^var\(--\S{1,100}\)$/,
		/^--\S{1,100}/,
	].some((regex) => regex.test(string_))
}

export function parseCssLength(value: string | number | undefined | null): CSSLength | undefined {
	if (!value) {
		return undefined
	}

	return typeof value === 'number'
		? value >= 0
			? `${value}px`
			: undefined
		: isCssLength(value)
		? isCustomPropertyShorthand(value)
			? `var(${value})`
			: value
		: undefined
}
