// This runs when document loads
(function () {
	$('section').hide();
})();

const showView = function () {
	$('section').hide();
	$('#view').show();
	$("#view").empty();

	// Loop through list of eomplyeess from the employee.js
	for (var i in employeeList) {
		$("#view").append("<div>" + employeeList[i].name + "</div>");
		$("#view").append("<div>" + employeeList[i].officeNum + "</div>");
		$("#view").append("<div>" + employeeList[i].phoneNum + "</div>");
		$("#view").append("<div>-------------------------</div>");
	}
};

const showAdd = function () {
	$('section').hide();
	$('#add').show();
};

const showVerify = function () {
	$('section').hide();
	$('#verify').show();
};

// Adds and employee to the list and then displays the list with them included
const addEmployee = function () {
	var newEmp = {};
	newEmp.name = $("#empName").val();
	newEmp.officeNum = $("#officeNum").val();
	newEmp.phoneNum = $("#phoneNum").val();
	employeeList.push(newEmp);

	$(".employeeDisplay").empty();
	// Loop through list of eomplyeess from the employee.js
	for (var i in employeeList) {
		$(".employeeDisplay").append("<div>" + employeeList[i].name + "</div>");
		$(".employeeDisplay").append("<div>" + employeeList[i].officeNum + "</div>");
		$(".employeeDisplay").append("<div>" + employeeList[i].phoneNum + "</div>");
		$(".employeeDisplay").append("<div>-------------------------</div>");
	}
};

// check if present
const verifyEmployee = function () {
	var searchForName = $("#searchName").val();

	$(".employeeVerifyDisplay").empty();
	// Loop through list of eomplyeess from the employee.js
	var found = false;
	for (var i in employeeList) {
		if (employeeList[i].name.toLowerCase() == searchForName.toLowerCase()) {
			found = true;
			$(".employeeVerifyDisplay").append("<div>Found: " + employeeList[i].name + "</div>");
		}
	}
	if (!found) {
		$(".employeeVerifyDisplay").append("<div>No employee with name: " + searchForName + " exists</div>");
	}
};


$('#viewBtn').on('click', showView);
$('#addBtn').on('click', showAdd);
$('#verifyBtn').on('click', showVerify);
$('#addEmployeeBtn').on('click', addEmployee);
$('#verifyEmployeeBtn').on('click', verifyEmployee);