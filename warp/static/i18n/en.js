
warpGlobals.i18n = { locale: 'en' }

warpGlobals.i18n.weekdaysShort = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

warpGlobals.i18n.datePicker = {
    firstDay: 0,    //first day of week
    i18n_object: {
        cancel:	'Cancel',
        clear: 'Clear',
        done: 'Ok',
        previousMonth: '‹',
        nextMonth: '›',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekdaysShort: warpGlobals.i18n.weekdaysShort,
        weekdaysAbbrev:['S','M','T','W','T','F','S'],
    },
};

warpGlobals.i18n.tabulatorLangs = {
    "default": {    //keep default, so setting locale is not needed
        "groups":{
			"item":"item",
			"items":"items",
        },
        "columns":{
        },
        "ajax":{
			"loading":"Loading",
			"error":"Error",
        },
        "pagination":{
			"page_size":"Page Size",
			"page_title":"Show Page",
            "first":"|«",
			"first_title":"First Page",
            "last":"»|",
			"last_title":"Last Page",
            "prev":"«",
			"prev_title":"Prev Page",
            "next":"»",
			"next_title":"Next Page",
			"all":"All",
        },
        "headerFilters":{
            "default":"filter",
            "columns":{}
        }
    }
};

warpGlobals.i18n.phrases = {
    btn: {
        "Login": "Login",
        "Add": "Add",
        "Cancel": "Cancel",
        "Delete": "Delete",
        "Save": "Save",
        'Yes': 'Yes',
        'No': 'No',
        'Ok': 'Ok',
        'Set': 'Set',
        "YES, I'M SURE": "YES, I'M SURE",
        "Generate password": "Generate password",
        "Book": "Book",
        "Update": "Update",
        "Remove": "Remove",
        "Assign": "Assign",
        "Enable": "Enable",
        "Disable": "Disable",
    },
    'Password': 'Password',
    'Bookings': 'Bookings',
    'Report': 'Report',
    'Users': 'Users',
    'Groups': 'Groups',
    'User name': 'User name',
    'Zone': 'Zone',
    'Seat': 'Seat',
    'Time': 'Time',
    'Login': 'Login',
    'From': 'From',
    'To': 'To',
    'Type': 'Type',
    'Group id': 'Group id',
    'Group name': 'Group name',
    "Group name cannot be empty.": "Group name cannot be empty.",
    "Are you sure to delete group: %{group}": "Are you sure to delete group: %{group}",
    "Select user": "Select user",
    'Members of: %{group}': 'Members of: %{group}',
    "Are you sure to remove %{user} from group %{group}?": "Are you sure to remove %{user} from group %{group}?",
    "Add to group %{group}": "Add to group %{group}",
    'Action successfull.': 'Action successfull.',
    'Error': 'Error',
    'Something went wrong (status=%{status}).': 'Something went wrong (status=%{status}).',
    'Are you sure to delete this booking?': 'Are you sure to delete this booking?',
    "Are you sure?": "Are you sure?",
    "Account type": "Account type",
    "Retype password": "Retype password",
    accountTypes: {
        "Admin": "Admin",
        "User": "User",
        "BLOCKED": "BLOCKED",
    },
    "Passwords don't match": "Hasła się nie zgadzają",
    "Name cannot be empty.": "Nazwisko nie może być puste",
    "All fields are mandatory": "Wszystkie pola są wymagane",
    "ARE YOU SURE TO DELETE USER: %{user}?": "CZY JESTEŚ PEWIEN, ŻE CHCESZ USUNĄĆ UŻYTKOWNIKA: %{user}?",
    "User has XXX bookin(s) ... ":
        "User has a booking in the past. Deleting the user will delete the past booking from the report.||||"+
        "User has %{smart_count} bookings in the past. Deleting the user will delete past bookings from the report.",
    "You will delete the log of user's past bookings. It is usually a better idea to BLOCK the user.":
        "You will delete the log of user's past bookings. It is usually a better idea to BLOCK the user.",
    "Are you sure to delete user: %{user}": "Are you sure to delete user: %{user}",
    "Select users to which the seat will be assigned:": "Select users to which the seat will be assigned:",


    "The seat is available to be booked on the selected dates and time.":
        "The seat is available to be booked on the selected dates and time.",
    "The seat is available to be booked on the selected dates and time. However, you have other bookings at that time which will be automatically updated.":
        "The seat is available to be booked on the selected dates and time. However, you have other bookings at that time which will be automatically updated.",
    "The seat is booked by another person or not available.":
        "The seat is booked by another person or not available.",
    "The seat is booked by you on the selected date and time.":
        "The seat is booked by you on the selected date and time.",
    "The seat is booked by you, but not exactly on the selected date or time. You can update booking, all your other reservations at that time will be automatically updated.":
        "The seat is booked by you, but not exactly on the selected date or time. You can update booking, all your other reservations at that time will be automatically updated.",
    "The seat is booked by you, but not exactly on the selected date or time. You CANNOT update the booking as it is conflicting with another user booking.":
        "The seat is booked by you, but not exactly on the selected date or time. You CANNOT update the booking as it is conflicting with another user booking.",
    "The same meaning as the green type icon, but the seat is assigned to you, not assigned people cannot book it. Note that assignment isn't necessarily exclusive, the seat can be assigned to more than one person.":
        "The same meaning as the green type icon, but the seat is assigned to you, not assigned people cannot book it. Note that assignment isn't necessarily exclusive, the seat can be assigned to more than one person.",
    "The same meaning as the green type icon, but the seat is assigned to you, not assigned people cannot book it. Note that assignment isn't necessarily exclusive, the seat can be assigned to more than one person.":
        "The same meaning as the green type icon, but the seat is assigned to you, not assigned people cannot book it. Note that assignment isn't necessarily exclusive, the seat can be assigned to more than one person.",
    "The seat is disabled, cannot be booked, and is not visible to non-admins.":
        "The seat is disabled, cannot be booked, and is not visible to non-admins.",
    "The seat is assigned to some people. This status is visible only to admins. Note that you won't see this icon if the seat is assigned to you.":
        "The seat is assigned to some people. This status is visible only to admins. Note that you won't see this icon if the seat is assigned to you.",
    "Book as": "Book as",
    "Seat %{seat_name}": "Seat %{seat_name}",
    "Assigned to:": "Assigned to:",
    "Bookings:": "Bookings:",
    "Seat %{seat_name} to be booked:": "Seat %{seat_name} to be booked:",
    "To be removed:": "To be removed:",
    "Seat is successfully disabled.<br>However there are existing reservations in the the next few weeks. Existing reservations are not automatically removed, it has to be done manually.<br><br>":
        "Seat is successfully disabled.<br>However there are existing reservations in the the next few weeks. Existing reservations are not automatically removed, it has to be done manually.<br><br>",
    "Seat is successfully assigned.<br>However there are non-assignees' existing reservations in the the next few weeks. Existing reservations are not automatically removed, it has to be done manually.<br><br>":
        "Seat is successfully assigned.<br>However there are non-assignees' existing reservations in the the next few weeks. Existing reservations are not automatically removed, it has to be done manually.<br><br>",
    "Warning": "Warning",
    "Change unsuccessfull": "Change unsuccessfull",
    "Unable to apply the change. Probably the seat was already booked by someone else.<br>Status: %{status}":
        "Unable to apply the change. Probably the seat was already booked by someone else.<br>Status: %{status}",
};