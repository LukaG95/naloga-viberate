import React from 'react';
import { ResponsiveBar } from '@nivo/bar'; 

function StatGraph({ artist }) {
  const data = artist.most_popular_in.map((data) => ({
    city: data.city,
    value: data.value,
  }));

  return (
    <div className="stats-sheet">
      <label>Most popular in</label>
      <div style={{ height: '300px' }}>
        <ResponsiveBar
          data={data}
          keys={['value']}
          indexBy="city"
          layout="horizontal" 
          margin={{ left: 100 }}  
          padding={0.3}
          colors="nivo"
          axisTop={null}
          axisRight={null}
          axisBottom={null} 
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          enableLabel={false} 
        />
      </div>
    </div>
  );
}

export default StatGraph;