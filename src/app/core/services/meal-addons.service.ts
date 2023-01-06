import { Inject, Injectable } from '@nestjs/common';
import { ModelClass, transaction } from 'objection';
import { MealAddonsModel } from '../models/meal-addons.model';

@Injectable()
export class MealAddonsService {
  constructor(
    @Inject('MealAddonsModel') private modelClass: ModelClass<MealAddonsModel>,
  ) {}

  async getMealAddons() {
    return await this.modelClass.query();
  }

  async getMealAddonById(id: number) {
    return await this.modelClass.query().findById(id);
  }

  async createMealAddon(data: Partial<MealAddonsModel>) {
    return await this.modelClass.query().insert(data).returning('*');
  }

  async updateMealAddon(id: number, data: Partial<MealAddonsModel>) {
    return await this.modelClass
      .query()
      .patchAndFetchById(id, data)
      .returning('*')
      .first();
  }

  async deleteMealAddon(id: number) {
    return transaction(this.modelClass, async (MealAddonsModel) => {
      const mealAddon = await MealAddonsModel.query().findById(id);

      if (!mealAddon) {
        throw new Error('MealAddon not found');
      }

      await mealAddon.$query().delete();

      return mealAddon;
    });
  }
}
