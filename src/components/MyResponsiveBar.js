import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

const MyResponsiveBar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={['activity 1', 'activity 2', 'activity 3', 'activity 4', 'activity 5', 'activity 6']}
    groupMode={'grouped'}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.1}
    innerPadding={30}
    colors={{ scheme: 'nivo' }}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0
    }}
    isInteractive={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20
      }
    ]}
    motionStiffness={90}
    motionDamping={15}
  />
)

MyResponsiveBar.propTypes = {
  data: PropTypes.array.isRequired
}

export default MyResponsiveBar;