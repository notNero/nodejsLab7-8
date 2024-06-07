class Menu {
  id: number;

  title: string;

  photo: string;

  isPublish: boolean;

  constructor({
    id,
    title,
    photo,
    isPublish,
  }: {
    id?: number;
    title?: string;
    photo?: string;
    isPublish?: boolean;
  } = {}) {
    this.id = id || 0;
    this.title = title || '';
    this.photo = photo || '';
    this.isPublish = isPublish || false;
  }

  static toResponse(menu: Menu): {
    id: number;
    title: string;
    photo: string;
    isPublish: boolean;
  } {
    const { id, title, photo, isPublish } = menu;
    return { id, title, photo, isPublish };
  }
}

export default  Menu;
