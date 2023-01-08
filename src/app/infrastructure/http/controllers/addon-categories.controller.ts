import { Controller, Get, Post, Delete, Patch, Body } from '@nestjs/common';
import { AddonCategoriesModel } from 'src/app/core/models/addon-categories.model';
import { AddonCategoriesService } from 'src/app/core/services/addon-categories.service';

@Controller('addon-categories')
export class AddonCategoriesController {
  constructor(private addonCategories: AddonCategoriesService) {}

  @Get()
  async getAddonCategories() {
    return await this.addonCategories.getAddonCategories();
  }

  @Get(':id')
  async getAddonCategoryById(id: number) {
    return await this.addonCategories.getAddonCategoryById(id);
  }

  @Post()
  async createAddonCategory(@Body() data: Partial<AddonCategoriesModel>) {
    return await this.addonCategories.createAddonCategory(data);
  }

  @Patch(':id')
  async updateAddonCategory(id: number, @Body() data: Partial<AddonCategoriesModel>) {
    return await this.addonCategories.updateAddonCategory(id, data);
  }

  @Delete(':id')
  async deleteAddonCategory(id: number) {
    return await this.addonCategories.deleteAddonCategory(id);
  }
}
