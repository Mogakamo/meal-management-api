import {BaseModel} from './base.model';

export class MealAddons extends BaseModel {
    static tableName = 'meal_addons';

    name: string;
    description: string;
    price: number;
    category: number;
}