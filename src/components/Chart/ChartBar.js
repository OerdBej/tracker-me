import "./ChartBar.css";

const ChartBar = (props) => {
  // as a text bcs is gonna be CSS style
  let barFillHeight = "0%";

  // here we can conditional JS
  if (props.maxValue > 0) {
    // give us the % between - and 100 to be filled as an integer round and concatinate to a string
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* how much the chart will be filled check the CSS. Style dynamicly, this style needs an JavaScript {{object}} as a value*/}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
