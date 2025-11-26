// Helper function to get image URL with base path support
export const getImageUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove trailing slash from base if present, then add the image path
  const basePath = base.endsWith('/') ? base.slice(0, -1) : base;
  // Remove leading slash from path if present
  const imagePath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${imagePath}`;
};

