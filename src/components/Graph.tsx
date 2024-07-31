"use client";


// import React, { useState, useEffect } from "react";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// interface DataPoint {
//   day: string;
//   value: number;
// }

// const initialData: DataPoint[] = [
//   { day: "Monday", value: 23 },
//   { day: "Tuesday", value: 10 },
//   { day: "Wednesday", value: 2 },
//   { day: "Thursday", value: 10 },
//   { day: "Friday", value: 0 },
//   { day: "Saturday", value: 0 },
//   { day: "Sunday", value: 0 },
// ];

// const RealTimeChart: React.FC = () => {
//   const [data, setData] = useState<DataPoint[]>(initialData);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setData((prevData) => {
//         // Simulate real-time data update
//         const updatedData = prevData.map((point) => ({
//           ...point,
//           value: Math.floor(Math.random() * 100), // Replace with real data fetching logic
//         }));
//         return updatedData;
//       });
//     }, 5000); // Update every 5 seconds

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <LineChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="day" />
//         <YAxis />
//         <Tooltip />
//         <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default RealTimeChart;


import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  day: string;
  value: number;
}

const initialData: DataPoint[] = [
  { day: "Monday", value: 23 },
  { day: "Tuesday", value: 10 },
  { day: "Wednesday", value: 2 },
  { day: "Thursday", value: 10 },
  { day: "Friday", value: 0 },
  { day: "Saturday", value: 0 },
  { day: "Sunday", value: 0 },
];

const RealTimeChart: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>(initialData);
  const [bloodSugar, setBloodSugar] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<string>(initialData[0].day);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBloodSugar(Number(e.target.value));
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bloodSugar !== null) {
      setData((prevData) =>
        prevData.map((point) =>
          point.day === selectedDay ? { ...point, value: bloodSugar } : point
        )
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="day">Day:</label>
          <select id="day" value={selectedDay} onChange={handleDayChange}>
            {initialData.map((point) => (
              <option key={point.day} value={point.day}>
                {point.day}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bloodSugar">Blood Sugar Level:</label>
          <input
            type="number"
            id="bloodSugar"
            value={bloodSugar || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealTimeChart;
