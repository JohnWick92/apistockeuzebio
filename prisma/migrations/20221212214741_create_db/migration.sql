-- CreateTable
CREATE TABLE "user" (
    "code_pk" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("code_pk")
);

-- CreateTable
CREATE TABLE "history" (
    "code_pk" TEXT NOT NULL,
    "code_material" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "batch" TEXT NOT NULL,
    "shelf_life" TIMESTAMP(3) NOT NULL,
    "quantity_used" INTEGER NOT NULL,
    "date_of_use" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "history_pkey" PRIMARY KEY ("code_pk")
);

-- CreateTable
CREATE TABLE "material" (
    "code_pk" TEXT NOT NULL,
    "code_material" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "batch" TEXT NOT NULL,
    "shelf_life" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "material_pkey" PRIMARY KEY ("code_pk")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");

-- CreateIndex
CREATE UNIQUE INDEX "user_token_key" ON "user"("token");

-- CreateIndex
CREATE UNIQUE INDEX "history_code_material_key" ON "history"("code_material");

-- CreateIndex
CREATE UNIQUE INDEX "history_batch_key" ON "history"("batch");

-- CreateIndex
CREATE UNIQUE INDEX "material_code_material_key" ON "material"("code_material");
