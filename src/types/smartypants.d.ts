declare module 'smartypants' {
	type Behavior = 0 | 1 | 2 | 3 | -1 | 'q' | 'b' | 'B' | 'd' | 'D' | 'i' | 'e' | 'w';
	export default function smartypants(text: string, behavior: Behavior): string;
}
