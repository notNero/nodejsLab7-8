class Category {
    id;
    title;
    photo;
    isVisible;
    menuId;
    constructor({ id, title, photo, isVisible, menuId, } = {}) {
        this.id = id || 0;
        this.title = title || '';
        this.photo = photo || '';
        this.isVisible = isVisible || false;
        this.menuId = menuId || 0;
    }
    static toResponse(category) {
        const { id, title, photo, isVisible, menuId } = category;
        return { id, title, photo, isVisible, menuId };
    }
}
export default Category;
//# sourceMappingURL=category.model.js.map