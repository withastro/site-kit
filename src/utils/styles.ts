export function joinStyles(...values: Array<string | undefined>) {
	return (
		values.flatMap((value) => (value ? value.split(';').map((v) => v.trim()) : [])).join(';') ||
		undefined
	)
}
