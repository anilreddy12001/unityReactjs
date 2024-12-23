import React, { useCallback, useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import {PieChart, Pie, Cell,Sector, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Charts( props) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log('progress:', props,' process.env(import.meta.env): ', import.meta.env);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    console.log('custom tooltip params:', active, payload, label);
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#333333dd', border: '1px solid #555555', borderRadius: '5px' }}>
          <p className="label" style={{ color: '#ffffff' }}>{` ${payload[0].name}`}</p>
          <div>
            {payload.map((pld) => (
              <div style={{ display: "inline-block", padding: 10 }}>
                <div style={{ color: pld.fill || '#f0f0f0' }}>{pld.payload.displayValue}</div>
                {/* <div>{pld.dataKey}</div> */}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const getChart = (e) => {
    console.log('charts component: ', Charts);
    console.log('e:', e);
    let data = [
      {
        name: '2020',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: '2021',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: '2022',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: '2023',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: '2024',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      }
    ];
    const options = [];
    if (e.type == 'line') {
      return <ResponsiveContainer width={"100%"} height={200} minWidth='320px' ><LineChart
        onClick={console.log(e)}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />

      </LineChart>
      </ResponsiveContainer>
    }
    else {
      const dataPie = [
        { name: 'Solar', value: 400, label: 'Solar', displayValue: '400MW' },
        { name: 'Grid', value: 300, label: 'Grid', displayValue: '300MW' },
        { name: 'DG', value: 300, label: 'Diesel-Generator', displayValue: '300MW' },
        { name: 'Wind', value: 200, label: 'Wind', displayValue: '200MW' },
      ];
      let COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      return <ResponsiveContainer width="90%" height={200} ><PieChart>
        <Pie
          activeIndex={1}
          // activeShape={renderActiveShape}
          data={dataPie}
          labelLine={false}
          cx={80}
          cy={80}
          innerRadius={60}
          outerRadius={80}

          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >{data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} >

          </Cell>
        ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
      </PieChart>
      </ResponsiveContainer>
    }
  }
if(props.type=='loading'){
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      <p className="text-lg font-medium">
        Loading Unity Application... {Math.round(props.progress * 100)}%
      </p>
    </div>
  );
}
else{
  return (<>
{getChart(props)}
</>
  )
}
}