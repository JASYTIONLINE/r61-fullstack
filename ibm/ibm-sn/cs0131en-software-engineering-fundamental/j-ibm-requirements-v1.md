---
title: requirements (study log)
date: 2025-09-06
draft: false
tags:
  - journal
  - study-log
  - software-engineering
  - requirements
  - PMP
function: course/module-1/lesson-5
shortcode: "j-"
classification: public
retention: permanent
integrityCheck: true
---

# requirements – study log

## summary  
This journal reviews the **video: "Requirements"**.  
It explains the six-step requirement gathering process, identifies stakeholders, clarifies goals vs. objectives, expands on prioritization methods, and introduces the URS, SRS, and SysRS documents. It also expands on the four categories of requirements. PMP parallels are highlighted to connect software engineering practices to project management processes.  

---

## contents (so whats)  

### section 1: requirement gathering steps  
- **SO WHAT:** Requirement gathering is a six-step process:  
  1. **Identify stakeholders** → *[PMP: Identify Stakeholders]*  
  2. **Establish goals and objectives** → *[PMP: Develop Project Charter, Define Scope]*  
  3. **Elicit requirements** → *[PMP: Collect Requirements]*  
  4. **Document requirements** → *[PMP: Requirements Documentation / Traceability Matrix]*  
  5. **Analyze and confirm requirements** → *[PMP: Validate Scope]*  
  6. **Prioritize requirements** → *[PMP: Define Scope Baseline, Backlog Grooming in Agile]*  

- **SO WHAT:** Stakeholders may include decision-makers, end-users, administrators, engineers, marketing, sales, and customer support.  
  - *[PMP Equivalent: Stakeholder Register]*  

- **SO WHAT:** Goals = broad, long-term outcomes. Objectives = measurable, specific steps to achieve goals.  
  - *[PMP Equivalent: Business Case, Project Objectives in Charter]*  

- **SO WHAT:** Elicitation methods include surveys, questionnaires, and interviews.  
  - *[PMP Equivalent: Elicitation Techniques in Collect Requirements]*  

- **SO WHAT:** Documented requirements must be clear, consistent, and complete.  
  - *[PMP Equivalent: Requirements Documentation / Scope Statement]*  

---

### requirement prioritization (expanded)  
- **SO WHAT:** Prioritization ensures that the most important requirements are addressed first, balancing scope, time, and resources.  
- **SO WHAT:** Clear prioritization prevents scope creep and sets expectations with stakeholders.  

**methods:**  
- **MoSCoW Method:** Must-have, Should-have, Could-have, Won’t-have.  
- **Kano Model:** Basic, Performance, Excitement needs.  
- **100-Point Method:** Stakeholders allocate 100 points across requirements.  
- **Relative Weighting / Ranking:** Compare requirements in pairs or assign weights.  
- **Risk-Value Prioritization:** Rank based on business value vs. implementation risk.  

*[PMP Equivalent: MoSCoW, Decision-Making, Prioritization Matrices, Multi-Criteria Decision Analysis]*  

---

### requirement specification documents (expanded)  

- **URS (User Requirement Specification):**  
  - Defines end-user needs in business terms.  
  - Audience: stakeholders, end-users, analysts.  
  - *Example:* “System shall allow patients to book and reschedule appointments.”  
  - *[PMP Equivalent: Business Requirements Document (BRD)]*  

- **SRS (Software Requirement Specification):**  
  - Defines software behavior and performance.  
  - Audience: developers, testers, architects.  
  - *Example:* “System shall support 1,000 concurrent bookings with <2 second response.”  
  - *[PMP Equivalent: Detailed Requirements, Functional/Non-Functional Specs]*  

- **SysRS (System Requirement Specification):**  
  - Defines technical environment: hardware, OS, integrations.  
  - Audience: system admins, IT ops, infrastructure.  
  - *Example:* “System requires Linux servers, PostgreSQL, and TLS 1.3 encryption.”  
  - *[PMP Equivalent: Infrastructure Specs, Assumptions & Constraints]*  

---

### categories of requirements (expanded)  

- **Functional Requirements**  
  - Define *what the software must do*.  
  - *Example:* “System shall generate monthly PDF reports.”  
  - *[PMP Equivalent: Functional Scope]*  

- **External / UI Requirements**  
  - Define how system interacts with users/external systems.  
  - *Example:* “Login screen shall include Forgot Password link.”  
  - *[PMP Equivalent: User Experience / Interface Requirements]*  

- **System Feature Requirements**  
  - Define major system capabilities across modules.  
  - *Example:* “System shall support multi-currency checkout.”  
  - *[PMP Equivalent: High-Level Product Features]*  

- **Non-Functional Requirements (NFRs)**  
  - Define quality attributes:  
    - Performance: “10,000 transactions/sec.”  
    - Security: “Passwords stored with bcrypt.”  
    - Usability: “Accessible to visually impaired users.”  
    - Reliability: “99.9% uptime.”  
    - Scalability: “Support growth from 1,000 to 1M users.”  
  - *[PMP Equivalent: Quality Metrics and Performance Criteria]*  

---

## overall takeaways  
- Requirement gathering ensures all voices are heard and needs are systematically captured.  
- Goals vs. objectives establish a hierarchy from broad intent to measurable steps.  
- Prioritization techniques (MoSCoW, Kano, 100-point, etc.) ensure clarity on what matters most.  
- URS, SRS, and SysRS documents cover the business needs, software behavior, and system environment.  
- The four requirement categories (functional, UI, system features, non-functional) provide a complete framework for documenting expectations.  
- PMP connections show that software requirement management maps directly to PMBOK processes in Scope, Requirements, and Quality Management.  

---

## navigation  
- `[[index|Knowledge Base Portal – Home]]`  
- `[[course/module-1/index|Back to Module 1 Index]]`  
- Related:  
  - `[[j-building-quality-software-v1|building quality software study log]]`  
  - `[[j-sdlc-phases-v1|phases of the sdlc study log]]`  
  - `[[readme-software-engineering|software engineering readme]]`  

---
