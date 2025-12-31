<img width="100%" src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/zenthbanner.png" />

<h1><img width="28px" src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/zenthgreen.png" />enthCare: Smart Healthcare Ecosystem</h1>

ZenthCare is a web-based Telemedicine platforms aiming to connect doctors with remote patients. Designed to streamline and enhance interactions between patients and healthcare providers (doctors) through online services. It leverages modern digital tools to create a seamless experience for both parties. The platform ensures secure data handling, seamless 
booking, and a smooth user experience. With an integrated admin panel, administrators can 
manage appointments, doctor availability, and patient data using role-based access controls. 
ZenthCare bridges the communication gap in healthcare services, reduces waiting time, and 
promotes medical data confidentiality and accessibility. 


<p align="center">
  <a href="https://react.dev" target="_blank">
  <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/icons/React-logo.png" width="70" alt="React Logo"/></a>
<a href="https://clerk.com" target="_blank">
  <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/icons/clerk-logo.png" width="70" alt="Clerk Logo"/></a>
<a href="https://eslint.org" target="_blank">
  <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/icons/eslint-logo.png" width="70" alt="ESLint Logo"/></a>
<a href="https://www.prisma.io" target="_blank">
  <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/icons/prisma-logo.jpeg" width="70" alt="Prisma Logo"/></a>
<a href="https://neon.tech" target="_blank">
  <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/icons/neon-logo.png" width="70" alt="Neon Logo"/></a>
</p>
<p align="center">
<a href="https://nextjs.org" target="_blank">
  <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/icons/nextjs-logo.png" width="70" alt="Next.js Logo"/></a>
<a href="https://ui.shadcn.com" target="_blank">
  <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/icons/shadcn-logo.png" width="70" alt="shadcn/ui Logo"/></a>
<a href="https://tailwindcss.com" target="_blank">
  <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/icons/tailwind-logo.png" width="70" alt="Tailwind CSS Logo"/></a>
<a href="https://vercel.com" target="_blank">
  <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/icons/vercel-logo.png" width="70" alt="Vercel Logo"/></a>
<a href="https://www.vonage.com" target="_blank">
  <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/icons/vonaga-logo.png" width="70" alt="Vonage Logo"/></a>
</p>

## 🎯 Key Objectives
ZenthCare is built around the following core objectives:

| Objective                | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| Appointment Scheduling   | Easy-to-use booking system to reduce waiting times and avoid conflicts      |
| Credits System           | Subscription-based model where users earn credits for consultations         |
| User-Friendly Interface  | Designed for ease of use by both patients and healthcare professionals      |
| Time & Cost Efficiency   | Reduces manual administrative tasks and operational costs                   |

## 📦 Scope of the Platform
ZenthCare offers a wide range of features and functionalities to support healthcare operations:

- 👤 **Patient Registration & Profile Management**  
  Patients can securely register and maintain personal and medical records.

- 📊 **Role-Based Dashboards**  
  Customized dashboards for patients, doctors, and administrators.

- 🛠️ **Admin Panel**  
  Administrators can manage doctor schedules, patient data, and system operations.

- 📅 **Appointment Management**  
  Patients can book, cancel, or reschedule appointments. Healthcare staff can manage schedules efficiently.

## 🌱 Applicability

ZenthCare is designed to be versatile and applicable across a wide range of healthcare settings, including:

- **Hospitals and Clinics:** Digitize appointment scheduling, manage patient records, staff coordination, and billing efficiently.  
- **Telemedicine Platforms:** Facilitate remote consultations and connect doctors with patients virtually.  
- **Healthcare Startups:** Provide scalable and secure patient management solutions.  
- **NGOs and Health Campaigns:** Streamline registration and appointment handling during health drives.  
- **Educational Institutions / Training Centers:** Simulate real-world healthcare management systems for learning purposes.  
- **Diagnostic Centers:** Store test results, reports, and link them to patient records.  
- **Pharmacies:** Integrate prescriptions and billing to reduce manual errors.  
- **Health Camps & Remote Services:** Manage patient data effectively in temporary or rural healthcare setups.  

By implementing ZenthCare, healthcare providers across these domains can improve workflow efficiency, ensure accurate data management, and deliver better healthcare services.

## 💫 Purpose
The primary purpose of ZenthCare is to improve the **accessibility**, **efficiency**, and **quality** of healthcare services through digital transformation. The platform aims to:
- Minimize delays in communication
- Simplify the appointment process
- Provide a seamless online system for patients and healthcare providers

## ⚠️ Limitations
While ZenthCare offers numerous benefits, it also has certain limitations:

- 🌐 **Internet Dependency**  
  Video call quality is affected by network speed and stability.

- 💳 **Third-Party API Reliance**  
  Financial transactions depend on external APIs, which may introduce latency or service dependency.

- 👥 **Basic Role Support**  
  The system currently supports only fundamental user roles and functionalities, limiting advanced customization.

> [!IMPORTANT]
>
> **Error:**  
> - Duplicate appointment created for the same doctor and time slot.
>
> **Cause:**  
> - Two booking requests were processed at the same time.  
> - The database did not enforce a unique rule on `(doctorId, date, timeSlot)`, allowing both entries.
>
> **Solution:**  
> - Added a **database-level unique constraint** to prevent double-booking.  
> - Wrapped booking logic in a **transaction** to lock the time slot during save.  
> - Added server-side validation to reject conflicting appointments.

<details>
<summary>Project Contribution Breakdown</summary>

### ✅ What I Did

- Designed and developed a web-based telemedicine platform connecting doctors and remote patients.  
- Built secure modules for patient registration, appointment scheduling, and medical data management.  
- Implemented role-based dashboards for patients, doctors, and administrators.  
- Integrated an admin panel to manage appointments, doctor availability, and patient records.  
- Ensured data confidentiality, usability, and a smooth end-to-end user experience across the platform.

---

### 🛠️ How I Did It

- Applied **Role-Based Access Control (RBAC)** to separate permissions across user roles.  
- Designed intuitive workflows for booking, canceling, and rescheduling appointments.  
- Implemented secure handling of sensitive health data with structured patient profiles.  
- Built admin tools to manage doctor schedules, appointments, and system operations efficiently.  
- Optimized UI/UX to make teleconsultations simple and accessible.  
- Planned integrations for **payments, diagnostics, and prescriptions** using third-party APIs.

---

### 📈 Impact

- Reduced patient waiting time through streamlined appointment booking and remote consultations.  
- Improved communication between doctors and patients using a centralized platform.  
- Enabled administrators to manage operations more efficiently from a unified dashboard.  
- Increased data accuracy and reduced manual paperwork through digital record management.  
- Expanded healthcare accessibility for remote and underserved areas.


</details>

## 🧰 Project Overview

<div align="center">
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
    <div style="flex: 1 1 45%; min-width: 300px;">
      <img width="100%" src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/homepage.png" />
    </div>
    <div style="flex: 1 1 45%; min-width: 300px;">
      <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/onboarding.png?raw=true" width="100%" />
    </div>
    <div style="flex: 1 1 45%; min-width: 300px;">
      <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/doc-dashboard.png?raw=true" width="100%" />
    </div>
    <div style="flex: 1 1 45%; min-width: 300px;">
      <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/doc-specific-page.png?raw=true" width="100%" />
    </div>
    <div style="flex: 1 1 45%; min-width: 300px;">
      <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/manage-doctor-page.png?raw=true" width="100%" />
    </div>
    <div style="flex: 1 1 45%; min-width: 300px;">
      <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/payment-test.png?raw=true" width="100%" />
    </div>
    <div style="flex: 1 1 45%; min-width: 300px;">
      <img src="https://github.com/Jostar-Foundation/ZenthCare/blob/master/assets/video-consultation.png?raw=true" width="100%" />
    </div>
  </div>
</div>


---

<div align="center">
  ⚠️ This repository is uniquely designed by <b>@JoshuaThadi</b>.
</div>
