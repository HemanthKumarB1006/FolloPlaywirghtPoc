// locators/loginLocators.js
 
 const loginLocators = {
  emailField: 'input[type="email"]',
  passwordField: 'input[type="password"]',
  submitButton: 'button[type="submit"]',
  SettingDropdown: 'text=" Settings "',
  redirectUrlAfterLogin: 'https://test.folloit.com/all-calender',
  loginPageUrl: 'https://test.folloit.com/login',
  
  // Gate
  clickGate: 'text="Gates"',
  clickAddNewGate: 'text=" Add New Gate "',
  enterGateInput: 'input[placeholder="Gate Name*"]',
  searchGate: '//div[@class="search-icon"]',
  hoverToSearchInput: 'input[placeholder="What you are looking for?"]',
  outputGate: 'td[class="text-center"]',
  // Equipment
  clickEquipment: 'text="Equipment"',
  clickAddNewEquipment: 'text="New Equipment"',
  enterEquipmentName: 'input[placeholder="Equipment Name*"]',
  enterEquipmentType: 'select[placeholder="Equipment Type"]',
  enterContactName: 'select[formcontrolname="controlledBy"]',
  hoverToSearchEquipmentInput: 'input[placeholder="What are you looking for?"]',
  outputEquipment: 'td[class="text-center"]',
  
  // Company
  clickcompany: '//span[contains(text(),"Companies")]',
  clickNewCompany: 'text="New Company"',
  modalCloseButton: 'img[alt="Modal Close"]',
  popupCancelButton: 'text=" Cancel "',
  buttonYes: 'text="Yes"',
  buttonNo: 'text="No"',
  enterCompanyName: 'input[type="text"]',
  enterAddressLine1: '(input[type="text"])[3]',
  enterAddressLine2: '(input[type="text"])[4]',
  clickCompanySubmit: 'button[type="submit"]',
  searchCompanies: 'div[class="icon"]',
  getCompaniesName: 'div[class=\"my-auto\"])[2]',
  clickApplyButton: 'text=" Apply "]',
  clickFilterIcon: 'div[class="filter-icon"]',
  clickFliterCompanyName: 'input[type="text"]',
  clickApplyButton: 'text=" Apply "',

  // DFOW
  clickDFOW: 'text="Definable Feature Of Work"',
  clickAddRow: 'text=" Add Row "]',
  enterDFOWName: 'input[type="text"])[2]',
  clickDFOWSaveButton:'button[type="submit"]',
  searchDFOW: 'input[placeholder="What are you looking for?"]',

  // Delivery Booking Creation
  clickALLBookings: 'text=" All Bookings "',
  clickDeliveryBookings: 'text="Delivery Bookings"]',
  clickCreateNewDeliveryBookings: 'text=" Create New "]',
  enterDeliveryDescription: 'textarea[placeholder="Enter Description"]',
  selectGate: 'select[formcontrolname="GateId"]',
  selectEquipment: 'select[formcontrolname="EquipmentId"]',
  selectRecurrence: 'select[formcontrolname="recurrence"]',
  buttonCancelDelivery: 'text()=" Cancel "',
  buttonSubmitDelivery: 'text()="Submit "',
  clickDeliveryDate: 'input[formcontrolname="deliveryDate"]',
  selectTodayDate: 'span[class="today selected"]',
  buttonModelClose: 'img[alt="Modal Close"]',
  searchDeliveryBookings: 'input[placeholder="What are you looking for?"]',
  locationDropdownArrow: 'span[class="dropdown-multiselect__caret"])[4]',
  chooseLocation: 'text="Choose Location"',
  searchLocation: 'input[placeholder="Search"])[4]',
  selectLocation: 'text="Location"]',
  getDeliveryData: 'span[class="c-pointer"])[2]',
  enterFromTimeHH: 'input[placeholder="HH"])[1]',
  enterFromTimeMM: 'input[placeholder="MM")[1]',
  enterToTimeHH: 'input[placeholder="HH"])[2]',
  enterToTimeMM: 'input[placeholder="MM"])[2]',

  // Crane Booking Creation
  clickAllBookings: 'text=" All Bookings "',
  clickCraneBookings: 'text="Crane Bookings"]',
  clickCreateNewCraneBookings: 'text=" Create New "]',
  enterCraneDescription: 'textarea[placeholder="Enter Description"]',
  selectCrane: 'select[formcontrolname="CraneId"]',
  buttonCancelCrane: 'text()=" Cancel "',
  buttonSubmitCrane: 'text()="Submit "',
  clickCraneDate: 'input[formcontrolname="deliveryDate"]',
  selectTodayDate: 'span[class="today selected"]',
  buttonModelClose: 'img[alt="Modal Close"]',
  searchCraneBookings: 'input[placeholder="What are you looking for?"]',
  locationDropdownArrow: 'span[class="dropdown-multiselect__caret"])[4]',
  chooseLocation: 'text="Choose Location"',
  searchLocation: 'input[placeholder="Search"])[4]',
  selectLocation: 'text="Location"]',
  getCraneData: 'span[class="c-pointer"])[2]',
  enterFromTimeHH: 'input[placeholder="HH"])[1]',
  enterFromTimeMM: 'input[placeholder="MM")[1]',
  enterToTimeHH: 'input[placeholder="HH"])[2]',
  enterToTimeMM: 'input[placeholder="MM"])[2]',
  pickingFrom: 'textarea[placeholder="Picking From"]',
  pickingTO: 'textarea[@placeholder="Picking To"]'








  




  





  
  
};
 
 module.exports = {...loginLocators }; 