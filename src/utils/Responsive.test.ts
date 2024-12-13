import {
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    normalize,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
    isTablet,
    isLargeTablet,
  } from "./Responsive"; // Update with the correct path

  
  jest.mock("react-native", () => ({
    Dimensions: {
      get: jest.fn(() => ({ width: 414, height: 896 })), // Mock dimensions (e.g., iPhone 11 Pro Max)
    },
    PixelRatio: {
      roundToNearestPixel: (value: number) => Math.round(value), // Simplified rounding
    },
  }));
  
  describe("scalingUtils", () => {
    it("should correctly calculate normalize for width", () => {
      const size = 100;
      const result = normalize(size, "width");
      expect(result).toBe(Math.round(size * (414 / 414))); 
    });
  
    it("should correctly calculate normalize for height", () => {
      const size = 100;
      const result = normalize(size, "height");
      expect(result).toBe(Math.round(size * (896 / 896))); 
    });
  
    it("should correctly calculate fontPixel with minimum size enforcement", () => {
      const smallSize = 6;
      const largeSize = 16;
  
      const smallResult = fontPixel(smallSize);
      const largeResult = fontPixel(largeSize);
  
      expect(smallResult).toBe(8); 
      expect(largeResult).toBe(Math.round(16 * (414 / 414))); 
    });
  
    it("should correctly calculate pixelSizeVertical", () => {
      const size = 50;
      const result = pixelSizeVertical(size);
      expect(result).toBe(normalize(size, "height"));
    });
  
    it("should correctly calculate pixelSizeHorizontal", () => {
      const size = 50;
      const result = pixelSizeHorizontal(size);
      expect(result).toBe(normalize(size, "width"));
    });
  
    it("should determine if the device is a tablet or large tablet", () => {
      expect(isTablet).toBe(false); 
      expect(isLargeTablet).toBe(false); 
    });
  
    it("should correctly expose SCREEN_WIDTH and SCREEN_HEIGHT", () => {
      expect(SCREEN_WIDTH).toBe(414); 
      expect(SCREEN_HEIGHT).toBe(896);
    });
  });