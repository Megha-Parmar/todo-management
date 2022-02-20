// USA
export const locale = {
	lang: 'en',
	data: {
		TRANSLATOR: {
			SELECT: 'Select your language',
		},
		MENU: {
			NEW: 'new',
			ACTIONS: 'Actions',
			CREATE_POST: 'Create New Post',
			PAGES: 'Pages',
			FEATURES: 'Features',
			APPS: 'Apps',
			DASHBOARD: 'Dashboard',
		},
		AUTH: {
			COMMON: {
				MAIN_TITLE: 'Welcome to Todo-Mangement',
				COPY_RIGHT: "Todo-Mangement"
			},
			GENERAL: {
				OR: 'Or',
				SUBMIT_BUTTON: 'Submit',
				NO_ACCOUNT: 'Don\'t have an account?',
				SIGNUP_BUTTON: 'User Setup',
				FORGOT_BUTTON: 'Forgot Password',
				BACK_BUTTON: 'Back',
				PRIVACY: 'Privacy',
				LEGAL: 'Legal',
				CONTACT: 'Contact',
			},
			LOGIN: {
				TITLE: 'Login Account',
				BUTTON: 'Sign In',
				MAIN_TITLE: 'Sign In',
				LABEL: {
					EMAIL: "Email",
					PASSWORD: "Password"

				},
				ERROR_MESSAGE: {
					REQUIRED_EMAIL: "Please enter email.",
					REQUIRED_PASSWORD: "Please enter password.",
					PATTERN_EMAIL: "Invalid email.",
				},
				API_SUCCESS_MESSAGE: {

				}
			},
			FORGOT: {
				TITLE: 'Forgotten Password?',
				DESC: 'Enter your email to reset your password',
				SUCCESS: 'Your account has been successfully reset.'
			},
			REGISTER: {
				TITLE: 'Sign Up',
				DESC: 'Enter your details to create your account',
				SUCCESS: 'Your account has been successfuly registered.'
			},
			INPUT: {
				EMAIL: 'Email',
				FULLNAME: 'Fullname',
				PASSWORD: 'Password',
				CONFIRM_PASSWORD: 'Confirm Password',
				USERNAME: 'Username'
			},
			VALIDATION: {
				INVALID: '{{name}} is not valid',
				REQUIRED: '{{name}} is required',
				MIN_LENGTH: '{{name}} minimum length is {{min}}',
				AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
				NOT_FOUND: 'The requested {{name}} is not found',
				INVALID_LOGIN: 'The login detail is incorrect',
				REQUIRED_FIELD: 'Required field',
				MIN_LENGTH_FIELD: 'Minimum field length:',
				MAX_LENGTH_FIELD: 'Maximum field length:',
				INVALID_FIELD: 'Field is not valid',
			}
		},
		ECOMMERCE: {
			COMMON: {
				SELECTED_RECORDS_COUNT: 'Selected records count: ',
				ALL: 'All',
				SUSPENDED: 'Suspended',
				ACTIVE: 'Active',
				FILTER: 'Filter',
				BY_STATUS: 'by Status',
				BY_TYPE: 'by Type',
				BUSINESS: 'Business',
				INDIVIDUAL: 'Individual',
				SEARCH: 'Search',
				IN_ALL_FIELDS: 'in all fields'
			},
			ECOMMERCE: 'eCommerce',
			CUSTOMERS: {
				CUSTOMERS: 'Customers',
				CUSTOMERS_LIST: 'Customers list',
				NEW_CUSTOMER: 'New Customer',
				DELETE_CUSTOMER_SIMPLE: {
					TITLE: 'Customer Delete',
					DESCRIPTION: 'Are you sure you want to permanently delete this customer?',
					WAIT_DESCRIPTION: 'Customer is deleting...',
					MESSAGE: 'Customer has been deleted'
				},
				DELETE_CUSTOMER_MULTY: {
					TITLE: 'Customers Delete',
					DESCRIPTION: 'Are you sure you want to permanently delete selected customers?',
					WAIT_DESCRIPTION: 'Customers are deleting...',
					MESSAGE: 'Selected customers have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected customers',
					MESSAGE: 'Selected customers status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Customer has been updated',
					ADD_MESSAGE: 'Customer has been created'
				}
			}
		},

		USER: {

			MAIN_TITLE: 'User',
			USER_DASHBOARD: "User Dashboard",
			ADD_USER_LABEL: 'Add User',
			UPDATE_USER_LABEL: "Update User Info",
			SEARCH: 'Search',
			SEARCH_HINT: 'in all fields',
			USER_LIST: {
				DATA_LOADING_MESSAGE: "Please wait ...",
				NO_DATA_FOUND: "No data found",
				STATUS: {
					ACTIVE: "Active",
					INACTIVE: "Inactive"
				},
				USER_LIST_HEADER_LABELS: {
					SR_NO: "Sr.No",
					USER_ID: "User ID",
					NAME: "Name",
					ROLE: "Role",
					PHONE_NUMBER: "Phone Number",
					EMAIL: "Email",
					DOB: "DOB",
					STATUS: "Status",
					ACTION: "Actions"
				},
				ACTIONS_TOOLTIP: {
					DEACTIVATE: "Deactivate",
					ACTIVATE: "Activate",
					DELETE_USER: "Delete User",
					MORE_ACTIONS: {
						MAIN_TITLE: "More Actions",
						EDIT_INFO: "Edit Info"
					}
				},
				CONFIRM_DIALOGS: {
					USER_DEACTIVE_MODEL_TITLE: "User Deactive",
					USER_DEACTIVE_MODEL_DESCRIPTION: "Are you sure you want to Deactive this User ?",
					USER_DEACTIVE_MODEL_WAIT_DESCRIPTION: "User is deactive...",
					USER_DELETE_MODEL_TITLE: "Delete User ",
					USER_DELETE_MODEL_DESCRIPTION: "Are you sure you want to delete {{firstName}}  {{lastName}}  ?",
					USER_DELETE_MODEL_WAIT_DESCRIPTION: "{{firstName}}  {{lastName}} is delete...",
				}
			},
			ADD_USER: {
				LABELS: {
					FIRST_NAME: "First Name",
					LAST_NAME: "Last Name",
					EMAIL: "Email",
					USERNAME: "User Name",
					PHONE_NUMBER: "Phone Number",
					ROLE: "Role"
				},
				ERROR_MESSAGE: {
					REQUIRED_FIRST_NAME: "First name is required.",
					REQUIRED_LAST_NAME: "Last name is required.",
					REQUIRED_EMAIL: "Email is required.",
					REQUIRED_USERNAME: "User name is required.",
					REQUIRED_PHONE_NUMBER: "Phone number name is required.",
					REQUIRED_ROLE: "Please select role.",
					PATTERN_FIRST_NAME: "Invalid first name.",
					PATTERN_LAST_NAME: "Invalid last name.",
					PATTERN_EMAIL: "Invalid email.",
					PATTERN_USERNAME: "Invalid user name..",
					PATTERN_PHONE_NUMBER: "Invalid phone number",
					PATTERN_ROLE: "Please select role.",
					EXIST_EMAIL_USER: "Email address already exist.",
					EXIST_USERNAME: "Username already exist.",

				},
				BUTTONS: {
					SAVE: "Save",
					CLOSE: "Close",
					UPDATE: "Update"
				}
			},

			API_MESSAGES: {
				UPDATED: "Updated",
				DELETED: "Deleted",
				DELETE_USER_SUCCESS: "User deleted successfully",
				UPDATE_STATUS_SUCCESS: "User status  {{message}} successfully.",
				USER_ADDED_SUCCESS: "User added successfully !",
				USER_UPDATED_SUCCESS: "User info updated successfully !"
			}
		},
		TODO: {

			MAIN_TITLE: 'Todo',
			TODO_DASHBOARD: "Todo Dashboard",
			ADD_TODO_LABEL: 'Add Todo',
			UPDATE_TODO_LABEL: "Update Todo Info",
			SEARCH: 'Search',
			SEARCH_HINT: 'in all fields',
			TODO_LIST: {
				DATA_LOADING_MESSAGE: "Please wait ...",
				NO_DATA_FOUND: "No data found",
				STATUS: {
					ACTIVE: "Active",
					INACTIVE: "Inactive"
				},
				TODO_LIST_HEADER_LABELS: {
					SR_NO: "Sr.No",
					TASK_NAME: "Task Name",
					TODO_DATE: "Todo Date",
					STATUS: "Status",
					ACTION: "Actions"
				},
				ACTIONS_TOOLTIP: {
					DEACTIVATE: "Deactivate",
					ACTIVATE: "Activate",
					DELETE_TODO: "Delete Todo",
					MORE_ACTIONS: {
						MAIN_TITLE: "More Actions",
						EDIT_INFO: "Edit Info"
					}
				},
				CONFIRM_DIALOGS: {
					TODO_DEACTIVE_MODEL_TITLE: "Todo Deactive",
					TODO_DEACTIVE_MODEL_DESCRIPTION: "Are you sure you want to Deactive this todo ?",
					TODO_DEACTIVE_MODEL_WAIT_DESCRIPTION: "Todo is deactiving...",
					TODO_DELETE_MODEL_TITLE: "Delete Todo ",
					TODO_DELETE_MODEL_DESCRIPTION: "Are you sure you want to delete {{taskName}}?",
					TODO_DELETE_MODEL_WAIT_DESCRIPTION: "{{taskName}} is deleting...",
				}
			},
			ADD_TODO: {
				LABELS: {

					TODO_NAME: "Task Name",
					TODO_DATE: "Todo Date",
					STATUS: "Status",


				},
				ERROR_MESSAGE: {

					STATUS_SELECT: "Please select status",
					REQUIRED_TASK_NAME: "Task name is reqiured.",
					REQUIRED_TODO_DATE: "Todo date is reqiured",
					REQUIRED_STATUS: "Status is required",
					EXIST_TASK_NAME: "Task name already exist.",

				},
				BUTTONS: {
					SAVE: "Save",
					CLOSE: "Close",
					UPDATE: "Update"
				}
			},

			API_MESSAGES: {
				UPDATED: "Updated",
				DELETED: "Deleted",
				DELETE_TODO_SUCCESS: "Todo deleted successfully",
				UPDATE_STATUS_SUCCESS: "Todo status  {{message}} successfully.",
				TODO_ADDED_SUCCESS: "Todo added successfully !",
				TODO_UPDATED_SUCCESS: "Todo info updated successfully !"
			}
		}
	}
};
