import {StrengthPipe} from './strength.pipe';


describe('StrengthPipe', () => {

  it('should display weak if strength is 5',  () => {

  // Arrange
  const pipe = new StrengthPipe();

  // Act
  const val = pipe.transform(5);  // normally in this case, Act and Assert should have been a one liner.
                                      // but we separated them to demonstrate triple A usage.
  // Assert
    expect(val).toEqual('5 (weak)');

  });

  it('should display strong if strength is 10',  () => {

    // Arrange
    const pipe = new StrengthPipe();

    // Act
    const val = pipe.transform(10);  // normally in this case, Act and Assert should have been a one liner.
    // but we separated them to demonstrate triple A usage.
    // Assert
    expect(val).toEqual('10 (strong)');

  });

  it('should display unbelivable if strength is 30',  () => {

    // Arrange
    const pipe = new StrengthPipe();

    // Act
    const val = pipe.transform(30);  // normally in this case, Act and Assert should have been a one liner.
    // but we separated them to demonstrate triple A usage.
    // Assert
    expect(val).toEqual('30 (unbelievable)');

  });

})
