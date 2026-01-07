import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const placeholderImages: ImagePlaceholder[] = data.placeholderImages;

export const placeholderImageStore: Record<string, ImagePlaceholder> = 
  placeholderImages.reduce((acc, image) => {
    acc[image.id] = image;
    return acc;
  }, {} as Record<string, ImagePlaceholder>);
