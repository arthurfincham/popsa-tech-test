interface PageData {
  title: string;
  images: string[];
}

interface SortableItem {
  id: string;
  url: string | null;
}

interface SortablePageData {
  title: string;
  images: SortableItem[];
}
