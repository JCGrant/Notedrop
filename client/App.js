import React from 'react';
import { MapView } from 'expo';
import mapStyle from './map-style';

console.ignoredYellowBox = ['Warning: View.propTypes'];

const NOTES = [
  {
    coordinate: {
      latitude: 51.5005,
      longitude: -0.1773,
    }
  },
  {
    coordinate: {
      latitude: 51.5010,
      longitude: -0.1778,
    }
  },
];

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      region: {
        latitude: 51.5005149,
        longitude: -0.1773262,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      },
    };
  }

  componentWillMount() {
    this.setState({ notes: NOTES });
  }

  render() {
    return (
      <MapView
        style={{flex: 1}}
        initialRegion={this.state.region}
        provider={'google'}
        customMapStyle={mapStyle}
      >
        {this.state.notes.map((note, i) => (
          <MapView.Marker
            key={i}
            coordinate={note.coordinate}
          />
        ))}
      </MapView>
    );
  }
}
