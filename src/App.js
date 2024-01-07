import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(0);
  const [budget, setBudget] = useState(0);
  const [calculateValue, setCalculateValue] = useState(0);

  const onClick = (event) => {
    setCalculateValue(Math.round(budget / price));
  };
  const onChangeBudget = (event) => {
    setBudget(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(
      (response) =>
        response.json().then((json) => {
          setCoins(json);
          setPrice(json[0].quotes.USD.price);
          return;
        }),
      setLoading(false)
    );
  }, []);

  const value = Math.round(budget / price);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select onChange={onChangePrice}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name}({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>
        <label htmlFor="Your USD">USD</label>
        <input
          id="USD"
          placeholder="Please write your budget"
          type="number"
          onChange={onChangeBudget}
        />
        <h1>{calculateValue !== 0 ? `You can get ${calculateValue}` : ""}</h1>
        <button onClick={onClick}>Calculate</button>
      </div>
    </div>
  );
}

export default App;
