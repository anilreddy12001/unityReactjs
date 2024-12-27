import React , { useCallback, useState, useEffect } from 'react';

import { UnityLoader } from './components/UnityLoader';
import { Gamepad2 } from 'lucide-react';
import { UnityProvider } from './contexts/UnityContext';
import {PieChart, Pie, Cell,Sector, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Select, Button, Input, message, Spin } from "antd";
import keycloak, {logout} from "./components/utils/keycloak.js";
import { KeycloakProvider, useKeycloak } from '@react-keycloak/web';
import Charts from "./components/charts/index.tsx";
import "./index.css";
import menuClickAudioFile from "./menu-click.mp3";
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [loginFlag,setLoginFlag]=useState(false);
//  const { isAuthenticated, isLoading, user, login, logout } = useKeycloak();
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const menuClickAudio = new Audio(menuClickAudioFile);
  //window.env=import.meta.env;
  let widgetList=[{name:'Consumption', title:'', type:'line', content:{}},{name:'Energy Generation', title:'', type:'', content:{}}];

  const onclickFn=(e)=>{
    menuClickAudio.play();
  }
  useEffect(() => {
    loginFn();
  }, []);

  const getUnityApp=()=>{
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
  const loginFn=()=>{
  if (!localStorage.getItem("loggedInUser") || localStorage.getItem("loggedInUser") == '') {
    setSpinning(true);
    /*
    keycloak
    .init({ onLoad: "login-required" })
      .then((authenticated) => {
        console.log('authenticated..', authenticated);
        if (authenticated) {
          setLogin(true);
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
        location.hash='dashboardError';
          console.log('e:',e);
          setSpinning(false);
          setLogin(false);
          //alert('unable to connect to keycloak');
          message.error('Unable to connect to Keycloak');
        }
      )
      */
  }
  else{
console.log("else: env variables : ",import.meta.env);
  location.hash='dashboard';
  //setSpinning(false);
  setLoginFlag(true);
  //return (<>{login?getUnityApp():''}</>)
}
}
console.log('loginFlag:', loginFlag)
return(<><Spin spinning={spinning} size="large" fullscreen />{!loginFlag?getUnityApp():''}</>)
}

export default App;