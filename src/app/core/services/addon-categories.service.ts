import { Inject, Injectable } from '@nestjs/common';
import { ModelClass, transaction } from 'objection';
import { AddonCategoriesModel } from '../models/addon-categories.model';

@Injectable()
export class AddonCategoriesService {
  constructor(
    @Inject('AddonCategoriesModel')
    private modelClass: ModelClass<AddonCategoriesModel>,
  ) {}

  async getAddonCategories() {
    return await this.modelClass.query();
  }

  async getAddonCategoryById(id: number) {
    return await this.modelClass.query().findById(id);
  }

  async createAddonCategory(data: Partial<AddonCategoriesModel>) {
    return await this.modelClass.query().insert(data).returning('*');
  }

  async updateAddonCategory(id: number, data: Partial<AddonCategoriesModel>) {
    return await this.modelClass
      .query()
      .patchAndFetchById(id, data)
      .returning('*')
      .first();
  }

  async deleteAddonCategory(id: number) {
    return transaction(this.modelClass, async (AddonCategoriesModel) => {
      const addonCategory = await AddonCategoriesModel.query().findById(id);

      if (!addonCategory) {
        throw new Error('AddonCategory not found');
      }

      await addonCategory.$query().delete();

      return addonCategory;
    });
  }
}
