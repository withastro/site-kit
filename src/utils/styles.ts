export function joinStyles(...values: (string | undefined | null)[]) {
	return (
		values
			.filter(Boolean)
			.map((value) => value!.split(';').map((v) => v.trim()))
			.flat()
			.filter(Boolean)
			.join(';') || undefined
	);
}
