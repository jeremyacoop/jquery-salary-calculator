console.log('js');

$(document).ready(handleReady);

function handleReady() {
    console.log('jQuery is ready');
    $('#employeeSubmit').on('click', console.log('click'));
    $('#employeeSubmit').on('click', getEmployeeInfo());
    }

    empArray = [];
    function getEmployeeInfo(){
        // collect and store inputs
        let fn = $('#firstName').val();
        let ln = $('#lastName').val();
        let id = $('#idNumber').val();
        let jt = $('#jobTitle').val();
        let as = $('#annualSalary').val();
        // use inputs to build employee object
        empObject = {
            nameOne: fn,
            nameTwo: ln,
            ID: id,
            job: jt,
            Salary: as
        }
        empArray.push(empObject);
        console.log(empObject);
        console.log(empArray);
        calculateMonthlyCosts();
    }

    function calculateMonthlyCosts(employees){
        let empCosts = 0;
        for(i=0; i<empArray.length; i++){
            empCosts += employees[i].as;
        }
    }