class Category {
  id: number;

  title: string;

  photo: string;

  isVisible: boolean;

  menuId: number;

  constructor({
    id,
    title,
    photo,
    isVisible,
    menuId,
  }: {
    id?: number;
    title?: string;
    photo?: string;
    isVisible?: boolean;
    menuId?: number;
  } = {}) {
    this.id = id || 0;
    this.title = title || '';
    this.photo = photo || '';
    this.isVisible = isVisible || false;
    this.menuId = menuId || 0;
  }

  static toResponse(category: Category): Category {
    const { id, title, photo, isVisible, menuId } = category;
    return { id, title, photo, isVisible, menuId };
  }
}

export default Category;
