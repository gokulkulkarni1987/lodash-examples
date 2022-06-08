'use strict';
import {
  brown500, blueGrey500, grey400,
  lightBlue500, grey300, blueGrey50, blueGrey200
} from 'material-ui/styles/colors';

const layoutStyle = {

  topControlBarLayoutStyle: {
    marginLeft: '35px',
  },
  topBarControlIconsStyle: {
    color: blueGrey500
  },
  topBarControlIconsHoveredStyle: {
    color: brown500
  },
  topControlBarLayoutPaperStyle: {
    position: 'relative',
    height: '100%',
    width: '99.7%',
    paddingRight: '10px',
    paddingLeft: '10px',
    display: 'inline-block',
    zDepth: 0,
    backgroundColor: '#d2dce7',
    marginTop: '10px'
  },
  tabsLayoutStyle: {
    marginRight: '8px',
    marginLeft: '5px',
  },
  tabContentStyle: {
    padding: '5px',
    paddingRight: '20px',
    paddingLeft: '20px',
    margin: '0px',
    borderStyle: 'solid',
    borderWidth: '0.2px',
    borderColor: grey400,
    backgroundColor: grey300,

  },
  contentViewBackgroundColor: grey300,
  secondaryTabContentStyle: {
    padding: '5px',
    paddingRight: '20px',
    paddingLeft: '20px',
    margin: '0px',
    borderStyle: 'solid',
    borderWidth: '0.2px',
    borderColor: grey400,
  },
  innerContentControlBarStyle: {
    position: 'relative',
    height: '100%',
    width: '100%',
    padding: '10px',
    display: 'inline-block',
    zDepth: 0,
    backgroundColor: '',
  },
  innerContentSideControlBarStyle: {
    backgroundColor: blueGrey50,
    borderStyle: 'solid',
    borderWidth: '1.0px',
    borderColor: blueGrey200,
  },
  innerContentSideControlBarSectionsStyle: {
    marginTop: '10px'
  },
  innerContentBottomMargin: {
    marginBottom: '10px'
  },
  innerContentControlBarNoColorStyle: {
    position: 'relative',
    height: '100%',
    width: '100%',
    padding: 10,
    display: 'inline-block',
    zDepth: 0,
  },

  elementCardStyle: {
    width: '100%',
    marginBottom: '10px',
    marginLeft: '-20px',
    borderBottom: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: grey400,
  },
  cardSelectDefaultStyle: {
    boxShadow: '',
    borderLeft: '',
    borderRight: '',
    borderLeftWidth: '0px',
    borderLeftColor: '#3c8dbc',
    borderRightWidth: '0px',
    borderRightColor: '#3c8dbc',
  },
  elementCardSelectedBackgorund: {
    boxShadow: '',
    borderLeft: 'solid',
    borderRight: 'solid',
    borderLeftWidth: '2px',
    borderLeftColor: lightBlue500,
    borderRightWidth: '2px',
    borderRightColor: lightBlue500,
  },
  grayBorder: {
    grayBorderStyle: 'solid',
    grayBorderWidth: '0.9px',
    grayBorderColor: grey400
  },
  widgetCardControlsBorder: {
    borderBottomStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#F5F5F5'
  },

  listBackgroundColor: '#f5f5f5',
};


module.exports = layoutStyle;
