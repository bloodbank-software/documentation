# Blood Bank System Documentation

This repository contains the end-user documentation for the Blood Bank Management System.

The purpose of this documentation is to explain the application in a clear, simple, and structured way so that users, testers, and stakeholders can understand how each module works without needing developer-level knowledge.

## About This Documentation

The Blood Bank Management System is a web-based platform used to manage blood bank operations such as:

- donor registration and donor profile management
- donation records and donor communication
- inventory and stock tracking
- user management and access control
- master data configuration
- report generation and export
- reminder, notification, and messaging workflows

This documentation is written for end users and project reviewers. It focuses on what the screen does, how to use it, and what each action means in the workflow.

## Documentation Style

All documentation pages should follow the same style:

- start with a short overview
- explain the purpose of the page or module
- describe the screen layout and fields
- explain actions available to the user
- include step-by-step usage instructions
- show screenshots in the correct order
- add important notes where needed

The language should be simple, clear, and user-friendly.

## Documentation Structure

The documentation is organized by major modules.

### 1. Authentication
Covers login, registration, OTP verification, forgot password, reset password, QR login, and related security flows.

### 2. User Management
Covers user listing, add user, edit user, delete user, role update, permission management, permission history, login history, and impersonation.

### 3. Donor Management
Covers donor listing, donor add/edit/delete, search, filters, saved filters, messaging, donor profile, donor details, contact details, address details, notes, communication history, and donation history.

### 4. Report Generator
Covers report generation, field selection, filter selection, export formats, recent reports, and report downloads.

### 5. Master Data
Covers the setup and maintenance data used across the system, such as:

- collecting locations
- partner blood banks
- partner hospitals
- medical officers
- blood groups
- blood component types
- rejection reasons
- return/discard reasons
- any other reusable master records

### 6. Inventory
Covers blood inventory, storage tracking, blood units, storage buildings, storage zones, and related stock workflows.

### 7. Donation Reminders and Messaging
Covers reminder workflows, donor notifications, message sending, and communication actions used in donor follow-up.

### 8. Other Operational Modules
Covers lab testing, phlebotomists, lab technicians, donor questionnaire, blood request, blood allocation, settings, activity logs, organization info, and related workflow screens.

## Documentation Guidelines

When writing each page:

- explain the page from the end-user point of view
- avoid technical implementation details
- do not include API, database, schema, or code-level information
- explain the visible fields, buttons, tabs, dialogs, and actions
- describe what happens after each action
- mention validation or warnings when relevant
- keep the tone professional and easy to follow

## Screenshot Rules

Use screenshots as the main visual reference for each section.

Recommended rules:

- one screenshot per section when possible
- place the screenshot directly above or below the explanation for that section
- name screenshots clearly and consistently
- explain what the user sees in the screenshot
- explain the purpose of the buttons, tabs, and dialogs shown in the screenshot

Example naming style:

- `DonorManagement_Overview.png`
- `DonorManagement_Listing.png`
- `DonorManagement_AddDonor.png`
- `DonorManagement_EditDonor.png`
- `DonorManagement_DeleteDonor.png`

## Standard Page Format

Each documentation page should generally follow this format:

1. Overview
2. Purpose
3. Page Layout
4. Actions Available
5. Step-by-Step Usage
6. Related Screens or Tabs
7. Important Notes

For modules that are more detailed, additional sections can be added, such as:

- Add
- Edit
- Delete
- Status Handling
- Used In
- Tabs and Subsections
- Export / Download Behavior
- Search / Filter Behavior

## Suggested Module List

The following modules can be documented in this project:

- Authentication
- User Management
- Donor Management
- Report Generator
- Donation Reminders
- Donor Messaging
- Inventory Management
- Blood Requests
- Blood Allocation
- Settings
- Master Data
- Organization Info
- Activity Log
- Lab Testing
- Phlebotomist Management
- Lab Technician Management
- Donor Questionnaire
- QR Tools

## Writing Standard

Use the following writing style throughout the documentation:

- short, direct sentences
- user-focused explanations
- consistent section names
- simple English
- step-by-step instructions for actions
- clear notes for important behavior

Example tone:

- “Click the Add button to create a new record.”
- “The list shows the existing records in the system.”
- “Use Edit to update the selected entry.”
- “Use Delete only when the record is no longer required.”

## Important Notes

- This documentation is intended for end users and project stakeholders.
- Keep content clean, structured, and easy to paste into GitHub.
- Do not mix developer notes into the documentation pages.
- If a module has multiple screens, document each screen separately in the same style.
- If a module has tabs, explain each tab individually.

## Project Goal

The final documentation should help a reader understand:

- what each module is for
- how to navigate each screen
- how to complete actions correctly
- where each feature is used in the blood bank workflow
- what the user should expect after performing an action

## Contact / Ownership

This documentation belongs to the Blood Bank Management System project and should be updated whenever a module changes.

---

If needed, the next step is to create individual documentation pages for each module using the same format.
