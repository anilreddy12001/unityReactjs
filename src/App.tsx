import React , { useCallback, useState } from 'react';

import { UnityLoader } from './components/UnityLoader';
import { Gamepad2 } from 'lucide-react';
import { UnityProvider } from './contexts/UnityContext';
import {PieChart, Pie, Cell,Sector, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Select, Button, Input, message } from "antd";
import keycloak, {logout} from "./components/utils/keycloak.js";
import Charts from "./components/charts/index.tsx";
import "./index.css";
import menuClickAudioFile from "./menu-click.mp3";
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const menuClickAudio = new Audio(menuClickAudioFile);
  //window.env=import.meta.env;
  let widgetList=[{name:'Consumption', title:'', type:'line', content:{}},{name:'Energy Generation', title:'', type:'', content:{}}];

  function handleClickSpawnEnemies() {
   // sendMessage("GameController", "SpawnEnemies", 100);
   console.log('clicked button..');
  }

  
  
  const renderActiveShape = (props:any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };
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
        <div className="custom-tooltip" style={{backgroundColor:'#333333dd',border:'1px solid #555555', borderRadius:'5px'}}>
          <p className="label" style={{color:'#ffffff'}}>{` ${payload[0].name}`}</p>
          <div>
            {payload.map((pld) => (
              <div style={{ display: "inline-block", padding: 10 }}>
                <div style={{ color: pld.fill||'#f0f0f0' }}>{pld.payload.displayValue}</div>
                {/* <div>{pld.dataKey}</div> */}
              </div>
            ))}
          </div>
        </div>
      );
    }
  
    return null;
  };

  const getChart=(e)=>{
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
    const options=[];
    if(e.type=='line'){
    return <ResponsiveContainer width={"100%"} height={200} ><LineChart
   
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
      else{
        const dataPie = [
          { name: 'Solar', value: 400, label:'Solar', displayValue:'400MW' },
          { name: 'Grid', value: 300, label:'Grid', displayValue:'300MW' },
          { name: 'DG', value: 300, label:'Diesel-Generator', displayValue:'300MW' },
          { name: 'Wind', value: 200, label:'Wind', displayValue:'200MW' },
        ];
        let COLORS= ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        return <ResponsiveContainer width="90%" height={200} ><PieChart>
        <Pie
          activeIndex={activeIndex}
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
  const onclickFn=(e)=>{
    menuClickAudio.play();
  }
  if (!localStorage.getItem("loggedInUser") || localStorage.getItem("loggedInUser") == '') {
    keycloak
    .init({ onLoad: "login-required" })
      .then((authenticated) => {
        console.log('authenticated..', authenticated);
        if (authenticated) {
          // console.log(
          //   "url: ",
          //   window.location.href,
          //   "window.config.REACT_APP_PUBLIC_URL:",
          //   window.config.REACT_APP_PUBLIC_URL
          // );
          // console.log("autologout value inside autocon page:",localStorage.getItem("autologout"), "window.config.REACT_APP_PUBLIC_URL",window.config.REACT_APP_PUBLIC_URL);



          console.log("login success", keycloak);
          localStorage.setItem("react-token", keycloak.token);
          localStorage.setItem("react-refresh-token", keycloak.refreshToken);
          localStorage.setItem("loggedInUser", keycloak.idTokenParsed.name);
          localStorage.setItem(
            "loggedInUserName",
            keycloak.idTokenParsed.preferred_username
          );
          localStorage.setItem(
            "loggedInUserRole",
            keycloak.realmAccess.roles.toString()
          );
          localStorage.setItem(
            "projectList",
            keycloak.idTokenParsed.projects.toString()
          );
          //root.render(<App/>);
          var role =
            localStorage.getItem("loggedInUserRole").indexOf("manager") !== -1
              ? "manager"
              : localStorage
                .getItem("loggedInUserRole")
                .indexOf("designEngineer") !== -1
                ? "designEngineer"
                : localStorage
                  .getItem("loggedInUserRole")
                  .indexOf("stressEngineer") !== -1
                  ? "stressEngineer"
                  : " ";

          //code to render only if authenticated:
          if (localStorage.getItem("loggedInUser") && localStorage.getItem("loggedInUser") != '') {
            return (
              <></>
            );
          }


        }
      }).catch( e=>{
          console.log('e:',e);
          //alert('unable to connect to keycloak');
          message.error('Unable to connect to Keycloak');
        }
      )
  }
  else{
console.log("env variables: ",import.meta.env);
  location.hash='dashboard';
  return (
    <UnityProvider style={{height:'900px'}}>
      <div id="overLayWidget" onClick={e=>onclickFn(e)}>{widgetList.map(e=><>{e.name}<div className="widgetWrapper" style={{border:'1px solid #8e8e8e',padding:'5px'}}><Charts progress='.465' name={e.name} type={e.type}/>
      </div></>)}</div>
      {/* <button onClick={handleClickSpawnEnemies}>click</button> */}
      <UnityLoader />
      <div className="min-h-screen bg-gray-100">
        {/* <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2">
              {/* <Gamepad2 className="w-6 h-6 text-blue-500" /> */}
             {/* <h1 className="text-xl font-bold text-gray-900"> </h1>
            </div>
          </div>
        </header> */}

        {/* <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Unity Game Window</h2> */}
            {/* <UnityLoader /> */}
            {/* <div className="mt-4 text-sm text-gray-600">
              <p>Instructions:</p>
              <ul className="list-disc list-inside">
                <li>Place your Unity WebGL build files in the public/Build directory</li>
                <li>Update the build URLs in UnityContext.tsx</li>
                <li>The game will automatically load when ready</li>
              </ul>
            </div> */}
          {/* </div>
        </main> */}
      </div>
    </UnityProvider>
  );
}
}

export default App;
