/*
  Warnings:

  - You are about to drop the column `date` on the `Application` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "applicant_id" INTEGER NOT NULL,
    "vacancy_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Application_applicant_id_fkey" FOREIGN KEY ("applicant_id") REFERENCES "Applicant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Application_vacancy_id_fkey" FOREIGN KEY ("vacancy_id") REFERENCES "Vacancy" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Application" ("applicant_id", "id", "status", "vacancy_id") SELECT "applicant_id", "id", "status", "vacancy_id" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
