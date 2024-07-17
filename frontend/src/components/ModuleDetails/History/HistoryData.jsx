import React, { useContext, useEffect, useState } from "react";
import { FarmContext } from "../../../context/ModulesContext";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
ChartJS.register(...registerables);
const HistoryData = ({ moduleId, moduleName }) => {
  const { getHistoryData, setAnimationState, animationState } =
    useContext(FarmContext);
  const [historyData, setHistoryData] = useState();
  const [historyChartData, setHistoryChartData] = useState({
    time: [],
    date: [],
    tempValues: [],
  });
  const [fetchOptions, setFetchOptions] = useState({
    start: "",
    stop: "",
    mode: "hourly",
    error: "",
  });

  //Chart setup
  const data = {
    labels:
      fetchOptions.mode === "daily"
        ? historyChartData.date
        : historyChartData.time,
    datasets: [
      {
        label: `${moduleId.id}`,
        fill: false,
        backgroundColor: "rgba(48, 126, 96))",
        borderColor: "rgb(48, 126, 96)",
        data: historyChartData.tempValues,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  //Data logic
  //Set data params
  const changeHandler = (e) => {
    setFetchOptions({ ...fetchOptions, [e.target.name]: e.target.value });
  };
  //Get data
  const getHistoryByParams = () => {
    if (!fetchOptions.start || !fetchOptions.stop || !fetchOptions.mode) {
      console.log(fetchOptions);
      setFetchOptions({
        start: fetchOptions.start,
        stop: fetchOptions.stop,
        mode: fetchOptions.mode,
        error: "Fields cannot be empty",
      });
    } else {
      setFetchOptions({
        start: fetchOptions.start,
        stop: fetchOptions.stop,
        mode: fetchOptions.mode,
        error: "",
      });

      let startTime = new Date(fetchOptions.start);
      const start = startTime.toISOString();

      let stopTime = new Date(fetchOptions.stop);
      const stop = stopTime.toISOString();
      const mode = fetchOptions.mode;

      getHistoryData(moduleId, start, stop, mode).then((data) => {
        setHistoryData(data);
      });
    }
  };
  //Prepare data for chart
  useEffect(() => {
    console.log(historyData);
    historyData &&
      historyData.forEach((history) => {
        const dateString = history.timestamp;
        const date = new Date(dateString);
        const formatedDate = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()} ${date.getHours()}:${(
          "0" + date.getMinutes()
        ).slice(-2)}`;

        const [singleDate, singleTime] = formatedDate.split(" ");
        historyChartData.time.push(singleTime);
        historyChartData.date.push(singleDate);
        historyChartData.tempValues.push(history.temperature);
      });
  }, [historyData]);

  return (
    <div className="charts-wraper">
      <div className={`chart-con ${animationState}`}>
        <div className="choice-container">
          <ul>
            <li>
              <label htmlFor="">Start</label>
              <input
                onChange={changeHandler}
                name="start"
                type="datetime-local"
              />
            </li>
            <li>
              <label htmlFor="">Stop</label>
              <input
                name="stop"
                onChange={changeHandler}
                type="datetime-local"
              />
            </li>
            <li>
              <label htmlFor="">Mode</label>
              <select
                value={fetchOptions?.mode}
                onChange={changeHandler}
                name="mode"
                id=""
              >
                <option selected value="hourly">
                  hourly
                </option>
                <option value="daily">daily</option>
              </select>
            </li>
            <li>
              <button type="button" onClick={async () => getHistoryByParams()}>
                <MagnifyingGlass size={24} color="#307e60" />
              </button>
            </li>
            <p>{fetchOptions.error}</p>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => {
            setAnimationState("details");
            setHistoryChartData({
              time: [],
              date: [],
              tempValues: [],
            });
            setHistoryData();
          }}
          className="history-back"
        >
          <CaretRight size={32} color="#307e60" />
        </button>
        <div className="data-info">
          <h1>{moduleName}</h1>
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default HistoryData;
