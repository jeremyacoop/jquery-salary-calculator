console.log('js');

$(document).ready(handleReady);

function handleReady() {
    console.log('jQuery is ready');
    // test submit button
    $('#employeeSubmit').on('click', function(){console.log('click')});
    $('#employeeSubmit').on('click', getEmployeeInfo);
    }

    employeeArray = [];
    function getEmployeeInfo(){
        // verify input data
        if($('#firstName').val() === ""){
            alert('First name is required');
        }else if($('#lastName').val() === ""){
            alert('Last name is required');
        }else if($('#idNumber').val() === ""){
            alert('ID is required');
        }else if($('#jobTitle').val() === ""){
            alert('Job title is required');
        }else if($('#annualSalary').val() === ""){
            alert('Annual salary is required');
        }else if($('#annualSalary').val() == NaN){
            alert('Salary must be a number');
        }
        // collect and store inputs
        let fn = $('#firstName').val();
        let ln = $('#lastName').val();
        let id = $('#idNumber').val();
        let jt = $('#jobTitle').val();
        let as = $('#annualSalary').val();
        console.log(as);
        // use inputs to build employee object
        employeeObject = {
            nameOne: fn,
            nameTwo: ln,
            ID: id,
            job: jt,
            Salary: as
        }
        employeeArray.push(employeeObject);
        console.log(employeeObject);
        console.log(employeeArray);
        calculateMonthlyCosts(employeeArray);
    }

    function calculateMonthlyCosts(employees){
        let employeeCosts = 0;
        for(i=0; i<employeeArray.length; i++){
            employeeCosts += employees[i].as;
        }
        console.log(employeeCosts);
        monthlyCosts = employees/12;
        console.log(employees)
    }