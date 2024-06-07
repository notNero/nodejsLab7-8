class Dish {
  id: number;

  title: string;

  photo: string;

  isPublish: boolean;

  ingredients: string[];

  price: number;

  categoryId: number;

  constructor({
    id,
    title,
    photo,
    isPublish,
    ingredients,
    price,
    categoryId,
  }: {
    id?: number;
    title?: string;
    photo?: string;
    isPublish?: boolean;
    ingredients?: string[];
    price?: number;
    categoryId?: number;
  } = {}) {
    this.id = id || 0;
    this.title = title || '';
    this.photo = photo || '';
    this.isPublish = isPublish || false;
    this.ingredients = ingredients || [];
    this.price = price || 0;
    this.categoryId = categoryId || 0;
  }

  static toResponse(dish: Dish): Dish {
    const { id, title, photo, isPublish, ingredients, price, categoryId } = dish;
    return { id, title, photo, isPublish, ingredients, price, categoryId };
  }
}

export default Dish;
