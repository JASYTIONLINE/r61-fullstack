---
title: software versions (study log)
date: 2025-09-06
draft: false
tags:
  - journal
  - study-log
  - software-engineering
  - versioning
  - semantic-versioning
function: course/module-1/lesson-8
shortcode: "j-"
classification: public
retention: permanent
integrityCheck: true
---

# software versions – study log

## summary  
This journal reviews the **video: "Software Versions"**.  
It explains software version numbering, semantic versioning, how to identify version numbers, and common issues with compatibility between old and new versions.  

---

## learning objectives  
- Discuss software versions on computing platforms.  
- Identify software versions and numbering.  

---

## contents (so whats)  

### purpose of version numbers  
- **SO WHAT:** Software versions track releases, updates, and patches.  
- **SO WHAT:** They help users identify what they are running and developers communicate changes.  
- **SO WHAT:** Version numbers can be displayed in 2, 3, or 4 number sets, sometimes replaced by date-based schemes.  

---

### semantic versioning (expanded)  
- **Definition:** A common convention where version numbers use a `major.minor.patch.build` structure.  
- **Major:** First digit; indicates breaking changes or a significant new release.  
  - *Example:* Moving from 1.x to 2.0 may break backward compatibility.  
- **Minor:** Second digit; indicates new features or functionality that are backward-compatible.  
  - *Example:* 2.3 → 2.4 adds new capabilities without breaking old ones.  
- **Patch:** Third digit; fixes bugs or small changes that don’t affect features.  
  - *Example:* 2.4.1 → 2.4.2 fixes a login bug.  
- **Build:** Fourth digit (optional); build number or date, often for internal tracking.  
  - *Example:* 2.4.2.20230906 may indicate a build on Sept 6, 2023.  

---

### other versioning approaches  
- **Date-based versioning:** Versions named after release year/month.  
  - *Example:* Ubuntu Linux 18.04.2 → released April 2018.  
- **Pre-release identifiers:** Versions below 1.0 or marked alpha/beta indicate testing or unstable versions.  
  - *Example:* 0.9 or 2.0-beta.  
- **Long-term support (LTS):** Certain versions designated stable for extended support (common in enterprise software).  

---

### identifying version numbers in software  
- Found in the **Help** or **About** menus of most applications.  
- Example (Chrome desktop browser):  
  1. Click three dots (menu).  
  2. Select **Help** → **About**.  
  3. Version number displays.  
- Useful for troubleshooting, updates, and compatibility checks.  

---

### compatibility considerations  
- **Backward compatibility:** New versions work with files/programs created by older versions.  
  - *Example:* Word 2021 opens Word 2010 files.  
- **Forward compatibility:** Older software works with files created by newer versions (less common).  
- **Compatibility issues:** Common when older software cannot interpret features of newer releases.  
  - Solution: Upgrade software to newer version or export to an older format.  

---

## overall takeaways  
- Software version numbers indicate the **history of releases, updates, and patches**.  
- Semantic versioning (major.minor.patch.build) is widely used to communicate the type and impact of changes.  
- Versions may also follow **date-based** or **pre-release naming schemes**.  
- Compatibility between old and new versions can be a problem; checking version numbers helps troubleshoot issues.  
- Backward compatibility is common, forward compatibility is less so.  

---

## navigation  
- `[[index|Knowledge Base Portal – Home]]`  
- `[[course/module-1/index|Back to Module 1 Index]]`  
- Related:  
  - `[[j-software-testing-v1|software testing study log]]`  
  - `[[j-requirements-v1|requirements study log]]`  
  - `[[readme-software-engineering|software engineering readme]]`  

---
