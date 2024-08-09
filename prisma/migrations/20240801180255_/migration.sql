/*
  Warnings:

  - The values [Urgent,High,Medium,Low] on the enum `Task_priority` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Task` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Task_title_key` ON `task`;

-- AlterTable
ALTER TABLE `task` MODIFY `title` VARCHAR(255) NOT NULL,
    MODIFY `description` VARCHAR(255) NULL,
    MODIFY `priority` ENUM('low', 'medium', 'high', 'urgent') NOT NULL,
    MODIFY `dueDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `Task_id_key` ON `Task`(`id`);
