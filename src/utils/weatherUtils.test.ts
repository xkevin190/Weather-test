import { getCurrentDate } from "../utils/weatherUtils"; // Update with the correct path

describe("getCurrentDate", () => {
  it("should return the current date in YYYY-MM-DD format", () => {
    
    const mockDate = new Date("2024-12-13T12:00:00Z");
    jest.spyOn(global, "Date").mockImplementation(() => mockDate as unknown as Date);

    
    const result = getCurrentDate();
    expect(result).toBe("2024-12-13");

    jest.restoreAllMocks();
  });
});