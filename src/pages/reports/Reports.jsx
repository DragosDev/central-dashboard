import React from 'react'
import * as WebDataRocksReact from 'react-webdatarocks';
import "./reports.css"
import 'webdatarocks/webdatarocks.css'

export default function Reports() {
  return (
    <div className="reports">
      <div className="App">
        <WebDataRocksReact.Pivot 
         toolbar={true}
         componentFolder="https://cdn.webdatarocks.com/"
         width="100%"
         report="https://cdn.webdatarocks.com/reports/report.json"
        />
      </div>
      
      </div>
  )
}
