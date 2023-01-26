import { ResponsiveBar } from '@nivo/bar'
function Histogramme({data,keys=[],index,legend,description}) {
  const theme={
    axis: {
      ticks: {
        line: {
          // stroke: "gray-200"
        },
        text: {
          fill: "white"
        }
      }
    },
    grid: {
      line: {
        stroke: "gray",
        strokeWidth: 1,
        strokeDasharray: "4 2"
      }
    }
  }
  return (
    <div className='mt-5 mb-5 p-2 min-w-[35%] max-w-[50%]  h-[400px] bg-gray-800 rounded  text-gray-600 !important'>
        <h2 className='text-center text-gray-200  '>{description} </h2> 
        <ResponsiveBar
          data={data}
          keys={keys}
          indexBy={index}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.4}
          valueScale={{ type: "linear" }}
          colors={{ scheme: 'blues' }}
          // colors={[{ scheme: 'nivo' }, { scheme: 'blues' }]}
          // colorBy="index"
          // colors={{ scheme: 'nivo' }}
          borderColor={{
            from: 'color',
            modifiers: [
              ['darker', .6],
              ['opacity', .5]
           ]
         }}
          theme={theme}
          animate={true}
          enableLabel={false}
          axisTop={null}
          axisRight={null}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend:legend.toString(),
            legendPosition: "middle",
            legendOffset: -40,
            
          }}
        />
    </div>
  );
};

export default Histogramme