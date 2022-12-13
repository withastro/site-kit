export function joinStyles(...values: (string | undefined)[]) {
	return (
		values
			.filter(Boolean)
			.map((value) => value!.split(';').map((v) => v.trim()))
			.flat()
			.filter(Boolean)
			.join(';') || undefined
	);
}
