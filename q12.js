/* design a school system where we have multiple departments
Principles office - this is a class with methods == Parent
Accountancy // Billing LeaveManagement - these inherit from principles office == children

 */

let schoolFunds = 1000

let students = {
    name: null,
    age:null,
    height: null,
    class: null
}


let staff = {
    name: null,
    department: null,
    classes: null
}
class PrincipalsOffice {
    constructor(register, academies, schoolBoard, parentsInfo) {
        this.register = register
        this.academies = academies
        this.schoolBoard = schoolBoard
        this.parentsInfo = parentsInfo
    }

    takeRegister(){
        console.log(" x students are present")
    }
}

class BillingDepartment extends PrincipalsOffice {

    constructor(register, academies, schoolBoard, parentsInfo) {
        super(register, academies, schoolBoard, parentsInfo)
    }
    recordAccounts() {
        console.log("we have these accounts")
    }
}

class LeaveManagement extends PrincipalsOffice {
    constructor(register, academies, schoolBoard, parentsInfo) {
        super(register, academies, schoolBoard, parentsInfo);
    }
    bookLeave() {
        console.log("you have booked leave")
    }
}

class AccountancyDepartment extends PrincipalsOffice {
    constructor(register, academies, schoolBoard, parentsInfo) {
        super(register, academies, schoolBoard, parentsInfo);
    }
     checkFunds() {
        console.log(`we have ${schoolFunds} available`)
    }
}

let principalsOfficeInstance = new PrincipalsOffice("RegisterData", "AcademiesData", "BoardData", "ParentsInfo")
let billingDepartmentInstance = new BillingDepartment("RegisterData", "AcademiesData", "BoardData", "ParentsInfo")
let leaveManagementInstance = new LeaveManagement("RegisterData", "AcademiesData", "SchoolBoardData", "ParentsInfoData");
let accountancyInstance = new AccountancyDepartment("RegisterData", "AcademiesData", "SchoolBoardData", "ParentsInfoData");

principalsOfficeInstance.takeRegister()
billingDepartmentInstance.recordAccounts()
leaveManagementInstance.bookLeave()
accountancyInstance.checkFunds()
