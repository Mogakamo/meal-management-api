import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/app/core/database/database.module';
import { AddonCategoriesModule } from './addon-categories.module';
import { AppController } from './app.controller';
import { AppService } from './controllers/app.service';
import { MealAddonsController } from './controllers/meal-addons.controller';
import { MealAddonsModule } from './meal-addon.module';

@Module({
  imports: [DatabaseModule, MealAddonsModule, AddonCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
