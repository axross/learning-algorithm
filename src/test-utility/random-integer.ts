const randomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export default randomInteger;
