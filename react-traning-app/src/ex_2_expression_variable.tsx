const App = () => {
    const result = 10 + 10;

    const getRandomValue = (max: number) => {
        return Math.random() * max;
    }

    return <h1>Lorem: {result}, ipsum: {getRandomValue(100).toFixed(2)}</h1>
  }
  
export { App };
  