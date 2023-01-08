import { Module } from "@nestjs/common";
import { MealAddonsService } from "src/app/core/services/meal-addons.service";
import { MealAddonsController } from "../controllers/meal-addons.controller";

@Module({
    imports: [],
    controllers: [MealAddonsController],
    providers: [MealAddonsService],
    exports: [MealAddonsService]
})
export class MealAddonsModule{} 