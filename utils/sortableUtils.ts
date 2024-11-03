// Assigns unique ids to images in the data array
export const addIdsToImages = (data: PageData[]): SortablePageData[] => {
  return data.map((entry, pageIndex) => {
    const images = entry.images.map((img, imageIndex) => ({
      id: `${pageIndex}_${imageIndex}`,
      url: img,
    }));

    return {
      ...entry,
      images,
    };
  });
};

type ItemIndex = { pageIndex: number; imgIndex: number };

// Get location of active and over by their ids
export const findItemIndexes = (
  items: SortablePageData[],
  activeId: string,
  overId: string
): {
  activeItemIndex: ItemIndex | undefined;
  overItemIndex: ItemIndex | undefined;
} => {
  let activeItemIndex: ItemIndex | undefined;
  let overItemIndex: ItemIndex | undefined;

  items.forEach((page, pageIndex) => {
    page.images.forEach((img, imgIndex) => {
      if (img.id === activeId) activeItemIndex = { pageIndex, imgIndex };
      if (img.id === overId) overItemIndex = { pageIndex, imgIndex };
    });
  });

  return { activeItemIndex, overItemIndex };
};

export const swapItems = (
  items: SortablePageData[],
  activeItemIndex: ItemIndex,
  overItemIndex: ItemIndex
) => {
  const activeItem =
    items[activeItemIndex.pageIndex].images[activeItemIndex.imgIndex];
  const overItem =
    items[overItemIndex.pageIndex].images[overItemIndex.imgIndex];

  [
    items[activeItemIndex.pageIndex].images[activeItemIndex.imgIndex],
    items[overItemIndex.pageIndex].images[overItemIndex.imgIndex],
  ] = [overItem, activeItem];
};
