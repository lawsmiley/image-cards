// Image validation utility to prevent blank cards
export class ImageValidator {
  static async validateImage(src: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
      
      // Timeout after 5 seconds
      setTimeout(() => resolve(false), 5000);
    });
  }

  static getImageStatus(src: string): 'loading' | 'loaded' | 'error' {
    // This is a simple check - in a real app you might want more sophisticated validation
    if (!src) return 'error';
    if (src.includes('undefined') || src.includes('null')) return 'error';
    return 'loading';
  }

  static getFallbackImage(characterName: string): string {
    // Return a default image or emoji representation
    return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23333"/><text x="100" y="100" text-anchor="middle" dy=".3em" fill="white" font-size="16">${characterName}</text></svg>`;
  }
}
