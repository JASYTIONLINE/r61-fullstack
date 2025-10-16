---
title: software testing (study log)
date: 2025-09-06
draft: false
tags:
  - journal
  - study-log
  - software-engineering
  - testing
  - QA
function: course/module-1/lesson-7
shortcode: "j-"
classification: public
retention: permanent
integrityCheck: true
---

# software testing – study log

## summary  
This journal reviews the **video: "Software Testing"**.  
It introduces **test cases** and expands on three main categories of testing: functional, non-functional, and regression.  
It also details the four levels of testing, showing how quality is built step by step through the SDLC.  

---

## learning objectives  
- Define the terms functional testing, non-functional testing, regression testing.  
- Compare and contrast typical testing levels.  

---

## contents (so whats)  

### test cases (expanded)  
- **Definition:** A documented set of conditions, inputs, steps, and expected results used to verify a requirement.  
- **Purpose:** Provide traceability from requirements to actual validation; ensure consistency in testing.  
- **When written:** After requirements are finalized and before execution of testing.  

**structure:**  
- Test Case ID  
- Requirement ID  
- Title  
- Preconditions  
- Test Steps  
- Test Data  
- Expected Result  
- Actual Result  
- Status (Pass/Fail)  
- Postconditions  

**example:**  
- **ID:** TC-LOGIN-01  
- **Requirement:** “System shall allow valid users to log in.”  
- **Steps:** Enter valid username/password and click Login.  
- **Test Data:** user1 / password123  
- **Expected Result:** User is redirected to dashboard.  

**lifecycle:** Design → Review/Approval → Execution → Maintenance → Retirement  

**types:** Positive, Negative, Boundary, Performance, Regression.  

**best practices:** Keep simple, link to requirements, automate repeatable cases, use real-world data.  

---

### functional testing (expanded)  
- **Definition:** Validates that the system performs the actions defined in requirements.  
- **Focus:** *What the system does.*  
- **Techniques:** Black-box testing (inputs/outputs, not code).  
- **Examples:**  
  - Checkout updates total correctly.  
  - Login accepts valid and rejects invalid credentials.  
  - Error messages display on invalid inputs.  
- **Subtypes:** Smoke Testing, Sanity Testing, UAT.  
- **Tools:** Selenium, Cypress, JUnit.  
- **Key Question:** *Does the system deliver the expected functionality?*  

**black-box testing (expanded):**  
- Treats the system as a “black box” — only inputs and outputs visible.  
- Tester does not need coding knowledge.  
- Advantages: unbiased, validates user requirements.  
- Limitations: cannot expose internal logic flaws.  

---

### non-functional testing (expanded)  
- **Definition:** Validates **quality attributes** of the system rather than specific functions.  
- **Focus:** *How well the system works.*  

**attributes tested:**  
- **Performance:** Speed, response time, throughput.  
- **Scalability:** Can handle increasing loads.  
- **Availability:** Uptime percentage.  
- **Reliability:** Consistent performance.  
- **Usability:** Ease of use, accessibility.  
- **Security:** Resistance to attacks and breaches.  
- **Portability/Compatibility:** Works across platforms/environments.  
- **Maintainability:** Ease of fixing or updating.  
- **Disaster Recovery/Resilience:** Recovers from outages.  

**examples:**  
- Load test 10,000 users.  
- Penetration test login page.  
- Accessibility test for visually impaired users.  

**tools:** JMeter, LoadRunner, OWASP ZAP, Lighthouse.  

**Key Question:** *How well does the system perform under real-world conditions?*  

---

### regression testing (expanded)  
- **Definition:** Ensures new changes (bug fixes, feature updates) don’t break existing functionality.  
- **Focus:** *System stability after updates.*  
- **When:** After bug fixes, requirement changes, or enhancements.  

**examples:**  
- After login bug fix, retest registration and password reset.  
- After UI redesign, check Add to Cart still works.  

**approaches:**  
- **Selective Regression:** Run only impacted cases.  
- **Full Regression:** Run all test cases.  

**tools:** Jenkins + Selenium, TestNG, PyTest.  

**Key Question:** *Does everything that worked before still work now?*  

---

### testing levels (expanded)  

**1. Unit Testing**  
- Tests smallest components (functions, classes).  
- Goal: ensure correctness in isolation.  
- Responsibility: Developers.  
- Example: `calculate_interest()` returns correct value.  
- Tools: JUnit, NUnit, PyTest.  

**2. Integration Testing**  
- Tests interactions between modules/services.  
- Goal: confirm data flow and compatibility.  
- Responsibility: Developers/QA.  
- Example: Cart service passes correct data to payment service.  
- Tools: Postman, SoapUI, Selenium.  

**3. System Testing**  
- Tests complete application against requirements.  
- Goal: validate functional + non-functional requirements.  
- Responsibility: QA teams.  
- Example: Healthcare app tested for scheduling, billing, records end-to-end.  
- Tools: Selenium, TestComplete, JMeter.  

**4. User Acceptance Testing (UAT)**  
- Performed by end-users/stakeholders.  
- Goal: confirm business needs and readiness.  
- Responsibility: Customers/stakeholders.  
- Example: Bank staff validate loan workflow matches rules.  
- Tools: Manual/UAT platforms like Zephyr.  

**Comparison Summary:**  
- Scope: Unit = smallest, UAT = broadest.  
- Responsibility: Dev → QA → Stakeholders.  
- Timing: Unit/Integration early, System/UAT late.  
- Goal: From “does this part work?” to “does it solve the user’s problem?”  

---

## overall takeaways  
- Software testing ensures requirements are met and software is error-free.  
- **Test cases** provide structure and traceability from requirements to validation.  
- **Functional testing** checks what the system does.  
- **Non-functional testing** validates quality attributes (performance, security, scalability).  
- **Regression testing** safeguards stability after changes.  
- **Testing levels** build confidence step by step: unit → integration → system → UAT.  

---

## navigation  
- `[[index|Knowledge Base Portal – Home]]`  
- `[[course/module-1/index|Back to Module 1 Index]]`  
- Related:  
  - `[[j-building-quality-software-v1|building quality software study log]]`  
  - `[[j-sdlc-phases-v1|phases of the sdlc study log]]`  
  - `[[readme-software-engineering|software engineering readme]]`  

---
fs-00-three-types-and-four-levels-testing-software 

[Intro]  
Testing makes sure the software is right,  
Catching the bugs before they take flight.  
From cases to levels, each step plays a part,  
Quality software is built from the start.  

[Chorus]  
Functional testing — does it do what it should?  
Non-functional testing — does it perform as it could?  
Regression testing — does the old still remain?  
Three categories of testing keep systems sustained.  

[Verse 1 – Unit Testing]  
Unit testing checks the smallest piece of code,  
Functions and classes along the developer’s road.  
Run in isolation, each unit must pass,  
Proving the building blocks will hold fast.  

[Verse 2 – Integration Testing]  
Integration testing joins modules as one,  
Verifies data flows and tasks can be done.  
Does the shopping cart talk to the payment gate?  
Integration confirms they communicate.  

[Verse 3 – System Testing]  
System testing views the product complete,  
Functional and non-functional requirements meet.  
End-to-end coverage, the application wide,  
System testing proves the whole system’s right.  

[Verse 4 – User Acceptance Testing]  
User acceptance brings the end-users in,  
Business requirements must match where they begin.  
Stakeholders sign off, the product’s released,  
UAT ensures that the customer’s pleased.  

[Chorus]  
Functional testing — does it do what it should?  
Non-functional testing — does it perform as it could?  
Regression testing — does the old still remain?  
Three categories of testing keep systems sustained.  

[Bridge]  
Why does it matter, why test at all?  
Without these checks the systems will fall.  
Confidence, safety, and trust we provide,  
Testing secures the product worldwide.  

[Outro]  
From unit to UAT, each level we show,  
From functional checks to performance under load.  
Regression ensures the old still survives,  
Testing is why the software thrives.  
