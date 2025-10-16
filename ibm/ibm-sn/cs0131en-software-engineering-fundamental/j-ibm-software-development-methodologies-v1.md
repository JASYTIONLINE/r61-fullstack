---
title: software development methodologies (study log)
date: 2025-09-06
draft: false
tags:
  - journal
  - study-log
  - software-engineering
  - SDLC
  - Agile
  - Waterfall
  - V-model
function: course/module-1/lesson-6
shortcode: "j-"
classification: public
retention: permanent
integrityCheck: true
---

# software development methodologies – study log

## summary  
This journal reviews the **video: "Software Development Methodologies"**.  
It explains three common approaches to the SDLC — **Waterfall, V-Shape, and Agile** — including their phases, characteristics, and pros/cons.  

---

## contents (so whats)  

### waterfall model  
- **SO WHAT:** Waterfall is a sequential SDLC model where each phase must finish before the next begins.  
- **SO WHAT:** Planning and design are done upfront; product is seen by the customer only in testing.  
- **SO WHAT:** Releases are infrequent and large.  

**Pros:**  
- Simple and easy to understand.  
- Phases clearly defined with strong documentation.  
- Good for projects with stable, well-understood requirements.  
- Upfront planning makes cost and schedule estimation easier.  

**Cons:**  
- Inflexible: changes are costly once phases close.  
- Customer feedback arrives late in the process.  
- Long delivery cycles may produce outdated products.  
- Errors discovered in testing are expensive to fix.  

---

### v-shape model (verification & validation model)  
- **SO WHAT:** V-Shape is sequential like Waterfall but ties each design phase to a testing phase.  
- **SO WHAT:** The bottom of the V is coding, connecting design to validation.  

**Phases:**  
- Requirements Analysis → Acceptance Testing  
- System Design → System Testing  
- Architecture / High-Level Design → Integration Testing  
- Module / Detailed Design → Unit Testing  

**Pros:**  
- Strong testing discipline; tests are designed early.  
- Clear traceability between requirements, design, and testing.  
- Good for small/medium projects with stable requirements.  

**Cons:**  
- More rigid than Waterfall; difficult to handle changes.  
- Usable product delivered only at the end.  
- Expensive to adapt if errors are found late.  

---

### agile model  
- **SO WHAT:** Agile is iterative and cyclical, emphasizing collaboration, sprints, and continuous feedback.  
- **SO WHAT:** Each sprint (1–4 weeks) delivers a working increment of software visible to stakeholders.  
- **SO WHAT:** Agile replaces “maintenance” with ongoing feedback and adaptation.  

**Stages of a Sprint Cycle:**  
1. Planning / Backlog Grooming – select stories for sprint.  
2. Design – lightweight models/wireframes.  
3. Development – build increment; CI/CD often used.  
4. Testing – continuous + sprint-end validation.  
5. Sprint Review – demo to stakeholders, gather feedback.  
6. Retrospective – team improvement and lessons learned.  
7. Increment Delivery – release working code (often part of MVP).  

**Agile Manifesto Core Values (expanded):**  
- Individuals and interactions **over** processes and tools.  
- Working software **over** comprehensive documentation.  
- Customer collaboration **over** contract negotiation.  
- Responding to change **over** following a plan.  

**Pros:**  
- Flexible, handles changing requirements well.  
- Frequent delivery of value increases stakeholder satisfaction.  
- Feedback loops reduce risk of building the wrong product.  
- Team collaboration and morale often stronger.  

**Cons:**  
- Cost and schedule harder to predict upfront.  
- Requires active stakeholder involvement.  
- Can lead to scope creep if backlog is poorly managed.  
- Documentation may be lighter, risking long-term clarity.  

---

## overall takeaways  
- **Waterfall:** Best when requirements are stable, documentation is critical, and predictability matters.  
- **V-Shape:** Adds stronger testing but is still rigid; suited for projects with strict traceability needs.  
- **Agile:** Dominant modern approach; ideal for evolving requirements, fast delivery, and continuous stakeholder engagement.  

---

## navigation  
- `[[index|Knowledge Base Portal – Home]]`  
- `[[course/module-1/index|Back to Module 1 Index]]`  
- Related:  
  - `[[j-requirements-v1|requirements study log]]`  
  - `[[j-building-quality-software-v1|building quality software study log]]`  
  - `[[readme-software-engineering|software engineering readme]]`  

---
