import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const placeholderImages: ImagePlaceholder[] = data.placeholderImages;

export function getPlaceholderImage(id: string): ImagePlaceholder {
  const image = placeholderImages.find((img) => img.id === id);
  if (!image) {
    // Return a default or throw an error
    return {
      id: 'default',
      description: 'Default placeholder image',
      imageUrl: 'https://picsum.photos/seed/default/600/400',
      imageHint: 'placeholder',
    };
  }
  return image;
}
