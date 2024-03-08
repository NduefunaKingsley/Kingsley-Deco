import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'main-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'display': 'flex',
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'grid-container': {
    'display': 'grid',
    'gridTemplateColumns': '200px 200px 200px 200px',
    'alignContent': 'center',
    'rowGap': '50px'
  },
  'card-img': {
    'cursor': 'pointer'
  },
  'footer': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'rem', 'value': 5 }]
  },
  'card1': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'marginLeft': [{ 'unit': 'px', 'value': 100 }],
    'background': 'rgb(180, 174, 174)',
    'borderRadius': '15px'
  },
  'image': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 300 }],
    'borderRadius': '15px',
    'cursor': 'pointer'
  },
  'head': {
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'height': [{ 'unit': 'px', 'value': 500 }]
  },
  'title': {
    'marginTop': [{ 'unit': 'px', 'value': 150 }],
    'marginLeft': [{ 'unit': 'px', 'value': 300 }]
  },
  'h1': {
    'fontSize': [{ 'unit': 'string', 'value': 'larger' }],
    'fontWeight': 'bolder',
    'fontFamily': ''Segoe UI', Tahoma, Geneva, Verdana, sans-serif'
  }
});
