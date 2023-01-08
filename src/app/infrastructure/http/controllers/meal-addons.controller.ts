import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MealAddonsModel } from 'src/app/core/models/meal-addons.model';
import { MealAddonsService } from 'src/app/core/services/meal-addons.service';

@Controller('meal-addons')
export class MealAddonsController {
  constructor(private mealAddonsService: MealAddonsService) {}

  @Get()
  async getMealAddons() {
    return await this.mealAddonsService.getMealAddons();
  }

  @Get(':id')
  async getMealAddonById(id: number) {
    return await this.mealAddonsService.getMealAddonById(id);
  }

  @Post()
  async createMealAddon(@Body() data: Partial<MealAddonsModel>) {
    return await this.mealAddonsService.createMealAddon(data);
  }

  @Put(':id')
  async updateMealAddon(id: number, data: Partial<MealAddonsModel>) {
    return await this.mealAddonsService.updateMealAddon(id, data);
  }

  @Delete(':id')
  async deleteMealAddon(id: number) {
    return await this.mealAddonsService.deleteMealAddon(id);
  }
}
