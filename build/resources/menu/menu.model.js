class Menu {
    id;
    title;
    photo;
    isPublish;
    constructor({ id, title, photo, isPublish, } = {}) {
        this.id = id || 0;
        this.title = title || '';
        this.photo = photo || '';
        this.isPublish = isPublish || false;
    }
    static toResponse(menu) {
        const { id, title, photo, isPublish } = menu;
        return { id, title, photo, isPublish };
    }
}
export default Menu;
//# sourceMappingURL=menu.model.js.map