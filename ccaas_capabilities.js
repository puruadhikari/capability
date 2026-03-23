const CCAAS_DATA = [
  {
    "label": "People & Workforce",
    "icon": "👥",
    "desc": "HR, onboarding, training, workforce management, skills, incentives, wellbeing, and talent acquisition.",
    "domains": [
      {
        "title": "HR & Onboarding",
        "category": "People Operations | Employee Lifecycle Management",
        "usecase": "A new agent joins a UK-based telecoms contact centre: their HRIS record triggers automatic provisioning of an Okta SSO account, a CCaaS seat in Genesys Cloud, and a WFM schedule — all within 2 hours of their start date, without a single IT ticket.",
        "sub": [
          {
            "name": "Pre-employment checks: background screening, right-to-work verification, reference checks",
            "definition": "The systematic verification of a candidate's identity, employment history, criminal record, and legal right to work in the relevant jurisdiction before they commence employment. This includes DBS/CRB checks (UK), federal background checks (USA), and automated right-to-work verification through government portals.",
            "usecase": "A new hire accepts a CCR role in the UK; the system automatically initiates a DBS check via Sterling, verifies their right-to-work share code against the Home Office API, and sends reference request emails to two previous employers — all tracked on a single pre-employment dashboard with RAG status indicators."
          },
          {
            "name": "Digital onboarding portal with document upload, e-signature, and task checklists",
            "definition": "A self-service web portal that guides new joiners through all onboarding administrative tasks — uploading identity documents, signing employment contracts and policy acknowledgements electronically, and completing sequenced task checklists — before their first day in the contact centre.",
            "usecase": "Five days before their start date, a new agent receives a portal link where they upload their passport, e-sign their contract and NDA via DocuSign, complete a bank details form, and tick off 14 onboarding tasks; the hiring manager's dashboard shows real-time completion progress."
          },
          {
            "name": "Employee master data management (personal details, employment contract, job role, grade)",
            "definition": "The authoritative repository of all core employee data attributes — legal name, address, date of birth, national insurance number, contract type, job title, grade, cost centre, and reporting line — maintained as the single source of truth for all downstream HR, payroll, and operational systems.",
            "usecase": "When an agent changes their home address, they update it once in the HRIS self-service portal; the change automatically propagates to payroll for tax calculations, to WFM for site assignment, and to facilities for emergency contact records — no duplicate data entry required."
          },
          {
            "name": "Role and job family taxonomy definition aligned to contact centre functions",
            "definition": "A structured hierarchical classification of all job roles within the contact centre operation — from frontline CCR through team leader, QA analyst, WFM analyst, operations manager, and programme director — with standardised role descriptions, competency requirements, and grade bands that enable consistent workforce planning and career progression.",
            "usecase": "The HR team publishes a taxonomy defining 6 job families and 24 distinct roles across the contact centre; each role maps to a skills profile, a pay band, and a career pathway — enabling consistent job evaluation across 5 international sites."
          },
          {
            "name": "Probation management and confirmation workflows",
            "definition": "The end-to-end process for managing an employee's probationary period — including milestone reviews, performance check-ins, extension triggers, and formal confirmation or termination decisions — with automated reminders and approval workflows that ensure compliance with contractual and legal obligations.",
            "usecase": "At week 4, 8, and 12 of a new agent's probation, their team leader receives automated prompts to complete a probation review form; at week 12, the system generates a confirmation letter or flags an extension request for HR approval based on the review outcomes."
          },
          {
            "name": "Organisational hierarchy and reporting line configuration",
            "definition": "The digital representation of the contact centre's management structure — defining who reports to whom, which teams sit within which programmes, and how sites, departments, and business units are organised — used by all systems (WFM, QM, performance, payroll) to enforce correct data visibility and approval chains.",
            "usecase": "When a team leader is promoted to operations manager, updating their position in the org hierarchy automatically reassigns their direct reports to a new team leader, updates approval chains in the leave system, and adjusts dashboard visibility in the performance management tool."
          },
          {
            "name": "Internal mobility and transfer management",
            "definition": "The process and tooling that enables existing employees to apply for, be assessed for, and transition into new roles, teams, programmes, or sites within the organisation — including internal job boards, transfer request workflows, and the administrative steps to update all HR, payroll, and operational systems upon transfer.",
            "usecase": "An agent on the billing queue applies for a vacant senior CCR role on the retentions team via the internal mobility portal; upon approval, the system updates their skills profile, reassigns their WFM schedule, moves their CCaaS queue assignment, and adjusts their pay grade — all within a single transfer workflow."
          },
          {
            "name": "Benefits enrolment and administration (health, pension, leave)",
            "definition": "The management of all employee benefit programmes — including health insurance, pension/retirement schemes, life assurance, and supplementary benefits — covering initial enrolment during onboarding, annual open enrolment windows, life-event changes, and ongoing administration of contributions and deductions.",
            "usecase": "During the annual benefits enrolment window, agents access a self-service portal to select their health insurance tier, adjust pension contribution percentage, and opt into the cycle-to-work scheme; their selections are validated against eligibility rules and sent to payroll for the next pay cycle."
          },
          {
            "name": "Absence and leave management (annual leave, sick leave, maternity/paternity, FMLA)",
            "definition": "The comprehensive system for requesting, approving, tracking, and reporting on all categories of employee absence — including annual leave, sick leave, parental leave, compassionate leave, and statutory entitlements — with automated accrual calculations, manager approval workflows, and integration with WFM for shrinkage planning.",
            "usecase": "An agent requests 5 days of annual leave through the self-service portal; the system checks their remaining entitlement, flags a WFM coverage alert for the requested dates, routes the request to their team leader for approval, and upon approval deducts from the leave balance and updates the WFM schedule."
          },
          {
            "name": "Employee self-service portal (view payslips, update personal info, request leave)",
            "definition": "A web-based employee portal providing CCRs and managers with direct access to view their personal HR records, download payslips, update contact details, submit leave requests, and access benefits information — reducing HR administrative workload and empowering employees with immediate access to their own data.",
            "usecase": "An agent logs into the self-service portal at home to download their March payslip, update their emergency contact number, check their remaining annual leave balance, and submit a holiday request for August — all without raising a single HR ticket."
          },
          {
            "name": "Manager self-service (approvals, team view, reporting)",
            "definition": "A dedicated management interface enabling team leaders and operations managers to approve leave requests, view team rosters and headcount, access direct report profiles, initiate HR processes (probation reviews, PIP requests), and generate team-level HR reports — without requiring HR department intervention for routine management actions.",
            "usecase": "A team leader starts their Monday by opening the manager dashboard: they approve 3 pending leave requests, review the headcount summary showing 2 vacancies on their team, check the probation review due this week, and download an absence trend report for their monthly operations review."
          },
          {
            "name": "HR case management for employee queries and grievances",
            "definition": "A ticketed workflow system for managing employee enquiries, complaints, and formal grievances — from initial submission through investigation, resolution, and appeal — with SLA tracking, audit trails, and escalation paths that ensure fair, consistent, and legally compliant handling of all employee relations matters.",
            "usecase": "An agent submits a grievance about shift allocation fairness via the HR portal; the system creates a case, assigns it to an HR advisor with a 5-day investigation SLA, logs all correspondence and meeting notes, and tracks the case through to formal outcome and right of appeal."
          },
          {
            "name": "Exit management and offboarding workflows",
            "definition": "Exit management and offboarding workflows is a foundational element of the HR & Onboarding capability within the People & Workforce domain. It enables contact centre operations to deliver this function at enterprise scale with consistency, measurability, and compliance — supporting the end-to-end customer care representative journey from initial contact through resolution.",
            "usecase": "The contact centre team leverages exit management and offboarding workflows within the HR & Onboarding function to streamline operations and improve service delivery. The capability is integrated with adjacent systems in the CCaaS ecosystem, providing real-time data visibility and enabling data-driven decision-making that directly impacts customer experience and operational efficiency."
          },
          {
            "name": "Headcount and position management (approved roles vs. filled roles)",
            "definition": "The governance framework for tracking the number of approved positions (budgeted headcount) against the number of currently filled positions across the contact centre — enabling vacancy tracking, recruitment prioritisation, and financial headcount reporting by site, programme, and cost centre.",
            "usecase": "The operations director reviews the headcount dashboard showing 420 approved positions against 387 filled, with 33 vacancies broken down by site and programme; 12 are flagged as critical based on WFM capacity shortfall, triggering priority recruitment intake."
          },
          {
            "name": "Contract type management (full-time, part-time, temporary, contractor)",
            "definition": "The capability to define, manage, and report on multiple employment contract types within the workforce — full-time permanent, part-time permanent, fixed-term, zero-hours, agency temporary, and independent contractor — each with appropriate contractual terms, entitlements, working time rules, and system configurations.",
            "usecase": "The contact centre employs 300 permanent FTEs, 80 part-time agents, and 50 temporary agency workers for peak season; each contract type has distinct leave entitlements, WFM scheduling rules, and payroll configurations — all managed within a single HR platform with contract-type-specific business rules."
          }
        ],
        "int": [
          "Identity & Access Management (IAM / SSO) – provisioning accounts on hire",
          "Learning Management System (LMS) – trigger onboarding training curricula",
          "Contact Centre Platform (CCaaS) – provision agent seat and assign queue",
          "Workforce Management (WFM) – create agent record, assign team/skill group",
          "Payroll system – employee master data, salary, bank details, deductions",
          "Skills Management – initialise skills profile on hire",
          "Background screening vendors (e.g. HireRight, Sterling)",
          "Document management / eSignature (DocuSign, Adobe Sign)",
          "IT Service Management (ITSM) – trigger hardware/software provisioning",
          "Finance / ERP – cost centre and headcount reporting"
        ],
        "glo": [
          "Local labour law compliance (at-will vs. contract employment, notice periods, probation rules) per country",
          "Right-to-work documentation varies by jurisdiction (I-9 USA, BRP checks UK, etc.)",
          "GDPR (EU/UK), PDPA (Thailand/India), LGPD (Brazil), CCPA (California) — employee data privacy",
          "Multi-currency salary and benefits configuration",
          "Localised employment contract templates per country",
          "National insurance / social security schemes differ per country",
          "Multi-language HR portal to support diverse agent populations",
          "Public holiday calendars per country/region for leave calculations",
          "Statutory leave entitlements differ (e.g. 28 days UK, 10 days USA PTO, mandatory sick pay schemes)",
          "Works councils / union consultation requirements in some geographies (Germany, France)",
          "Data residency: employee PII must remain within national borders in some countries"
        ]
      },
      {
        "title": "Learning & Development (L&D) and LMS",
        "category": "Talent Development | Training Operations",
        "usecase": "After a QA review flags that 12% of agents are giving incorrect refund policy answers, the L&D team creates a 15-minute refresher module in Cornerstone LMS, auto-enrols the affected agents, and tracks completion; the error rate drops to 2% within 3 weeks.",
        "sub": [
          {
            "name": "Training needs analysis (TNA) – gap assessment against skills profiles and performance data",
            "definition": "A structured diagnostic process that compares each agent's current competencies against the skills and knowledge requirements of their role — drawing on QA scores, performance metrics, customer feedback, and skills profile data — to identify specific training gaps and prioritise learning interventions.",
            "usecase": "A quarterly TNA report reveals that 45 agents on the insurance queue score below threshold on the 'policy amendment' competency; the L&D team cross-references this with QA data showing a 15% error rate on amendment calls, and designs a targeted 2-hour workshop."
          },
          {
            "name": "Learning Management System (LMS): course creation, catalogue management, enrolment, completion tracking",
            "definition": "The central platform for authoring, organising, delivering, and tracking all formal learning content — including course catalogues, learner enrolment (manual and automated), progress monitoring, completion certification, and compliance reporting — serving as the system of record for all training activity across the contact centre.",
            "usecase": "The L&D team publishes a new 'Anti-Money Laundering Refresher' course in the LMS catalogue; the system auto-enrols all 600 agents in the financial services programme, tracks completion against a 30-day deadline, and generates a compliance report showing 94% on-time completion."
          },
          {
            "name": "Blended learning delivery: eLearning (SCORM/xAPI), virtual classroom (VILT), instructor-led (ILT), microlearning",
            "definition": "The capability to deliver training through multiple modalities — self-paced digital modules (SCORM/xAPI compliant), live virtual instructor-led sessions, face-to-face classroom training, and bite-sized microlearning content — blended together in structured curricula that suit different learning styles and operational scheduling constraints.",
            "usecase": "A new product training curriculum combines a 20-minute eLearning module (self-paced), a 1-hour live virtual classroom Q&A session, a 10-minute microlearning video on key objection handling, and a practical role-play assessment with a trainer — all tracked as a single learning pathway in the LMS."
          },
          {
            "name": "Onboarding curriculum automation – auto-assign mandatory courses on hire",
            "definition": "The automated enrolment of newly hired agents into a predefined sequence of mandatory onboarding courses — triggered by the HR system confirming a new hire event — ensuring every new joiner receives consistent foundational training in company policies, systems, products, and compliance topics from day one.",
            "usecase": "When HR confirms a new agent's start date, the LMS automatically enrols them in the 3-week onboarding curriculum: 8 compliance modules, 5 product knowledge courses, 3 systems training sessions, and 2 call handling workshops — with a sequenced schedule aligned to their WFM training roster."
          },
          {
            "name": "Product and process knowledge training library",
            "definition": "A curated repository of training materials covering all products, services, and operational processes that agents need to know — maintained as a living library that is updated whenever products launch, pricing changes, or processes are amended — serving as the foundational training content for both onboarding and ongoing development.",
            "usecase": "When the business launches a new broadband product tier, the L&D team publishes a product knowledge module, an updated process guide for order placement, and a troubleshooting decision tree to the training library; all agents on the broadband queue are auto-assigned the content with a 7-day completion target."
          },
          {
            "name": "Compliance and regulatory training (data protection, anti-bribery, health & safety) with mandatory completion tracking",
            "definition": "Mandatory training programmes covering legal and regulatory obligations — including data protection (GDPR), anti-bribery and corruption, health and safety, financial conduct rules, and sector-specific regulations — with enforced completion tracking, renewal schedules, and automated escalation for non-completion.",
            "usecase": "Annual GDPR refresher training is auto-assigned to all 1,200 agents on 1st January with a 28-day completion deadline; the LMS sends reminders at day 14 and day 21, escalates non-completers to their line manager at day 25, and reports 100% compliance to the DPO by deadline."
          },
          {
            "name": "Call handling, soft skills, and customer experience training",
            "definition": "Training programmes focused on the interpersonal and communication skills essential for effective customer interactions — including active listening, empathy, de-escalation techniques, call control, rapport building, and first contact resolution strategies — designed to improve both customer experience scores and agent confidence.",
            "usecase": "After CSAT scores dip on the complaints queue, the L&D team rolls out a 4-hour 'Empathetic Complaint Resolution' workshop covering acknowledgement techniques, structured apology frameworks, and resolution ownership — with pre/post assessment showing a 22% improvement in role-play scores."
          },
          {
            "name": "System simulation / guided practice environments (walk-throughs of CRM, CCaaS tools)",
            "definition": "Replica or sandboxed versions of the production contact centre systems (CRM, CCaaS, billing, knowledge base) where agents can practise navigating workflows, handling simulated customer interactions, and executing system processes without any risk of impacting live customer data or operations.",
            "usecase": "During onboarding, new agents spend 3 days in a simulated CRM and CCaaS environment handling scripted customer scenarios — placing test orders, logging cases, transferring calls, and navigating the knowledge base — before they take their first live call."
          },
          {
            "name": "Assessment engine: quizzes, practical assessments, pass/fail thresholds",
            "definition": "The testing and evaluation component of the LMS that enables creation of knowledge checks, scored quizzes, practical skill assessments, and formal examinations — with configurable pass/fail thresholds, retry limits, and randomised question banks — used to validate learning outcomes and gate progression.",
            "usecase": "At the end of the compliance training module, agents complete a 20-question randomised quiz with a 90% pass threshold; those who fail are auto-enrolled in a remedial session and must re-sit within 5 days; pass results are logged against their compliance training record."
          },
          {
            "name": "Certifications and badges: issue, renew, track expiry",
            "definition": "The formal recognition of competency achievement through digital certifications and badges — issued upon successful completion of training and assessment milestones, with defined validity periods and automated renewal workflows — serving as verifiable evidence of agent capability for regulatory, quality, and career progression purposes.",
            "usecase": "An agent completes the FCA-regulated advice certification; the LMS issues a digital badge valid for 12 months, adds it to their skills profile, and schedules an automated renewal reminder 60 days before expiry — the expired badge triggers queue removal if not renewed."
          },
          {
            "name": "Learning pathways and career development plans",
            "definition": "Structured sequences of learning activities and milestones mapped to career progression routes — showing agents what training, certifications, and experience they need to advance from CCR to senior agent, team leader, QA analyst, or other roles — providing visibility and motivation for professional development.",
            "usecase": "An agent aspiring to become a team leader views their career development pathway: 3 completed modules, 2 in progress, and 4 remaining — including a leadership skills workshop, a WFM fundamentals course, and a 3-month coaching secondment — with estimated completion in 6 months."
          },
          {
            "name": "Performance-triggered retraining workflows (auto-assign remedial training on quality failures)",
            "definition": "Automated rules that detect when an agent's performance or quality scores fall below defined thresholds and automatically enrol them in targeted remedial training — linking QA evaluation outcomes, performance KPIs, and customer feedback directly to learning interventions without requiring manual L&D intervention.",
            "usecase": "When an agent's QA score drops below 75% for two consecutive evaluation cycles, the system automatically assigns a 'Call Quality Improvement' module and a coaching session with their team leader; the agent's QA score is re-evaluated after completion to track improvement."
          },
          {
            "name": "Manager dashboards for team training compliance and completion",
            "definition": "Dedicated reporting views for team leaders and operations managers showing the training status of their direct reports — including compliance training completion rates, overdue assignments, certification expiry warnings, and learning pathway progress — enabling managers to proactively manage team development.",
            "usecase": "A team leader opens their L&D dashboard on Monday morning to see that 2 of their 15 agents have overdue compliance training, 1 has a certification expiring next week, and 3 are progressing well through their career development pathways — they action the overdue items immediately."
          },
          {
            "name": "Content authoring tools integration (Articulate Storyline, Rise, Lectora)",
            "definition": "The integration of professional eLearning content authoring platforms with the LMS — enabling instructional designers to create rich, interactive, multimedia training content and publish it directly to the learning catalogue in SCORM or xAPI format without manual file handling.",
            "usecase": "An instructional designer builds an interactive product training module in Articulate Rise with embedded video, drag-and-drop activities, and branching scenarios; they publish it as a SCORM package directly to the LMS, where it appears in the catalogue ready for enrolment within minutes."
          },
          {
            "name": "Training effectiveness measurement (Kirkpatrick levels, pre/post assessment delta)",
            "definition": "The systematic evaluation of training impact across multiple levels — learner reaction (satisfaction), learning (knowledge gain measured by pre/post assessment), behaviour change (on-the-job application observed through QA), and business results (KPI improvement) — providing evidence of training ROI and identifying programmes that need redesign.",
            "usecase": "After rolling out a new objection handling workshop, L&D measures effectiveness at all 4 Kirkpatrick levels: 92% learner satisfaction, 34% improvement in post-assessment scores, 18% increase in QA scores on the targeted competency, and a measurable 2.1-point CSAT improvement on the relevant queue within 6 weeks."
          },
          {
            "name": "Coaching session tracking and 1:1 development plan management",
            "definition": "Coaching session tracking and 1:1 development plan management is a foundational element of the Learning & Development (L&D) and LMS capability within the People & Workforce domain. It enables contact centre operations to deliver this function at enterprise scale with consistency, measurability, and compliance — supporting the end-to-end customer care representative journey from initial contact through resolution.",
            "usecase": "The contact centre team leverages coaching session tracking and 1:1 development plan management within the Learning & Development (L&D) and LMS function to streamline operations and improve service delivery. The capability is integrated with adjacent systems in the CCaaS ecosystem, providing real-time data visibility and enabling data-driven decision-making that directly impacts customer experience and operational efficiency."
          },
          {
            "name": "AI-powered personalised learning recommendations based on role and performance",
            "definition": "Machine learning algorithms that analyse an agent's role requirements, current skills profile, performance trends, and QA outcomes to automatically recommend relevant learning content — surfacing the most impactful training opportunities tailored to each individual's development needs without requiring manual L&D curation.",
            "usecase": "An agent logging into the LMS sees personalised recommendations: a call control microlearning module (triggered by their rising AHT trend), a new product knowledge course (triggered by their queue assignment change), and a leadership skills course (triggered by their career pathway goal to become a team leader)."
          }
        ],
        "int": [
          "HR / HRIS – new hire trigger, role changes, employment status for auto-enrolment",
          "Skills Management – update skills profile on course completion or certification",
          "Quality Management – flag failed QA scores to trigger remedial training assignment",
          "Performance Management – link training completion to performance review data",
          "Contact Centre Platform / CCaaS – pull real interaction examples for embedded coaching",
          "Interaction Recording – use real call recordings as training material",
          "WFM – schedule training sessions without disrupting service level adherence",
          "Payroll / Compensation – certifications may trigger pay uplift workflows",
          "ITSM – request sandbox / simulation environment access",
          "Content libraries (LinkedIn Learning, Coursera for Business) via LTI or API"
        ],
        "glo": [
          "Multi-language course content and UI (support 20+ languages for global agent populations)",
          "Mandatory compliance training differs by country (GDPR in EU, HIPAA in USA, PCI-DSS global)",
          "Certification validity periods and renewal requirements vary by regulation",
          "Time zone aware scheduling for VILT sessions across regions",
          "Accessibility standards (WCAG 2.1 AA) for agents with disabilities",
          "SCORM/xAPI standards ensure portability of learning content across vendors",
          "Local pedagogical norms may differ (e.g. instructor-led preference in APAC markets)",
          "Currency and contractual hours – training time must comply with paid work-time rules per country",
          "Data residency for learner records: some countries require training data to remain local",
          "Regional LMS hosting to minimise latency for video-heavy eLearning content"
        ]
      },
      {
        "title": "Skills Management",
        "category": "Workforce Capability | Talent Intelligence",
        "usecase": "When a product team launches a new broadband tier, the Skills Management system identifies 340 agents without the required product knowledge certification and flags them to the L&D team, who publish the training before the launch date.",
        "sub": [
          {
            "name": "Skills taxonomy / framework: define all skills relevant to contact centre roles (language, product, process, behavioural)",
            "definition": "A comprehensive, hierarchical classification of every skill required across all contact centre roles — organised into categories such as language proficiency, product knowledge, process competency, technical system skills, and behavioural/soft skills — providing a standardised vocabulary and structure that underpins routing, training, performance, and career management.",
            "usecase": "The skills team defines a taxonomy of 240 discrete skills across 6 categories; each skill has a unique ID, a clear description, and defined proficiency levels — enabling the CCaaS ACD to route calls based on 'Mortgage Product – Expert' rather than a generic 'mortgage' flag."
          },
          {
            "name": "Skills profile per CCR: current proficiency level per skill, verified vs. self-assessed",
            "definition": "An individual skills record maintained for each agent, capturing their current proficiency level for every skill in the taxonomy — distinguishing between self-assessed competencies and those formally verified through training completion, QA evaluation, or manager endorsement — feeding directly into the CCaaS routing engine.",
            "usecase": "Agent Smith's skills profile shows 'Spanish – Proficient (verified via DELE B2 certificate)', 'Billing – Expert (QA verified)', and 'Retention Offers – Developing (self-assessed)'; the ACD uses only the verified skills for routing decisions while flagging the self-assessed skill for validation."
          },
          {
            "name": "Skill proficiency levels: novice, developing, proficient, expert (or equivalent scale)",
            "definition": "A standardised scale for measuring and expressing the depth of an agent's competency in each skill — typically ranging from novice through developing, proficient, and expert — with clear behavioural descriptions at each level that enable consistent assessment, appropriate routing, and meaningful development conversations.",
            "usecase": "The skills framework defines 4 proficiency levels for each skill: Novice (can handle with guidance), Developing (can handle independently for straightforward cases), Proficient (can handle complex cases), Expert (can coach others and handle escalations) — each level maps to different routing priorities in the ACD."
          },
          {
            "name": "Skills gap analysis against role requirements or career progression milestones",
            "definition": "The systematic comparison of an agent's current skills profile against the target skills required for their role or their desired next-level position — identifying specific skills that need development, prioritising training investments, and providing agents with a clear view of what they need to achieve for career progression.",
            "usecase": "A skills gap report shows that 28 agents on the insurance queue lack the 'Claims Assessment – Proficient' skill required for the new complex claims routing group; the L&D team prioritises a targeted training programme to close the gap before the new routing configuration goes live."
          },
          {
            "name": "Skill acquisition event management: certification earned, training completed, QA-validated",
            "definition": "The automated tracking and recording of events that change an agent's skills profile — including training course completions, certification awards, successful QA evaluations, and manager endorsements — ensuring that skill updates are reflected immediately in routing tables and performance records without manual intervention.",
            "usecase": "An agent completes the 'Advanced Troubleshooting' certification at 3pm; by 3:05pm, their skills profile is updated, the CCaaS ACD adds them to the Tier 2 technical support routing group, and their manager receives a notification confirming the skill acquisition."
          },
          {
            "name": "Skills decay tracking: flag skills not practised within a defined period",
            "definition": "The monitoring of skill currency based on how recently an agent has handled interactions requiring a specific skill — flagging skills that have not been exercised within a defined period (e.g., 90 days) for revalidation or removal from routing — preventing customers from being routed to agents whose skills may have deteriorated through lack of practice.",
            "usecase": "The system detects that Agent Johnson hasn't handled a French-language call in 120 days; the skills decay rule triggers a notification to their team leader and removes 'French – Proficient' from their active routing skills until they complete a 30-minute language refresher assessment."
          },
          {
            "name": "Skill-based routing configuration feed to CCaaS ACD",
            "definition": "The automated data feed from the skills management system to the CCaaS Automatic Call Distributor (ACD) that maps each agent's verified skills and proficiency levels to routing queue eligibility — ensuring that customer interactions are directed to agents with the precise skills needed for resolution.",
            "usecase": "The skills management system publishes a nightly feed of all agent skills to the Genesys Cloud ACD; when a Spanish-speaking customer calls about a mortgage, the ACD matches the required skills ('Spanish – Proficient' + 'Mortgage – Expert') and routes to the 3 available agents who meet both criteria."
          },
          {
            "name": "Skills search and talent pool identification (e.g. find all French-speaking agents certified on Product X)",
            "definition": "A search and query capability that enables workforce planners, L&D teams, and operations managers to identify agents who possess specific combinations of skills — supporting staffing decisions, project assignments, knowledge transfer, and emergency capacity planning across the entire agent population.",
            "usecase": "The operations manager needs to staff a new French-language mortgage queue; they search the skills database for agents with 'French – Proficient or above' AND 'Mortgage – Proficient or above' and instantly identify 12 qualified agents across 3 sites, enabling a rapid staffing plan."
          },
          {
            "name": "Career pathway mapping – skill requirements for next-level role",
            "definition": "The formal definition of which skills (and at what proficiency levels) are required for each role in the contact centre career ladder — enabling agents to see exactly what they need to develop to progress from their current role to their target role and to track their progress in real time.",
            "usecase": "An agent aspiring to become a QA Analyst views their career pathway: they meet 8 of 12 required skills but need to achieve 'Quality Frameworks – Proficient', 'Coaching – Developing', 'Data Analysis – Developing', and 'Calibration – Novice' before they can apply for the next vacancy."
          },
          {
            "name": "Manager-led skill endorsement / validation workflow",
            "definition": "A structured approval process whereby a team leader or subject matter expert formally validates an agent's proficiency in a specific skill — based on observed performance, QA evidence, or practical assessment — elevating a self-assessed or training-based skill to 'verified' status for routing and career progression purposes.",
            "usecase": "After observing Agent Patel handle 20 complex retention calls with consistent quality, the team leader endorses their 'Retention – Expert' skill in the system; this verified endorsement upgrades their routing priority and qualifies them for the senior retentions specialist role."
          },
          {
            "name": "Bulk skills update tooling (e.g. new product launch triggers skill assignment to trained cohort)",
            "definition": "The ability to apply skills profile changes to large groups of agents simultaneously — typically triggered by a training event such as a new product launch or process change — adding, updating, or removing skills in bulk rather than requiring individual manual updates for each agent.",
            "usecase": "After 340 agents complete the new 'Fibre Broadband Premium' product training, the L&D team executes a bulk skills update that adds 'Fibre Premium – Proficient' to all 340 profiles simultaneously, immediately making them eligible for the new product queue in the ACD."
          }
        ],
        "int": [
          "LMS / L&D – course completion and certification updates skills profile automatically",
          "Quality Management – QA-validated competence evidence updates skills",
          "HR / HRIS – role changes trigger skills profile update",
          "CCaaS – skills profile feeds ACD routing table for skills-based routing",
          "WFM – skills data informs capacity planning and scheduling by skill group",
          "Performance Management – skills attainment as a performance dimension",
          "Incentive & Compensation – skill certification may trigger pay band progression",
          "Reporting & Analytics – skills coverage heatmaps and gap reporting"
        ],
        "glo": [
          "Language skills are a critical routing capability – accurate multi-language proficiency tracking essential",
          "Regulatory certifications (FCA CF30, insurance licences, Series licences in USA) must be tracked and renewed",
          "Skills taxonomy must be translatable – consistent skill definitions across geographies",
          "Regional skill requirements differ: local product knowledge, language, regulatory awareness",
          "Data privacy: skills profiles constitute employee personal data – subject to GDPR and equivalents",
          "Professional licensing requirements differ per country and sector (financial services, healthcare, utilities)"
        ]
      },
      {
        "title": "Workforce Management (WFM)",
        "category": "Operational Planning | Staffing Optimisation",
        "usecase": "During a bank holiday Monday, the WFM system detects actual contact volume is 34% above forecast by 9am; it automatically triggers voluntary overtime notifications to off-duty agents and adjusts intraday schedules to prevent SLA breach.",
        "sub": [
          {
            "name": "Long-range capacity planning and headcount forecasting (12–52 weeks)",
            "definition": "The strategic planning function that models future contact volumes, handle times, and service level targets over a 12–52 week horizon to determine the number of agents (headcount) and skill mix required — informing recruitment pipelines, training plans, budget allocations, and site capacity decisions.",
            "usecase": "The WFM capacity model forecasts a 15% volume increase on the broadband queue over the next 6 months due to a planned product launch; the output drives a recruitment intake of 45 additional agents, phased across 3 training cohorts starting 16 weeks before launch."
          },
          {
            "name": "Medium-term scheduling (4–8 weeks): shift pattern building, rota generation",
            "definition": "The creation of agent work schedules 4–8 weeks in advance — defining shift start/end times, break placements, and days off — optimised to match forecasted contact arrival patterns while respecting contractual working hours, employee preferences, and labour law constraints.",
            "usecase": "The WFM team generates rotas for the next 6 weeks, producing 14 distinct shift patterns that cover the forecasted volume curve from 7am to 10pm; agents receive their schedules 4 weeks in advance, with 85% of shift preferences accommodated."
          },
          {
            "name": "Short-term forecasting: daily/intraday volume prediction using historical patterns and planned events",
            "definition": "The prediction of contact volumes at daily and intraday (15-minute interval) granularity for the upcoming 1–4 weeks — using historical arrival patterns, day-of-week trends, known events (marketing campaigns, billing cycles, public holidays), and recent volume trajectory to generate the staffing requirement for each interval.",
            "usecase": "The WFM system predicts that next Tuesday will see 4,200 calls with a peak of 380 calls between 10:00–10:30, driven by the monthly billing cycle; the schedule is adjusted to have 42 agents available during the peak interval to maintain the 80/20 service level target."
          },
          {
            "name": "Intraday management: real-time reforecasting and schedule adjustment",
            "definition": "The continuous process of comparing actual contact volumes and staffing levels against the forecast during the operating day — identifying variances and making real-time schedule adjustments (bringing in overtime, cancelling offline activities, rebalancing queues) to protect service levels.",
            "usecase": "At 10:15am, actual volume is running 22% above forecast; the intraday manager cancels the 11am team meeting for 8 agents, activates the voluntary overtime SMS alert to off-duty staff, and rebalances 4 agents from the low-volume email queue to voice — service levels recover by 11:30am."
          },
          {
            "name": "Multi-channel volume forecasting: voice, chat, email, social (different handle time and concurrency profiles)",
            "definition": "The independent forecasting of contact volumes for each communication channel — recognising that voice, live chat, email, social media, and messaging channels have fundamentally different arrival patterns, handle times, and agent concurrency ratios — producing channel-specific staffing requirements.",
            "usecase": "The WFM model forecasts 3,000 voice contacts (AHT 6 min, concurrency 1), 1,800 chats (AHT 8 min, concurrency 3), and 2,400 emails (AHT 4 min, concurrency 1) for Monday; the staffing model calculates that 180 voice agents, 40 chat agents, and 60 email agents are needed at peak."
          },
          {
            "name": "Shift bidding and preference management (agent self-service shift selection)",
            "definition": "A system that allows agents to express their shift preferences or bid for available schedules within defined rules — balancing agent satisfaction and flexibility with operational coverage requirements — improving engagement and reducing attrition by giving agents greater control over their working patterns.",
            "usecase": "During the monthly shift bidding window, agents rank their preferred shifts from the published options; the system allocates shifts based on a weighted algorithm considering seniority, performance score, and previous allocation fairness — 88% of agents receive their first or second preference."
          },
          {
            "name": "Break and lunch scheduling within schedule to meet occupancy targets",
            "definition": "The optimised placement of agent breaks and lunch periods within their shift — staggered to minimise the impact on service levels and maintain target occupancy rates throughout the day — ensuring that break scheduling doesn't create staffing troughs during high-volume intervals.",
            "usecase": "The WFM system staggers lunch breaks for 120 agents across 90-minute windows, ensuring no more than 10% of agents are on break at any interval; break placements are optimised so that the 12:00–13:30 period maintains 85% of the staffing level compared to non-break intervals."
          },
          {
            "name": "Absence and leave integration: automatic shrinkage calculation",
            "definition": "The automatic incorporation of all planned and unplanned absence data — annual leave, sick leave, training time, coaching sessions, and other non-productive activities — into the WFM staffing model as shrinkage factors, ensuring that gross staffing requirements account for the realistic proportion of agents unavailable for contact handling.",
            "usecase": "The WFM system calculates total shrinkage at 32%: annual leave (8%), training (5%), sick absence (4%), coaching (3%), meetings (3%), breaks (7%), system unavailability (2%) — the staffing model automatically inflates the net requirement of 100 agents to a gross requirement of 147 scheduled agents."
          },
          {
            "name": "Overtime and extra shift management",
            "definition": "The capability to plan, offer, approve, and track overtime and additional shift working — including voluntary overtime requests, mandatory overtime triggers, premium pay rate calculations, and compliance with working time regulations — used as a flexible capacity lever for managing volume spikes and absence shortfalls.",
            "usecase": "When Wednesday's intraday forecast shows a 15% staffing shortfall due to unexpected sick absence, the system sends voluntary overtime SMS offers to 30 off-duty agents with the overtime premium rate; 12 agents accept within 2 hours, closing the gap by the afternoon peak."
          },
          {
            "name": "Real-time adherence (RTA) monitoring: agent actual state vs. scheduled state",
            "definition": "The continuous comparison of each agent's actual activity state (as reported by the CCaaS ACD) against their scheduled activity for that moment — identifying deviations such as late starts, extended breaks, unplanned offline time, or agents working when scheduled off — in real time with second-by-second precision.",
            "usecase": "The RTA dashboard shows that at 10:32am, 8 agents are out of adherence: 3 are still on break 5 minutes past schedule, 2 logged in late, and 3 are in 'unavailable' state during scheduled productive time — supervisors receive colour-coded alerts and can act immediately."
          },
          {
            "name": "Adherence alerting to supervisors on deviation",
            "definition": "Automated notifications sent to team leaders and supervisors when individual agents breach adherence thresholds — such as being out of adherence for more than a defined number of minutes or missing a scheduled activity — enabling timely intervention and coaching rather than relying on end-of-day reporting.",
            "usecase": "When Agent Lee has been in 'after-call work' for 8 minutes (threshold: 3 minutes), the system sends an amber alert to their supervisor's dashboard; if it reaches 12 minutes, it escalates to a red alert with an audible notification on the supervisor's headset."
          },
          {
            "name": "Service level modelling and what-if scenario planning",
            "definition": "Analytical tools that enable WFM planners to model the relationship between staffing levels, service level targets, and cost — running 'what-if' scenarios to answer questions like 'what happens to service level if we lose 10 agents?' or 'what staffing do we need to move from 80/20 to 90/10?' — informing strategic and tactical decisions.",
            "usecase": "The WFM analyst runs a what-if scenario showing that moving the service level target from 80/20 to 85/15 would require 12 additional FTEs at a cost of £360K annually; the operations director uses this analysis to justify the investment based on the projected CSAT improvement."
          },
          {
            "name": "Skills-based scheduling: ensure skill coverage across all planned hours",
            "definition": "The scheduling algorithm's consideration of agent skills when building rotas — ensuring that every operating interval has sufficient coverage of each required skill (language, product, process) rather than simply scheduling enough total headcount — preventing situations where agents are available but the wrong skills are on shift.",
            "usecase": "The WFM system identifies that the Friday evening shift has only 2 Spanish-speaking agents scheduled against a forecast of 45 Spanish calls per hour; it automatically adjusts the schedule to move 3 additional Spanish-skilled agents from Saturday morning to Friday evening."
          },
          {
            "name": "Multi-site and multi-skill scheduling with virtualised queues",
            "definition": "Multi-site and multi-skill scheduling with virtualised queues is a foundational element of the Workforce Management (WFM) capability within the People & Workforce domain. It enables contact centre operations to deliver this function at enterprise scale with consistency, measurability, and compliance — supporting the end-to-end customer care representative journey from initial contact through resolution.",
            "usecase": "The contact centre team leverages multi-site and multi-skill scheduling with virtualised queues within the Workforce Management (WFM) function to streamline operations and improve service delivery. The capability is integrated with adjacent systems in the CCaaS ecosystem, providing real-time data visibility and enabling data-driven decision-making that directly impacts customer experience and operational efficiency."
          },
          {
            "name": "Training and meetings scheduling without SLA degradation",
            "definition": "The WFM function's ability to schedule offline activities — team meetings, training sessions, coaching, and calibration sessions — during intervals where forecasted contact volumes are low enough to absorb the temporary reduction in available agents without breaching service level targets.",
            "usecase": "The WFM team identifies that Wednesday 2:00–3:00pm consistently has the lowest volume of the week; they schedule all team meetings and training sessions in this window, ensuring that 15 agents can be offline for training without impacting the 80/20 service level."
          },
          {
            "name": "Historical reporting: adherence, occupancy, utilisation, service levels achieved",
            "definition": "The retrospective analysis and reporting of key WFM performance metrics — including schedule adherence, occupancy rates, agent utilisation, service levels achieved versus target, forecast accuracy, and shrinkage — used for continuous improvement, performance management, and capacity planning refinement.",
            "usecase": "The weekly WFM report shows last week's performance: 91% schedule adherence (target 92%), 78% occupancy (target 80%), service level achieved 82/20 (target 80/20), and forecast accuracy of 96% — the WFM team identifies that Tuesday's variance was caused by an unplanned marketing email that spiked chat volume."
          }
        ],
        "int": [
          "CCaaS – real-time ACD statistics feed (volume, AHT, queue depth, agent state)",
          "HR / HRIS – approved headcount, leave records, employment hours, working patterns",
          "Skills Management – skill coverage requirements for scheduling",
          "Performance Management – publish adherence scores back to PM dashboard",
          "Incentive & Compensation – adherence and schedule compliance data for incentive calculation",
          "Reporting & Analytics – WFM data for operational and capacity planning reports",
          "LMS / L&D – training session scheduling integrated with shift plans",
          "Finance / ERP – planned headcount and labour cost modelling"
        ],
        "glo": [
          "Working time regulations: EU Working Time Directive (48-hour week, rest breaks), FLSA (USA overtime), Australian NES",
          "Shift pattern limits and mandatory rest periods vary by country and collective agreement",
          "Public holiday calendars per country – must be loaded and maintained",
          "Multi-time-zone scheduling: support for globally distributed or follow-the-sun operational models",
          "Part-time, job-share, and flexible working arrangements must be schedulable",
          "Night shift and weekend premium pay rules differ – WFM must flag for payroll",
          "Union agreements may restrict scheduling flexibility in certain sites (France, Germany, Nordics)",
          "Data residency: agent schedule and adherence data subject to local employment data rules",
          "Annualised hours contracts common in some markets – WFM must support this model",
          "Language coverage planning: forecast and schedule by language skill group for multi-lingual sites"
        ]
      },
      {
        "title": "Incentive & Compensation Management",
        "category": "Total Reward | Variable Pay | Agent Motivation",
        "usecase": "A contact centre running a sales incentive scheme automatically calculates each agent's monthly bonus from a weighted basket of call conversion rate, QA score, and adherence — generating payroll-ready outputs without any manual spreadsheet work.",
        "sub": [
          {
            "name": "Incentive plan design and configuration: KPIs, weightings, targets, caps, floors",
            "definition": "The end-to-end process and technology that governs incentive plan design and configuration, specifically: KPIs, weightings, targets, caps, floors. This capability is a key component of the Incentive & Compensation Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements incentive plan design and configuration to kpis, weightings, targets, caps, floors; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Multiple plan types: individual, team, site, programme incentives",
            "definition": "A structured enterprise function that delivers multiple plan types, specifically: individual, team, site, programme incentives. As part of Incentive & Compensation Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements multiple plan types to individual, team, site, programme incentives; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Automated data aggregation from all source systems (QA, performance, adherence, WFM, CCaaS)",
            "definition": "An integrated function within the CCaaS ecosystem that manages automated data aggregation from all source systems within the contact centre environment. This capability is a key component of the Incentive & Compensation Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys automated data aggregation from all source systems as part of their Incentive & Compensation Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Incentive calculation engine: formula-based, tiered, multiplier, and exception handling",
            "definition": "The end-to-end process and technology that governs incentive calculation engine, specifically: formula-based, tiered, multiplier, and exception handling. This capability is a key component of the Incentive & Compensation Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements incentive calculation engine to formula-based, tiered, multiplier, and exception handling; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Bonus and commission calculation: daily, weekly, monthly, quarterly cycles",
            "definition": "The organisational capability responsible for bonus and commission calculation, specifically: daily, weekly, monthly, quarterly cycles. This is a mandatory element of the Incentive & Compensation Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements bonus and commission calculation to daily, weekly, monthly, quarterly cycles; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Attainment reporting: individual and team progress against targets in real time",
            "definition": "The enterprise-grade capability responsible for attainment reporting, specifically: individual and team progress against targets in real time. This is a mandatory element of the Incentive & Compensation Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements attainment reporting to individual and team progress against targets in real time; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Manager and agent self-service visibility of current attainment and projected earnings",
            "definition": "The systematic approach to delivering manager and agent self-service visibility of current attainment and projected earnings within the contact centre environment. As part of Incentive & Compensation Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys manager and agent self-service visibility of current attainment and projected earnings as part of their Incentive & Compensation Management capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Dispute management: agent query and manager resolution workflow for incentive adjustments",
            "definition": "The systematic approach to delivering dispute management, specifically: agent query and manager resolution workflow for incentive adjustments. This is a mandatory element of the Incentive & Compensation Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements dispute management to agent query and manager resolution workflow for incentive adjustments; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Special incentive campaigns and SPIFF management",
            "definition": "The end-to-end process and technology that governs special incentive campaigns and spiff management within the contact centre environment. Effective implementation of this sub-capability within Incentive & Compensation Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys special incentive campaigns and spiff management as part of their Incentive & Compensation Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Holdback and claw-back management",
            "definition": "The operational discipline and tooling that enables holdback and claw-back management within the contact centre environment. As part of Incentive & Compensation Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys holdback and claw-back management as part of their Incentive & Compensation Management capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Incentive statement generation per agent per period",
            "definition": "A configurable platform capability that provides incentive statement generation per agent per period within the contact centre environment. Within the People & Workforce pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys incentive statement generation per agent per period as part of their Incentive & Compensation Management capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Audit trail for all calculation inputs and adjustments",
            "definition": "The end-to-end process and technology that governs audit trail for all calculation inputs and adjustments within the contact centre environment. Within the People & Workforce pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys audit trail for all calculation inputs and adjustments as part of their Incentive & Compensation Management capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Recognition and non-cash reward management (vouchers, days off, points)",
            "definition": "The enterprise-grade capability responsible for recognition and non-cash reward management within the contact centre environment. Within the People & Workforce pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys recognition and non-cash reward management as part of their Incentive & Compensation Management capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Incentive plan versioning and change management",
            "definition": "The operational discipline and tooling that enables incentive plan versioning and change management within the contact centre environment. This capability is a key component of the Incentive & Compensation Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys incentive plan versioning and change management as part of their Incentive & Compensation Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "CCaaS / Contact Centre Platform – calls handled, sales converted, AHT data",
          "Quality Management – QA scores as incentive modifier",
          "WFM – adherence and schedule compliance data",
          "Performance Management – holistic performance score",
          "Skills Management – skill-based pay uplift data",
          "CRM – sales/conversion outcome data",
          "Payroll – approved incentive amounts per agent per pay period",
          "HR / HRIS – employment contract type, pay group, cost centre",
          "Reporting & Analytics – incentive cost analytics, ROI of incentive programmes",
          "Finance / ERP – incentive cost accrual and budget management"
        ],
        "glo": [
          "Variable pay regulations differ: some countries restrict commission clawbacks (France, Germany)",
          "Minimum wage laws: variable pay must not reduce effective hourly rate below national minimum",
          "Tax treatment of bonus and commission differs by country (PAYE in UK, federal/state withholding in USA)",
          "Sales incentive regulations: FCA PS10/12 (UK), FINRA rules (USA) in financial services",
          "Multi-currency incentive calculation for global programmes with local payouts",
          "Works council approval may be required for incentive plan changes in some countries",
          "Holiday pay calculations may need to include average variable pay (UK Employment Rights Act)",
          "Transparent pay reporting obligations (EU Pay Transparency Directive from 2026)",
          "Incentive statement localisation: language and currency per agent location"
        ]
      },
      {
        "title": "Recruitment & Talent Acquisition",
        "category": "Talent Pipeline | Workforce Growth | Pre-Employment",
        "usecase": "A high-volume contact centre needs 200 seasonal agents for Christmas; the ATS automatically screens 1,400 applicants against defined competency criteria, schedules video interviews via integration with HireVue, and generates conditional offer letters for the top 220 candidates.",
        "sub": [
          {
            "name": "Applicant Tracking System (ATS): end-to-end job requisition, candidate pipeline management, interview scheduling, and offer management",
            "definition": "An integrated function within the CCaaS ecosystem that manages applicant tracking system, specifically: end-to-end job requisition, candidate pipeline management, interview scheduling, and offer management. Effective implementation of this sub-capability within Recruitment & Talent Acquisition requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements applicant tracking system to end-to-end job requisition, candidate pipeline management, interview scheduling, and offer managemen; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Job description library: standardised, role-levelled JDs for all contact centre roles (CCR, Team Leader, QA Analyst, WFM Analyst, etc.) with skills requirements aligned to the skills taxonomy",
            "definition": "The systematic approach to delivering job description library, specifically: standardised, role-levelled JDs for all contact centre roles (CCR, Team Leader, QA Analyst, WFM Analyst, etc.) with skills requirements aligned to the skills taxonomy. As part of Recruitment & Talent Acquisition, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements job description library to standardised, role-levelled jds for all contact centre roles (ccr, team leader, qa analyst, wfm anal; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Multi-channel sourcing: job boards, social media (LinkedIn), employee referral programme, recruitment agencies, campus hiring, and internal mobility postings",
            "definition": "The operational discipline and tooling that enables multi-channel sourcing, specifically: job boards, social media (LinkedIn), employee referral programme, recruitment agencies, campus hiring, and internal mobility postings. Effective implementation of this sub-capability within Recruitment & Talent Acquisition requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements multi-channel sourcing to job boards, social media (linkedin), employee referral programme, recruitment agencies, campus hirin; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Candidate pre-screening: automated skills assessment, typing speed test, language proficiency screening, and situational judgement tests (SJTs) for contact centre suitability",
            "definition": "The systematic approach to delivering candidate pre-screening, specifically: automated skills assessment, typing speed test, language proficiency screening, and situational judgement tests (SJTs) for contact centre suitability. Effective implementation of this sub-capability within Recruitment & Talent Acquisition requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements candidate pre-screening to automated skills assessment, typing speed test, language proficiency screening, and situational judg; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Volume hiring capability: high-throughput assessment and selection workflows to handle large-scale cohort hiring for programme ramps or new site launches",
            "definition": "The enterprise-grade capability responsible for volume hiring capability, specifically: high-throughput assessment and selection workflows to handle large-scale cohort hiring for programme ramps or new site launches. Within the People & Workforce pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements volume hiring capability to high-throughput assessment and selection workflows to handle large-scale cohort hiring for programme; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Interview scorecards and structured interview frameworks aligned to competency model",
            "definition": "The organisational capability responsible for interview scorecards and structured interview frameworks aligned to competency model within the contact centre environment. This is a mandatory element of the Recruitment & Talent Acquisition capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys interview scorecards and structured interview frameworks aligned to competency model as part of their Recruitment & Talent Acquisition capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Offer management and pre-employment compliance: conditional offer letters, background check initiation, right-to-work verification trigger",
            "definition": "An integrated function within the CCaaS ecosystem that manages offer management and pre-employment compliance, specifically: conditional offer letters, background check initiation, right-to-work verification trigger. This is a mandatory element of the Recruitment & Talent Acquisition capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements offer management and pre-employment compliance to conditional offer letters, background check initiation, right-to-work verification trigger; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Talent pooling: maintain a warm pipeline of pre-screened candidates for rapid deployment on demand peaks or attrition spikes",
            "definition": "The organisational capability responsible for talent pooling, specifically: maintain a warm pipeline of pre-screened candidates for rapid deployment on demand peaks or attrition spikes. Within the People & Workforce pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements talent pooling to maintain a warm pipeline of pre-screened candidates for rapid deployment on demand peaks or attritio; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Employer brand management: careers page, employee value proposition (EVP) content, Glassdoor / employer review management",
            "definition": "A structured enterprise function that delivers employer brand management, specifically: careers page, employee value proposition (EVP) content, Glassdoor / employer review management. Effective implementation of this sub-capability within Recruitment & Talent Acquisition requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements employer brand management to careers page, employee value proposition (evp) content, glassdoor / employer review management; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Diversity, equity and inclusion (DEI) hiring practices: bias-reduced screening, diverse sourcing channels, anonymised CVs",
            "definition": "The end-to-end process and technology that governs diversity, equity and inclusion hiring practices, specifically: bias-reduced screening, diverse sourcing channels, anonymised CVs. This capability is a key component of the Recruitment & Talent Acquisition domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements diversity, equity and inclusion hiring practices to bias-reduced screening, diverse sourcing channels, anonymised cvs; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Headcount planning integration: recruitment intake aligned to WFM-driven capacity requirements and approved headcount",
            "definition": "The operational discipline and tooling that enables headcount planning integration, specifically: recruitment intake aligned to WFM-driven capacity requirements and approved headcount. This is a mandatory element of the Recruitment & Talent Acquisition capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements headcount planning integration to recruitment intake aligned to wfm-driven capacity requirements and approved headcount; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Recruitment analytics: time-to-hire, cost-per-hire, offer acceptance rate, source effectiveness, quality of hire, attrition by cohort",
            "definition": "The operational discipline and tooling that enables recruitment analytics, specifically: time-to-hire, cost-per-hire, offer acceptance rate, source effectiveness, quality of hire, attrition by cohort. Within the People & Workforce pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements recruitment analytics to time-to-hire, cost-per-hire, offer acceptance rate, source effectiveness, quality of hire, attrition; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Internal mobility portal: allow existing employees to apply for open roles or project secondments",
            "definition": "The organisational capability responsible for internal mobility portal, specifically: allow existing employees to apply for open roles or project secondments. Effective implementation of this sub-capability within Recruitment & Talent Acquisition requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements internal mobility portal to allow existing employees to apply for open roles or project secondments; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Seasonal and temporary hiring capability: zero-hours contracts, temp agency management, rapid onboarding for peak periods",
            "definition": "The operational discipline and tooling that enables seasonal and temporary hiring capability, specifically: zero-hours contracts, temp agency management, rapid onboarding for peak periods. Within the People & Workforce pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements seasonal and temporary hiring capability to zero-hours contracts, temp agency management, rapid onboarding for peak periods; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          }
        ],
        "int": [
          "HR / HRIS – approved headcount positions trigger requisitions; candidate hired triggers onboarding workflow",
          "WFM – capacity plan and forecast-driven headcount targets feed recruitment intake queue",
          "Background screening vendors (Sterling, HireRight, Experian) – automated pre-employment check trigger on offer acceptance",
          "IAM / SSO – provisioning trigger on confirmed start date",
          "LMS – new hire cohort auto-enrolment in onboarding curriculum on hire confirmation",
          "Skills Management – initialise skills profile from role requirements on hire",
          "Finance / ERP – approved headcount and salary grade budget validation before offer generation",
          "LinkedIn Recruiter / job board APIs – multi-channel posting and candidate import",
          "Reporting & Analytics – recruitment KPI dashboards and pipeline visibility"
        ],
        "glo": [
          "Recruitment advertising law: job advertisements must comply with equal opportunities legislation (Equality Act UK, Title VII USA, EU Equal Treatment Directive) – no discriminatory language",
          "Right-to-work documentation and verification requirements are country-specific: I-9 (USA), BRP/share code (UK), CNPJ/CPF (Brazil), Aadhaar (India)",
          "Data protection in recruitment: candidate personal data is subject to GDPR/local DPA from the moment of collection – privacy notice at application stage is mandatory",
          "Candidate data retention limits: GDPR requires deletion of unsuccessful candidate data within a defined period (typically 6–12 months) unless consent obtained",
          "Salary transparency laws: EU Pay Transparency Directive (2026), Colorado and New York salary disclosure laws – salary bands may need to be published in job postings",
          "Local minimum wage and employment classification rules: contractor vs. employee classification differs significantly by country (IR35 UK, gig economy laws in EU)",
          "Agency worker regulations: Working Time Directive (EU), AWR (UK) impose parity rights on temporary workers after qualifying period",
          "Language requirements for job postings: some countries require postings in the national language (France, Quebec)",
          "DEI reporting obligations vary: gender pay gap reporting (UK 250+ employees), racial equity reporting (some US states), disability disclosure targets (Germany quota system)",
          "Volume hiring for new market entry must align with local employment registration and entity establishment timelines"
        ]
      },
      {
        "title": "Agent Wellbeing & Employee Experience",
        "category": "People Experience | Mental Health | Retention & Engagement",
        "usecase": "After a spike in agent attrition, an employee experience survey surfaces that 62% of agents feel isolated working from home; the wellbeing platform triggers a structured 8-week virtual connection programme and tracks engagement scores monthly.",
        "sub": [
          {
            "name": "Employee Assistance Programme (EAP): confidential counselling, mental health support, and referral services accessible to all CCRs",
            "definition": "A structured enterprise function that delivers employee assistance programme, specifically: confidential counselling, mental health support, and referral services accessible to all CCRs. This is a mandatory element of the Agent Wellbeing & Employee Experience capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements employee assistance programme to confidential counselling, mental health support, and referral services accessible to all ccrs; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Emotional labour and burnout monitoring: structured check-ins, early warning indicators from absence patterns, QA sentiment, and performance trends to identify agents at risk",
            "definition": "A structured enterprise function that delivers emotional labour and burnout monitoring, specifically: structured check-ins, early warning indicators from absence patterns, QA sentiment, and performance trends to identify agents at risk. As part of Agent Wellbeing & Employee Experience, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements emotional labour and burnout monitoring to structured check-ins, early warning indicators from absence patterns, qa sentiment, and performance; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Wellbeing pulse surveys: regular lightweight surveys measuring psychological safety, workload satisfaction, and team climate – distinct from annual engagement surveys",
            "definition": "An integrated function within the CCaaS ecosystem that manages wellbeing pulse surveys, specifically: regular lightweight surveys measuring psychological safety, workload satisfaction, and team climate – distinct from annual engagement surveys. Effective implementation of this sub-capability within Agent Wellbeing & Employee Experience requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements wellbeing pulse surveys to regular lightweight surveys measuring psychological safety, workload satisfaction, and team climate; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Manager wellbeing toolkit: guidance, scripts, and training for team leaders to hold meaningful wellbeing conversations and recognise distress signals",
            "definition": "A structured enterprise function that delivers manager wellbeing toolkit, specifically: guidance, scripts, and training for team leaders to hold meaningful wellbeing conversations and recognise distress signals. Effective implementation of this sub-capability within Agent Wellbeing & Employee Experience requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements manager wellbeing toolkit to guidance, scripts, and training for team leaders to hold meaningful wellbeing conversations and reco; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Distressing contact management: structured protocols and mandatory breaks for agents handling emotionally difficult interactions (bereavement, domestic abuse, safeguarding, suicide intervention)",
            "definition": "The enterprise-grade capability responsible for distressing contact management, specifically: structured protocols and mandatory breaks for agents handling emotionally difficult interactions (bereavement, domestic abuse, safeguarding, suicide intervention). This capability is a key component of the Agent Wellbeing & Employee Experience domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements distressing contact management to structured protocols and mandatory breaks for agents handling emotionally difficult interactions (be; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Secondary trauma support: peer support networks and clinical supervision for agents regularly exposed to traumatic customer content",
            "definition": "The end-to-end process and technology that governs secondary trauma support, specifically: peer support networks and clinical supervision for agents regularly exposed to traumatic customer content. This is a mandatory element of the Agent Wellbeing & Employee Experience capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements secondary trauma support to peer support networks and clinical supervision for agents regularly exposed to traumatic customer co; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Flexible working arrangements: support for compressed hours, flexible start/end times, hybrid working, and part-time patterns – managed within WFM constraints",
            "definition": "An integrated function within the CCaaS ecosystem that manages flexible working arrangements, specifically: support for compressed hours, flexible start/end times, hybrid working, and part-time patterns – managed within WFM constraints. Effective implementation of this sub-capability within Agent Wellbeing & Employee Experience requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements flexible working arrangements to support for compressed hours, flexible start/end times, hybrid working, and part-time patterns – man; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Physical workplace wellbeing: ergonomics, noise management, lighting, break room quality, green spaces – connected to facilities management",
            "definition": "A structured enterprise function that delivers physical workplace wellbeing, specifically: ergonomics, noise management, lighting, break room quality, green spaces – connected to facilities management. As part of Agent Wellbeing & Employee Experience, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements physical workplace wellbeing to ergonomics, noise management, lighting, break room quality, green spaces – connected to facilities m; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Financial wellbeing: earned wage access, financial literacy resources, and savings programmes",
            "definition": "The systematic approach to delivering financial wellbeing, specifically: earned wage access, financial literacy resources, and savings programmes. This is a mandatory element of the Agent Wellbeing & Employee Experience capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements financial wellbeing to earned wage access, financial literacy resources, and savings programmes; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Social connection and community: team building, recognition events, peer recognition tools, employee community platforms",
            "definition": "The end-to-end process and technology that governs social connection and community, specifically: team building, recognition events, peer recognition tools, employee community platforms. This capability is a key component of the Agent Wellbeing & Employee Experience domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements social connection and community to team building, recognition events, peer recognition tools, employee community platforms; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Career development and growth visibility: clear career pathways, transparent promotion criteria, and development plan tracking to drive purpose and reduce attrition",
            "definition": "The enterprise-grade capability responsible for career development and growth visibility, specifically: clear career pathways, transparent promotion criteria, and development plan tracking to drive purpose and reduce attrition. This is a mandatory element of the Agent Wellbeing & Employee Experience capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements career development and growth visibility to clear career pathways, transparent promotion criteria, and development plan tracking to drive purpos; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Attrition and retention analytics: cohort survival analysis, exit interview insight, stay interview programme, predictive attrition risk scoring",
            "definition": "A structured enterprise function that delivers attrition and retention analytics, specifically: cohort survival analysis, exit interview insight, stay interview programme, predictive attrition risk scoring. This is a mandatory element of the Agent Wellbeing & Employee Experience capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements attrition and retention analytics to cohort survival analysis, exit interview insight, stay interview programme, predictive attrition ris; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Return-to-work support: structured programme for agents returning from long-term sick leave, parental leave, or personal absence",
            "definition": "The end-to-end process and technology that governs return-to-work support, specifically: structured programme for agents returning from long-term sick leave, parental leave, or personal absence. This is a mandatory element of the Agent Wellbeing & Employee Experience capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements return-to-work support to structured programme for agents returning from long-term sick leave, parental leave, or personal abs; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Agent experience feedback loop: regular structured opportunity for CCRs to raise operational friction points, tool frustrations, or process suggestions",
            "definition": "The end-to-end process and technology that governs agent experience feedback loop, specifically: regular structured opportunity for CCRs to raise operational friction points, tool frustrations, or process suggestions. Within the People & Workforce pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements agent experience feedback loop to regular structured opportunity for ccrs to raise operational friction points, tool frustrations, or; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          }
        ],
        "int": [
          "HR / HRIS – absence records, occupational health referrals, return-to-work case management",
          "Performance Management – early warning signals from declining performance metrics trigger wellbeing review",
          "Quality Management – flag interactions involving distressing content for mandatory debrief and support",
          "WFM – flexible working requests managed within scheduling constraints; break scheduling adjusted for high-stress periods",
          "LMS / L&D – mandatory resilience and wellbeing training; manager wellbeing conversation skills",
          "EAP provider API – referral pathway and uptake reporting (anonymised)",
          "Pulse survey platform (Glint, Peakon, Qualtrics EX) – employee sentiment tracking",
          "Reporting & Analytics – attrition analytics, wellbeing KPIs for site and programme dashboards",
          "Gamification / Recognition platform – peer recognition and social connection tools"
        ],
        "glo": [
          "Mental health legislation varies: duty of care obligations differ (Health & Safety at Work Act UK, OSHA General Duty Clause USA, WHS Act Australia)",
          "EAP provision is standard in some markets (USA, UK, Australia) but may need to be established from scratch in others",
          "Psychological first aid and distressing contact protocols must comply with local employment law and occupational health standards",
          "GDPR: wellbeing and health data is special category personal data – requires explicit consent and highest level of protection; anonymise pulse survey data where possible",
          "Secondary trauma legislation: some jurisdictions are introducing specific protections for workers exposed to traumatic content (relevant to social media content moderation teams)",
          "Cultural attitudes to mental health and help-seeking vary significantly across geographies – EAP and support messaging must be culturally adapted",
          "Works council / union involvement: wellbeing programmes in Germany, France, and Nordics may require co-determination or consultation",
          "Flexible working rights: statutory right to request flexible working varies by country (UK Day 1 right from April 2024, EU Work-Life Balance Directive)",
          "Earned wage access (EWA): financial wellbeing products are regulated differently across jurisdictions – ensure compliance with consumer credit and payment services regulation",
          "Multi-language wellbeing resources: EAP counsellors, support content, and manager toolkits must be available in all agent languages"
        ]
      }
    ]
  },
  {
    "label": "Customer Interaction",
    "icon": "🎧",
    "desc": "CRM, CCaaS, IVR, knowledge management, VoC, journey orchestration, digital self-service, social media, and multilingual operations.",
    "domains": [
      {
        "title": "CRM & Customer Engagement",
        "category": "Customer Operations | Front-Office Technology",
        "usecase": "When a VIP customer calls about a billing dispute, the CCaaS screen-pop pulls their full CRM record — 3 open cases, a recent churn risk flag, and their preferred callback window — giving the agent full context before saying a word.",
        "sub": [
          {
            "name": "Customer master record management (360° customer profile: demographics, history, preferences, segmentation)",
            "definition": "The organisational capability responsible for customer master record management (360° customer profile, specifically: demographics, history, preferences, segmentation). This is a mandatory element of the CRM & Customer Engagement capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements customer master record management (360° customer profile to demographics, history, preferences, segmentation); after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Case / ticket management: creation, categorisation, assignment, SLA tracking, escalation, resolution",
            "definition": "An integrated function within the CCaaS ecosystem that manages case / ticket management, specifically: creation, categorisation, assignment, SLA tracking, escalation, resolution. This capability is a key component of the CRM & Customer Engagement domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements case / ticket management to creation, categorisation, assignment, sla tracking, escalation, resolution; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Interaction history logging across all channels (voice, email, chat, social, SMS, web)",
            "definition": "The organisational capability responsible for interaction history logging across all channels within the contact centre environment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys interaction history logging across all channels as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Customer journey tracking and contextual screen-pop on inbound contact",
            "definition": "The organisational capability responsible for customer journey tracking and contextual screen-pop on inbound contact within the contact centre environment. As part of CRM & Customer Engagement, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys customer journey tracking and contextual screen-pop on inbound contact as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Omni-channel customer communication (outbound email, SMS, WhatsApp from CRM)",
            "definition": "An integrated function within the CCaaS ecosystem that manages omni-channel customer communication within the contact centre environment. As part of CRM & Customer Engagement, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys omni-channel customer communication as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Customer segmentation and value-based routing rules",
            "definition": "The operational discipline and tooling that enables customer segmentation and value-based routing rules within the contact centre environment. This is a mandatory element of the CRM & Customer Engagement capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys customer segmentation and value-based routing rules as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Order, account, and contract management (if applicable)",
            "definition": "A structured enterprise function that delivers order, account, and contract management within the contact centre environment. Effective implementation of this sub-capability within CRM & Customer Engagement requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys order, account, and contract management as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Complaint management with regulatory escalation flags",
            "definition": "A configurable platform capability that provides complaint management with regulatory escalation flags within the contact centre environment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys complaint management with regulatory escalation flags as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Service request catalogue and fulfilment tracking",
            "definition": "The operational discipline and tooling that enables service request catalogue and fulfilment tracking within the contact centre environment. This capability is a key component of the CRM & Customer Engagement domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys service request catalogue and fulfilment tracking as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Customer consent and preference management (marketing, data processing, communication channel)",
            "definition": "A structured enterprise function that delivers customer consent and preference management within the contact centre environment. This capability is a key component of the CRM & Customer Engagement domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys customer consent and preference management as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "SLA / OLA definition and automated breach alerting",
            "definition": "The end-to-end process and technology that governs sla / ola definition and automated breach alerting within the contact centre environment. Effective implementation of this sub-capability within CRM & Customer Engagement requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys sla / ola definition and automated breach alerting as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Voice of Customer integration – link survey responses to case records",
            "definition": "The organisational capability responsible for voice of customer integration, specifically: link survey responses to case records. This is a mandatory element of the CRM & Customer Engagement capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements voice of customer integration to link survey responses to case records; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Customer health scoring and churn risk flags",
            "definition": "The organisational capability responsible for customer health scoring and churn risk flags within the contact centre environment. As part of CRM & Customer Engagement, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys customer health scoring and churn risk flags as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Duplicate detection and customer data deduplication",
            "definition": "A configurable platform capability that provides duplicate detection and customer data deduplication within the contact centre environment. This is a mandatory element of the CRM & Customer Engagement capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys duplicate detection and customer data deduplication as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Contextual next-best-action guidance for agents during interactions",
            "definition": "The systematic approach to delivering contextual next-best-action guidance for agents during interactions within the contact centre environment. Effective implementation of this sub-capability within CRM & Customer Engagement requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys contextual next-best-action guidance for agents during interactions as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Integration with back-office systems to surface relevant account data to agents",
            "definition": "The enterprise-grade capability responsible for integration with back-office systems to surface relevant account data to agents within the contact centre environment. As part of CRM & Customer Engagement, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys integration with back-office systems to surface relevant account data to agents as part of their CRM & Customer Engagement capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "Contact Centre Platform (CCaaS) – CTI integration, screen-pop, click-to-dial, case auto-creation",
          "IVR / Voice AI – pass caller intent and authentication result into CRM case",
          "Knowledge Management – surface relevant KB articles within case context",
          "Interaction Recording – attach call/chat transcripts to case record",
          "Billing / ERP / order management system – pull account and transaction data",
          "Marketing Automation (Salesforce Marketing Cloud, HubSpot) – customer journey sync",
          "Social media listening tools – create cases from social mentions",
          "Voice of Customer / Survey platform – link CSAT/NPS scores to case",
          "Analytics & BI platform – case data for reporting and insights",
          "Customer Identity platform – single customer identifier across systems"
        ],
        "glo": [
          "Multi-language case management and UI for agents across geographies",
          "GDPR / PDPA / LGPD: right to erasure, data portability, consent management built in",
          "Data residency: customer PII must be stored in-country in some jurisdictions (Russia, China, India)",
          "Regional regulatory case types: FCA complaint rules (UK), CFPB (USA), ACCC (Australia)",
          "Currency, date/time, address format localisation per country",
          "Multi-timezone SLA calculations for globally distributed support teams",
          "Data sovereignty: cross-border data transfer restrictions (EU Standard Contractual Clauses, Binding Corporate Rules)",
          "Localised business rules for case prioritisation based on regional regulations",
          "Support for multi-byte character sets (CJK, Arabic, Devanagari) in customer records"
        ]
      },
      {
        "title": "Contact Centre Platform (CCaaS / CCP)",
        "category": "Core Contact Centre Technology | Omni-Channel Operations",
        "usecase": "A US health insurer handles 40,000 daily contacts across voice, chat, and email through a single universal queue in Genesys Cloud; predictive routing uses customer segment and agent skills scores to match interactions, reducing AHT by 18% in 6 months.",
        "sub": [
          {
            "name": "Cloud Contact Platform (CCP) as primary agent desktop – WebRTC softphone, integrated controls",
            "definition": "The end-to-end process and technology that governs cloud contact platform as primary agent desktop, specifically: WebRTC softphone, integrated controls. As part of Contact Centre Platform (CCaaS / CCP), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements cloud contact platform as primary agent desktop to webrtc softphone, integrated controls; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Universal Queue: single logical queue blending synchronous channels (voice, live chat, video) with asynchronous channels (WhatsApp, SMS, email, social) – CCRs handle both contact types from one unified interface without context-switching",
            "definition": "An integrated function within the CCaaS ecosystem that manages universal queue, specifically: single logical queue blending synchronous channels (voice, live chat, video) with asynchronous channels (WhatsApp, SMS, email, social) – CCRs handle both contact types from one unified interface without context-switching. This capability is a key component of the Contact Centre Platform (CCaaS / CCP) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements universal queue to single logical queue blending synchronous channels (voice, live chat, video) with asynchronous chann; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Omni-channel ACD (Automatic Call Distributor): intelligent routing across voice, chat, email, social, SMS, video",
            "definition": "The end-to-end process and technology that governs omni-channel acd, specifically: intelligent routing across voice, chat, email, social, SMS, video. This capability is a key component of the Contact Centre Platform (CCaaS / CCP) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements omni-channel acd to intelligent routing across voice, chat, email, social, sms, video; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Skills-based routing and priority-based queue management",
            "definition": "A configurable platform capability that provides skills-based routing and priority-based queue management within the contact centre environment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys skills-based routing and priority-based queue management as part of their Contact Centre Platform (CCaaS / CCP) capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Predictive Behavioural Routing: AI-driven matching of customer to specific CCR based on historical rapport, personality profiles, communication style, and predicted outcome success rates – beyond skills-based routing",
            "definition": "The organisational capability responsible for predictive behavioural routing, specifically: AI-driven matching of customer to specific CCR based on historical rapport, personality profiles, communication style, and predicted outcome success rates – beyond skills-based routing. Effective implementation of this sub-capability within Contact Centre Platform (CCaaS / CCP) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements predictive behavioural routing to ai-driven matching of customer to specific ccr based on historical rapport, personality profiles, co; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Agent state management (available, busy, wrap-up, break, offline)",
            "definition": "The end-to-end process and technology that governs agent state management within the contact centre environment. This capability is a key component of the Contact Centre Platform (CCaaS / CCP) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys agent state management as part of their Contact Centre Platform (CCaaS / CCP) capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Queue management: overflow, callback scheduling, estimated wait time announcements",
            "definition": "An integrated function within the CCaaS ecosystem that manages queue management, specifically: overflow, callback scheduling, estimated wait time announcements. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements queue management to overflow, callback scheduling, estimated wait time announcements; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Outbound dialler modes: preview, progressive, predictive, power (with AMD – Answering Machine Detection)",
            "definition": "The organisational capability responsible for outbound dialler modes, specifically: preview, progressive, predictive, power (with AMD – Answering Machine Detection). Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements outbound dialler modes to preview, progressive, predictive, power (with amd – answering machine detection); after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Outbound Campaign Management: campaign list management, dial rules, pacing algorithms, agent scripting for outbound, campaign reporting and disposition management",
            "definition": "The operational discipline and tooling that enables outbound campaign management, specifically: campaign list management, dial rules, pacing algorithms, agent scripting for outbound, campaign reporting and disposition management. This capability is a key component of the Contact Centre Platform (CCaaS / CCP) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements outbound campaign management to campaign list management, dial rules, pacing algorithms, agent scripting for outbound, campaign repo; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Automated outbound notification engine: templated SMS, email, and WhatsApp notifications triggered by business events (fraud alerts, appointment reminders, delivery updates, payment prompts) without agent involvement",
            "definition": "The systematic approach to delivering automated outbound notification engine, specifically: templated SMS, email, and WhatsApp notifications triggered by business events (fraud alerts, appointment reminders, delivery updates, payment prompts) without agent involvement. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements automated outbound notification engine to templated sms, email, and whatsapp notifications triggered by business events (fraud alerts, appoint; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Blended inbound/outbound agent handling",
            "definition": "A configurable platform capability that provides blended inbound/outbound agent handling within the contact centre environment. Effective implementation of this sub-capability within Contact Centre Platform (CCaaS / CCP) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys blended inbound/outbound agent handling as part of their Contact Centre Platform (CCaaS / CCP) capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Supervisor dashboard: real-time monitoring, whisper coaching, barge-in, silent monitoring",
            "definition": "A structured enterprise function that delivers supervisor dashboard, specifically: real-time monitoring, whisper coaching, barge-in, silent monitoring. As part of Contact Centre Platform (CCaaS / CCP), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements supervisor dashboard to real-time monitoring, whisper coaching, barge-in, silent monitoring; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Agent collaboration tools: internal chat, presence, warm/cold transfer, conference",
            "definition": "A configurable platform capability that provides agent collaboration tools, specifically: internal chat, presence, warm/cold transfer, conference. As part of Contact Centre Platform (CCaaS / CCP), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements agent collaboration tools to internal chat, presence, warm/cold transfer, conference; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "UCaaS integration: native connectivity to Microsoft Teams and Zoom to enable CCRs to locate, consult, and transfer interactions to back-office subject matter experts (SMEs) directly from the agent desktop",
            "definition": "An integrated function within the CCaaS ecosystem that manages ucaas integration, specifically: native connectivity to Microsoft Teams and Zoom to enable CCRs to locate, consult, and transfer interactions to back-office subject matter experts (SMEs) directly from the agent desktop. This capability is a key component of the Contact Centre Platform (CCaaS / CCP) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements ucaas integration to native connectivity to microsoft teams and zoom to enable ccrs to locate, consult, and transfer inte; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Email management: ACD routing of email, SLA tracking, template management, auto-acknowledge",
            "definition": "An integrated function within the CCaaS ecosystem that manages email management, specifically: ACD routing of email, SLA tracking, template management, auto-acknowledge. Effective implementation of this sub-capability within Contact Centre Platform (CCaaS / CCP) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements email management to acd routing of email, sla tracking, template management, auto-acknowledge; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Chat management: web chat, co-browsing capability, chatbot escalation to live agent",
            "definition": "The end-to-end process and technology that governs chat management, specifically: web chat, co-browsing capability, chatbot escalation to live agent. This capability is a key component of the Contact Centre Platform (CCaaS / CCP) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements chat management to web chat, co-browsing capability, chatbot escalation to live agent; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Social media channel management: Twitter/X, Facebook, Instagram, WhatsApp Business",
            "definition": "The operational discipline and tooling that enables social media channel management, specifically: Twitter/X, Facebook, Instagram, WhatsApp Business. This capability is a key component of the Contact Centre Platform (CCaaS / CCP) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements social media channel management to twitter/x, facebook, instagram, whatsapp business; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "SMS / messaging channel management",
            "definition": "A configurable platform capability that provides sms / messaging channel management within the contact centre environment. This is a mandatory element of the Contact Centre Platform (CCaaS / CCP) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys sms / messaging channel management as part of their Contact Centre Platform (CCaaS / CCP) capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Video contact capability for premium or complex case handling",
            "definition": "The operational discipline and tooling that enables video contact capability for premium or complex case handling within the contact centre environment. This is a mandatory element of the Contact Centre Platform (CCaaS / CCP) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys video contact capability for premium or complex case handling as part of their Contact Centre Platform (CCaaS / CCP) capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Callback and scheduled callback management",
            "definition": "The systematic approach to delivering callback and scheduled callback management within the contact centre environment. This capability is a key component of the Contact Centre Platform (CCaaS / CCP) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys callback and scheduled callback management as part of their Contact Centre Platform (CCaaS / CCP) capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Agent scripting and dynamic prompt flows",
            "definition": "The end-to-end process and technology that governs agent scripting and dynamic prompt flows within the contact centre environment. This is a mandatory element of the Contact Centre Platform (CCaaS / CCP) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys agent scripting and dynamic prompt flows as part of their Contact Centre Platform (CCaaS / CCP) capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Real-time queue and service level dashboards (wallboards)",
            "definition": "The operational discipline and tooling that enables real-time queue and service level dashboards within the contact centre environment. As part of Contact Centre Platform (CCaaS / CCP), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys real-time queue and service level dashboards as part of their Contact Centre Platform (CCaaS / CCP) capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Emergency / business continuity call routing (disaster recovery mode)",
            "definition": "The systematic approach to delivering emergency / business continuity call routing within the contact centre environment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys emergency / business continuity call routing as part of their Contact Centre Platform (CCaaS / CCP) capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "DNIS / ANI-based routing and treatment rules",
            "definition": "The organisational capability responsible for dnis / ani-based routing and treatment rules within the contact centre environment. As part of Contact Centre Platform (CCaaS / CCP), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys dnis / ani-based routing and treatment rules as part of their Contact Centre Platform (CCaaS / CCP) capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Do Not Contact (DNC) registry integration for outbound compliance",
            "definition": "A structured enterprise function that delivers do not contact registry integration for outbound compliance within the contact centre environment. This is a mandatory element of the Contact Centre Platform (CCaaS / CCP) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys do not contact registry integration for outbound compliance as part of their Contact Centre Platform (CCaaS / CCP) capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "CRM – CTI, screen-pop, automatic interaction logging, case creation",
          "IVR / Voice AI – call hand-off with intent and authentication context",
          "Interaction Recording – trigger recording at call connect, pass metadata",
          "WFM – real-time adherence feed, staffing requirement signals",
          "Quality Management – interaction metadata for sampling and evaluation",
          "HR / HRIS – agent profile, skills, team, employment status",
          "Knowledge Management – KB article search embedded in agent desktop",
          "Reporting & Analytics – interaction data feed for CDRs, KPI dashboards",
          "IAM / SSO – agent authentication and role-based feature access",
          "PSTN carrier / SIP trunking provider – voice connectivity",
          "DNC registry APIs (e.g. Neustar, FCC scrub) for outbound compliance",
          "UCaaS platforms (Microsoft Teams, Zoom) – presence federation, SME directory, transfer capability",
          "Customer Journey Orchestration platform – ingest pre-contact context (web/app behaviour) to enrich routing decisions and CCR screen-pop",
          "Marketing automation / campaign management – campaign list import and outcome feedback"
        ],
        "glo": [
          "Multi-region cloud infrastructure with local Points of Presence (PoPs) to meet latency targets (<150ms RTT)",
          "Telephony number provisioning in each country (DDI, toll-free, local access numbers)",
          "Compliance with local telecom regulations (Ofcom UK, FCC USA, TRAI India, ANATEL Brazil)",
          "GDPR Article 30 processing records for all interaction data",
          "Multi-language agent desktop UI and customer-facing channel content",
          "Local data residency: call data, CDRs, and recordings stored in-country where mandated",
          "International call handling: country code, IDD prefix, CLI presentation rules",
          "Regulatory recording obligations differ per country (MiFID II in EU, HIPAA in USA)",
          "Outbound dialling regulations: TCPA (USA), PECR (UK), GDPR (EU) – consent management and calling hours",
          "Automated outbound notifications (SMS/WhatsApp) subject to TCPA, PECR, and local messaging regulations – opt-out mechanisms mandatory",
          "Public Switched Telephone Network (PSTN) interconnect and regulatory approval per country",
          "Time zone aware queue and business-hour schedule configuration",
          "Disaster recovery and failover across geographic regions to meet local BCP requirements",
          "UCaaS federation across geographies must respect data localisation and sovereign cloud requirements"
        ]
      },
      {
        "title": "IVR & Voice AI / Conversational AI",
        "category": "Self-Service & Intelligent Automation | Front-Line Deflection",
        "usecase": "A utility company's IVR handles 65% of meter reading submissions and outage status queries without agent involvement; when a caller's intent is ambiguous, the bot passes a structured context payload — intent, account ID, and auth status — to the receiving agent.",
        "sub": [
          {
            "name": "Interactive Voice Response (IVR) – DTMF and speech-enabled self-service menus",
            "definition": "The organisational capability responsible for interactive voice response, specifically: DTMF and speech-enabled self-service menus. As part of IVR & Voice AI / Conversational AI, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements interactive voice response to dtmf and speech-enabled self-service menus; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Natural Language Understanding (NLU) – intent detection from caller utterances",
            "definition": "The end-to-end process and technology that governs natural language understanding, specifically: intent detection from caller utterances. This is a mandatory element of the IVR & Voice AI / Conversational AI capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements natural language understanding to intent detection from caller utterances; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Conversational AI / Voice Bot – end-to-end automated call handling for high-volume queries",
            "definition": "The organisational capability responsible for conversational ai / voice bot, specifically: end-to-end automated call handling for high-volume queries. Effective implementation of this sub-capability within IVR & Voice AI / Conversational AI requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements conversational ai / voice bot to end-to-end automated call handling for high-volume queries; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "ASR (Automatic Speech Recognition) engine with accent and dialect tuning",
            "definition": "The end-to-end process and technology that governs asr engine with accent and dialect tuning within the contact centre environment. This capability is a key component of the IVR & Voice AI / Conversational AI domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys asr engine with accent and dialect tuning as part of their IVR & Voice AI / Conversational AI capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Text-to-Speech (TTS) synthesis – natural-sounding voice prompts in multiple languages",
            "definition": "The end-to-end process and technology that governs text-to-speech synthesis, specifically: natural-sounding voice prompts in multiple languages. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements text-to-speech synthesis to natural-sounding voice prompts in multiple languages; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Dynamic prompt personalisation using customer data (name, account status, last interaction)",
            "definition": "The organisational capability responsible for dynamic prompt personalisation using customer data within the contact centre environment. This is a mandatory element of the IVR & Voice AI / Conversational AI capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys dynamic prompt personalisation using customer data as part of their IVR & Voice AI / Conversational AI capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Active caller authentication: voice biometrics enrolment and verification, knowledge-based authentication (KBA), one-time passcode (OTP)",
            "definition": "The organisational capability responsible for active caller authentication, specifically: voice biometrics enrolment and verification, knowledge-based authentication (KBA), one-time passcode (OTP). This capability is a key component of the IVR & Voice AI / Conversational AI domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements active caller authentication to voice biometrics enrolment and verification, knowledge-based authentication (kba), one-time passcode; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Passive / Background Voice Biometrics: continuous voiceprint analysis throughout the call to silently authenticate the caller without security questions, freeing agent time and improving customer experience",
            "definition": "The end-to-end process and technology that governs passive / background voice biometrics, specifically: continuous voiceprint analysis throughout the call to silently authenticate the caller without security questions, freeing agent time and improving customer experience. Effective implementation of this sub-capability within IVR & Voice AI / Conversational AI requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements passive / background voice biometrics to continuous voiceprint analysis throughout the call to silently authenticate the caller without secur; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Deepfake Audio & Voice Spoofing Detection: AI-based liveness detection to identify synthetically generated or replayed voice audio during authentication, mitigating AI-driven fraud",
            "definition": "The enterprise-grade capability responsible for deepfake audio & voice spoofing detection, specifically: AI-based liveness detection to identify synthetically generated or replayed voice audio during authentication, mitigating AI-driven fraud. This is a mandatory element of the IVR & Voice AI / Conversational AI capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements deepfake audio & voice spoofing detection to ai-based liveness detection to identify synthetically generated or replayed voice audio during authe; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Fraud detection and risk scoring during authentication phase",
            "definition": "The end-to-end process and technology that governs fraud detection and risk scoring during authentication phase within the contact centre environment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys fraud detection and risk scoring during authentication phase as part of their IVR & Voice AI / Conversational AI capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Intent classification and call routing based on NLU output",
            "definition": "The systematic approach to delivering intent classification and call routing based on nlu output within the contact centre environment. This is a mandatory element of the IVR & Voice AI / Conversational AI capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys intent classification and call routing based on nlu output as part of their IVR & Voice AI / Conversational AI capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Self-service transaction completion: account balance, order status, appointment booking, payment",
            "definition": "The systematic approach to delivering self-service transaction completion, specifically: account balance, order status, appointment booking, payment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements self-service transaction completion to account balance, order status, appointment booking, payment; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Proactive outbound IVR campaigns (appointment reminders, payment nudges, alerts)",
            "definition": "A configurable platform capability that provides proactive outbound ivr campaigns within the contact centre environment. This capability is a key component of the IVR & Voice AI / Conversational AI domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys proactive outbound ivr campaigns as part of their IVR & Voice AI / Conversational AI capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "AI-Generated Bot-to-Agent Handoff Summary: when escalating from a bot to a live CCR, generative AI automatically produces a structured summary of the entire bot conversation (intent, steps taken, data collected, failure reason) and presents it on the CCR screen – the customer never repeats themselves",
            "definition": "The end-to-end process and technology that governs ai-generated bot-to-agent handoff summary, specifically: when escalating from a bot to a live CCR, generative AI automatically produces a structured summary of the entire bot conversation (intent, steps taken, data collected, failure reason) and presents it on the CCR screen – the customer never repeats themselves. This is a mandatory element of the IVR & Voice AI / Conversational AI capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements ai-generated bot-to-agent handoff summary to when escalating from a bot to a live ccr, generative ai automatically produces a structured summary; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "DTMF fallback for low-connectivity callers or those who decline speech input",
            "definition": "The end-to-end process and technology that governs dtmf fallback for low-connectivity callers or those who decline speech input within the contact centre environment. As part of IVR & Voice AI / Conversational AI, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys dtmf fallback for low-connectivity callers or those who decline speech input as part of their IVR & Voice AI / Conversational AI capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Post-call IVR survey capability",
            "definition": "A structured enterprise function that delivers post-call ivr survey capability within the contact centre environment. This capability is a key component of the IVR & Voice AI / Conversational AI domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys post-call ivr survey capability as part of their IVR & Voice AI / Conversational AI capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Continuous NLU model training and improvement pipeline",
            "definition": "A structured enterprise function that delivers continuous nlu model training and improvement pipeline within the contact centre environment. This capability is a key component of the IVR & Voice AI / Conversational AI domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys continuous nlu model training and improvement pipeline as part of their IVR & Voice AI / Conversational AI capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Prompt and dialogue flow management tooling (no-code / low-code IVR designer)",
            "definition": "The enterprise-grade capability responsible for prompt and dialogue flow management tooling within the contact centre environment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys prompt and dialogue flow management tooling as part of their IVR & Voice AI / Conversational AI capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "A/B testing capability for IVR flow optimisation",
            "definition": "A structured enterprise function that delivers a/b testing capability for ivr flow optimisation within the contact centre environment. Effective implementation of this sub-capability within IVR & Voice AI / Conversational AI requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys a/b testing capability for ivr flow optimisation as part of their IVR & Voice AI / Conversational AI capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Containment rate and deflection analytics dashboard",
            "definition": "An integrated function within the CCaaS ecosystem that manages containment rate and deflection analytics dashboard within the contact centre environment. Effective implementation of this sub-capability within IVR & Voice AI / Conversational AI requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys containment rate and deflection analytics dashboard as part of their IVR & Voice AI / Conversational AI capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "CCaaS / Contact Centre Platform – call transfer with context payload (ANI, intent, auth status, bot summary)",
          "CRM – caller lookup, account data retrieval for personalised prompts and self-service",
          "Authentication / Identity platform – voice biometrics (active and passive), OTP delivery",
          "Fraud management platform – risk scoring during authentication, deepfake flagging",
          "Back-office / ERP – real-time data for self-service transactions (balances, orders, bookings)",
          "Reporting & Analytics – containment rates, intent distribution, escalation reasons",
          "Speech analytics platform – feed transcripts for further analysis",
          "Payment gateway – PCI-compliant payment handling within IVR (DTMF or voice)",
          "Outbound dialler (CCaaS) – proactive IVR campaign management",
          "Knowledge Management – answer informational queries via conversational AI",
          "Customer Journey Orchestration – receive pre-call digital context to personalise IVR treatment"
        ],
        "glo": [
          "Multi-language ASR and TTS coverage for all operating geographies (incl. regional accents and dialects)",
          "Localised NLU models trained on country-specific intents and vocabulary",
          "Regulatory compliance: TCPA (USA) for outbound IVR, PECR (UK), GDPR consent for voice biometrics",
          "Voice biometric enrolment (active and passive) requires explicit informed consent – varies by jurisdiction; some countries prohibit passive biometric collection",
          "Deepfake detection models must be maintained and retrained as generative voice AI technology evolves",
          "PCI DSS compliance for in-IVR payment handling globally",
          "PSTN access and toll-free number provisioning per country",
          "Latency requirements: regional ASR/NLU hosting to keep response time under 500ms",
          "Character support for non-Latin scripts in screen-delivered IVR companion apps",
          "Local regulatory restrictions on automated calls (permitted hours, opt-out mechanisms)",
          "Caller identification rules differ (CNAM in USA, CLI rules in EU)"
        ]
      },
      {
        "title": "Knowledge Management (KM)",
        "category": "Agent Enablement | Self-Service Support | Institutional Knowledge",
        "usecase": "During a live chat about a complex pension query, the agent's desktop surfaces the top 3 relevant KB articles based on the customer's typed message; the agent pastes the exact regulatory disclosure text into the chat, reducing handle time by 4 minutes.",
        "sub": [
          {
            "name": "Knowledge base (KB) platform: article creation, categorisation, version control, approval workflow",
            "definition": "A configurable platform capability that provides knowledge base platform, specifically: article creation, categorisation, version control, approval workflow. Effective implementation of this sub-capability within Knowledge Management (KM) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements knowledge base platform to article creation, categorisation, version control, approval workflow; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Contextual knowledge surfacing in agent desktop (auto-suggest based on interaction context and CRM data)",
            "definition": "The systematic approach to delivering contextual knowledge surfacing in agent desktop within the contact centre environment. This is a mandatory element of the Knowledge Management (KM) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys contextual knowledge surfacing in agent desktop as part of their Knowledge Management (KM) capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Customer-facing self-service knowledge portal (FAQs, guided troubleshooting)",
            "definition": "The systematic approach to delivering customer-facing self-service knowledge portal within the contact centre environment. This is a mandatory element of the Knowledge Management (KM) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys customer-facing self-service knowledge portal as part of their Knowledge Management (KM) capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Knowledge article lifecycle management: draft, review, publish, review reminder, retire",
            "definition": "The end-to-end process and technology that governs knowledge article lifecycle management, specifically: draft, review, publish, review reminder, retire. Effective implementation of this sub-capability within Knowledge Management (KM) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements knowledge article lifecycle management to draft, review, publish, review reminder, retire; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Search and findability: full-text search, faceted navigation, synonym library",
            "definition": "The enterprise-grade capability responsible for search and findability, specifically: full-text search, faceted navigation, synonym library. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements search and findability to full-text search, faceted navigation, synonym library; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Rich media support: embedded video, step-by-step guides, process flowcharts",
            "definition": "The end-to-end process and technology that governs rich media support, specifically: embedded video, step-by-step guides, process flowcharts. As part of Knowledge Management (KM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements rich media support to embedded video, step-by-step guides, process flowcharts; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Agent feedback mechanism on article quality and accuracy",
            "definition": "A structured enterprise function that delivers agent feedback mechanism on article quality and accuracy within the contact centre environment. As part of Knowledge Management (KM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys agent feedback mechanism on article quality and accuracy as part of their Knowledge Management (KM) capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Knowledge analytics: most viewed, low-rated, search-with-no-results reporting",
            "definition": "A configurable platform capability that provides knowledge analytics, specifically: most viewed, low-rated, search-with-no-results reporting. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements knowledge analytics to most viewed, low-rated, search-with-no-results reporting; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Structured decision trees and guided resolution flows for complex processes",
            "definition": "An integrated function within the CCaaS ecosystem that manages structured decision trees and guided resolution flows for complex processes within the contact centre environment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys structured decision trees and guided resolution flows for complex processes as part of their Knowledge Management (KM) capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Regulatory and compliance content management with mandatory acknowledgment tracking",
            "definition": "The operational discipline and tooling that enables regulatory and compliance content management with mandatory acknowledgment tracking within the contact centre environment. This capability is a key component of the Knowledge Management (KM) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys regulatory and compliance content management with mandatory acknowledgment tracking as part of their Knowledge Management (KM) capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Rapid content authoring tools for product launches and change communications",
            "definition": "The operational discipline and tooling that enables rapid content authoring tools for product launches and change communications within the contact centre environment. As part of Knowledge Management (KM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys rapid content authoring tools for product launches and change communications as part of their Knowledge Management (KM) capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "AI-assisted article generation and gap identification",
            "definition": "The organisational capability responsible for ai-assisted article generation and gap identification within the contact centre environment. Effective implementation of this sub-capability within Knowledge Management (KM) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys ai-assisted article generation and gap identification as part of their Knowledge Management (KM) capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Knowledge contribution and gamification (agent-generated content workflows)",
            "definition": "The systematic approach to delivering knowledge contribution and gamification within the contact centre environment. This is a mandatory element of the Knowledge Management (KM) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys knowledge contribution and gamification as part of their Knowledge Management (KM) capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Integration with chatbot / IVR for automated self-service KB delivery",
            "definition": "An integrated function within the CCaaS ecosystem that manages integration with chatbot / ivr for automated self-service kb delivery within the contact centre environment. Effective implementation of this sub-capability within Knowledge Management (KM) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys integration with chatbot / ivr for automated self-service kb delivery as part of their Knowledge Management (KM) capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "CCaaS / Agent Desktop – embedded KB widget with context-aware search",
          "IVR / Voice AI / Chatbot – KB content powers automated answer delivery",
          "CRM – auto-suggest KB articles based on case type and customer query",
          "LMS / L&D – link knowledge articles to relevant training modules",
          "Quality Management – surface KB gaps identified from failed interactions",
          "Interaction Recording / Transcription – mine transcripts for KB improvement opportunities",
          "Search platform (e.g. Elasticsearch, Microsoft Search) – enterprise search integration",
          "Reporting & Analytics – KB usage and agent self-sufficiency metrics"
        ],
        "glo": [
          "Multi-language KB content: articles must be available in all operational languages",
          "Localised content: regulatory requirements, product availability, and process differences per country",
          "Translation workflow and quality assurance for KB localisation",
          "Content governance model: global vs. local ownership of KB articles",
          "Currency, date, address format examples in articles must reflect local norms",
          "Regulatory content management: mandatory disclosures differ by country and sector",
          "Search indexing for multi-byte character sets (CJK, Arabic, Devanagari)",
          "Content review cycles must account for rapid regulatory change across jurisdictions"
        ]
      },
      {
        "title": "Customer Feedback & Voice of Customer (VoC)",
        "category": "Customer Experience Measurement | Continuous Improvement",
        "usecase": "Immediately after a call closes, the customer receives an SMS with a 3-question CSAT survey; a score of 1 triggers an instant supervisor alert and a 'save' callback is scheduled within 2 hours, recovering 23% of at-risk customers.",
        "sub": [
          {
            "name": "Post-interaction CSAT survey: IVR, SMS, email, and in-app delivery",
            "definition": "A configurable platform capability that provides post-interaction csat survey, specifically: IVR, SMS, email, and in-app delivery. Effective implementation of this sub-capability within Customer Feedback & Voice of Customer (VoC) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements post-interaction csat survey to ivr, sms, email, and in-app delivery; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Net Promoter Score (NPS) programme management",
            "definition": "The organisational capability responsible for net promoter score programme management within the contact centre environment. As part of Customer Feedback & Voice of Customer (VoC), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys net promoter score programme management as part of their Customer Feedback & Voice of Customer (VoC) capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Customer Effort Score (CES) measurement",
            "definition": "The operational discipline and tooling that enables customer effort score measurement within the contact centre environment. This capability is a key component of the Customer Feedback & Voice of Customer (VoC) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys customer effort score measurement as part of their Customer Feedback & Voice of Customer (VoC) capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Survey design and A/B testing platform",
            "definition": "The end-to-end process and technology that governs survey design and a/b testing platform within the contact centre environment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys survey design and a/b testing platform as part of their Customer Feedback & Voice of Customer (VoC) capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Response rate management and survey fatigue controls",
            "definition": "A configurable platform capability that provides response rate management and survey fatigue controls within the contact centre environment. As part of Customer Feedback & Voice of Customer (VoC), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys response rate management and survey fatigue controls as part of their Customer Feedback & Voice of Customer (VoC) capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Real-time alert: flag low CSAT scores immediately to supervisors for recovery action",
            "definition": "The systematic approach to delivering real-time alert, specifically: flag low CSAT scores immediately to supervisors for recovery action. This capability is a key component of the Customer Feedback & Voice of Customer (VoC) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements real-time alert to flag low csat scores immediately to supervisors for recovery action; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Verbatim / open-text response analysis using NLP and sentiment scoring",
            "definition": "An integrated function within the CCaaS ecosystem that manages verbatim / open-text response analysis using nlp and sentiment scoring within the contact centre environment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys verbatim / open-text response analysis using nlp and sentiment scoring as part of their Customer Feedback & Voice of Customer (VoC) capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Driver analysis: identify key factors impacting customer satisfaction",
            "definition": "The organisational capability responsible for driver analysis, specifically: identify key factors impacting customer satisfaction. This is a mandatory element of the Customer Feedback & Voice of Customer (VoC) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements driver analysis to identify key factors impacting customer satisfaction; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Closed-loop feedback management: agent / supervisor aware of customer feedback linked to their interaction",
            "definition": "The organisational capability responsible for closed-loop feedback management, specifically: agent / supervisor aware of customer feedback linked to their interaction. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements closed-loop feedback management to agent / supervisor aware of customer feedback linked to their interaction; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Customer complaint formal management and regulatory escalation tracking",
            "definition": "The organisational capability responsible for customer complaint formal management and regulatory escalation tracking within the contact centre environment. This capability is a key component of the Customer Feedback & Voice of Customer (VoC) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys customer complaint formal management and regulatory escalation tracking as part of their Customer Feedback & Voice of Customer (VoC) capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Social media listening and brand sentiment monitoring",
            "definition": "The end-to-end process and technology that governs social media listening and brand sentiment monitoring within the contact centre environment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys social media listening and brand sentiment monitoring as part of their Customer Feedback & Voice of Customer (VoC) capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Customer advisory panel and community feedback channel management",
            "definition": "The enterprise-grade capability responsible for customer advisory panel and community feedback channel management within the contact centre environment. This capability is a key component of the Customer Feedback & Voice of Customer (VoC) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys customer advisory panel and community feedback channel management as part of their Customer Feedback & Voice of Customer (VoC) capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "VoC insights reporting: CSAT trend, promoter/detractor analysis, improvement areas",
            "definition": "The operational discipline and tooling that enables voc insights reporting, specifically: CSAT trend, promoter/detractor analysis, improvement areas. This capability is a key component of the Customer Feedback & Voice of Customer (VoC) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements voc insights reporting to csat trend, promoter/detractor analysis, improvement areas; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Integration of VoC insights into CX improvement roadmap governance",
            "definition": "The organisational capability responsible for integration of voc insights into cx improvement roadmap governance within the contact centre environment. Effective implementation of this sub-capability within Customer Feedback & Voice of Customer (VoC) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys integration of voc insights into cx improvement roadmap governance as part of their Customer Feedback & Voice of Customer (VoC) capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "CCaaS – post-interaction trigger for survey delivery, interaction metadata linkage",
          "CRM – link survey response to customer record and case",
          "Performance Management – CSAT at agent and team level as KPI",
          "Quality Management – correlate QA scores with CSAT outcomes",
          "Reporting & Analytics – VoC dashboards for CX leaders",
          "Incentive & Compensation – CSAT may be a component of variable pay",
          "Social listening tools (Brandwatch, Sprinklr) – integrate social VoC"
        ],
        "glo": [
          "GDPR / local consent requirements for customer surveys: opt-in or legitimate interest basis",
          "Survey delivery channel compliance: TCPA (USA), PECR (UK) for SMS/phone surveys",
          "Multi-language survey instruments for all customer-facing geographies",
          "Cultural calibration: NPS and CSAT rating scales are interpreted differently across cultures",
          "Response rates vary culturally: Asian markets tend to rate higher, requiring adjusted benchmarks",
          "Localised verbatim analysis: NLP models must cover all customer languages",
          "Time zone aware real-time alerting for global operations",
          "Regulatory complaint escalation rules differ (FCA 8-week rule UK, CFPB (USA), ACCC (Australia))"
        ]
      },
      {
        "title": "Customer Journey Orchestration",
        "category": "Digital Experience | Pre-Contact Context | Proactive Engagement",
        "usecase": "A customer who browsed 3 product pages and abandoned a quote form online is proactively called by an outbound agent; the journey orchestration platform passes the exact pages viewed and the partially completed quote to the agent's screen before the call connects.",
        "sub": [
          {
            "name": "Pre-contact digital context capture: track and aggregate the customer's web browsing path, app screens visited, buttons clicked, forms abandoned, and search terms used immediately before contacting the centre",
            "definition": "A configurable platform capability that provides pre-contact digital context capture, specifically: track and aggregate the customer's web browsing path, app screens visited, buttons clicked, forms abandoned, and search terms used immediately before contacting the centre. This is a mandatory element of the Customer Journey Orchestration capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements pre-contact digital context capture to track and aggregate the customer's web browsing path, app screens visited, buttons clicked, forms ab; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Real-time session data collection via web/app SDKs (JavaScript tag, mobile SDK) that captures customer intent signals before the contact is initiated",
            "definition": "A configurable platform capability that provides real-time session data collection via web/app sdks that captures customer intent signals before the contact is initiated within the contact centre environment. As part of Customer Journey Orchestration, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys real-time session data collection via web/app sdks that captures customer intent signals before the contact is initiated as part of their Customer Journey Orchestration capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Journey context API: pass captured pre-contact session data as a structured payload to IVR (to personalise treatment), ACD (to influence routing), and agent desktop (screen-pop showing 'customer was on the returns page for 4 minutes')",
            "definition": "The enterprise-grade capability responsible for journey context api, specifically: pass captured pre-contact session data as a structured payload to IVR (to personalise treatment), ACD (to influence routing), and agent desktop (screen-pop showing 'customer was on the returns page for 4 minutes'). Effective implementation of this sub-capability within Customer Journey Orchestration requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements journey context api to pass captured pre-contact session data as a structured payload to ivr (to personalise treatment), ac; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Customer journey mapping and visualisation: visual representation of the end-to-end path customers take across digital and assisted channels before and after contact",
            "definition": "An integrated function within the CCaaS ecosystem that manages customer journey mapping and visualisation, specifically: visual representation of the end-to-end path customers take across digital and assisted channels before and after contact. This capability is a key component of the Customer Journey Orchestration domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements customer journey mapping and visualisation to visual representation of the end-to-end path customers take across digital and assisted channels bef; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Cross-channel journey stitching: correlate customer identity across web, app, IVR, chat, and voice to produce a single continuous journey view",
            "definition": "An integrated function within the CCaaS ecosystem that manages cross-channel journey stitching, specifically: correlate customer identity across web, app, IVR, chat, and voice to produce a single continuous journey view. Effective implementation of this sub-capability within Customer Journey Orchestration requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements cross-channel journey stitching to correlate customer identity across web, app, ivr, chat, and voice to produce a single continuous jou; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Abandonment detection and proactive engagement: identify customers struggling in digital channels (rage clicks, repeated page visits, form abandonment) and proactively offer chat, callback, or push notification before they drop off",
            "definition": "The enterprise-grade capability responsible for abandonment detection and proactive engagement, specifically: identify customers struggling in digital channels (rage clicks, repeated page visits, form abandonment) and proactively offer chat, callback, or push notification before they drop off. This is a mandatory element of the Customer Journey Orchestration capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements abandonment detection and proactive engagement to identify customers struggling in digital channels (rage clicks, repeated page visits, form abandonme; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Trigger-based proactive contact: business rule engine to initiate outbound contact (chat pop, SMS, callback offer) based on defined digital journey events or inactivity thresholds",
            "definition": "The systematic approach to delivering trigger-based proactive contact, specifically: business rule engine to initiate outbound contact (chat pop, SMS, callback offer) based on defined digital journey events or inactivity thresholds. This is a mandatory element of the Customer Journey Orchestration capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements trigger-based proactive contact to business rule engine to initiate outbound contact (chat pop, sms, callback offer) based on defined d; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Journey analytics: measure contact driver deflection rates, digital containment, and the impact of pre-contact context on resolution rates and AHT",
            "definition": "The systematic approach to delivering journey analytics, specifically: measure contact driver deflection rates, digital containment, and the impact of pre-contact context on resolution rates and AHT. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements journey analytics to measure contact driver deflection rates, digital containment, and the impact of pre-contact context; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Integration with tag management systems (Google Tag Manager, Tealium) for web event capture",
            "definition": "A structured enterprise function that delivers integration with tag management systems for web event capture within the contact centre environment. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys integration with tag management systems for web event capture as part of their Customer Journey Orchestration capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Customer journey A/B testing: test different proactive intervention triggers and measure impact on customer effort and channel deflection",
            "definition": "The organisational capability responsible for customer journey a/b testing, specifically: test different proactive intervention triggers and measure impact on customer effort and channel deflection. Effective implementation of this sub-capability within Customer Journey Orchestration requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements customer journey a/b testing to test different proactive intervention triggers and measure impact on customer effort and channel def; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          }
        ],
        "int": [
          "CCaaS / Contact Centre Platform – pass pre-contact context payload to ACD for routing enrichment and CCR screen-pop",
          "IVR / Voice AI – use pre-contact intent signals to personalise IVR greeting, skip unnecessary authentication steps, or route directly",
          "CRM – append journey context to the customer record and case at the point of contact",
          "AI / ML platform – feed journey data into intent prediction and next-best-action models",
          "Web analytics (Adobe Analytics, Google Analytics 4) – contextual data source for pre-contact journey",
          "Tag management (Google Tag Manager, Tealium) – event capture and session data collection",
          "Marketing automation – trigger proactive campaigns based on journey signals",
          "Data platform / CDP (Customer Data Platform) – unify journey events with persistent customer profile",
          "Reporting & Analytics – contact driver analysis informed by pre-contact journey data"
        ],
        "glo": [
          "GDPR / PECR (UK): web session tracking and cookie-based journey data collection requires explicit consent – must integrate with consent management platform (CMP) such as OneTrust",
          "CCPA / CPRA: California consumers may opt out of behavioural tracking; journey data collection must respect opt-out signals",
          "ePrivacy Regulation (EU): stricter cookie consent rules apply to web tracking across EU member states",
          "Data minimisation: only collect journey data that is strictly necessary for contact centre personalisation purposes",
          "Cross-border data flows: journey data collected in one country may be processed centrally – transfer mechanisms (SCCs, adequacy) required",
          "Mobile app tracking: Apple ATT (App Tracking Transparency) and Google privacy changes affect mobile journey data collection on iOS and Android",
          "Data residency: session and journey data may be subject to local storage requirements in some jurisdictions",
          "Multi-language journey mapping: digital touchpoints and journey paths differ by region and language; journey analytics must segment by geography"
        ]
      },
      {
        "title": "Localisation & Multilingual Operations",
        "category": "Global Enablement | Language Operations | Regional Adaptation",
        "usecase": "A global BPO running contact centres in 14 countries maintains a single knowledge base with automated translation workflows; when a UK policy document is updated, the system flags the French, German, Spanish, and Polish versions for localisation review within 24 hours.",
        "sub": [
          {
            "name": "Agent desktop UI localisation: full translation of the CCaaS agent interface, CRM, WFM, and all operational tools into all languages required by agent populations",
            "definition": "An integrated function within the CCaaS ecosystem that manages agent desktop ui localisation, specifically: full translation of the CCaaS agent interface, CRM, WFM, and all operational tools into all languages required by agent populations. This capability is a key component of the Localisation & Multilingual Operations domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements agent desktop ui localisation to full translation of the ccaas agent interface, crm, wfm, and all operational tools into all language; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Real-time digital channel translation: AI-powered in-line translation of incoming customer messages (chat, email, social, WhatsApp) so CCRs can respond in their native language while the customer reads in theirs – enabling cross-language resolution without requiring bilingual agents",
            "definition": "The organisational capability responsible for real-time digital channel translation, specifically: AI-powered in-line translation of incoming customer messages (chat, email, social, WhatsApp) so CCRs can respond in their native language while the customer reads in theirs – enabling cross-language resolution without requiring bilingual agents. Effective implementation of this sub-capability within Localisation & Multilingual Operations requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements real-time digital channel translation to ai-powered in-line translation of incoming customer messages (chat, email, social, whatsapp) so ccrs; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Outbound message localisation: templated customer-facing communications (email, SMS, WhatsApp) authored, reviewed, and published per language with translation workflow and approval management",
            "definition": "A configurable platform capability that provides outbound message localisation, specifically: templated customer-facing communications (email, SMS, WhatsApp) authored, reviewed, and published per language with translation workflow and approval management. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements outbound message localisation to templated customer-facing communications (email, sms, whatsapp) authored, reviewed, and published pe; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Language detection: automatic detection of customer's preferred language from incoming message, caller ID metadata, or CRM preference, with automatic routing to an appropriately skilled CCR or localised bot",
            "definition": "The end-to-end process and technology that governs language detection, specifically: automatic detection of customer's preferred language from incoming message, caller ID metadata, or CRM preference, with automatic routing to an appropriately skilled CCR or localised bot. As part of Localisation & Multilingual Operations, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements language detection to automatic detection of customer's preferred language from incoming message, caller id metadata, or c; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Language skills management: formal proficiency tracking (CEFR or equivalent) for each agent across all languages spoken – feeds into skills-based routing configuration",
            "definition": "The end-to-end process and technology that governs language skills management, specifically: formal proficiency tracking (CEFR or equivalent) for each agent across all languages spoken – feeds into skills-based routing configuration. Effective implementation of this sub-capability within Localisation & Multilingual Operations requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements language skills management to formal proficiency tracking (cefr or equivalent) for each agent across all languages spoken – feeds; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Localised IVR and chatbot dialogue: country-specific and language-specific conversational flow management (not just translated prompts – structurally adapted dialogue trees reflecting local query patterns)",
            "definition": "The operational discipline and tooling that enables localised ivr and chatbot dialogue, specifically: country-specific and language-specific conversational flow management (not just translated prompts – structurally adapted dialogue trees reflecting local query patterns). As part of Localisation & Multilingual Operations, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements localised ivr and chatbot dialogue to country-specific and language-specific conversational flow management (not just translated prompts –; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Cultural adaptation: localised scripting, tone of voice guidelines, and customer communication standards per market (formal vs. informal address, cultural sensitivity in phrasing)",
            "definition": "The organisational capability responsible for cultural adaptation, specifically: localised scripting, tone of voice guidelines, and customer communication standards per market (formal vs. informal address, cultural sensitivity in phrasing). Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements cultural adaptation to localised scripting, tone of voice guidelines, and customer communication standards per market (form; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Multi-script knowledge base: KB articles authored, translated, and quality-assured in all required languages with localised examples (currency, date, address format)",
            "definition": "A configurable platform capability that provides multi-script knowledge base, specifically: KB articles authored, translated, and quality-assured in all required languages with localised examples (currency, date, address format). Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements multi-script knowledge base to kb articles authored, translated, and quality-assured in all required languages with localised examp; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Regional compliance content management: localised regulatory disclosures, mandatory script elements, and legal notices that must be included in customer-facing communications per jurisdiction",
            "definition": "The organisational capability responsible for regional compliance content management, specifically: localised regulatory disclosures, mandatory script elements, and legal notices that must be included in customer-facing communications per jurisdiction. Effective implementation of this sub-capability within Localisation & Multilingual Operations requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements regional compliance content management to localised regulatory disclosures, mandatory script elements, and legal notices that must be included; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Translation management system (TMS): workflow platform for requesting, tracking, reviewing, and publishing translations across all content types (KB, IVR prompts, email templates, training materials)",
            "definition": "An integrated function within the CCaaS ecosystem that manages translation management system, specifically: workflow platform for requesting, tracking, reviewing, and publishing translations across all content types (KB, IVR prompts, email templates, training materials). Effective implementation of this sub-capability within Localisation & Multilingual Operations requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements translation management system to workflow platform for requesting, tracking, reviewing, and publishing translations across all conten; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Machine translation quality assurance: human review layer for all machine-translated content before publication to customer-facing channels",
            "definition": "A configurable platform capability that provides machine translation quality assurance, specifically: human review layer for all machine-translated content before publication to customer-facing channels. Effective implementation of this sub-capability within Localisation & Multilingual Operations requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements machine translation quality assurance to human review layer for all machine-translated content before publication to customer-facing channels; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Right-to-left (RTL) language support: full RTL UI rendering for Arabic, Hebrew, and other RTL languages in agent desktop and customer-facing portals",
            "definition": "The organisational capability responsible for right-to-left language support, specifically: full RTL UI rendering for Arabic, Hebrew, and other RTL languages in agent desktop and customer-facing portals. This is a mandatory element of the Localisation & Multilingual Operations capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements right-to-left language support to full rtl ui rendering for arabic, hebrew, and other rtl languages in agent desktop and customer-faci; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Multi-byte character set support: correct rendering and storage of CJK (Chinese, Japanese, Korean), Devanagari, Cyrillic, Thai, and other complex scripts across all systems",
            "definition": "A configurable platform capability that provides multi-byte character set support, specifically: correct rendering and storage of CJK (Chinese, Japanese, Korean), Devanagari, Cyrillic, Thai, and other complex scripts across all systems. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements multi-byte character set support to correct rendering and storage of cjk (chinese, japanese, korean), devanagari, cyrillic, thai, and ot; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Localised date, time, currency, and number formatting: all system-generated communications use locally appropriate formats per market",
            "definition": "The operational discipline and tooling that enables localised date, time, currency, and number formatting, specifically: all system-generated communications use locally appropriate formats per market. As part of Localisation & Multilingual Operations, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements localised date, time, currency, and number formatting to all system-generated communications use locally appropriate formats per market; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Language coverage reporting: track what percentage of contacts are handled in each language and identify languages where coverage or quality gaps exist",
            "definition": "The end-to-end process and technology that governs language coverage reporting, specifically: track what percentage of contacts are handled in each language and identify languages where coverage or quality gaps exist. This is a mandatory element of the Localisation & Multilingual Operations capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements language coverage reporting to track what percentage of contacts are handled in each language and identify languages where coverage; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          }
        ],
        "int": [
          "CCaaS / Contact Centre Platform – language detection triggers routing to appropriate skill group; translation layer embedded in agent desktop for digital channels",
          "CRM – language preference stored and surfaced on customer record and screen-pop",
          "Knowledge Management – multi-language KB content served contextually based on agent and customer language",
          "LMS / L&D – training content available in all agent languages; language skills tracked on CCR profile",
          "Skills Management – language proficiency levels maintained as a core routing skill",
          "IVR / Voice AI – localised dialogue flows and ASR/TTS engines per language",
          "Translation Management System (TMS) (e.g. Phrase, Lokalise, Smartling) – workflow for content localisation",
          "Machine translation API (DeepL, Google Cloud Translation, Amazon Translate) – real-time translation for digital channels",
          "Quality Management – language-specific QA scorecards and calibrated evaluators per language",
          "Reporting & Analytics – language distribution reporting and multilingual operational KPIs"
        ],
        "glo": [
          "Language coverage must be formally mapped to each operating geography – a matrix of languages spoken by customers vs. languages supported by agents and bots must be maintained",
          "Some countries have official language requirements for customer communications (French in Quebec – Bill 96, Welsh in Wales, Malay in Malaysia) that are legally mandated",
          "Real-time translation for regulated channels (financial advice, clinical guidance) may not be permissible without additional controls – verify regulatory acceptability per sector",
          "GDPR: machine translation services that process personal data from EU customers require a DPA with the translation provider and appropriate transfer mechanism if processed outside the EU",
          "Language-specific data models: some languages require different data structures for name (e.g. family-name-first in East Asian cultures), address, and date formats",
          "QA calibration for multilingual sites: QA evaluators must be fluent in the language of the interaction they are scoring – global calibration across languages is complex",
          "Interpreter and third-party language access: for very low-volume languages, on-demand telephone or video interpreter services must be contracted and integrated as a failsafe",
          "Sign language and accessibility: some markets have legal obligations to provide BSL (UK), ASL (USA), or other sign language access – video relay services may be required",
          "Training material localisation: LMS content for onboarding, compliance, and product training must be available in agent languages, not just English",
          "Regional brand voice: tone, vocabulary, and communication style must be adapted per market by local content managers – translation alone is insufficient"
        ]
      },
      {
        "title": "Digital Self-Service & Channel Strategy",
        "category": "Deflection & Containment | Digital-First CX | Omnichannel Strategy",
        "usecase": "A retail bank launches a mobile app with in-app chat; the digital self-service platform handles 58% of routine queries — balance checks, transaction disputes, card blocks — through an AI chatbot, deflecting 14,000 agent contacts per week.",
        "sub": [
          {
            "name": "Digital channel strategy: define the role and positioning of each customer-facing channel (web, app, chatbot, SMS, WhatsApp, IVR, voice, email, social) and set deflection and containment targets per channel",
            "definition": "An integrated function within the CCaaS ecosystem that manages digital channel strategy, specifically: define the role and positioning of each customer-facing channel (web, app, chatbot, SMS, WhatsApp, IVR, voice, email, social) and set deflection and containment targets per channel. This is a mandatory element of the Digital Self-Service & Channel Strategy capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements digital channel strategy to define the role and positioning of each customer-facing channel (web, app, chatbot, sms, whatsapp, i; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Web self-service portal: authenticated and unauthenticated customer portal for account management, status tracking, FAQs, and service requests – the first line of deflection before any agent contact",
            "definition": "A configurable platform capability that provides web self-service portal, specifically: authenticated and unauthenticated customer portal for account management, status tracking, FAQs, and service requests – the first line of deflection before any agent contact. As part of Digital Self-Service & Channel Strategy, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements web self-service portal to authenticated and unauthenticated customer portal for account management, status tracking, faqs, and; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Mobile app self-service: native app or progressive web app (PWA) with embedded self-service capability, in-app messaging, and push notification for proactive contact avoidance",
            "definition": "A configurable platform capability that provides mobile app self-service, specifically: native app or progressive web app (PWA) with embedded self-service capability, in-app messaging, and push notification for proactive contact avoidance. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements mobile app self-service to native app or progressive web app (pwa) with embedded self-service capability, in-app messaging, and; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "AI chatbot for web and messaging channels: NLP-powered conversational bot handling Tier 1 queries on web, WhatsApp, Facebook Messenger, SMS, and in-app – with seamless escalation to live agent",
            "definition": "The enterprise-grade capability responsible for ai chatbot for web and messaging channels, specifically: NLP-powered conversational bot handling Tier 1 queries on web, WhatsApp, Facebook Messenger, SMS, and in-app – with seamless escalation to live agent. Effective implementation of this sub-capability within Digital Self-Service & Channel Strategy requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements ai chatbot for web and messaging channels to nlp-powered conversational bot handling tier 1 queries on web, whatsapp, facebook messenger, sms, an; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Email deflection: automated acknowledgement with self-service link, AI-powered email response suggestion, and auto-resolution for common query patterns before agent routing",
            "definition": "The enterprise-grade capability responsible for email deflection, specifically: automated acknowledgement with self-service link, AI-powered email response suggestion, and auto-resolution for common query patterns before agent routing. As part of Digital Self-Service & Channel Strategy, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements email deflection to automated acknowledgement with self-service link, ai-powered email response suggestion, and auto-res; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Asynchronous messaging strategy: manage customer expectation for response time on non-real-time channels (WhatsApp, social, email) with clear SLA communications and auto-status updates",
            "definition": "The organisational capability responsible for asynchronous messaging strategy, specifically: manage customer expectation for response time on non-real-time channels (WhatsApp, social, email) with clear SLA communications and auto-status updates. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements asynchronous messaging strategy to manage customer expectation for response time on non-real-time channels (whatsapp, social, email) wi; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Customer account and profile self-management: address changes, preference updates, document uploads, password reset, billing queries – resolved without agent involvement",
            "definition": "The organisational capability responsible for customer account and profile self-management, specifically: address changes, preference updates, document uploads, password reset, billing queries – resolved without agent involvement. This capability is a key component of the Digital Self-Service & Channel Strategy domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements customer account and profile self-management to address changes, preference updates, document uploads, password reset, billing queries – resolved wi; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Self-service transaction completion: payment, booking, cancellation, and returns processing via digital channels with back-office system integration",
            "definition": "The end-to-end process and technology that governs self-service transaction completion, specifically: payment, booking, cancellation, and returns processing via digital channels with back-office system integration. As part of Digital Self-Service & Channel Strategy, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements self-service transaction completion to payment, booking, cancellation, and returns processing via digital channels with back-office system; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Chatbot and digital channel analytics: containment rate, deflection rate, bot abandonment rate, escalation reasons, self-service completion rate by transaction type",
            "definition": "The organisational capability responsible for chatbot and digital channel analytics, specifically: containment rate, deflection rate, bot abandonment rate, escalation reasons, self-service completion rate by transaction type. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements chatbot and digital channel analytics to containment rate, deflection rate, bot abandonment rate, escalation reasons, self-service completion; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Proactive digital notifications: outbound SMS, email, and push notifications to prevent inbound contact (shipment updates, appointment confirmations, service outage alerts, bill reminders)",
            "definition": "A configurable platform capability that provides proactive digital notifications, specifically: outbound SMS, email, and push notifications to prevent inbound contact (shipment updates, appointment confirmations, service outage alerts, bill reminders). Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements proactive digital notifications to outbound sms, email, and push notifications to prevent inbound contact (shipment updates, appointmen; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Community and peer support platform: customer-to-customer help forums moderated by the contact centre team to reduce direct contact volume",
            "definition": "The systematic approach to delivering community and peer support platform, specifically: customer-to-customer help forums moderated by the contact centre team to reduce direct contact volume. As part of Digital Self-Service & Channel Strategy, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements community and peer support platform to customer-to-customer help forums moderated by the contact centre team to reduce direct contact volum; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Digital accessibility: WCAG 2.1 AA compliance across all self-service digital properties for customers with disabilities",
            "definition": "The enterprise-grade capability responsible for digital accessibility, specifically: WCAG 2.1 AA compliance across all self-service digital properties for customers with disabilities. This is a mandatory element of the Digital Self-Service & Channel Strategy capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements digital accessibility to wcag 2.1 aa compliance across all self-service digital properties for customers with disabilities; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Continuous optimisation: A/B testing of self-service journeys, chatbot dialogue improvements, and deflection funnel analysis",
            "definition": "The systematic approach to delivering continuous optimisation, specifically: A/B testing of self-service journeys, chatbot dialogue improvements, and deflection funnel analysis. This capability is a key component of the Digital Self-Service & Channel Strategy domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements continuous optimisation to a/b testing of self-service journeys, chatbot dialogue improvements, and deflection funnel analysis; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          }
        ],
        "int": [
          "CCaaS / Contact Centre Platform – digital channel escalation handoff with full conversation context",
          "CRM – authenticated customer data surfaces in digital portal; self-service actions logged as interactions",
          "IVR / Voice AI – consistent bot dialogue management across voice and digital channels (shared NLU models)",
          "Customer Journey Orchestration – digital channel journey data feeds pre-contact context for IVR and CCR routing",
          "Back-Office / ERP / billing systems – real-time data for self-service transactions (payments, order status, account changes)",
          "Knowledge Management – KB content powers chatbot and web FAQs; single source of truth for all channels",
          "MDM / Customer Data Platform – authenticated customer identity across digital touchpoints",
          "Reporting & Analytics – channel mix, deflection dashboards, digital containment KPIs",
          "Push notification service (Firebase, APNs) – proactive outbound mobile notifications",
          "Consent Management Platform (CMP) – manage digital channel communication consent"
        ],
        "glo": [
          "Channel preference varies significantly by geography: WhatsApp dominates in Brazil, India, MENA; Line in Thailand/Japan; KakaoTalk in South Korea – channel strategy must reflect local market norms",
          "Digital accessibility law: EN 301 549 (EU), Section 508 (USA), Equality Act (UK) – WCAG compliance is a legal requirement in many jurisdictions",
          "Consumer protection law: self-service portals must include clearly accessible human escalation options; some jurisdictions prohibit barriers to reaching a live agent (EU Digital Services Act)",
          "ePrivacy and cookie consent: digital self-service portals must comply with local consent requirements for tracking and analytics",
          "Data localisation: self-service transaction data processed through digital channels may be subject to the same residency rules as contact centre interaction data",
          "App store regulations: Apple App Store and Google Play have regional restrictions and compliance requirements that affect mobile self-service deployment",
          "Digital identity verification: eKYC (electronic Know Your Customer) for authenticated self-service portal access must comply with local financial or regulatory identity requirements",
          "Payment services: self-service payment capabilities must comply with PSD2 (EU), Strong Customer Authentication (SCA) requirements, and local payment regulations",
          "Multi-language digital channels: chatbot, portal, and app must support all customer languages; automated translation quality must meet regulatory and brand standards"
        ]
      },
      {
        "title": "Social Media Strategy & Community Management",
        "category": "Brand Experience | Proactive Engagement | Digital Community",
        "usecase": "A customer complaint about a delayed delivery goes viral on X (Twitter); the social media management platform detects the post within 4 minutes, automatically creates a priority CRM case, and routes it to the social media agent team with the customer's full interaction history.",
        "sub": [
          {
            "name": "Social media listening platform: real-time monitoring of brand mentions, product hashtags, competitor mentions, and relevant keywords across Twitter/X, Facebook, Instagram, LinkedIn, TikTok, Reddit, and review sites",
            "definition": "The organisational capability responsible for social media listening platform, specifically: real-time monitoring of brand mentions, product hashtags, competitor mentions, and relevant keywords across Twitter/X, Facebook, Instagram, LinkedIn, TikTok, Reddit, and review sites. This is a mandatory element of the Social Media Strategy & Community Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements social media listening platform to real-time monitoring of brand mentions, product hashtags, competitor mentions, and relevant keywords; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Sentiment and brand health monitoring: aggregate brand sentiment scoring, share of voice, and trend analysis from social listening data – distinct from interaction sentiment (Domain 7)",
            "definition": "The operational discipline and tooling that enables sentiment and brand health monitoring, specifically: aggregate brand sentiment scoring, share of voice, and trend analysis from social listening data – distinct from interaction sentiment (Domain 7). This capability is a key component of the Social Media Strategy & Community Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements sentiment and brand health monitoring to aggregate brand sentiment scoring, share of voice, and trend analysis from social listening data – d; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Social media routing and triage: classify incoming social mentions by urgency, sentiment, and intent; route actionable contacts to appropriate CCR queues; escalate viral or crisis mentions to senior teams",
            "definition": "An integrated function within the CCaaS ecosystem that manages social media routing and triage, specifically: classify incoming social mentions by urgency, sentiment, and intent; route actionable contacts to appropriate CCR queues; escalate viral or crisis mentions to senior teams. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements social media routing and triage to classify incoming social mentions by urgency, sentiment, and intent; route actionable contacts to ap; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Community platform management: host, moderate, and curate owned community forums where customers help each other – reducing direct contact volume through peer-to-peer support (e.g. Khoros, Salesforce Community Cloud, Higher Logic)",
            "definition": "The end-to-end process and technology that governs community platform management, specifically: host, moderate, and curate owned community forums where customers help each other – reducing direct contact volume through peer-to-peer support (e.g. Khoros, Salesforce Community Cloud, Higher Logic). As part of Social Media Strategy & Community Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements community platform management to host, moderate, and curate owned community forums where customers help each other – reducing direct; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Social media publishing and scheduling: manage outbound social media posts, brand responses, and campaign content through a unified publishing platform with approval workflows",
            "definition": "The organisational capability responsible for social media publishing and scheduling, specifically: manage outbound social media posts, brand responses, and campaign content through a unified publishing platform with approval workflows. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements social media publishing and scheduling to manage outbound social media posts, brand responses, and campaign content through a unified publishi; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "User-generated content (UGC) moderation: review, approve, or remove user-generated content on owned platforms (community forums, social pages) against defined community guidelines",
            "definition": "The end-to-end process and technology that governs user-generated content moderation, specifically: review, approve, or remove user-generated content on owned platforms (community forums, social pages) against defined community guidelines. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements user-generated content moderation to review, approve, or remove user-generated content on owned platforms (community forums, social pages; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Crisis management on social: defined escalation protocol for viral negative sentiment, PR crises, or coordinated negative campaigns – rapid response capability with legal and PR team integration",
            "definition": "A configurable platform capability that provides crisis management on social, specifically: defined escalation protocol for viral negative sentiment, PR crises, or coordinated negative campaigns – rapid response capability with legal and PR team integration. As part of Social Media Strategy & Community Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements crisis management on social to defined escalation protocol for viral negative sentiment, pr crises, or coordinated negative campaig; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Influencer and advocacy management: identify and engage brand advocates, respond to influencer mentions, and manage formal influencer relationships in the context of contact centre operations",
            "definition": "The enterprise-grade capability responsible for influencer and advocacy management, specifically: identify and engage brand advocates, respond to influencer mentions, and manage formal influencer relationships in the context of contact centre operations. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements influencer and advocacy management to identify and engage brand advocates, respond to influencer mentions, and manage formal influencer re; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Review platform management: monitor and respond to reviews on Google, Trustpilot, App Store, Google Play, and sector-specific review platforms as part of the overall customer feedback strategy",
            "definition": "The organisational capability responsible for review platform management, specifically: monitor and respond to reviews on Google, Trustpilot, App Store, Google Play, and sector-specific review platforms as part of the overall customer feedback strategy. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements review platform management to monitor and respond to reviews on google, trustpilot, app store, google play, and sector-specific re; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Social care metrics: track and report on social care KPIs including response time, response rate, public-to-private conversation conversion, sentiment improvement rate, and community deflection rate",
            "definition": "A structured enterprise function that delivers social care metrics, specifically: track and report on social care KPIs including response time, response rate, public-to-private conversation conversion, sentiment improvement rate, and community deflection rate. Effective implementation of this sub-capability within Social Media Strategy & Community Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements social care metrics to track and report on social care kpis including response time, response rate, public-to-private conve; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Social CRM: link social interactions and community posts to CRM customer records to provide a complete view of a customer's engagement across all social and service channels",
            "definition": "An integrated function within the CCaaS ecosystem that manages social crm, specifically: link social interactions and community posts to CRM customer records to provide a complete view of a customer's engagement across all social and service channels. Effective implementation of this sub-capability within Social Media Strategy & Community Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements social crm to link social interactions and community posts to crm customer records to provide a complete view of a; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Regulatory and compliance content review: ensure outbound social content and agent responses on social channels comply with advertising standards, financial promotion rules, and brand guidelines",
            "definition": "A structured enterprise function that delivers regulatory and compliance content review, specifically: ensure outbound social content and agent responses on social channels comply with advertising standards, financial promotion rules, and brand guidelines. Within the Customer Interaction pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements regulatory and compliance content review to ensure outbound social content and agent responses on social channels comply with advertising standa; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Content moderation at scale: AI-powered pre-screening of UGC for inappropriate content (hate speech, spam, misinformation, NSFW content) before human moderation review",
            "definition": "An integrated function within the CCaaS ecosystem that manages content moderation at scale, specifically: AI-powered pre-screening of UGC for inappropriate content (hate speech, spam, misinformation, NSFW content) before human moderation review. As part of Social Media Strategy & Community Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements content moderation at scale to ai-powered pre-screening of ugc for inappropriate content (hate speech, spam, misinformation, nsfw c; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          }
        ],
        "int": [
          "CCaaS / Contact Centre Platform – social contacts routed into the omni-channel queue as workitems; agent responses published back through the social platform",
          "CRM – social mentions and community interactions linked to customer records; social case management",
          "AI / ML platform – sentiment analysis models, content classification, and crisis detection",
          "Quality Management – social interaction quality scoring alongside voice and chat",
          "Reporting & Analytics – social care KPIs and brand health metrics in executive dashboards",
          "Customer Feedback / VoC – social sentiment and review data incorporated into overall VoC programme",
          "Legal and Compliance – crisis escalation path; financial promotion approval workflow",
          "MDM / CRM – link social handle to customer identity in master record (social identity resolution)",
          "Social listening platforms (Brandwatch, Sprinklr, Talkwalker, Meltwater) – primary monitoring tools",
          "Social media platforms (Meta, X, LinkedIn, TikTok) via official APIs – publishing, moderation, and inbox management"
        ],
        "glo": [
          "Social media platform availability varies by country: WeChat/Weibo dominant in China, VKontakte in Russia, Naver in South Korea, LINE in Japan/Thailand – platform coverage must reflect local social landscape",
          "GDPR and social data: monitoring public social posts involving EU residents and linking them to CRM records constitutes personal data processing – purpose limitation and legal basis required",
          "Right to be forgotten on social: customer requests to remove their posts or references from community platforms must be actioned in compliance with GDPR Article 17",
          "Digital Services Act (EU DSA): large online platforms have additional content moderation obligations from 2024 – community platforms over applicable user thresholds face DSA compliance requirements",
          "Financial promotion regulation: any social response touching on financial products must comply with local financial promotion rules (FCA in UK, FINRA in USA, MAS in Singapore)",
          "Defamation law varies: agent responses on social channels are published communications – defamation and libel exposure differs by jurisdiction; legal review process required before publishing certain content types",
          "Language coverage for social listening: monitoring and moderation must cover all languages in which customers engage on social media in each market – not just English",
          "Content moderation standards: what constitutes harmful or inappropriate UGC differs by cultural and legal context; moderation guidelines must be localised per market",
          "Crisis response protocols: the stakeholders, approval chains, and regulatory notification requirements in a social media crisis differ by country and by sector",
          "Tax and data sovereignty: social data collected and processed globally may need to be partitioned per jurisdiction to comply with local data laws"
        ]
      }
    ]
  },
  {
    "label": "Quality & Analytics",
    "icon": "📊",
    "desc": "Interaction recording, quality management, performance management, and business intelligence.",
    "domains": [
      {
        "title": "Interaction Recording & Transcription",
        "category": "Compliance & Quality Infrastructure | Interaction Capture",
        "usecase": "A regulated financial services firm automatically records 100% of voice and chat interactions; when a compliance team receives an FCA inquiry, they retrieve the exact call recording within minutes using metadata filters, with PII already redacted in the transcript.",
        "sub": [
          {
            "name": "Full call recording (100% or sampled) with metadata tagging (agent, queue, duration, outcome)",
            "definition": "The end-to-end process and technology that governs full call recording with metadata tagging within the contact centre environment. This capability is a key component of the Interaction Recording & Transcription domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys full call recording with metadata tagging as part of their Interaction Recording & Transcription capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Screen recording – agent desktop capture during interactions for quality review and compliance",
            "definition": "The organisational capability responsible for screen recording, specifically: agent desktop capture during interactions for quality review and compliance. This is a mandatory element of the Interaction Recording & Transcription capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements screen recording to agent desktop capture during interactions for quality review and compliance; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Synchronised call + screen playback in review interface",
            "definition": "An integrated function within the CCaaS ecosystem that manages synchronised call + screen playback in review interface within the contact centre environment. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys synchronised call + screen playback in review interface as part of their Interaction Recording & Transcription capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Chat and email interaction archival and retrieval",
            "definition": "The enterprise-grade capability responsible for chat and email interaction archival and retrieval within the contact centre environment. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys chat and email interaction archival and retrieval as part of their Interaction Recording & Transcription capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Social and messaging channel interaction logging",
            "definition": "A configurable platform capability that provides social and messaging channel interaction logging within the contact centre environment. Effective implementation of this sub-capability within Interaction Recording & Transcription requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys social and messaging channel interaction logging as part of their Interaction Recording & Transcription capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Real-time transcription during live calls (live assist mode for agents/supervisors)",
            "definition": "An integrated function within the CCaaS ecosystem that manages real-time transcription during live calls within the contact centre environment. This is a mandatory element of the Interaction Recording & Transcription capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys real-time transcription during live calls as part of their Interaction Recording & Transcription capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Post-call transcription (batch) for quality, analytics, and compliance",
            "definition": "The systematic approach to delivering post-call transcription for quality, analytics, and compliance within the contact centre environment. This is a mandatory element of the Interaction Recording & Transcription capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys post-call transcription for quality, analytics, and compliance as part of their Interaction Recording & Transcription capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Speaker diarisation – separate agent and customer voice channels in transcript",
            "definition": "The enterprise-grade capability responsible for speaker diarisation, specifically: separate agent and customer voice channels in transcript. As part of Interaction Recording & Transcription, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements speaker diarisation to separate agent and customer voice channels in transcript; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Transcript search and keyword indexing",
            "definition": "A structured enterprise function that delivers transcript search and keyword indexing within the contact centre environment. Effective implementation of this sub-capability within Interaction Recording & Transcription requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys transcript search and keyword indexing as part of their Interaction Recording & Transcription capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Secure storage with access controls and encryption at rest and in transit",
            "definition": "A configurable platform capability that provides secure storage with access controls and encryption at rest and in transit within the contact centre environment. This capability is a key component of the Interaction Recording & Transcription domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys secure storage with access controls and encryption at rest and in transit as part of their Interaction Recording & Transcription capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Retention policy management (configurable per channel, geography, regulation)",
            "definition": "A configurable platform capability that provides retention policy management within the contact centre environment. Effective implementation of this sub-capability within Interaction Recording & Transcription requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys retention policy management as part of their Interaction Recording & Transcription capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Audit trail: access log for all recording playback and download events",
            "definition": "The operational discipline and tooling that enables audit trail, specifically: access log for all recording playback and download events. Effective implementation of this sub-capability within Interaction Recording & Transcription requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements audit trail to access log for all recording playback and download events; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Legal hold capability – suspend deletion for specific interactions under litigation",
            "definition": "The organisational capability responsible for legal hold capability, specifically: suspend deletion for specific interactions under litigation. Effective implementation of this sub-capability within Interaction Recording & Transcription requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements legal hold capability to suspend deletion for specific interactions under litigation; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Redaction: automatic or manual PII / payment data redaction from recordings and transcripts",
            "definition": "An integrated function within the CCaaS ecosystem that manages redaction, specifically: automatic or manual PII / payment data redaction from recordings and transcripts. Effective implementation of this sub-capability within Interaction Recording & Transcription requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements redaction to automatic or manual pii / payment data redaction from recordings and transcripts; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "PCI pause-and-resume recording for payment capture (DTMF masking)",
            "definition": "The organisational capability responsible for pci pause-and-resume recording for payment capture within the contact centre environment. This is a mandatory element of the Interaction Recording & Transcription capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys pci pause-and-resume recording for payment capture as part of their Interaction Recording & Transcription capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Export and eDiscovery support for regulatory/legal requests",
            "definition": "The systematic approach to delivering export and ediscovery support for regulatory/legal requests within the contact centre environment. Effective implementation of this sub-capability within Interaction Recording & Transcription requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys export and ediscovery support for regulatory/legal requests as part of their Interaction Recording & Transcription capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "CCaaS / Contact Centre Platform – trigger start/stop recording events, metadata feed",
          "Quality Management – serve recordings and transcripts for QA evaluation",
          "Speech & Text Analytics – transcripts as primary input for sentiment and topic analysis",
          "CRM – link recording to case/interaction record for agent and supervisor review",
          "Compliance / Legal – eDiscovery export, legal hold management",
          "WFM – screen capture for adherence verification",
          "Reporting & Analytics – recording metadata for interaction KPI dashboards",
          "Security / DLP – scan transcripts for sensitive data and flag for redaction",
          "Knowledge Management – extract insights from transcripts to improve KB content"
        ],
        "glo": [
          "Mandatory recording laws vary: FCA (UK), MiFID II (EU financial services) require 100% call recording",
          "Consent laws differ: two-party consent states (USA) require caller notification; single-party consent in others",
          "GDPR Article 5: recordings are personal data – purpose limitation, storage minimisation, deletion rights",
          "Retention mandates vary from 6 months to 7 years depending on sector and country",
          "Data residency: recordings may not leave national borders (Russia, China, India, Saudi Arabia)",
          "PCI DSS: cardholder data must be masked/removed from recordings globally",
          "HIPAA (USA healthcare): specific safeguards for PHI in recorded interactions",
          "Cross-border data transfer restrictions affect where transcription processing can occur",
          "Multi-language transcription engine coverage for all agent/customer languages",
          "Legal eDiscovery standards differ: FRCP (USA), UK Disclosure, GDPR data subject access"
        ]
      },
      {
        "title": "Quality Management (QM) & Behavioural Analytics",
        "category": "Quality Assurance | Interaction Intelligence | Compliance Monitoring",
        "usecase": "Auto-QA scores 100% of interactions overnight against a 12-point scorecard; the system surfaces the 8% of calls with compliance risk scores above threshold to human evaluators each morning, tripling evaluation coverage without adding headcount.",
        "sub": [
          {
            "name": "Interaction sampling and evaluation workflow (manual and automated)",
            "definition": "The operational discipline and tooling that enables interaction sampling and evaluation workflow within the contact centre environment. Effective implementation of this sub-capability within Quality Management (QM) & Behavioural Analytics requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys interaction sampling and evaluation workflow as part of their Quality Management (QM) & Behavioural Analytics capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "QA scorecard builder – configurable evaluation criteria, weightings, and scoring logic",
            "definition": "A structured enterprise function that delivers qa scorecard builder, specifically: configurable evaluation criteria, weightings, and scoring logic. Effective implementation of this sub-capability within Quality Management (QM) & Behavioural Analytics requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements qa scorecard builder to configurable evaluation criteria, weightings, and scoring logic; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Manual evaluation interface with aligned audio/screen playback",
            "definition": "The operational discipline and tooling that enables manual evaluation interface with aligned audio/screen playback within the contact centre environment. Effective implementation of this sub-capability within Quality Management (QM) & Behavioural Analytics requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys manual evaluation interface with aligned audio/screen playback as part of their Quality Management (QM) & Behavioural Analytics capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Automated Quality Management (AQM) – AI-scored evaluations on 100% of interactions",
            "definition": "The systematic approach to delivering automated quality management, specifically: AI-scored evaluations on 100% of interactions. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements automated quality management to ai-scored evaluations on 100% of interactions; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Sentiment analysis – real-time and post-interaction agent and customer sentiment scoring",
            "definition": "A configurable platform capability that provides sentiment analysis, specifically: real-time and post-interaction agent and customer sentiment scoring. Effective implementation of this sub-capability within Quality Management (QM) & Behavioural Analytics requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements sentiment analysis to real-time and post-interaction agent and customer sentiment scoring; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Speech analytics: keyword and phrase spotting, topic categorisation, silence detection, overtalk",
            "definition": "The systematic approach to delivering speech analytics, specifically: keyword and phrase spotting, topic categorisation, silence detection, overtalk. Effective implementation of this sub-capability within Quality Management (QM) & Behavioural Analytics requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements speech analytics to keyword and phrase spotting, topic categorisation, silence detection, overtalk; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Text analytics for chat, email, and social interactions",
            "definition": "The operational discipline and tooling that enables text analytics for chat, email, and social interactions within the contact centre environment. This capability is a key component of the Quality Management (QM) & Behavioural Analytics domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys text analytics for chat, email, and social interactions as part of their Quality Management (QM) & Behavioural Analytics capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Compliance monitoring – dead-air, prohibited phrase detection, script adherence",
            "definition": "The end-to-end process and technology that governs compliance monitoring, specifically: dead-air, prohibited phrase detection, script adherence. This is a mandatory element of the Quality Management (QM) & Behavioural Analytics capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements compliance monitoring to dead-air, prohibited phrase detection, script adherence; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Calibration workflow – cross-evaluator calibration sessions to ensure scoring consistency",
            "definition": "An integrated function within the CCaaS ecosystem that manages calibration workflow, specifically: cross-evaluator calibration sessions to ensure scoring consistency. This is a mandatory element of the Quality Management (QM) & Behavioural Analytics capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements calibration workflow to cross-evaluator calibration sessions to ensure scoring consistency; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Agent acknowledgement of evaluations and dispute/appeal workflow",
            "definition": "A configurable platform capability that provides agent acknowledgement of evaluations and dispute/appeal workflow within the contact centre environment. As part of Quality Management (QM) & Behavioural Analytics, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys agent acknowledgement of evaluations and dispute/appeal workflow as part of their Quality Management (QM) & Behavioural Analytics capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Coaching plan generation from QA results – link findings to L&D training assignments",
            "definition": "The end-to-end process and technology that governs coaching plan generation from qa results, specifically: link findings to L&D training assignments. As part of Quality Management (QM) & Behavioural Analytics, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements coaching plan generation from qa results to link findings to l&d training assignments; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Category trending and root cause analysis dashboards",
            "definition": "An integrated function within the CCaaS ecosystem that manages category trending and root cause analysis dashboards within the contact centre environment. Effective implementation of this sub-capability within Quality Management (QM) & Behavioural Analytics requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys category trending and root cause analysis dashboards as part of their Quality Management (QM) & Behavioural Analytics capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Voice of Employee (VoE) signals from interaction patterns",
            "definition": "The systematic approach to delivering voice of employee signals from interaction patterns within the contact centre environment. Effective implementation of this sub-capability within Quality Management (QM) & Behavioural Analytics requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys voice of employee signals from interaction patterns as part of their Quality Management (QM) & Behavioural Analytics capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Predictive quality scoring – risk flag interactions for targeted review",
            "definition": "A structured enterprise function that delivers predictive quality scoring, specifically: risk flag interactions for targeted review. As part of Quality Management (QM) & Behavioural Analytics, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements predictive quality scoring to risk flag interactions for targeted review; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Customer emotion and effort scoring",
            "definition": "A configurable platform capability that provides customer emotion and effort scoring within the contact centre environment. Effective implementation of this sub-capability within Quality Management (QM) & Behavioural Analytics requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys customer emotion and effort scoring as part of their Quality Management (QM) & Behavioural Analytics capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Desktop analytics – agent application usage and navigation pattern analysis",
            "definition": "A structured enterprise function that delivers desktop analytics, specifically: agent application usage and navigation pattern analysis. This capability is a key component of the Quality Management (QM) & Behavioural Analytics domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements desktop analytics to agent application usage and navigation pattern analysis; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Adherence to script and process compliance monitoring",
            "definition": "The organisational capability responsible for adherence to script and process compliance monitoring within the contact centre environment. This capability is a key component of the Quality Management (QM) & Behavioural Analytics domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys adherence to script and process compliance monitoring as part of their Quality Management (QM) & Behavioural Analytics capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "Interaction Recording – recordings and transcripts as primary input",
          "CCaaS – interaction metadata, agent state, queue data",
          "LMS / L&D – trigger remedial or targeted training from QA failures",
          "Performance Management – QA scores feed into CCR performance dashboards",
          "CRM – link QA evaluation to the customer case",
          "WFM – coaching session scheduling without SLA impact",
          "HR – escalate conduct/compliance failures to HR case management",
          "Reporting & Analytics – QA trend data for leadership dashboards",
          "Skills Management – update competency evidence from QA data",
          "Incentive & Compensation – QA score as a modifier in incentive calculations"
        ],
        "glo": [
          "Multi-language speech and text analytics models required for each operating language",
          "Regulatory compliance monitoring requirements differ: FCA TCF (UK), CFPB (USA), MAS (Singapore)",
          "GDPR / PDPA constraints on automated profiling of employees – must have legitimate basis and transparency",
          "Consent disclosure requirements for monitoring vary by country – agent awareness notices",
          "Works council or union co-determination rights on monitoring scope (Germany, France, Nordics)",
          "Data retention: QA evaluation records subject to employment record retention rules per country",
          "Time zone aware reporting and calibration session scheduling",
          "Cultural sensitivity in sentiment model training – norms differ across geographies",
          "Calibration sessions require coordination across globally distributed QA teams"
        ]
      },
      {
        "title": "Performance Management",
        "category": "Workforce Performance | Continuous Improvement",
        "usecase": "An agent's 90-day dashboard shows AHT trending 22% above team average; the system automatically triggers a coaching session with their team leader and assigns a focused module on call control techniques in the LMS.",
        "sub": [
          {
            "name": "Individual CCR KPI dashboard: AHT, FCR, CSAT, Quality Score, Adherence, Sales/Conversion (where applicable)",
            "definition": "The organisational capability responsible for individual ccr kpi dashboard, specifically: AHT, FCR, CSAT, Quality Score, Adherence, Sales/Conversion (where applicable). This capability is a key component of the Performance Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements individual ccr kpi dashboard to aht, fcr, csat, quality score, adherence, sales/conversion (where applicable); after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Team and site-level performance aggregation and benchmarking",
            "definition": "The operational discipline and tooling that enables team and site-level performance aggregation and benchmarking within the contact centre environment. Effective implementation of this sub-capability within Performance Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys team and site-level performance aggregation and benchmarking as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Target-setting and goal alignment (individual, team, programme)",
            "definition": "An integrated function within the CCaaS ecosystem that manages target-setting and goal alignment within the contact centre environment. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys target-setting and goal alignment as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Performance review cycle management (weekly, monthly, quarterly, annual)",
            "definition": "The end-to-end process and technology that governs performance review cycle management within the contact centre environment. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys performance review cycle management as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Structured 1:1 and coaching session documentation and action tracking",
            "definition": "The operational discipline and tooling that enables structured 1:1 and coaching session documentation and action tracking within the contact centre environment. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys structured 1:1 and coaching session documentation and action tracking as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Performance improvement plan (PIP) management",
            "definition": "The end-to-end process and technology that governs performance improvement plan management within the contact centre environment. As part of Performance Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys performance improvement plan management as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Disciplinary and absence management linkage to performance record",
            "definition": "A structured enterprise function that delivers disciplinary and absence management linkage to performance record within the contact centre environment. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys disciplinary and absence management linkage to performance record as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Real-time agent performance feed (live stats visible to agent and supervisor)",
            "definition": "A configurable platform capability that provides real-time agent performance feed within the contact centre environment. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys real-time agent performance feed as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Gamification engine: leaderboards, badges, recognition tools to drive engagement",
            "definition": "The systematic approach to delivering gamification engine, specifically: leaderboards, badges, recognition tools to drive engagement. Effective implementation of this sub-capability within Performance Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements gamification engine to leaderboards, badges, recognition tools to drive engagement; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Trend analysis and predictive performance modelling",
            "definition": "An integrated function within the CCaaS ecosystem that manages trend analysis and predictive performance modelling within the contact centre environment. As part of Performance Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys trend analysis and predictive performance modelling as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "360-degree feedback capability (peer, manager, customer)",
            "definition": "The end-to-end process and technology that governs 360-degree feedback capability within the contact centre environment. This is a mandatory element of the Performance Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys 360-degree feedback capability as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Recognition and reward nomination workflows",
            "definition": "The operational discipline and tooling that enables recognition and reward nomination workflows within the contact centre environment. This capability is a key component of the Performance Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys recognition and reward nomination workflows as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Calibrated performance ratings for promotion and compensation review cycles",
            "definition": "The enterprise-grade capability responsible for calibrated performance ratings for promotion and compensation review cycles within the contact centre environment. As part of Performance Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys calibrated performance ratings for promotion and compensation review cycles as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Attrition risk scoring based on performance and engagement signals",
            "definition": "The organisational capability responsible for attrition risk scoring based on performance and engagement signals within the contact centre environment. This is a mandatory element of the Performance Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys attrition risk scoring based on performance and engagement signals as part of their Performance Management capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "CCaaS – real-time interaction statistics (AHT, ACW, contacts handled)",
          "Quality Management – QA scores and trends",
          "WFM – adherence and schedule compliance data",
          "CRM – FCR, CSAT, case outcome data",
          "Skills Management – skills attainment data",
          "LMS / L&D – training completion and certification data",
          "HR / HRIS – employment record, leave history, disciplinary history",
          "Incentive & Compensation – performance ratings trigger incentive calculations",
          "Reporting & Analytics – publish performance data to executive dashboards"
        ],
        "glo": [
          "Performance review cadence and rating scales may need to align with local employment law (e.g., German Mitbestimmung)",
          "PIPs and disciplinary processes must comply with local labour law (UK ACAS code, Australian FWA, Indian IDA)",
          "Multi-currency target-setting for any revenue or sales KPIs",
          "Data protection: employee performance data is special category personal data in some frameworks",
          "Time zone aware reporting for global performance roll-ups",
          "Localised KPI weighting: cultural and operational context may shift what metrics matter most",
          "Gamification elements must be culturally appropriate (competitive leaderboards not universally valued)",
          "Promotion criteria and benchmarks must comply with equality and non-discrimination law per country"
        ]
      },
      {
        "title": "Reporting, Analytics & Business Intelligence",
        "category": "Data-Driven Operations | Executive Visibility | Operational Intelligence",
        "usecase": "The operations director opens a Power BI dashboard showing real-time FCR rates by queue, agent, and product line; a drill-down reveals that FCR on mortgage queries is 12 points below average, triggering a root cause investigation into knowledge gaps.",
        "sub": [
          {
            "name": "Real-time operational dashboards: service levels, queue depth, agent occupancy, live KPIs (wallboards)",
            "definition": "The end-to-end process and technology that governs real-time operational dashboards, specifically: service levels, queue depth, agent occupancy, live KPIs (wallboards). Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements real-time operational dashboards to service levels, queue depth, agent occupancy, live kpis (wallboards); after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Historical reporting: contact volume, AHT, FCR, CSAT, QA, adherence trends",
            "definition": "The systematic approach to delivering historical reporting, specifically: contact volume, AHT, FCR, CSAT, QA, adherence trends. This capability is a key component of the Reporting, Analytics & Business Intelligence domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements historical reporting to contact volume, aht, fcr, csat, qa, adherence trends; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Agent, team, site, programme, and global roll-up reporting hierarchy",
            "definition": "A structured enterprise function that delivers agent, team, site, programme, and global roll-up reporting hierarchy within the contact centre environment. As part of Reporting, Analytics & Business Intelligence, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys agent, team, site, programme, and global roll-up reporting hierarchy as part of their Reporting, Analytics & Business Intelligence capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Self-service BI: drag-and-drop report builder for ops managers and analysts",
            "definition": "The operational discipline and tooling that enables self-service bi, specifically: drag-and-drop report builder for ops managers and analysts. As part of Reporting, Analytics & Business Intelligence, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements self-service bi to drag-and-drop report builder for ops managers and analysts; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Pre-built report library for standard contact centre metrics (COPC, ICMI frameworks)",
            "definition": "A configurable platform capability that provides pre-built report library for standard contact centre metrics within the contact centre environment. Effective implementation of this sub-capability within Reporting, Analytics & Business Intelligence requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys pre-built report library for standard contact centre metrics as part of their Reporting, Analytics & Business Intelligence capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Customer experience analytics: CSAT, NPS, CES trends and driver analysis",
            "definition": "The organisational capability responsible for customer experience analytics, specifically: CSAT, NPS, CES trends and driver analysis. Effective implementation of this sub-capability within Reporting, Analytics & Business Intelligence requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements customer experience analytics to csat, nps, ces trends and driver analysis; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Cost-per-contact and operational efficiency reporting",
            "definition": "An integrated function within the CCaaS ecosystem that manages cost-per-contact and operational efficiency reporting within the contact centre environment. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys cost-per-contact and operational efficiency reporting as part of their Reporting, Analytics & Business Intelligence capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Forecasting accuracy reporting (WFM actuals vs. forecast)",
            "definition": "An integrated function within the CCaaS ecosystem that manages forecasting accuracy reporting within the contact centre environment. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys forecasting accuracy reporting as part of their Reporting, Analytics & Business Intelligence capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Quality and compliance trend reporting",
            "definition": "A structured enterprise function that delivers quality and compliance trend reporting within the contact centre environment. As part of Reporting, Analytics & Business Intelligence, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys quality and compliance trend reporting as part of their Reporting, Analytics & Business Intelligence capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Interaction analytics: topic trending, sentiment distribution, driver categorisation",
            "definition": "A structured enterprise function that delivers interaction analytics, specifically: topic trending, sentiment distribution, driver categorisation. This is a mandatory element of the Reporting, Analytics & Business Intelligence capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements interaction analytics to topic trending, sentiment distribution, driver categorisation; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Attrition and retention analytics",
            "definition": "A configurable platform capability that provides attrition and retention analytics within the contact centre environment. As part of Reporting, Analytics & Business Intelligence, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys attrition and retention analytics as part of their Reporting, Analytics & Business Intelligence capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Executive scorecard / balanced KPI view",
            "definition": "The enterprise-grade capability responsible for executive scorecard / balanced kpi view within the contact centre environment. Effective implementation of this sub-capability within Reporting, Analytics & Business Intelligence requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys executive scorecard / balanced kpi view as part of their Reporting, Analytics & Business Intelligence capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Automated report scheduling and email distribution",
            "definition": "The organisational capability responsible for automated report scheduling and email distribution within the contact centre environment. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys automated report scheduling and email distribution as part of their Reporting, Analytics & Business Intelligence capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Data export and API access for downstream BI tools",
            "definition": "The enterprise-grade capability responsible for data export and api access for downstream bi tools within the contact centre environment. Within the Quality & Analytics pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys data export and api access for downstream bi tools as part of their Reporting, Analytics & Business Intelligence capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Anomaly detection and alerting on KPI deviations",
            "definition": "The end-to-end process and technology that governs anomaly detection and alerting on kpi deviations within the contact centre environment. This capability is a key component of the Reporting, Analytics & Business Intelligence domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys anomaly detection and alerting on kpi deviations as part of their Reporting, Analytics & Business Intelligence capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Programme-level SLA performance reporting for client-facing BPO contexts",
            "definition": "The systematic approach to delivering programme-level sla performance reporting for client-facing bpo contexts within the contact centre environment. Effective implementation of this sub-capability within Reporting, Analytics & Business Intelligence requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys programme-level sla performance reporting for client-facing bpo contexts as part of their Reporting, Analytics & Business Intelligence capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "CCaaS – primary source of interaction volume, AHT, service level, agent state data",
          "CRM – case outcomes, CSAT, FCR, customer satisfaction data",
          "WFM – adherence, shrinkage, schedule attainment data",
          "Quality Management – QA scores, compliance flags, coaching outcomes",
          "HR / HRIS – headcount, attrition, recruitment pipeline data",
          "Performance Management – individual and team KPI data",
          "Incentive & Compensation – incentive attainment and cost data",
          "Finance / ERP – cost centre, revenue, and P&L data for commercial reporting",
          "Data warehouse / lakehouse (e.g. Snowflake, Databricks, BigQuery) – aggregated enterprise data",
          "BI tools (Power BI, Tableau, Looker) – front-end visualisation"
        ],
        "glo": [
          "Multi-time-zone reporting: ensure correct timestamp handling and time zone conversion in all reports",
          "Multi-currency reporting for global cost and revenue metrics",
          "GDPR / data protection: reporting data must be anonymised or pseudonymised where required",
          "Data residency: ensure BI platform does not aggregate or transfer restricted data cross-border",
          "Localised KPI benchmarks: account for structural differences in metrics across geographies",
          "Regulatory reporting obligations: some jurisdictions require submission of performance data to regulators",
          "Multi-language report delivery for regional stakeholders",
          "Consolidation and normalisation of data from multiple regional CCaaS instances",
          "GDPR-compliant data retention for analytics datasets",
          "Role-based access control to ensure agents see only their own data, managers see their team"
        ]
      }
    ]
  },
  {
    "label": "AI & Automation",
    "icon": "🤖",
    "desc": "AI, ML, intelligent automation, agent assist, real-time sentiment, RPA, and generative AI.",
    "domains": [
      {
        "title": "AI, ML & Intelligent Automation",
        "category": "Next-Generation Capabilities | Operational Intelligence | Automation",
        "usecase": "During a live call, the AI copilot detects the customer mention a competitor's price; it instantly surfaces a retention offer script and product comparison card on the agent's desktop, increasing save rate by 9 percentage points.",
        "sub": [
          {
            "name": "Real-Time Agent Assist: AI listens live to the conversation and proactively surfaces knowledge articles, compliance scripts, and next-best-action recommendations on the CCR screen – without the agent having to search",
            "definition": "The organisational capability responsible for real-time agent assist, specifically: AI listens live to the conversation and proactively surfaces knowledge articles, compliance scripts, and next-best-action recommendations on the CCR screen – without the agent having to search. This is a mandatory element of the AI, ML & Intelligent Automation capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements real-time agent assist to ai listens live to the conversation and proactively surfaces knowledge articles, compliance scripts; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Automated After-Call Work (ACW) / Auto-Summarisation: generative AI writes call notes, selects the correct disposition code, and logs the complete case summary in the CRM the moment the call ends – highest ROI AI capability in modern contact centres",
            "definition": "An integrated function within the CCaaS ecosystem that manages automated after-call work / auto-summarisation, specifically: generative AI writes call notes, selects the correct disposition code, and logs the complete case summary in the CRM the moment the call ends – highest ROI AI capability in modern contact centres. As part of AI, ML & Intelligent Automation, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements automated after-call work / auto-summarisation to generative ai writes call notes, selects the correct disposition code, and logs the complete case su; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Generative Knowledge Retrieval (RAG – Retrieval Augmented Generation): upgrades traditional KB search to an AI assistant where CCRs ask natural language questions ('What is the penalty for breaking this lease in Germany?') and receive synthesised, source-cited answers drawn from internal knowledge bases",
            "definition": "The enterprise-grade capability responsible for generative knowledge retrieval, specifically: upgrades traditional KB search to an AI assistant where CCRs ask natural language questions ('What is the penalty for breaking this lease in Germany?') and receive synthesised, source-cited answers drawn from internal knowledge bases. This is a mandatory element of the AI, ML & Intelligent Automation capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements generative knowledge retrieval to upgrades traditional kb search to an ai assistant where ccrs ask natural language questions ('what i; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Robotic Desktop Automation (RDA): attended automation that executes repetitive multi-system clicks on the agent's desktop while they remain on the phone (e.g., updating an address across three legacy billing systems simultaneously) – distinct from back-office RPA as it operates in real time alongside the agent",
            "definition": "The operational discipline and tooling that enables robotic desktop automation, specifically: attended automation that executes repetitive multi-system clicks on the agent's desktop while they remain on the phone (e.g., updating an address across three legacy billing systems simultaneously) – distinct from back-office RPA as it operates in real time alongside the agent. Effective implementation of this sub-capability within AI, ML & Intelligent Automation requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements robotic desktop automation to attended automation that executes repetitive multi-system clicks on the agent's desktop while they r; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Real-Time Supervisor Alerts: AI monitors live calls for escalation signals (negative sentiment, raised voices, compliance risk phrases) and automatically alerts supervisors to intervene",
            "definition": "A structured enterprise function that delivers real-time supervisor alerts, specifically: AI monitors live calls for escalation signals (negative sentiment, raised voices, compliance risk phrases) and automatically alerts supervisors to intervene. Effective implementation of this sub-capability within AI, ML & Intelligent Automation requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements real-time supervisor alerts to ai monitors live calls for escalation signals (negative sentiment, raised voices, compliance risk ph; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Predictive Behavioural Routing: AI matches a specific customer to a specific CCR based on historical rapport, communication style, personality profiles, and predicted success rates – moving beyond simple skills-based routing to optimise outcome",
            "definition": "The operational discipline and tooling that enables predictive behavioural routing, specifically: AI matches a specific customer to a specific CCR based on historical rapport, communication style, personality profiles, and predicted success rates – moving beyond simple skills-based routing to optimise outcome. This capability is a key component of the AI, ML & Intelligent Automation domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements predictive behavioural routing to ai matches a specific customer to a specific ccr based on historical rapport, communication style, p; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Voice Biometrics & Passive Authentication: AI analyses the caller's voiceprint passively in the background to authenticate instantly, bypassing security questions; deepfake audio and voice spoofing detection included",
            "definition": "The enterprise-grade capability responsible for voice biometrics & passive authentication, specifically: AI analyses the caller's voiceprint passively in the background to authenticate instantly, bypassing security questions; deepfake audio and voice spoofing detection included. Effective implementation of this sub-capability within AI, ML & Intelligent Automation requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements voice biometrics & passive authentication to ai analyses the caller's voiceprint passively in the background to authenticate instantly, bypassing; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Intent Prediction & Pre-Contact Intelligence: AI determines why the customer is likely contacting based on their recent digital behaviour (web/app activity) before they speak, enabling proactive routing and personalised IVR treatment",
            "definition": "The systematic approach to delivering intent prediction & pre-contact intelligence, specifically: AI determines why the customer is likely contacting based on their recent digital behaviour (web/app activity) before they speak, enabling proactive routing and personalised IVR treatment. Within the AI & Automation pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements intent prediction & pre-contact intelligence to ai determines why the customer is likely contacting based on their recent digital behaviour (web/app; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Seamless Bot-to-Human Handoff with AI Summary: when transferring from a conversational bot to a live agent, generative AI produces a structured handoff summary so the customer never repeats themselves",
            "definition": "The end-to-end process and technology that governs seamless bot-to-human handoff with ai summary, specifically: when transferring from a conversational bot to a live agent, generative AI produces a structured handoff summary so the customer never repeats themselves. Within the AI & Automation pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements seamless bot-to-human handoff with ai summary to when transferring from a conversational bot to a live agent, generative ai produces a structured han; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "AI-powered chatbot and virtual agent for digital channels (chat, email, WhatsApp, web)",
            "definition": "The organisational capability responsible for ai-powered chatbot and virtual agent for digital channels within the contact centre environment. As part of AI, ML & Intelligent Automation, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys ai-powered chatbot and virtual agent for digital channels as part of their AI, ML & Intelligent Automation capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Churn prediction and proactive outreach triggering",
            "definition": "The end-to-end process and technology that governs churn prediction and proactive outreach triggering within the contact centre environment. This capability is a key component of the AI, ML & Intelligent Automation domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys churn prediction and proactive outreach triggering as part of their AI, ML & Intelligent Automation capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Conversational Topic Mining: unsupervised machine learning ingests 100% of interaction transcripts to automatically discover new, trending customer issues without analysts needing to know what keywords to search for – surfaces unknown unknowns",
            "definition": "The end-to-end process and technology that governs conversational topic mining, specifically: unsupervised machine learning ingests 100% of interaction transcripts to automatically discover new, trending customer issues without analysts needing to know what keywords to search for – surfaces unknown unknowns. This is a mandatory element of the AI, ML & Intelligent Automation capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements conversational topic mining to unsupervised machine learning ingests 100% of interaction transcripts to automatically discover new; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "AI-Enhanced WFM Forecasting: machine learning models predict contact volumes by factoring in external signals including weather, planned marketing campaigns, social media trend spikes, and seasonal patterns",
            "definition": "The end-to-end process and technology that governs ai-enhanced wfm forecasting, specifically: machine learning models predict contact volumes by factoring in external signals including weather, planned marketing campaigns, social media trend spikes, and seasonal patterns. As part of AI, ML & Intelligent Automation, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements ai-enhanced wfm forecasting to machine learning models predict contact volumes by factoring in external signals including weather; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Real-Time Sentiment & Emotion AI: acoustic analysis of pitch, pace, and tone combined with text sentiment scoring to flag calls that are escalating in real time; also used for post-interaction emotion trend analysis",
            "definition": "The end-to-end process and technology that governs real-time sentiment & emotion ai, specifically: acoustic analysis of pitch, pace, and tone combined with text sentiment scoring to flag calls that are escalating in real time; also used for post-interaction emotion trend analysis. This is a mandatory element of the AI, ML & Intelligent Automation capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements real-time sentiment & emotion ai to acoustic analysis of pitch, pace, and tone combined with text sentiment scoring to flag calls that a; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Automated QA scoring (speech + text analytics + LLM) at scale – 100% interaction coverage",
            "definition": "A structured enterprise function that delivers automated qa scoring at scale, specifically: 100% interaction coverage. As part of AI, ML & Intelligent Automation, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements automated qa scoring at scale to 100% interaction coverage; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Predictive adherence and absence risk modelling",
            "definition": "The end-to-end process and technology that governs predictive adherence and absence risk modelling within the contact centre environment. Effective implementation of this sub-capability within AI, ML & Intelligent Automation requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys predictive adherence and absence risk modelling as part of their AI, ML & Intelligent Automation capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Automated contact classification and tagging using ML models",
            "definition": "The enterprise-grade capability responsible for automated contact classification and tagging using ml models within the contact centre environment. As part of AI, ML & Intelligent Automation, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys automated contact classification and tagging using ml models as part of their AI, ML & Intelligent Automation capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Robotic Process Automation (RPA) for back-office task completion triggered by agent interaction – distinct from RDA (RPA operates unattended, in back-office systems, after the call)",
            "definition": "A structured enterprise function that delivers robotic process automation for back-office task completion triggered by agent interaction, specifically: distinct from RDA (RPA operates unattended, in back-office systems, after the call). This capability is a key component of the AI, ML & Intelligent Automation domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements robotic process automation for back-office task completion triggered by agent interaction to distinct from rda (rpa operates unattended, in back-office systems, after the call); after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Fraud detection ML models during authentication and transaction processing",
            "definition": "The enterprise-grade capability responsible for fraud detection ml models during authentication and transaction processing within the contact centre environment. As part of AI, ML & Intelligent Automation, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys fraud detection ml models during authentication and transaction processing as part of their AI, ML & Intelligent Automation capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Customer lifetime value and segmentation modelling",
            "definition": "A structured enterprise function that delivers customer lifetime value and segmentation modelling within the contact centre environment. This capability is a key component of the AI, ML & Intelligent Automation domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys customer lifetime value and segmentation modelling as part of their AI, ML & Intelligent Automation capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "AI model governance: version management, bias testing, explainability, performance monitoring",
            "definition": "The operational discipline and tooling that enables ai model governance, specifically: version management, bias testing, explainability, performance monitoring. This capability is a key component of the AI, ML & Intelligent Automation domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements ai model governance to version management, bias testing, explainability, performance monitoring; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Responsible AI policy and ethical use framework",
            "definition": "A structured enterprise function that delivers responsible ai policy and ethical use framework within the contact centre environment. This is a mandatory element of the AI, ML & Intelligent Automation capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys responsible ai policy and ethical use framework as part of their AI, ML & Intelligent Automation capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "MLOps platform for model training, deployment, monitoring, and drift detection",
            "definition": "A structured enterprise function that delivers mlops platform for model training, deployment, monitoring, and drift detection within the contact centre environment. Within the AI & Automation pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys mlops platform for model training, deployment, monitoring, and drift detection as part of their AI, ML & Intelligent Automation capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "CCaaS – inject agent assist recommendations and real-time alerts into agent desktop",
          "IVR / Voice AI – power NLU, conversational flows, passive biometrics, and deepfake detection",
          "Interaction Recording – transcription feed as primary input for all ML models",
          "CRM – enrich customer record with AI-generated intent, sentiment, risk scores, and call summary",
          "Knowledge Management – RAG-powered knowledge search using internal KB as grounding data",
          "Quality Management – AI scoring at 100% interaction coverage",
          "WFM – ML-enhanced volume forecasting and scheduling optimisation",
          "Reporting & Analytics – surface AI insights in operational dashboards",
          "RPA / Process Automation platform (UiPath, Automation Anywhere) for back-office automation",
          "RDA platform (integrated with agent desktop) for attended desktop automation during live calls",
          "Customer Journey Orchestration – provide pre-contact intent signals to routing and IVR AI",
          "Data platform / MLOps platform for model training, deployment, and monitoring"
        ],
        "glo": [
          "EU AI Act (2024): high-risk AI use in employment contexts requires conformity assessment, transparency, human oversight, and registration in EU database",
          "GDPR Article 22: restrictions on fully automated decision-making that significantly affects individuals – human oversight required for AI-driven routing or performance decisions",
          "AI model bias testing must account for linguistic and cultural variation across geographies",
          "Multi-language model coverage: ASR, NLU, NLP, and sentiment models must support all operating languages",
          "RAG knowledge bases must be localised – grounding data must reflect country-specific regulatory and product content",
          "Data sovereignty: training data used for ML models may be subject to data residency restrictions; no cross-border PII transfer for model training without legal basis",
          "Passive voice biometrics and deepfake detection: consent requirements vary significantly by jurisdiction – some countries prohibit passive biometric collection entirely",
          "Local regulatory approval may be required for AI-based HR or performance decisions (Germany works council rights, France CNIL guidance)",
          "LLM data processing agreements: ensure no PII is sent to external LLM APIs without appropriate DPA and transfer mechanism",
          "Transparency obligations: agents must be informed when AI is used to monitor or evaluate their performance",
          "Topic mining outputs may constitute employee profiling – data protection impact assessment (DPIA) required in EU",
          "Model performance monitoring must be maintained per language/region – model drift differs geographically",
          "Explainability requirements for AI-driven decisions affecting agent pay, routing, or employment status"
        ]
      }
    ]
  },
  {
    "label": "Technology & Infrastructure",
    "icon": "🖥️",
    "desc": "IAM, IT infrastructure, UCaaS, back-office integration, and technology testing & release.",
    "domains": [
      {
        "title": "Identity & Access Management (IAM)",
        "category": "Security Infrastructure | Access Control | Identity Governance",
        "usecase": "A contractor's temporary access is automatically deprovisioned at the end of their contract period without a manual IT request; the IAM system revokes all CCaaS, CRM, and VPN sessions simultaneously, ensuring no orphaned accounts remain.",
        "sub": [
          {
            "name": "Single Sign-On (SSO) with SAML 2.0 / OIDC integration across all platforms",
            "definition": "A configurable platform capability that provides single sign-on with saml 2.0 / oidc integration across all platforms within the contact centre environment. As part of Identity & Access Management (IAM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys single sign-on with saml 2.0 / oidc integration across all platforms as part of their Identity & Access Management (IAM) capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Multi-Factor Authentication (MFA) enforcement for all contact centre systems",
            "definition": "The end-to-end process and technology that governs multi-factor authentication enforcement for all contact centre systems within the contact centre environment. Effective implementation of this sub-capability within Identity & Access Management (IAM) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys multi-factor authentication enforcement for all contact centre systems as part of their Identity & Access Management (IAM) capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Role-based access control (RBAC): define access profiles for agent, team leader, QA analyst, manager, admin",
            "definition": "The organisational capability responsible for role-based access control, specifically: define access profiles for agent, team leader, QA analyst, manager, admin. This is a mandatory element of the Identity & Access Management (IAM) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements role-based access control to define access profiles for agent, team leader, qa analyst, manager, admin; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Just-in-time and least-privilege access provisioning",
            "definition": "A configurable platform capability that provides just-in-time and least-privilege access provisioning within the contact centre environment. As part of Identity & Access Management (IAM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys just-in-time and least-privilege access provisioning as part of their Identity & Access Management (IAM) capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Automated joiner-mover-leaver (JML) processes: provision, modify, and de-provision access on HR events",
            "definition": "The end-to-end process and technology that governs automated joiner-mover-leaver processes, specifically: provision, modify, and de-provision access on HR events. This capability is a key component of the Identity & Access Management (IAM) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements automated joiner-mover-leaver processes to provision, modify, and de-provision access on hr events; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Privileged Access Management (PAM) for system administrators",
            "definition": "The end-to-end process and technology that governs privileged access management for system administrators within the contact centre environment. This is a mandatory element of the Identity & Access Management (IAM) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys privileged access management for system administrators as part of their Identity & Access Management (IAM) capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Password management and self-service reset",
            "definition": "An integrated function within the CCaaS ecosystem that manages password management and self-service reset within the contact centre environment. This capability is a key component of the Identity & Access Management (IAM) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys password management and self-service reset as part of their Identity & Access Management (IAM) capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Identity governance and access certification (quarterly access reviews)",
            "definition": "The operational discipline and tooling that enables identity governance and access certification within the contact centre environment. As part of Identity & Access Management (IAM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys identity governance and access certification as part of their Identity & Access Management (IAM) capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Service account and API key management",
            "definition": "The end-to-end process and technology that governs service account and api key management within the contact centre environment. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys service account and api key management as part of their Identity & Access Management (IAM) capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Federated identity management across cloud and on-premise systems",
            "definition": "The organisational capability responsible for federated identity management across cloud and on-premise systems within the contact centre environment. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys federated identity management across cloud and on-premise systems as part of their Identity & Access Management (IAM) capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Agent identity verification for remote/home working (device trust, certificate-based auth)",
            "definition": "The organisational capability responsible for agent identity verification for remote/home working within the contact centre environment. As part of Identity & Access Management (IAM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys agent identity verification for remote/home working as part of their Identity & Access Management (IAM) capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Integration with HR system as authoritative source of user identity and roles",
            "definition": "The organisational capability responsible for integration with hr system as authoritative source of user identity and roles within the contact centre environment. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys integration with hr system as authoritative source of user identity and roles as part of their Identity & Access Management (IAM) capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Audit logging of all access events for compliance",
            "definition": "The operational discipline and tooling that enables audit logging of all access events for compliance within the contact centre environment. Effective implementation of this sub-capability within Identity & Access Management (IAM) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys audit logging of all access events for compliance as part of their Identity & Access Management (IAM) capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Conditional access policies: location, device, risk-based",
            "definition": "The end-to-end process and technology that governs conditional access policies, specifically: location, device, risk-based. As part of Identity & Access Management (IAM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements conditional access policies to location, device, risk-based; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          }
        ],
        "int": [
          "HR / HRIS – authoritative identity and role data triggers provisioning",
          "All CCaaS, CRM, WFM, LMS, QM, and productivity platforms – SSO federation",
          "SIEM / Security Operations – identity event logs",
          "PAM platform (CyberArk, BeyondTrust) for elevated privilege workflows",
          "Endpoint Management (Microsoft Intune, Jamf) – device trust for conditional access",
          "IT Service Management – access request and approval workflows",
          "Active Directory / LDAP / Azure AD / Okta as identity directory"
        ],
        "glo": [
          "GDPR / local data protection: access logs are personal data – retention and access controls required",
          "Local data sovereignty: identity stores may need to be regionally distributed",
          "MFA methods must account for device availability in all geographies (SMS OTP may not be reliable globally)",
          "Regulatory access controls: FCA, HIPAA, PCI DSS – all require specific access control and audit evidence",
          "Time zone aware access certification scheduling",
          "National security restrictions: some countries restrict cloud identity providers (China, Russia)",
          "Language support in self-service IAM portals",
          "Cross-border identity federation for agents who work across regions"
        ]
      },
      {
        "title": "IT Infrastructure, Networking & Endpoints",
        "category": "Technology Foundation | Cloud & On-Premise Infrastructure",
        "usecase": "During a major network outage, the IT infrastructure monitoring system auto-switches CCaaS traffic to a secondary cloud region within 90 seconds, with zero dropped calls, while the ITSM platform automatically creates and escalates the incident ticket.",
        "sub": [
          {
            "name": "Cloud hosting strategy: CCaaS primary on public cloud (AWS, Azure, GCP) with multi-region deployment",
            "definition": "The organisational capability responsible for cloud hosting strategy, specifically: CCaaS primary on public cloud (AWS, Azure, GCP) with multi-region deployment. As part of IT Infrastructure, Networking & Endpoints, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements cloud hosting strategy to ccaas primary on public cloud (aws, azure, gcp) with multi-region deployment; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Network architecture: MPLS / SD-WAN for site connectivity, internet breakout optimisation",
            "definition": "An integrated function within the CCaaS ecosystem that manages network architecture, specifically: MPLS / SD-WAN for site connectivity, internet breakout optimisation. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements network architecture to mpls / sd-wan for site connectivity, internet breakout optimisation; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Agent endpoint: approved hardware (headsets, PC/thin client), operating system standards",
            "definition": "A structured enterprise function that delivers agent endpoint, specifically: approved hardware (headsets, PC/thin client), operating system standards. As part of IT Infrastructure, Networking & Endpoints, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements agent endpoint to approved hardware (headsets, pc/thin client), operating system standards; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Virtual Desktop Infrastructure (VDI) or cloud-based desktop for work-from-home / remote agents",
            "definition": "The organisational capability responsible for virtual desktop infrastructure or cloud-based desktop for work-from-home / remote agents within the contact centre environment. This is a mandatory element of the IT Infrastructure, Networking & Endpoints capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys virtual desktop infrastructure or cloud-based desktop for work-from-home / remote agents as part of their IT Infrastructure, Networking & Endpoints capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Bandwidth and QoS management: VoIP prioritisation (DSCP tagging) on all site networks",
            "definition": "The organisational capability responsible for bandwidth and qos management, specifically: VoIP prioritisation (DSCP tagging) on all site networks. As part of IT Infrastructure, Networking & Endpoints, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements bandwidth and qos management to voip prioritisation (dscp tagging) on all site networks; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Firewall, proxy, and web filtering policies for agent desktop environments",
            "definition": "The enterprise-grade capability responsible for firewall, proxy, and web filtering policies for agent desktop environments within the contact centre environment. This capability is a key component of the IT Infrastructure, Networking & Endpoints domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys firewall, proxy, and web filtering policies for agent desktop environments as part of their IT Infrastructure, Networking & Endpoints capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "WAN optimisation and traffic management for cloud application performance",
            "definition": "The organisational capability responsible for wan optimisation and traffic management for cloud application performance within the contact centre environment. Effective implementation of this sub-capability within IT Infrastructure, Networking & Endpoints requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys wan optimisation and traffic management for cloud application performance as part of their IT Infrastructure, Networking & Endpoints capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "WebRTC and SIP media path optimisation for voice quality (packet loss, jitter, MOS score monitoring)",
            "definition": "A structured enterprise function that delivers webrtc and sip media path optimisation for voice quality within the contact centre environment. This is a mandatory element of the IT Infrastructure, Networking & Endpoints capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys webrtc and sip media path optimisation for voice quality as part of their IT Infrastructure, Networking & Endpoints capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Local survivability for PSTN failover at each site",
            "definition": "An integrated function within the CCaaS ecosystem that manages local survivability for pstn failover at each site within the contact centre environment. As part of IT Infrastructure, Networking & Endpoints, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys local survivability for pstn failover at each site as part of their IT Infrastructure, Networking & Endpoints capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "IT service desk: L1/L2 support for agent technical issues",
            "definition": "The systematic approach to delivering it service desk, specifically: L1/L2 support for agent technical issues. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements it service desk to l1/l2 support for agent technical issues; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Device management (MDM/UEM): patch management, application deployment, asset tracking",
            "definition": "The enterprise-grade capability responsible for device management, specifically: patch management, application deployment, asset tracking. Effective implementation of this sub-capability within IT Infrastructure, Networking & Endpoints requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements device management to patch management, application deployment, asset tracking; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Collaboration tools: video conferencing, internal messaging (Microsoft Teams, Zoom, Slack)",
            "definition": "The operational discipline and tooling that enables collaboration tools, specifically: video conferencing, internal messaging (Microsoft Teams, Zoom, Slack). This capability is a key component of the IT Infrastructure, Networking & Endpoints domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements collaboration tools to video conferencing, internal messaging (microsoft teams, zoom, slack); after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Print and digital signage management for site operations (wallboards)",
            "definition": "The enterprise-grade capability responsible for print and digital signage management for site operations within the contact centre environment. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys print and digital signage management for site operations as part of their IT Infrastructure, Networking & Endpoints capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Power and connectivity resilience: UPS, dual ISP, generator backup at each site",
            "definition": "The operational discipline and tooling that enables power and connectivity resilience, specifically: UPS, dual ISP, generator backup at each site. As part of IT Infrastructure, Networking & Endpoints, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements power and connectivity resilience to ups, dual isp, generator backup at each site; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "IT change management and release process for platform updates",
            "definition": "An integrated function within the CCaaS ecosystem that manages it change management and release process for platform updates within the contact centre environment. This capability is a key component of the IT Infrastructure, Networking & Endpoints domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys it change management and release process for platform updates as part of their IT Infrastructure, Networking & Endpoints capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "IT cost management: cloud spend governance and FinOps",
            "definition": "The operational discipline and tooling that enables it cost management, specifically: cloud spend governance and FinOps. Effective implementation of this sub-capability within IT Infrastructure, Networking & Endpoints requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements it cost management to cloud spend governance and finops; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          }
        ],
        "int": [
          "CCaaS vendor – network requirements, IP address whitelisting, connectivity specs",
          "ITSM platform (ServiceNow, Freshservice) – incident, change, problem management",
          "IAM / SSO – device and network context for conditional access",
          "Security platform (SIEM, EDR, CASB) – endpoint and network telemetry",
          "WFM / HR – headcount data for capacity planning of IT infrastructure",
          "Monitoring and observability platform (Datadog, Dynatrace, New Relic) – infrastructure health",
          "PSTN / carrier management – trunk management, DDI provisioning, number porting"
        ],
        "glo": [
          "Network latency to cloud PoPs must meet CCaaS vendor SLA per region",
          "Carrier and PSTN interconnect: separate agreements and providers per country",
          "Hardware import and customs regulations: approved equipment list may differ per country",
          "Local encryption standards: some countries mandate domestic encryption products (Russia GOST, China SM algorithms)",
          "Data sovereignty: cloud infrastructure in-country or in-region to meet data residency requirements",
          "National regulatory approvals for VoIP and cloud telephony vary (TRAI India, ANATEL Brazil, BTRC Bangladesh)",
          "Remote/work-from-home infrastructure: home broadband quality standards and endpoint security requirements",
          "International time zone monitoring for 24/7 NOC operations",
          "Local IT support model: in-country or regional IT support aligned to business hours per site",
          "IT asset disposal and data destruction compliance varies by country (WEEE directive EU)"
        ]
      },
      {
        "title": "UCaaS / Unified Communications Integration",
        "category": "Enterprise Collaboration | Expert Access | CCaaS-UCaaS Convergence",
        "usecase": "An agent handling a complex insurance claim needs specialist input from a claims assessor; the UCaaS integration surfaces the assessor's Teams presence status on the agent desktop, enabling a warm transfer to a video consultation without the customer being placed on hold.",
        "sub": [
          {
            "name": "Native CCaaS-to-UCaaS connector: certified integration between the contact centre platform and the enterprise UC platform (Microsoft Teams, Zoom Phone, Cisco Webex, RingCentral) without requiring agents or SMEs to switch applications",
            "definition": "The systematic approach to delivering native ccaas-to-ucaas connector, specifically: certified integration between the contact centre platform and the enterprise UC platform (Microsoft Teams, Zoom Phone, Cisco Webex, RingCentral) without requiring agents or SMEs to switch applications. This is a mandatory element of the UCaaS / Unified Communications Integration capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements native ccaas-to-ucaas connector to certified integration between the contact centre platform and the enterprise uc platform (microsoft; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Presence federation: CCR desktop displays live availability status of back-office SMEs (available, busy, in-meeting, offline) drawn from the UC platform, enabling informed transfer and consultation decisions",
            "definition": "The systematic approach to delivering presence federation, specifically: CCR desktop displays live availability status of back-office SMEs (available, busy, in-meeting, offline) drawn from the UC platform, enabling informed transfer and consultation decisions. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements presence federation to ccr desktop displays live availability status of back-office smes (available, busy, in-meeting, offl; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Expert directory search: CCRs can search the enterprise directory by name, skill, department, or location from within the agent desktop to identify the right SME without leaving the interaction",
            "definition": "The systematic approach to delivering expert directory search, specifically: CCRs can search the enterprise directory by name, skill, department, or location from within the agent desktop to identify the right SME without leaving the interaction. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements expert directory search to ccrs can search the enterprise directory by name, skill, department, or location from within the age; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Consultative transfer: CCR can place a customer on hold, consult with an SME via audio/chat, brief the SME on the customer's issue, and then perform a warm transfer – all from the CCP",
            "definition": "The organisational capability responsible for consultative transfer, specifically: CCR can place a customer on hold, consult with an SME via audio/chat, brief the SME on the customer's issue, and then perform a warm transfer – all from the CCP. This is a mandatory element of the UCaaS / Unified Communications Integration capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements consultative transfer to ccr can place a customer on hold, consult with an sme via audio/chat, brief the sme on the customer'; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Conference bridging: three-way call capability allowing CCR, customer, and SME to collaborate on resolution without a separate conferencing tool",
            "definition": "The enterprise-grade capability responsible for conference bridging, specifically: three-way call capability allowing CCR, customer, and SME to collaborate on resolution without a separate conferencing tool. This capability is a key component of the UCaaS / Unified Communications Integration domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements conference bridging to three-way call capability allowing ccr, customer, and sme to collaborate on resolution without a sep; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Instant messaging / chat escalation to SME: CCR can send a Teams/Zoom message to an SME directly from the agent desktop while on a live call for quick guidance without requiring a voice transfer",
            "definition": "A configurable platform capability that provides instant messaging / chat escalation to sme, specifically: CCR can send a Teams/Zoom message to an SME directly from the agent desktop while on a live call for quick guidance without requiring a voice transfer. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements instant messaging / chat escalation to sme to ccr can send a teams/zoom message to an sme directly from the agent desktop while on a live call for; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "SME-to-CCR call-back: SME can return a missed consultation request to the CCR directly, maintaining the customer context",
            "definition": "A structured enterprise function that delivers sme-to-ccr call-back, specifically: SME can return a missed consultation request to the CCR directly, maintaining the customer context. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements sme-to-ccr call-back to sme can return a missed consultation request to the ccr directly, maintaining the customer context; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Shared agent-SME interaction notes: capability for SME and CCR to co-author case notes during a collaborative interaction",
            "definition": "The enterprise-grade capability responsible for shared agent-sme interaction notes, specifically: capability for SME and CCR to co-author case notes during a collaborative interaction. As part of UCaaS / Unified Communications Integration, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements shared agent-sme interaction notes to capability for sme and ccr to co-author case notes during a collaborative interaction; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "UC platform presence and availability reporting: track SME response rates, consultation volume, and availability patterns for capacity planning",
            "definition": "The operational discipline and tooling that enables uc platform presence and availability reporting, specifically: track SME response rates, consultation volume, and availability patterns for capacity planning. As part of UCaaS / Unified Communications Integration, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements uc platform presence and availability reporting to track sme response rates, consultation volume, and availability patterns for capacity planning; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Emergency escalation routing: critical contact types (e.g. safeguarding, legal, clinical) can be directly routed to specialist UC groups via defined escalation paths",
            "definition": "The systematic approach to delivering emergency escalation routing, specifically: critical contact types (e.g. safeguarding, legal, clinical) can be directly routed to specialist UC groups via defined escalation paths. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements emergency escalation routing to critical contact types (e.g. safeguarding, legal, clinical) can be directly routed to specialist uc; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          }
        ],
        "int": [
          "CCaaS / Contact Centre Platform – primary integration point; UC connector embedded in agent desktop (CCP)",
          "Microsoft Teams / Zoom / Cisco Webex / RingCentral – UC platform APIs for presence, directory, calling, and messaging",
          "CRM – append SME consultation log and outcome to the customer case record",
          "IAM / SSO – unified identity across CCaaS and UC platform for seamless agent authentication",
          "WFM – SME availability and consultation demand data for capacity planning",
          "Reporting & Analytics – consultation frequency, transfer rates, resolution improvement from SME involvement",
          "HR / HRIS – SME profiles, skills, and team structure for directory accuracy"
        ],
        "glo": [
          "UC platform data residency: Microsoft Teams, Zoom, and Webex have regional data centres – ensure call and chat data for each country is stored in the appropriate region",
          "GDPR: calls and consultations routed through UCaaS platforms constitute personal data processing – Data Processing Agreements with UC vendors required",
          "E.164 number formatting: ensure consistent international number presentation across CCaaS and UCaaS for correct call routing",
          "Multi-country UC tenant strategy: some organisations use separate Microsoft 365 / Teams tenants per country for data sovereignty – CCaaS integration must support multi-tenant federation",
          "Language barriers in SME consultation: when CCR and SME speak different languages, define escalation protocols and real-time translation tooling",
          "Time zone coverage: SME availability in some geographies may not overlap with CCR working hours – define follow-the-sun SME pool or async consultation workflow",
          "Regulatory implications of recording consultant calls: SME calls that are part of a regulated interaction (e.g. financial advice, clinical guidance) may also need to be recorded under MiFID II or HIPAA",
          "Works council / union considerations: changes to CCR-SME interaction workflows may require consultation in some jurisdictions"
        ]
      },
      {
        "title": "Back-Office Integration & Process Management",
        "category": "Systems of Record | Agent Data Access | First Contact Resolution",
        "usecase": "An agent handling a credit card dispute can see the customer's payment history and outstanding balance pulled live from the core banking system without leaving the CCaaS desktop, reducing average hold time by 3.5 minutes per call.",
        "sub": [
          {
            "name": "Back-office system connectivity: secure, real-time API access from the agent desktop to all systems of record that agents need to resolve contacts (billing, ERP, order management, policy admin, account management, CMS)",
            "definition": "The organisational capability responsible for back-office system connectivity, specifically: secure, real-time API access from the agent desktop to all systems of record that agents need to resolve contacts (billing, ERP, order management, policy admin, account management, CMS). This capability is a key component of the Back-Office Integration & Process Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements back-office system connectivity to secure, real-time api access from the agent desktop to all systems of record that agents need to res; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Unified agent desktop data aggregation: present data from multiple back-office systems in a single agent screen view – eliminating the need to toggle between multiple applications during a live interaction",
            "definition": "An integrated function within the CCaaS ecosystem that manages unified agent desktop data aggregation, specifically: present data from multiple back-office systems in a single agent screen view – eliminating the need to toggle between multiple applications during a live interaction. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements unified agent desktop data aggregation to present data from multiple back-office systems in a single agent screen view – eliminating the need; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Single Customer View (SCV) panel in agent desktop: pull account status, balance, contract, recent orders, open cases, and preferences from all relevant back-office systems into one coherent panel",
            "definition": "The end-to-end process and technology that governs single customer view panel in agent desktop, specifically: pull account status, balance, contract, recent orders, open cases, and preferences from all relevant back-office systems into one coherent panel. Effective implementation of this sub-capability within Back-Office Integration & Process Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements single customer view panel in agent desktop to pull account status, balance, contract, recent orders, open cases, and preferences from all relevant; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Real-time transaction execution from agent desktop: enable agents to initiate back-office actions (place orders, process refunds, update account, apply credits, schedule engineers) without leaving the CCP",
            "definition": "The end-to-end process and technology that governs real-time transaction execution from agent desktop, specifically: enable agents to initiate back-office actions (place orders, process refunds, update account, apply credits, schedule engineers) without leaving the CCP. This is a mandatory element of the Back-Office Integration & Process Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements real-time transaction execution from agent desktop to enable agents to initiate back-office actions (place orders, process refunds, update account, apply; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Back-office workflow orchestration: manage multi-step, multi-system processes triggered during or after customer interactions (e.g. new contract creation requires updates to billing, CRM, provisioning, and fulfilment systems)",
            "definition": "The systematic approach to delivering back-office workflow orchestration, specifically: manage multi-step, multi-system processes triggered during or after customer interactions (e.g. new contract creation requires updates to billing, CRM, provisioning, and fulfilment systems). Effective implementation of this sub-capability within Back-Office Integration & Process Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements back-office workflow orchestration to manage multi-step, multi-system processes triggered during or after customer interactions (e.g. new; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Process documentation and desktop guidance: step-by-step process guides embedded in agent desktop for complex back-office procedures, reducing training dependency and handling time",
            "definition": "The operational discipline and tooling that enables process documentation and desktop guidance, specifically: step-by-step process guides embedded in agent desktop for complex back-office procedures, reducing training dependency and handling time. This capability is a key component of the Back-Office Integration & Process Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements process documentation and desktop guidance to step-by-step process guides embedded in agent desktop for complex back-office procedures, reducing t; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Back-office case handoff: structured mechanism for passing unresolved work from the contact centre to back-office teams with full context, priority, and SLA tracking",
            "definition": "The organisational capability responsible for back-office case handoff, specifically: structured mechanism for passing unresolved work from the contact centre to back-office teams with full context, priority, and SLA tracking. As part of Back-Office Integration & Process Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements back-office case handoff to structured mechanism for passing unresolved work from the contact centre to back-office teams with f; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Back-office SLA visibility: agent desktop shows back-office case status and ETA so agents can set accurate expectations with customers",
            "definition": "The organisational capability responsible for back-office sla visibility, specifically: agent desktop shows back-office case status and ETA so agents can set accurate expectations with customers. As part of Back-Office Integration & Process Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements back-office sla visibility to agent desktop shows back-office case status and eta so agents can set accurate expectations with cus; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "API gateway and middleware layer: centralised integration layer managing authentication, rate limiting, data transformation, and error handling for all back-office system connections",
            "definition": "The systematic approach to delivering api gateway and middleware layer, specifically: centralised integration layer managing authentication, rate limiting, data transformation, and error handling for all back-office system connections. As part of Back-Office Integration & Process Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements api gateway and middleware layer to centralised integration layer managing authentication, rate limiting, data transformation, and error; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Legacy system integration: screen-scraping, RDA, or API adapters for back-office systems that do not have native APIs – ensuring agents can access data in legacy platforms without dual-keying",
            "definition": "An integrated function within the CCaaS ecosystem that manages legacy system integration, specifically: screen-scraping, RDA, or API adapters for back-office systems that do not have native APIs – ensuring agents can access data in legacy platforms without dual-keying. As part of Back-Office Integration & Process Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements legacy system integration to screen-scraping, rda, or api adapters for back-office systems that do not have native apis – ensurin; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Data consistency and synchronisation: ensure changes made by agents are immediately reflected across all systems that hold the same data (prevent stale data in the agent view)",
            "definition": "A structured enterprise function that delivers data consistency and synchronisation, specifically: ensure changes made by agents are immediately reflected across all systems that hold the same data (prevent stale data in the agent view). Effective implementation of this sub-capability within Back-Office Integration & Process Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements data consistency and synchronisation to ensure changes made by agents are immediately reflected across all systems that hold the same data (; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Back-office change impact management: process and system changes in back-office systems must be communicated to the contact centre and reflected in agent desktop guides and system access",
            "definition": "The end-to-end process and technology that governs back-office change impact management, specifically: process and system changes in back-office systems must be communicated to the contact centre and reflected in agent desktop guides and system access. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements back-office change impact management to process and system changes in back-office systems must be communicated to the contact centre and ref; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          }
        ],
        "int": [
          "CCaaS / CCP – back-office data panels and action capabilities embedded directly in agent desktop",
          "CRM – back-office data enriches the customer case and interaction record",
          "Billing / ERP (SAP, Oracle, Sage) – account data, invoice history, payment processing",
          "Order Management System (OMS) – order status, fulfilment, returns, and amendments",
          "Policy Administration System (insurance, utilities, telecoms) – contract and policy data",
          "Provisioning / Service Delivery System – service activation, change, and cancellation",
          "AI / ML (RDA) – robotic desktop automation executes multi-system back-office updates automatically during live interactions",
          "Knowledge Management – process guides aligned to back-office system procedures",
          "Reporting & Analytics – back-office handoff volumes, FCR rates, back-office case resolution times",
          "API Gateway / Integration Platform (MuleSoft, Boomi, Azure API Management) – integration middleware layer"
        ],
        "glo": [
          "Back-office systems may be regionally siloed: different billing platforms in different countries require separate integration builds per region",
          "Data residency: back-office data pulled into the contact centre may carry cross-border transfer implications if customer data is held in-country",
          "Latency: real-time API calls to back-office systems must meet sub-second response thresholds for agent desktop usability – regional API hosting or caching may be required",
          "Legacy system prevalence: older geographies may have older back-office platforms with limited API capability, requiring more complex integration approaches (RDA, screen-scraping)",
          "Regulatory permission to transact: not all geographies permit certain back-office actions via a contact centre agent (e.g. financial amendments may require branch or authenticated digital channel only)",
          "Multi-currency and multi-entity back-office: agents handling customers across different billing entities or currencies must see correct local context",
          "Language and format localisation: back-office data pulled into agent desktop (dates, currency, addresses) must be formatted for local context, not raw system format",
          "GDPR / local DPA: aggregating back-office data into a single agent view constitutes data processing – purpose limitation and access logging required"
        ]
      },
      {
        "title": "Technology Testing, Release & Configuration Management",
        "category": "Platform Integrity | Change Control | Quality Assurance for Technology",
        "usecase": "Before a major IVR self-service update goes live, the testing and release management platform runs 1,400 automated regression tests across voice, chat, and email channels in a staging environment; 3 defects are caught and resolved before the change reaches production.",
        "sub": [
          {
            "name": "Test environment strategy: provision and maintain dedicated non-production environments (development, system integration test (SIT), user acceptance test (UAT), pre-production / staging) that mirror the production CCaaS ecosystem",
            "definition": "A configurable platform capability that provides test environment strategy, specifically: provision and maintain dedicated non-production environments (development, system integration test (SIT), user acceptance test (UAT), pre-production / staging) that mirror the production CCaaS ecosystem. As part of Technology Testing, Release & Configuration Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements test environment strategy to provision and maintain dedicated non-production environments (development, system integration test (; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Test strategy and plan: define the types of testing required for each change type (functional, regression, integration, performance, security, accessibility, UAT) with documented pass/fail criteria",
            "definition": "The operational discipline and tooling that enables test strategy and plan, specifically: define the types of testing required for each change type (functional, regression, integration, performance, security, accessibility, UAT) with documented pass/fail criteria. As part of Technology Testing, Release & Configuration Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements test strategy and plan to define the types of testing required for each change type (functional, regression, integration, perf; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Regression test suite: curated, automated regression test scripts covering critical contact centre workflows – IVR routing, call handling, screen-pop, recording trigger, WFM feed, CRM case creation – executed on every release",
            "definition": "An integrated function within the CCaaS ecosystem that manages regression test suite, specifically: curated, automated regression test scripts covering critical contact centre workflows – IVR routing, call handling, screen-pop, recording trigger, WFM feed, CRM case creation – executed on every release. This capability is a key component of the Technology Testing, Release & Configuration Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements regression test suite to curated, automated regression test scripts covering critical contact centre workflows – ivr routing; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "User Acceptance Testing (UAT): structured business-led testing process with CCR, supervisor, WFM analyst, and QA evaluator test scripts; formal sign-off gate before production deployment",
            "definition": "A structured enterprise function that delivers user acceptance testing, specifically: structured business-led testing process with CCR, supervisor, WFM analyst, and QA evaluator test scripts; formal sign-off gate before production deployment. This is a mandatory element of the Technology Testing, Release & Configuration Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements user acceptance testing to structured business-led testing process with ccr, supervisor, wfm analyst, and qa evaluator test scr; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Integration testing: validate end-to-end data flows between all integrated systems (CCaaS → CRM → WFM → Recording → QM) after any change to a connected platform",
            "definition": "The end-to-end process and technology that governs integration testing, specifically: validate end-to-end data flows between all integrated systems (CCaaS → CRM → WFM → Recording → QM) after any change to a connected platform. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements integration testing to validate end-to-end data flows between all integrated systems (ccaas → crm → wfm → recording → qm) a; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Performance and load testing: simulate peak contact volumes to validate that platform configurations and infrastructure can sustain expected load without degradation",
            "definition": "The end-to-end process and technology that governs performance and load testing, specifically: simulate peak contact volumes to validate that platform configurations and infrastructure can sustain expected load without degradation. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements performance and load testing to simulate peak contact volumes to validate that platform configurations and infrastructure can sustai; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Security testing: penetration testing, vulnerability scanning, and OWASP compliance testing for all customer-facing and agent-facing contact centre technology",
            "definition": "The end-to-end process and technology that governs security testing, specifically: penetration testing, vulnerability scanning, and OWASP compliance testing for all customer-facing and agent-facing contact centre technology. Effective implementation of this sub-capability within Technology Testing, Release & Configuration Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements security testing to penetration testing, vulnerability scanning, and owasp compliance testing for all customer-facing an; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Configuration management database (CMDB): authoritative record of all configuration items (CIs) across the CCaaS technology estate – routing rules, IVR flows, queue configurations, user accounts, integration endpoints",
            "definition": "The operational discipline and tooling that enables configuration management database, specifically: authoritative record of all configuration items (CIs) across the CCaaS technology estate – routing rules, IVR flows, queue configurations, user accounts, integration endpoints. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements configuration management database to authoritative record of all configuration items (cis) across the ccaas technology estate – routing r; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Change advisory board (CAB): formal change governance process for classifying, reviewing, approving, and scheduling changes to production contact centre systems",
            "definition": "The end-to-end process and technology that governs change advisory board, specifically: formal change governance process for classifying, reviewing, approving, and scheduling changes to production contact centre systems. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements change advisory board to formal change governance process for classifying, reviewing, approving, and scheduling changes to pr; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Release management: coordinated scheduling, sequencing, and communication of releases across interdependent contact centre platforms – preventing conflicting deployments",
            "definition": "The end-to-end process and technology that governs release management, specifically: coordinated scheduling, sequencing, and communication of releases across interdependent contact centre platforms – preventing conflicting deployments. This is a mandatory element of the Technology Testing, Release & Configuration Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements release management to coordinated scheduling, sequencing, and communication of releases across interdependent contact cent; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Version control for configuration artefacts: IVR flow designs, routing rule configurations, bot dialogue scripts, and integration mappings stored in version control (Git) with change history",
            "definition": "The operational discipline and tooling that enables version control for configuration artefacts, specifically: IVR flow designs, routing rule configurations, bot dialogue scripts, and integration mappings stored in version control (Git) with change history. As part of Technology Testing, Release & Configuration Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements version control for configuration artefacts to ivr flow designs, routing rule configurations, bot dialogue scripts, and integration mappings stored; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Rollback capability: every production release must have a documented and tested rollback procedure executable within a defined time window",
            "definition": "A configurable platform capability that provides rollback capability, specifically: every production release must have a documented and tested rollback procedure executable within a defined time window. Effective implementation of this sub-capability within Technology Testing, Release & Configuration Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements rollback capability to every production release must have a documented and tested rollback procedure executable within a de; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Post-deployment validation: defined set of smoke tests and monitoring checks executed immediately after each production release to confirm successful deployment",
            "definition": "The end-to-end process and technology that governs post-deployment validation, specifically: defined set of smoke tests and monitoring checks executed immediately after each production release to confirm successful deployment. Effective implementation of this sub-capability within Technology Testing, Release & Configuration Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements post-deployment validation to defined set of smoke tests and monitoring checks executed immediately after each production release; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Environment configuration drift detection: automated comparison of non-production vs. production configurations to detect unauthorised or undocumented changes",
            "definition": "An integrated function within the CCaaS ecosystem that manages environment configuration drift detection, specifically: automated comparison of non-production vs. production configurations to detect unauthorised or undocumented changes. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements environment configuration drift detection to automated comparison of non-production vs. production configurations to detect unauthorised or undoc; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Knowledge management for the tech estate: technical runbook library documenting configuration, known issues, troubleshooting, and operational procedures for all platforms",
            "definition": "The end-to-end process and technology that governs knowledge management for the tech estate, specifically: technical runbook library documenting configuration, known issues, troubleshooting, and operational procedures for all platforms. Within the Technology & Infrastructure pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements knowledge management for the tech estate to technical runbook library documenting configuration, known issues, troubleshooting, and operational; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          }
        ],
        "int": [
          "All 37 capability domain platforms – every system in the ecosystem is subject to this domain's change control and testing governance",
          "CCaaS platform – test environment provisioning, configuration export/import for version control",
          "ITSM (ServiceNow, Jira Service Management) – change request workflow, CAB approval, incident linkage for failed releases",
          "Test management tools (TestRail, Jira Xray, Zephyr Scale) – test case library, execution tracking, defect management",
          "CI/CD pipeline (Jenkins, GitHub Actions, Azure DevOps) – automated regression test execution on code or configuration commits",
          "Monitoring & observability (Datadog, Dynatrace) – post-deployment monitoring and alerting as part of release validation",
          "CMDB (ServiceNow CMDB) – configuration item management and dependency mapping",
          "Security testing tools (Burp Suite, Qualys, Veracode) – automated vulnerability scanning integrated into release pipeline",
          "Collaboration platforms (Confluence, SharePoint) – technical runbook and documentation library"
        ],
        "glo": [
          "Regulatory change windows: some jurisdictions and regulated clients impose constraints on when production changes can be deployed (e.g. financial trading hours blackouts, regulatory freeze periods)",
          "Multi-region release coordination: a change deployed to a global CCaaS platform affects all geographies simultaneously – release windows must account for business hours across all active time zones",
          "Localised UAT: UAT must include country-specific test scenarios for local IVR flows, language-specific routing, local regulatory scripts, and in-country integrations",
          "Data residency in test environments: test environments may not use real customer or employee personal data without appropriate safeguards – anonymised or synthetic test data required to comply with GDPR and local equivalents",
          "Regulatory approval for material platform changes: some regulators (FCA in UK, OCC in USA for banks) require notification of material system changes before or after implementation",
          "Carrier and PSTN number testing: testing outbound calling and number presentation in non-production environments must comply with local telecom regulations and avoid live customer dial-out",
          "Security testing in regulated environments: penetration testing on systems that hold personal data must be governed under a formal engagement letter and DPIA – especially relevant in EU/UK",
          "Works council and union notification: in Germany, France, and other co-determination jurisdictions, significant system changes must be notified to or approved by the works council before UAT or go-live",
          "Audit evidence: CAB approval records, test completion evidence, and post-deployment validation results are required audit artefacts for ISO 27001, SOC 2, FCA, and PCI DSS assessments",
          "Vendor-managed release coordination: CCaaS vendors (Genesys, AWS Connect, Cisco, Nice) manage their own platform release cadences globally – the organisation must have a process to assess the impact of vendor-initiated changes on their configurations"
        ]
      }
    ]
  },
  {
    "label": "Data & Compliance",
    "icon": "🔒",
    "desc": "Security, risk management, MDM, data platform engineering, CIAM, and regulatory compliance.",
    "domains": [
      {
        "title": "Security, Compliance & Risk Management",
        "category": "Information Security | Regulatory Compliance | Risk Governance",
        "usecase": "A PCI DSS audit requires evidence that card payment data was never stored in call recordings; the platform's automatic pause-and-resume recording feature — triggered by DTMF tone detection — generates a compliance report showing 100% of card capture events were redacted.",
        "sub": [
          {
            "name": "Information security policy framework: ISO 27001 / NIST CSF / SOC 2 alignment",
            "definition": "The systematic approach to delivering information security policy framework, specifically: ISO 27001 / NIST CSF / SOC 2 alignment. This is a mandatory element of the Security, Compliance & Risk Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements information security policy framework to iso 27001 / nist csf / soc 2 alignment; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Data Loss Prevention (DLP): prevent PII, payment data, and confidential data exfiltration from agent desktops",
            "definition": "The systematic approach to delivering data loss prevention, specifically: prevent PII, payment data, and confidential data exfiltration from agent desktops. As part of Security, Compliance & Risk Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements data loss prevention to prevent pii, payment data, and confidential data exfiltration from agent desktops; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Endpoint Detection & Response (EDR): anti-malware, threat detection on all agent devices",
            "definition": "An integrated function within the CCaaS ecosystem that manages endpoint detection & response, specifically: anti-malware, threat detection on all agent devices. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements endpoint detection & response to anti-malware, threat detection on all agent devices; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Security Information & Event Management (SIEM): centralised log aggregation, threat detection",
            "definition": "The enterprise-grade capability responsible for security information & event management, specifically: centralised log aggregation, threat detection. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements security information & event management to centralised log aggregation, threat detection; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Vulnerability management: regular scanning, patch prioritisation, penetration testing",
            "definition": "A configurable platform capability that provides vulnerability management, specifically: regular scanning, patch prioritisation, penetration testing. As part of Security, Compliance & Risk Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements vulnerability management to regular scanning, patch prioritisation, penetration testing; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Cloud Security Posture Management (CSPM): continuous cloud configuration compliance monitoring",
            "definition": "The systematic approach to delivering cloud security posture management, specifically: continuous cloud configuration compliance monitoring. As part of Security, Compliance & Risk Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements cloud security posture management to continuous cloud configuration compliance monitoring; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Network segmentation and Zero Trust architecture for agent environments",
            "definition": "The systematic approach to delivering network segmentation and zero trust architecture for agent environments within the contact centre environment. As part of Security, Compliance & Risk Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys network segmentation and zero trust architecture for agent environments as part of their Security, Compliance & Risk Management capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "PCI DSS compliance programme: cardholder data environment scoping, control implementation, QSA assessment",
            "definition": "The organisational capability responsible for pci dss compliance programme, specifically: cardholder data environment scoping, control implementation, QSA assessment. As part of Security, Compliance & Risk Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements pci dss compliance programme to cardholder data environment scoping, control implementation, qsa assessment; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "GDPR / Data Protection programme: ROPA, DPIA process, DSR management, breach notification",
            "definition": "A structured enterprise function that delivers gdpr / data protection programme, specifically: ROPA, DPIA process, DSR management, breach notification. This capability is a key component of the Security, Compliance & Risk Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements gdpr / data protection programme to ropa, dpia process, dsr management, breach notification; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Sector-specific compliance: HIPAA (healthcare), FCA/MiFID II (financial services), TCPA (USA telemarketing)",
            "definition": "A structured enterprise function that delivers sector-specific compliance, specifically: HIPAA (healthcare), FCA/MiFID II (financial services), TCPA (USA telemarketing). Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements sector-specific compliance to hipaa (healthcare), fca/mifid ii (financial services), tcpa (usa telemarketing); after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Vendor and third-party risk management programme",
            "definition": "The end-to-end process and technology that governs vendor and third-party risk management programme within the contact centre environment. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys vendor and third-party risk management programme as part of their Security, Compliance & Risk Management capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Security awareness training for all staff (phishing simulation, data handling)",
            "definition": "An integrated function within the CCaaS ecosystem that manages security awareness training for all staff within the contact centre environment. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys security awareness training for all staff as part of their Security, Compliance & Risk Management capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Incident response plan: detection, containment, eradication, recovery, post-incident review",
            "definition": "The organisational capability responsible for incident response plan, specifically: detection, containment, eradication, recovery, post-incident review. Effective implementation of this sub-capability within Security, Compliance & Risk Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements incident response plan to detection, containment, eradication, recovery, post-incident review; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Business continuity and disaster recovery planning (BCP/DR)",
            "definition": "The organisational capability responsible for business continuity and disaster recovery planning within the contact centre environment. This is a mandatory element of the Security, Compliance & Risk Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys business continuity and disaster recovery planning as part of their Security, Compliance & Risk Management capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Data classification framework: public, internal, confidential, restricted",
            "definition": "The operational discipline and tooling that enables data classification framework, specifically: public, internal, confidential, restricted. As part of Security, Compliance & Risk Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements data classification framework to public, internal, confidential, restricted; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Compliance calendar and control testing programme",
            "definition": "The enterprise-grade capability responsible for compliance calendar and control testing programme within the contact centre environment. This capability is a key component of the Security, Compliance & Risk Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys compliance calendar and control testing programme as part of their Security, Compliance & Risk Management capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Regulatory liaison and audit management",
            "definition": "A configurable platform capability that provides regulatory liaison and audit management within the contact centre environment. As part of Security, Compliance & Risk Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys regulatory liaison and audit management as part of their Security, Compliance & Risk Management capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "IAM / PAM – identity and access data for security monitoring",
          "CCaaS / CRM / all platforms – log shipping to SIEM",
          "Interaction Recording – PII redaction and DLP controls",
          "IT Infrastructure – endpoint and network telemetry",
          "HR – disciplinary processes linked to security incidents",
          "Finance / Legal – regulatory fine risk and insurance management",
          "Vendor Management – third-party risk assessment workflow",
          "GRC platform (ServiceNow GRC, RSA Archer, OneTrust) – policy, risk, and control register"
        ],
        "glo": [
          "Data protection laws: GDPR (EU/UK), CCPA/CPRA (California), PDPA (Singapore/Thailand), LGPD (Brazil), PIPL (China)",
          "Breach notification timelines differ: 72 hours GDPR, 30-72 hours in US state laws, varied globally",
          "PCI DSS is global but certification scope varies by payment channel and volume",
          "Sector-specific regulations vary significantly by country and must be mapped per operating entity",
          "Cross-border data transfer: SCCs, BCRs, adequacy decisions, or localisation required",
          "Data residency mandates: Russia, China, India, Indonesia, Saudi Arabia all have local storage requirements",
          "Country-specific cybersecurity laws: China Cybersecurity Law, US CMMC, German KRITIS",
          "Export control: security tools and encryption products may require export licences (EAR, ITAR in USA)",
          "Local Data Protection Authority engagement: registration, audit readiness, national DPA contact",
          "National security law obligations in some jurisdictions may require data disclosure to local authorities"
        ]
      },
      {
        "title": "Master Data Management (MDM) & Data Fabric",
        "category": "Data Architecture | Enterprise Data Governance | Customer Data Integrity",
        "usecase": "A merger brings two customer databases together with conflicting account IDs; the MDM platform runs a matching and deduplication process, creating a golden record for each customer that is then propagated to the CCaaS, CRM, and billing systems simultaneously.",
        "sub": [
          {
            "name": "Master Data Management (MDM) platform: create, maintain, and govern a single authoritative 'golden record' for each customer, agent, and product entity across all regional CRM, billing, and operational systems",
            "definition": "A configurable platform capability that provides master data management platform, specifically: create, maintain, and govern a single authoritative 'golden record' for each customer, agent, and product entity across all regional CRM, billing, and operational systems. This capability is a key component of the Master Data Management (MDM) & Data Fabric domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements master data management platform to create, maintain, and govern a single authoritative 'golden record' for each customer, agent, and pr; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Customer identity resolution: probabilistic and deterministic matching to deduplicate customer records created across different regional instances, channels, or legacy systems",
            "definition": "A configurable platform capability that provides customer identity resolution, specifically: probabilistic and deterministic matching to deduplicate customer records created across different regional instances, channels, or legacy systems. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements customer identity resolution to probabilistic and deterministic matching to deduplicate customer records created across different re; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Single Universal Customer Profile: unified 360-degree customer view that aggregates interaction history, account data, preferences, consent status, and journey context regardless of which regional system originated the data",
            "definition": "The operational discipline and tooling that enables single universal customer profile, specifically: unified 360-degree customer view that aggregates interaction history, account data, preferences, consent status, and journey context regardless of which regional system originated the data. As part of Master Data Management (MDM) & Data Fabric, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements single universal customer profile to unified 360-degree customer view that aggregates interaction history, account data, preferences, con; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Data Fabric architecture: a unified data layer that connects disparate regional data stores (CRM instances, billing systems, data warehouses) through a consistent metadata layer, enabling cross-system queries without full data consolidation",
            "definition": "The end-to-end process and technology that governs data fabric architecture, specifically: a unified data layer that connects disparate regional data stores (CRM instances, billing systems, data warehouses) through a consistent metadata layer, enabling cross-system queries without full data consolidation. This capability is a key component of the Master Data Management (MDM) & Data Fabric domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements data fabric architecture to a unified data layer that connects disparate regional data stores (crm instances, billing systems, d; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Data quality management: automated profiling, cleansing, standardisation, and enrichment of customer master data (address validation, email deliverability, phone number formatting)",
            "definition": "The operational discipline and tooling that enables data quality management, specifically: automated profiling, cleansing, standardisation, and enrichment of customer master data (address validation, email deliverability, phone number formatting). Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements data quality management to automated profiling, cleansing, standardisation, and enrichment of customer master data (address val; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Golden record confidence scoring: metadata indicating the reliability and completeness of each field in the master customer record",
            "definition": "The operational discipline and tooling that enables golden record confidence scoring, specifically: metadata indicating the reliability and completeness of each field in the master customer record. Effective implementation of this sub-capability within Master Data Management (MDM) & Data Fabric requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements golden record confidence scoring to metadata indicating the reliability and completeness of each field in the master customer record; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Cross-regional data synchronisation: controlled propagation of master data updates across regional instances with conflict resolution rules",
            "definition": "The systematic approach to delivering cross-regional data synchronisation, specifically: controlled propagation of master data updates across regional instances with conflict resolution rules. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements cross-regional data synchronisation to controlled propagation of master data updates across regional instances with conflict resolution rul; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Data lineage and provenance tracking: audit trail showing where each data attribute originated, how it was transformed, and which systems consume it",
            "definition": "A structured enterprise function that delivers data lineage and provenance tracking, specifically: audit trail showing where each data attribute originated, how it was transformed, and which systems consume it. This is a mandatory element of the Master Data Management (MDM) & Data Fabric capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements data lineage and provenance tracking to audit trail showing where each data attribute originated, how it was transformed, and which systems; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Reference data management: centralised management of shared lookup values (country codes, product catalogues, disposition codes, skill taxonomies) used consistently across all platforms",
            "definition": "The enterprise-grade capability responsible for reference data management, specifically: centralised management of shared lookup values (country codes, product catalogues, disposition codes, skill taxonomies) used consistently across all platforms. As part of Master Data Management (MDM) & Data Fabric, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements reference data management to centralised management of shared lookup values (country codes, product catalogues, disposition codes; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Data stewardship workflow: business data steward tools for reviewing, approving, and resolving data quality issues and merge/split decisions",
            "definition": "A configurable platform capability that provides data stewardship workflow, specifically: business data steward tools for reviewing, approving, and resolving data quality issues and merge/split decisions. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements data stewardship workflow to business data steward tools for reviewing, approving, and resolving data quality issues and merge/sp; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Entity relationship management: model the links between customer, household, account, case, and agent entities across the enterprise data model",
            "definition": "The systematic approach to delivering entity relationship management, specifically: model the links between customer, household, account, case, and agent entities across the enterprise data model. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements entity relationship management to model the links between customer, household, account, case, and agent entities across the enterprise; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "API-based data access layer: publish clean, governed master data via APIs to consuming systems (CCaaS, CRM, WFM, Analytics) rather than point-to-point integrations",
            "definition": "The enterprise-grade capability responsible for api-based data access layer, specifically: publish clean, governed master data via APIs to consuming systems (CCaaS, CRM, WFM, Analytics) rather than point-to-point integrations. This is a mandatory element of the Master Data Management (MDM) & Data Fabric capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements api-based data access layer to publish clean, governed master data via apis to consuming systems (ccaas, crm, wfm, analytics) rathe; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          }
        ],
        "int": [
          "CRM (multi-regional instances) – primary consumer of golden customer record; MDM resolves duplicates across instances",
          "CCaaS / Contact Centre Platform – serve verified customer identity and account data for screen-pop and routing enrichment",
          "Billing / ERP / order management – source systems that contribute to customer master record",
          "Customer Identity & Access Management (CIAM) – align authenticated digital identity with MDM golden record",
          "Customer Data Platform (CDP) – MDM feeds clean identity spine into CDP for analytics and segmentation",
          "Analytics & BI platform – governed master data as the trusted foundation for all reporting",
          "Data governance platform (Collibra, Alation, Microsoft Purview) – data catalogue, lineage, and stewardship tooling",
          "AI / ML platform – high-quality master data as training and inference input for customer-facing AI models",
          "Consent management platform – propagate consent flags from master record to all consuming systems"
        ],
        "glo": [
          "GDPR data minimisation and purpose limitation: MDM must enforce that only necessary customer attributes are replicated across regions",
          "Data residency: the MDM golden record (or its regional replica) must reside in-country where mandated (Russia, China, India, Indonesia, Saudi Arabia) – multi-node MDM topology required",
          "Right to erasure (GDPR Article 17): MDM must propagate deletion and anonymisation requests across all regional systems that hold a copy of the golden record",
          "Data portability (GDPR Article 20): MDM must be capable of extracting and providing a machine-readable copy of a customer's full data profile on request",
          "Cross-border data transfer: centralised MDM processing must comply with SCCs, BCRs, or adequacy decisions for any cross-border personal data flow",
          "Local data protection laws may impose different requirements on what constitutes a 'customer record' and how long it must be retained – reference data retention schedules must be country-specific",
          "Multi-script and multi-byte character set support: customer names and addresses in Chinese, Arabic, Devanagari, Cyrillic must be stored and matched correctly without transliteration errors",
          "Regulatory identity requirements differ: national ID, tax ID, passport number formats vary – reference data model must accommodate country-specific identity attributes",
          "Data localisation for analytics: some jurisdictions prohibit using locally collected customer data in centrally hosted analytics platforms without specific legal basis"
        ]
      },
      {
        "title": "Data Platform & Analytics Engineering",
        "category": "Data Infrastructure | Data Engineering | Enterprise Data Foundation",
        "usecase": "The analytics engineering team builds a unified data pipeline that ingests CCaaS interaction events, WFM schedules, CRM outcomes, and QA scores into a Snowflake data warehouse; a single dbt model joins these sources to produce the daily operations report, replacing 7 manual extracts.",
        "sub": [
          {
            "name": "Data warehouse / lakehouse architecture: centralised data platform (Snowflake, Databricks, Google BigQuery, Azure Synapse) serving as the single source of truth for all contact centre operational, customer, and workforce data",
            "definition": "A structured enterprise function that delivers data warehouse / lakehouse architecture, specifically: centralised data platform (Snowflake, Databricks, Google BigQuery, Azure Synapse) serving as the single source of truth for all contact centre operational, customer, and workforce data. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements data warehouse / lakehouse architecture to centralised data platform (snowflake, databricks, google bigquery, azure synapse) serving as the sin; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Data ingestion pipelines: real-time (streaming) and batch data ingestion from all source systems – CCaaS, CRM, WFM, QM, HR, recording, IVR, customer journey – into the central data platform",
            "definition": "The enterprise-grade capability responsible for data ingestion pipelines, specifically: real-time (streaming) and batch data ingestion from all source systems – CCaaS, CRM, WFM, QM, HR, recording, IVR, customer journey – into the central data platform. This capability is a key component of the Data Platform & Analytics Engineering domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements data ingestion pipelines to real-time (streaming) and batch data ingestion from all source systems – ccaas, crm, wfm, qm, hr, re; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Event streaming infrastructure: real-time event bus (Apache Kafka, AWS Kinesis, Azure Event Hubs) for sub-second data availability from high-volume sources such as CCaaS and IVR",
            "definition": "The operational discipline and tooling that enables event streaming infrastructure, specifically: real-time event bus (Apache Kafka, AWS Kinesis, Azure Event Hubs) for sub-second data availability from high-volume sources such as CCaaS and IVR. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements event streaming infrastructure to real-time event bus (apache kafka, aws kinesis, azure event hubs) for sub-second data availability f; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Data modelling: dimensional modelling (star/snowflake schema) for contact centre operational data; entity resolution and relationship modelling across customer, agent, interaction, and case",
            "definition": "An integrated function within the CCaaS ecosystem that manages data modelling, specifically: dimensional modelling (star/snowflake schema) for contact centre operational data; entity resolution and relationship modelling across customer, agent, interaction, and case. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements data modelling to dimensional modelling (star/snowflake schema) for contact centre operational data; entity resolution; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Data transformation and orchestration: ELT/ETL pipelines (dbt, Apache Airflow, Azure Data Factory) to cleanse, enrich, join, and prepare data for analytics and ML consumption",
            "definition": "The end-to-end process and technology that governs data transformation and orchestration, specifically: ELT/ETL pipelines (dbt, Apache Airflow, Azure Data Factory) to cleanse, enrich, join, and prepare data for analytics and ML consumption. This is a mandatory element of the Data Platform & Analytics Engineering capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements data transformation and orchestration to elt/etl pipelines (dbt, apache airflow, azure data factory) to cleanse, enrich, join, and prepare da; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Data catalogue and metadata management: searchable inventory of all datasets, fields, lineage, ownership, and business definitions (Collibra, Alation, Microsoft Purview)",
            "definition": "A structured enterprise function that delivers data catalogue and metadata management, specifically: searchable inventory of all datasets, fields, lineage, ownership, and business definitions (Collibra, Alation, Microsoft Purview). This capability is a key component of the Data Platform & Analytics Engineering domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements data catalogue and metadata management to searchable inventory of all datasets, fields, lineage, ownership, and business definitions (collibra; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Data quality framework: automated data quality rules, completeness checks, and anomaly detection on all ingested datasets with alerting to data owners",
            "definition": "A structured enterprise function that delivers data quality framework, specifically: automated data quality rules, completeness checks, and anomaly detection on all ingested datasets with alerting to data owners. As part of Data Platform & Analytics Engineering, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements data quality framework to automated data quality rules, completeness checks, and anomaly detection on all ingested datasets wi; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Self-service analytics layer: governed semantic layer (metrics store / headless BI) exposing pre-defined, business-aligned metrics to BI tools without requiring SQL knowledge",
            "definition": "The organisational capability responsible for self-service analytics layer, specifically: governed semantic layer (metrics store / headless BI) exposing pre-defined, business-aligned metrics to BI tools without requiring SQL knowledge. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements self-service analytics layer to governed semantic layer (metrics store / headless bi) exposing pre-defined, business-aligned metrics; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Real-time analytics infrastructure: streaming analytics for live operational dashboards and real-time alerting (separate from batch data warehouse)",
            "definition": "An integrated function within the CCaaS ecosystem that manages real-time analytics infrastructure, specifically: streaming analytics for live operational dashboards and real-time alerting (separate from batch data warehouse). Effective implementation of this sub-capability within Data Platform & Analytics Engineering requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements real-time analytics infrastructure to streaming analytics for live operational dashboards and real-time alerting (separate from batch data; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "ML feature store: centralised, versioned store of ML features derived from contact centre data, shared across all model training and inference pipelines",
            "definition": "A structured enterprise function that delivers ml feature store, specifically: centralised, versioned store of ML features derived from contact centre data, shared across all model training and inference pipelines. Effective implementation of this sub-capability within Data Platform & Analytics Engineering requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements ml feature store to centralised, versioned store of ml features derived from contact centre data, shared across all mode; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Data access control and privacy enforcement: column-level and row-level security within the data platform to enforce GDPR, data minimisation, and role-based access policies",
            "definition": "The organisational capability responsible for data access control and privacy enforcement, specifically: column-level and row-level security within the data platform to enforce GDPR, data minimisation, and role-based access policies. This is a mandatory element of the Data Platform & Analytics Engineering capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements data access control and privacy enforcement to column-level and row-level security within the data platform to enforce gdpr, data minimisation, and; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Data retention and archival management: automated enforcement of retention policies across all datasets, with cold storage archival and deletion workflows",
            "definition": "A configurable platform capability that provides data retention and archival management, specifically: automated enforcement of retention policies across all datasets, with cold storage archival and deletion workflows. As part of Data Platform & Analytics Engineering, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements data retention and archival management to automated enforcement of retention policies across all datasets, with cold storage archival and dele; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "DataOps and pipeline monitoring: automated alerting on pipeline failures, data freshness breaches, schema changes, and quality threshold violations",
            "definition": "A structured enterprise function that delivers dataops and pipeline monitoring, specifically: automated alerting on pipeline failures, data freshness breaches, schema changes, and quality threshold violations. This capability is a key component of the Data Platform & Analytics Engineering domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements dataops and pipeline monitoring to automated alerting on pipeline failures, data freshness breaches, schema changes, and quality thresh; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          }
        ],
        "int": [
          "All 32 operational capability domains – every system is a data source feeding ingestion pipelines",
          "CCaaS / Contact Centre Platform – highest volume source: CDRs, agent states, queue events, interaction metadata streamed in real time",
          "CRM – customer data, case outcomes, CSAT scores ingested on defined cadence",
          "WFM – schedule, adherence, and forecasting data",
          "HR / HRIS – workforce data for people analytics",
          "Interaction Recording / Transcription – transcript and metadata ingestion for analytics and ML",
          "BI and visualisation tools (Power BI, Tableau, Looker, Qlik) – consume governed semantic layer",
          "AI / ML Platform (MLflow, Vertex AI, Azure ML) – feature store and training data provision",
          "Data governance platform – catalogue and lineage integration",
          "Finance / ERP – cost and revenue data for commercial analytics"
        ],
        "glo": [
          "Data residency: centralised global data platform must implement logical partitioning or physical regional instances to ensure data from restricted countries (Russia, China, India, Indonesia) is not processed or stored outside their borders",
          "GDPR: the data platform holds personal data from all regions – ROPA entry required, DPIAs for high-risk processing, strict access control, and deletion propagation from source systems",
          "Cross-border data transfer: aggregating data from EU/UK systems into a US-hosted data warehouse requires SCCs or other valid transfer mechanism",
          "Data sovereignty for analytics: some jurisdictions prohibit using locally collected personal data in analysis performed outside the country – architectural partitioning and legal basis documentation required",
          "Multi-timezone data engineering: all timestamps must be stored in UTC and converted at query time; SLA calculations must account for local business hours per geography",
          "Multi-currency data modelling: financial metrics must be stored in both local currency and a reporting currency with exchange rate management",
          "Data platform vendor sovereignty: hyperscaler (AWS, Azure, GCP) regional availability and data boundary commitments must be assessed per country",
          "Right to erasure propagation: deletion requests actioned in source systems must cascade to the data platform – anonymisation or deletion pipelines must be maintained per data subject",
          "Regulatory audit access: some financial regulators require the ability to access raw interaction data and analytics within defined timeframes – data platform must support structured regulatory data export"
        ]
      },
      {
        "title": "Customer Identity & Access Management (CIAM)",
        "category": "Digital Customer Experience | Customer Authentication | Consent & Privacy",
        "usecase": "A customer attempts to log in to the self-service portal from an unrecognised device in a new geography; CIAM triggers step-up authentication (OTP to registered mobile), logs the event for fraud review, and allows access only after successful verification.",
        "sub": [
          {
            "name": "Customer identity store: centralised, secure repository of customer digital identities (username/password, social login, passwordless) across all digital service channels – distinct from the agent-facing IAM (Domain 16)",
            "definition": "The enterprise-grade capability responsible for customer identity store, specifically: centralised, secure repository of customer digital identities (username/password, social login, passwordless) across all digital service channels – distinct from the agent-facing IAM (Domain 16). This is a mandatory element of the Customer Identity & Access Management (CIAM) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements customer identity store to centralised, secure repository of customer digital identities (username/password, social login, pass; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Customer registration and self-enrolment: frictionless customer account creation with configurable identity verification requirements (email verification, mobile OTP, document verification, eKYC)",
            "definition": "The organisational capability responsible for customer registration and self-enrolment, specifically: frictionless customer account creation with configurable identity verification requirements (email verification, mobile OTP, document verification, eKYC). As part of Customer Identity & Access Management (CIAM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements customer registration and self-enrolment to frictionless customer account creation with configurable identity verification requirements (email v; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Multi-factor authentication (MFA) for customers: step-up authentication options including SMS OTP, authenticator app (TOTP), biometrics, and magic link – balancing security with customer experience",
            "definition": "A configurable platform capability that provides multi-factor authentication for customers, specifically: step-up authentication options including SMS OTP, authenticator app (TOTP), biometrics, and magic link – balancing security with customer experience. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements multi-factor authentication for customers to step-up authentication options including sms otp, authenticator app (totp), biometrics, and magic li; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Passwordless and social login: support for Sign In with Google, Apple, Facebook, Microsoft, and FIDO2/WebAuthn passkeys as customer authentication methods",
            "definition": "The systematic approach to delivering passwordless and social login, specifically: support for Sign In with Google, Apple, Facebook, Microsoft, and FIDO2/WebAuthn passkeys as customer authentication methods. As part of Customer Identity & Access Management (CIAM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements passwordless and social login to support for sign in with google, apple, facebook, microsoft, and fido2/webauthn passkeys as customer; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Progressive profiling: incrementally collect additional customer identity attributes over time without demanding all information at first registration",
            "definition": "The systematic approach to delivering progressive profiling, specifically: incrementally collect additional customer identity attributes over time without demanding all information at first registration. This is a mandatory element of the Customer Identity & Access Management (CIAM) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements progressive profiling to incrementally collect additional customer identity attributes over time without demanding all inform; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Risk-based / adaptive authentication: dynamically adjust authentication challenge requirements based on device, location, behaviour, and risk signals – higher-risk actions prompt stronger authentication",
            "definition": "An integrated function within the CCaaS ecosystem that manages risk-based / adaptive authentication, specifically: dynamically adjust authentication challenge requirements based on device, location, behaviour, and risk signals – higher-risk actions prompt stronger authentication. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements risk-based / adaptive authentication to dynamically adjust authentication challenge requirements based on device, location, behaviour, and r; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Customer consent management platform (CMP): capture, store, version, and enforce customer consents for data processing, marketing communications, and third-party sharing across all channels",
            "definition": "The operational discipline and tooling that enables customer consent management platform, specifically: capture, store, version, and enforce customer consents for data processing, marketing communications, and third-party sharing across all channels. This capability is a key component of the Customer Identity & Access Management (CIAM) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements customer consent management platform to capture, store, version, and enforce customer consents for data processing, marketing communications; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Preference management: customer-controlled communication preferences (channel, frequency, language, content type) stored and propagated to all consuming systems",
            "definition": "A structured enterprise function that delivers preference management, specifically: customer-controlled communication preferences (channel, frequency, language, content type) stored and propagated to all consuming systems. As part of Customer Identity & Access Management (CIAM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements preference management to customer-controlled communication preferences (channel, frequency, language, content type) stored an; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Identity lifecycle management: handle name changes, account merges, account deactivation, data deletion requests, and account recovery securely",
            "definition": "The end-to-end process and technology that governs identity lifecycle management, specifically: handle name changes, account merges, account deactivation, data deletion requests, and account recovery securely. As part of Customer Identity & Access Management (CIAM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements identity lifecycle management to handle name changes, account merges, account deactivation, data deletion requests, and account recov; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Customer Single Sign-On (SSO): once authenticated, seamless access to web portal, mobile app, and live chat without re-authentication",
            "definition": "A configurable platform capability that provides customer single sign-on, specifically: once authenticated, seamless access to web portal, mobile app, and live chat without re-authentication. Effective implementation of this sub-capability within Customer Identity & Access Management (CIAM) requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements customer single sign-on to once authenticated, seamless access to web portal, mobile app, and live chat without re-authenticati; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Identity federation: connect CIAM to enterprise identity directory to support both B2C (direct consumers) and B2B (business customers with their own identity providers)",
            "definition": "The systematic approach to delivering identity federation, specifically: connect CIAM to enterprise identity directory to support both B2C (direct consumers) and B2B (business customers with their own identity providers). This is a mandatory element of the Customer Identity & Access Management (CIAM) capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements identity federation to connect ciam to enterprise identity directory to support both b2c (direct consumers) and b2b (busine; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "eKYC and identity verification: integration with identity document verification services (Onfido, Jumio, Yoti) for regulated onboarding processes",
            "definition": "A configurable platform capability that provides ekyc and identity verification, specifically: integration with identity document verification services (Onfido, Jumio, Yoti) for regulated onboarding processes. This capability is a key component of the Customer Identity & Access Management (CIAM) domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements ekyc and identity verification to integration with identity document verification services (onfido, jumio, yoti) for regulated onboard; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Fraud signals from CIAM: feed authentication risk scores, anomalous login events, and account takeover indicators to the IVR, CCaaS fraud platform, and CRM in real time",
            "definition": "A structured enterprise function that delivers fraud signals from ciam, specifically: feed authentication risk scores, anomalous login events, and account takeover indicators to the IVR, CCaaS fraud platform, and CRM in real time. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements fraud signals from ciam to feed authentication risk scores, anomalous login events, and account takeover indicators to the ivr; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Customer data access and portability: self-service portal for customers to view, export, and delete their personal data in compliance with GDPR and equivalent rights",
            "definition": "The systematic approach to delivering customer data access and portability, specifically: self-service portal for customers to view, export, and delete their personal data in compliance with GDPR and equivalent rights. As part of Customer Identity & Access Management (CIAM), this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements customer data access and portability to self-service portal for customers to view, export, and delete their personal data in compliance with; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "CIAM analytics: registration funnel completion rates, MFA adoption, authentication failure rates, account takeover incident tracking",
            "definition": "The enterprise-grade capability responsible for ciam analytics, specifically: registration funnel completion rates, MFA adoption, authentication failure rates, account takeover incident tracking. Within the Data & Compliance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements ciam analytics to registration funnel completion rates, mfa adoption, authentication failure rates, account takeover i; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          }
        ],
        "int": [
          "CCaaS / Contact Centre Platform – authenticated digital identity passed as context to CCR screen-pop; account takeover flags surface during inbound contacts",
          "IVR / Voice AI – CIAM-verified identity and authentication status passed at call initiation to skip KBA; risk score informs fraud detection",
          "CRM – golden customer record linked to CIAM identity; consent and preference flags propagated to case management and outbound communications",
          "MDM / CDP – CIAM identity as the authoritative identifier for customer record deduplication and data fabric",
          "Digital Self-Service Portal / Mobile App – CIAM provides authentication layer for all customer-facing digital properties",
          "Fraud Management platform – real-time authentication risk signals and account takeover detection",
          "Consent Management Platform (OneTrust, Usercentrics, TrustArc) – CIAM stores and enforces consents; CMP provides the consent collection UI",
          "Marketing Automation – consent and preference flags gate all outbound marketing communications",
          "Identity verification vendors (Onfido, Jumio) – eKYC document verification integration",
          "IAM platform (Okta, Microsoft Entra, Ping Identity) – CIAM shares infrastructure or federates with enterprise IAM",
          "Security / SIEM – authentication events and anomaly signals"
        ],
        "glo": [
          "GDPR / PECR: customer consent must be freely given, specific, informed, and unambiguous; consent records must be timestamped and auditable; withdrawal of consent must be immediately propagated across all systems",
          "CCPA / CPRA (California): right to opt out of sale of personal data; right to correct; right to limit use of sensitive personal information; must be enforceable at CIAM level",
          "PIPL (China): separate consent required per data processing purpose; cross-border transfer of personal data requires PIPL-compliant mechanism; data localisation for Chinese customer identities",
          "eIDAS (EU): the EU Digital Identity Wallet (eIDAS 2.0) will reshape customer identity verification in Europe from 2026 – CIAM must be architected to support wallet-based identity credentials",
          "eKYC regulations: identity document verification requirements for regulated onboarding (banking, insurance, telecoms) vary significantly by country – national ID formats, biometric requirements, and liveness check standards differ",
          "Age verification obligations: some jurisdictions require age verification for specific services – CIAM must support compliant age-gating",
          "Strong Customer Authentication (SCA / PSD2 in EU): payment-related authentication must meet SCA requirements – integration with payment services must enforce the correct authentication challenge",
          "Data residency: customer identity data (credentials, consent records, authentication logs) may be subject to local storage requirements in China, Russia, India, and other jurisdictions",
          "Right to erasure: customer account deletion must cascade to all systems that hold a copy of the CIAM identity – CIAM is the master record that must orchestrate the deletion chain",
          "Multi-language CIAM UI: all registration, login, consent, and preference management screens must be available in local languages",
          "Accessibility: CIAM authentication flows must be WCAG 2.1 AA compliant and support assistive technologies for customers with disabilities"
        ]
      }
    ]
  },
  {
    "label": "Finance & Commercial",
    "icon": "💼",
    "desc": "Payroll, vendor management, finance, cost management, and commercial governance.",
    "domains": [
      {
        "title": "Payroll Integration",
        "category": "Compensation Processing | Financial Operations",
        "usecase": "At month end, the payroll integration pulls WFM-approved overtime hours, night shift differentials, and incentive amounts from three separate systems and posts a consolidated payroll journal to SAP, eliminating a 3-day manual reconciliation process.",
        "sub": [
          {
            "name": "Payroll data consolidation: base salary, overtime, variable pay, incentives, deductions",
            "definition": "The end-to-end process and technology that governs payroll data consolidation, specifically: base salary, overtime, variable pay, incentives, deductions. This capability is a key component of the Payroll Integration domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements payroll data consolidation to base salary, overtime, variable pay, incentives, deductions; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Payroll run preparation: data validation, exception flagging, approval workflow",
            "definition": "The organisational capability responsible for payroll run preparation, specifically: data validation, exception flagging, approval workflow. As part of Payroll Integration, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements payroll run preparation to data validation, exception flagging, approval workflow; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Integration with local payroll engines per country (in-country payroll processing)",
            "definition": "The operational discipline and tooling that enables integration with local payroll engines per country within the contact centre environment. This capability is a key component of the Payroll Integration domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys integration with local payroll engines per country as part of their Payroll Integration capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Gross-to-net calculation: tax, national insurance/social security, pension, voluntary deductions",
            "definition": "The enterprise-grade capability responsible for gross-to-net calculation, specifically: tax, national insurance/social security, pension, voluntary deductions. As part of Payroll Integration, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements gross-to-net calculation to tax, national insurance/social security, pension, voluntary deductions; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Payslip generation and distribution (digital and print)",
            "definition": "The end-to-end process and technology that governs payslip generation and distribution within the contact centre environment. This capability is a key component of the Payroll Integration domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys payslip generation and distribution as part of their Payroll Integration capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Real-time gross earnings visibility for agents",
            "definition": "The systematic approach to delivering real-time gross earnings visibility for agents within the contact centre environment. This capability is a key component of the Payroll Integration domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys real-time gross earnings visibility for agents as part of their Payroll Integration capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Off-cycle payroll processing for leavers and corrections",
            "definition": "The operational discipline and tooling that enables off-cycle payroll processing for leavers and corrections within the contact centre environment. Effective implementation of this sub-capability within Payroll Integration requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys off-cycle payroll processing for leavers and corrections as part of their Payroll Integration capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Payroll audit log and reconciliation reporting",
            "definition": "An integrated function within the CCaaS ecosystem that manages payroll audit log and reconciliation reporting within the contact centre environment. Effective implementation of this sub-capability within Payroll Integration requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys payroll audit log and reconciliation reporting as part of their Payroll Integration capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "RTI (Real Time Information) or equivalent regulatory reporting per country",
            "definition": "A configurable platform capability that provides rti or equivalent regulatory reporting per country within the contact centre environment. Effective implementation of this sub-capability within Payroll Integration requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys rti or equivalent regulatory reporting per country as part of their Payroll Integration capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Year-end processing: P60 (UK), W-2 (USA), tax certificates per jurisdiction",
            "definition": "The enterprise-grade capability responsible for year-end processing, specifically: P60 (UK), W-2 (USA), tax certificates per jurisdiction. Within the Finance & Commercial pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements year-end processing to p60 (uk), w-2 (usa), tax certificates per jurisdiction; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Auto-enrolment pension management (UK) and equivalent schemes globally",
            "definition": "The operational discipline and tooling that enables auto-enrolment pension management and equivalent schemes globally within the contact centre environment. Within the Finance & Commercial pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys auto-enrolment pension management and equivalent schemes globally as part of their Payroll Integration capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Expense reimbursement processing",
            "definition": "The end-to-end process and technology that governs expense reimbursement processing within the contact centre environment. As part of Payroll Integration, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys expense reimbursement processing as part of their Payroll Integration capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Payroll compliance calendar management per country",
            "definition": "An integrated function within the CCaaS ecosystem that manages payroll compliance calendar management per country within the contact centre environment. This is a mandatory element of the Payroll Integration capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys payroll compliance calendar management per country as part of their Payroll Integration capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Bank file generation and BACS/ACH/SEPA/local payment processing",
            "definition": "The operational discipline and tooling that enables bank file generation and bacs/ach/sepa/local payment processing within the contact centre environment. This capability is a key component of the Payroll Integration domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys bank file generation and bacs/ach/sepa/local payment processing as part of their Payroll Integration capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "HR / HRIS – employee master data: start date, employment type, pay grade, cost centre",
          "Incentive & Compensation – approved variable pay amounts per period",
          "WFM – overtime hours, night shift differentials, bank holiday worked data",
          "Finance / ERP – payroll cost posting to general ledger by cost centre",
          "Pension providers – contribution data feeds",
          "HMRC / IRS / local tax authorities – statutory filing APIs",
          "Time & Attendance (if separate from WFM) – actual hours worked",
          "Benefits administration platform – salary sacrifice and benefit deductions"
        ],
        "glo": [
          "In-country payroll compliance is mandatory: each country has distinct tax codes, social security, and reporting",
          "Multiple payroll processing cycles: weekly (some USA), bi-weekly, monthly – differs by country and contract",
          "Currency: each country pays in local currency; multi-currency FX management required",
          "Statutory filings: RTI (UK), EFD (USA), DSN (France), DARF (Brazil) – each require local payroll engine",
          "Pension/retirement auto-enrolment rules differ significantly (UK auto-enrolment, 401k matching USA, CPF Singapore)",
          "GDPR / local data protection: payroll data is highly sensitive personal data with strict access controls",
          "Data residency: payroll records may not leave the country in some jurisdictions",
          "Right-to-pay legislation: some countries require payslips to be delivered in local language",
          "Year-end obligations differ: P11D (UK), 1099/W-2 (USA), IR8A (Singapore) – separate processes per country",
          "Global payroll aggregator vs. in-country provider strategy decision required per footprint"
        ]
      },
      {
        "title": "Finance, Cost Management & Commercial Governance",
        "category": "Operational Finance | P&L Management | CCaaS Commercial Control",
        "usecase": "The monthly P&L review shows cost-per-contact has risen 8% quarter-on-quarter; the finance dashboard drills down to reveal the driver is a 12% increase in AHT on the mortgage queue, triggering a targeted coaching programme rather than a blanket headcount review.",
        "sub": [
          {
            "name": "Contact centre P&L ownership: full financial accountability model for the contact centre as a business unit – revenue attribution, cost-per-contact, cost-to-serve, and contribution margin by programme or client",
            "definition": "The end-to-end process and technology that governs contact centre p&l ownership, specifically: full financial accountability model for the contact centre as a business unit – revenue attribution, cost-per-contact, cost-to-serve, and contribution margin by programme or client. This is a mandatory element of the Finance, Cost Management & Commercial Governance capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements contact centre p&l ownership to full financial accountability model for the contact centre as a business unit – revenue attribution; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "CCaaS and technology cost management: detailed tracking of all platform licences, consumption-based charges (minutes, API calls, storage, AI tokens), and seat licence utilisation by vendor",
            "definition": "An integrated function within the CCaaS ecosystem that manages ccaas and technology cost management, specifically: detailed tracking of all platform licences, consumption-based charges (minutes, API calls, storage, AI tokens), and seat licence utilisation by vendor. This is a mandatory element of the Finance, Cost Management & Commercial Governance capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements ccaas and technology cost management to detailed tracking of all platform licences, consumption-based charges (minutes, api calls, storage; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "FinOps for cloud contact centre: cloud spend visibility, waste identification, right-sizing recommendations for CCaaS infrastructure, and commitment versus on-demand cost optimisation",
            "definition": "A configurable platform capability that provides finops for cloud contact centre, specifically: cloud spend visibility, waste identification, right-sizing recommendations for CCaaS infrastructure, and commitment versus on-demand cost optimisation. This is a mandatory element of the Finance, Cost Management & Commercial Governance capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements finops for cloud contact centre to cloud spend visibility, waste identification, right-sizing recommendations for ccaas infrastructure; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Headcount cost management: real-time view of fully loaded agent cost (salary, on-costs, incentives, training, facilities) by site, programme, and skill group",
            "definition": "The organisational capability responsible for headcount cost management, specifically: real-time view of fully loaded agent cost (salary, on-costs, incentives, training, facilities) by site, programme, and skill group. Within the Finance & Commercial pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements headcount cost management to real-time view of fully loaded agent cost (salary, on-costs, incentives, training, facilities) by si; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Cost-per-contact calculation: end-to-end cost allocation model attributing all direct and indirect costs to individual contact types, channels, and resolution outcomes",
            "definition": "The operational discipline and tooling that enables cost-per-contact calculation, specifically: end-to-end cost allocation model attributing all direct and indirect costs to individual contact types, channels, and resolution outcomes. This capability is a key component of the Finance, Cost Management & Commercial Governance domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements cost-per-contact calculation to end-to-end cost allocation model attributing all direct and indirect costs to individual contact typ; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Budget planning and reforecasting: annual budget cycle, quarterly reforecast, and in-year variance analysis for all contact centre cost lines",
            "definition": "The systematic approach to delivering budget planning and reforecasting, specifically: annual budget cycle, quarterly reforecast, and in-year variance analysis for all contact centre cost lines. This capability is a key component of the Finance, Cost Management & Commercial Governance domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements budget planning and reforecasting to annual budget cycle, quarterly reforecast, and in-year variance analysis for all contact centre cost; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Cost driver analysis: identify and quantify the primary drivers of contact centre cost (contact volume, AHT, FCR, attrition, technology cost inflation) and model cost impact of operational changes",
            "definition": "The enterprise-grade capability responsible for cost driver analysis, specifically: identify and quantify the primary drivers of contact centre cost (contact volume, AHT, FCR, attrition, technology cost inflation) and model cost impact of operational changes. As part of Finance, Cost Management & Commercial Governance, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements cost driver analysis to identify and quantify the primary drivers of contact centre cost (contact volume, aht, fcr, attritio; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Capacity cost modelling: financial modelling of staffing scenarios, new site launches, channel shifts, and automation programmes – cost-benefit analysis and ROI calculation",
            "definition": "An integrated function within the CCaaS ecosystem that manages capacity cost modelling, specifically: financial modelling of staffing scenarios, new site launches, channel shifts, and automation programmes – cost-benefit analysis and ROI calculation. Within the Finance & Commercial pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements capacity cost modelling to financial modelling of staffing scenarios, new site launches, channel shifts, and automation program; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Vendor invoice management and PO reconciliation: validate vendor invoices against contracted rates, consumption data, and SLA credits before payment approval",
            "definition": "The enterprise-grade capability responsible for vendor invoice management and po reconciliation, specifically: validate vendor invoices against contracted rates, consumption data, and SLA credits before payment approval. Effective implementation of this sub-capability within Finance, Cost Management & Commercial Governance requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements vendor invoice management and po reconciliation to validate vendor invoices against contracted rates, consumption data, and sla credits before payment; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "SLA credit and penalty management: calculate SLA breach penalties owed by vendors, track credit claims, and ensure credits are applied to invoices",
            "definition": "The organisational capability responsible for sla credit and penalty management, specifically: calculate SLA breach penalties owed by vendors, track credit claims, and ensure credits are applied to invoices. As part of Finance, Cost Management & Commercial Governance, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements sla credit and penalty management to calculate sla breach penalties owed by vendors, track credit claims, and ensure credits are applied; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Client billing management (BPO / outsourced contact centre context): calculate billable volumes, apply agreed rate cards, generate client invoices, and manage billing disputes",
            "definition": "The organisational capability responsible for client billing management, specifically: calculate billable volumes, apply agreed rate cards, generate client invoices, and manage billing disputes. As part of Finance, Cost Management & Commercial Governance, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements client billing management to calculate billable volumes, apply agreed rate cards, generate client invoices, and manage billing di; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Transfer pricing and inter-company charging: where shared contact centre services are provided across legal entities, calculate and apply intercompany service charges",
            "definition": "The organisational capability responsible for transfer pricing and inter-company charging, specifically: where shared contact centre services are provided across legal entities, calculate and apply intercompany service charges. This is a mandatory element of the Finance, Cost Management & Commercial Governance capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division implements transfer pricing and inter-company charging to where shared contact centre services are provided across legal entities, calculate and apply interco; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — eliminating 3 hours of daily manual reporting effort."
          },
          {
            "name": "Financial reporting: monthly, quarterly, and annual financial performance packs for executive leadership and finance stakeholders",
            "definition": "A structured enterprise function that delivers financial reporting, specifically: monthly, quarterly, and annual financial performance packs for executive leadership and finance stakeholders. This is a mandatory element of the Finance, Cost Management & Commercial Governance capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements financial reporting to monthly, quarterly, and annual financial performance packs for executive leadership and finance stak; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Commercial contract performance tracking: monitor all commercial KPIs embedded in supplier and client contracts to identify financial risk and opportunity",
            "definition": "The end-to-end process and technology that governs commercial contract performance tracking, specifically: monitor all commercial KPIs embedded in supplier and client contracts to identify financial risk and opportunity. This is a mandatory element of the Finance, Cost Management & Commercial Governance capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements commercial contract performance tracking to monitor all commercial kpis embedded in supplier and client contracts to identify financial risk and; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          }
        ],
        "int": [
          "Finance / ERP (SAP, Oracle, NetSuite) – cost centre postings, invoice processing, purchase order management, GL reporting",
          "CCaaS / all technology vendors – consumption data feeds for FinOps and licence cost tracking",
          "HR / HRIS / Payroll – headcount data, salary costs, and on-cost rates for fully loaded cost modelling",
          "WFM – planned and actual headcount, overtime, and utilisation data for cost modelling",
          "Reporting & Analytics – cost and commercial KPIs published to executive dashboards",
          "Procurement platform (Ariba, Coupa) – PO management and vendor invoice approval workflows",
          "Vendor Management – commercial performance data for QBR and contract management",
          "Incentive & Compensation – variable pay costs incorporated into fully loaded headcount cost model",
          "Data Platform – cost data integrated with operational data for cost-per-contact calculations",
          "BI / Finance tools (Adaptive Insights, Anaplan, Pigment) – budgeting and financial planning"
        ],
        "glo": [
          "Multi-currency cost management: costs incurred and reported in local currency; consolidated reporting requires FX translation at defined rates with FX gain/loss tracking",
          "Transfer pricing compliance: intercompany charges for shared contact centre services must comply with OECD transfer pricing guidelines and local tax authority requirements in each country",
          "VAT / GST / sales tax on services: cross-border service provision (e.g. offshore contact centre serving another country's customers) may trigger VAT, GST, or withholding tax obligations",
          "Permanent establishment risk: deploying agents in a country to handle another country's customers may create a permanent establishment (PE) tax liability – requires legal and tax review per geography",
          "Local accounting standards: financial reporting may need to comply with IFRS, US GAAP, or local GAAP depending on the legal entity and reporting requirements per country",
          "CCaaS vendor cost structures vary by region: consumption-based pricing models (per-minute, per-interaction) may differ between regions; negotiate global pricing agreements where possible",
          "Technology cost allocation: where global CCaaS platforms are shared across regions, an agreed cost allocation methodology must be documented for local P&L purposes",
          "Regulatory cost of compliance: the cost of local regulatory compliance (PCI, GDPR, local licensing) must be tracked and attributed to the relevant geography or programme",
          "BPO commercial model variation: offshore vs. nearshore vs. onshore cost differentials must be modelled per geography and included in capacity planning financial models",
          "Budget governance: some countries require local entity budget approval through local boards or regulatory bodies before operational expenditure commitments"
        ]
      }
    ]
  },
  {
    "label": "Operations & Governance",
    "icon": "⚙️",
    "desc": "Change management, business continuity, facilities, real-time ops, programme governance, and vendor management.",
    "domains": [
      {
        "title": "Change Management & Internal Communications",
        "category": "Organisational Change | Employee Engagement | Communication",
        "usecase": "Before a major CCaaS migration, the change management platform runs a structured communications campaign — email, intranet articles, and team briefing packs — targeted by role and site, with read-receipt tracking to identify unengaged staff before go-live.",
        "sub": [
          {
            "name": "Change management framework: stakeholder analysis, impact assessment, readiness planning",
            "definition": "The enterprise-grade capability responsible for change management framework, specifically: stakeholder analysis, impact assessment, readiness planning. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements change management framework to stakeholder analysis, impact assessment, readiness planning; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Change communications strategy and planning",
            "definition": "The systematic approach to delivering change communications strategy and planning within the contact centre environment. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys change communications strategy and planning as part of their Change Management & Internal Communications capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Internal communication channels: intranet, email, digital noticeboards, team briefing packs",
            "definition": "An integrated function within the CCaaS ecosystem that manages internal communication channels, specifically: intranet, email, digital noticeboards, team briefing packs. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements internal communication channels to intranet, email, digital noticeboards, team briefing packs; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Manager cascade and briefing tool management",
            "definition": "The enterprise-grade capability responsible for manager cascade and briefing tool management within the contact centre environment. This capability is a key component of the Change Management & Internal Communications domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys manager cascade and briefing tool management as part of their Change Management & Internal Communications capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Town hall and all-hands event management (live and recorded)",
            "definition": "The systematic approach to delivering town hall and all-hands event management within the contact centre environment. As part of Change Management & Internal Communications, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys town hall and all-hands event management as part of their Change Management & Internal Communications capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Pulse survey and employee engagement measurement",
            "definition": "A configurable platform capability that provides pulse survey and employee engagement measurement within the contact centre environment. Effective implementation of this sub-capability within Change Management & Internal Communications requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys pulse survey and employee engagement measurement as part of their Change Management & Internal Communications capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Change champion network identification and enablement",
            "definition": "The operational discipline and tooling that enables change champion network identification and enablement within the contact centre environment. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys change champion network identification and enablement as part of their Change Management & Internal Communications capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Training needs assessment triggered by process or system changes",
            "definition": "The organisational capability responsible for training needs assessment triggered by process or system changes within the contact centre environment. This is a mandatory element of the Change Management & Internal Communications capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys training needs assessment triggered by process or system changes as part of their Change Management & Internal Communications capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Go-live communication planning for new system rollouts",
            "definition": "A configurable platform capability that provides go-live communication planning for new system rollouts within the contact centre environment. This is a mandatory element of the Change Management & Internal Communications capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys go-live communication planning for new system rollouts as part of their Change Management & Internal Communications capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Resistance management and escalation protocols",
            "definition": "The enterprise-grade capability responsible for resistance management and escalation protocols within the contact centre environment. This capability is a key component of the Change Management & Internal Communications domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys resistance management and escalation protocols as part of their Change Management & Internal Communications capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Change impact tracking and benefit realisation monitoring",
            "definition": "The systematic approach to delivering change impact tracking and benefit realisation monitoring within the contact centre environment. As part of Change Management & Internal Communications, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys change impact tracking and benefit realisation monitoring as part of their Change Management & Internal Communications capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Employee feedback channel for change-related concerns",
            "definition": "The operational discipline and tooling that enables employee feedback channel for change-related concerns within the contact centre environment. As part of Change Management & Internal Communications, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys employee feedback channel for change-related concerns as part of their Change Management & Internal Communications capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "HR / HRIS – target communications by role, location, team",
          "LMS – trigger training in response to change events",
          "Performance Management – track adoption metrics post-change",
          "Intranet / digital workplace (Microsoft SharePoint, Viva Engage, Simpplr)",
          "Email marketing tools for internal comms distribution",
          "Survey platform for pulse checks on change adoption"
        ],
        "glo": [
          "Works council and trade union consultation obligations before implementing significant changes",
          "Multi-language internal communications for diverse agent populations",
          "Time zone considerations for live town halls and all-hands events",
          "Cultural norms in communication: directness, formality, and channel preference differ by region",
          "Legal obligations to consult on redundancies or role changes differ by country (TUPE UK, EU Collective Redundancy Directive)",
          "Change governance bodies may need to include regional HR and legal representatives"
        ]
      },
      {
        "title": "Vendor & Contract Management",
        "category": "Procurement | Supplier Governance | Commercial Management",
        "usecase": "A contract renewal review flags that the incumbent telephony provider's SLA has been breached 4 times in 6 months; the vendor management system automatically generates a penalty credit claim and triggers the contract renegotiation workflow.",
        "sub": [
          {
            "name": "CCaaS and technology vendor selection, evaluation, and contracting",
            "definition": "A structured enterprise function that delivers ccaas and technology vendor selection, evaluation, and contracting within the contact centre environment. Effective implementation of this sub-capability within Vendor & Contract Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys ccaas and technology vendor selection, evaluation, and contracting as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Master Service Agreement (MSA) and Statement of Work (SOW) management",
            "definition": "A structured enterprise function that delivers master service agreement and statement of work management within the contact centre environment. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys master service agreement and statement of work management as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Service Level Agreement (SLA) definition, monitoring, and breach management",
            "definition": "A configurable platform capability that provides service level agreement definition, monitoring, and breach management within the contact centre environment. This is a mandatory element of the Vendor & Contract Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys service level agreement definition, monitoring, and breach management as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Vendor onboarding and due diligence (financial, security, compliance, ESG)",
            "definition": "The organisational capability responsible for vendor onboarding and due diligence within the contact centre environment. As part of Vendor & Contract Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys vendor onboarding and due diligence as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Third-party risk assessment and ongoing monitoring",
            "definition": "The operational discipline and tooling that enables third-party risk assessment and ongoing monitoring within the contact centre environment. This capability is a key component of the Vendor & Contract Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys third-party risk assessment and ongoing monitoring as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Contract repository and renewal calendar management",
            "definition": "The organisational capability responsible for contract repository and renewal calendar management within the contact centre environment. As part of Vendor & Contract Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys contract repository and renewal calendar management as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Commercial negotiation and rate card management",
            "definition": "The organisational capability responsible for commercial negotiation and rate card management within the contact centre environment. This is a mandatory element of the Vendor & Contract Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys commercial negotiation and rate card management as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Vendor performance scorecards and quarterly business reviews (QBR)",
            "definition": "A structured enterprise function that delivers vendor performance scorecards and quarterly business reviews within the contact centre environment. As part of Vendor & Contract Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys vendor performance scorecards and quarterly business reviews as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Escalation management for vendor service failures",
            "definition": "The systematic approach to delivering escalation management for vendor service failures within the contact centre environment. This capability is a key component of the Vendor & Contract Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team deploys escalation management for vendor service failures as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, increasing customer satisfaction scores by 8 points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Exit planning and data portability / transition management",
            "definition": "The enterprise-grade capability responsible for exit planning and data portability / transition management within the contact centre environment. As part of Vendor & Contract Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys exit planning and data portability / transition management as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Licence management: CCaaS seat licences, software subscriptions, API call volumes",
            "definition": "The enterprise-grade capability responsible for licence management, specifically: CCaaS seat licences, software subscriptions, API call volumes. This is a mandatory element of the Vendor & Contract Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements licence management to ccaas seat licences, software subscriptions, api call volumes; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Software asset management and optimisation",
            "definition": "The enterprise-grade capability responsible for software asset management and optimisation within the contact centre environment. This is a mandatory element of the Vendor & Contract Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys software asset management and optimisation as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Carrier and PSTN provider management: number provisioning, call rates, routing agreements",
            "definition": "The enterprise-grade capability responsible for carrier and pstn provider management, specifically: number provisioning, call rates, routing agreements. This capability is a key component of the Vendor & Contract Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements carrier and pstn provider management to number provisioning, call rates, routing agreements; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "BPO partner management (if using outsourced delivery)",
            "definition": "A configurable platform capability that provides bpo partner management within the contact centre environment. This capability is a key component of the Vendor & Contract Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys bpo partner management as part of their Vendor & Contract Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "Finance / ERP – purchase orders, invoice processing, contract cost tracking",
          "Legal / CLM platform (Ironclad, DocuSign CLM) – contract lifecycle management",
          "GRC / Risk platform – vendor risk assessments",
          "Procurement platform (SAP Ariba, Coupa) – vendor onboarding and PO management",
          "IT Asset Management – software licence tracking",
          "Security – vendor security assessment (CAIQ, ISO 27001 certification tracking)"
        ],
        "glo": [
          "Contract law varies: governing law and jurisdiction clauses must be locally valid",
          "GDPR / local DPA: data processing agreements required with all data processors globally",
          "Export control and sanctions compliance: vendor screening against denied party lists",
          "Local procurement regulations in government-linked or regulated contexts",
          "Multi-currency contract and payment management",
          "Tax withholding obligations on cross-border payments to vendors vary by country",
          "Local entity requirements: some countries require contracting with a local legal entity",
          "Vendor support hours and SLA response times must be appropriate for local business hours",
          "In-country carrier agreements for PSTN connectivity in each operating geography"
        ]
      },
      {
        "title": "Business Continuity, Disaster Recovery & Resilience",
        "category": "Operational Resilience | Risk Management",
        "usecase": "A hurricane warning triggers the BC/DR runbook: within 30 minutes, the Florida site's call queues are re-pointed to the Atlanta and Manila backup sites, agent credentials are pre-provisioned, and test calls confirm the failover is live before the storm makes landfall.",
        "sub": [
          {
            "name": "Business Impact Analysis (BIA) for all contact centre capabilities",
            "definition": "A configurable platform capability that provides business impact analysis for all contact centre capabilities within the contact centre environment. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre deploys business impact analysis for all contact centre capabilities as part of their Business Continuity, Disaster Recovery & Resilience capability; the implementation is integrated with the wider CCaaS ecosystem, saving £250K annually in operational overhead and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Recovery Time Objective (RTO) and Recovery Point Objective (RPO) definition per system",
            "definition": "An integrated function within the CCaaS ecosystem that manages recovery time objective and recovery point objective definition per system within the contact centre environment. This is a mandatory element of the Business Continuity, Disaster Recovery & Resilience capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys recovery time objective and recovery point objective definition per system as part of their Business Continuity, Disaster Recovery & Resilience capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Disaster Recovery plan for CCaaS: failover routing, backup telephony, alternate site activation",
            "definition": "The organisational capability responsible for disaster recovery plan for ccaas, specifically: failover routing, backup telephony, alternate site activation. Effective implementation of this sub-capability within Business Continuity, Disaster Recovery & Resilience requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements disaster recovery plan for ccaas to failover routing, backup telephony, alternate site activation; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Active-active or active-passive multi-region CCaaS architecture for high availability",
            "definition": "The systematic approach to delivering active-active or active-passive multi-region ccaas architecture for high availability within the contact centre environment. As part of Business Continuity, Disaster Recovery & Resilience, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation deploys active-active or active-passive multi-region ccaas architecture for high availability as part of their Business Continuity, Disaster Recovery & Resilience capability; the implementation is integrated with the wider CCaaS ecosystem, enabling the team to scale from 500 to 800 agents without additional supervisors and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Work-from-home / remote agent fallback: BCP routing to home agents on site failure",
            "definition": "An integrated function within the CCaaS ecosystem that manages work-from-home / remote agent fallback, specifically: BCP routing to home agents on site failure. This capability is a key component of the Business Continuity, Disaster Recovery & Resilience domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements work-from-home / remote agent fallback to bcp routing to home agents on site failure; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Crisis communication plan: internal notification, customer messaging, regulator notification",
            "definition": "An integrated function within the CCaaS ecosystem that manages crisis communication plan, specifically: internal notification, customer messaging, regulator notification. As part of Business Continuity, Disaster Recovery & Resilience, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements crisis communication plan to internal notification, customer messaging, regulator notification; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "BCP testing and exercise programme: tabletop, simulation, full failover tests",
            "definition": "The systematic approach to delivering bcp testing and exercise programme, specifically: tabletop, simulation, full failover tests. This capability is a key component of the Business Continuity, Disaster Recovery & Resilience domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements bcp testing and exercise programme to tabletop, simulation, full failover tests; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Emergency call routing plans: redirect queues to alternate sites or overflow partners",
            "definition": "The organisational capability responsible for emergency call routing plans, specifically: redirect queues to alternate sites or overflow partners. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements emergency call routing plans to redirect queues to alternate sites or overflow partners; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Data backup and restore testing",
            "definition": "The enterprise-grade capability responsible for data backup and restore testing within the contact centre environment. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys data backup and restore testing as part of their Business Continuity, Disaster Recovery & Resilience capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Third-party / vendor dependency mapping in BCP",
            "definition": "The organisational capability responsible for third-party / vendor dependency mapping in bcp within the contact centre environment. As part of Business Continuity, Disaster Recovery & Resilience, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys third-party / vendor dependency mapping in bcp as part of their Business Continuity, Disaster Recovery & Resilience capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Pandemic / epidemic operational model (reduced density, remote protocols)",
            "definition": "The organisational capability responsible for pandemic / epidemic operational model within the contact centre environment. This is a mandatory element of the Business Continuity, Disaster Recovery & Resilience capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys pandemic / epidemic operational model as part of their Business Continuity, Disaster Recovery & Resilience capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Critical supplier resilience assessment",
            "definition": "The organisational capability responsible for critical supplier resilience assessment within the contact centre environment. As part of Business Continuity, Disaster Recovery & Resilience, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents deploys critical supplier resilience assessment as part of their Business Continuity, Disaster Recovery & Resilience capability; the implementation is integrated with the wider CCaaS ecosystem, cutting average handling time by 90 seconds per interaction and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "CCaaS – pre-configured DR routing plans and emergency mode activation",
          "PSTN carrier – number rerouting agreements for site failure scenarios",
          "IT Infrastructure – server failover, cloud region failover automation",
          "IAM – access maintained during DR events",
          "Incident Management / ITSM – BCP incident declaration and comms",
          "WFM – emergency staffing model and surge capacity planning",
          "HR – emergency contacts, welfare management during incidents",
          "Reporting & Analytics – degraded mode KPI monitoring during BCP activation"
        ],
        "glo": [
          "Regulatory BCP obligations differ: FCA SYSC (UK), OCC (USA banking), MAS TRM (Singapore) require documented DR",
          "Geographic risk concentration: avoid single-geography dependency for critical operations",
          "Multi-country BCP activation: coordinate across HR, legal, facilities, IT in each impacted country",
          "Natural disaster and geopolitical risk profiling per site location",
          "Data replication across regions must comply with data residency restrictions",
          "Cross-border staffing flexibility during BCP: consider visa, work permit, and tax implications of staff relocation",
          "Local emergency management authority obligations vary by country",
          "Pandemic response obligations: local government direction supersedes global BCP plans"
        ]
      },
      {
        "title": "Facilities & Site Management",
        "category": "Physical Operations | Workspace Management",
        "usecase": "Occupancy sensors in the facilities management system detect the contact floor is operating at 112% of fire code capacity during a peak day; the system alerts the site manager and triggers a hot-desk reallocation plan for the afternoon shift.",
        "sub": [
          {
            "name": "Contact centre floor design: agent workstations, supervisor bays, team leader positions",
            "definition": "A structured enterprise function that delivers contact centre floor design, specifically: agent workstations, supervisor bays, team leader positions. This capability is a key component of the Facilities & Site Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements contact centre floor design to agent workstations, supervisor bays, team leader positions; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Acoustic design and noise management (speech privacy, cancellation zones)",
            "definition": "A structured enterprise function that delivers acoustic design and noise management within the contact centre environment. Effective implementation of this sub-capability within Facilities & Site Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys acoustic design and noise management as part of their Facilities & Site Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Headset and telephony hardware standards and management",
            "definition": "A structured enterprise function that delivers headset and telephony hardware standards and management within the contact centre environment. This is a mandatory element of the Facilities & Site Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries deploys headset and telephony hardware standards and management as part of their Facilities & Site Management capability; the implementation is integrated with the wider CCaaS ecosystem, achieving 99.5% compliance on regulatory obligations and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Secure access control: entry management, visitor protocols, secure agent floor access",
            "definition": "An integrated function within the CCaaS ecosystem that manages secure access control, specifically: entry management, visitor protocols, secure agent floor access. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements secure access control to entry management, visitor protocols, secure agent floor access; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Health & Safety compliance: workstation ergonomics, DSE assessments, first aid",
            "definition": "A structured enterprise function that delivers health & safety compliance, specifically: workstation ergonomics, DSE assessments, first aid. This capability is a key component of the Facilities & Site Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements health & safety compliance to workstation ergonomics, dse assessments, first aid; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Facilities maintenance management and cleaning standards",
            "definition": "The operational discipline and tooling that enables facilities maintenance management and cleaning standards within the contact centre environment. Effective implementation of this sub-capability within Facilities & Site Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre deploys facilities maintenance management and cleaning standards as part of their Facilities & Site Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing agent attrition by 18% over 6 months and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Capacity utilisation monitoring and desk allocation management",
            "definition": "The systematic approach to delivering capacity utilisation monitoring and desk allocation management within the contact centre environment. Effective implementation of this sub-capability within Facilities & Site Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys capacity utilisation monitoring and desk allocation management as part of their Facilities & Site Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Breakout, training room, and coaching space management",
            "definition": "An integrated function within the CCaaS ecosystem that manages breakout, training room, and coaching space management within the contact centre environment. This is a mandatory element of the Facilities & Site Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "An e-commerce platform's customer care division deploys breakout, training room, and coaching space management as part of their Facilities & Site Management capability; the implementation is integrated with the wider CCaaS ecosystem, eliminating 3 hours of daily manual reporting effort and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Food and wellbeing facilities management",
            "definition": "A structured enterprise function that delivers food and wellbeing facilities management within the contact centre environment. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation deploys food and wellbeing facilities management as part of their Facilities & Site Management capability; the implementation is integrated with the wider CCaaS ecosystem, improving first contact resolution by 12 percentage points and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Environmental controls: temperature, air quality, lighting standards for agent comfort",
            "definition": "The systematic approach to delivering environmental controls, specifically: temperature, air quality, lighting standards for agent comfort. Effective implementation of this sub-capability within Facilities & Site Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements environmental controls to temperature, air quality, lighting standards for agent comfort; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Physical data security: clean desk policy, secure document disposal, CCTV",
            "definition": "The end-to-end process and technology that governs physical data security, specifically: clean desk policy, secure document disposal, CCTV. This is a mandatory element of the Facilities & Site Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements physical data security to clean desk policy, secure document disposal, cctv; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Visitor management and contractor access protocols",
            "definition": "The systematic approach to delivering visitor management and contractor access protocols within the contact centre environment. Effective implementation of this sub-capability within Facilities & Site Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries deploys visitor management and contractor access protocols as part of their Facilities & Site Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing escalation rates by 25% within the first quarter and providing a foundation for continuous operational improvement."
          },
          {
            "name": "Building emergency evacuation plan aligned to BCP",
            "definition": "The operational discipline and tooling that enables building emergency evacuation plan aligned to bcp within the contact centre environment. This capability is a key component of the Facilities & Site Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre deploys building emergency evacuation plan aligned to bcp as part of their Facilities & Site Management capability; the implementation is integrated with the wider CCaaS ecosystem, reducing manual effort by 40% and improving audit readiness and providing a foundation for continuous operational improvement."
          }
        ],
        "int": [
          "WFM – headcount and schedule data for floor capacity planning",
          "HR / HRIS – headcount and team allocation for facilities planning",
          "Security / access control systems",
          "IT Infrastructure – power, cooling, and cabling for technology estate",
          "Health & Safety management system"
        ],
        "glo": [
          "Local H&S legislation: Health & Safety at Work Act (UK), OSHA (USA), local equivalents per country",
          "DSE / VDU workstation assessment obligations vary by jurisdiction",
          "Building regulations and fire safety standards differ per country",
          "Accessibility regulations: DDA (UK), ADA (USA), local accessibility laws",
          "Lease and property management: local real estate law, break clauses, dilapidations",
          "Security standards may need to meet client requirements (ISO 27001 physical controls)",
          "Cultural considerations: prayer rooms, dietary requirements in canteen facilities",
          "Local planning and zoning restrictions on contact centre floor operations (noise, hours)"
        ]
      },
      {
        "title": "Real-Time Operations Management",
        "category": "Intraday Management | Floor Management | Duty Operations",
        "usecase": "An intraday manager sees queue depth spiking at 11:47am and AHT rising 40 seconds above target; the real-time operations dashboard highlights 6 agents in extended ACW and 3 in unplanned break, enabling immediate supervisor intervention to restore service levels within 8 minutes.",
        "sub": [
          {
            "name": "Real-time operations centre (RTOC): dedicated function and tooling for intraday monitoring, intervention, and escalation across all active queues, sites, and channels",
            "definition": "A configurable platform capability that provides real-time operations centre, specifically: dedicated function and tooling for intraday monitoring, intervention, and escalation across all active queues, sites, and channels. This capability is a key component of the Real-Time Operations Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements real-time operations centre to dedicated function and tooling for intraday monitoring, intervention, and escalation across all acti; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Live service level dashboard: real-time view of service levels, queue depth, agent occupancy, AHT, and abandonment rate across all channels and sites, refreshed every 15–30 seconds",
            "definition": "An integrated function within the CCaaS ecosystem that manages live service level dashboard, specifically: real-time view of service levels, queue depth, agent occupancy, AHT, and abandonment rate across all channels and sites, refreshed every 15–30 seconds. This capability is a key component of the Real-Time Operations Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements live service level dashboard to real-time view of service levels, queue depth, agent occupancy, aht, and abandonment rate across all; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Intraday reforecasting: continuous revision of remaining-day volume forecasts based on actual arrival patterns, updated every 30–60 minutes during operational hours",
            "definition": "A structured enterprise function that delivers intraday reforecasting, specifically: continuous revision of remaining-day volume forecasts based on actual arrival patterns, updated every 30–60 minutes during operational hours. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements intraday reforecasting to continuous revision of remaining-day volume forecasts based on actual arrival patterns, updated ever; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Intraday staffing adjustment: real-time decisions to flex headcount (call in reserve agents, cancel breaks, extend shifts, initiate overtime) based on reforecast data",
            "definition": "A configurable platform capability that provides intraday staffing adjustment, specifically: real-time decisions to flex headcount (call in reserve agents, cancel breaks, extend shifts, initiate overtime) based on reforecast data. As part of Real-Time Operations Management, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements intraday staffing adjustment to real-time decisions to flex headcount (call in reserve agents, cancel breaks, extend shifts, initiat; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Queue intervention tooling: real-time queue rebalancing, overflow routing activation, inter-site skill transfer, and priority queue adjustments without supervisor-level system access",
            "definition": "A configurable platform capability that provides queue intervention tooling, specifically: real-time queue rebalancing, overflow routing activation, inter-site skill transfer, and priority queue adjustments without supervisor-level system access. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A financial services firm's regulated advice centre implements queue intervention tooling to real-time queue rebalancing, overflow routing activation, inter-site skill transfer, and priority qu; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — saving £250K annually in operational overhead."
          },
          {
            "name": "Wallboard management: dynamic, role-appropriate wallboard content pushed to site screens and supervisor dashboards in real time",
            "definition": "The end-to-end process and technology that governs wallboard management, specifically: dynamic, role-appropriate wallboard content pushed to site screens and supervisor dashboards in real time. This is a mandatory element of the Real-Time Operations Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements wallboard management to dynamic, role-appropriate wallboard content pushed to site screens and supervisor dashboards in real; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Escalation management: documented protocols and tooling for live escalation of calls, service failures, system outages, or major incident response during operational hours",
            "definition": "The end-to-end process and technology that governs escalation management, specifically: documented protocols and tooling for live escalation of calls, service failures, system outages, or major incident response during operational hours. This is a mandatory element of the Real-Time Operations Management capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements escalation management to documented protocols and tooling for live escalation of calls, service failures, system outages, or; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Real-time agent state monitoring: identify and action agents in prolonged wrap-up, extended break, or unexpected non-availability",
            "definition": "The enterprise-grade capability responsible for real-time agent state monitoring, specifically: identify and action agents in prolonged wrap-up, extended break, or unexpected non-availability. This capability is a key component of the Real-Time Operations Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements real-time agent state monitoring to identify and action agents in prolonged wrap-up, extended break, or unexpected non-availability; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Outage and incident bridge: standing bridge capability for real-time operations to coordinate with IT, vendor support, and site management during platform or telephony incidents",
            "definition": "The organisational capability responsible for outage and incident bridge, specifically: standing bridge capability for real-time operations to coordinate with IT, vendor support, and site management during platform or telephony incidents. Effective implementation of this sub-capability within Real-Time Operations Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements outage and incident bridge to standing bridge capability for real-time operations to coordinate with it, vendor support, and site; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Operations duty manager role: defined 24/7 on-call function with authority to make intraday decisions across all sites and channels",
            "definition": "The organisational capability responsible for operations duty manager role, specifically: defined 24/7 on-call function with authority to make intraday decisions across all sites and channels. Effective implementation of this sub-capability within Real-Time Operations Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements operations duty manager role to defined 24/7 on-call function with authority to make intraday decisions across all sites and channel; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          },
          {
            "name": "Schedule exception management: real-time processing of unplanned absences, late arrivals, and emergency leave with immediate staffing impact calculation",
            "definition": "The systematic approach to delivering schedule exception management, specifically: real-time processing of unplanned absences, late arrivals, and emergency leave with immediate staffing impact calculation. This capability is a key component of the Real-Time Operations Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements schedule exception management to real-time processing of unplanned absences, late arrivals, and emergency leave with immediate staffi; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Daily operational handover: structured shift handover process documenting active incidents, staffing position, queue status, and outstanding actions across time zones",
            "definition": "The enterprise-grade capability responsible for daily operational handover, specifically: structured shift handover process documenting active incidents, staffing position, queue status, and outstanding actions across time zones. This capability is a key component of the Real-Time Operations Management domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements daily operational handover to structured shift handover process documenting active incidents, staffing position, queue status, and; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Customer impact reporting: real-time visibility of customer-facing SLA performance for escalation to senior leadership and client-facing teams",
            "definition": "A configurable platform capability that provides customer impact reporting, specifically: real-time visibility of customer-facing SLA performance for escalation to senior leadership and client-facing teams. Effective implementation of this sub-capability within Real-Time Operations Management requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A healthcare provider's patient services centre implements customer impact reporting to real-time visibility of customer-facing sla performance for escalation to senior leadership and clie; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing agent attrition by 18% over 6 months."
          }
        ],
        "int": [
          "CCaaS / Contact Centre Platform – primary source of all real-time ACD statistics, queue data, and agent state feeds",
          "WFM – intraday management operates within WFM-produced schedule; real-time adherence alerts and exception management",
          "Reporting & Analytics – real-time operational dashboard as primary RTOC tool",
          "ITSM / Incident Management – live incident bridge integration; P1 incident escalation path to IT operations",
          "Interaction Recording – RTOC can access live calls for quality monitoring during escalations",
          "HR / HRIS – emergency absence processing and real-time headcount confirmation",
          "Communications platforms (Teams, Slack, WhatsApp) – rapid internal comms during incidents and intraday escalation",
          "Carrier / PSTN management – emergency call rerouting during telephony incidents"
        ],
        "glo": [
          "Follow-the-sun operations: RTOC function must operate 24/7, with handovers across time zones – typically Americas, EMEA, APAC shift patterns",
          "Multi-site real-time visibility: a single RTOC must be able to see and act on queues and agent states across all global sites simultaneously",
          "Language barriers in intraday management: RTOC communications to site supervisors in different countries may require translation or bilingual leads",
          "Regulatory constraints on intraday interventions: some jurisdictions limit the ability to extend shifts or require minimum break periods that restrict intraday staffing flexibility",
          "Public holiday unpredictability: local public holidays (which may not always be planned in advance in some regions) cause sudden volume spikes requiring RTOC intervention",
          "Carrier and PSTN incident management: RTOC must have direct relationships with in-country carriers for emergency rerouting, as escalation paths and SLAs differ by country",
          "Data privacy: real-time agent monitoring tools must be disclosed to agents and comply with works council agreements in applicable geographies",
          "Disaster and geopolitical risk: RTOC requires protocols for site evacuation, natural disaster response, civil unrest, or political events affecting site operability"
        ]
      },
      {
        "title": "Programme & Transformation Governance",
        "category": "CCaaS Implementation | Change Programme | Strategic Delivery",
        "usecase": "A 24-month CCaaS transformation programme uses a structured governance framework with a programme board, fortnightly steering committee, RAID log, and benefits realisation tracker; when a critical integration dependency slips, the escalation path routes to the CTO within 48 hours.",
        "sub": [
          {
            "name": "Programme governance structure: Programme Board, Steering Committee, workstream leads, RACI matrix, and escalation path for the CCaaS transformation programme",
            "definition": "A configurable platform capability that provides programme governance structure, specifically: Programme Board, Steering Committee, workstream leads, RACI matrix, and escalation path for the CCaaS transformation programme. This capability is a key component of the Programme & Transformation Governance domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements programme governance structure to programme board, steering committee, workstream leads, raci matrix, and escalation path for the ccaa; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Programme Business Case: total cost of ownership (TCO), benefits realisation model, NPV/IRR, sensitivity analysis, and ongoing investment approval governance",
            "definition": "The enterprise-grade capability responsible for programme business case, specifically: total cost of ownership (TCO), benefits realisation model, NPV/IRR, sensitivity analysis, and ongoing investment approval governance. This capability is a key component of the Programme & Transformation Governance domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements programme business case to total cost of ownership (tco), benefits realisation model, npv/irr, sensitivity analysis, and ongoin; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Vendor selection governance: RFI/RFP process, evaluation scoring framework, proof of concept (PoC) design, commercial negotiation governance, and contract award sign-off",
            "definition": "A configurable platform capability that provides vendor selection governance, specifically: RFI/RFP process, evaluation scoring framework, proof of concept (PoC) design, commercial negotiation governance, and contract award sign-off. This capability is a key component of the Programme & Transformation Governance domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "A UK-based insurance company's contact centre implements vendor selection governance to rfi/rfp process, evaluation scoring framework, proof of concept (poc) design, commercial negotiation; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing manual effort by 40% and improving audit readiness."
          },
          {
            "name": "Solution architecture governance: Architecture Review Board (ARB) process, design authority, technical standards enforcement, and deviation management",
            "definition": "The systematic approach to delivering solution architecture governance, specifically: Architecture Review Board (ARB) process, design authority, technical standards enforcement, and deviation management. Within the Operations & Governance pillar, this sub-capability directly impacts agent productivity, customer experience, and regulatory compliance.",
            "usecase": "A multinational retail bank's customer service operation implements solution architecture governance to architecture review board (arb) process, design authority, technical standards enforcement, and devi; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — improving first contact resolution by 12 percentage points."
          },
          {
            "name": "Programme planning and scheduling: integrated master plan (IMP) across all workstreams with milestone tracking, dependency management, and critical path analysis",
            "definition": "The systematic approach to delivering programme planning and scheduling, specifically: integrated master plan (IMP) across all workstreams with milestone tracking, dependency management, and critical path analysis. Effective implementation of this sub-capability within Programme & Transformation Governance requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements programme planning and scheduling to integrated master plan (imp) across all workstreams with milestone tracking, dependency management; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Risk and issue management: programme risk register, issue log, risk scoring (probability × impact), mitigation planning, and executive risk reporting",
            "definition": "A structured enterprise function that delivers risk and issue management, specifically: programme risk register, issue log, risk scoring (probability × impact), mitigation planning, and executive risk reporting. This capability is a key component of the Programme & Transformation Governance domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements risk and issue management to programme risk register, issue log, risk scoring (probability × impact), mitigation planning, and ex; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Benefits tracking and realisation: baseline KPI establishment pre-implementation, phased benefits capture plan, and post-implementation benefits audit",
            "definition": "The systematic approach to delivering benefits tracking and realisation, specifically: baseline KPI establishment pre-implementation, phased benefits capture plan, and post-implementation benefits audit. As part of Programme & Transformation Governance, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements benefits tracking and realisation to baseline kpi establishment pre-implementation, phased benefits capture plan, and post-implementation; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Workstream delivery management: parallel management of HR, IT, operations, compliance, and technology workstreams with inter-dependency coordination",
            "definition": "The systematic approach to delivering workstream delivery management, specifically: parallel management of HR, IT, operations, compliance, and technology workstreams with inter-dependency coordination. This is a mandatory element of the Programme & Transformation Governance capability that must be addressed during CCaaS platform selection, implementation, and ongoing operations.",
            "usecase": "A global BPO running operations across 8 countries implements workstream delivery management to parallel management of hr, it, operations, compliance, and technology workstreams with inter-depende; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — achieving 99.5% compliance on regulatory obligations."
          },
          {
            "name": "Migration strategy and sequencing: phased site-by-site or capability-by-capability migration plan from legacy platform to CCaaS, with rollback procedures",
            "definition": "A structured enterprise function that delivers migration strategy and sequencing, specifically: phased site-by-site or capability-by-capability migration plan from legacy platform to CCaaS, with rollback procedures. As part of Programme & Transformation Governance, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A travel company's multi-channel support operation implements migration strategy and sequencing to phased site-by-site or capability-by-capability migration plan from legacy platform to ccaas, with r; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — enabling the team to scale from 500 to 800 agents without additional supervisors."
          },
          {
            "name": "Testing governance: UAT strategy, test entry/exit criteria, defect triage and severity classification, go/no-go decision framework",
            "definition": "A structured enterprise function that delivers testing governance, specifically: UAT strategy, test entry/exit criteria, defect triage and severity classification, go/no-go decision framework. Effective implementation of this sub-capability within Programme & Transformation Governance requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements testing governance to uat strategy, test entry/exit criteria, defect triage and severity classification, go/no-go decision; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Cutover and go-live management: hypercare model (elevated support in the weeks post go-live), cutover run-book, war room protocols, and rollback triggers",
            "definition": "The operational discipline and tooling that enables cutover and go-live management, specifically: hypercare model (elevated support in the weeks post go-live), cutover run-book, war room protocols, and rollback triggers. As part of Programme & Transformation Governance, this function integrates with multiple adjacent systems and must operate reliably at scale across all contact centre sites and channels.",
            "usecase": "A telecoms provider with 2,000 contact centre agents implements cutover and go-live management to hypercare model (elevated support in the weeks post go-live), cutover run-book, war room protocols; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — cutting average handling time by 90 seconds per interaction."
          },
          {
            "name": "Post-implementation review (PIR): structured assessment of delivery outcomes vs. business case, lessons learned, and continuous improvement backlog",
            "definition": "The enterprise-grade capability responsible for post-implementation review, specifically: structured assessment of delivery outcomes vs. business case, lessons learned, and continuous improvement backlog. Effective implementation of this sub-capability within Programme & Transformation Governance requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements post-implementation review to structured assessment of delivery outcomes vs. business case, lessons learned, and continuous improv; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          },
          {
            "name": "Data migration governance: data mapping, cleansing, validation, and migration run-book for transferring active data from legacy platforms to new systems",
            "definition": "The enterprise-grade capability responsible for data migration governance, specifically: data mapping, cleansing, validation, and migration run-book for transferring active data from legacy platforms to new systems. This capability is a key component of the Programme & Transformation Governance domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements data migration governance to data mapping, cleansing, validation, and migration run-book for transferring active data from legacy; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Training and readiness governance: agent, supervisor, and management training completion thresholds as go-live gates",
            "definition": "A structured enterprise function that delivers training and readiness governance, specifically: agent, supervisor, and management training completion thresholds as go-live gates. This capability is a key component of the Programme & Transformation Governance domain and must be configured, governed, and continuously improved as part of the broader CCaaS transformation programme.",
            "usecase": "An energy company's customer operations team implements training and readiness governance to agent, supervisor, and management training completion thresholds as go-live gates; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — increasing customer satisfaction scores by 8 points."
          },
          {
            "name": "Stakeholder management and communications: stakeholder map, engagement plan, executive reporting cadence, and client/partner communication framework",
            "definition": "The systematic approach to delivering stakeholder management and communications, specifically: stakeholder map, engagement plan, executive reporting cadence, and client/partner communication framework. Effective implementation of this sub-capability within Programme & Transformation Governance requires cross-functional collaboration between operations, technology, and compliance teams.",
            "usecase": "A government services contact centre handling citizen enquiries implements stakeholder management and communications to stakeholder map, engagement plan, executive reporting cadence, and client/partner communication fram; after configuration within the CCaaS platform and integration with adjacent systems, the deployment delivers measurable results — reducing escalation rates by 25% within the first quarter."
          }
        ],
        "int": [
          "PMO tooling (Microsoft Project, Smartsheet, Jira, Monday.com) – programme planning, task tracking, milestone management",
          "Risk and governance platform (ServiceNow GRC, Confluence) – risk register, decision log, design documentation",
          "Financial management / ERP – programme budget tracking, purchase order management, cost reporting",
          "HR / HRIS – resource allocation, contractor engagement, role definition for programme team",
          "Vendor Management – contract and SLA management during implementation phase",
          "Testing platform (Jira Xray, TestRail, Zephyr) – test case management and defect tracking",
          "Change management platform – training readiness tracking, change impact log",
          "All capability domains – each domain is a delivery workstream within the programme"
        ],
        "glo": [
          "Multi-country deployment sequencing: prioritisation of which geographies go live first should account for regulatory complexity, site size, and dependency on shared infrastructure",
          "Local regulatory approval timelines: some countries require regulatory notification or approval before deploying new contact centre technology (TRAI India, ANATEL Brazil, FCA UK for material changes to regulated firms)",
          "Works council and union consultation: in Germany, France, and other co-determination jurisdictions, system changes affecting working conditions require works council approval before deployment – lead times of 3–6 months must be built into programme plan",
          "Local entity and legal considerations: new CCaaS contracts may require local entity signature; inter-company agreements for shared platform use across jurisdictions",
          "Data migration and residency: data migration from legacy systems must respect residency rules – data extracted from in-country systems for migration must remain in-country or have appropriate transfer basis",
          "Time zone programme management: a global programme team must operate across multiple time zones with asynchronous governance and documentation standards",
          "Multi-currency budget management: programme costs will be incurred in multiple currencies; FX risk management and budget reforecasting required",
          "Language requirements for programme documentation: technical and operational documentation may need translation for local workstream leads and site managers",
          "Local IT infrastructure readiness: network upgrades, hardware procurement, and carrier number porting in each country must be planned with local lead times in mind",
          "Hypercare and support model post go-live: in-country or near-shore support must be available in local languages and business hours during the hypercare period"
        ]
      }
    ]
  }
];
