import { Module } from "@nestjs/common";
import { AddonCategoriesService } from "src/app/core/services/addon-categories.service";
import { AddonCategoriesController } from "../controllers/addon-categories.controller";


@Module({
    imports: [],
    controllers: [AddonCategoriesController],
    providers: [AddonCategoriesService],
    exports: [AddonCategoriesService]
})
export class AddonCategoriesModule {}