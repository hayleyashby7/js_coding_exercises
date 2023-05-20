import { sumDigits, createRange, getScreentimeAlertList, hexToRGB, findWinner } from '../challenges/exercise007-optional';

describe("sumDigits", () => { 
    test('takes number and returns sum of digits', () => { 
        // Arrange
        const num = 123;
       
        // Act
        const result = sumDigits(num);
        
        // Assert
        expect(result).toBe(6);
    }); 
});