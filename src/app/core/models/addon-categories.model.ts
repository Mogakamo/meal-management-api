import { BaseModel } from './base.model';

export class AddonCategories extends BaseModel {
  static tableName = 'addon-categories';

  name: string;
}
