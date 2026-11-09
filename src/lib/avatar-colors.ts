const avatarColors = [
	{ background: "#FFCDD2", foreground: "#1f1a17" },
	{ background: "#F8BBD0", foreground: "#1f1a17" },
	{ background: "#E1BEE7", foreground: "#1f1a17" },
	{ background: "#C5CAE9", foreground: "#1f1a17" },
	{ background: "#BBDEFB", foreground: "#1f1a17" },
	{ background: "#B2DFDB", foreground: "#1f1a17" },
	{ background: "#C8E6C9", foreground: "#1f1a17" },
	{ background: "#FFE0B2", foreground: "#1f1a17" },
	{ background: "#D7CCC8", foreground: "#1f1a17" },
	{ background: "#CFD8DC", foreground: "#1f1a17" },
];

export function getAvatarColorStyle(identity: string): { backgroundColor: string; color: string } {
	let hash = 0;
	const stableIdentity = identity.trim().toLowerCase();

	for (let i = 0; i < stableIdentity.length; i++) {
		hash = (Math.imul(hash, 31) + stableIdentity.charCodeAt(i)) | 0;
	}

	const color = avatarColors[(hash >>> 0) % avatarColors.length];
	return { backgroundColor: color.background, color: color.foreground };
}
