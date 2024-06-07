class Dish {
    id;
    title;
    photo;
    isPublish;
    ingredients;
    price;
    categoryId;
    constructor({ id, title, photo, isPublish, ingredients, price, categoryId, } = {}) {
        this.id = id || 0;
        this.title = title || '';
        this.photo = photo || '';
        this.isPublish = isPublish || false;
        this.ingredients = ingredients || [];
        this.price = price || 0;
        this.categoryId = categoryId || 0;
    }
    static toResponse(dish) {
        const { id, title, photo, isPublish, ingredients, price, categoryId } = dish;
        return { id, title, photo, isPublish, ingredients, price, categoryId };
    }
}
export default Dish;
//# sourceMappingURL=dish.model.js.map