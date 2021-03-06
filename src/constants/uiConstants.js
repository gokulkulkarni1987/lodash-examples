'use strict';

const uiConstants = {
  UI_COMMON_GRID_SPACING: 8,

  SGOBJECT_EVENT: 'SGOBJECT_EVENT',

  SG_QUERY_PARAM_EVENT_EDIT_MODE: 'edit',
  SG_QUERY_PARAM_EVENT_VIEW_MODE: 'view',
  SG_QUERY_PARAM_EVENT_MANAGE_MODE: 'manage',


  SG_QUERY_PARAM_VOLUNTEER_CAMPAIGN_EDIT_MODE: 'edit',
  SG_QUERY_PARAM_VOLUNTEER_CAMPAIGN_VIEW_MODE: 'view',
  SG_QUERY_PARAM_VOLUNTEER_CAMPAIGN_MANAGE_MODE: 'manage',

  SGOBJECT_VIEW_MODE: 'VIEW',
  SGOBJECT_CREATE_MODE: 'CREATE',
  SGOBJECT_EDIT_MODE: 'EDIT',
  NGO_MICROSITE_TEMPLATE_SIMPLE: 'NGO_MICROSITE_TEMPLATE_SIMPLE',

  EVENT_TEMPLATE_SIMPLE_TITLE: 'Simple Event',
  EVENT_TEMPLATE_WITH_REGISTRANTS_TITLE: 'Member Event',
  EVENT_TEMPLATE_MULTI_SESSION_TITLE: 'Event With Multi-Sessions',
  POPULAR_EVENT_TEMPLATE_TITLE: 'Popular Event',
  FLYER_EVENT_TITLE: 'Flyer Event',

  EVENT_TEMPLATE_SIMPLE: 'EVENT_TEMPLATE_SIMPLE',
  EVENT_TEMPLATE_WITH_REGISTRANTS: 'EVENT_TEMPLATE_WITH_REGISTRANTS',
  EVENT_TEMPLATE_MULTI_SESSION: 'EVENT_TEMPLATE_MULTI_SESSION',
  POPULAR_EVENT_TEMPLATE: 'POPULAR_EVENT_TEMPLATE',
  FLYER_EVENT_TEMPLATE: 'FLYER_EVENT_TEMPLATE',

  EVENT_TEMPLATE_SIMPLE_NAME: 'Simple Event',
  EVENT_TEMPLATE_FLYER_NAME: 'Flyer Event',
  EVENT_TEMPLATE_WITH_REGISTRANTS_NAME: 'Member Event',
  EVENT_TEMPLATE_MULTI_SESSION_NAME: 'Multi Session Event',

  EVENTS_MAP_VIEW: 'EVENTS_MAP_VIEW',
  EVENTS_LIST_VIEW: 'EVENTS_LIST_VIEW',
  EVENTS_TILE_VIEW: 'EVENTS_TILE_VIEW',

  VOLUNTEER_CAMPAIGN_LIST_VIEW: 'VOLUNTEER_CAMPAIGN_LIST_VIEW',
  VOLUNTEER_CAMPAIGN_MAP_VIEW: 'VOLUNTEER_CAMPAIGN_MAP_VIEW',

  MICROSITE_TEMPLATE_SIMPLE_TITLE: 'Simple Microsite',
  MICROSITE_TEMPLATE_WITH_REGISTRANTS_TITLE: 'Microsite With Registrants',
  MICROSITE_TEMPLATE_MULTI_SESSION_TITLE: 'Microsite With Multi-Sessions',
  POPULAR_MICROSITE_TEMPLATE_TITLE: 'Popular Microsite',
  FLYER_MICROSITE_TEMPLATE_TITLE: 'Flyer Microsite',
  MEMBER_MICROSITE_TEMPLATE_TITLE: 'Member Microsite',

  MICROSITE_TEMPLATE_SIMPLE: 'MICROSITE_TEMPLATE_SIMPLE',
  MICROSITE_TEMPLATE_WITH_REGISTRANTS: 'MICROSITE_TEMPLATE_WITH_REGISTRANTS',
  MICROSITE_TEMPLATE_MULTI_SESSION: 'MICROSITE_TEMPLATE_MULTI_SESSION',
  POPULAR_MICROSITE_TEMPLATE: 'POPULAR_MICROSITE_TEMPLATE',
  FLYER_MICROSITE_TEMPLATE: 'FLYER_MICROSITE_TEMPLATE',
  MEMBER_MICROSITE_TEMPLATE: 'MEMBER_MICROSITE_TEMPLATE',

  VOLUNTEER_CAMPAIGN_TEMPLATE_SIMPLE_TITLE: 'Simple Volunteer Campaign',
  VOLUNTEER_CAMPAIGN_TEMPLATE_WITH_REGISTRANTS_TITLE: 'Volunteer Campaign With Registrants',
  VOLUNTEER_CAMPAIGN_TEMPLATE_MULTI_SESSION_TITLE: 'Volunteer Campaign With Multi-Sessions',
  POPULAR_VOLUNTEER_CAMPAIGN_TEMPLATE_TITLE: 'Popular Volunteer Campaign',
  MEMBER_VOLUNTEER_TEMPLATE_TITLE: 'Member Volunteer Campaign',
  FLYER_VOLUNTEER_TEMPLATE_TITLE: 'Flyer Volunteer Campaign',

  VOLUNTEER_CAMPAIGN_TEMPLATE_SIMPLE: 'VOLUNTEER_CAMPAIGN_TEMPLATE_SIMPLE',
  VOLUNTEER_CAMPAIGN_TEMPLATE_WITH_REGISTRANTS: 'VOLUNTEER_CAMPAIGN_TEMPLATE_WITH_REGISTRANTS',
  VOLUNTEER_CAMPAIGN_TEMPLATE_MULTI_SESSION: 'VOLUNTEER_CAMPAIGN_TEMPLATE_MULTI_SESSION',
  POPULAR_VOLUNTEER_CAMPAIGN_TEMPLATE: 'POPULAR_VOLUNTEER_CAMPAIGN_TEMPLATE',
  POPULAR_VOLUNTEER_TEMPLATE: 'POPULAR_VOLUNTEER_TEMPLATE',
  MEMBER_VOLUNTEER_TEMPLATE: 'MEMBER_VOLUNTEER_TEMPLATE',
  FLYER_VOLUNTEER_TEMPLATE: 'FLYER_VOLUNTEER_TEMPLATE',

  VOLUNTEER_CAMPAIGN_TEMPLATE_SIMPLE_NAME: 'Simple Volunteer Campaign',
  VOLUNTEER_CAMPAIGN_TEMPLATE_WITH_REGISTRANTS_NAME: 'Volunteer Campaign With Registrants',
  VOLUNTEER_CAMPAIGN_TEMPLATE_MULTI_SESSION_NAME: 'Multi Session Volunteer Campaign',

  VOLUNTEER_CAMPAIGNS_MAP_VIEW: 'VOLUNTEER_CAMPAIGNS_MAP_VIEW',
  VOLUNTEER_CAMPAIGNS_LIST_VIEW: 'VOLUNTEER_CAMPAIGNS_LIST_VIEW',
  VOLUNTEER_CAMPAIGNS_TILE_VIEW: 'VOLUNTEER_CAMPAIGNS_TILE_VIEW',
//

  //DONATION
  DONATION_CAMPAIGN_LIST_VIEW: 'DONATION_CAMPAIGN_LIST_VIEW',
  DONATION_CAMPAIGN_MAP_VIEW: 'DONATION_CAMPAIGN_MAP_VIEW',
  DONATION_CAMPAIGN_TEMPLATE_SIMPLE_TITLE: 'Member Donation',
  DONATION_CAMPAIGN_TEMPLATE_WITH_REGISTRANTS_TITLE: 'Donation Campaign With Registrants',
  DONATION_CAMPAIGN_TEMPLATE_MULTI_SESSION_TITLE: 'Donation Campaign With Multi-Sessions',
  POPULAR_DONATION_CAMPAIGN_TEMPLATE_TITLE: 'Popular Donation Campaign',
  DONATION_PLEDGING_TEMPLATE_TITLE: 'Donation Pledging',
  FLYER_DONATION_TITLE: 'Flyer Donation',

  DONATION_CAMPAIGN_TEMPLATE_SIMPLE: 'DONATION_CAMPAIGN_TEMPLATE_SIMPLE',
  DONATION_CAMPAIGN_TEMPLATE_WITH_REGISTRANTS: 'DONATION_CAMPAIGN_TEMPLATE_WITH_REGISTRANTS',
  DONATION_CAMPAIGN_TEMPLATE_MULTI_SESSION: 'DONATION_CAMPAIGN_TEMPLATE_MULTI_SESSION',
  POPULAR_DONATION_CAMPAIGN_TEMPLATE: 'POPULAR_DONATION_CAMPAIGN_TEMPLATE',
  FLYER_DONATION_TEMPLATE: 'FLYER_DONATION_TEMPLATE',

  DONATION_CAMPAIGN_TEMPLATE_SIMPLE_NAME: 'Simple Donation Campaign',
  DONATION_CAMPAIGN_TEMPLATE_FLYER_NAME: 'Flyer Donation',
  DONATION_CAMPAIGN_TEMPLATE_WITH_REGISTRANTS_NAME: 'Donation Campaign With Registrants',
  DONATION_CAMPAIGN_TEMPLATE_MULTI_SESSION_NAME: 'Multi Session Donation Campaign',

  DONATION_CAMPAIGNS_MAP_VIEW: 'DONATION_CAMPAIGNS_MAP_VIEW',
  DONATION_CAMPAIGNS_LIST_VIEW: 'DONATION_CAMPAIGNS_LIST_VIEW',
  DONATION_CAMPAIGNS_TILE_VIEW: 'DONATION_CAMPAIGNS_TILE_VIEW',

  //
  DEFAULT_LOGO: 'images/icons/defaultLogo.png',
  DEFAULT_PROFILE_PHOTO: 'images/icons/default-avatar.svg',
  DEFAULT_BANNER: 'https://storage.googleapis.com/ngoapp_dev_source/banner_default.png',

  SG_OBJECTS: {
    EVENT_OBJECT: 'Event',
    VOLUNTEER_OBJECT: 'Volunteer',
    DONATION_OBJECT: 'Donation'
  },
  TEMPLATE_CARDS: {
    HEADER_CARD: 'HEADER_CARD',
    POPULAR_HEADER_CARD: 'POPULAR_HEADER_CARD',
    DATE_TIME_CARD: 'DATE_TIME_CARD',
    START_DATE_TIME_CARD: 'START_DATE_TIME_CARD',
    COORDINATOR_DETAILS_CARD: 'COORDINATOR_DETAILS_CARD',
    REGISTRANTS_CARD: 'REGISTRANTS_CARD',
    BANNER_CARD: 'BANNER_CARD',
    BANNER_CARD_No_BORDER: 'BANNER_CARD_No_BORDER',
    DESCRIPTION_CARD: 'DESCRIPTION_CARD',
    ADDRESS_CARD: 'ADDRESS_CARD',
    REGISTRATION_TYPE_CARD: 'REGISTRATION_TYPE_CARD',
    SESSIONS_CARD: 'SESSIONS_CARD',
    REGISTER_CONTROL_CARD: 'REGISTER_CONTROL_CARD',
    MICROSITE_SGCAMPAIGN_CARD: 'MICROSITE_SGCAMPAIGN_CARD',
  },
  TEMPLATE_FIELDS: {
    TITLE_FIELD: 'title',
  },

  UI_SO_EVENT_CREATE_PUBLISH_STAGE: 'UI_SO_EVENT_CREATE_PUBLISH_STAGE',
  UI_SO_EVENT_CREATE_REGISTRATION_FORM_STAGE: 'UI_SO_EVENT_CREATE_REGISTRATION_FORM_STAGE',
  UI_SO_EVENT_CREATE_TEMPLATE_DEFINE_STAGE: 'UI_SO_EVENT_CREATE_TEMPLATE_DEFINE_STAGE',

  UI_RADIO_BTN_SMALL_FONT_TITLE: 'Small',
  UI_RADIO_BTN_REGULAR_FONT_TITLE: 'Regular',
  UI_RADIO_BTN_LARGE_FONT_TITLE: 'Large',

  UI_RADIO_BTN_SMALL_IMAGE_TITLE: '32',
  UI_RADIO_BTN_REGULAR_IMAGE_TITLE: '64',
  UI_RADIO_BTN_LARGE_IMAGE_TITLE: '100',

  FONT_SMALL: '16px',
  FONT_REGULAR: '20px',
  FONT_LARGE: '26px',
  MOB_FONT_SMALL: 16,
  MOB_FONT_REGULAR: 20,
  MOB_FONT_LARGE: 26,

  IMAGE_SMALL: 32,
  IMAGE_REGULAR: 64,
  IMAGE_LARGE: 100,

  DATE_FORMAT_DD_MM_YYYY: 'DD-MM-YYYY',
  DATE_FORMAT_DD_MMM_YYYY: 'DD-MMM-YYYY',

  TIME_FORMAT_12Hr: '12Hr',
  TIME_FORMAT_24Hr: '24Hr',

  CARD_COLLAPSIBLE_TITLE: 'Collapsible',
  CARD_NON_COLLAPSIBLE_TITLE: 'Non Collapsible',

  iconsPath: [
    'images/dashboard/icons/Events_gray_64x64.png',
    'images/dashboard/icons/Volunteering_gray_64x64.png',
    'images/dashboard/icons/Donation_gray_64x64.png'
  ]
};


module.exports = uiConstants;
