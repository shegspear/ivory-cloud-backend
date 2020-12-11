console.log('running patient page JS file');

// MODULE TO HANDLE ANY BUSINESS LOGIC
const Logic = (function() {

  return{
  
  };
})();

// MODULE TO HANDLEE THE 
const UI = (function() {
      // Variable holding all classnames and ids
      const UISelector = {
          newVisitBtn: '.new-visit-btn',
          rootHead: '#root-head',
          rootBody: '#root-body',
          stateLink: '.state-link',
          dashBoardLink: '.dashboard-link',
          newVisitBtn: '.new-visit-btn',
          nurseStateBtn: '.nurse-state-btn',
          doctorStateBtn: '.doctor-state-btn',
      };

      // THE STATE PATTERN STARTS HERE
      // function to initialize the page state
      const PageState = function() {
          let currentState = new initialState(this);

          this.init = function() {
            this.change(new initialState);
          };

          this.change = function(state) {
            currentState = state;
          };
      };

      // HEAD TAB HOLDING PATIENT VISIT, APPOINTMENT and SURGERY
      const headTab = `
          <!-- CODES FOR CONTAINER TWO  -->
          <section class="cont-2 d-flex flex-row container my-3">
      
            <div class="cont-2-child-1 mr-3">
                <ul class="container-fluid mt-2 d-flex flex-row">
                    <li>
                      <i class="fa fa-user mt-4 ml-5"></i>
                    </li>
                    
                    <li class="mt-3 ml-4">
                      <p class="h5">Visits</p>
                      <p id="num-visit">104</p>
                    </li>
                </ul>
            </div>
      
            <div class="cont-2-child-2 mx-3">
              <ul class="container-fluid mt-2 d-flex flex-row">
                  <li>
                    <i class="fa fa-medkit mt-4 ml-3"></i>
                  </li>
                  
                  <li class="mt-3 ml-4">
                    <p class="h5">Appointment(s)</p>
                    <p id="num-visit">3</p>
                  </li>
              </ul>
            </div>
      
            <div class="cont-2-child-3 mx-3">
              <ul class="container-fluid mt-2 d-flex flex-row">
                  <li>
                    <i class="fa fa-heartbeat mt-4 ml-3"></i>
                  </li>
                  
                  <li class="mt-3 ml-4">
                    <p class="h5">Surgery</p>
                    <p id="num-visit">2</p>
                  </li>
              </ul>
            </div>
      
          </section>
      `;

      // Initial State
      const initialState = function(page) {
          document.querySelector(UISelector.rootHead).innerHTML = headTab;

          document.querySelector(UISelector.rootBody).innerHTML = `
              <!-- CODES FOR CONTAINER THREE -->
              <section class="cont-3 container my-5">
          
                  <div class="d-flex flex-row justify-content-between">
                      <p class="h5 mt-1 font-weight-bold">
                        Visit Activity
                      </p>
          
                      <button class="new-visit-btn btn btn-light text-info font-weight-bold">
                        NEW VISIT <i class="fa fa-plus-square-o ml-1"></i>
                      </button>
                  </div>
          
                  <table class="table table-hover">
          
                    <thead>
                      <tr>
                        <th scope="col">Doctor</th>
                        <th scope="col">Condition</th>
                        <th scope="col">Date</th>
                        <th scope="col">Visit Time</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
          
                    <tbody>
          
                      <tr>
                        <th scope="row" class="doctor-detail">
                          <img class="doctor-profile-picture" src="/images/assets/doctor-avatar/doc-avatar.jpg" alt="doctor profile picture">
                          <span class="doctor-name">Dr. Adeolu Kenny</span>
                        </th>
                        <td class="condition">Mumps Stage II</td>
                        <td class="date">Today</td>
                        <td class="visit-time">09:15am - 09:45am </td>
                        <td class="email">example@mail.com</td>
                      </tr>
          
                      <tr>
                        <th scope="row" class="doctor-detail">
                          <img class="doctor-profile-picture" src="/images/assets/doctor-avatar/doc-avatar.jpg" alt="doctor profile picture">
                          <span class="doctor-name">Dr. Adeolu Kenny</span>
                        </th>
                        <td class="condition">Mumps Stage II</td>
                        <td class="date">Today</td>
                        <td class="visit-time">09:15am - 09:45am </td>
                        <td class="email">example@mail.com</td>
                      </tr>
          
                      <tr>
                        <th scope="row" class="doctor-detail">
                          <img class="doctor-profile-picture" src="/images/assets/doctor-avatar/doc-avatar.jpg" alt="doctor profile picture">
                          <span class="doctor-name">Dr. Adeolu Kenny</span>
                        </th>
                        <td class="condition">Mumps Stage II</td>
                        <td class="date">Today</td>
                        <td class="visit-time">09:15am - 09:45am </td>
                        <td class="email">example@mail.com</td>
                      </tr>
          
                      <tr>
                        <th scope="row" class="doctor-detail">
                          <img class="doctor-profile-picture" src="/images/assets/doctor-avatar/doc-avatar.jpg" alt="doctor profile picture">
                          <span class="doctor-name">Dr. Adeolu Kenny</span>
                        </th>
                        <td class="condition">Mumps Stage II</td>
                        <td class="date">Today</td>
                        <td class="visit-time">09:15am - 09:45am </td>
                        <td class="email">example@mail.com</td>
                      </tr>
          
                      <tr>
                        <th scope="row" class="doctor-detail">
                          <img class="doctor-profile-picture" src="/images/assets/doctor-avatar/doc-avatar.jpg" alt="doctor profile picture">
                          <span class="doctor-name">Dr. Adeolu Kenny</span>
                        </th>
                        <td class="condition">Mumps Stage II</td>
                        <td class="date">Today</td>
                        <td class="visit-time">09:15am - 09:45am </td>
                        <td class="email">example@mail.com</td>
                      </tr>
          
                    </tbody>
          
                  </table>
          
                <div class="text-center mt-5">
                  <button class="btn btn-info px-5 view-all-btn">
                    VIEW ALL
                  </button>
                </div>
          
              </section>
          `;
      };

      // NEW VISIT NURSE STATE
      const nurseState = function() {
        document.querySelector(UISelector.rootHead).innerHTML = headTab;

        document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER FOUR NEW VISIT NURSE STATE-->
            <section class="cont-4 container my-5">
        
                <div class="d-flex flex-row justify-content-evenly ml-5">
        
                    <button class="nurse-state-btn new-visit-state-btn-active btn  mr-2 px-4 py-2">
                      Nurse
                    </button>
        
                    <button class="doctor-state-btn btn  mx-2 px-4 py-2">
                      Doctor
                    </button>
        
                    <button class="lab-state-btn btn  mx-2 px-4 py-2">
                      Lab Scientist
                    </button>
        
                </div>
        
                <div class="nurse-note new-visit-state-note p-5 ">
                    <form action="${window.location.href}/nursenote" method="post">
                      <div class="form-group nurse-note-form">
                        <label for="nurse note type">NOTE TYPE</label>
                        <input type="text" class="form-control nurse-note-type" name="title" id="nurse-note-type" aria-describedby="noteType">
                      </div>
        
                      <div class="form-group">
                        <label for="nurse note description">ENTER NOTE ON PATIENT</label>
                        <textarea class="form-control nurse-note-description" name="nursenote" id="nurse-note-desc" cols="30" rows="10"></textarea>
                      </div>
        
                      <button class="btn btn-info submit-nurse-note px-5">ADD NOTE</button>
                    </form>
                </div>
        
            </section>
        `;
      };

      // NEW VISIT DOCTOR STATE
      const doctorState = function(page) {
        document.querySelector(UISelector.rootHead).innerHTML = headTab;

        document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER FIVE NEW VISIT DOCTOR STATE -->
            <section class="cont-5 container my-5">
        
                  <div class="d-flex flex-row justify-content-evenly ml-5">
                    
                    <button class="nurse-state-btn btn mr-2 px-4 py-2">
                      Nurse
                    </button>
        
                    <button class="doctor-state-btn new-visit-state-btn-active btn mx-2 px-4 py-2">
                      Doctor
                    </button>
        
                    <button class="lab-state-btn btn  mx-2 px-4 py-2">
                      Lab Scientist
                    </button>
        
                </div>
        
                <div class="doctor-note new-visit-state-note p-5 ">
                  <form action="${window.location.href}/doctornote" method="post">
                    <div class="form-group doctor-note-form">
                      <label for="doctor note type">NOTE TYPE</label>
                      <input type="text" name="title" class="form-control doctor-note-type" id="doctor-note-type" aria-describedby="doctorType">
                    </div>
        
                    <div class="form-group">
                      <label for="doctor note description">ENTER NOTE ON PATIENT</label>
                      <textarea class="form-control doctor-note-description" name="doctornote" id="doctor-note-desc" cols="30" rows="10"></textarea>
                    </div>
        
                    <div class="form-group">
                      <label for="upload picture">Upload picture <i class="fa fa-upload ml-2 text-info"></i></label>
                      <input type="file" name="dfiles" class="form-control-file upload-picture" id="upload-picture">
                    </div>
        
                    <div class="d-flex flex-row justify-content-between mt-5">
                      <button class="btn btn-info submit-nurse-note px-5">ADD NOTE</button>
                    </div>
        
                  </form>
              </div>
        
            </section>
        `;
      };

      // NEW VISIT LAB SCI STATE
      const labSciState = function(page) {
        document.querySelector(UISelector.rootHead).innerHTML = headTab;

        document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER SIX NEW VISIT LAB SCIENTIST STATE -->
            <section class="cont-6 container my-5">
      
            <div class="d-flex flex-row justify-content-evenly ml-5">
                          
                <button class="nurse-state-btn btn mr-2 px-4 py-2">
                  Nurse
                </button>
      
                <button class="doctor-state-btn  btn mx-2 px-4 py-2">
                  Doctor
                </button>
      
                <button class="lab-state-btn btn new-visit-state-btn-active  mx-2 px-4 py-2">
                  Lab Scientist
                </button>
      
            </div>
      
            <div class="doctor-note new-visit-state-note p-5 ">
              <form>
                <div class="form-group doctor-note-form">
                  <label for="doctor note type">NOTE TYPE</label>
                  <input type="text" class="form-control doctor-note-type" id="doctor-note-type" aria-describedby="doctorType">
                </div>
      
                <div class="form-group">
                  <label for="doctor note description">TEST</label>
                  <textarea class="form-control doctor-note-description" name="doctor-note-description" id="doctor-note-desc" cols="30" rows="10"></textarea>
                </div>
      
                <div class="form-group">
                  <label for="upload picture">Upload picture <i class="fa fa-upload ml-2 text-info"></i> </label>
                  <input type="file" class="form-control-file upload-picture" id="upload-picture">
                </div>
      
                <div class="d-flex flex-row justify-content-between mt-5">
                  <button class="btn btn-info submit-nurse-note px-5">ADD NOTE</button>
                </div>
      
              </form>
            </div>
      
            </section>
        `;
      };

      // GENERAL  TEST STATE
      const testState = function() {
        document.querySelector(UISelector.rootHead).innerHTML = `
            <!-- CODES FOR CONTAINER SEVEN TEST STATE  -->
            <section class="cont-7 d-flex flex-row container my-5">
                
              <div class="cont-7-child-1 mr-3 text-center blood-test">
                <p class="h4 font-weight-bold mt-4 blood-test">Blood Test</p>
              </div>
        
              <div class="cont-7-child-2 mx-3 text-center urine-test">
                <p class="h4 font-weight-bold mt-4 urine-test">Urine Test</p>
              </div>
        
              <div class="cont-7-child-3 mx-3 text-center xray-test">
                <p class="h4 font-weight-bold mt-4 xray-test">X-ray</p>
              </div>
        
              <div class="cont-7-child-3 mx-3 text-center other-test">
                <p class="h4 font-weight-bold mt-4 other-test">Others</p>
              </div>
        
            </section>
        `; 
        
        document.querySelector(UISelector.rootBody).innerHTML = null; 
      };

      // GENERAL TEST -> BLOOD TEST STATE
      const bloodTestState = function() {
        document.querySelector(UISelector.rootHead).innerHTML = `
            <!-- CODES FOR CONTAINER SEVEN TEST STATE BLOOD TEST ACTIVE  -->
            <section class="cont-7 d-flex flex-row container my-5">
                
              <div class="cont-7-child-1 mr-3 text-center blood-test active-test">
                <p class="h4 font-weight-bold mt-4 blood-test">Blood Test</p>
              </div>
        
              <div class="cont-7-child-2 mx-3 text-center urine-test">
                <p class="h4 font-weight-bold mt-4 urine-test">Urine Test</p>
              </div>
        
              <div class="cont-7-child-3 mx-3 text-center xray-test">
                <p class="h4 font-weight-bold mt-4 xray-test">X-ray</p>
              </div>
        
              <div class="cont-7-child-3 mx-3 text-center other-test">
                <p class="h4 font-weight-bold mt-4 other-test">Others</p>
              </div>
        
            </section>
        `; 

        document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER EIGHT TEST STATE BLOOD TEST STATE  -->
            <section class="cont-8 container my-5">
              
              <form class="test-form p-3">
                <p class="h3 text-weight-bold u">
                  Request Blood Test
                </p>
        
                <div class="form-group">
                  <label for="enter date">Enter date</label>
                  <input type="date" class="form-control req-date-of-test" id="req-date-of-test" aria-describedby="date of test">
                </div>
        
                <div class="form-group">
                  <label for="enter time">Enter time</label>
                  <input type="time" class="form-control req-time-of-test" id="req-time-of-test" aria-describedby="time of test">
                </div>
        
                <div class="form-group">
                  <label for="enter name">Enter patient name</label>
                  <input type="text" class="form-control patient-name" id="patient-name" aria-describedby="patient name">
                </div>
        
                <div class="form-group">
                  <label for="enter patient reg number">Enter patient reg number</label>
                  <input type="text" class="form-control patient-reg-num" id="patient-reg-num" aria-describedby="patient registration number">
                </div>
        
                <div class="form-group">
                  <label for="enter patient symptons">Enter patient symptons</label>
                  <textarea class="form-control patient-sympt" name="patient-sympt" id="patient-sympt" cols="30" rows="10"></textarea>
                </div>
        
                <div class="mt-5 text-center">
                  <button class="btn btn-info submit-test-request">Request</button>
                </div>
        
              </form>
        
            </section> 
        `;
      }

      // GENERAL TEST -> URINE TEST STATE
      const urineTestState = function() {
        document.querySelector(UISelector.rootHead).innerHTML = `
            <!-- CODES FOR CONTAINER EIGHT TEST STATE URINE TEST ACTIVE  -->
            <section class="cont-7 d-flex flex-row container my-5">
                      
              <div class="cont-7-child-1 mr-3 text-center blood-test">
                <p class="h4 font-weight-bold mt-4 blood-test">Blood Test</p>
              </div>
        
              <div class="cont-7-child-2 mx-3 text-center urine-test active-test">
                <p class="h4 font-weight-bold mt-4 urine-test">Urine Test</p>
              </div>
        
              <div class="cont-7-child-3 mx-3 text-center xray-test">
                <p class="h4 font-weight-bold mt-4 xray-test">X-ray</p>
              </div>
        
              <div class="cont-7-child-3 mx-3 text-center other-test">
                <p class="h4 font-weight-bold mt-4 other-test">Others</p>
              </div>
        
            </section>
        `;

        document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER EIGHT TEST STATE URINE TEST STATE  -->
            <section class="cont-8 container my-5">
              
            <form class="test-form p-3">
              <p class="h3 text-weight-bold u">
                Request Urine Test
              </p>
      
              <div class="form-group">
                <label for="enter date">Enter date</label>
                <input type="date" class="form-control req-date-of-test" id="req-date-of-test" aria-describedby="date of test">
              </div>
      
              <div class="form-group">
                <label for="enter time">Enter time</label>
                <input type="time" class="form-control req-time-of-test" id="req-time-of-test" aria-describedby="time of test">
              </div>
      
              <div class="form-group">
                <label for="enter name">Enter patient name</label>
                <input type="text" class="form-control patient-name" id="patient-name" aria-describedby="patient name">
              </div>
      
              <div class="form-group">
                <label for="enter patient reg number">Enter patient reg number</label>
                <input type="text" class="form-control patient-reg-num" id="patient-reg-num" aria-describedby="patient registration number">
              </div>
      
              <div class="form-group">
                <label for="enter patient symptons">Enter patient symptons</label>
                <textarea class="form-control patient-sympt" name="patient-sympt" id="patient-sympt" cols="30" rows="10"></textarea>
              </div>
      
              <div class="mt-5 text-center">
                <button class="btn btn-info submit-test-request">Request</button>
              </div>
      
              </form>
      
            </section> 
        `;
      };


      // GENERAL TEST -> XRAY TEST STATE
      const xrayTestState = function() {
         document.querySelector(UISelector.rootHead).innerHTML = `
            <!-- CODES FOR CONTAINER NINE TEST STATE XRAY TEST ACTIVE  -->
            <section class="cont-7 d-flex flex-row container my-5">
                            
              <div class="cont-7-child-1 mr-3 text-center blood-test">
                <p class="h4 font-weight-bold mt-4 blood-test">Blood Test</p>
              </div>
        
              <div class="cont-7-child-2 mx-3 text-center urine-test">
                <p class="h4 font-weight-bold mt-4 urine-test">Urine Test</p>
              </div>
        
              <div class="cont-7-child-3 mx-3 text-center xray-test active-test">
                <p class="h4 font-weight-bold mt-4 xray-test">X-ray</p>
              </div>
        
              <div class="cont-7-child-3 mx-3 text-center other-test">
                <p class="h4 font-weight-bold mt-4 other-test">Others</p>
              </div>
        
            </section>
         `;

         document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER NINE TEST STATE XRAY TEST STATE  -->
            <section class="cont-8 container my-5">
                    
              <form class="test-form p-3">
                <p class="h3 text-weight-bold u">
                  Request X-ray Test
                </p>
        
                <div class="form-group">
                  <label for="enter date">Enter date</label>
                  <input type="date" class="form-control req-date-of-test" id="req-date-of-test" aria-describedby="date of test">
                </div>
        
                <div class="form-group">
                  <label for="enter time">Enter time</label>
                  <input type="time" class="form-control req-time-of-test" id="req-time-of-test" aria-describedby="time of test">
                </div>
        
                <div class="form-group">
                  <label for="enter name">Enter patient name</label>
                  <input type="text" class="form-control patient-name" id="patient-name" aria-describedby="patient name">
                </div>
        
                <div class="form-group">
                  <label for="enter patient reg number">Enter patient reg number</label>
                  <input type="text" class="form-control patient-reg-num" id="patient-reg-num" aria-describedby="patient registration number">
                </div>
        
                <div class="form-group">
                  <label for="enter patient symptons">Enter patient symptons</label>
                  <textarea class="form-control patient-sympt" name="patient-sympt" id="patient-sympt" cols="30" rows="10"></textarea>
                </div>
        
                <div class="mt-5 text-center">
                  <button class="btn btn-info submit-test-request">Request</button>
                </div>
        
                </form>
        
              </section> 
         `;
      };


      // GENERAL TEST -> OTHER TEST STATE
      const otherTestState = function() {
        document.querySelector(UISelector.rootHead).innerHTML = `
            <!-- CODES FOR CONTAINER TEN TEST STATE OTHER TEST ACTIVE  -->
            <section class="cont-7 d-flex flex-row container my-5">
                                
              <div class="cont-7-child-1 mr-3 text-center blood-test">
                <p class="h4 font-weight-bold mt-4 blood-test">Blood Test</p>
              </div>
        
              <div class="cont-7-child-2 mx-3 text-center urine-test">
                <p class="h4 font-weight-bold mt-4 urine-test">Urine Test</p>
              </div>
        
              <div class="cont-7-child-3 mx-3 text-center xray-test">
                <p class="h4 font-weight-bold mt-4 xray-test">X-ray</p>
              </div>
        
              <div class="cont-7-child-3 mx-3 text-center other-test active-test">
                <p class="h4 font-weight-bold mt-4 other-test">Others</p>
              </div>
      
            </section>
        `;

        document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER TEN TEST STATE OTHER TEST STATE  -->
            <section class="cont-8 container my-5">
                          
              <form class="test-form p-3">
                <p class="h3 text-weight-bold u">
                  Request Other Test
                </p>
        
                <div class="form-group">
                  <label for="enter date">Enter date</label>
                  <input type="date" class="form-control req-date-of-test" id="req-date-of-test" aria-describedby="date of test">
                </div>
        
                <div class="form-group">
                  <label for="enter time">Enter time</label>
                  <input type="time" class="form-control req-time-of-test" id="req-time-of-test" aria-describedby="time of test">
                </div>
        
                <div class="form-group">
                  <label for="enter name">Enter patient name</label>
                  <input type="text" class="form-control patient-name" id="patient-name" aria-describedby="patient name">
                </div>
        
                <div class="form-group">
                  <label for="enter patient reg number">Enter patient reg number</label>
                  <input type="text" class="form-control patient-reg-num" id="patient-reg-num" aria-describedby="patient registration number">
                </div>
        
                <div class="form-group">
                  <label for="enter patient symptons">Enter patient symptons / Test specification</label>
                  <textarea class="form-control patient-sympt" name="patient-sympt" id="patient-sympt" cols="30" rows="10"></textarea>
                </div>
        
                <div class="mt-5 text-center">
                  <button class="btn btn-info submit-test-request">Request</button>
                </div>
        
                </form>
        
              </section> 
        `;
      }

      // GENRAL PHARMACY STATE -> NURSE
      const pharmStateNurse = function() {
         document.querySelector(UISelector.rootHead).innerHTML = headTab;

         document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER TWELVE PHARM STATE -> NURSE-->
            <section class="cont-12 container my-5">
          
              <div class="d-flex flex-row justify-content-evenly ml-5">
      
                  <button class="nurse-pharm-state-btn pharm-state-btn-active btn  mr-2 px-4 py-2">
                    Nurse
                  </button>
      
                  <button class="doctor-pharm-state-btn btn  mx-2 px-4 py-2">
                    Doctor
                  </button>

                  <button class="pharm-state-btn btn  mx-2 px-4 py-2">
                  Pharmacist
                </button>
      
              </div>
      
              <div class="nurse-pharm-note pharm-state-note p-5 ">
                  <form action="${window.location.href}" method="post">

                    <div class="form-group presc">
                      <label for="prescription">Enter Drug</label>
                      <input type="text" name="drug" class="form-control presc-drug" id="nurse-presc-drug" aria-describedby="nurse prescription">
                    </div>

                    <div class="form-group presc">
                      <label for="prescription dose">Enter Drug Dose</label>
                      <input type="text" name="dose" class="form-control presc-drug-dose" id="nurse-presc-drug-dose" aria-describedby="nurse prescription dose">
                    </div>
      
                    <div class="form-group presc-note">
                      <label for="prescription note">Enter Note</label>
                      <textarea class="form-control presc-note" name="prescnote" id="nurse-presc-note" cols="30" rows="10"></textarea>
                    </div>

                    <div class="period-cont d-flex flex-row justify-content-start">

                      <div class="form-group presc">
                        <label for="prescription date">Enter Date</label>
                        <input type="date" class="form-control presc-date" id="nurse-presc-date" aria-describedby="nurse prescription date">
                      </div>

                      <div class="form-group presc ml-5">
                        <label for="prescription time">Enter Time</label>
                        <input type="time" class="form-control presc-time" id="nurse-presc-time" aria-describedby="nurse prescription time">
                      </div>
                      
                    </div>
      
                    <div class="button-cont d-flex flex-row justify-content-between">
                    <button type="submit" class="btn btn-info submit-presc px-5">Prescribe</button>

                    <button class="btn btn-light border border-dark create-new-presc">Create new prescription <i class="fa fa-pencil"></i> </button>
                    </div>

                  </form>
              </div>
      
          </section>
         `;
      };


      // GENRAL PHARMACY STATE -> DOCTOR
      const pharmStateDoc = function() {
        document.querySelector(UISelector.rootHead).innerHTML = headTab;

        document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER TWELVE PHARM STATE -> DOCTOR-->
            <section class="cont-12 container my-5">
                
            <div class="d-flex flex-row justify-content-evenly ml-5">
      
                <button class="nurse-pharm-state-btn btn  mr-2 px-4 py-2">
                  Nurse
                </button>
      
                <button class="doctor-pharm-state-btn pharm-state-btn-active btn  mx-2 px-4 py-2">
                  Doctor
                </button>
      
                <button class="pharm-state-btn btn  mx-2 px-4 py-2">
                  Pharmacist
                </button>
      
            </div>
      
            <div class="doctor-pharm-note pharm-state-note p-5 ">
              <form action="${window.location.href}" method="post">
      
                <div class="form-group presc">
                  <label for="doctor prescription">Enter Drug</label>
                  <input type="text" name="drug" class="form-control presc-drug" id="doc-presc-drug" aria-describedby="doctor prescription">
                </div>
      
                <div class="form-group presc">
                  <label for="doctor prescription dose">Enter Drug Dose</label>
                  <input type="text" name="dose" class="form-control presc-drug-dose" id="doc-presc-dose" aria-describedby="doctor prescription dose">
                </div>
      
                <div class="form-group presc-note">
                  <label for="doctor prescription note">Enter Note</label>
                  <textarea class="form-control presc-note" name="prescnote" id="doc-presc-note" cols="30" rows="10"></textarea>
                </div>
      
                <div class="period-cont d-flex flex-row justify-content-start">
      
                  <div class="form-group presc">
                    <label for="doctor prescription date">Enter Date</label>
                    <input type="date" name="date" class="form-control presc-date" id="doc-presc-date" aria-describedby="doctor prescription date">
                  </div>
      
                  <div class="form-group presc ml-5">
                    <label for="doctor prescription time">Enter Time</label>
                    <input type="time" name="time" class="form-control presc-time" id="doc-presc-time" aria-describedby="doctor prescription time">
                  </div>
                  
                </div>
      
                <div class="button-cont d-flex flex-row justify-content-between">
                <button type="submit" class="btn btn-info submit-presc px-5">Prescribe</button>
      
                <button class="btn btn-light border border-dark create-new-presc">Create new prescription <i class="fa fa-pencil"></i> </button>
                </div>
      
              </form>
            </div>
      
          </section>
        `;
      };

      // GENRAL PHARMACY STATE -> PHARMACIST
      const pharmStatePharm = function() {
        document.querySelector(UISelector.rootHead).innerHTML = headTab;

        document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER TWELVE PHARM STATE -> DOCTOR-->
            <section class="cont-12 container my-5">
                      
            <div class="d-flex flex-row justify-content-evenly ml-5">
      
                <button class="nurse-pharm-state-btn btn mr-2 px-4 py-2">
                  Nurse
                </button>
      
                <button class="doctor-pharm-state-btn btn mx-2 px-4 py-2">
                  Doctor
                </button>
      
                <button class="pharm-state-btn btn pharm-state-btn-active mx-2 px-4 py-2">
                  Pharmacist
                </button>
      
            </div> 
      
            <div class="pharm-pharm-note pharm-state-note p-5 ">
              <form action="${window.location.href}" method="post">
      
                <div class="form-group presc">
                  <label for="drug search">Search Drug</label>
                  <input type="search" name="drugSearch" class="form-control search-drug" id="search-drug" aria-describedby="pharmacist prescription">
                </div>
      
                <div class="status-cont d-flex flex-row justify-content-start">
      
                  <div class="form-group presc">
                    <label for="Drug status">Drug availability status</label>
                    <output type="text" name="drugavail" class="form-control drug-status" id="drug-status" aria-describedby="drug status">
                  </div>
      
                  <div class="form-group presc ml-5">
                    <label for="drug count">Drug count</label>
                    <input type="text" name="drugCount"class="form-control drug-count" id="drug-count" aria-describedby="drug amount">
                  </div>
                  
                </div>
      
                <div class="form-group presc-note">
                  <label for="pharmacist prescription note">Enter Note</label>
                  <textarea class="form-control presc-note" name="pharm-presc-note" id="pharm-presc-note" cols="30" rows="10"></textarea>
                </div>
      
                <div class="period-cont d-flex flex-row justify-content-start">
      
                  <div class="form-group presc">
                    <label for="pharmacist prescription date">Enter Date</label>
                    <input type="date" class="form-control presc-date" id="pharm-presc-date" aria-describedby="pharmacist prescription date">
                  </div>
      
                  <div class="form-group presc ml-5">
                    <label for="pharmacist prescription time">Enter Time</label>
                    <input type="time" class="form-control presc-time" id="pharm-presc-time" aria-describedby="pharmacist prescription time">
                  </div>
                  
                </div>
      
                <div class="button-cont d-flex flex-row justify-content-between">
                <button type="submit" class="btn btn-info dispense-drug-btn px-5">Dispense</button>
      
                <!-- <button class="btn btn-light border border-dark create-new-presc">Create new prescription <i class="fa fa-pencil"></i> </button> -->
                </div>
      
              </form>
            </div>
      
          </section>
        `;
      }

      // GENRAL WARD STATE
      const wardState = function() {
        document.querySelector(UISelector.rootHead).innerHTML = `
            <!-- CODES FOR CONTAINER THIRTEEN WARD STATE  -->
            <section class="cont-13 d-flex flex-row container my-5">
                                            
              <div class="cont-13-child-1 mr-3 text-center general-ward">
                <p class="h4 font-weight-bold mt-4 general-ward">General Ward</p>
              </div>
      
              <div class="cont-13-child-2 mx-3 text-center specific-ward">
                <p class="h4 font-weight-bold mt-4 specific-ward">Specific Ward</p>
              </div>
      
            </section>
        `;

        document.querySelector(UISelector.rootBody).innerHTML = null;
      };

      // WARD STATE -> GENERAL WARD
      const wardStateGeneral = function() {
         document.querySelector(UISelector.rootHead).innerHTML = `
            <!-- CODES FOR CONTAINER THIRTHEEN WARD STATE  -->
            <section class="cont-13 d-flex flex-row container my-5">
                                                    
                <div class="cont-13-child-1 mr-3 text-center general-ward active-ward">
                  <p class="h4 font-weight-bold mt-4 general-ward">General Ward</p>
                </div>
        
                <div class="cont-13-child-2 mx-3 text-center specific-ward">
                  <p class="h4 font-weight-bold mt-4 specific-ward">Specific Ward</p>
                </div>
        
            </section>
         `;

         document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER FOURTHEEN WARD STATE GENERAL WARD  -->
            <section class="cont-14 container d-flex flex-row mt-5 mb-3">
              
                <div class="cont-14-child-1 mr-3 p-3">
        
                    <i class="fa fa-medkit cont-14-icon-1 ml-3 mt-3"></i>
                    <p class="h5 font-weight-bold my-2">
                      General Care Ward
                    </p>
                    <p class="h6">
                      General care no need for one-on-one care.
                    </p>
        
                </div>
        
                <div class="cont-14-child-2 mx-5 p-3">
        
                  <i class="fa fa-ambulance cont-14-icon-2 ml-3 mt-3"></i>
                  <p class="h5 font-weight-bold my-2">
                    Intensive Care Unit
                  </p>
                  <p class="h6">
                    Specific care, those in dire need of one-on-one care.
                  </p>
        
                </div>
        
            </section>
        
            <!-- HIDDEN FILTER BOARD FOR GENERAL WARD -->
            <section class="container mb-5 hidden-boards d-flex flex-row">
        
                <div class="gen-care-ward-filter p-3">
                    <p class="h6 reset-filter gen-ward">
                      CLEAR ALL
                    </p>
        
                    <div class="field-title">
                        <span class="h4 text-dark font-bold">
                            GENDER
                        </span>
                        <button class="gender-field-btn gender accordion-btn open p-3"></button>
                    </div>
                    <ul class="gender-list">
                        <li class="gender-list-item male">
                            <span class="h5 text-dark">
                                Male
                            </span> 
                            <input type="checkbox" class="male-checkbox gender-filter my-checkbox mt-1 mr-2"  name="male" id="male-gender">
                        </li>
        
                        <li class="gender-list-item female">
                            <span class="h5 text-dark">
                                Female
                            </span> 
                            <input type="checkbox" class="female-checkbox gender-filter my-checkbox mt-1 mr-2"  name="female" id="female-gender">
                        </li>
                    </ul>
        
        
                    <div class="field-title">
                        <span class="h4 text-dark font-bold">
                            ROOM
                        </span>
                        <button class="room-field-btn room accordion-btn open p-3"></button>
                    </div>
                    <ul class="room-list">
                        <li class="room-list-item">
                            <span class="h5 text-dark">
                                Single room
                            </span> 
                            <input type="checkbox" class="room-1-checkbox room-filter my-checkbox mt-1 mr-2"  name="room-1" id="room-1">
                        </li>
        
                        <li class="room-list-item">
                            <span class="h5 text-dark">
                                Room of 10
                            </span> 
                            <input type="checkbox" class="room-2-checkbox room-filter my-checkbox mt-1 mr-2"  name="room-2" id="room-2">
                        </li>
        
                        <li class="room-list-item">
                            <span class="h5 text-dark">
                                Room of 20
                            </span> 
                            <input type="checkbox" class="room-3-checkbox room-filter my-checkbox mt-1 mr-2"  name="room-3" id="room-3">
                        </li>
        
                        <li class="room-list-item">
                            <span class="h5 text-dark">
                                Suite
                            </span> 
                            <input type="checkbox" class="room-4-checkbox room-filter my-checkbox mt-1 mr-2"  name="room-4" id="room-4">
                        </li>
                    </ul>
        
                    <div class="field-title">
                        <span class="h4 text-dark font-bold">
                            Available bed(s)
                        </span>
                        <span class="room-status font-weight-bold mr-2">20</span>
                    </div>
        
                    <div class="d-flex flex-row my-3 justify-content-center">
                        <button class="btn btn-info px-5 py-2 rounded save-btn">
                            Save
                        </button>
                    </div>
        
                </div>
        
        
                <div class="icu-ward-filter p-3">
                    <p class="h6 reset-filter icu-ward">
                      CLEAR ALL
                    </p>
        
                    <div class="field-title">
                        <span class="h4 text-dark font-bold">
                            GENDER
                        </span>
                        <button class="gender-field-btn gender accordion-btn open p-3"></button>
                      </div>
                      <ul class="gender-list">
                        <li class="gender-list-item male">
                            <span class="h5 text-dark">
                                Male
                            </span> 
                            <input type="checkbox" class="male-checkbox gender-filter my-checkbox mt-1 mr-2"  name="male" id="male-gender">
                        </li>
        
                        <li class="gender-list-item female">
                            <span class="h5 text-dark">
                                Female
                            </span> 
                            <input type="checkbox" class="female-checkbox gender-filter my-checkbox mt-1 mr-2"  name="female" id="female-gender">
                        </li>
                      </ul>
        
                      <div class="field-title">
                        <span class="h4 text-dark font-bold">
                            ROOM
                        </span>
                        <button class="room-field-btn room accordion-btn open p-3"></button>
                      </div>
                      <ul class="room-list">
                        <li class="room-list-item">
                            <span class="h5 text-dark">
                                Room of 10
                            </span> 
                            <input type="checkbox" class="room-1-checkbox room-filter my-checkbox mt-1 mr-2"  name="room-1" id="room-1">
                        </li>
            
                        <li class="room-list-item">
                            <span class="h5 text-dark">
                                Suite
                            </span> 
                            <input type="checkbox" class="room-2-checkbox room-filter my-checkbox mt-1 mr-2"  name="room-2" id="room-2">
                        </li>
                    </ul>
        
                    <div class="field-title">
                      <span class="h4 text-dark font-bold">
                          Available bed(s)
                      </span>
                      <span class="room-status font-weight-bold mr-2">20</span>
                  </div>
        
                  <div class="d-flex flex-row my-3 justify-content-center">
                      <button class="btn btn-info px-5 py-2 rounded save-btn">
                          Save
                      </button>
                  </div>
        
                  </div>
        
            </section>
         `;
      }; 

        // WARD STATE -> SPECIFIC WARD
        const wardStateSpecific = function() {
           document.querySelector(UISelector.rootHead).innerHTML = `
              <!-- CODES FOR CONTAINER THIRTHEEN WARD STATE  -->
              <section class="cont-13 d-flex flex-row container my-5">
                                                      
                <div class="cont-13-child-1 mr-3 text-center general-ward">
                  <p class="h4 font-weight-bold mt-4 general-ward">General Ward</p>
                </div>
        
                <div class="cont-13-child-2 mx-3 text-center specific-ward active-ward">
                  <p class="h4 font-weight-bold mt-4 specific-ward">Specific Ward</p>
                </div>
        
              </section>
           `;

           document.querySelector(UISelector.rootBody).innerHTML = `
              <!-- CODES FOR CONTAINER FIFTHEEN WARD STATE SPECIFIC WARD  -->
              <section class="cont-15 container d-flex flex-row justify-content-between my-5">
        
                  <div class="cont-15-child-1 p-3 mr-2">
                      <i class="fa fa-child cont-15-icon-1"></i>
                      <p class="h4 font-weight-bold my-3">Paediatric Ward</p>
                      <div class="field-title">
                        <span class="h5 text-dark">
                            Available bed(s)
                        </span>
                        <span class="room-status mr-2">20</span>
                      </div>
                      <button class="btn btn-info px-4 ml-5 save-btn-paediatric-ward">Save</button>
                  </div>
        
                  <div class="cont-15-child-2 p-3 mx-3">
                    <i class="fa fa-ambulance cont-15-icon-2"></i>
                    <p class="h4 font-weight-bold my-3">Maternity Ward</p>
                    <div class="field-title">
                      <span class="h5 text-dark">
                          Available bed(s)
                      </span>
                      <span class="room-status mr-2">20</span>
                    </div>
                    <button class="btn btn-info px-4 ml-5 save-btn-maternity-ward">Save</button>
                  </div>
        
                  <div class="cont-15-child-3 p-3 mx-3">
                    <i class="fa fa-user-md cont-15-icon-3"></i>
                    <p class="h4 font-weight-bold my-3">Psychiatric Ward</p>
                    <div class="field-title">
                      <span class="h5 text-dark">
                          Available bed(s)
                      </span>
                      <span class="room-status mr-2">20</span>
                    </div>
                    <button class="btn btn-info px-4 ml-5 save-btn-psychiatric-ward">Save</button>
                  </div>
        
                  <div class="cont-15-child-4 p-3 mx-3">
                    <i class="fa fa-wheelchair cont-15-icon-4"></i>
                    <p class="h4 font-weight-bold my-3">Geriatric Ward</p>
                    <div class="field-title">
                      <span class="h5 text-dark">
                          Available bed(s)
                      </span>
                      <span class="room-status mr-2">20</span>
                    </div>
                    <button class="btn btn-info px-4 ml-5 save-btn-geriatric-ward">Save</button>
                  </div>
        
              </section> 
           `;
        };

      // PUBLIC METHODS
      return{
        // function to get all class names and ids from the UI
        getUiSelectors: function() {
            return UISelector;
        },

        // function to remove note from pharm prescription state
        removePresc: function(e) {
          e.preventDefault();
          let point = e.target.parentElement.parentElement;
          //  console.log(point);
          point.remove();
        },

        // function to add note from pharm prescription state
        addPrescNote: function(e) {
          e.preventDefault();
          // console.log('create presc note');

          let div1 = document.createElement('div');
          let div2 = document.createElement('div');
          let div3 = document.createElement('div');

          let label1 = document.createElement('label');
          let label2 = document.createElement('label');

          let input1 = document.createElement('input');
          let input2 = document.createElement('input');

          let deleteLink = document.createElement('a');

          deleteLink.setAttribute('href', '#');
          deleteLink.className = 'delete-presc';
          deleteLink.innerHTML = `<i class="fa fa-times delete-presc"></i>`

          input1.className = 'form-control nurse-presc';
          input2.className = 'form-control nurse-presc';

          label1.textContent = 'Enter Drug';
          label2.textContent = 'Enter Drug Dose';
          
          div1.className = 'form-group nurse-presc';
          div2.className = 'form-group nurse-presc';

          div1.append(label1, input1);
          div2.append(label2, input2);

          div3.append(deleteLink, div1, div2);

          let pointOfEntry = document.querySelector(UISelector.rootBody).children[0].children[1].children[0].children[2];
          // console.log(pointOfEntry);
          pointOfEntry.insertAdjacentElement("beforebegin", div3);
          // pointOfEntry.insertAdjacentElement("beforebegin", div2);
        },

        // function to check active link and relocate it
        checkActiveLink: function(selector, className) {
           document.querySelectorAll(selector).forEach(cur => {
            
                if(cur.classList[0] !== className) {
                   cur.classList.remove('text-primary');
                  // console.log(cur);
                }
           });
        },

        // This function sets up the needed in the UI DOM
        getMyState: function(state) {
           if(state === 'initialState') {
            // function to setup the initial state of the page
            const page = new PageState();
            page.change(new initialState);

           } else if (state === 'nurseState') {
            // function to setup new visit nurse state 
            const page = new PageState();
            page.change(new nurseState);

           } else if (state === 'doctorState') {
            // function to setup new visit doctor state
            const page = new PageState();
            page.change(new doctorState);

           } else if (state === 'labSciState') {
            // function to setup new visit doctor state
            const page = new PageState();
            page.change(new labSciState);

           } else if (state === 'testState') {
             // function to setup general test state
             const page = new PageState();
             page.change(new testState);

           } else if (state === 'bloodTestState') {
             // fucntion to setup blood test state
             const page = new PageState();
             page.change(new bloodTestState);

           } else if (state === 'urineTestState') {
               // fucntion to setup urine test state
               const page = new PageState();
               page.change(new urineTestState);

           } else if (state === 'xrayTestState') {
               // fucntion to setup xray test state
               const page = new PageState();
               page.change(new xrayTestState);

           } else if (state === 'otherTestState') {
               // fucntion to setup xray test state
               const page = new PageState();
               page.change(new otherTestState);

           } else if (state === 'pharmStateNurse') {
               // fucntion to setup pharmacy state nurse
               const page = new PageState();
               page.change(new pharmStateNurse);

           } else if (state === 'pharmStateDoc') {
               // fucntion to setup pharmacy state doctor
               const page = new PageState();
               page.change(new pharmStateDoc);

           } else if (state === 'wardState') {
               // fucntion to setup ward state
               const page = new PageState();
               page.change(new wardState);

           } else if (state === 'wardStateGen') {
              // function to setup ward state general ward
              const page = new PageState();
              page.change(new wardStateGeneral);

           } else if (state === 'wardStateSpe') {
               // function to setup ward state specific ward
               const page = new PageState();
               page.change(new wardStateSpecific);

           } else if (state == 'pharmStatePharm') {
                // fucntion to setup pharmacy state pharmacist
                const page = new PageState();
                page.change(new pharmStatePharm);

           }


        },

      };
})();

// MODULE TO CONTROLL UI AND LOGIC MODULE
const Controller = (function(UI, Logic) {
      // LOAD IN CODE MODULES
      const ui = UI;
      const logic = Logic;

      // LOAD IN UI SELECTORS
      const uiSelectors = ui.getUiSelectors();

      // EVENT LISTNERS
      const loadEventListners = function() {
         // EVENT LISTNER FOR THE LINKS IN STATE NAVIGATION OPTIONS
         document.querySelectorAll(uiSelectors.stateLink).forEach((cur) => {
          cur.addEventListener('click', sortMyState);
         });

          // HAD TOO SET UP THIS EVENT LISTNER IN THE ROOT HEAD, CAUSE OF BUGS and in hind site DRY
          document.querySelector(uiSelectors.rootHead).addEventListener('click', getState);

         // HAD TOO SET UP THIS EVENT LISTNER IN THE ROOT BODY, CAUSE OF BUGS and in hind site DRY
         document.querySelector(uiSelectors.rootBody).addEventListener('click', getState);
       
      };

      // sort my state function
      const sortMyState = function(e) {
          e.preventDefault();
          let pointClass = e.target.classList;
          let pointId = e.target.id;
          
          if(pointClass.contains('dashboard-link')) {
            ui.getMyState('initialState');
            pointClass.add('text-primary');
            ui.checkActiveLink(uiSelectors.stateLink, pointClass[0]);

          } else if (pointClass.contains('test-link')) {
            ui.getMyState('testState');
            pointClass.add('text-primary');
            ui.checkActiveLink(uiSelectors.stateLink, pointClass[0]);

          } else if (pointClass.contains('pharm-link')) {
            ui.getMyState('pharmStateNurse');
            pointClass.add('text-primary');
            ui.checkActiveLink(uiSelectors.stateLink, pointClass[0]);

          } else if (pointClass.contains('ward-link')) {
            ui.getMyState('wardState');
            pointClass.add('text-primary');
            ui.checkActiveLink(uiSelectors.stateLink, pointClass[0]);

          }
      };

      // get state function
      const getState = function(e) {
         let point = e.target;
        //  console.log(point);

         if(point.classList.contains('new-visit-btn') || point.classList.contains('nurse-state-btn')) {
            ui.getMyState('nurseState');
            
         } else if (point.classList.contains('doctor-state-btn')) {
            ui.getMyState('doctorState');
           
         } else if (point.classList.contains('lab-state-btn')) {
            ui.getMyState('labSciState');

         } else if (point.classList.contains('blood-test')) {
            ui.getMyState('bloodTestState');

         } else if (point.classList.contains('urine-test')) {
            ui.getMyState('urineTestState');

         } else if (point.classList.contains('xray-test')) {
            ui.getMyState('xrayTestState');

         } else if (point.classList.contains('other-test')) {
            ui.getMyState('otherTestState');

         } else if (point.classList.contains('create-new-presc')) {
            ui.addPrescNote(e);

         } else if (point.classList.contains('delete-presc')) {
            ui.removePresc(e);

         } else if (point.classList.contains('nurse-pharm-state-btn')) {
            ui.getMyState('pharmStateNurse');

         } else if (point.classList.contains('doctor-pharm-state-btn')) {
             ui.getMyState('pharmStateDoc');

         } else if (point.classList.contains('general-ward')) {
            ui.getMyState('wardStateGen');

         } else if (point.classList.contains('specific-ward')) {
            ui.getMyState('wardStateSpe');

         } else if (point.classList.contains('pharm-state-btn')) {
            ui.getMyState('pharmStatePharm');

         }
      };


      // PULIC METHODS
      return{
        init: function() {
            ui.getMyState('initialState');
            loadEventListners();
        }
  };
})(UI, Logic);

Controller.init();