import type { AppDatabase } from "@/db";

/**
 * tequiodigital fork: shared mailboxes are always enabled (upstream requires an active Team license).
 */
export async function isTeamMailboxSharingEnabled(_db: AppDatabase): Promise<boolean> {
	return true;
}
