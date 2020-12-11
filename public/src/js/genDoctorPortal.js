console.log('HELLO DOCTOR');

// MOULE TO HANDLE GETTING DATA FROM DATABASE
const Database = (function() {

    // PUBLIC METHOD
    return{

    };
})();

// MODULE TO HANDLE BUSINESS LOGIC
const Logic = (function() {

    // PUBLIC METHOD
    return{

    };
})();

// MODULE TO HANDLE THE USER INTERFACE
const UI = (function() {
    // OBJECT TO HOLD ALL CLASS AND ID SELECTORS FROM UI
    const UISelector = {
      notificationBell: '.fa-bell-o',
      notificationCircle: '.fa-circle',
      hiddenNotificationBoard: '.hidden-notification-board',
      searchBtnType: '.search-type-btn',
      searchBtnTypeFilter: '.hidden-search-btn-type-filter',
      filterSearchBtn: '.search-filter-btn',
      hiddenFilterBoard: '.hidden-filter-search-board',
      genderFieldBtn: '.gender-field-btn',
      ageFieldBtn: '.age-field-btn',
      wardFieldBtn: '.ward-field-btn',
      dateAddFieldBtn: '.date-field-btn',
      genderList: '.gender-list',
      ageList: '.age-list',
      wardList: '.ward-list',
      dateList: '.date-list',
      searchByCheckBox: '.search-checkbox',
      genderFilterBox: '.gender-filter',
      ageFilterBox: '.age-filter',
      wardFilterBox: '.ward-filter',
      accordionFieldBtn: '.accordion-btn',
      resetFilterFieldBtn: '.reset-filter',
      filterFieldCheckBoxes: '.my-checkbox',
      dateInput: '#date-input',
    };

    // PUBLIC METHOD
    return{
      // FUNCTION RETUNRS ALL AVAILABLE CLASSES AND ID'S
      getUiSelectors: function() {
          return UISelector;
      },

      // FUNCTION TO CLEAR DUPLICATE SECTION
      clearDuplicateSelections: function(className, category) {
        if(category === 'searchBox') {
            document.querySelectorAll(UISelector.searchByCheckBox).forEach((cur) => {
                if(cur.classList[0] !== className) {
                    cur.checked = false;
                    console.log(cur);
                   // console.log('not it');
                }
          }); 
        } else if (category === 'genderBox') {
            document.querySelectorAll(UISelector.genderFilterBox).forEach((cur) => {
                if(cur.classList[0] !== className) {
                    cur.checked = false;
                    console.log(cur);
                   // console.log('not it');
                }
          });  
        } else if (category === 'ageBox') {
            document.querySelectorAll(UISelector.ageFilterBox).forEach((cur) => {
                if(cur.classList[0] !== className) {
                    cur.checked = false;
                    console.log(cur);
                   // console.log('not it');
                }
          }); 
        } else if (category === 'wardBox') {
            document.querySelectorAll(UISelector.wardFilterBox).forEach((cur) => {
                if(cur.classList[0] !== className) {
                    cur.checked = false;
                   // console.log('not it');
                }
          }); 
        }
      },

      // FUCNTION TO RESET FILTER FIELD
      clearFilters: function(selectors, dateInput) {
         document.querySelectorAll(selectors).forEach((cur) => {
              cur.checked = '';
         });
         
         document.querySelector(dateInput).value = '';
      },

      // FUNCTION TO CLOSE EXCESS ACCORDION FIELDS
      closeExcessAccordions: function(selector) {
          let arr = ['.gender-list', '.age-list', '.ward-list', '.date-list'];
          arr.forEach((cur) => {
              if(cur !== selector) {
                  document.querySelector(cur).style.height = `1px`;
              }
          });
      },

      // FUNCTION TO OPEN THE FILTER BOARD ACCORDION
      openAccordion: function(field) {
        if(field === '.gender-list') {
            document.querySelector(field).style.height = `75px`;
        } else if (field === '.age-list') {
            document.querySelector(field).style.height = `150px`; 
        } else if (field === '.ward-list') {
            document.querySelector(field).style.height = `110px`; 
        } else if (field === '.date-list') {
            document.querySelector(field).style.height = `50px`; 
        }
       
      },

      // FUNCTION TO CLOSE THE FILTER BOARD ACCORDION
      closeAccordion: function(field) {
          document.querySelector(field).style.height = `1px`;
      },

      // FUNCTION CLOSES DESIGNATED DIV'S
      closeBar: function(bar) {
        document.querySelector(bar).style.display = 'none';
      },

      // FUNCTION OPENS ANY DESIGNATED DIV'S
      openBar: function(bar, circle) {
          if( bar && !circle) {
            document.querySelector(bar).style.display = 'block'; 
          } else if (bar && circle) {
            document.querySelector(circle).style.display = 'none';
            document.querySelector(bar).style.display = 'block'; 
          }

      },

    };
})();

// MODULE TO ACT AS CENTRAL CONTROL FOR OTHER MODULES
const Controller = (function(UI, Logic, Database) {
    // VARIABLES HOLDING ACCES TO OTHER CODE MUDLE PUBLIC FUNCTION
    let uiSelectors = UI.getUiSelectors();
    let log = Logic;
    let db = Database;

    // HOLDS ALL EVENT LISTNERS
    const loadEventLitners = function() {
        // LISTNER FOR NOTIFIICATION BELL
        document.querySelector(uiSelectors.notificationBell).addEventListener('click', toggleNotifyBar);

        // LISTNER FOR THE SEARCH TYPE BUTTON
        document.querySelector(uiSelectors.searchBtnType).addEventListener('click', toggleSearchBtnFilter);

        // LISTNER FOR THE FILTER SEARCH BUTTON
        document.querySelector(uiSelectors.filterSearchBtn).addEventListener('click', toggleFilterBoard);

        // LISTNER FOR GENDER FIELD ACCORDION BUTTON
        document.querySelector(uiSelectors.genderFieldBtn).addEventListener('click', toggleGenderField);

        // LISTNER FOR AGE FIELD ACCORDION BUTTON
        document.querySelector(uiSelectors.ageFieldBtn).addEventListener('click', toggleAgeField);

        // LISTNER FOR WARD FIELD ACCORDION BUTTON
        document.querySelector(uiSelectors.wardFieldBtn).addEventListener('click', toggleWardField);

        // LISTNER FOR DATE OF ADMMISION BUTTON
        document.querySelector(uiSelectors.dateAddFieldBtn).addEventListener('click', toggleDateAddField);

        // LISTNER FOR THE SEARCH BY BUTTON
        document.querySelectorAll(uiSelectors.searchByCheckBox).forEach(cur => {
            cur.addEventListener('click', searchByOrFilter);
        });
        
        // LISTNER FOR THE GENDER CHECKBOX 
        document.querySelectorAll(uiSelectors.genderFilterBox).forEach((cur) => {
           cur.addEventListener('click', searchByOrFilter);
        });

        // LISTNER FOR THE AGE CHECKBOX
        document.querySelectorAll(uiSelectors.ageFilterBox).forEach((cur) => {
           cur.addEventListener('click', searchByOrFilter);
        });

        // LISTENER FOR THE WARD CHECKBOX
        document.querySelectorAll(uiSelectors.wardFilterBox).forEach((cur) => {
           cur.addEventListener('click', searchByOrFilter);
        });

        // LISTNER FOR THE CLEAR ALL FILTER FEILD BUTTON
        document.querySelector(uiSelectors.resetFilterFieldBtn).addEventListener('click', clearFilterFields); 

    };

    // function to clear all filter fields 
    const clearFilterFields = function() {
         UI.clearFilters(uiSelectors.filterFieldCheckBoxes, uiSelectors.dateInput); 
    };

    // function to cancel any other selected option
    const cancelAnyOtherOption = function(className, category) {
         UI.clearDuplicateSelections(className, category);
    };

    // search by function 
    const searchByOrFilter = function(e) {
        // do some thing, happens first ..
        // then call a function to cancel any other selected option
        let pin = e.target.classList[0];
        let pin2 = e.target.classList;

        if(pin2.contains('search-checkbox')) {
            cancelAnyOtherOption(pin, 'searchBox');
        } else if (pin2.contains('gender-filter')) {
            cancelAnyOtherOption(pin, 'genderBox');
        }else if (pin2.contains('age-filter')) {
            cancelAnyOtherOption(pin, 'ageBox');
        } else if (pin2.contains('ward-filter')) {
            cancelAnyOtherOption(pin, 'wardBox');
        }
        
    };

    // handle excess open filter fields 
    const handleExcessOpenAccordions = function(classlist, selector) {
        UI.closeExcessAccordions(selector);
    };

    // filter field control function
    const filterFieldControl = function(classlist, selector) {
        if(classlist.contains('open')) {
            UI.openAccordion(selector);
            classlist.remove('open');
            handleExcessOpenAccordions(classlist, selector);
        } else {
            UI.closeAccordion(selector);
            classlist.add('open');
        }
    };

     // toggle date of addmision field function
     const toggleDateAddField = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        filterFieldControl(pin, uiSelectors.dateList);
    };

    // toggle ward field function
    const toggleWardField = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        filterFieldControl(pin, uiSelectors.wardList);
    };

    // toggle Age field function 
    const toggleAgeField = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        filterFieldControl(pin, uiSelectors.ageList);
    };

    // toggle Gender Field function
    const toggleGenderField = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        filterFieldControl(pin, uiSelectors.genderList);
    };

    // toggle Filter Board function
    const toggleFilterBoard = function(e) {
        e.preventDefault();
        let pin = e.target.classList;

        if(pin.contains('active')) {
            UI.openBar(uiSelectors.hiddenFilterBoard);
            pin.add('text-info');
            pin.remove('active');
        } else {
            UI.closeBar(uiSelectors.hiddenFilterBoard);
            pin.remove('text-info');
            pin.add('active');
        }
    };

    // toggle Search Btn Filter funtion
    const toggleSearchBtnFilter = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        let pin2 = e.target.children[0].classList;

        if(pin.contains('active')) {
            UI.openBar(uiSelectors.searchBtnTypeFilter);
            pin.remove('active');
            pin2.remove('fa-chevron-up');
            pin2.add('fa-chevron-down');
        } else {
            UI.closeBar(uiSelectors.searchBtnTypeFilter);
            pin.add('active');
            pin2.remove('fa-chevron-down');
            pin2.add('fa-chevron-up');
        }

    };

    // toggle Notify Bar function
    const toggleNotifyBar = function(e) {
        let pin = e.target.classList;
        // console.log(pin);

        if(pin.contains('active')) {
            UI.openBar(uiSelectors.hiddenNotificationBoard, uiSelectors.notificationCircle);
            pin.add('text-info');
            pin.remove('active');
        } else {
            UI.closeBar(uiSelectors.hiddenNotificationBoard);
            pin.remove('text-info');
            pin.add('active');
        }
    
    };

    // PUBLIC METHOD
   return {
       init: function() {
        loadEventLitners();   
       }
   };
})(UI, Logic, Database);

// INITIALIZE APP CONTROLLER
Controller.init();