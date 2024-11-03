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
