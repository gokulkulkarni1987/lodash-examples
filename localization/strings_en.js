'use strict';


const LOCALIZED_STRINGS = {
  PAGE_TITLE_DASHBOARD: 'Dashboard',
  PAGE_TITLE_EVENTS: 'Events',
  PAGE_TITLE_VOLUNTEER_CAMPAIGNS: 'Volunteer Campaigns',
  PAGE_TITLE_DONATION_CAMPAIGNS: 'Donation Campaigns',

  PAGE_TITLE_CREATE_EVENT: 'New Event',
  PAGE_TITLE_EVENT_DETAILS: 'Event: ',
  PAGE_TITLE_VOLUNTEER_CAMPAIGN_DETAILS: 'Volunteer Campaign: ',
  PAGE_TITLE_DONATION_CAMPAIGN_DETAILS: 'Donation Campaign: ',


  PAGE_TITLE_NGO_PROFILE: 'NGO Profile',
  PAGE_TITLE_MICROSITE_TITLE: 'Microsite',

  NO_EVENTS_MESSAGE: 'There are no events to show',
  EVENT_CREATE_SUCCESS_MESSAGE: 'A new event is successfully created',
  EVENT_UPDATE_SUCCESS_MESSAGE: 'Event is successfully updated',
  MICROSITE_UPDATE_MESSAGE: 'Microsite is successfully updated',
  PROFILE_UPDATE_MESSAGE: 'Profile is successfully updated',
  NEW_USER_SIGN_IN_FAIL_UNKNOWN_RESON:
  'Oops something went wrong, kindly contact us to resolve the isse',
  NEW_USER_LOGIN_FAIL_MESSAGE:
  'Looks like you are new to SociallyGood, kindly register as NGO before signing.',
  NEW_USER_LOGIN_FAIL_INVALID_PASSWORD_MESSAGE:
  'Wrong password, Try again or click forgot password to reset it',
  NEW_USER_LOGIN_FAIL_INVALID_OTP_MESSAGE: 'Kindly enter proper OTP to sign in',
  NEW_USER_LOGIN_FAIL_EXPIRED_OTP_MESSAGE: 'The OTP you have entered is expired, kindly re-login',
  EMAIL_NOT_VERIFIED_MESSAGE:
  'Looks like your email has not been verified, kindly verify your email id by clicking on the link sent to your email',
  VERIFY_EMAIL_MESSAGE:
  'An email will be sent with verification link, kindly verify your email by clicking on the link',
  EXISTING_USER_MESSAGE:
  'Looks like you already have an account, Kindly login to continue',
  WELCOME_MESSAGE_FOR_NGO_SIGNUP:
  ' You are registered with Socially Good, Kindly login and update your NGO details',

  NO_REGISTRANTS_MESSAGE: 'Nobody has registered for this event',

  INVALID_INPUT: 'Kindly check your input',

  PROFILE_UPDATE_SUCCESS_MESSAGE: 'Your profile has been updated successfully.',

  VOLUNTEER_CAMPAIGN_CREATE_SUCCESS_MESSAGE: 'A new volunteer campaign is successfully created',
  NO_VOLUNTEER_CAMPAIGNS_MESSAGE: 'There are no volunteer campaigns to show',
  VOLUNTEER_CAMPAIGN_UPDATE_SUCCESS_MESSAGE: 'Volunteer campaign is successfully updated',
  VOLUNTEER_CAMPAIGN_REGISTRATION_OPEN_TIME_LINE_MESSAGE:
  'Registration opened for interested volunteers',
  VOLUNTEER_CAMPAIGN_REGISTRATION_CLOSED_TIME_LINE_MESSAGE:
  'Registration closed for volunteers',
  VOLUNTEER_CAMPAIGN_NUMBER_OF_REGISTRATIONS_TIME_LINE_MESSAGE:
  'new volunteers have joined.',

  VOLUNTEER_WORK_ASSIGN_SUCCESS: 'Work has been assigned successfully',
  VOLUNTEER_WORK_ASSIGN_FAIL:
    'Oops something went wrong while assigning work, kindly try again later',

  VOLUNTEER_COMMUNICATION_SUCCESS: 'Message has been sent successfully',
  VOLUNTEER_COMMUNICATION_FAIL: 'Unable to send message, kindly try again later',

  VOLUNTEER_ASSIGN_WORK_TIME_LINE_FEED: 'New work has been assigned: ',
  VOLUNTEERING_REQUEST_WORK_TIME_LINE_FEED: 'Request received for volunteering',
  VOLUNTEER_EMAIL_COMMUNICATION: 'An email sent ',

// Donation
  DONATION_CAMPAIGN_CREATE_SUCCESS_MESSAGE:
    'A new donation campaign is successfully created',
  DONATION_CAMPAIGN_UPDATE_SUCCESS_MESSAGE: 'Donation Campaign is successfully updated',

//

  PUBLISH_UNAUTHORIZED_MESSAGE: 'Sorry you can not publish, Your account is still under review',

  UPDATE_CONTACT_EMAIL_WARNING_MESSAGE: 'Kindly update contact email id',
  UI_SAVE_BUTTON_TITLE: 'Save',
  UI_CANCEL_BUTTON_TITLE: 'Cancel',
  UI_UPDATE_BUTTON_TITLE: 'Update',
  UI_UPDATE_REGISTRATION_FORM_BUTTON_TITLE: 'Update Registration Form',
  UI_PUBLISH_BUTTON_TITLE: 'Publish',
  UI_UN_PUBLISH_BUTTON_TITLE: 'Unpublish',

  UI_EDIT_EVENT_BUTTON_TOOL_TIP: 'Edit Event',
  UI_DELETE_EVENT_BUTTON_TOOL_TIP: 'Delete Event',

  UI_CARD_CONTROLS_TITLE: 'Card Controls',
  UI_WIDGET_CONTROLS_TITLE: 'Widget Controls',
  UI_TEMPLATES_CONTROLS_TITLE: 'Template Controls',
  UI_TEMPLATES_TITLE: 'Choose Template',

  UI_GENERAL_TEMPLATE_TAB_TITLE: 'General',
  UI_EDUCATION_TEMPLATE_TAB_TITLE: 'Education',
  UI_ENVIRONMENT_TEMPLATE_TAB_TITLE: 'Environment',
  UI_CREATE_EVENT_TAB_TITLE: 'Create',
  UI_EDIT_EVENT_TAB_TITLE: 'Edit',
  UI_MANAGE_EVENT_TAB_TITLE: 'Manage',

  UI_CHOOSE_TEMPLATE_STEPPER_STEP_TITLE: 'Choose Template',
  UI_CREATE_EVENT_STEPPER_STEP_TITLE: 'Details',
  UI_REGISTRATION_FORM_STEPPER_STEP_TITLE: 'Registration Form',
  UI_PUBLISH_EVENT_STEPPER_STEP_TITLE: 'Publish',

  UI_PUBLISH_VOLUNTEER_CAMPAIGN_STEPPER_STEP_TITLE: 'Publish',
  UI_CREATE_VOLUNTEER_CAMPAIGN_STEPPER_STEP_TITLE: 'Details',

  //Donation
  UI_PUBLISH_DONATION_CAMPAIGN_STEPPER_STEP_TITLE: 'Publish',
  UI_CREATE_DONATION_CAMPAIGN_STEPPER_STEP_TITLE: 'Details',

  //
  UI_CREATE_MICROSITE_STEPPER_STEP_TITLE: 'Details',
  UI_PUBLISH_MICROSITE_STEPPER_STEP_TITLE: 'Publish',

  UI_EVENT_TAGS_INPUT_TEXT_PLACE_HOLDER: 'Type event category and hit enter key',
  UI_EVENT_TAG_INPUT_TEXT_PLACE_HOLDER: 'Tag Line',
  UI_EVENT_TITLE_INPUT_TEXT_PLACE_HOLDER: 'Title',
  UI_EVENT_DESCRIPTION_PLACE_HOLDER: 'Description',
  UI_EVENT_LOGO_INPUT_PLACE_HOLDER: 'Logo',
  UI_EVENT_BANNER_PLACE_HOLDER: 'Banner Image',
  UI_EVENT_COORDINATOR_NAME_PLACE_HOLDER: 'Co-Ordinator Name',
  UI_EVENT_COORDINATOR_MOBILE_PLACE_HOLDER: 'Co-Ordinator Mobile',
  UI_EVENT_COORDINATOR_EMAIL_PLACE_HOLDER: 'Co-Ordinator Email',
  UI_EVENT_LOCATION_HOLDER: 'Location',
  UI_EVENT_START_DATE_PLACE_HOLDER: 'Start Date',
  UI_EVENT_END_DATE_PLACE_HOLDER: 'End Date',
  UI_EVENT_START_TIME_PLACE_HOLDER: 'Start Time',
  UI_EVENT_END_TIME_PLACE_HOLDER: 'End Time',
  UI_EVENT_LOCATION_PLACE_HOLDER: 'Location',
  UI_EVENT_DATE_TIME_PLACE_HOLDER: 'Date Time',
  UI_EVENT_CATEGORY_PLACE_HOLDER: 'Category',
  UI_EVENT_REGISTRANTS_PLACE_HOLDER: 'Registrants',
  UI_EVENT_REGISTRATION_TYPE_PLACEHOLDER_HOLDER: 'Enter registration type & click + button',
  UI_EVENT_REGISTRATION_TYPE_HEADER_HOLDER: 'Register As',

  UI_EVENT_DETAILS_TITLE: 'Event Details',
  UI_EVENT_REGISTRATION_FORM_TITLE: 'Registration Form',
  UI_EVENT_REGISTRATION_FORM_TITLE_LABEL: 'Form title',
  UI_ENTER_FORM_TITLE_PLACE_HOLDER: 'Enter form title',
  UI_FIRST_NAME_INPUT_FIELD_LABLE: 'First Name',
  UI_LAST_NAME_INPUT_FIELD_LABLE: 'Last Name',
  UI_EMAIL_PLACE_HOLDER: 'Email',
  UI_MOBILE_PLACE_HOLDER: 'Mobile',

  UI_VOLUNTEER_CAMPAIGN_DETAILS_TITLE: 'Volunteer Campaign Details',

  UI_SHOW_SET_BORDER_CHECK_BOX_TITLE: 'Show Border',
  UI_EVENT_VISIBILITY_CONTROL_AREA_TITLE: 'Event Visibility',
  UI_VOLUNTEER_CAMPAIGN_VISIBILITY_CONTROL_AREA_TITLE: 'Volunteer Campaign Visibility',
  UI_SIDEBAR_DATE_CARD_CHOOSE_DATE_FORMAT_TITLE: 'Choose Date Format',
  UI_SIDEBAR_DATE_CARD_CHOOSE_TIME_FORMAT_TITLE: 'Choose Time Format',
  UI_REGISTRANTS_CARD_TITLE: 'Registrants',
  UI_VOLUNTEERS_CARD_TITLE: 'Volunteers',
  UI_DONATIONS_CARD_TITLE: 'Donations',
  UI_DONATION_CAMPAIGN_DETAILS_TITLE: 'Donations Campaign Details',
  UI_DONATION_CAMPAIGN_REGISTRATION_FORM_TITLE: 'Donation Form',
  UI_DONATION_CAMPAIGN_REGISTRATION_FORM_TITLE_LABEL: 'Donation form title',
  UI_DONATION_FORM_STEPPER_STEP_TITLE: 'Donation Form',
  UI_DONATION_AMOUNT_FIELD_LABEL: 'Donation Amount',

  UI_FLYER_TEMPLATE_ADDITIONAL_INFO: 'Campaign Details',
  UI_FLYER_TEMPLATE_TITLE_LABEL: 'Campaign Title',
  UI_FLYER_TEMPLATE_TITLE_PLACEHOLDER: 'Enter Campaign Title'
};

module.exports = LOCALIZED_STRINGS;
