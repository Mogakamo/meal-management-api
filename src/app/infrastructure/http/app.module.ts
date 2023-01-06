import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/app/core/database/database.module';
import { AppController } from './app.controller';
import { AppService } from './controllers/app.service';
import { MealAddonsController } from './controllers/meal-addons.controller';
import { MealAddonsModule } from './meal-addon.module';

@Module({
  imports: [DatabaseModule, MealAddonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
