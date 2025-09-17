import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh', textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>CICD JENKINS DEMO</h1>
      
      <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
        Jenkins source code uses Git repo and branch <b>/main</b>. In <b>Build Triggers</b>, select <b>Poll SCM</b> and use schedule: <b>* * * * *</b>
      </p>

      <h3 style={{ marginTop: '40px' }}>In Build Steps, add Windows batch command:</h3>
      <pre style={{ background: '#000', color: '#0f0', textAlign: 'left', padding: '20px', borderRadius: '8px', width: '60%', margin: '20px auto' }}>
{`call npm install
call npm run build
rmdir "C:\\tomcat9\\webapps\\jenkinsfrontenddemo" /s /q
mkdir "C:\\tomcat9\\webapps\\jenkinsfrontenddemo"
xcopy "dist\\*" "C:\\tomcat9\\webapps\\jenkinsfrontenddemo\\" /s /e /y`}
      </pre>

      <h3>Another Build Step with Windows batch command to restart Tomcat:</h3>
      <pre style={{ background: '#000', color: '#0f0', textAlign: 'left', padding: '20px', borderRadius: '8px', width: '40%', margin: '20px auto' }}>
{`net stop Tomcat9
net start Tomcat9`}
      </pre>
    </div>
  );
}

export default App;