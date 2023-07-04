DROP INDEX `clerkIdProvider_idx` ON `users`;--> statement-breakpoint
CREATE UNIQUE INDEX `clerkId_idx` ON `users` (`clerk_id`);--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `provider`;