import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // from objects to numbers -> return an array of numbers
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  // array of objects -> so we need to use the SPREAD operator to pull out all the array elements and add them as standalone methods (12 arguments from our array)
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          // label be unique bcs its uniqu for
          key={dataPoint.label}
          // data point is an object which has a value of property
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
