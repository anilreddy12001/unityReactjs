import React from 'react';
import { UnityLoader } from './components/UnityLoader';
import { Gamepad2 } from 'lucide-react';
import { UnityProvider } from './contexts/UnityContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./index.css";
function App() {
  let widgetList=[{name:'Widget 1', title:'', type:'', content:{}},{name:'Widget 2', title:'', type:'', content:{}}];

  function handleClickSpawnEnemies() {
   // sendMessage("GameController", "SpawnEnemies", 100);
   console.log('clicked button..');
  }
  const getChart=(e)=>{
    console.log('e:', e);
    let data = [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    const options=[];
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

  return (
    <UnityProvider style={{height:'900px'}}>
      <div id="overLayWidget">{widgetList.map(e=><>{e.name}<div className="widgetWrapper" style={{border:'1px solid #8e8e8e',padding:'5px'}}>{getChart(e)}
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

export default App;
