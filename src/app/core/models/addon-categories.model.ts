import { BaseModel } from './base.model';

export class AddonCategoriesModel extends BaseModel {
  static tableName = 'addon_categories';

  name: string;
}
