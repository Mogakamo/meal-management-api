import { BaseModel } from './base.model';

export class AddonCategoriesModel extends BaseModel {
  static tableName = 'addon-categories';

  name: string;
}
