// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  // test('organization is "nonprofit"', () => {
  //   expect(launchcode.organization).toBe('nonprofit');
  // });

  // test('executiveDirector should be "Jeff"', () => {
  //   expect(launchcode.executiveDirector).toBe('Jeff');
  // });

  // test('percentageCoolEmployees should be 100', () => {
  //   expect(launchcode.percentageCoolEmployees).toBe(100);
  // });

  // test('programsOffered should contain appropriate values', () => {
  //   expect(launchcode.programsOffered).toContain('Web Development');
  //   expect(launchcode.programsOffered).toContain('Data Analysis');
  //   expect(launchcode.programsOffered).toContain('Liftoff');
  //   expect(launchcode.programsOffered.length).toBe(3);
  // });

  // test('launchOutput() should return "Launch!" when passed a number that is ONLY divisible by 2', () => {
  //   expect(launchcode.launchOutput(2)).toBe('Launch!');
  //   expect(launchcode.launchOutput(4)).toBe('Launch!');
  //   expect(launchcode.launchOutput(6)).not.toBe('Launch!');
  // });

  // test('launchOutput() returns "Rocks!" when passed a number that is ONLY divisible by 5', () => {
  //   expect(launchcode.launchOutput(5)).toBe('Rocks!');
  //   expect(launchcode.launchOutput(25)).toBe('Rocks!');
  // });

  // test("When passed a number that is divisible by 2 AND 3, launchOutput() returns 'LaunchCode!'", () => {
  //   expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  // });
  
  test("When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!'", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });
  
  test("When passed a number that is ONLY divisible by 3, launchOutput() returns 'Code!'", () => {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });
  
  test("When passed a number that is ONLY divisible by 5, launchOutput() returns 'Rocks!'", () => {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });
  
  test("When passed a number that is divisible by 2 AND 3, launchOutput() returns 'LaunchCode!'", () => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  
  test("When passed a number that is divisible by 3 AND 5, launchOutput() returns 'Code Rocks!'", () => {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });
  
  test("When passed a number that is divisible by 2 AND 5, launchOutput() returns 'Launch Rocks! (CRASH!!!!)'", () => {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });
  
  test("When passed a number that is divisible by 2, 3, AND 5, launchOutput() returns 'LaunchCode Rocks!'", () => {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });
  
  test("When passed a number that is NOT divisible by 2, 3, or 5, launchOutput() returns 'Rutabagas! That doesn't work.'", () => {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
});