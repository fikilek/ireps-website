export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#field-to-office" },
  { label: "Operations", href: "#operations" },
  { label: "Water", href: "#water" },
  { label: "Energy", href: "#energy" },
  { label: "GIS Maps", href: "#gis" },
  { label: "Vending", href: "#vending" },
  { label: "Dashboards", href: "#dashboards" },
  { label: "Request Demo", href: "#demo" },
];

export const heroStats = [
  { label: "ERFs", value: "5,394" },
  { label: "Premises", value: "6,812" },
  { label: "Meters", value: "8,462" },
  { label: "Workorders", value: "248" },
  { label: "Teams", href: "#teams" },
  { label: "Geofences", href: "#geofences" },
  { label: "Readings", value: "97%" },
  { label: "Revenue checks", value: "Live" },
];

export const modules = [
  {
    title: "Ward-scoped infrastructure management",
    text: "Manage ERFs, premises, meters, workorders, and field activity through a clear municipal ward operating model.",
  },
  {
    title: "Mobile field operations",
    text: "Support fieldworkers with structured capture, evidence media, GPS context, offline saving, and controlled submissions.",
  },
  {
    title: "Meter lifecycle transactions",
    text: "Track inspections, readings, removals, disconnections, reconnections, commissioning, and other meter lifecycle work.",
  },
  {
    title: "Workorder Management System",
    text: "Issue, accept, reject, reassign, cancel, execute, and monitor field work through traceable operational transactions.",
  },
];

export const operationSteps = ["Issue", "Accept", "Execute", "Report"];

export const waterNetworkSteps = [
  "Source",
  "Treatment",
  "Storage",
  "Distribution",
  "Consumer",
  "Meter Reading",
  "Billing",
  "Revenue",
  "Credit Control",
];

export const energyNetworkSteps = [
  "Service Connection",
  "Meter Installation",
  "Meter Discovery",
  "Meter Reading",
  "Meter Decommissioning",
  "Billing",
  "Revenue",
  "Credit Control",
  "Meter Disconnection",
  "Meter Reconnection",
];

export const waterValueCards = [
  "Track infrastructure from source to consumer",
  "Support leakage and loss investigation points",
  "Strengthen consumer meter reading quality",
  "Improve billing-readiness for water services",
];

export const energyValueCards = [
  "Track electricity infrastructure down to meter level",
  "Support meter lifecycle work and field verification",
  "Improve reading quality for conventional meters",
  "Strengthen revenue protection and credit control actions",
];

export const valueCards = [
  "Improve revenue collection through authentic field data",
  "Strengthen municipal infrastructure visibility",
  "Support water, sanitation, and energy operations",
  "Create auditable records for every field transaction",
];

export const dashboardMetricCards = [
  { label: "Completed Workorders", value: "1,284", note: "+18% this month" },
  { label: "Meter Readings", value: "97%", note: "verified capture rate" },
  { label: "No Access Cases", value: "43", note: "requires follow-up" },
  { label: "Revenue Exceptions", value: "76", note: "flagged for review" },
];

export const dashboardBarData = [
  { label: "Mon", value: 46 },
  { label: "Tue", value: 72 },
  { label: "Wed", value: 58 },
  { label: "Thu", value: 88 },
  { label: "Fri", value: 64 },
  { label: "Sat", value: 39 },
];

export const dashboardTableRows = [
  {
    ward: "Ward 06",
    workorders: "248",
    readings: "97%",
    exceptions: "12",
    status: "On Track",
  },
  {
    ward: "Ward 09",
    workorders: "196",
    readings: "92%",
    exceptions: "18",
    status: "Review",
  },
  {
    ward: "Ward 13",
    workorders: "302",
    readings: "98%",
    exceptions: "7",
    status: "Strong",
  },
];

export const gisFeatureCards = [
  {
    title: "Ward-scoped maps",
    text: "View infrastructure and operational activity through municipal wards, local municipalities, and defined operating areas.",
  },
  {
    title: "ERFs, premises, and meters",
    text: "Visualize land parcels, premises, service points, and meters in one spatial operating view.",
  },
  {
    title: "Geofences and work areas",
    text: "Use custom polygons to group infrastructure, plan field campaigns, and support targeted operational reporting.",
  },
  {
    title: "Map and table alignment",
    text: "Keep map-visible data and table-visible data aligned so managers see one consistent operational picture.",
  },
];

export const gisLayerItems = [
  "LM boundary",
  "Ward boundaries",
  "ERFs",
  "Premises",
  "Meters",
  "Geofences",
  "Workorders",
  "Revenue exceptions",
];

export const teamFeatureCards = [
  {
    title: "Field team coordination",
    text: "Group fieldworkers and supervisors into operational teams for clearer work allocation, monitoring, and accountability.",
  },
  {
    title: "Role-aware operations",
    text: "Support manager, supervisor, and fieldworker workflows through controlled work assignment and execution paths.",
  },
  {
    title: "Workload visibility",
    text: "Help managers see who is assigned, who accepted work, who completed work, and where follow-up is needed.",
  },
  {
    title: "Team-based campaigns",
    text: "Prepare for meter reading, inspection, discovery, disconnection, reconnection, and other field campaigns by team.",
  },
];

export const teamFlowSteps = [
  "Manager",
  "Supervisor",
  "Team",
  "Fieldworker",
  "Workorder",
  "Execution",
  "Report",
];

export const teamCards = [
  {
    name: "Meter Reading Team",
    members: "12 field users",
    focus: "Monthly readings",
  },
  {
    name: "Inspection Team",
    members: "8 field users",
    focus: "Meter verification",
  },
  {
    name: "Revenue Protection Team",
    members: "6 field users",
    focus: "Exceptions and follow-up",
  },
];

export const geofenceFeatureCards = [
  {
    title: "Custom work areas",
    text: "Draw operational areas around infrastructure, settlements, campaigns, or service zones without changing ward parentage.",
  },
  {
    title: "Campaign targeting",
    text: "Use geofences to plan focused work such as meter reading drives, inspections, discovery, or revenue protection checks.",
  },
  {
    title: "Spatial reporting",
    text: "Compare infrastructure, meters, workorders, exceptions, and field outcomes inside defined operating areas.",
  },
  {
    title: "Map-based planning",
    text: "Support managers with a visual view of where work is concentrated and where field teams must focus next.",
  },
];

export const geofenceMetrics = [
  { label: "ERFs inside", value: "418" },
  { label: "Premises inside", value: "506" },
  { label: "Meters inside", value: "623" },
  { label: "Open workorders", value: "37" },
];

export const vendingFlowSteps = [
  "Prepaid Meter",
  "Vending Platform",
  "Token / Vend",
  "Customer",
  "Consumption",
  "Revenue",
  "Exceptions",
  "Field Follow-up",
];

export const vendingFeatureCards = [
  {
    title: "Prepaid platform linkage",
    text: "Position iREPS to link prepaid meter records with vending platform activity, token history, and revenue monitoring.",
  },
  {
    title: "Vending confirmation",
    text: "Support field verification where prepaid commissioning, vending confirmation, keypad issue, and evidence capture are required.",
  },
  {
    title: "Revenue exceptions",
    text: "Help identify meters with infrastructure records but weak vending activity, missing vending confirmation, or suspicious patterns.",
  },
  {
    title: "Field follow-up",
    text: "Turn vending exceptions into inspection, disconnection, reconnection, meter reading, or revenue protection workorders.",
  },
];

export const vendingMetricCards = [
  { label: "Linked prepaid meters", value: "4,218" },
  { label: "Vending confirmed", value: "96%" },
  { label: "Revenue exceptions", value: "52" },
  { label: "Follow-up workorders", value: "31" },
];

export const fieldToOfficeSteps = [
  "FWR visits the meter kiosk",
  "iREPS Mobile guides the field form",
  "Photos, GPS, meter details, and outcome are captured",
  "Data is submitted to the cloud",
  "MNG reviews the work on iREPS Web/Desktop",
  "Dashboards, maps, reports, and workorders support decisions",
];

export const fieldToOfficeCards = [
  {
    title: "Field capture",
    text: "Fieldworkers collect structured meter and infrastructure data on site using iREPS Mobile.",
  },
  {
    title: "Cloud submission",
    text: "Completed forms, evidence, GPS context, and workflow outcomes are submitted to the cloud.",
  },
  {
    title: "Office intelligence",
    text: "Managers use iREPS Web/Desktop to review dashboards, GIS maps, reports, and operational work queues.",
  },
];
