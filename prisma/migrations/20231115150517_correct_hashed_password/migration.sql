/*
  Warnings:

  - You are about to drop the column `hassedPassword` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `hassedPassword`,
    ADD COLUMN `hashedPassword` VARCHAR(191) NULL;
