'use strict';
import {
  orange500, blue100, cyan400, cyan600, blueGrey400,
  grey100, grey400, lightBlue500, grey500
  }
  from 'material-ui/styles/colors';

const componentsStyle = {
  contentHeaderStyle: {
    fontSize: '14px',
    margin: '10px',
    color: grey400,
  },
  textFieldStylestyleInputFields: {
    margin: '10px'
  },
  textFieldStyle: {
    errorStyle: {
      color: blue100,
    },
    underlineStyle: {
      borderColor: orange500,
    },
    floatingLabelStyle: {
      color: blue100,
    },
    floatingLabelFocusStyle: {
      color: blue100,
    },
    styleInputFields: {
      width: '100%',
      // borderStyle: 'solid',
      // borderWidth: '1px'
    }
  },
  paperStyle: {
    position: 'relative',
    height: '100%',
    width: '100%',
    padding: '5px',
    display: 'inline-block',
    zDepth: 0
  },
  paperStyle1: {
    position: 'relative',
    height: '100%',
    width: '100%',
    padding: '10px',
    display: 'inline-block',
    zDepth: 0
  },
  iconStyle: {
    marginTop: '10px',
    marginRight: '10px',
    marginLeft: '10px'
  },

  mapMarkerCardStyle: {
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px'
  },

  mapMarkerCardActionBarStyle: {
     boxShadow: '0px -1px 1px rgba(0, 0, 0, 0.12)',
     marginTop: '5px'
  },
  tabButtonStyle: {
    activeTabColor: cyan600,
    defaultTabColor: cyan400,
    fontSize: '16px',
  },
  buttonStyle: {
    margin: '5px',
    marginRight: '45px',
  },

  iconTextTopPadding: {
    marginTop: '-10px',
  },

  cardStyle: {
    cardTitleStyle: {
      fontSize: '18px',
      fontWeight: '300',
    },
    cardSubtitleStyle: {
      fontSize: '15px',
      fontWeight: '300',
    }
  },
  avatarDefaultStyle: {
    style: {
      marginRight: '5px',
    }
  },
  previewSelectedComponentStyle: {
    borderStyle: 'solid',
    borderWidth: '3.2px',
    borderColor: blueGrey400,
  },
  eventPreviewSelectedComponentBackground: {
    backgroundColor: grey100
  },

  previewSelectedComponentBackground: {
    backgroundColor: grey100
  },

  stepperStyle: {
    fontSize: '15px',
  },

  labelStyle: {
    fontSize: '16px',
    fontWeight: '300',
  },

  editorModeViewStyle: {
    position: 'relative',
    height: '100%',
    width: '100%',
    margin: 5,
    marginTop: 10,
    marginLeft: 15,
    display: 'inline-block',
    borderStyle: 'solid',
    borderWidth: '1.0px',
    borderColor: grey500,
    zDepth: 0
  },

  buttonLabelStyle: {
    fontWeight: '300'
  },
  ngoNameFontSize: '35px',
  header1FontSize: '26px',
  header2Font: {
    verticalAlign: 'middle'
  },
  header3Font: {
    fontSize: '24px',
    verticalAlign: 'middle'
  },
  headerAvatar: {
    marginTop: '6px',
    marginRight: '14px',
    marginLeft: '10px',
    float: 'left'
  },
  headerNgoName: {
    verticalAlign: 'middle',
    textAlign: 'left',
    color: '#FFF'
  },
  headerPunchLine: {
    textAlign: 'left',
    paddingLeft: '84px',
  },
  fadingHorizontalLineStyle: {
    margin: '3px 0',
    height: '1px',
    background: '#607D8B',
    background: '-webkit-gradient(linear, 0 0, 100% 0, from(#E0E0E0), to(#E0E0E0), color-stop(50%, #607D8B))'
  },

  listViewTitleFontSize: '20px',
  listViewTitleFontWeight: '200',
  listViewDetailsFontWeight: '200',
  listViewDetailsFontColor: 'gray',
  tabHeight: '52px',

  editorPreviewTitleStle: {
    fontSize: '21px'
  },
  icons: {
    width: '24px',
    height: '24px',
    color: '#999999',
    float: 'left'
  },
  iconsWhite: {
    width: '24px',
    height: '24px',
    color: '#FFF',
    float: 'left'
  },
  selectedIcons: {
    width: '24px',
    height: '24px',
    color: '#00bcd4',
    float: 'left'
  },
  dashboardCardWrapper: {
    position: 'relative', 
    marginTop: '10px'
  }
};


module.exports = componentsStyle;
