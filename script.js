console.log('js');

$(document).ready(handleReady);

function handleReady() {
    console.log('jQuery is ready');
    $('#employeeSubmit').on('click', )
    }

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
    }

    function calculateCosts(){

    }