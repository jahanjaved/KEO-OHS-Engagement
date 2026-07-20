const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const LEGAL=[
'ADOSH-SF CoP 2.0 - Personal Protective Equipment','ADOSH-SF CoP 3.0 - Occupational Noise','ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 17.0 - Safety Signage and Signals','ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 28.0 - Hot Work Operations','ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 33.0 - Working On or Adjacent to a Road','ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 42.0 - Pre Cast Construction','ADOSH-SF CoP 43.0 - Temporary Structures','ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 53.0 - OSH Management During Construction Work','ADOSH-SF CoP 53.1 - OSH Construction Management Plan','ADOSH-SF CoP 54.0 - Waste Management','ADCD 2018 Fire & Life Safety Code of Practice','Aldar OSH MS Rev-08','Project Approved OSH Plan','OSH Construction Management Plan','MSRA'];
const PRESETS={
'Access and Egress':{root:'Poor planning / Poor supervision',desc:['It was observed that villa access and egress routes were obstructed by construction materials, debris, cables and temporary works, affecting safe movement and emergency access.','It was evident that unsafe access arrangements such as single planks, poorly maintained access bridges or damaged temporary steps were being used to reach villas, excavations or workstations.','Lack of dedicated, demarcated and inspected pedestrian access was observed, creating slip, trip and fall hazards.'],imm:['Unsafe access routes were restricted immediately and workers were redirected to safer access points until rectification was completed.','The responsible engineer and supervision team were instructed to remove obstructions and restore safe access without delay.','Work was held at the affected location where safe access and egress could not be ensured.'],act:['All unsafe and substandard access arrangements shall be removed immediately and replaced with safe access bridges, ramps, stairs or platforms in line with approved design and project requirements.','All access and egress routes shall be kept clear of materials, cables, debris and protruding steel at all times.','A dedicated team shall be appointed for access bridge installation, inspection and routine maintenance.','Access routes shall be clearly demarcated, provided with suitable signage and inspected by competent supervision on a daily basis.','The permit-to-work approval shall include physical verification of safe access and housekeeping conditions prior to allowing work to proceed.','The workforce and supervisors shall be briefed on the importance of maintaining safe access and emergency egress arrangements.'],legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 22.0 - Barricading of Hazards','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA']},
'Permit to Work':{root:'PTW system failure / Lack of field verification',desc:['It was observed that critical activities were being carried out without a valid permit to work or without adequate physical verification of the work location.','Permits were issued, signed or approved without confirming actual site conditions, supervision, access, isolation and required control measures.','The PTW document did not adequately identify the hazards and controls present at the work front.'],imm:['The affected activity was stopped immediately and the permit was placed on hold pending full site verification.','The permit issuer, area engineer, HSE team and responsible supervisor were called to the location to review the PTW status and actual work conditions.','Work was not allowed to resume until the permit conditions, supervision and control measures were physically verified.'],act:['All activities found outside PTW control shall be immediately suspended until a valid permit is issued and approved by authorised personnel after physical site verification.','The PTW system shall remain under the control of the main contractor, and permits shall not be signed or authorised without field verification.','All incomplete, incorrectly drafted or non-compliant PTWs shall be cancelled and revalidated only after required controls are implemented.','The roles and responsibilities of permit issuer, receiver, approver and verifier shall be clearly communicated to engineers, supervisors and HSE personnel.','PTW audits shall be conducted routinely to verify permit quality, site control implementation and closeout evidence.','Repeated PTW non-compliance shall be escalated to project management and enforcement action shall be taken against responsible personnel.'],legal:['ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 53.0 - OSH Management During Construction Work','Aldar OSH MS Rev-08','Project Approved OSH Plan','OSH Construction Management Plan','MSRA']},
'Work at Height':{root:'Poor supervision / PTW failure / Planning failure',desc:['Operatives were observed working at height near leading edges, rooftops or elevated platforms without adequate fall prevention arrangements.','Ladders were being used as working platforms for activities where proper scaffold, mobile tower or working platform was required.','Work at height activities were being carried out without adequate PTW control, safe access, competent supervision or full body harness anchorage where required.'],imm:['All unsafe work at height activities were stopped immediately and workers were removed from the elevated work area.','The affected area was isolated and access below the work at height activity was restricted to control falling object exposure.','The responsible supervision team was instructed to verify working platform, edge protection, PTW and PPE requirements before restart.'],act:['All work at height activities shall be suspended where adequate safe access, working platform, fall prevention or PTW controls are not in place.','Suitable working platforms such as compliant scaffolds, mobile towers or MEWPs shall be provided; ladders shall not be used as working platforms.','Full body harnesses with suitable anchorage shall be used where fall prevention is not fully achieved by collective protection.','The work area shall be inspected by competent supervision prior to work and continuously monitored during the activity.','Workers and supervisors shall receive task-specific WAH training, toolbox talks and awareness on stop-work requirements.','No rooftop or leading edge activity shall proceed without formal authorisation, PTW approval and physical verification by competent supervision.'],legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 37.0 - Ladders','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Scaffolding':{root:'Inspection failure / Inadequate competence',desc:['Scaffolding was observed in unsafe condition, including missing components, unsecured planks, improper access ladders, missing toe boards, lack of outriggers, unstable alignment or unauthorised modification.','Mobile or aluminium scaffolds were used without compliance with manufacturer requirements, approved design or valid inspection/tagging controls.','Red-tagged or partially erected scaffolds were observed being used for work activities.'],imm:['Unsafe scaffold use was stopped immediately and the scaffold was restricted from use until rectified and inspected by a competent person.','The green tag was instructed to be removed where scaffolding was not compliant, and the scaffold was placed under red-tag control.','Workers were removed from the unsafe scaffold arrangement and the area was controlled to prevent unauthorised access.'],act:['All non-compliant scaffolds shall be taken out of service immediately and shall not be used until fully rectified and inspected.','Scaffolds shall be erected, modified and dismantled only by competent scaffolders in accordance with the approved design and manufacturer instructions.','All required components including guardrails, mid rails, toe boards, bracing, base plates, outriggers, access ladders and locking pins shall be installed before use.','Unauthorised scaffold modifications and loose plank arrangements shall be removed immediately.','A competent scaffolding inspector shall inspect and tag scaffolds after erection, modification, adverse weather or any condition affecting stability.','Routine scaffold inspections shall be tracked, and repeated non-compliances shall be escalated to management.'],legal:['ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 37.0 - Ladders','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA']},
'Excavation':{root:'Poor planning / Inadequate barricading',desc:['Boundary wall, MEP or service excavations were found without hard barricades, warning signs, safe access or adequate edge protection.','Materials, blocks or debris were stored close to excavation edges, creating risk of collapse, falling materials and instability.','Excavation work was observed without adequate PTW control, competent supervision or daily inspection records.'],imm:['Unsafe excavation activity was stopped immediately and access to the excavation edge was restricted.','The responsible engineer and HSE team were instructed to provide hard barricades, warning signage and safe access arrangements without delay.','Materials near the excavation edge were instructed to be removed to maintain safe setback distance.'],act:['All excavation areas shall be protected with rigid barricades or approved hard barriers, warning signs and safe access/egress arrangements.','Materials, blocks, equipment and spoil shall be kept away from excavation edges to maintain safe setback distance and prevent collapse.','Excavation PTW shall be implemented and verified before starting work, including competent person inspection and required protective measures.','Open excavations near villa access, pedestrian routes and live roads shall be clearly demarcated and inspected daily.','Where required, benching, sloping, shoring or other engineered controls shall be implemented in line with approved MSRA.','Supervision teams shall conduct continuous monitoring and brief the workforce on excavation hazards.'],legal:['ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 17.0 - Safety Signage and Signals','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Barricading Hazards / Floor Openings':{root:'Poor maintenance / Inspection failure',desc:['Floor openings, manholes, stair landings, roof edges, temporary structures or excavation edges were not adequately protected, barricaded or covered.','Barricades were found slanted, incomplete, removed or not maintained, and protruding rebars were not protected.','Unsuitable materials such as thin plywood or temporary covers were used to cover openings, creating fall, trip and falling object hazards.'],imm:['Access to the affected hazard area was restricted immediately and temporary control measures were implemented.','The responsible team was instructed to reinstate suitable barricading, covers, toe boards and signage without delay.','Workers were prevented from entering the unsafe area until the barricading and opening protection were verified.'],act:['All floor openings, manholes, leading edges, stair openings and excavation edges shall be protected using rigid barricades, suitable covers or guardrail systems as applicable.','Covers shall be secured, load-bearing and clearly identified; unsuitable materials shall be removed immediately.','Protruding rebars shall be removed where possible or protected with mushroom-type rebar caps.','Toe boards and handrails shall be reinstated where missing, and barricades shall be installed as per design and legal requirements.','A dedicated maintenance team shall inspect and maintain barricades continuously, especially near live roads, pedestrian routes and workstations.','Routine inspections shall be recorded, and repeated removal of barricades shall be escalated for enforcement action.'],legal:['ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 17.0 - Safety Signage and Signals','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Edge Protection':{root:'Poor supervision / Poor maintenance',desc:['Edge protection was missing, incomplete, improperly anchored or not securely fixed at leading edges, windows, roofs, lift shafts or access areas.','Toe boards were missing above access areas, creating risk of falling materials from height.','Makeshift edge protection arrangements were observed and did not meet legal or project requirements.'],imm:['Unsafe work near exposed leading edges was stopped immediately and access to the affected area was restricted.','The responsible area engineer and supervision team were called to the location and instructed to rectify the unsafe condition.','The affected area was isolated and workers were stopped from accessing exposed edges until protection was verified.'],act:['All activities near unprotected leading edges shall be suspended until adequate edge protection is installed and verified.','Edge protection shall include complete guardrail systems with top rails, mid rails and toe boards in accordance with legal and project requirements.','All edge protection systems shall be properly anchored, aligned and secured to prevent displacement during use.','All missing, loose or damaged sections shall be reinstated immediately to maintain continuous protection.','A comprehensive inspection of all edge protection across the work area shall be carried out by site supervision and OSH team.','Edge protection shall not be removed until all roof, MEP and related activities are fully completed and safe conditions are confirmed.'],legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Electrical Safety / Portable Tools':{root:'Inspection failure / Inadequate maintenance',desc:['Temporary electrical arrangements, DBs, generators, cables or portable tools were observed with poor earthing, damaged cables, poor cable management, missing inspections or unsafe power tapping.','Live or flexible cables were routed across roads, access routes, wet areas or metal surfaces without adequate protection.','PAT requirements, colour coding, DB inspection stickers or earth pit inspection details were missing or not maintained.'],imm:['Unsafe electrical equipment and defective tools were removed from use immediately and the affected system was isolated where required.','A competent electrical team was instructed to inspect DBs, generators, cables, earthing and tools before further use.','Workers were kept away from unsafe electrical arrangements until rectification and verification were completed.'],act:['A dedicated competent electrical team shall be appointed for inspection, installation and maintenance of temporary electrical arrangements.','All DBs, generators, cables and portable tools shall be inspected, tagged, colour coded and maintained with records.','Earthing arrangements shall be provided and verified for generators, DBs and tower lights, including earth pit identification and next inspection details.','Damaged cables, defective sockets, poor cable routing and unauthorised power tapping shall be removed or rectified immediately.','Cables shall be routed using insulated hooks, poles, encasement or other suitable protection to prevent mechanical damage and trip hazards.','The workforce shall be trained on safe cable management and portable tool safety requirements.'],legal:['ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 36.0 - Plant and Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA']},
'Plant and Equipment':{root:'Poor inspection / Inadequate maintenance',desc:['Plant or equipment was observed in unsafe condition, including damaged wheels, defective fittings, missing fire extinguishers, poor cabin housekeeping, inadequate first aid boxes or unsafe modifications.','MEWPs or manlifts were observed being operated on uneven or unstable surfaces, creating risk of overturning and serious injury.','Equipment inspection stickers, emergency arrangements or safety controls were missing or not properly maintained.'],imm:['Unsafe plant or equipment was stopped immediately and removed from operation pending inspection by a competent person.','The responsible plant team and supervision were instructed to rectify defects and verify certification before further use.','Operators were instructed not to operate defective or unstable equipment until all safety controls were restored.'],act:['All plant and equipment shall be inspected by competent personnel before use and shall not operate with defects affecting safety.','Defective equipment, damaged accessories or unsafe modifications shall be removed from service immediately.','MEWPs and mobile plant shall operate only on firm, level and suitable ground with required emergency arrangements active.','Fire extinguishers, first aid boxes, cabin housekeeping, operator visibility and emergency controls shall be maintained.','Inspection records, third-party certificates and pre-use checklists shall be available and verified routinely.','Operators, supervisors and maintenance teams shall receive training on equipment safety and defect reporting requirements.'],legal:['ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 44.0 - Traffic Management and Logistics','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Material Storage / Fire Protection':{root:'Poor housekeeping / Fire risk controls not implemented',desc:['Materials, joinery, glass panels, chemicals or combustible items were stored in villas or storage areas without adequate segregation, access control, firefighting arrangements or protection.','Materials were over-stacked, stored near excavations, stored above sprinkler height or placed in undesignated areas affecting access and fire safety.','Fire extinguishers, hose reels, smoke detectors, labels, Civil Defence approvals or fire warden arrangements were missing or inadequate.'],imm:['Unsafe storage conditions were controlled immediately and responsible teams were instructed to relocate, segregate or secure materials.','Fire protection deficiencies were communicated to the contractor for immediate rectification, including provision or replacement of firefighting equipment.','Access to unsafe storage areas was restricted until adequate control measures were implemented.'],act:['All materials shall be stored only in designated, approved and demarcated storage areas with safe access and emergency access maintained.','Combustible materials, chemicals and glass panels shall be properly segregated, labelled, protected and secured to prevent fire, collapse or injury.','Fire risk assessment shall be conducted for storage areas and adequate firefighting arrangements shall be provided and maintained.','Materials shall not be stored above sprinkler height or in a manner that blocks access, emergency routes or firefighting systems.','Dedicated fire wardens shall be appointed to conduct routine inspections of storage areas.','Civil Defence approvals, store layouts, emergency contacts, spill kits and required fire safety documentation shall be maintained where applicable.'],legal:['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 44.0 - Traffic Management and Logistics','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Traffic / Logistics / Precast':{root:'Poor logistics planning / Lack of control',desc:['Traffic and logistics arrangements were inadequate, including poor pedestrian segregation, missing flagman/banksman control, unsafe reversing or A-frame trailer load securing deficiencies.','Precast elements or materials were transported, loaded, unloaded or stored without adequate securing, exclusion zones or safe traffic interface controls.','Vehicles and plant movements were not adequately controlled near live roads, pedestrian routes or active work fronts.'],imm:['Unsafe vehicle or logistics movement was stopped immediately and the affected route was controlled.','Banksman/flagman control, exclusion zones and pedestrian segregation were instructed to be provided before further movement.','The responsible logistics team was called to review and correct the traffic interface arrangement.'],act:['A traffic and logistics plan shall be implemented and maintained, including pedestrian segregation, signage, speed control, illumination and banksman arrangements.','A-frame trailers and precast elements shall be secured as per approved MSRA and manufacturer/project requirements before movement.','Vehicle reversing and unloading activities shall be controlled by competent banksmen with exclusion zones maintained.','Materials and precast elements shall not be stored in undesignated areas or live traffic routes.','Routine logistics inspections shall verify that man-machine interface controls remain effective.','Drivers, banksmen and supervisors shall be briefed on project traffic management and load securing requirements.'],legal:['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 42.0 - Pre Cast Construction','ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 36.0 - Plant and Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Housekeeping / Waste Management':{root:'Poor supervision / Housekeeping failure',desc:['Poor housekeeping was observed, including construction debris, waste bags, loose materials and blocked access routes inside villas, around workstations and near excavation areas.','Waste accumulation created slip, trip, fire and access-related risks and affected safe movement during normal and emergency conditions.'],imm:['The affected area was instructed to be cleaned immediately and access routes were cleared from waste and loose materials.','Work was held where housekeeping conditions created unsafe access or trip hazards.','The responsible supervision team was instructed to establish waste collection arrangements without delay.'],act:['Post-shift housekeeping shall be implemented and made part of work completion and PTW closeout requirements.','Waste collection points shall be provided for each villa or work area, and waste shall be removed routinely.','Access routes, emergency routes and work fronts shall remain clear and free from debris, waste and loose materials.','Subcontractors shall be trained to remove waste from workstations at the end of each shift.','No waste bag, no PTW principle shall be applied where housekeeping arrangements are repeatedly poor.','Routine housekeeping inspections shall be conducted and repeated failures escalated to contractor management.'],legal:['ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 8.0 - General Workplace Amenities','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA']},
'PPE':{root:'Poor supervision / Lack of enforcement',desc:['Workers were observed carrying out activities without mandatory PPE or task-specific PPE required by the approved MSRA.','Portable power tools and work activities were observed without appropriate eye, face, hand or hearing protection.'],imm:['Workers without mandatory or task-specific PPE were stopped from continuing the activity until correct PPE was provided.','The responsible supervisor was instructed to verify PPE compliance before allowing work to continue.'],act:['All workers shall be provided with mandatory and task-specific PPE in accordance with the approved MSRA and task requirements.','Supervisors shall verify PPE compliance before and during work activities.','Workers shall be trained on correct use, maintenance and storage of PPE.','Routine inspections shall be conducted to identify and correct PPE non-compliance.','Enforcement or disciplinary action shall be implemented for repeated PPE violations.'],legal:['ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA']},
'Leadership / Supervision':{root:'Leadership failure / Poor subcontractor control',desc:['It was evident that engagement of construction managers, project engineers and non-OHS staff during the planned site walk was minimal or absent.','Main contractor and subcontractor supervision failed to identify, stop or escalate unsafe activities occurring at site.','The condition reflects poor planning, weak subcontractor control, lack of leadership presence and ineffective supervision.'],imm:['The unsafe activity was escalated immediately to contractor management for corrective action and accountability.','Responsible supervisors, engineers and HSE personnel were instructed to attend the location and confirm immediate controls.'],act:['Construction managers, project engineers, supervisors and HSE personnel shall ensure active leadership presence during site activities and planned inspections.','All subcontractor activities shall remain under the control and awareness of main contractor management.','Immediate retraining shall be conducted on stop-work authority, PTW field verification, escalation responsibilities and subcontractor control.','A corrective action plan shall be submitted within the required timeframe demonstrating how supervision gaps will be closed.','Enforcement or disciplinary action shall be initiated for repeated absence, failure to stop unsafe work or failure to escalate high-risk conditions.'],legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work','Aldar OSH MS Rev-08','OSH Construction Management Plan','Project Approved OSH Plan']},
'Other':{root:'Poor supervision',desc:['Unsafe conditions were observed during the inspection and require immediate corrective and preventive action by the responsible contractor.'],imm:['The unsafe condition was communicated immediately to the responsible site team and temporary control measures were implemented.'],act:['The contractor shall review the unsafe condition, identify the root cause and implement corrective and preventive actions to prevent recurrence.','Closeout evidence shall be submitted and verified by the responsible supervision and OSH team.','Lessons learned shall be communicated to relevant supervisors and workforce.'],legal:['Aldar OSH MS Rev-08','Project Approved OSH Plan','OSH Construction Management Plan']}
};

// Requested category aliases and package/cluster automation
const CATEGORY_ALIASES={
  'Falling Object Protection':'Barricading Hazards / Floor Openings',
  'PTW Field Verification':'Permit to Work',
  'MSRA Quality':'Permit to Work',
  'Lifting/Precast Installation':'Traffic / Logistics / Precast',
  'Traffic &man-Machine Interface':'Traffic / Logistics / Precast',
  'Traffic & Man-Machine Interface':'Traffic / Logistics / Precast',
  'Welfare Arrangement':'Access and Egress',
  'Fire Readiness':'Material Storage / Fire Protection',
  'supervision& Subcontractor Control':'Leadership / Supervision',
  'Supervision & Subcontractor Control':'Leadership / Supervision',
  'Temporary & Tool Safety':'Electrical Safety / Portable Tools',
  'Temporary Works & Tool Safety':'Electrical Safety / Portable Tools'
};
Object.entries(CATEGORY_ALIASES).forEach(([alias,base])=>{ if(!PRESETS[alias] && PRESETS[base]) PRESETS[alias]=JSON.parse(JSON.stringify(PRESETS[base])); });
if(PRESETS['Falling Object Protection']){PRESETS['Falling Object Protection'].root='Poor supervision / Inadequate falling object control';PRESETS['Falling Object Protection'].legal=['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan'];}
if(PRESETS['PTW Field Verification']) PRESETS['PTW Field Verification'].root='PTW field verification failure';
if(PRESETS['MSRA Quality']) PRESETS['MSRA Quality'].root='Poor MSRA implementation / Inadequate risk assessment';
if(PRESETS['Lifting/Precast Installation']){PRESETS['Lifting/Precast Installation'].root='Poor lifting control / Inadequate precast planning';PRESETS['Lifting/Precast Installation'].legal=['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 42.0 - Pre Cast Construction','ADOSH-SF CoP 36.0 - Plant and Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];}
['Traffic &man-Machine Interface','Traffic & Man-Machine Interface'].forEach(k=>{if(PRESETS[k]){PRESETS[k].root='Poor traffic management / Man-machine interface control failure';PRESETS[k].legal=['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 22.0 - Barricading of Hazards','Aldar OSH MS Rev-08','Project Approved OSH Plan'];}});
if(PRESETS['Welfare Arrangement']){PRESETS['Welfare Arrangement'].root='Poor welfare management / Inadequate amenities';PRESETS['Welfare Arrangement'].legal=['ADOSH-SF CoP 8.0 - General Workplace Amenities','Aldar OSH MS Rev-08','Project Approved OSH Plan'];}
if(PRESETS['Fire Readiness']){PRESETS['Fire Readiness'].root='Poor fire readiness / Inadequate emergency arrangements';PRESETS['Fire Readiness'].legal=['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 28.0 - Hot Work Operations','ADOSH-SF CoP 8.0 - General Workplace Amenities','Aldar OSH MS Rev-08','Project Approved OSH Plan'];}
['supervision& Subcontractor Control','Supervision & Subcontractor Control'].forEach(k=>{if(PRESETS[k]) PRESETS[k].root='Poor supervision / Poor subcontractor control / Leadership failure';});
['Temporary & Tool Safety','Temporary Works & Tool Safety'].forEach(k=>{if(PRESETS[k]){PRESETS[k].root='Poor temporary works and tool safety control';PRESETS[k].legal=['ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 43.0 - Temporary Structures','Aldar OSH MS Rev-08','Project Approved OSH Plan'];}});
const PACKAGE_CLUSTER_MAP={
  '2':['7A','7B','8A','8B','8C','8D'],
  '3':['3','4','5','6'],
  '4':['1A','1B','2A','2B','2C']
};
function updateClusterAndOwner(card, keep=false){
  const pkg=$('.package',card).value;
  const cluster=$('.cluster',card);
  const old=cluster.value;
  opt(cluster, PACKAGE_CLUSTER_MAP[pkg]||[], 'Select cluster / area');
  if(keep && old && (PACKAGE_CLUSTER_MAP[pkg]||[]).includes(old)) cluster.value=old;
  const owner=$('.actionOwner',card);
  if(pkg==='3') owner.value='Innovo';
  if(pkg==='2'||pkg==='4') owner.value='TAJV';
  updateArea(card);
}

const ADOSH_COP_CATEGORIES=[
'Hazardous Materials',
'Personal Protective Equipment',
'Occupational Noise',
'First Aid and Medical Emergency Treatment',
'Occupational Health Screening and Medical Surveillance',
'Emergency Management Requirements',
'General Workplace Amenities',
'Workplace Wellness',
'New and Expectant Mothers',
'Managing Work Related Stress',
'Rehabilitation and Return to Work',
'Safety in the Heat',
'Prevention and Control of Legionnaires Disease',
'Violence in the Workplace',
'Manual Handling and Ergonomics',
'Electrical Safety',
'OSH Requirements for People of Determination',
'Safety Signage and Signals',
'Employer Supplied Accommodation General Requirements',
'Occupational Food Handling and Food Preparation Areas',
'Safety in Design (Construction)',
'Permit to Work Systems',
'Barricading of Hazards',
'Working at Heights',
'Lock-out / Tag-out (Isolation)',
'Driver Fatigue Prevention',
'Scaffolding',
'Confined Spaces',
'Hot Work Operations',
'Excavation Work',
'Diving Operations',
'Working On, Over or Adjacent to Water',
'Working with Ionising Radiation',
'Working On or Adjacent to a Road',
'Safe Use of Lifting Equipment and Lifting Accessories',
'Portable Power Tools',
'Plant and Equipment',
'Use of Abrasive Wheels',
'Compressed Air',
'Agriculture',
'Pressure Systems',
'Pre Cast Construction',
'Temporary Structures',
'Traffic Management and Logistics',
'Explosives',
'Musculoskeletal Disorders',
'Whole Body Vibration',
'Hand-Arm Vibration',
'Compressed Gases and Air',
'Occupational Air Quality',
'Work with Display Screen Equipment',
'Occupational Exposure to Solar Radiation',
'OSH Management During Construction Work',
'OSH Construction Management Plan',
'Waste Management'
];
const CATEGORIES=ADOSH_COP_CATEGORIES;const packages=[{value:'2',label:'Package 02'},{value:'3',label:'Package 03'},{value:'4',label:'Package 04'}];const roots=['Poor supervision','Poor planning','PTW system failure','Inspection failure','Leadership failure','Poor subcontractor control','Poor housekeeping','Inadequate competence','Inadequate maintenance','Poor logistics planning'];
const statusBox=$('#statusBox'), attendeeRows=$('#attendeeRows'), obsContainer=$('#observationsContainer');
function setStatus(t,err=false){statusBox.textContent=t;statusBox.style.borderColor=err?'#f87171':'#84cc16'}
function opt(sel,arr,ph){sel.innerHTML=ph?`<option value="">${ph}</option>`:'';arr.forEach(x=>{let o=document.createElement('option');o.value=x.value||x;o.textContent=x.label||x;sel.appendChild(o)})}
function unique(a){return [...new Set((a||[]).filter(Boolean))]}
function lines(t){return String(t||'').split(/\n+/).map(x=>x.replace(/^[-•\d.\s]+/,'').trim()).filter(Boolean)}
function numbered(arr){return unique(arr).map((x,i)=>`${i+1}. ${x}`).join('\n')}
function bulleted(arr){return unique(arr).map(x=>`• ${x}`).join('\n')}



// ================= FINAL DEEP MANUAL OBSERVATION ENGINE =================
// Main rule:
// 1) If "Your Manual Observation Comments" has text, the system reads that text deeply
//    and creates Observation Description, Immediate Action Taken, Action Required,
//    Root Cause and Legal Requirements based on THAT text.
// 2) If manual comments are blank, the system uses only what the user selected/wrote
//    in the normal fields. It will not invent unrelated text.
// 3) Auto-fill ALDAR wording is still available using the Auto-fill button.

function cleanText(t){return String(t||'').trim().replace(/\s+/g,' ');}
function hasWord(t,arr){t=String(t||'').toLowerCase();return arr.some(w=>t.includes(w));}
function splitIssuesDeep(text){
  const raw=cleanText(text);
  if(!raw) return [];
  let parts=raw
    .replace(/\bwith\b/gi,' and ')
    .replace(/\bplus\b/gi,' and ')
    .split(/\s*(?:,|;|\band\b|\&|\+|\n|\/)\s*/i)
    .map(x=>x.trim())
    .filter(Boolean);
  if(parts.length===1 && raw.length<220) parts=[raw];
  return [...new Set(parts)].slice(0,10);
}
function detectManualRule(text, selectedCategory=''){
  const t=cleanText(text).toLowerCase();
  const c=String(selectedCategory||'').toLowerCase();
  if(hasWord(t,['jcb','broken glass','cracked glass','damaged glass','windshield','windscreen','front glass','operator cabin glass','cabin glass','broken mirror','damaged mirror'])) return 'plant';
  if(hasWord(t,['cold drinking water','drinking water','cold water','water facility','water facilities','welfare','rest area','rest room','air condition','air conditioning','ac not working','a/c','toilet','washroom','amenities'])) return 'welfare';
  if(hasWord(t,['db','dbd','distribution board','cable','earthing','earth pit','electrical','generator','power tapping','temporary electrical','open panel','live wire'])) return 'electrical';
  if(hasWord(t,['ladder','unsafe ladder','step ladder','a-frame ladder','a frame ladder','straight ladder','extension ladder'])) return 'ladder';
  if(hasWord(t,['scaffold','scaffolding','mobile tower','outrigger','green tag','red tag','plank','platform'])) return 'scaffold';
  if(hasWord(t,['excavation','trench','open trench','boundary wall','soil collapse','deep excavation'])) return 'excavation';
  if(hasWord(t,['permit','ptw','work permit','red flag','red-flag','red flagged','without permit','no permit'])) return 'ptw';
  if(hasWord(t,['edge protection','leading edge','guardrail','toe board','toeboard','roof edge','window edge','fall protection','lift shaft'])) return 'edge';
  if(hasWord(t,['floor opening','opening','manhole','protruding rebar','protruding steel','rebar','barricade','barricading','handrail'])) return 'barricade';
  if(hasWord(t,['access','egress','walkway','pedestrian','blocked','obstructed','route','access bridge','ramp','stairs','staircase'])) return 'access';
  if(hasWord(t,['housekeeping','waste','debris','garbage','loose material','material storage','poor material'])) return 'housekeeping';
  if(hasWord(t,['fire','extinguisher','hose reel','smoke detector','hot work','combustible','chemical','coshh','sprinkler','storage area','civil defense','civil defence'])) return 'fire';
  if(hasWord(t,['lifting','precast','a-frame trailer','a frame trailer','crane','rigging','sling','trailer','panel','load securing'])) return 'lifting';
  if(hasWord(t,['traffic','vehicle','banksman','flagman','man-machine','man machine','road','reversing','pedestrian segregation'])) return 'traffic';
  if(hasWord(t,['mewp','plant','equipment','loader','machine','compressor','jackhammer','power tool','grinder','tool','damaged tool'])) return 'plant';
  if(hasWord(t,['ppe','helmet','gloves','goggles','face shield','harness','safety shoes','mask'])) return 'ppe';
  if(hasWord(t,['msra','risk assessment','method statement','ramS'.toLowerCase()])) return 'msra';
  if(c.includes('electrical')||c.includes('tool')) return 'electrical';
  if(c.includes('scaffold')||c.includes('ladder')) return 'scaffold';
  if(c.includes('excavation')) return 'excavation';
  if(c.includes('permit')||c.includes('ptw')) return 'ptw';
  if(c.includes('edge')||c.includes('falling object')) return 'edge';
  if(c.includes('barricad')||c.includes('floor')) return 'barricade';
  if(c.includes('welfare')) return 'welfare';
  if(c.includes('access')) return 'access';
  if(c.includes('housekeeping')||c.includes('waste')) return 'housekeeping';
  if(c.includes('fire')||c.includes('storage')) return 'fire';
  if(c.includes('traffic')||c.includes('logistics')||c.includes('man-machine')) return 'traffic';
  if(c.includes('lifting')||c.includes('precast')) return 'lifting';
  if(c.includes('plant')||c.includes('tool')) return 'plant';
  if(c.includes('ppe')) return 'ppe';
  if(c.includes('msra')) return 'msra';
  return 'general';
}
function categoryFromRule(rule){
  return {
    electrical:'Electrical Safety / Portable Tools',
    ladder:'Work at Height',
    scaffold:'Scaffolding',
    excavation:'Excavation',
    ptw:'Permit to Work',
    edge:'Edge Protection',
    barricade:'Barricading Hazards / Floor Openings',
    access:'Access and Egress',
    housekeeping:'Housekeeping / Waste Management',
    fire:'Material Storage / Fire Protection',
    lifting:'Lifting/Precast Installation',
    traffic:'Traffic & Man-Machine Interface',
    plant:'Plant and Equipment',
    ppe:'PPE',
    msra:'MSRA Quality',
    welfare:'Welfare Arrangement',
    general:'Other'
  }[rule] || 'Other';
}
function rootFromRule(rule){
  return {
    electrical:'Electrical safety inspection failure / Poor temporary electrical control',
    ladder:'Unsafe ladder use / Poor work at height supervision',
    scaffold:'Scaffolding inspection failure / Inadequate competent supervision',
    excavation:'Poor excavation planning / Inadequate barricading control',
    ptw:'PTW system failure / Lack of field verification',
    edge:'Poor supervision / Inadequate fall prevention control',
    barricade:'Poor barricading maintenance / Inspection failure',
    access:'Poor access planning / Poor housekeeping / Poor supervision',
    housekeeping:'Poor housekeeping / Poor subcontractor control',
    fire:'Poor fire readiness / Inadequate storage control',
    lifting:'Poor lifting / precast control and planning',
    traffic:'Poor traffic management / Man-machine interface control failure',
    plant:'Poor plant and equipment inspection / Inadequate maintenance',
    ppe:'Poor PPE compliance / Weak enforcement',
    msra:'Poor MSRA quality / Inadequate risk assessment implementation',
    welfare:'Poor welfare management / Inadequate amenities / Poor supervision',
    general:'Poor supervision / Planning and control failure'
  }[rule] || 'Poor supervision';
}
function legalFromRule(rule, selectedCategory=''){
  if(rule==='ladder') return ['ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
  const preset=PRESETS[categoryFromRule(rule)] || PRESETS[selectedCategory] || PRESETS.Other;
  return preset && preset.legal ? preset.legal : ['Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
}
function issueToObservation(issue){
  const i=cleanText(issue).toLowerCase();
  if(/open\s*db|db\s*open|open\s*dbd|dbd|distribution board/.test(i)) return 'Electrical distribution board was found open / not properly secured, creating risk of unauthorized access to live electrical components and potential electric shock.';
  if(/poor.*cable|cable.*management|loose cable|cables? on|cable routing|cable/.test(i)) return 'Poor cable management was observed, with temporary cables not properly routed, elevated or protected, creating trip hazards and risk of mechanical damage to electrical cables.';
  if(/damaged.*cable|exposed cable|joint cable|live wire/.test(i)) return 'Damaged / exposed electrical cables were observed, creating risk of electric shock, short circuit and electrical fire.';
  if(/earthing|earth pit|grounding/.test(i)) return 'Earthing arrangement was not adequately provided / verified, creating risk of electrical fault and unsafe equipment operation.';
  if(/ladder|single ladder|a-frame ladder|a frame ladder|step ladder|straight ladder|extension ladder/.test(i)) return 'Ladder was being used in an unsafe manner / as a working platform, creating risk of fall from height.';
  if(/unsafe scaffold|scaffold|mobile tower|outrigger|green tag|red tag/.test(i)) return 'Scaffolding arrangement was observed in unsafe condition and not fully compliant with approved design / manufacturer requirements, creating fall and instability hazards.';
  if(/excavation|trench|open trench|boundary wall/.test(i)) return 'Excavation / trench was not adequately protected with rigid barricades, warning signs and safe access arrangements.';
  if(/no permit|without permit|ptw|work permit|permit|red flag/.test(i)) return 'The activity was observed without adequate Permit to Work control and physical field verification prior to work execution.';
  if(/edge protection|leading edge|guardrail|toe board|toeboard|roof edge|window edge|lift shaft/.test(i)) return 'Edge protection was missing, incomplete or not properly maintained, exposing workers to fall from height and falling object hazards.';
  if(/floor opening|manhole|opening/.test(i)) return 'Floor opening / manhole was not adequately protected, covered or barricaded, creating fall and trip hazards.';
  if(/rebar|protruding steel/.test(i)) return 'Protruding reinforcement steel was not adequately protected, creating impalement and trip hazards.';
  if(/access|egress|walkway|blocked|obstruct|route|ramp|stairs/.test(i)) return 'Access / egress route was obstructed or not maintained in safe condition, affecting safe movement and emergency escape.';
  if(/housekeeping|waste|debris|garbage|loose material/.test(i)) return 'Poor housekeeping was observed, with waste / debris / loose materials creating slip, trip, access obstruction and fire load concerns.';
  if(/material storage|stored|storage/.test(i)) return 'Material storage arrangement was not adequately controlled, with materials stored in a manner that may obstruct access, increase fire load or create collapse / falling object hazards.';
  if(/cold drinking water|drinking water|cold water|water facilit/.test(i)) return 'Cold drinking water facilities were not provided / maintained for the workforce, affecting worker welfare and hydration arrangements.';
  if(/air condition|air conditioning|a\/c|ac not working|poor ventilation/.test(i)) return 'Air-conditioning / ventilation arrangements in the rest area were not functioning properly, resulting in unsuitable welfare conditions for workers.';
  if(/smoke detector/.test(i)) return 'Smoke detector / fire detection arrangement was not provided or not maintained in the rest area, creating a fire and life safety concern.';
  if(/fire|extinguisher|hose reel|smoke|hot work|combustible|chemical|coshh|sprinkler/.test(i)) return 'Fire readiness / fire protection arrangements were not adequately maintained for the activity or storage area.';
  if(/ppe|helmet|glove|goggle|face shield|harness/.test(i)) return 'Required mandatory / task-specific PPE was not fully complied with for the observed activity.';
  if(/traffic|vehicle|banksman|flagman|man.?machine|road|reversing/.test(i)) return 'Traffic / man-machine interface controls were not adequately implemented, creating risk of vehicle-person interaction.';
  if(/lifting|precast|a-frame|panel|trailer|load securing/.test(i)) return 'Lifting / precast handling arrangement was not adequately controlled in line with approved method statement, load securing and exclusion zone requirements.';
  if(/mewp|plant|equipment|compressor|jackhammer|tool|grinder|machine/.test(i)) return 'Plant / equipment / tool arrangement was not adequately inspected or maintained, creating operational, mechanical or electrical safety risks.';
  if(/msra|risk assessment|method statement|ramS/.test(i)) return 'The MSRA / method statement did not adequately reflect or control the actual site condition and task-specific hazards.';
  return 'Unsafe condition was observed regarding ' + cleanText(issue) + ', requiring corrective and preventive action in accordance with project OSH requirements.';
}
function buildImmediateFromRule(rule, text){
  const base={
    electrical:['The affected electrical arrangement was immediately brought to the attention of the responsible supervisor and electrical team.','Access to the unsafe DB / cable arrangement was restricted until it was inspected and made safe by competent electrical personnel.','Workers were instructed not to use or interfere with the affected electrical arrangement until rectification was completed.'],
    ladder:['Unsafe ladder use was stopped immediately and the ladder was removed / restricted from further use.','The responsible supervisor was instructed to provide a safe access method or suitable working platform for the task.','Workers were briefed not to use ladders as working platforms or where the ladder cannot be secured and used safely.'],
    scaffold:['Unsafe scaffold use was stopped immediately and access to the affected arrangement was restricted.','Workers were removed from the unsafe platform and the scaffolding / supervision team was instructed to rectify the condition.','The scaffold was instructed to be inspected and released only by a competent scaffolding inspector before reuse.'],
    excavation:['Access to the unsafe excavation / trench area was restricted immediately.','Personnel were kept away from the excavation edge until suitable barricading, signage and safe access were provided.','The responsible engineer and HSE team were instructed to implement immediate excavation protection controls.'],
    ptw:['The affected activity was stopped immediately and the permit status was reviewed.','The permit issuer, area engineer, HSE team and supervisor were instructed to physically verify the work location.','Work was not allowed to continue until PTW controls and site conditions were confirmed.'],
    edge:['Unsafe work near the exposed leading edge was stopped immediately.','Access to the exposed edge area was restricted and the responsible supervision team was instructed to reinstate protection.','Workers were removed from the affected area until edge protection was verified.'],
    barricade:['Access to the unprotected opening / hazard area was restricted immediately.','The responsible team was instructed to provide suitable barricading, covers and warning signs without delay.','Workers were prevented from entering the unsafe area until protection was verified.'],
    access:['Unsafe access routes were restricted and workers were redirected to safer access points.','The responsible supervision team was instructed to remove obstructions and restore safe access without delay.','Work was held where safe access and egress could not be ensured.'],
    housekeeping:['The affected area was instructed to be cleaned immediately.','Access routes and work fronts were required to be cleared from waste, debris and loose materials.','Supervision was instructed to verify housekeeping closeout before allowing continuation of work.'],
    fire:['The unsafe fire readiness / storage condition was communicated to the responsible team for immediate correction.','The area was reviewed for immediate fire risk and temporary controls were instructed.','The contractor was instructed to restore suitable firefighting / emergency arrangements without delay.'],
    lifting:['Unsafe lifting / precast activity was stopped immediately and the lifting area was controlled.','Personnel were removed from the lifting zone and the lifting supervisor / engineer was instructed to verify the arrangement.','The activity was not allowed to continue until lifting controls and exclusion zones were confirmed.'],
    traffic:['Unsafe traffic / man-machine interface condition was controlled immediately.','Plant or vehicle movement was held until segregation, signage and banksman control were confirmed.','The logistics and supervision team was instructed to rectify traffic control arrangements.'],
    plant:['Unsafe plant / equipment / tool was removed from use pending inspection and rectification.','The responsible supervisor / competent person was instructed to verify equipment condition and certification before reuse.','Workers were instructed not to operate defective or uninspected equipment.'],
    ppe:['Workers not complying with PPE requirements were stopped from continuing the activity.','The responsible supervisor was instructed to provide and verify mandatory / task-specific PPE before work continued.','Workers were reminded not to continue the activity without required PPE.'],
    msra:['The activity was paused until the MSRA and actual site controls were reviewed.','The supervisor was instructed to brief the workforce on task-specific hazards and control measures.','Work was not allowed to continue until the MSRA controls were implemented at the work front.'],
    welfare:['The welfare deficiency was immediately communicated to the responsible site team and contractor supervision.','The contractor was instructed to provide cold drinking water and restore suitable rest area conditions without delay.','The contractor was instructed to inspect the rest area fire detection / smoke detector arrangement and implement immediate control measures.'],
    general:['The unsafe condition was communicated immediately to the responsible site team.','The affected activity / area was placed under control until suitable corrective measures were implemented.','The responsible supervision team was instructed to rectify the issue without delay.']
  };
  return base[rule] || base.general;
}
function buildActionsFromRule(rule, text){
  const t=cleanText(text).toLowerCase();
  let a=[];
  if(/db|distribution|electrical|cable|earthing|generator|power/.test(t)){
    if(/db|distribution/.test(t)) a.push('All distribution boards shall be properly closed, secured and locked at all times to prevent unauthorized access.');
    if(/cable/.test(t)) a.push('All cables shall be properly routed, elevated or protected using suitable cable management arrangements to prevent trip hazards and mechanical damage.');
    if(/earthing|earth/.test(t)) a.push('Earthing arrangements shall be inspected, tested, identified and maintained by competent electrical personnel.');
    a.push('A competent electrical team shall inspect the affected electrical arrangement and confirm it is safe before further use.');
  }
  if(/ladder|step ladder|a-frame ladder|a frame ladder|straight ladder|extension ladder/.test(t)){
    a.push('Unsafe ladders shall be removed from use immediately and replaced with a safe access method or suitable working platform for the task.');
    a.push('Ladders shall only be used for short-duration low-risk access activities where they are suitable, inspected, secured and used by trained workers.');
    a.push('Ladders shall not be used as working platforms for sustained work, side loading, overreaching or activities requiring both hands.');
  }
  if(/scaffold|platform|outrigger/.test(t)){
    a.push('All scaffolding / working platforms shall be inspected by a competent person and used only when fully compliant with approved design and tagging requirements.');
    if(/outrigger/.test(t)) a.push('Required outriggers / stabilizers shall be installed as per manufacturer requirements before use.');
  }
  if(/excavation|trench/.test(t)) a.push('Excavations shall be protected with rigid barricades, warning signs and safe access / egress arrangements.');
  if(/permit|ptw|red flag/.test(t)) a.push('Permit to Work shall be issued only after physical verification of the work front and confirmation of all required controls.');
  if(/edge|guardrail|toe|fall/.test(t)) a.push('Complete edge protection including top rail, mid rail and toe board shall be installed and maintained at all leading edges.');
  if(/floor opening|manhole|opening/.test(t)) a.push('Floor openings / manholes shall be covered with secured load-bearing covers or protected with rigid barricades and warning signs.');
  if(/rebar|protruding/.test(t)) a.push('Protruding rebars shall be removed where possible or protected with suitable rebar caps.');
  if(/access|egress|walkway|blocked|obstruct|route/.test(t)) a.push('Access and egress routes shall be kept clear, safe, demarcated and free from obstruction at all times.');
  if(/housekeeping|waste|debris/.test(t)) a.push('Housekeeping shall be maintained continuously and waste / debris shall be removed from work fronts and access routes.');
  if(/fire|extinguisher|hot work|storage|chemical|combustible/.test(t)) a.push('Adequate fire protection arrangements, fire extinguishers, segregation and emergency controls shall be provided and maintained.');
  if(/ppe|helmet|glove|goggle|harness/.test(t)) a.push('Mandatory and task-specific PPE shall be provided, used and verified by supervision before and during the activity.');
  if(/traffic|vehicle|banksman|flagman|man.?machine|road/.test(t)) a.push('Traffic management controls including segregation, signage, banksman control and safe pedestrian routes shall be implemented and maintained.');
  if(/lifting|precast|a-frame|panel|trailer/.test(t)) a.push('Lifting / precast handling shall be carried out under approved MSRA / lifting plan with competent supervision, exclusion zones and verified load securing.');
  if(/mewp|plant|equipment|compressor|jackhammer|tool|grinder|machine/.test(t)) a.push('Plant, equipment and tools shall be inspected, maintained, tagged and removed from service where defective or unsafe.');
  if(/cold drinking water|drinking water|cold water|welfare|rest area|air condition|air conditioning|a\/c|smoke detector|amenities/.test(t)){
    a.push('Adequate cold drinking water facilities shall be provided and maintained at all times for the workforce.');
    a.push('Air-conditioning and ventilation arrangements in the rest area shall be inspected, repaired and maintained in good working condition.');
    a.push('Approved smoke detectors / fire detection arrangements shall be provided and maintained in welfare and rest areas as required.');
    a.push('A routine welfare inspection and maintenance schedule shall be implemented by the responsible supervision team.');
  }
  if(/msra|risk assessment|method statement/.test(t)) a.push('The MSRA shall be reviewed and updated to reflect actual site conditions, task sequence, hazards and required controls.');
  if(!a.length) a.push('The contractor shall rectify the observed unsafe condition, identify the root cause and implement corrective and preventive actions to avoid recurrence.');
  a.push('Routine inspection and monitoring shall be carried out by the responsible supervision and OSH team to confirm sustained compliance.');
  a.push('Workers and supervisors shall be briefed on the relevant project OSH requirements and lessons learned from the observation.');
  return [...new Set(a)];
}


// ================= FINAL SPECIFIC MANUAL POINT ENGINE - ADDED =================
// This layer keeps every point written by the user and shows the exact generated
// report wording inside the empty report boxes before Word generation.
function addOptionIfMissing(sel,value){
  if(!sel||!value) return;
  if(![...sel.options].some(o=>o.value===value)){
    const o=document.createElement('option'); o.value=value; o.textContent=value; sel.appendChild(o);
  }
}
function normalizeManualSentence(t){
  return String(t||'').replace(/\s+/g,' ').trim().replace(/[.،;]+$/,'');
}
function splitManualPointsSpecific(text){
  let raw=String(text||'').trim();
  if(!raw) return [];
  raw=raw
    .replace(/\bno\s+/gi,' | no ')
    .replace(/\bnot\s+/gi,' | not ')
    .replace(/\bwithout\s+/gi,' | without ')
    .replace(/\bmissing\s+/gi,' | missing ')
    .replace(/\band\s+also\b/gi,' | ')
    .replace(/\balso\b/gi,' | ')
    .replace(/\bplus\b/gi,' | ')
    .replace(/\bwith\b/gi,' | with ')
    .replace(/\n+/g,' | ')
    .replace(/[;,]+/g,' | ');
  let pts=raw.split('|').map(normalizeManualSentence).filter(Boolean);
  // Reconnect very short fragments with the previous item where useful.
  const out=[];
  for(const pt of pts){
    if(out.length && pt.length<10 && !/^(no|not|without|missing)\b/i.test(pt)) out[out.length-1]+=' '+pt;
    else out.push(pt);
  }
  return [...new Set(out)].slice(0,14);
}
function actionVerbForPoint(point){
  const t=point.toLowerCase();
  if(/jcb|broken glass|cracked glass|damaged glass|windshield|windscreen|front glass|operator cabin glass|cabin glass|broken mirror|damaged mirror/.test(t)) return 'stop and remove the JCB / equipment with broken glass from service, isolate and clean the glass hazard, arrange plant maintenance inspection, and repair / replace the damaged glass before reuse';
  if(/cold.*water|drinking water|water/.test(t)) return 'provide and maintain adequate cold drinking water facilities for all workers';
  if(/air.?condition|a\/c|ac\b|ventilation/.test(t)) return 'inspect, repair and maintain the air-conditioning / ventilation arrangements in good working condition';
  if(/smoke detector|fire detection|detector/.test(t)) return 'provide and maintain approved smoke detectors / fire detection arrangements';
  if(/db|distribution board/.test(t)) return 'close, secure and lock all electrical distribution boards';
  if(/cable/.test(t)) return 'properly route, elevate and protect temporary electrical cables';
  if(/ladder|step ladder|a-frame ladder|a frame ladder|straight ladder|extension ladder/.test(t)) return 'remove the unsafe ladder from use and provide a safe access method / proper working platform suitable for the task';
  if(/scaffold|platform|outrigger/.test(t)) return 'rectify and inspect the scaffold / access platform by a competent person before use';
  if(/excavation|trench/.test(t)) return 'provide rigid barricading, warning signage and safe access / egress for the excavation';
  if(/permit|ptw/.test(t)) return 'revalidate the Permit to Work after physical verification of the work front';
  if(/edge|guardrail|toe.?board|opening|manhole|rebar|barricad/.test(t)) return 'install and maintain suitable hard barricading / edge protection / covers as applicable';
  if(/housekeeping|waste|debris/.test(t)) return 'remove waste and maintain housekeeping at the work front and access routes';
  if(/fire|extinguisher|hose reel|combustible|chemical|storage/.test(t)) return 'restore required fire prevention, storage control and emergency arrangements';
  if(/traffic|vehicle|banksman|flagman|man.?machine/.test(t)) return 'implement traffic segregation, banksman control and safe pedestrian access';
  if(/lifting|precast|crane|sling|trailer/.test(t)) return 'stop and revalidate the lifting / precast arrangement with competent supervision and exclusion zones';
  return 'rectify the identified unsafe condition and implement preventive controls';
}
function specificObservationSentence(point,areaText=''){
  const t=point.toLowerCase();
  const prefix='It was observed that ';
  if(/jcb|broken glass|cracked glass|damaged glass|windshield|windscreen|front glass|operator cabin glass|cabin glass|broken mirror|damaged mirror/.test(t)) return prefix+'JCB / mobile equipment was found with broken or damaged glass'+areaText+', creating risk of glass injury, poor operator visibility, falling glass fragments and unsafe plant operation. The equipment condition was not acceptable for continued site use until inspected, repaired and confirmed safe.';
  if(/cold.*water|drinking water|water/.test(t)) return prefix+'adequate cold drinking water facilities were not provided for the workforce'+areaText+', which may affect worker welfare, heat stress prevention and compliance with welfare requirements.';
  if(/air.?condition|a\/c|ac\b|ventilation/.test(t)) return prefix+'the air-conditioning / ventilation arrangement was not functioning properly in the rest area'+areaText+', resulting in unsuitable and uncomfortable welfare conditions for workers.';
  if(/smoke detector|fire detection|detector/.test(t)) return prefix+'approved smoke detector / fire detection arrangement was not provided or maintained in the rest area'+areaText+', creating a fire and life safety concern.';
  if(/db|distribution board/.test(t)) return prefix+'electrical distribution board was left open / not properly secured'+areaText+', exposing personnel to unauthorized access and potential contact with live electrical components.';
  if(/cable/.test(t)) return prefix+'temporary cables were not properly managed, routed or protected'+areaText+', creating trip hazards and risk of mechanical damage to electrical cables.';
  if(/ladder|step ladder|a-frame ladder|a frame ladder|straight ladder|extension ladder/.test(t)) return prefix+'an unsafe ladder was being used'+areaText+', creating risk of fall from height, loss of balance and serious injury. The ladder arrangement was not suitable / safe for the observed activity and required immediate removal or replacement with a compliant access method.';
  if(/scaffold|platform|outrigger/.test(t)) return prefix+'scaffold / access platform arrangement was not maintained in safe and compliant condition'+areaText+', creating fall from height and instability hazards.';
  if(/excavation|trench/.test(t)) return prefix+'excavation / trench area was not adequately protected'+areaText+', creating risk of fall into excavation, edge collapse and uncontrolled access.';
  if(/permit|ptw/.test(t)) return prefix+'the activity was not adequately controlled through a valid Permit to Work and physical field verification'+areaText+'.';
  if(/edge|guardrail|toe.?board/.test(t)) return prefix+'edge protection was missing, incomplete or not properly maintained'+areaText+', exposing personnel to fall from height and falling object hazards.';
  if(/opening|manhole/.test(t)) return prefix+'floor opening / manhole was not adequately covered or barricaded'+areaText+', creating fall and trip hazards.';
  if(/rebar|protruding/.test(t)) return prefix+'protruding reinforcement steel was not adequately protected'+areaText+', creating impalement and trip hazards.';
  if(/housekeeping|waste|debris/.test(t)) return prefix+'poor housekeeping was observed'+areaText+', with waste / debris / loose materials affecting safe access and increasing slip, trip and fire load concerns.';
  if(/fire|extinguisher|hose reel|combustible|chemical|storage/.test(t)) return prefix+'fire prevention / storage control arrangements were not adequately maintained'+areaText+', creating fire readiness and emergency response concerns.';
  if(/traffic|vehicle|banksman|flagman|man.?machine/.test(t)) return prefix+'traffic / man-machine interface controls were not adequately implemented'+areaText+', creating risk of vehicle-person interaction.';
  if(/lifting|precast|crane|sling|trailer/.test(t)) return prefix+'lifting / precast handling arrangement was not adequately controlled'+areaText+', creating risk of dropped load, struck-by incident and uncontrolled lifting activity.';
  return prefix+normalizeManualSentence(point)+areaText+', requiring immediate corrective and preventive action by the responsible contractor.';
}

function immediateSentenceForPoint(point,areaText=''){
  const t=point.toLowerCase();
  const loc=areaText||'';
  if(/jcb|broken glass|cracked glass|damaged glass|windshield|windscreen|front glass|operator cabin glass|cabin glass|broken mirror|damaged mirror/.test(t)) return [
    'The JCB / equipment with broken glass was instructed to be stopped and removed from operation immediately'+loc+'.',
    'The affected area around the equipment was isolated and loose / broken glass pieces were required to be cleaned safely using suitable PPE.',
    'The plant / maintenance team was instructed to inspect the JCB cabin glass, operator visibility and overall equipment condition before any further use.',
    'The equipment was not allowed to return to service until the damaged glass was repaired / replaced and verified by supervision / OSH team.'
  ];
  if(/ladder|step ladder|a-frame ladder|a frame ladder|straight ladder|extension ladder/.test(t)) return [
    'Use of the unsafe ladder was stopped immediately'+loc+' and the ladder was removed / restricted from service.',
    'Workers were instructed not to continue the task from the ladder and to use only a safe access method or proper working platform suitable for the activity.',
    'The responsible supervisor was instructed to inspect the ladder condition, placement, securing and suitability before any further use.'
  ];
  if(/scaffold|platform|outrigger/.test(t)) return [
    'Use of the unsafe scaffold / access platform was stopped immediately'+loc+' and access was restricted.',
    'Workers were removed from the platform and the scaffold was placed under competent inspection before further use.',
    'The responsible scaffold team was instructed to rectify missing / unsafe components before the activity continued.'
  ];
  if(/db|distribution board/.test(t)) return [
    'The open / unsecured distribution board was immediately brought under control'+loc+'.',
    'Access to the DB was restricted and the electrical team was instructed to close, secure and verify it before further use.',
    'Workers were instructed not to touch or use the DB until competent electrical verification was completed.'
  ];
  if(/cable/.test(t)) return [
    'The unsafe cable arrangement was immediately highlighted to the responsible supervisor and electrical team'+loc+'.',
    'Cables affecting access or exposed to damage were required to be rerouted, elevated or protected before work continued.',
    'Workers were instructed not to use damaged / poorly routed cables until rectified by competent electrical personnel.'
  ];
  if(/excavation|trench/.test(t)) return [
    'Access to the unsafe excavation / trench was restricted immediately'+loc+'.',
    'Personnel were moved away from the excavation edge until hard barricading, signage and safe access were provided.',
    'The responsible engineer was instructed to verify excavation controls before work continued.'
  ];
  if(/cold.*water|drinking water|water/.test(t)) return [
    'The absence of cold drinking water was immediately communicated to the responsible site team'+loc+'.',
    'Contractor was instructed to provide adequate cold drinking water without delay.',
    'Workforce welfare arrangements were required to be checked by supervision before continuation of extended work.'
  ];
  if(/air.?condition|a\/c|ac\b|ventilation/.test(t)) return [
    'The defective air-conditioning / ventilation condition was immediately reported to contractor supervision'+loc+'.',
    'Contractor was instructed to repair or provide an alternative suitable rest area without delay.',
    'The rest area was required to be checked before being considered acceptable for worker welfare use.'
  ];
  if(/smoke detector|fire detection|detector/.test(t)) return [
    'The missing / defective smoke detection arrangement was immediately communicated to the contractor'+loc+'.',
    'Contractor was instructed to provide approved smoke detection / fire detection controls without delay.',
    'The rest area / affected facility was required to be verified for fire and life safety compliance.'
  ];
  if(/permit|ptw/.test(t)) return [
    'The affected activity was stopped immediately pending PTW verification'+loc+'.',
    'The permit issuer, receiver, area engineer and HSE team were instructed to physically verify the work front.',
    'Work was not allowed to resume until the PTW conditions matched the actual site condition.'
  ];
  if(/edge|guardrail|toe.?board|opening|manhole|rebar|barricad/.test(t)) return [
    'Access to the exposed edge / opening / hazard area was restricted immediately'+loc+'.',
    'The responsible team was instructed to install suitable protection, barricading or covers before work continued.',
    'Workers were prevented from entering the unsafe area until the protection was verified.'
  ];
  if(/housekeeping|waste|debris/.test(t)) return [
    'The affected area was instructed to be cleaned immediately'+loc+'.',
    'Access routes and work fronts were required to be cleared before work continued.',
    'The supervisor was instructed to verify housekeeping closeout at the same location.'
  ];
  if(/fire|extinguisher|hose reel|combustible|chemical|storage/.test(t)) return [
    'The unsafe fire readiness / storage condition was immediately communicated to the responsible team'+loc+'.',
    'Temporary controls were instructed until required fire protection and segregation were restored.',
    'The area was required to be checked for fire load, access and emergency readiness before continued use.'
  ];
  if(/traffic|vehicle|banksman|flagman|man.?machine/.test(t)) return [
    'Unsafe traffic / man-machine interface activity was controlled immediately'+loc+'.',
    'Plant / vehicle movement was held until segregation and banksman control were provided.',
    'Pedestrian access and vehicle movement were required to be verified before restarting the activity.'
  ];
  if(/lifting|precast|crane|sling|trailer/.test(t)) return [
    'The unsafe lifting / precast activity was stopped immediately'+loc+'.',
    'The lifting zone was controlled and unauthorized personnel were removed from the area.',
    'The lifting supervisor / appointed person was instructed to revalidate the lifting arrangement before continuation.'
  ];
  const exact=normalizeManualSentence(point);
  return ['The specific unsafe condition related to "'+exact+'" was immediately communicated to the responsible supervision team'+loc+'.','The affected activity / area was controlled until the "'+exact+'" condition was rectified and verified.','The responsible supervisor was instructed to define and implement immediate controls suitable for the actual observed condition before allowing continuation.'];
}

function preventiveSentencesForPoint(point,areaText=''){
  const t=point.toLowerCase();
  const loc=areaText||'';
  if(/jcb|broken glass|cracked glass|damaged glass|windshield|windscreen|front glass|operator cabin glass|cabin glass|broken mirror|damaged mirror/.test(t)) return [
    'Remove the affected JCB / equipment from service and do not operate it until the broken glass is fully repaired or replaced.',
    'Replace the damaged cabin / windscreen glass with suitable approved safety glass or manufacturer-approved equivalent before the equipment is released back to site.',
    'A competent mechanic / plant maintenance team shall inspect the JCB for operator visibility, cabin integrity, sharp glass edges, loose fragments and any related damage.',
    'Clean and dispose of all broken glass safely using suitable PPE, proper tools and designated waste disposal arrangements.',
    'Update the equipment pre-use checklist and inspection record to confirm the defect was identified, reported, repaired and verified before reuse.',
    'Inspect other plant and mobile equipment for cracked / broken glass, damaged mirrors, poor visibility or cabin defects and rectify any repeated findings.',
    'Brief operators and supervisors that equipment with broken glass, poor visibility or cabin damage shall be stopped immediately and reported through the defect reporting system.'
  ];
  if(/ladder|step ladder|a-frame ladder|a frame ladder|straight ladder|extension ladder/.test(t)) return [
    'Remove the unsafe ladder from service and do not allow its use until inspected and confirmed fit for purpose by competent supervision.',
    'Provide a suitable safe working platform such as compliant scaffold, mobile tower or MEWP where the task requires working from height; ladders shall not be used as a working platform.',
    'Where a ladder is permitted only for short-duration access, it shall be industrial grade, in good condition, placed on firm level ground, secured against movement and maintained at the correct angle.',
    'Inspect all ladders in the affected work area and remove damaged, unstable, unsecured or unsuitable ladders from site.',
    'Brief supervisors and workers on ladder safety requirements, including three-point contact, no overreaching, no standing on top steps and stop-work requirements for unsafe ladders.'
  ];
  if(/scaffold|platform|outrigger/.test(t)) return [
    'Rectify the scaffold / access platform in accordance with approved design and manufacturer requirements before use.',
    'Ensure all required components including guardrails, mid rails, toe boards, bracing, locking pins, access ladder and outriggers / stabilizers are installed where applicable.',
    'A competent scaffolding inspector shall inspect and tag the scaffold after rectification and before re-use.',
    'Inspect similar scaffold / access platform arrangements across the area and remove any unsafe arrangements from service.'
  ];
  if(/db|distribution board/.test(t)) return [
    'Close, secure and lock the electrical distribution board and maintain it under authorized electrical control only.',
    'Provide proper DB identification, inspection sticker, warning signage and access control as per project electrical requirements.',
    'A competent electrician shall inspect the DB for live parts, cable terminations, earthing and RCD protection before re-energizing / use.'
  ];
  if(/cable/.test(t)) return [
    'Reroute, elevate or mechanically protect all temporary cables to prevent trip hazards, crushing, water contact and mechanical damage.',
    'Remove damaged, exposed, jointed or substandard cables from service and replace them with compliant cables and connectors.',
    'Implement routine temporary electrical inspection for cable routing at access routes, wet areas, roads and work fronts.'
  ];
  if(/excavation|trench/.test(t)) return [
    'Install rigid barricades, warning signs and safe access / egress arrangements for the excavation before allowing work nearby.',
    'Maintain safe setback distance for materials, blocks, plant and spoil from excavation edges.',
    'Conduct daily competent person excavation inspections and record trench condition, access, barricading and edge stability.'
  ];
  if(/cold.*water|drinking water|water/.test(t)) return [
    'Provide adequate cold drinking water stations close to the work area and maintain refill arrangements throughout the shift.',
    'Assign responsible supervision to check water availability during routine welfare inspections.',
    'Communicate heat stress and hydration requirements to the workforce during toolbox talks.'
  ];
  if(/air.?condition|a\/c|ac\b|ventilation/.test(t)) return [
    'Repair the rest area air-conditioning / ventilation system or provide an alternative compliant rest area until repairs are completed.',
    'Implement a routine inspection and maintenance schedule for welfare facilities, including AC performance and ventilation.',
    'Do not occupy rest areas that do not provide suitable welfare conditions for workers.'
  ];
  if(/smoke detector|fire detection|detector/.test(t)) return [
    'Install approved smoke detectors / fire detection arrangements in the affected rest area or welfare facility.',
    'Test and maintain the smoke detector / fire detection system and keep inspection records available.',
    'Verify that fire extinguishers, emergency access and fire warden arrangements are also maintained for the same facility.'
  ];
  if(/permit|ptw/.test(t)) return [
    'Revalidate the Permit to Work only after physical inspection confirms that all required controls are implemented at the work front.',
    'Permit issuer, receiver and area supervision shall verify the actual site condition before signing or allowing work to proceed.',
    'Conduct PTW quality checks to ensure permits identify the task-specific hazards and controls actually present on site.'
  ];
  if(/edge|guardrail|toe.?board/.test(t)) return [
    'Install complete edge protection including top rail, mid rail and toe board at all exposed leading edges.',
    'Inspect the full work area for similar missing or damaged edge protection and rectify before work continues.',
    'Do not allow work near exposed edges until collective fall protection is verified by supervision.'
  ];
  if(/opening|manhole/.test(t)) return [
    'Protect all openings / manholes with secured load-bearing covers or rigid barricades with warning signage.',
    'Mark and identify opening covers clearly and prevent unauthorized removal.',
    'Inspect similar openings in the surrounding area and close out any repeated conditions.'
  ];
  if(/rebar|protruding/.test(t)) return [
    'Remove protruding rebar where possible or protect it with suitable mushroom-type rebar caps.',
    'Inspect access routes and work fronts for similar impalement hazards and rectify immediately.',
    'Maintain rebar protection as part of daily housekeeping and hazard inspection.'
  ];
  if(/housekeeping|waste|debris/.test(t)) return [
    'Remove waste, debris and loose materials from the affected work front and access route.',
    'Provide waste bags / bins and implement end-of-shift housekeeping before PTW closeout.',
    'Supervisors shall verify housekeeping status before allowing the next activity to start.'
  ];
  if(/fire|extinguisher|hose reel|combustible|chemical|storage/.test(t)) return [
    'Provide and maintain suitable fire extinguishers, fire detection and emergency access for the affected area.',
    'Segregate combustible / chemical materials and remove unnecessary fire load from villas and work fronts.',
    'Conduct fire readiness inspection and maintain closeout evidence for the affected storage / work area.'
  ];
  if(/traffic|vehicle|banksman|flagman|man.?machine/.test(t)) return [
    'Provide physical segregation between pedestrians and moving plant / vehicles.',
    'Assign competent banksman / flagman for reversing, unloading and interface activities.',
    'Maintain traffic signage, speed control and safe pedestrian routes at the affected location.'
  ];
  if(/lifting|precast|crane|sling|trailer/.test(t)) return [
    'Revalidate the lifting plan / MSRA and confirm crane setup, lifting accessories, load weight and ground conditions before lifting.',
    'Maintain exclusion zones and assign competent lifting supervision including appointed person / lifting supervisor as required.',
    'Verify load securing and storage arrangement for precast elements before transport, unloading or installation.'
  ];
  const exact=normalizeManualSentence(point);
  return ['Rectify the exact unsafe condition related to "'+exact+'" and submit photo evidence for verification.','Identify the direct cause of the "'+exact+'" condition and implement a corrective action that removes the hazard, not only closes the observation.','Inspect similar locations, equipment and activities for the same issue and close out repeated deficiencies.','Update the relevant checklist, briefing or supervision control so the same condition is not repeated.'];
}
function buildSpecificManualReport(text, selectedCategory='', area=''){
  const rule=detectManualRule(text, selectedCategory);
  const pts=splitManualPointsSpecific(text);
  const areaText=area && !area.includes('- -') ? ' at '+area.replace(/^Area:\s*/,'') : '';
  const desc=[];
  pts.forEach(pt=>desc.push(specificObservationSentence(pt,areaText)));
  desc.push('The above deficiencies indicate '+rootFromRule(rule).toLowerCase()+' and require corrective action across the affected work area, not only at the specific observed location.');

  // Immediate Action and Action Required are now built from the same specific points
  // that generated the observation description. This prevents generic/unmatched text.
  const immediate=[];
  pts.forEach(pt=> immediate.push(...immediateSentenceForPoint(pt,areaText)) );
  if(!immediate.length){
    immediate.push('The unsafe condition was immediately communicated to the responsible site supervision and contractor HSE team for action.');
    immediate.push('The affected activity / area was controlled until suitable corrective measures were implemented.');
  }
  immediate.push('The responsible supervisor / engineer shall keep the affected area under control until closeout is verified by the OSH team.');

  const actions=[];
  pts.forEach(pt=> actions.push(...preventiveSentencesForPoint(pt,areaText)) );
  if(!actions.length){
    actions.push('The contractor shall rectify the observed unsafe condition and submit closeout evidence for verification.');
  }
  actions.push('The contractor shall inspect similar locations and activities across the project for the same type of deficiency and rectify any repeated findings.');
  actions.push('Responsible engineers, supervisors and HSE personnel shall conduct follow-up inspection to ensure the corrective actions are effective and maintained.');
  actions.push('Relevant workers and supervisors shall be briefed on the lessons learned and the required control measures before continuing similar activities.');

  return {category:categoryFromRule(rule),root:rootFromRule(rule),desc:bulleted(desc),immediate:bulleted(immediate),actions:numbered(actions),legal:legalFromRule(rule,selectedCategory)};
}
function previewManualInBoxes(card,force=false){
  const manual=$('.manualComments',card)?.value.trim()||'';
  if(!manual) return;
  const area=$('.areaPreview',card)?.textContent.replace(/^Area:\s*/,'')||'';
  const built=buildSpecificManualReport(manual,$('.observationCategory',card).value,area);
  if(!$('.observationCategory',card).value || $('.observationCategory',card).value==='Other') $('.observationCategory',card).value=built.category;
  addOptionIfMissing($('.rootCause',card),built.root); $('.rootCause',card).value=built.root;
  const fields=[['.observationDescription','desc'],['.immediateAction','immediate'],['.preventiveAction','actions']];
  fields.forEach(([sel,key])=>{
    const el=$(sel,card); if(!el) return;
    const wasAuto=el.dataset.smartGenerated==='1';
    if(force || wasAuto || !el.value.trim()){
      el.value=built[key]; el.dataset.smartGenerated='1';
    }
  });
  $$('.legalGrid input',card).forEach(x=>x.checked=(built.legal||[]).includes(x.value));
  setStatus('Smart preview updated from your manual observation comments.');
}

function buildFromManualComments(text, selectedCategory=''){
  return buildSpecificManualReport(text, selectedCategory, '');
}
function shouldUseManualComment(text){
  return !!cleanText(text);
}
function createStandardFromManual(card){
  const manual=$('.manualComments',card)?.value.trim() || $('.observationDescription',card).value.trim();
  if(!manual){setStatus('Write your manual observation comment first, then click Create Standard Observation From My Comments.',true);return;}
  previewManualInBoxes(card,true);
  setStatus('Specific ALDAR observation created from every point in your manual comments.');
}
function applyManualToObservationObject(o){
  const manual=cleanText(o.manualComments);
  if(!manual) return o; // no manual comments: keep only selected/written fields
  const built=buildSpecificManualReport(manual, o.category, [o.package?`Package ${o.package}`:'', clusterText(o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - '));
  return {
    ...o,
    category:(!o.category||o.category==='Other')?built.category:o.category,
    root:o.root || built.root,
    desc:built.desc,
    immediate:built.immediate,
    actions:built.actions,
    legal:(o.legal&&o.legal.length)?o.legal:built.legal
  };
}


// ================= FINAL HYBRID MERGE ENGINE =================
// This engine allows three modes:
// 1) Manual Comments Only - converts only the user's site notes into professional wording.
// 2) Selected Auto Comments Only - uses only the selected/typed ALDAR auto comments in the text boxes.
// 3) Hybrid - combines user's manual notes + selected/typed auto comments and removes duplicate lines.
function stripLeadNumber(t){return String(t||'').replace(/^\s*[•\-–—]*\s*/,'').replace(/^\s*\d+[.)-]\s*/,'').trim();}
function smartLineList(text){
  return String(text||'').split(/\n+/).map(stripLeadNumber).map(x=>x.replace(/\s+/g,' ').trim()).filter(Boolean);
}
function lineKey(t){
  return String(t||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\b(the|and|shall|will|was|were|with|that|this|from|into|for|all|any|not|only|also)\b/g,' ').replace(/\s+/g,' ').trim().slice(0,130);
}
function mergeUniqueLines(){
  const seen=new Set(), out=[];
  [...arguments].flat().forEach(line=>{
    line=stripLeadNumber(line);
    if(!line) return;
    const k=lineKey(line);
    if(!k || seen.has(k)) return;
    // Avoid very similar duplicates by checking core overlap
    let duplicate=false;
    for(const old of seen){
      if(k.length>35 && old.length>35 && (k.includes(old.slice(0,45)) || old.includes(k.slice(0,45)))) { duplicate=true; break; }
    }
    if(duplicate) return;
    seen.add(k); out.push(line);
  });
  return out;
}
function selectedAutoFromObservation(o){
  const rule=SMART_RULES[smartRuleFor([o.desc,o.immediate,o.actions,o.category].join(' '),o.category)] || SMART_RULES.general;
  return {
    desc: smartLineList(o.desc).length ? smartLineList(o.desc) : (rule.desc||[]),
    immediate: smartLineList(o.immediate).length ? smartLineList(o.immediate) : (rule.imm||[]),
    actions: smartLineList(o.actions).length ? smartLineList(o.actions) : (rule.act||[]),
    legal: (o.legal&&o.legal.length)?o.legal:(rule.legal||[]),
    root: o.root || rule.root,
    category: o.category || rule.category
  };
}
function mergeManualAndAutoObservation(o){
  const area=[o.package?`Package ${o.package}`:'', clusterText(o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');
  const manual=buildSpecificManualReport(o.manualComments, o.category, area);
  const auto=selectedAutoFromObservation(o);
  const descLines=mergeUniqueLines(
    smartLineList(manual.desc),
    auto.desc,
    [`The observation shall be treated as applicable across the affected work area and similar locations, not only at the photographed location.`]
  );
  const immLines=mergeUniqueLines(smartLineList(manual.immediate), auto.immediate);
  const actLines=mergeUniqueLines(smartLineList(manual.actions), auto.actions,
    ['Closeout evidence shall include clear photographs, responsible person confirmation and verification by the supervision / OSH team.']
  );
  return {
    ...o,
    category:(!o.category||o.category==='Other')?(manual.category||auto.category):o.category,
    root:o.root || manual.root || auto.root,
    desc:bulleted(descLines),
    immediate:bulleted(immLines),
    actions:numbered(actLines),
    legal:unique([...(o.legal||[]),...(manual.legal||[]),...(auto.legal||[])])
  };
}
function finaliseObservationByMode(o){
  const mode=o.generationMode||'hybrid';
  if(mode==='auto'){
    const auto=selectedAutoFromObservation(o);
    return {...o,root:o.root||auto.root,desc:bulleted(auto.desc),immediate:bulleted(auto.immediate),actions:numbered(auto.actions),legal:unique([...(o.legal||[]),...(auto.legal||[])])};
  }
  if(mode==='manual') return o.manualComments ? applyManualToObservationObject(o) : o;
  if(o.manualComments && o.manualComments.trim()) return mergeManualAndAutoObservation(o);
  return o;
}
function combineFinalOnCard(card){
  const o={
    no:1,package:$('.package',card).value,cluster:$('.cluster',card).value.trim(),villa:$('.villaNo',card).value.trim(),
    category:$('.observationCategory',card).value,risk:$('.riskCategory',card).value,response:$('.responseCategory',card).value,owner:$('.actionOwner',card).value,
    root:$('.rootCause',card).value,closed:$('.dateClosed',card).value,manualComments:$('.manualComments',card).value.trim(),generationMode:$('.generationMode',card).value,
    desc:$('.observationDescription',card).value.trim(),immediate:$('.immediateAction',card).value.trim(),actions:$('.preventiveAction',card).value.trim(),legal:$$('.legalGrid input',card).filter(x=>x.checked).map(x=>x.value),photos:[]
  };
  if(!o.manualComments && o.generationMode!=='auto') { setStatus('Please enter manual comments first, or select Auto mode.',true); return; }
  const m=finaliseObservationByMode(o);
  if(m.category){ addOptionIfMissing($('.observationCategory',card),m.category); $('.observationCategory',card).value=m.category; }
  if(m.root){ addOptionIfMissing($('.rootCause',card),m.root); $('.rootCause',card).value=m.root; }
  $('.observationDescription',card).value=m.desc||'';
  $('.immediateAction',card).value=m.immediate||'';
  $('.preventiveAction',card).value=m.actions||'';
  $$('.legalGrid input',card).forEach(x=>x.checked=(m.legal||[]).includes(x.value));
  setStatus('Final combined observation preview is ready. You can still edit it before generating Word.');
}

// SMART BRIEF TEXT ENGINE
// If the user deletes the auto-filled wording and writes only a few words
// (example: "open DB and poor cable management"), this engine converts it
// into ALDAR/KEO style observation description, immediate action, action required,
// root cause and legal references for the Word report.
function isBriefManualText(text){
  const t=String(text||'').trim();
  if(!t) return false;
  const hasBullets=/[•\n]/.test(t);
  const hasReportStyle=/(it was observed|it has been observed|it was evident|action to be taken|reference photos|legal\/other)/i.test(t);
  return !hasBullets && !hasReportStyle && t.length<=180;
}
function hasAny(t,words){return words.some(w=>t.includes(w));}
function smartRuleFor(text,selectedCategory=''){
  const t=String(text||'').toLowerCase().replace(/\s+/g,' ');
  const cat=String(selectedCategory||'').toLowerCase();
  if(hasAny(t,['cold drinking water','drinking water','cold water','welfare','rest area','air condition','air conditioning','ac not working','a/c','toilet','washroom','amenities'])) return 'welfare';
  if(hasAny(t,['db','dbs','distribution board','open db','open dbd','cable','cables','earthing','generator','electrical','power cable','temporary electrical'])) return 'electrical';
  if(hasAny(t,['ladder','unsafe ladder','step ladder','a-frame ladder','a frame ladder','straight ladder','extension ladder'])) return 'ladder';
  if(hasAny(t,['scaffold','scaffolding','mobile scaffold','outrigger','green tag','red tag','plank','platform'])) return 'scaffold';
  if(hasAny(t,['excavation','trench','open trench','boundary wall','excavated','manhole','soil collapse'])) return 'excavation';
  if(hasAny(t,['permit','ptw','work permit','no permit','without permit','red flagged','red flag'])) return 'ptw';
  if(hasAny(t,['edge protection','leading edge','toe board','toeboard','guardrail','roof edge','window edge','fall protection'])) return 'edge';
  if(hasAny(t,['access','egress','walkway','pedestrian','blocked access','obstructed','route','access bridge','ramp'])) return 'access';
  if(hasAny(t,['housekeeping','waste','debris','poor housekeeping','material everywhere','garbage'])) return 'housekeeping';
  if(hasAny(t,['fire','extinguisher','smoke','hot work','combustible','chemical','coshh','storage','store','sprinkler'])) return 'fire';
  if(hasAny(t,['lifting','precast','a-frame','a frame','crane','rigging','sling','trailer','panel'])) return 'lifting';
  if(hasAny(t,['traffic','vehicle','man-machine','man machine','banksman','flagman','reversing','road'])) return 'traffic';
  if(hasAny(t,['mewp','plant','equipment','loader','machine','compressor','jackhammer','tool','power tool','grinder'])) return 'plant';
  if(hasAny(t,['ppe','helmet','gloves','goggles','face shield','harness'])) return 'ppe';
  if(hasAny(t,['msra','risk assessment','method statement','ramS'.toLowerCase()])) return 'msra';
  if(cat.includes('electrical')) return 'electrical';
  if(cat.includes('ladder')) return 'ladder';
  if(cat.includes('scaffold')) return 'scaffold';
  if(cat.includes('excavation')) return 'excavation';
  if(cat.includes('permit')||cat.includes('ptw')) return 'ptw';
  if(cat.includes('edge')) return 'edge';
  if(cat.includes('welfare')) return 'welfare';
  if(cat.includes('access')) return 'access';
  if(cat.includes('housekeeping')||cat.includes('waste')) return 'housekeeping';
  if(cat.includes('fire')||cat.includes('storage')) return 'fire';
  if(cat.includes('traffic')||cat.includes('logistics')||cat.includes('precast')) return 'traffic';
  if(cat.includes('plant')||cat.includes('tool')) return 'plant';
  if(cat.includes('ppe')) return 'ppe';
  if(cat.includes('msra')) return 'msra';
  return 'general';
}
const SMART_RULES={
  welfare:{category:'Welfare Arrangement',root:'Poor welfare management / Inadequate amenities / Poor supervision',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADCD 2018 Fire & Life Safety Code of Practice','Aldar OSH MS Rev-08','Project Approved OSH Plan'],desc:['It has been observed that adequate welfare arrangements were not maintained at the workers’ rest area, including non-availability of cold drinking water facilities for the workforce.','Air-conditioning / ventilation arrangements were not functioning properly, resulting in uncomfortable and unsuitable rest area conditions for workers.','Smoke detector / fire detection arrangement was not provided or not maintained in the rest area, creating a fire and life safety concern.','The condition indicates poor supervision, inadequate welfare maintenance and weak routine inspection of worker amenity facilities.'],imm:['The welfare deficiency was immediately communicated to the responsible site team and contractor supervision.','The contractor was instructed to provide cold drinking water facilities for all workers without delay.','The contractor was instructed to inspect and repair the defective air-conditioning units and provide temporary alternative arrangements until full rectification.','The contractor was instructed to provide / restore approved smoke detectors or fire detection arrangements in the rest area and verify all welfare facilities.'],act:['Adequate cold drinking water facilities shall be provided and maintained continuously for all workers.','Air-conditioning and ventilation arrangements in the rest area shall be repaired, inspected and maintained in good working condition.','Approved smoke detectors / fire detection arrangements shall be provided and maintained in all rest areas and welfare facilities.','The contractor shall conduct a full welfare facility inspection and rectify similar deficiencies across the project, not only at the observed location.','A preventive maintenance and routine inspection schedule shall be implemented for welfare facilities, including drinking water, cooling, ventilation, cleanliness and fire readiness.','Responsible supervision shall monitor welfare arrangements daily and submit closeout evidence for verification by KEO / Hill.','Workers and supervisors shall be briefed to report welfare deficiencies immediately for timely corrective action.']},
  electrical:{category:'Electrical Safety / Portable Tools',root:'Electrical safety control failure / Poor supervision',legal:['ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 8.0 - General Workplace Amenities','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that electrical distribution boards / temporary electrical arrangements were not properly secured, exposing personnel to electrical hazards and unauthorized access to live electrical components.','Poor cable management was observed, with temporary cables routed or placed in a manner that may create trip hazards, mechanical damage, unsafe power tapping and potential electrical incidents.','The condition indicates inadequate inspection, poor temporary electrical control and insufficient supervision of electrical safety requirements at the work front.'],imm:['Access to the affected electrical area was restricted immediately and the unsafe condition was communicated to the responsible supervisor and electrical team.','The electrical team was instructed to close and secure the DBs, verify cable routing and remove any unsafe electrical arrangement before allowing further use.','Workers were instructed not to use or approach the affected electrical arrangement until it was inspected and made safe by competent electrical personnel.'],act:['All distribution boards shall be kept closed, secured and locked at all times to prevent unauthorized access to electrical components.','A competent electrician shall inspect all DBs, cables, plugs, sockets, earthing arrangements and temporary electrical connections before further use.','All cables shall be properly routed through insulated supports, cable trays, cable ramps or overhead arrangements to prevent trip hazards and mechanical damage.','Damaged, exposed, poorly routed or unprotected cables shall be removed or replaced immediately.','Electrical warning signage and access control shall be provided where temporary electrical systems are installed.','Routine inspection and colour coding / tagging shall be implemented for electrical tools, DBs and temporary cable arrangements.','Supervisors and workers shall be briefed on electrical safety, cable management and reporting of unsafe electrical conditions.']},

  ladder:{category:'Work at Height',root:'Unsafe ladder use / Poor work at height supervision',legal:['ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that an unsafe ladder was being used at the work location, creating risk of fall from height, loss of balance and serious injury.','The ladder arrangement was not suitable for the observed activity and was not controlled as a safe access method / working platform in line with project requirements.','This indicates poor work at height supervision, inadequate selection of access equipment and ineffective inspection before use.'],imm:['Unsafe ladder use was stopped immediately and the ladder was removed / restricted from further use.','The responsible supervisor was instructed to provide a safe access method or suitable working platform for the task.','Workers were instructed not to use ladders as working platforms or where the ladder cannot be secured and used safely.'],act:['Unsafe ladders shall be removed from use immediately and replaced with a safe access method or suitable working platform suitable for the task.','Ladders shall only be used for short-duration low-risk access activities where they are suitable, inspected, secured and used by trained workers.','Ladders shall not be used as working platforms for sustained work, side loading, overreaching or activities requiring both hands.','The responsible supervisor shall inspect ladder/access arrangements before work starts and stop work where safe access is not available.','Workers shall be briefed on safe ladder use, three-point contact, securing requirements, angle/positioning and prohibition of unsafe ladder practices.','Similar work locations shall be inspected to identify and remove unsafe ladders or improper temporary access arrangements.']},
  scaffold:{category:'Scaffolding',root:'Scaffolding inspection failure / Inadequate competent supervision',legal:['ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 37.0 - Ladders','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that scaffolding / ladder arrangements were not maintained in a safe condition and did not fully comply with the approved design, manufacturer requirements or project safety standards.','Unsafe conditions such as missing components, unsafe access, loose planks, inadequate guardrails, unstable arrangements or poor tagging may expose workers to fall hazards and scaffold instability.','This indicates ineffective scaffolding inspection, inadequate supervision and poor control of temporary access arrangements.'],imm:['Unsafe scaffold or ladder use was stopped immediately and access to the affected arrangement was restricted.','Workers were removed from the unsafe platform and the responsible scaffolding team / supervision team was instructed to rectify the condition.','The scaffold was instructed to be inspected by a competent scaffolding inspector before being released for use.'],act:['All unsafe scaffolds, ladders or temporary platforms shall be taken out of service immediately until rectified and inspected.','Scaffolds shall be erected, modified and dismantled only by competent scaffolders in line with approved design and manufacturer requirements.','All required components including guardrails, mid rails, toe boards, bracing, base plates, outriggers, access ladders and locking pins shall be installed before use.','A competent scaffolding inspector shall inspect and tag the scaffold after rectification, modification, adverse weather or any condition affecting stability.','Unauthorized modifications and loose plank arrangements shall be removed immediately.','Routine scaffold inspection records shall be maintained, and repeated non-compliances shall be escalated to project management.']},
  excavation:{category:'Excavation',root:'Poor excavation planning / Inadequate barricading control',legal:['ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 17.0 - Safety Signage and Signals','ADOSH-SF CoP 21.0 - Permit to Work Systems','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that excavation / trench areas were not adequately protected with rigid barricades, warning signage and safe access arrangements.','The condition may expose workers and visitors to fall into excavation, edge collapse, falling materials, restricted emergency access and uncontrolled interaction with plant or vehicles.','The observation indicates inadequate excavation planning, poor barricading maintenance and insufficient field verification prior to work.'],imm:['Access to the unsafe excavation area was restricted immediately and personnel were kept away from the excavation edge.','The responsible engineer and HSE team were instructed to provide suitable barricades, warning signage and safe access arrangements without delay.','Any activity near the excavation was stopped until the required controls were verified by competent supervision.'],act:['All excavation areas shall be protected with rigid barricades / hard barriers and clear warning signs.','Safe access and egress shall be provided for all excavation activities before work starts.','Excavation permits shall be issued only after physical verification of barricading, access, edge stability, services and emergency arrangements.','Materials, blocks, equipment and spoil shall be kept away from excavation edges to maintain safe setback distance.','A competent person shall inspect excavations daily and after any change in condition, and inspection records shall be maintained.','Supervision shall ensure continuous monitoring of excavation protection until the excavation is backfilled or permanently protected.']},
  ptw:{category:'Permit to Work',root:'PTW system failure / Lack of field verification',legal:['ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 53.0 - OSH Management During Construction Work','Aldar OSH MS Rev-08','Project Approved OSH Plan','OSH Construction Management Plan','MSRA'],desc:['It has been observed that the activity was being carried out without adequate Permit to Work control or without proper physical verification of the work location.','The permit arrangements did not sufficiently confirm the actual site condition, required supervision, safe access, isolations and task-specific control measures.','This reflects a breakdown in PTW implementation, supervision, work planning and field verification by the responsible team.'],imm:['The activity was stopped immediately and the permit was placed on hold pending full site verification.','The permit issuer, area engineer, HSE team and responsible supervisor were instructed to review the permit status and actual work conditions.','Work was not allowed to resume until the permit conditions, supervision and required controls were physically verified.'],act:['All activities found outside PTW control shall be suspended immediately until a valid permit is issued and approved by authorized personnel after physical site verification.','The PTW system shall remain under the control of the main contractor and permits shall not be signed without field verification.','Incomplete, incorrect or poorly drafted permits shall be cancelled and revalidated only after required controls are implemented.','Roles and responsibilities of permit issuer, receiver, approver and verifier shall be clearly communicated to engineers, supervisors and HSE personnel.','Routine PTW audits shall be conducted to verify permit quality, site controls and closeout evidence.','Repeated PTW non-compliance shall be escalated to project management for enforcement action.']},
  edge:{category:'Edge Protection',root:'Poor supervision / Inadequate fall prevention control',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that edge protection / leading edge controls were missing, incomplete, poorly secured or not maintained in accordance with project and legal requirements.','The condition may expose workers to fall from height and may also allow materials to fall from elevated areas where toe boards or secure mesh are not provided.','This indicates poor inspection, inadequate maintenance and insufficient supervision of fall prevention arrangements.'],imm:['Unsafe work near the leading edge was stopped immediately and access to the exposed area was restricted.','The responsible engineer and supervision team were instructed to reinstate complete and secure edge protection before allowing work to continue.','Workers were removed from the affected area until the edge protection system was verified.'],act:['All activities near unprotected leading edges shall be suspended until complete edge protection is installed and verified.','Edge protection shall include compliant top rails, mid rails, toe boards and secure mesh where required.','Edge protection systems shall be properly anchored and maintained to prevent displacement during work activities.','Missing, loose or damaged sections shall be reinstated immediately and checked across the wider work area.','A competent supervisor shall inspect edge protection daily and maintain evidence of closeout.','Workers and supervisors shall be briefed on maintaining fall prevention and falling object controls.']},
  access:{category:'Access and Egress',root:'Poor planning / Poor housekeeping / Poor supervision',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 17.0 - Safety Signage and Signals','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that access and egress arrangements were obstructed, poorly maintained or not suitable for safe movement to the work location.','Unsafe access arrangements such as single planks, uneven ramps, blocked routes, debris, cables or material storage may create slip, trip and fall hazards and affect emergency escape.','The condition indicates inadequate planning, housekeeping and supervision of access arrangements.'],imm:['Unsafe access routes were restricted immediately and workers were redirected to safer access points.','The responsible supervision team was instructed to remove obstructions and restore safe access without delay.','Work was held at the affected location where safe access and egress could not be ensured.'],act:['All unsafe and substandard access arrangements shall be removed immediately and replaced with safe access bridges, ramps, stairs or platforms.','Access and egress routes shall be kept clear of materials, cables, debris and protruding steel at all times.','A dedicated team shall be appointed for access installation, inspection and routine maintenance.','Access routes shall be clearly demarcated, provided with suitable signage and inspected daily.','PTW approval shall include physical verification of safe access and housekeeping conditions.','The workforce shall be briefed on maintaining safe access and emergency egress arrangements.']},
  housekeeping:{category:'Housekeeping / Waste Management',root:'Poor housekeeping / Poor supervision',legal:['ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 8.0 - General Workplace Amenities','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that housekeeping conditions were not maintained, with waste, debris or materials accumulated in work areas, access routes or near active work fronts.','The condition may create slip, trip and fall hazards, obstruct emergency access and contribute to fire or falling object risks.','This indicates inadequate housekeeping planning, poor supervision and weak control of subcontractor work areas.'],imm:['The responsible team was instructed to remove waste, debris and obstructions immediately from the affected area.','Access routes and work fronts were required to be cleaned and made safe before continuation of work.','Supervision was instructed to verify housekeeping closeout and prevent re-accumulation.'],act:['Waste and debris shall be removed from work fronts and access routes on a routine basis and at the end of each shift.','Dedicated waste collection points shall be provided and maintained for each work area where required.','Materials shall be stored only in designated areas and shall not obstruct access, emergency routes or workstations.','Housekeeping shall be included as part of PTW verification and job completion requirements.','Supervisors shall conduct routine housekeeping inspections and maintain closeout evidence.','Subcontractors shall be briefed and held accountable for maintaining clean and safe work areas.']},
  fire:{category:'Material Storage / Fire Protection',root:'Poor fire readiness / Poor material storage control',legal:['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 28.0 - Hot Work Operations','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that materials / combustible items / chemicals were stored without adequate fire safety, segregation, access control or emergency readiness arrangements.','Fire protection arrangements such as extinguishers, hose reels, smoke detection, emergency access or fire wardens were not adequately maintained or verified.','The condition may increase fire load, delay emergency response and expose workers and assets to serious fire risk.'],imm:['The unsafe storage or fire readiness deficiency was communicated immediately to the responsible team for correction.','Ignition sources and unsafe storage arrangements were controlled, and the area was reviewed for immediate fire risk.','The contractor was instructed to provide suitable firefighting equipment and access control without delay.'],act:['A fire risk assessment shall be conducted for the affected storage / work area and suitable fire prevention controls shall be implemented.','Combustible materials and chemicals shall be stored only in designated, segregated and controlled storage areas.','Adequate firefighting equipment, inspection records, emergency contacts and access routes shall be maintained at all times.','Fire wardens shall be appointed for routine inspection and emergency readiness verification.','Materials shall be stacked safely below sprinkler height and clear of emergency routes.','Workers and supervisors shall be briefed on fire prevention, storage control and emergency response requirements.']},
  lifting:{category:'Lifting/Precast Installation',root:'Poor lifting/precast control / Inadequate planning',legal:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 42.0 - Pre Cast Construction','ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 44.0 - Traffic Management and Logistics','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that lifting / precast handling or installation arrangements were not adequately controlled in line with the approved lifting plan and project requirements.','The condition may expose workers to falling loads, unstable precast elements, unsafe trailer movement, inadequate exclusion zones or poor load securing arrangements.','This indicates inadequate planning, supervision and verification of lifting / precast installation controls.'],imm:['Unsafe lifting / precast activity was stopped immediately and the lifting area was controlled.','Personnel were removed from the lifting zone and the lifting supervisor / responsible engineer was instructed to verify the lifting arrangement.','The activity was not allowed to continue until the lifting plan, equipment certification, rigging and exclusion zone were confirmed.'],act:['All lifting and precast installation activities shall be carried out under an approved lifting plan and competent supervision.','Lifting equipment, accessories, A-frame arrangements, trailers and load securing methods shall be inspected and verified before use.','Exclusion zones shall be established and maintained during lifting and precast installation.','Each precast element shall be secured as per approved method statement and manufacturer requirements.','Banksman / flagman arrangements and traffic controls shall be provided where plant or trailers are moving.','Workers and supervisors shall be briefed on lifting, load control and exclusion zone requirements.']},
  traffic:{category:'Traffic &man-Machine Interface',root:'Poor traffic management / Man-machine interface failure',legal:['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 33.0 - Working On or Adjacent to a Road','ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 22.0 - Barricading of Hazards','Aldar OSH MS Rev-08','Project Approved OSH Plan'],desc:['It has been observed that traffic / logistics or man-machine interface arrangements were not adequately controlled within the work area.','Unsafe interaction between pedestrians, vehicles, plant, trailers or live roads may expose personnel to struck-by, reversing, blind spot and uncontrolled movement hazards.','The condition indicates inadequate traffic planning, segregation, signage and supervision of plant / vehicle movement.'],imm:['The unsafe traffic movement or man-machine interface condition was controlled immediately and the affected route was restricted.','Plant / vehicle movement was held until suitable segregation, signage, banksman control and safe pedestrian routes were confirmed.','The logistics and supervision team were instructed to rectify the traffic control arrangement without delay.'],act:['Traffic management arrangements shall be planned and maintained, including pedestrian segregation, signage, speed control, lighting and banksman arrangements.','Plant and vehicle operators shall follow approved routes and shall not operate in uncontrolled pedestrian or work zones.','Safe pedestrian access shall be provided and maintained in all active work areas.','Reversing activities shall be controlled by competent banksman / flagman where required.','Routine logistics inspections shall verify that man-machine interface controls remain effective.','The workforce and drivers shall be briefed on traffic routes, blind spots and site movement rules.']},
  plant:{category:'Plant and Equipment',root:'Poor equipment inspection / Inadequate maintenance',legal:['ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 15.0 - Electrical Safety','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that plant, equipment or portable tools were not adequately inspected, maintained or controlled before use.','Defective equipment, damaged tools, missing inspection evidence, unsafe attachments or poor emergency arrangements may expose workers to mechanical, electrical, fire or operational hazards.','The condition indicates inadequate pre-use inspection, poor maintenance control and insufficient supervision of plant and equipment safety.'],imm:['Unsafe plant, equipment or tools were removed from use immediately pending inspection and rectification.','The responsible supervisor / competent person was instructed to verify the equipment condition, certification and emergency arrangements before further use.','Workers were instructed not to operate defective or uninspected equipment.'],act:['All plant, equipment and portable tools shall be inspected by competent personnel before use and maintained in safe condition.','Defective, damaged, modified or uninspected equipment shall be removed from service immediately.','Pre-use inspection checklists, third-party certificates, inspection stickers and colour coding shall be maintained where applicable.','Emergency arrangements such as extinguishers, stop buttons, guards and access control shall be provided and checked.','Operators and workers shall be trained on safe operation, inspection and defect reporting requirements.','Routine monitoring shall be implemented by the supervision and HSE team to prevent recurrence.']},
  ppe:{category:'PPE',root:'Poor PPE compliance / Poor supervision',legal:['ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that personnel were carrying out work without mandatory PPE or task-specific PPE required by the approved MSRA.','The absence of suitable PPE may expose workers to injury from impact, cuts, dust, flying particles, electrical hazards or fall-related risks depending on the activity.','This indicates inadequate supervision, weak enforcement and insufficient awareness of PPE requirements.'],imm:['Personnel not complying with PPE requirements were stopped and instructed to correct the unsafe condition immediately.','The responsible supervisor was instructed to ensure mandatory and task-specific PPE is provided before work continues.','Workers were reminded not to continue the activity without the required PPE.'],act:['Mandatory and task-specific PPE shall be provided and used as per the approved MSRA and site requirements.','Supervisors shall verify PPE compliance before and during the activity.','Workers shall be trained on correct PPE use, storage, maintenance and limitations.','Routine inspections shall be conducted to monitor compliance.','Repeated PPE violations shall be subject to enforcement action in line with project procedures.']},
  msra:{category:'MSRA Quality',root:'Poor MSRA implementation / Inadequate risk assessment',legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work','ADOSH-SF CoP 53.1 - OSH Construction Management Plan','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that the approved MSRA / task risk assessment did not adequately reflect the actual site condition or required controls at the work front.','The workforce and supervision did not demonstrate adequate understanding or implementation of the method statement and risk assessment requirements.','This indicates poor MSRA quality, weak communication and inadequate field verification of control measures.'],imm:['The activity was paused until the MSRA and actual site controls were reviewed by the responsible engineer and HSE team.','The supervisor was instructed to brief the workforce on task-specific hazards and required control measures.','Work was not allowed to continue until the required MSRA controls were implemented at the work front.'],act:['The MSRA shall be reviewed and updated to reflect actual site conditions, task sequence, hazards and control measures.','Supervisors shall conduct toolbox talks and communicate MSRA requirements to all involved workers before work starts.','Field verification shall be conducted to ensure that approved control measures are implemented at the work front.','Any change in site condition, work method or sequence shall trigger MSRA review before work continues.','The Construction Manager and HSE team shall monitor MSRA implementation and maintain evidence of briefing and compliance.']},
  general:{category:'Other',root:'Poor supervision / Planning and control failure',legal:['Aldar OSH MS Rev-08','Project Approved OSH Plan','OSH Construction Management Plan','MSRA'],desc:['It has been observed that an unsafe condition was present at the work location and required immediate corrective and preventive action.','The condition may expose workers, visitors or site assets to unacceptable risk if not controlled in a timely manner.','This indicates inadequate planning, supervision and monitoring of site safety requirements.'],imm:['The unsafe condition was communicated immediately to the responsible site team and temporary controls were implemented.','The affected activity or area was placed under control until suitable corrective measures were agreed and verified.','The responsible supervision team was instructed to rectify the issue without delay.'],act:['The contractor shall review the unsafe condition, identify the root cause and implement corrective and preventive actions to avoid recurrence.','The responsible management team shall verify closeout evidence and communicate lessons learned to relevant supervisors and workforce.','Routine inspection and monitoring shall be strengthened to ensure similar issues are identified and corrected early.','Supervision shall ensure project OSH requirements are implemented across the work area, not only at the specific observation location.']}
};
function smartExpandFromBrief(text,selectedCategory=''){
  const rule=SMART_RULES[smartRuleFor(text,selectedCategory)]||SMART_RULES.general;
  return JSON.parse(JSON.stringify(rule));
}
function applySmartBriefToCard(card){
  createStandardFromManual(card);
}
function enrichObservation(o){
  return finaliseObservationByMode(o);
}

function fillPick(sel,arr,ph){opt(sel,arr,ph)}
function chips(el,arr,ta,replace=false){el.innerHTML='';unique(arr).forEach((x,i)=>{let b=document.createElement('button');b.type='button';b.className='chip';b.textContent=(i+1)+'. '+(x.length>80?x.slice(0,80)+'...':x);b.title=x;b.onclick=()=>{ta.value=replace?x:(ta.value.trim()?ta.value.trim()+'\n'+x:x)};el.appendChild(b)})}
function addAttendee(seed={}){let f=$('#attendeeTpl').content.cloneNode(true);attendeeRows.appendChild(f);let r=attendeeRows.lastElementChild;$('.attendeeName',r).value=seed.name||'';$('.attendeeDesignation',r).value=seed.designation||'';$('.attendeeEntity',r).value=seed.entity||'KEO';$('.remove',r).onclick=()=>{if($$('#attendeeRows tr').length>1)r.remove();else setStatus('At least one attendee is required.',true)}}
function legalGrid(card){let g=$('.legalGrid',card);g.innerHTML='';LEGAL.forEach(ref=>{let l=document.createElement('label');l.className='legalPill';l.innerHTML=`<input type="checkbox" value="${ref}"><span>${ref}</span>`;g.appendChild(l)})}
function clusterText(v){v=String(v||'').trim();return v?(v.toLowerCase().startsWith('cluster')?v:'Cluster '+v):''}
function updateArea(card){let t=['Package '+($('.package',card).value||'-'),clusterText($('.cluster',card).value)||'-',$('.villaNo',card).value?`Villa ${$('.villaNo',card).value}`:'-'].join(' - ');$('.areaPreview',card).textContent='Area: '+t}
function apply(card,replace=true){
  let key=$('.observationCategory',card).value||'Other',p=PRESETS[key]||PRESETS.Other;
  fillPick($('.descriptionPick',card),p.desc,'Select description');
  fillPick($('.immediatePick',card),p.imm,'Select immediate action');
  fillPick($('.actionPick',card),p.act,'Select action');
  chips($('.descriptionChips',card),p.desc,$('.observationDescription',card),true);
  chips($('.immediateChips',card),p.imm,$('.immediateAction',card));
  chips($('.actionChips',card),p.act,$('.preventiveAction',card));
  // Manual-control behavior:
  // Category selection only prepares smart suggestions, root cause and legal references.
  // It will NOT overwrite Observation Description, Immediate Action, or Action Required.
  if($('.rootCause',card) && !$('.rootCause',card).value) $('.rootCause',card).value=p.root||'';
  if(replace){
    $('.rootCause',card).value=p.root||'';
    $('.observationDescription',card).value=bulleted(p.desc);
    $('.immediateAction',card).value=bulleted(p.imm);
    $('.preventiveAction',card).value=numbered(p.act);
  }
  let set=new Set(p.legal||[]);
  $$('.legalGrid input',card).forEach(c=>c.checked=set.has(c.value));
  updateArea(card);
}
function addObservation(seed={}){let f=$('#observationTpl').content.cloneNode(true);obsContainer.appendChild(f);let card=obsContainer.lastElementChild;opt($('.package',card),packages,'Select package');opt($('.observationCategory',card),CATEGORIES,'Select category');opt($('.rootCause',card),roots,'Select root cause');legalGrid(card);$('.package',card).onchange=()=>updateClusterAndOwner(card);$('.cluster',card).onchange=()=>updateArea(card);$('.villaNo',card).oninput=()=>updateArea(card);$('.observationCategory',card).onchange=()=>apply(card,false);$('.autofill',card).onclick=()=>apply(card,true);$('.smartImprove',card).onclick=()=>applySmartBriefToCard(card);if($('.buildFromManual',card)) $('.buildFromManual',card).onclick=()=>createStandardFromManual(card);if($('.combineFinal',card)) $('.combineFinal',card).onclick=()=>combineFinalOnCard(card);if($('.generationMode',card)) $('.generationMode',card).onchange=()=>setStatus('Final wording mode updated.');if($('.manualComments',card)) $('.manualComments',card).addEventListener('input',()=>previewManualInBoxes(card,false));$('.descriptionPick',card).onchange=e=>{$('.observationDescription',card).value=e.target.value};$('.immediatePick',card).onchange=e=>{$('.immediateAction',card).value=$('.immediateAction',card).value.trim()?$('.immediateAction',card).value.trim()+'\n'+e.target.value:e.target.value};$('.actionPick',card).onchange=e=>{$('.preventiveAction',card).value=$('.preventiveAction',card).value.trim()?$('.preventiveAction',card).value.trim()+'\n'+e.target.value:e.target.value};$('.removeObs',card).onclick=()=>{if($$('.obsCard').length>1){card.remove();renum()}else setStatus('At least one observation is required.',true)};$('.selectAllLegal',card).onclick=()=>$$('.legalGrid input',card).forEach(x=>x.checked=true);$('.clearLegal',card).onclick=()=>$$('.legalGrid input',card).forEach(x=>x.checked=false);$('.evidencePhotos',card).onchange=e=>{let p=$('.photoPreview',card);p.innerHTML='';[...e.target.files].forEach(file=>{let r=new FileReader();r.onload=ev=>{let img=document.createElement('img');img.src=ev.target.result;p.appendChild(img)};r.readAsDataURL(file)})};Object.entries(seed).forEach(([k,v])=>{let n=$('.'+k,card);if(n)n.value=v});updateClusterAndOwner(card,true);if(!seed.observationCategory)$('.observationCategory',card).value='';apply(card,false);renum()}
function renum(){$$('.obsCard').forEach((c,i)=>$('.obsNo',c).textContent=i+1)}
function getData(){return{projectTitle:$('#projectTitle').value.trim(),date:$('#inspectionDate').value,time:$('#inspectionTime').value,ref:$('#referenceNo').value.trim(),attendees:$$('#attendeeRows tr').map(r=>({name:$('.attendeeName',r).value.trim(),designation:$('.attendeeDesignation',r).value.trim(),entity:$('.attendeeEntity',r).value})).filter(x=>x.name||x.designation),observations:$$('.obsCard').map((c,i)=>({no:i+1,package:$('.package',c).value,cluster:$('.cluster',c).value.trim(),villa:$('.villaNo',c).value.trim(),category:$('.observationCategory',c).value,risk:$('.riskCategory',c).value,response:$('.responseCategory',c).value,owner:$('.actionOwner',c).value,root:$('.rootCause',c).value,closed:$('.dateClosed',c).value,manualComments:$('.manualComments',c)?$('.manualComments',c).value.trim():'',generationMode:'manual',desc:$('.observationDescription',c).value.trim(),immediate:'',actions:$('.preventiveAction',c).value.trim(),legal:$$('.legalGrid input',c).filter(x=>x.checked).map(x=>x.value).concat($('.legalCustom',c).value.trim()?[$('.legalCustom',c).value.trim()]:[]),photos:[...$('.evidencePhotos',c).files]}))}}
function fmtDate(d){if(!d)return'';let [y,m,day]=d.split('-');return `${day}.${m}.${y}`}function fmtTime(t){if(!t)return'';let [h,m]=t.split(':').map(Number);let ap=h>=12?'PM':'AM';h=h%12||12;return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')} ${ap}`}
function validate(d){if(!d.projectTitle)return'Project title is required.';if(!d.date)return'Date is required.';if(!d.ref)return'Reference number is required.';if(!d.attendees.length)return'At least one attendee is required.';for(let o of d.observations){if(!o.package)return`Observation ${o.no}: package is required.`;if(!o.category)return`Observation ${o.no}: category is required.`;if(!o.desc && !o.manualComments)return`Observation ${o.no}: description or manual comments are required.`;if(!o.actions && !o.manualComments)return`Observation ${o.no}: action required is required, or write manual comments and the system will generate it.`}return''}
async function arrBuf(file){return await file.arrayBuffer()}async function urlBuf(url){let r=await fetch(url);return await r.arrayBuffer()}
function para(text,opt={}){const {Paragraph,TextRun,AlignmentType}=docx;return new Paragraph({alignment:opt.center?AlignmentType.CENTER:undefined,spacing:{after:0,before:0,line:240},children:[new TextRun({text:String(text||' '),bold:!!opt.bold,font:'Poppins',size:opt.size||21,color:opt.color||'000000'})]})}
function cell(children,opt={}){const {TableCell,WidthType}=docx;return new TableCell({width:opt.width?{size:opt.width,type:WidthType.PERCENTAGE}:undefined,shading:opt.shade?{fill:'D9D9D9'}:undefined,borders:border,children:Array.isArray(children)?children:[children]})}
function textLines(text){return lines(text).map(x=>para(x))}
let border={top:{style:'single',size:6,color:'000000'},bottom:{style:'single',size:6,color:'000000'},left:{style:'single',size:6,color:'000000'},right:{style:'single',size:6,color:'000000'}};
async function generateWord(){try{const d=getData();d.observations=d.observations.map(enrichObservation);const err=validate(d);if(err){setStatus(err,true);return}const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,AlignmentType,Footer,ImageRun}=docx;let logo=await urlBuf('aldar.png');let attendeeRowsDoc=[new TableRow({children:[cell(para('Name',{bold:true,center:true}),{shade:true}),cell(para('Designation',{bold:true,center:true}),{shade:true}),cell(para('Entity',{bold:true,center:true}),{shade:true})]})];d.attendees.forEach(a=>attendeeRowsDoc.push(new TableRow({children:[cell(para(a.name,{center:true})),cell(para(a.designation,{center:true})),cell(para(a.entity,{center:true}))]})));let attendeesTable=new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:attendeeRowsDoc});let responseTable=new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:[new TableRow({children:[cell(para('Response Category',{bold:true,center:true}),{shade:true,width:22}),cell(para('Definition',{bold:true,center:true}),{shade:true,width:78})]}),...['A|An issue requiring immediate action to eliminate or reduce high risk','B|An issue requiring action within 24 hours to eliminate or reduce risk','C|An issue requiring action within 3 days to eliminate or reduce risk','D|An issue requiring action to meet best practice and continually improve standards at the site, with agreed timelines.'].map(x=>{let [a,b]=x.split('|');return new TableRow({children:[cell(para(a,{bold:true,center:true})),cell(para(b))]})})]});
let obsRows=[new TableRow({children:[cell(para('No.',{bold:true,center:true}),{shade:true,width:6}),cell(para('Observation',{bold:true,center:true}),{shade:true,width:64}),cell(para('By\nWhom',{bold:true,center:true}),{shade:true,width:10}),cell(para('Category',{bold:true,center:true}),{shade:true,width:8}),cell(para('Date\nClosed',{bold:true,center:true}),{shade:true,width:10})]})];let photoNo=1,allPhotos=[];for(let o of d.observations){let pars=[];pars.push(para(`Observation Category: ${o.category}`,{bold:true}));pars.push(para(`Risk Category: ${o.risk}`,{bold:true}));let area=[o.package?`Package ${o.package}`:'',clusterText(o.cluster),o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');pars.push(para(`Area: ${area}`,{bold:true}));if(o.root)pars.push(para(`Likely Root Cause: ${o.root}`,{bold:true}));pars.push(para('Observation Description:',{bold:true}));pars.push(...textLines(o.desc));pars.push(para('Action to be taken as agreed, but not limited to:',{bold:true}));pars.push(...textLines(o.actions));if(o.photos.length){let start=photoNo,end=photoNo+o.photos.length-1;pars.push(para(start===end?`Reference photo ${String(start).padStart(2,'0')}`:`Reference photos ${String(start).padStart(2,'0')} to ${String(end).padStart(2,'0')}`,{bold:true}));photoNo=end+1;o.photos.forEach(p=>allPhotos.push(p))}if(o.legal.length){pars.push(para('Legal/other Requirements:',{bold:true}));o.legal.forEach(l=>pars.push(para(l)))}obsRows.push(new TableRow({children:[cell(para(o.no,{center:true})),cell(pars),cell(para(o.owner,{center:true})),cell(para(o.response,{bold:true,center:true})),cell(para(fmtDate(o.closed),{center:true}))]}))}
let obsTable=new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:obsRows});let photoRows=[];let slots=Math.max(allPhotos.length,6);for(let i=0;i<slots;i+=3){let caps=[],imgs=[];for(let j=0;j<3;j++){let idx=i+j;caps.push(cell(para(`Photo ${String(idx+1).padStart(2,'0')}`,{bold:true,center:true})));if(allPhotos[idx]){let buf=await arrBuf(allPhotos[idx]);imgs.push(cell(new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:buf,transformation:{width:205,height:205}})]}))) }else imgs.push(cell([para(' '),para(' '),para(' ')]))}photoRows.push(new TableRow({children:caps}),new TableRow({children:imgs}))}let photosTable=new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:photoRows});let introArea=d.observations.map(o=>[o.package?`Package ${o.package}`:'',clusterText(o.cluster),o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ')).filter(Boolean)[0]||d.projectTitle;let doc=new Document({sections:[{properties:{page:{margin:{top:650,right:650,bottom:650,left:650}}},footers:{default:new Footer({children:[para('ALDAR OSH-MS Rev 08/ May-2025                              Appendix 13',{size:18})]})},children:[new Paragraph({alignment:AlignmentType.LEFT,children:[new ImageRun({data:logo,transformation:{width:74,height:74}})]}),para('OSH Inspection Report',{bold:true,center:true,size:30}),para(`Project Title: ${d.projectTitle}`,{bold:true}),new Paragraph({children:[new TextRun({text:`Date: ${fmtDate(d.date)}`,bold:true,font:'Poppins',size:21}),new TextRun({text:'                                             ',font:'Poppins',size:21}),new TextRun({text:`Time: ${fmtTime(d.time)}`,bold:true,font:'Poppins',size:21})]}),para(`Reference No: ${d.ref}`,{bold:true}),para('Attendees:',{bold:true}),attendeesTable,para(' '),responseTable,para(' '),para(`An OSH Inspection was carried out at ${introArea} on ${fmtDate(d.date)}. KEO International Consultants and contractor representatives were present during the OSH Site Inspection, and the following observations have been highlighted by KEO and appropriate actions should be taken by all the parties involved according to the response category and across the whole project.`),para('Observations:',{bold:true}),obsTable,para('Evidence photographs',{bold:true}),photosTable]}]});let blob=await Packer.toBlob(doc);let [y,m,day]=d.date.split('-');saveAs(blob,`ALDAR Projects OSH Inspection Report- ${d.ref}- ${day}-${m}-${y}_.docx`);setStatus('Final ALDAR Word file generated successfully.')}catch(e){console.error(e);setStatus('Error: '+e.message,true)}}
$('#addAttendeeBtn').onclick=()=>addAttendee();$('#addObservationBtn').onclick=()=>addObservation();$('#generateDocBtn').onclick=generateWord;
[
  {name:'Ugochukwu Godwin',designation:'OHS Manager',entity:'KEO'},
  {name:'Javed Iqbal',designation:'OSH Engineer',entity:'KEO'},
  {name:'Subbian Samraj',designation:'OHS Engineer',entity:'KEO'},
  {name:'Shakir Khan',designation:'OHS Engineer',entity:'KEO'},
  {name:'Shinoj M Chandran',designation:'OHS Officer',entity:'KEO'},
  {name:'Jackson Rodriguez',designation:'Safety Officer',entity:'KEO'},
  {name:'Abdelmonem Hussein',designation:'OSH Officer',entity:'KEO'}
].forEach(addAttendee);
addObservation();


// ================= PROFESSIONAL CONCISE REPORT ENGINE v4 =================
// Purpose: convert short/manual site notes into concise ALDAR/KEO professional wording
// with no duplicated sentences, no filler text, and scenario-specific immediate/corrective/preventive actions.
function aiCleanManualTextV4(text){
  return String(text||'')
    .replace(/\bbobcate\b/gi,'Bobcat')
    .replace(/\bbobcat\b/gi,'Bobcat')
    .replace(/\bjcb\b/gi,'JCB')
    .replace(/\bcat\b/gi,'CAT')
    .replace(/\bmiror\b/gi,'mirror')
    .replace(/\bwind shield\b/gi,'windshield')
    .replace(/\bglasss\b/gi,'glass')
    .replace(/\blader\b/gi,'ladder')
    .replace(/\bscafold\b/gi,'scaffold')
    .replace(/\s+/g,' ')
    .trim();
}
function aiSentenceCaseV4(s){
  s=String(s||'').trim();
  if(!s) return '';
  return s.charAt(0).toUpperCase()+s.slice(1).replace(/\s+([,.;:])/g,'$1');
}
function aiUniqueV4(arr){
  const out=[];
  const keys=[];
  (arr||[]).forEach(x=>{
    x=String(x||'').replace(/\s+/g,' ').trim();
    if(!x) return;
    x=x.replace(/^[-•\d.)\s]+/,'').trim();
    const k=x.toLowerCase()
      .replace(/"/g,'')
      .replace(/\b(the|a|an|and|or|shall|should|will|was|were|is|are|be|been|being|to|for|of|by|with|without|all|any|same|related|specific|condition|unsafe|affected|area|activity)\b/g,' ')
      .replace(/[^a-z0-9]+/g,' ')
      .replace(/\s+/g,' ')
      .trim();
    if(!k) return;
    let dup=false;
    for(const old of keys){
      if(k===old || (k.length>28 && old.length>28 && (k.includes(old)||old.includes(k)))){dup=true;break;}
    }
    if(!dup){keys.push(k);out.push(x);}
  });
  return out;
}
function aiBulletV4(arr){return aiUniqueV4(arr).map(x=>'• '+x).join('\n');}
function aiNumberV4(arr){return aiUniqueV4(arr).map((x,i)=>(i+1)+'. '+x).join('\n');}
function aiAreaV4(area){return area && !String(area).includes('- -') ? ' at '+String(area).replace(/^Area:\s*/,'').trim() : '';}
function aiEquipmentNameV4(text){
  const t=aiCleanManualTextV4(text);
  if(/\bJCB\b/i.test(t)) return 'JCB';
  if(/\bBobcat\b/i.test(t)) return 'Bobcat';
  if(/\bloader\b/i.test(t)) return 'loader';
  if(/\bexcavator\b/i.test(t)) return 'excavator';
  if(/\broller\b/i.test(t)) return 'roller';
  if(/\bcrane\b/i.test(t)) return 'crane';
  if(/\bforklift\b/i.test(t)) return 'forklift';
  if(/\bvehicle\b|\btruck\b|\bbus\b|\bcar\b/i.test(t)) return 'vehicle';
  return 'plant/equipment';
}
function aiIssueSignatureV4(text){
  const t=aiCleanManualTextV4(text).toLowerCase();
  if(/(jcb|bobcat|loader|excavator|vehicle|truck|forklift|plant|equipment).*(broken|damaged|crack|cracked).*(glass|windshield|window|screen)|((broken|damaged|crack|cracked).*(glass|windshield|window|screen).*(jcb|bobcat|loader|excavator|vehicle|truck|forklift|plant|equipment))/i.test(t)) return 'plant_broken_glass';
  if(/(jcb|bobcat|loader|excavator|vehicle|truck|forklift|plant|equipment).*(no|missing|damaged|broken).*(side\s*)?mirror|((no|missing|damaged|broken).*(side\s*)?mirror.*(jcb|bobcat|loader|excavator|vehicle|truck|forklift|plant|equipment))/i.test(t)) return 'plant_missing_mirror';
  if(/\b(no|missing|damaged|broken)\s+(side\s*)?mirror\b/i.test(t)) return 'plant_missing_mirror';
  if(/\b(broken|damaged|cracked)\s+(glass|windshield|window|screen)\b/i.test(t)) return 'plant_broken_glass';
  if(/\bunsafe ladder\b|\bladder\b/i.test(t)) return 'unsafe_ladder';
  if(/open\s*db|db\s*open|distribution board|\bdb\b/i.test(t)) return 'open_db';
  if(/cable|temporary electrical|live wire|earthing/i.test(t)) return 'cable_management';
  if(/scaffold|mobile tower|outrigger|platform|green tag|red tag/i.test(t)) return 'scaffold';
  if(/excavation|trench|open trench/i.test(t)) return 'excavation';
  if(/edge protection|leading edge|guardrail|toe.?board/i.test(t)) return 'edge_protection';
  if(/opening|manhole|rebar|barricad/i.test(t)) return 'opening_barricade';
  if(/cold drinking water|drinking water|rest area|toilet|welfare|air.?condition|a\/c|\bac\b|smoke detector/i.test(t)) return 'welfare';
  if(/housekeeping|waste|debris|garbage/i.test(t)) return 'housekeeping';
  if(/fire|extinguisher|hose reel|smoke detector|combustible|chemical|storage/i.test(t)) return 'fire';
  if(/traffic|banksman|flagman|man.?machine|reversing|vehicle/i.test(t)) return 'traffic';
  if(/lifting|precast|crane|sling|rigging|trailer/i.test(t)) return 'lifting';
  if(/ppe|helmet|glove|goggle|harness/i.test(t)) return 'ppe';
  if(/permit|ptw|work permit/i.test(t)) return 'ptw';
  return 'general';
}
function aiDetectManualRuleV4(text,selectedCategory=''){
  const sig=aiIssueSignatureV4(text);
  if(sig==='plant_broken_glass'||sig==='plant_missing_mirror') return 'plant';
  if(sig==='unsafe_ladder') return 'ladder';
  if(sig==='open_db'||sig==='cable_management') return 'electrical';
  if(sig==='scaffold') return 'scaffold';
  if(sig==='excavation') return 'excavation';
  if(sig==='edge_protection') return 'edge';
  if(sig==='opening_barricade') return 'barricade';
  if(sig==='welfare') return 'welfare';
  if(sig==='housekeeping') return 'housekeeping';
  if(sig==='fire') return 'fire';
  if(sig==='traffic') return 'traffic';
  if(sig==='lifting') return 'lifting';
  if(sig==='ppe') return 'ppe';
  if(sig==='ptw') return 'ptw';
  const c=String(selectedCategory||'').toLowerCase();
  if(/electrical|tool/.test(c)) return 'electrical';
  if(/ladder/.test(c)) return 'ladder';
  if(/scaffold/.test(c)) return 'scaffold';
  if(/excavation/.test(c)) return 'excavation';
  if(/permit|ptw/.test(c)) return 'ptw';
  if(/edge|falling/.test(c)) return 'edge';
  if(/barricad|floor/.test(c)) return 'barricade';
  if(/welfare/.test(c)) return 'welfare';
  if(/access/.test(c)) return 'access';
  if(/housekeeping|waste/.test(c)) return 'housekeeping';
  if(/fire|storage/.test(c)) return 'fire';
  if(/traffic|logistics|man-machine/.test(c)) return 'traffic';
  if(/lifting|precast/.test(c)) return 'lifting';
  if(/plant|equipment/.test(c)) return 'plant';
  if(/ppe/.test(c)) return 'ppe';
  if(/msra/.test(c)) return 'msra';
  return 'general';
}
function aiSplitManualPointsV4(text){
  const raw=aiCleanManualTextV4(text);
  if(!raw) return [];
  const sig=aiIssueSignatureV4(raw);
  // Keep equipment defect phrases together, e.g. "Bobcat have no side mirror" must not split into two issues.
  if(sig==='plant_broken_glass'||sig==='plant_missing_mirror') return [raw];
  let pts=raw
    .replace(/\bno\s+/gi,' | no ')
    .replace(/\bnot\s+/gi,' | not ')
    .replace(/\bwithout\s+/gi,' | without ')
    .replace(/\bmissing\s+/gi,' | missing ')
    .replace(/\band also\b/gi,' | ')
    .replace(/\balso\b/gi,' | ')
    .replace(/\bplus\b/gi,' | ')
    .replace(/\n+/g,' | ')
    .replace(/[;,]+/g,' | ')
    .split('|').map(x=>x.trim()).filter(Boolean);
  return aiUniqueV4(pts).slice(0,10);
}
function aiLegalForSigV4(sig,rule,selectedCategory){
  if(sig==='plant_broken_glass'||sig==='plant_missing_mirror') return ['ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 44.0 - Traffic Management and Logistics','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
  return legalFromRule(rule,selectedCategory);
}
function aiProfessionalFromManualV4(text,selectedCategory='',area=''){
  const clean=aiCleanManualTextV4(text);
  const sig=aiIssueSignatureV4(clean);
  const rule=aiDetectManualRuleV4(clean,selectedCategory);
  const areaText=aiAreaV4(area);
  const eq=aiEquipmentNameV4(clean);
  let category=categoryFromRule(rule), root=rootFromRule(rule), desc=[], imm=[], act=[];
  if(sig==='plant_broken_glass'){
    category='Plant and Equipment';
    root='Inadequate pre-use inspection / Poor equipment maintenance control';
    desc=[`It was observed that the ${eq} had broken / damaged glass${areaText}, creating risk of cuts from sharp edges, reduced operator visibility and potential struck-by or man-machine interface incidents.`];
    imm=[`The ${eq} was stopped and removed from service immediately until the broken / damaged glass was made safe and repaired.`,
         `The operator and responsible supervisor were instructed not to operate the ${eq} until inspection, repair and verification were completed.`,
         `Any broken glass fragments / sharp edges were required to be removed or controlled to prevent injury to workers.`];
    act=[`Replace or repair the broken / damaged glass by competent maintenance personnel before the ${eq} is returned to service.`,
         `Inspect the ${eq} cabin, windshield/windows, mirrors and visibility aids to confirm safe operating condition.`,
         `Tag out defective plant and prevent operation until the supervisor / plant team verifies the repair.`,
         `Update and enforce the daily plant pre-use checklist to include glass, mirrors, visibility and cabin condition.`,
         `Brief operators and supervisors to report plant defects immediately and not operate equipment with damaged glass or restricted visibility.`];
  } else if(sig==='plant_missing_mirror'){
    category='Plant and Equipment';
    root='Inadequate pre-use inspection / Poor equipment maintenance control';
    desc=[`It was observed that the ${eq} was missing / had a damaged side mirror${areaText}, reducing operator visibility and increasing the risk of collision, reversing incident and man-machine interface injury.`];
    imm=[`The ${eq} operation was stopped immediately and the equipment was removed from service pending replacement / rectification of the side mirror.`,
         `The operator and responsible supervisor were instructed not to operate the ${eq} until visibility aids were restored and verified.`,
         `The affected movement area was kept under supervision to prevent further unsafe operation.`];
    act=[`Replace the missing / damaged side mirror and verify the operator has clear visibility before the ${eq} is returned to service.`,
         `Inspect all visibility aids including mirrors, reverse alarm, beacon, lights and cabin condition during the plant pre-use inspection.`,
         `Tag out any plant with defective visibility aids and prevent operation until maintenance closeout is verified.`,
         `Update plant inspection records to include side mirror / visibility checks and retain closeout evidence.`,
         `Brief operators, banksmen and supervisors on defect reporting and the requirement to stop equipment with restricted visibility.`];
  } else if(sig==='unsafe_ladder'){
    category='Work at Height'; root='Unsafe ladder use / Poor work at height supervision';
    desc=[`It was observed that an unsafe ladder arrangement was being used${areaText}, exposing workers to fall from height, loss of balance and serious injury.`];
    imm=['Unsafe ladder use was stopped immediately and the ladder was removed / restricted from further use.','The supervisor was instructed to provide a safe access method or suitable working platform before work continued.','Workers were instructed not to use unsafe or unsecured ladders.'];
    act=['Remove unsafe ladders from service and replace them with a suitable access method or working platform.','Inspect all ladders before use and ensure they are secured, positioned correctly and suitable for the task.','Do not use ladders as working platforms for sustained work, overreaching or activities requiring both hands.','Brief workers on safe ladder use, three-point contact and stop-work requirements.','Inspect similar locations to remove improper temporary access arrangements.'];
  } else {
    const pts=aiSplitManualPointsV4(clean);
    pts.forEach(pt=>desc.push(specificObservationSentence(pt,areaText).replace(/, requiring immediate corrective and preventive action by the responsible contractor\.?/i,'.')));
    if(!desc.length) desc=[`It was observed that ${clean}${areaText}, requiring corrective action by the responsible contractor.`];
    imm=pts.flatMap(pt=> immediateSentenceForPoint(pt,areaText)).slice(0,4);
    act=pts.flatMap(pt=> preventiveSentencesForPoint(pt,areaText)).slice(0,6);
    // Remove generic/filler fallback phrases where possible.
    imm=imm.filter(x=>!/define and implement immediate controls suitable/i.test(x));
    act=act.filter(x=>!/exact unsafe condition related|not only closes the observation|same type of deficiency/i.test(x));
    if(!imm.length) imm=['The unsafe condition was communicated to the responsible supervisor and the affected activity / area was controlled until rectified.'];
    if(!act.length) act=['Rectify the unsafe condition and submit closeout evidence for verification.','Inspect similar work areas / activities and close out any repeated deficiencies.','Brief the responsible supervisors and workforce on the required control measures.'];
  }
  return {category,root,desc:aiBulletV4(desc.slice(0,2)),immediate:aiBulletV4(imm.slice(0,3)),actions:aiNumberV4(act.slice(0,5)),legal:aiLegalForSigV4(sig,rule,selectedCategory)};
}
// Override old manual report engine.
function buildSpecificManualReport(text, selectedCategory='', area=''){
  return aiProfessionalFromManualV4(text, selectedCategory, area);
}
function splitManualPointsSpecific(text){ return aiSplitManualPointsV4(text); }
function detectManualRule(text, selectedCategory=''){ return aiDetectManualRuleV4(text, selectedCategory); }
function previewManualInBoxes(card,force=false){
  const manual=$('.manualComments',card)?.value.trim()||'';
  if(!manual) return;
  const area=$('.areaPreview',card)?.textContent.replace(/^Area:\s*/,'')||'';
  const built=buildSpecificManualReport(manual,$('.observationCategory',card).value,area);
  if(!$('.observationCategory',card).value || $('.observationCategory',card).value==='Other') $('.observationCategory',card).value=built.category;
  addOptionIfMissing($('.rootCause',card),built.root); $('.rootCause',card).value=built.root;
  [['.observationDescription','desc'],['.immediateAction','immediate'],['.preventiveAction','actions']].forEach(([sel,key])=>{
    const el=$(sel,card); if(!el) return;
    const wasAuto=el.dataset.smartGenerated==='1';
    if(force || wasAuto || !el.value.trim()){ el.value=built[key]; el.dataset.smartGenerated='1'; }
  });
  $$('.legalGrid input',card).forEach(x=>x.checked=(built.legal||[]).includes(x.value));
  setStatus('Professional concise observation wording generated from your manual comments.');
}
function applyManualToObservationObject(o){
  const manual=aiCleanManualTextV4(o.manualComments);
  if(!manual) return o;
  const area=[o.package?`Package ${o.package}`:'', clusterText(o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');
  const built=buildSpecificManualReport(manual, o.category, area);
  return {...o,category:(!o.category||o.category==='Other')?built.category:o.category,root:built.root,desc:built.desc,immediate:built.immediate,actions:built.actions,legal:(o.legal&&o.legal.length)?o.legal:built.legal};
}
function mergeManualAndAutoObservation(o){
  // Manual wording is treated as the main source to avoid duplicate auto-template lines in the Word report.
  const manual=applyManualToObservationObject(o);
  const customDesc=smartLineList(o.desc).filter(x=>!/it was observed|above deficiencies|observation shall be treated/i.test(x));
  const customImm=smartLineList(o.immediate).filter(x=>!/specific unsafe condition|responsible supervisor|closeout is verified/i.test(x));
  const customAct=smartLineList(o.actions).filter(x=>!/exact unsafe condition|similar locations|lessons learned|closeout evidence/i.test(x));
  const desc=aiBulletV4([...smartLineList(manual.desc), ...customDesc].slice(0,3));
  const immediate=aiBulletV4([...smartLineList(manual.immediate), ...customImm].slice(0,4));
  const actions=aiNumberV4([...smartLineList(manual.actions), ...customAct].slice(0,7));
  return {...manual,desc,immediate,actions,legal:unique([...(manual.legal||[]),...(o.legal||[])])};
}
function finaliseObservationByMode(o){
  const mode=o.generationMode||'hybrid';
  if(o.manualComments && o.manualComments.trim()){
    if(mode==='auto'){
      const auto=selectedAutoFromObservation(o);
      return {...o,root:o.root||auto.root,desc:aiBulletV4(auto.desc),immediate:aiBulletV4(auto.immediate),actions:aiNumberV4(auto.actions),legal:unique([...(o.legal||[]),...(auto.legal||[])])};
    }
    return mode==='manual' ? applyManualToObservationObject(o) : mergeManualAndAutoObservation(o);
  }
  return o;
}

// --- Noor final professional concise override: ADOSH CoP category names only; no Immediate Action section ---
const RULE_TO_ADOSH_COP={
  welfare:'General Workplace Amenities', electrical:'Electrical Safety', ladder:'Working at Heights', scaffold:'Scaffolding', excavation:'Excavation Work', ptw:'Permit to Work Systems', edge:'Working at Heights', access:'Barricading of Hazards', housekeeping:'General Workplace Amenities', fire:'Hot Work Operations', lifting:'Safe Use of Lifting Equipment and Lifting Accessories', traffic:'Traffic Management and Logistics', plant:'Plant and Equipment', ppe:'Personal Protective Equipment', msra:'OSH Management During Construction Work', general:'OSH Management During Construction Work'
};
function normalizeCategoryToAdosh(rule, selectedCategory=''){
  if(selectedCategory && ADOSH_COP_CATEGORIES.includes(selectedCategory)) return selectedCategory;
  return RULE_TO_ADOSH_COP[rule] || 'OSH Management During Construction Work';
}
function conciseObservationSentence(pt, areaText=''){
  let clean=String(pt||'').trim().replace(/^(and|also|plus)\s+/i,'').replace(/\s+/g,' ');
  clean=clean.replace(/^(no|not|without)\s+/i,m=>m.toLowerCase());
  if(!clean) return '';
  return `It was observed that ${clean}${areaText}.`;
}
function conciseActionSentence(pt){
  const t=String(pt||'').trim().replace(/\s+/g,' ');
  const l=t.toLowerCase();
  if(/open\s*db|distribution board|db\b|electrical|cable|earthing/.test(l)) return 'Rectify the electrical deficiency, close/secure DBs, manage cables safely and verify by competent electrical supervision.';
  if(/scaffold|outrigger|platform|plank|tag/.test(l)) return 'Rectify the scaffold, provide all required components and inspect/tag it by a competent scaffolding inspector before use.';
  if(/ladder/.test(l)) return 'Remove unsafe ladder use and provide a safe access method or suitable working platform before work continues.';
  if(/excavation|trench|manhole/.test(l)) return 'Provide hard barricading, warning signage, safe access/egress and maintain required edge setback for the excavation.';
  if(/edge|guardrail|toe\s*board|fall|roof/.test(l)) return 'Provide compliant edge protection/fall prevention and verify the control before allowing work at height.';
  if(/access|egress|walkway|blocked|obstruct/.test(l)) return 'Clear and maintain safe access/egress routes, with demarcation and daily supervision checks.';
  if(/housekeeping|waste|debris|garbage/.test(l)) return 'Remove waste/debris immediately and maintain routine housekeeping inspection and closeout evidence.';
  if(/fire|extinguisher|smoke|hot work|combustible|storage|chemical/.test(l)) return 'Remove/control combustible or fire-risk materials and provide required fire prevention arrangements and inspection evidence.';
  if(/lifting|crane|sling|rigging|precast|panel|a-frame|trailer/.test(l)) return 'Stop unsafe lifting/precast handling until approved lifting controls, competent supervision and exclusion zones are verified.';
  if(/traffic|vehicle|banksman|flagman|revers|road/.test(l)) return 'Implement traffic control, segregation, banksman/flagman support and safe vehicle movement arrangements.';
  if(/plant|equipment|loader|machine|mirror|glass|compressor/.test(l)) return 'Remove defective plant/equipment from service and return it only after maintenance repair and pre-use inspection verification.';
  if(/ppe|helmet|glove|goggle|harness|face shield/.test(l)) return 'Provide and enforce the required task-specific PPE and brief workers/supervisors on compliance.';
  if(/permit|ptw|work permit/.test(l)) return 'Stop the activity until valid PTW approval and physical site verification of controls are completed.';
  return `Rectify the identified condition (${t}) and submit photo closeout evidence after supervisor verification.`;
}
function aiProfessionalFromManualV4(text,selectedCategory='',area=''){
  const clean=aiCleanManualTextV4(text);
  const rule=aiDetectManualRuleV4(clean,selectedCategory);
  const areaText=aiAreaV4(area);
  const pts=aiSplitManualPointsV4(clean).slice(0,6);
  const category=normalizeCategoryToAdosh(rule,selectedCategory);
  const root=rootFromRule(rule);
  let desc=pts.map(pt=>conciseObservationSentence(pt,areaText)).filter(Boolean);
  if(!desc.length && clean) desc=[`It was observed that ${clean}${areaText}.`];
  let actions=pts.map(conciseActionSentence).filter(Boolean);
  actions.push('Inspect similar locations/activities and close out any repeated deficiency.');
  actions.push('Brief the responsible supervisor and workforce on the required task-specific controls.');
  actions=aiUniqueV4(actions).slice(0,5);
  return {category,root,desc:aiBulletV4(desc.slice(0,3)),immediate:'',actions:aiNumberV4(actions),legal:legalFromRule(rule,selectedCategory)};
}
function previewManualInBoxes(card,force=false){
  const manual=$('.manualComments',card)?.value.trim()||'';
  if(!manual) return;
  const area=$('.areaPreview',card)?.textContent.replace(/^Area:\s*/,'')||'';
  const selected=$('.observationCategory',card).value;
  const built=buildSpecificManualReport(manual,selected,area);
  if(!selected) $('.observationCategory',card).value=built.category;
  addOptionIfMissing($('.rootCause',card),built.root); $('.rootCause',card).value=built.root;
  const descEl=$('.observationDescription',card), actEl=$('.preventiveAction',card);
  if(force || descEl.dataset.smartGenerated==='1' || !descEl.value.trim()){descEl.value=built.desc;descEl.dataset.smartGenerated='1';}
  if(force || actEl.dataset.smartGenerated==='1' || !actEl.value.trim()){actEl.value=built.actions;actEl.dataset.smartGenerated='1';}
  $$('.legalGrid input',card).forEach(x=>x.checked=(built.legal||[]).includes(x.value));
  setStatus('Professional concise observation and action generated from your manual comments.');
}
function createStandardFromManual(card){
  const manual=$('.manualComments',card)?.value.trim() || $('.observationDescription',card).value.trim();
  if(!manual){setStatus('Write your manual observation comment first, then click Smart expand current description.',true);return;}
  if(!$('.manualComments',card).value.trim()) $('.manualComments',card).value=manual;
  previewManualInBoxes(card,true);
}
function applySmartBriefToCard(card){ createStandardFromManual(card); }
function apply(card,replace=false){
  const selected=$('.observationCategory',card).value;
  const rule=smartRuleFor('',selected);
  const presetKey=({
    'General Workplace Amenities':'Welfare Arrangement','Electrical Safety':'Temporary Electrical','Working at Heights':'Work at Height','Scaffolding':'Scaffolding','Excavation Work':'Excavation','Permit to Work Systems':'Permit to Work','Traffic Management and Logistics':'Traffic Management','Plant and Equipment':'Plant and Equipment','Personal Protective Equipment':'Personal Protective Equipment','Safe Use of Lifting Equipment and Lifting Accessories':'Lifting Operations','Barricading of Hazards':'Access and Egress','Hot Work Operations':'Fire Prevention / Material Storage','OSH Management During Construction Work':'Leadership / Supervision'
  })[selected] || 'Other';
  const p=PRESETS[presetKey]||PRESETS.Other;
  if($('.rootCause',card) && !$('.rootCause',card).value) $('.rootCause',card).value=p.root||'';
  let set=new Set(p.legal||[]); $$('.legalGrid input',card).forEach(c=>c.checked=set.has(c.value));
  updateArea(card);
}
function addObservation(seed={}){
  let f=$('#observationTpl').content.cloneNode(true); obsContainer.appendChild(f); let card=obsContainer.lastElementChild;
  opt($('.package',card),packages,'Select package'); opt($('.observationCategory',card),CATEGORIES,'Select category'); opt($('.rootCause',card),roots,'Select root cause'); legalGrid(card);
  $('.package',card).onchange=()=>updateClusterAndOwner(card); $('.cluster',card).onchange=()=>updateArea(card); $('.villaNo',card).oninput=()=>updateArea(card);
  $('.observationCategory',card).onchange=()=>apply(card,false); $('.smartImprove',card).onclick=()=>applySmartBriefToCard(card);
  if($('.manualComments',card)) $('.manualComments',card).addEventListener('input',()=>previewManualInBoxes(card,false));
  $('.removeObs',card).onclick=()=>{if($$('.obsCard').length>1){card.remove();renum()}else setStatus('At least one observation is required.',true)};
  $('.selectAllLegal',card).onclick=()=>$$('.legalGrid input',card).forEach(x=>x.checked=true); $('.clearLegal',card).onclick=()=>$$('.legalGrid input',card).forEach(x=>x.checked=false);
  $('.evidencePhotos',card).onchange=e=>{let p=$('.photoPreview',card);p.innerHTML='';[...e.target.files].forEach(file=>{let r=new FileReader();r.onload=ev=>{let img=document.createElement('img');img.src=ev.target.result;p.appendChild(img)};r.readAsDataURL(file)})};
  Object.entries(seed).forEach(([k,v])=>{let n=$('.'+k,card);if(n)n.value=v}); updateClusterAndOwner(card,true); if(!seed.observationCategory)$('.observationCategory',card).value=''; apply(card,false); renum();
}
function getData(){return{projectTitle:$('#projectTitle').value.trim(),date:$('#inspectionDate').value,time:$('#inspectionTime').value,ref:$('#referenceNo').value.trim(),attendees:$$('#attendeeRows tr').map(r=>({name:$('.attendeeName',r).value.trim(),designation:$('.attendeeDesignation',r).value.trim(),entity:$('.attendeeEntity',r).value})).filter(x=>x.name||x.designation),observations:$$('.obsCard').map((c,i)=>({no:i+1,package:$('.package',c).value,cluster:$('.cluster',c).value.trim(),villa:$('.villaNo',c).value.trim(),category:$('.observationCategory',c).value,risk:$('.riskCategory',c).value,response:$('.responseCategory',c).value,owner:$('.actionOwner',c).value,root:$('.rootCause',c).value,closed:$('.dateClosed',c).value,manualComments:$('.manualComments',c)?$('.manualComments',c).value.trim():'',generationMode:'manual',desc:$('.observationDescription',c).value.trim(),immediate:'',actions:$('.preventiveAction',c).value.trim(),legal:$$('.legalGrid input',c).filter(x=>x.checked).map(x=>x.value).concat($('.legalCustom',c).value.trim()?[$('.legalCustom',c).value.trim()]:[]),photos:[...$('.evidencePhotos',c).files]}))}}
function finaliseObservationByMode(o){ return applyManualToObservationObject(o); }

// ================= TASK-SPECIFIC SMART OBSERVATION ENGINE v5 =================
// Final override: selected ADOSH category + short manual note => specific concise observation and corrective actions.
function v5Norm(t){return String(t||'').replace(/\s+/g,' ').trim();}
function v5Lower(t){return v5Norm(t).toLowerCase();}
function v5Area(area){
  const a=String(area||'').replace(/^Area:\s*/,'').trim();
  if(!a || /^[-\s]+$/.test(a) || a.includes('- -')) return '';
  return ' at '+a;
}
function v5Detect(text,cat=''){
  const t=v5Lower(text), c=v5Lower(cat);
  if(/scaffold|mobile tower|tower scaffold|outrigger|green tag|red tag|plank|guardrail|midrail|toe.?board|base plate|bracing/.test(t) || /scaffold/.test(c)){
    if(/incomplete|missing|not complete|without|required component|component/.test(t)) return 'scaffold_incomplete';
    if(/outrigger/.test(t)) return 'scaffold_outrigger';
    if(/tag|green|red/.test(t)) return 'scaffold_tag';
    if(/plank|platform/.test(t)) return 'scaffold_platform';
    return 'scaffold_unsafe';
  }
  if(/open\s*db|db\s*open|distribution board|live wire|exposed cable|temporary electrical|cable management|rccb|rcd|earthing/.test(t) || /electrical/.test(c)) return 'electrical';
  if(/excavation|trench|open trench|trial pit/.test(t) || /excavation/.test(c)) return 'excavation';
  if(/edge protection|leading edge|floor edge|guardrail|fall protection|roof/.test(t) || /working at heights/.test(c)) return 'wah_edge';
  if(/ladder/.test(t)) return 'ladder';
  if(/access|egress|walkway|blocked|obstructed|route|ramp|stair/.test(t) || /barricading/.test(c)) return 'access';
  if(/housekeeping|waste|debris|garbage|food waste|scrap/.test(t) || /waste management/.test(c)) return 'housekeeping';
  if(/fire|extinguisher|smoke detector|combustible|flammable|hot work|storage|chemical/.test(t) || /hot work|hazardous materials/.test(c)) return 'fire_storage';
  if(/traffic|vehicle|road|banksman|flagman|reverse|reversing|man.?machine|pedestrian/.test(t) || /traffic|road/.test(c)) return 'traffic';
  if(/lifting|crane|sling|rigging|precast|panel|a.?frame|trailer/.test(t) || /lifting|pre cast/.test(c)) return 'lifting';
  if(/plant|equipment|bobcat|jcb|excavator|loader|forklift|mirror|glass|windshield|beacon|reverse alarm/.test(t) || /plant and equipment/.test(c)) return 'plant';
  if(/ppe|helmet|glove|goggle|face shield|safety shoe|harness/.test(t) || /personal protective/.test(c)) return 'ppe';
  if(/permit|ptw|work permit/.test(t) || /permit/.test(c)) return 'ptw';
  if(/welfare|rest area|toilet|drinking water|water station|amenit|a\/c|ac |air conditioning|heat/.test(t) || /amenities|heat/.test(c)) return 'welfare';
  if(/tool|grinder|cutting|abrasive wheel|power tool/.test(t) || /portable power tools|abrasive/.test(c)) return 'tools';
  return 'general';
}
function v5CleanIssue(text){
  return v5Norm(text)
    .replace(/^it\s+was\s+observed\s+that\s+/i,'')
    .replace(/^observed\s+/i,'')
    .replace(/\.$/,'');
}
function v5Specific(rule, raw, area){
  const issue=v5CleanIssue(raw);
  const areaText=v5Area(area);
  const lower=v5Lower(raw);
  const M={
    scaffold_incomplete:{
      root:'Scaffolding inspection failure / Incomplete erection control',
      desc:[`It was observed that the scaffold was incomplete${areaText}, with required scaffold components / safeguards not confirmed in place before use, creating fall-from-height and falling-object risk.`],
      act:[`Complete the scaffold by providing all required components including guardrails, mid-rails, toe boards, bracing, base plates, safe access ladder, platform planks, locking pins and outriggers where applicable.`,`Stop use of the scaffold until it is inspected and tagged by a competent scaffolding inspector after full rectification.`,`Remove any loose / unsecured planks and prevent unauthorised modification by non-scaffolding personnel.`,`Inspect nearby scaffolds / mobile towers for the same incomplete erection condition and close out all repeated deficiencies.`,`Brief scaffold users and supervisors that incomplete or untagged scaffolds shall not be accessed or used.`]
    },
    scaffold_outrigger:{root:'Scaffolding stability control failure / Poor inspection',desc:[`It was observed that the scaffold was being used without required outriggers / stabilisers${areaText}, affecting scaffold stability and creating overturning and fall-from-height risk.`],act:[`Install and lock the required outriggers / stabilisers as per manufacturer requirements before use.`,`Stop scaffold use until a competent scaffolding inspector verifies stability, platform condition and tagging.`,`Ensure scaffold is positioned on firm, level ground with base plates / wheels locked as applicable.`,`Inspect similar mobile scaffolds for missing outriggers or unstable setup.`,`Brief supervisors and scaffold users on mobile scaffold stability requirements.`]},
    scaffold_tag:{root:'Scaffolding inspection / tagging control failure',desc:[`It was observed that scaffold inspection / tagging control was not properly maintained${areaText}, allowing potential use without confirmed competent inspection.`],act:[`Remove the scaffold from service until competent inspection is completed and the correct tag is displayed.`,`Do not allow workers to use any scaffold without valid inspection status.`,`Maintain scaffold inspection records after erection, alteration, relocation or adverse weather.`,`Inspect similar scaffolds for missing / expired / incorrect tags.`,`Brief supervisors and workers on scaffold tag requirements and stop-work controls.`]},
    scaffold_platform:{root:'Scaffolding platform control failure / Poor supervision',desc:[`It was observed that the scaffold working platform / planking arrangement was incomplete or unsafe${areaText}, creating fall-through, trip and fall-from-height risk.`],act:[`Provide fully decked, secured and gap-free scaffold platforms suitable for the work activity.`,`Remove loose, damaged or unsupported planks immediately.`,`Stop scaffold use until the platform, guardrails, toe boards and access are inspected and tagged by a competent person.`,`Inspect similar scaffold platforms for unsafe planking conditions.`,`Brief workers not to alter scaffold planks or access incomplete platforms.`]},
    scaffold_unsafe:{root:'Scaffolding control failure / Poor supervision',desc:[`It was observed that the scaffold arrangement was unsafe${areaText}, creating fall-from-height, instability and falling-object exposure to workers.`],act:[`Stop use of the unsafe scaffold and restrict access until full rectification is completed.`,`Verify guardrails, mid-rails, toe boards, bracing, base plates, access ladder, platform planks and tagging before use.`,`Ensure any modification is carried out only by competent scaffolders.`,`Inspect similar scaffolds in the area and close out repeated deficiencies.`,`Brief supervisors and workers on scaffold access and inspection requirements.`]},
    electrical:{root:'Electrical safety control failure / Inadequate inspection',desc:[`It was observed that temporary electrical arrangements were unsafe (${issue})${areaText}, creating electric shock, burn, fire and trip hazard exposure.`],act:[`Rectify the electrical deficiency by a competent electrician and make the installation safe before re-energising / continued use.`,`Close and secure DB panels, protect live parts, and route / elevate cables to remove damage and trip hazards.`,`Verify RCD/RCCB protection, earthing and cable condition as applicable.`,`Inspect similar temporary electrical points and close out repeated defects.`,`Brief supervisors and workers not to use damaged, exposed or unauthorised electrical arrangements.`]},
    excavation:{root:'Excavation planning / barricading control failure',desc:[`It was observed that excavation safety controls were inadequate (${issue})${areaText}, creating fall, collapse, struck-by and unsafe access / egress risk.`],act:[`Provide rigid barricading, warning signage and safe access / egress for the excavation before work continues.`,`Maintain safe setback distance for materials, equipment and plant from excavation edges.`,`Verify excavation inspection, PTW and supervision controls before allowing workers near the excavation.`,`Inspect similar excavations / trenches and close out repeated deficiencies.`,`Brief supervisors and workers on excavation edge protection and access requirements.`]},
    wah_edge:{root:'Work at height planning / fall protection failure',desc:[`It was observed that work at height / edge protection controls were inadequate (${issue})${areaText}, exposing workers to fall-from-height and falling-object risk.`],act:[`Provide compliant collective fall protection such as guardrails, mid-rails, toe boards or approved covers before work continues.`,`Stop work near unprotected edges until controls are physically verified by responsible supervision.`,`Use suitable working platforms / anchorage and full body harness only where required by the approved method statement.`,`Inspect similar leading edges, roof areas and openings for missing fall protection.`,`Brief supervisors and workers on work-at-height permit, edge protection and stop-work requirements.`]},
    ladder:{root:'Unsafe ladder use / Poor work at height supervision',desc:[`It was observed that ladder use was unsafe (${issue})${areaText}, exposing workers to fall-from-height and loss-of-balance risk.`],act:[`Remove the unsafe ladder arrangement and provide a suitable safe access method or working platform.`,`Ensure ladders are inspected, secured, correctly angled and used only for short-duration light tasks.`,`Prohibit overreaching and use of ladders as working platforms where scaffold / mobile tower is required.`,`Inspect similar ladder access arrangements and close out repeated deficiencies.`,`Brief workers on three-point contact and ladder stop-work requirements.`]},
    access:{root:'Poor access / egress planning and housekeeping control',desc:[`It was observed that safe access / egress was not adequately maintained (${issue})${areaText}, creating slip, trip, fall and emergency evacuation obstruction risk.`],act:[`Clear the access / egress route and remove obstructions, debris, cables or unsafe temporary arrangements.`,`Provide safe ramps, steps, walkways or access bridges where required.`,`Demarcate pedestrian routes and keep emergency access clear at all times.`,`Inspect similar access routes and close out repeated deficiencies.`,`Brief supervisors and workforce on maintaining clear access and egress.`]},
    housekeeping:{root:'Poor housekeeping supervision / Waste control failure',desc:[`It was observed that housekeeping was poor (${issue})${areaText}, creating slip, trip, pest, hygiene and fire-load risk.`],act:[`Remove waste, debris and unwanted materials from the work area immediately.`,`Provide designated waste bins / skips and maintain routine cleaning frequency.`,`Assign responsible supervision for daily housekeeping inspection and closeout evidence.`,`Inspect similar villas / work fronts for repeated housekeeping deficiencies.`,`Brief workers that food waste and debris shall not be left inside villas or work areas.`]},
    fire_storage:{root:'Fire prevention / material storage control failure',desc:[`It was observed that fire prevention / material storage control was inadequate (${issue})${areaText}, increasing fire load and emergency response risk.`],act:[`Remove or segregate combustible / flammable materials and store them only in approved designated areas.`,`Provide required fire extinguishers, detection / signage and clear access to firefighting equipment as applicable.`,`Maintain good housekeeping and separation from ignition sources.`,`Inspect similar storage / hot work areas and close out repeated fire prevention deficiencies.`,`Brief supervisors and workforce on approved storage and fire prevention requirements.`]},
    traffic:{root:'Traffic management / man-machine interface control failure',desc:[`It was observed that traffic / plant movement controls were inadequate (${issue})${areaText}, creating collision, reversing and pedestrian interface risk.`],act:[`Provide traffic segregation, pedestrian demarcation, warning signage and banksman / flagman control as required.`,`Stop unsafe vehicle / plant movement until the route and work area are controlled.`,`Verify reverse alarm, beacon, mirrors, operator visibility and speed control for moving plant.`,`Inspect similar roads / access routes for repeated traffic management deficiencies.`,`Brief drivers, banksmen and supervisors on site traffic and man-machine interface controls.`]},
    lifting:{root:'Lifting / precast control failure / Inadequate supervision',desc:[`It was observed that lifting / precast handling controls were inadequate (${issue})${areaText}, creating dropped-load, struck-by and crushing risk.`],act:[`Stop the lifting / handling activity until approved lifting plan, PTW and competent supervision are verified.`,`Provide exclusion zone, banksman / rigging control and suitable certified lifting accessories.`,`Verify crane / lifting equipment, ground condition and load stability before restart.`,`Inspect similar lifting / precast activities for repeated deficiencies.`,`Brief lifting team and supervisors on task-specific lifting controls.`]},
    plant:{root:'Inadequate plant pre-use inspection / Poor maintenance control',desc:[`It was observed that plant / equipment was defective or unsafe (${issue})${areaText}, creating equipment failure, collision and injury risk.`],act:[`Remove the defective plant / equipment from service and tag it out until repaired.`,`Complete maintenance repair by competent personnel and verify safe condition before return to service.`,`Check mirrors, glass, lights, beacon, reverse alarm, tyres, brakes and visible safety devices as applicable.`,`Update pre-use inspection records and closeout evidence.`,`Brief operators and supervisors to report defects immediately and not operate unsafe equipment.`]},
    ppe:{root:'PPE compliance failure / Poor supervision',desc:[`It was observed that required task-specific PPE was not properly used (${issue})${areaText}, exposing workers to preventable injury.`],act:[`Provide and enforce the required PPE for the task before work continues.`,`Remove workers from the activity until compliant PPE is worn correctly.`,`Verify PPE suitability, condition and availability at the work front.`,`Inspect similar work groups for repeated PPE non-compliance.`,`Brief workers and supervisors on PPE requirements and enforcement action.`]},
    ptw:{root:'PTW system failure / Lack of field verification',desc:[`It was observed that permit-to-work control was inadequate (${issue})${areaText}, allowing work to proceed without verified hazards and controls.`],act:[`Stop the activity until a valid PTW is issued / revalidated after physical site verification.`,`Confirm required controls, supervision, access, isolation and emergency arrangements before restart.`,`Cancel or revise incomplete / incorrect permits.`,`Audit similar PTW activities for repeated deficiencies.`,`Brief permit issuers, receivers and supervisors on PTW verification requirements.`]},
    welfare:{root:'Welfare arrangement / amenity maintenance failure',desc:[`It was observed that welfare arrangements were inadequate (${issue})${areaText}, affecting worker health, hygiene and heat-stress prevention.`],act:[`Provide / restore the required welfare facility without delay, including drinking water, shaded rest, cooling / ventilation or sanitation as applicable.`,`Remove any unsuitable welfare condition and maintain the area clean and serviceable.`,`Assign responsible supervision for daily welfare inspection and closeout evidence.`,`Inspect similar welfare points / rest areas for repeated deficiencies.`,`Brief supervisors on welfare, hydration and heat-stress control requirements.`]},
    tools:{root:'Portable tool control failure / Poor inspection',desc:[`It was observed that portable tool control was inadequate (${issue})${areaText}, creating cut, entanglement, electric shock or flying-particle risk.`],act:[`Stop use of the unsafe tool until inspection, repair or replacement is completed.`,`Verify guards, handles, cables, plugs, discs / blades and inspection colour coding before use.`,`Allow operation only by trained workers using the required PPE.`,`Inspect similar tools in the area and remove defective tools from service.`,`Brief workers and supervisors on portable tool inspection and safe use requirements.`]},
    general:{root:'Poor supervision / Planning and control failure',desc:[`It was observed that ${issue}${areaText}, creating an unsafe condition requiring task-specific corrective action.`],act:[`Rectify the identified unsafe condition based on the actual task risk before work continues.`,`Verify closeout at the work front by responsible supervision and submit evidence.`,`Inspect similar locations / activities and close out any repeated deficiency.`,`Brief the responsible supervisor and workforce on the required task-specific controls.`]}
  };
  return M[rule] || M.general;
}
function aiProfessionalFromManualV4(text,selectedCategory='',area=''){
  const clean=aiCleanManualTextV4(text);
  const rule=v5Detect(clean,selectedCategory);
  const spec=v5Specific(rule,clean,area);
  const category=normalizeCategoryToAdosh(aiDetectManualRuleV4(clean,selectedCategory),selectedCategory);
  return {category,root:spec.root,desc:aiBulletV4(spec.desc),immediate:'',actions:aiNumberV4(spec.act),legal:legalFromRule(aiDetectManualRuleV4(clean,selectedCategory),selectedCategory)};
}
function buildSpecificManualReport(text, selectedCategory='', area=''){
  return aiProfessionalFromManualV4(text, selectedCategory, area);
}
function previewManualInBoxes(card,force=false){
  const manual=$('.manualComments',card)?.value.trim()||'';
  if(!manual) return;
  const area=$('.areaPreview',card)?.textContent.replace(/^Area:\s*/,'')||'';
  const selected=$('.observationCategory',card).value;
  const built=buildSpecificManualReport(manual,selected,area);
  if(!selected) $('.observationCategory',card).value=built.category;
  addOptionIfMissing($('.rootCause',card),built.root); $('.rootCause',card).value=built.root;
  const descEl=$('.observationDescription',card), actEl=$('.preventiveAction',card);
  if(force || descEl.dataset.smartGenerated==='1' || !descEl.value.trim()){descEl.value=built.desc;descEl.dataset.smartGenerated='1';}
  if(force || actEl.dataset.smartGenerated==='1' || !actEl.value.trim()){actEl.value=built.actions;actEl.dataset.smartGenerated='1';}
  $$('.legalGrid input',card).forEach(x=>x.checked=(built.legal||[]).includes(x.value));
  setStatus('Task-specific observation description and action generated.');
}
function applyManualToObservationObject(o){
  const manual=aiCleanManualTextV4(o.manualComments || o.desc);
  if(!manual) return o;
  const area=[o.package?`Package ${o.package}`:'', clusterText(o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');
  const built=buildSpecificManualReport(manual, o.category, area);
  return {...o,category:(!o.category||o.category==='Other')?built.category:o.category,root:built.root,desc:built.desc,immediate:'',actions:built.actions,legal:(o.legal&&o.legal.length)?o.legal:built.legal};
}
function finaliseObservationByMode(o){ return applyManualToObservationObject(o); }

/* =========================================================
   NOOR v6 HUMAN-SMART OBSERVATION ENGINE
   Purpose: short broken site notes => specific ALDAR/KEO report wording.
   Rules: no filler, no generic repeated text, manual note is the source of truth.
   ========================================================= */
function n6Clean(t){return String(t||'').replace(/[“”]/g,'"').replace(/[‘’]/g,"'").replace(/\s+/g,' ').trim();}
function n6Lower(t){return n6Clean(t).toLowerCase();}
function n6Area(area){let a=String(area||'').replace(/^Area:\s*/i,'').trim();return (!a||a==='-'||/Select/.test(a))?'':' at '+a;}
function n6Uniq(arr){const out=[];const seen=new Set();(arr||[]).forEach(x=>{x=n6Clean(x).replace(/\s+([,.;:])/g,'$1');if(!x)return;let k=x.toLowerCase().replace(/[^a-z0-9]/g,'');if(!seen.has(k)){seen.add(k);out.push(x)}});return out;}
function n6Bullet(arr){return n6Uniq(arr).slice(0,3).map(x=>'• '+x).join('\n');}
function n6Number(arr){return n6Uniq(arr).slice(0,6).map((x,i)=>(i+1)+'. '+x).join('\n');}
function n6Split(text){
  let raw=n6Clean(text);
  if(!raw)return [];
  raw=raw.replace(/\b(open|missing|without|no|not|damaged|broken|blocked|unsafe|incomplete|poor|unprotected)\b/gi,'|$1')
         .replace(/\b(and also|also|plus|,|;|\n|\/|&)\b/gi,'|')
         .replace(/\s*\|\s*/g,'|');
  let parts=raw.split('|').map(n6Clean).filter(Boolean);
  if(parts.length===0) parts=[text];
  return n6Uniq(parts).slice(0,8);
}
function n6Rule(text,cat=''){
  const t=n6Lower(text), c=n6Lower(cat);
  if(/db|distribution board|electrical|cable|earthing|rcd|rccb|generator|live wire|socket|panel/.test(t)||/electrical/.test(c))return'electrical';
  if(/scaffold|mobile tower|outrigger|plank|platform|green tag|red tag|toe.?board|guard.?rail|bracing|base plate/.test(t)||/scaffold/.test(c))return'scaffold';
  if(/excavation|trench|trial pit|open pit|shoring|collapse/.test(t)||/excavation/.test(c))return'excavation';
  if(/edge protection|leading edge|roof edge|floor edge|fall protection|guard.?rail/.test(t)||/working at heights/.test(c))return'edge';
  if(/ladder|step ladder|a.?frame ladder|extension ladder/.test(t))return'ladder';
  if(/floor opening|manhole|opening|rebar|protruding steel|barricade|barricading|cover/.test(t)||/barricading/.test(c))return'barricade';
  if(/access|egress|walkway|route|blocked|obstructed|ramp|stair|bridge/.test(t))return'access';
  if(/housekeeping|waste|debris|garbage|food waste|scrap|loose material/.test(t)||/waste management/.test(c))return'housekeeping';
  if(/fire|extinguisher|smoke detector|combustible|flammable|hot work|chemical|storage|sprinkler/.test(t)||/hot work|hazardous material/.test(c))return'fire';
  if(/traffic|vehicle|road|banksman|flagman|reverse|man.?machine|pedestrian/.test(t)||/traffic|road/.test(c))return'traffic';
  if(/lifting|crane|sling|rigging|precast|panel|a.?frame|trailer|load/.test(t)||/lifting|pre cast/.test(c))return'lifting';
  if(/jcb|bobcat|excavator|loader|forklift|plant|equipment|machine|mirror|glass|windshield|beacon|reverse alarm|tyre|tire/.test(t)||/plant and equipment/.test(c))return'plant';
  if(/ppe|helmet|glove|goggle|face shield|safety shoe|harness|mask/.test(t)||/personal protective/.test(c))return'ppe';
  if(/permit|ptw|work permit|red flag|red-flag/.test(t)||/permit/.test(c))return'ptw';
  if(/welfare|rest area|toilet|drinking water|cold water|water station|amenit|a\/c|\bac\b|air conditioning|shade|heat/.test(t)||/amenities|heat/.test(c))return'welfare';
  if(/tool|grinder|cutting disc|abrasive wheel|power tool|drill|jackhammer/.test(t)||/portable power tools|abrasive/.test(c))return'tools';
  if(/msra|risk assessment|method statement|rams/.test(t))return'msra';
  return'general';
}
function n6Category(rule,selected=''){
  if(selected && selected!=='Other' && !/^Select/i.test(selected)) return selected;
  return {electrical:'Electrical Safety',scaffold:'Scaffolding',excavation:'Excavation Work',edge:'Working at Heights',ladder:'Working at Heights',barricade:'Barricading of Hazards',access:'General Workplace Amenities',housekeeping:'Waste Management',fire:'Hot Work Operations',traffic:'Traffic Management and Logistics',lifting:'Safe Use of Lifting Equipment and Lifting Accessories',plant:'Plant and Equipment',ppe:'Personal Protective Equipment',ptw:'Permit to Work Systems',welfare:'General Workplace Amenities',tools:'Portable Power Tools',msra:'OSH Management During Construction Work',general:'OSH Management During Construction Work'}[rule]||'OSH Management During Construction Work';
}
function n6Legal(rule){
  const common=['Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
  const m={electrical:['ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 35.0 - Portable Power Tools',...common],scaffold:['ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 23.0 - Working at Heights',...common],excavation:['ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 21.0 - Permit to Work Systems',...common],edge:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards',...common],ladder:['ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 23.0 - Working at Heights',...common],barricade:['ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 23.0 - Working at Heights',...common],access:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 22.0 - Barricading of Hazards',...common],housekeeping:['ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 8.0 - General Workplace Amenities',...common],fire:['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 28.0 - Hot Work Operations',...common],traffic:['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 36.0 - Plant and Equipment',...common],lifting:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 42.0 - Pre Cast Construction',...common],plant:['ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 44.0 - Traffic Management and Logistics',...common],ppe:['ADOSH-SF CoP 2.0 - Personal Protective Equipment',...common],ptw:['ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...common],welfare:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 12.0 - Safety in the Heat',...common],tools:['ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 15.0 - Electrical Safety',...common],msra:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work','ADOSH-SF CoP 53.1 - OSH Construction Management Plan',...common]};
  return n6Uniq(m[rule]||['ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...common]);
}
function n6PointDesc(pt,areaText){
  const p=n6Lower(pt), raw=n6Clean(pt).replace(/^and\s+/i,'');
  if(/open\s*db|db\s*open|distribution board/.test(p))return`Electrical distribution board was found open / unsecured${areaText}, exposing personnel to unauthorized access and potential contact with live electrical components.`;
  if(/cable/.test(p))return`Temporary electrical cables were not properly routed, elevated or protected${areaText}, creating trip hazards and risk of cable damage / electrical shock.`;
  if(/earthing|earth/.test(p))return`Earthing arrangement was not clearly provided / verified${areaText}, creating risk of unsafe electrical fault protection.`;
  if(/scaffold/.test(p)&&/incomplete|missing|without|not complete/.test(p))return`Scaffold was incomplete${areaText}, with required components not fully installed before use, creating fall-from-height and falling-object risk.`;
  if(/outrigger/.test(p))return`Mobile scaffold / tower was found without required outriggers or stabilizers${areaText}, affecting stability and creating overturning risk.`;
  if(/green tag|red tag|tag/.test(p))return`Scaffold inspection / tag status was not properly maintained${areaText}, allowing potential use without confirmed competent inspection.`;
  if(/scaffold|platform|plank/.test(p))return`Scaffold / working platform arrangement was unsafe or not fully compliant${areaText}, creating fall-from-height and instability risk.`;
  if(/ladder/.test(p))return`Unsafe ladder arrangement was observed${areaText}, creating fall-from-height risk due to unsuitable access / working position.`;
  if(/excavation|trench|pit/.test(p))return`Excavation / trench was not adequately protected${areaText}, creating risk of fall into excavation, edge collapse and uncontrolled access.`;
  if(/edge protection|leading edge|roof edge|floor edge/.test(p))return`Edge protection was missing, incomplete or not properly secured${areaText}, exposing workers to fall-from-height and falling-object risk.`;
  if(/floor opening|manhole|opening/.test(p))return`Opening / manhole was not adequately covered or hard-barricaded${areaText}, creating fall and trip hazards.`;
  if(/rebar|protruding/.test(p))return`Protruding reinforcement steel was not protected${areaText}, creating impalement and trip hazard.`;
  if(/access|egress|walkway|route|blocked|obstructed|ramp|stair/.test(p))return`Safe access / egress was not properly maintained${areaText}, creating slip, trip, fall and emergency evacuation obstruction risk.`;
  if(/housekeeping|waste|debris|garbage|scrap/.test(p))return`Poor housekeeping was observed${areaText}, with waste / debris affecting safe access and increasing slip, trip and fire-load risk.`;
  if(/fire|extinguisher|smoke detector|combustible|flammable|hot work|chemical|storage/.test(p))return`Fire prevention / storage control was inadequate${areaText}, increasing fire load and emergency response risk.`;
  if(/traffic|vehicle|road|banksman|flagman|reverse|man.?machine|pedestrian/.test(p))return`Traffic / plant movement controls were inadequate${areaText}, creating collision, reversing and pedestrian interface risk.`;
  if(/lifting|crane|sling|precast|panel|trailer/.test(p))return`Lifting / precast handling controls were inadequate${areaText}, creating dropped-load, struck-by and crushing risk.`;
  if(/jcb|bobcat|excavator|loader|forklift|mirror|glass|windshield|plant|equipment|machine/.test(p))return`Plant / equipment was defective or unsafe (${raw})${areaText}, creating equipment failure, visibility, collision and injury risk.`;
  if(/ppe|helmet|glove|goggle|face shield|safety shoe|harness/.test(p))return`Required task-specific PPE was not properly used (${raw})${areaText}, exposing workers to preventable injury.`;
  if(/permit|ptw|work permit/.test(p))return`Permit-to-work control was inadequate (${raw})${areaText}, allowing work to proceed without verified hazards and controls.`;
  if(/welfare|rest area|toilet|drinking water|cold water|water station|a\/c|\bac\b|air conditioning|shade|heat/.test(p))return`Welfare arrangements were inadequate (${raw})${areaText}, affecting worker health, hydration, hygiene and heat-stress prevention.`;
  if(/tool|grinder|cutting|abrasive|power tool|drill/.test(p))return`Portable tool control was inadequate (${raw})${areaText}, creating cut, electric shock or flying-particle risk.`;
  if(/msra|risk assessment|method statement|rams/.test(p))return`Approved MSRA / method statement was not effectively implemented for the actual site condition${areaText}, leaving task-specific hazards uncontrolled.`;
  return`${raw.charAt(0).toUpperCase()+raw.slice(1)}${areaText}, creating an unsafe condition requiring specific corrective action.`;
}
function n6Actions(rule,pts){
  const txt=n6Lower(pts.join(' ')); let a=[];
  if(/db|distribution board/.test(txt))a.push('Close, secure and lock all electrical distribution boards; only competent electrical personnel shall access DBs.');
  if(/cable/.test(txt))a.push('Route, elevate or mechanically protect temporary cables away from access routes, wet areas and traffic movement.');
  if(/earthing|earth/.test(txt))a.push('Inspect, test and label earthing arrangements; keep records available at site.');
  if(rule==='scaffold'){a.push('Stop scaffold use until all missing components are installed and the scaffold is inspected / tagged by a competent scaffolding inspector.');a.push('Provide required guardrails, mid-rails, toe boards, bracing, base plates, access ladder, platform planks, locking pins and outriggers where applicable.');a.push('Remove loose / unsecured planks and prevent unauthorized scaffold modification.');}
  if(rule==='ladder')a.push('Remove unsafe ladders and provide a suitable access method or proper working platform for the task.');
  if(rule==='excavation')a.push('Install rigid barricades, warning signage, safe access / egress and required edge protection around the excavation.');
  if(rule==='edge')a.push('Provide complete edge protection with top rail, mid rail and toe board; secure all loose or incomplete sections before work continues.');
  if(rule==='barricade')a.push('Cover openings with secured load-bearing covers or install hard barricades with warning signage.');
  if(/rebar|protruding/.test(txt))a.push('Protect protruding rebars with suitable caps or remove the hazard where practicable.');
  if(rule==='access')a.push('Clear and maintain safe access / egress routes; provide suitable ramps, steps, walkways or access bridges where required.');
  if(rule==='housekeeping')a.push('Remove waste, debris and loose materials immediately; maintain daily housekeeping and waste collection arrangements.');
  if(rule==='fire')a.push('Restore required fire protection, firefighting equipment, segregation and approved storage controls before work continues.');
  if(rule==='traffic')a.push('Provide traffic segregation, pedestrian demarcation, signage and banksman / flagman control before plant or vehicle movement continues.');
  if(rule==='lifting')a.push('Stop lifting / precast activity until approved lifting plan / PTW, exclusion zone, competent supervision and certified accessories are verified.');
  if(rule==='plant')a.push('Remove defective plant / equipment from service, tag it out and repair it by competent maintenance personnel before reuse.');
  if(rule==='ppe')a.push('Provide and enforce mandatory / task-specific PPE before the activity continues.');
  if(rule==='ptw')a.push('Stop the activity until the PTW is issued or revalidated after physical field verification of controls.');
  if(rule==='welfare')a.push('Provide or restore required welfare facilities including cold drinking water, shaded rest area, cooling / ventilation and sanitation as applicable.');
  if(rule==='tools')a.push('Remove defective portable tools from use and verify guards, cables, plugs, handles, discs / blades and inspection colour coding before reuse.');
  if(rule==='msra')a.push('Review and update the MSRA / method statement to match actual site conditions, sequence, hazards and controls.');
  a.push('Inspect similar locations / activities for the same deficiency and close out all repeated issues.');
  a.push('Brief responsible supervisors and workforce on the required control measures and stop-work requirements.');
  a.push('Submit closeout evidence for verification by responsible supervision and OSH team.');
  return a;
}
function n6Root(rule){return {electrical:'Electrical inspection failure / Poor temporary electrical control',scaffold:'Scaffolding inspection failure / Incomplete erection control',excavation:'Poor excavation planning / Inadequate barricading control',edge:'Poor work-at-height planning / Inadequate fall prevention control',ladder:'Unsafe ladder use / Poor work-at-height supervision',barricade:'Barricading maintenance failure / Poor hazard control',access:'Poor access / egress planning and housekeeping control',housekeeping:'Poor housekeeping supervision / Waste control failure',fire:'Fire prevention / material storage control failure',traffic:'Traffic management / man-machine interface control failure',lifting:'Lifting / precast control failure / Inadequate supervision',plant:'Inadequate plant pre-use inspection / Poor maintenance control',ppe:'PPE compliance failure / Poor supervision',ptw:'PTW system failure / Lack of field verification',welfare:'Welfare arrangement / amenity maintenance failure',tools:'Portable tool control failure / Poor inspection',msra:'Poor MSRA implementation / Inadequate risk assessment control',general:'Poor supervision / Planning and control failure'}[rule]||'Poor supervision / Planning and control failure';}
function buildSpecificManualReport(text, selectedCategory='', area=''){
  const clean=n6Clean(text); const rule=n6Rule(clean,selectedCategory); const areaText=n6Area(area); const pts=n6Split(clean);
  const desc=n6Bullet(pts.map(p=>n6PointDesc(p,areaText)));
  const actions=n6Number(n6Actions(rule,pts));
  return {category:n6Category(rule,selectedCategory),root:n6Root(rule),desc:desc||n6Bullet([`It was observed that ${clean}${areaText}, creating an unsafe condition requiring task-specific corrective action.`]),immediate:'',actions,legal:n6Legal(rule)};
}
function previewManualInBoxes(card,force=false){
  const manual=$('.manualComments',card)?.value.trim()||''; if(!manual)return;
  const area=$('.areaPreview',card)?.textContent.replace(/^Area:\s*/,'')||''; const selected=$('.observationCategory',card).value;
  const built=buildSpecificManualReport(manual,selected,area);
  if(!selected || selected==='Other') $('.observationCategory',card).value=built.category;
  addOptionIfMissing($('.rootCause',card),built.root); $('.rootCause',card).value=built.root;
  const descEl=$('.observationDescription',card), actEl=$('.preventiveAction',card);
  if(force || descEl.dataset.smartGenerated==='1' || !descEl.value.trim()){descEl.value=built.desc;descEl.dataset.smartGenerated='1';}
  if(force || actEl.dataset.smartGenerated==='1' || !actEl.value.trim()){actEl.value=built.actions;actEl.dataset.smartGenerated='1';}
  $$('.legalGrid input',card).forEach(x=>x.checked=(built.legal||[]).includes(x.value));
  setStatus('Noor smart engine: specific observation and closeout action generated from your note.');
}
function applyManualToObservationObject(o){
  const manual=n6Clean(o.manualComments || o.desc); if(!manual)return o;
  const area=[o.package?`Package ${o.package}`:'', clusterText(o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');
  const built=buildSpecificManualReport(manual,o.category,area);
  return {...o,category:(!o.category||o.category==='Other')?built.category:o.category,root:built.root,desc:built.desc,immediate:'',actions:built.actions,legal:(o.legal&&o.legal.length)?o.legal:built.legal};
}
function finaliseObservationByMode(o){return applyManualToObservationObject(o);}
function createStandardFromManual(card){previewManualInBoxes(card,true);}
function applySmartBriefToCard(card){createStandardFromManual(card);}

// ================= NOOR V7 FINAL HUMAN-SMART OBSERVATION ENGINE =================
// Purpose: make the website think like the chat response. Manual site note is the source of truth.
// Critical fix: "unsafe storage of materials" is NOT automatically converted to fire prevention.
(function(){
  function clean(t){return String(t||'').replace(/\s+/g,' ').trim();}
  function lower(t){return clean(t).toLowerCase();}
  function uniq(a){return [...new Set((a||[]).filter(Boolean))];}
  function bullet(a){return uniq(a).map(x=>'• '+x).join('\n');}
  function number(a){return uniq(a).map((x,i)=>(i+1)+'. '+x).join('\n');}
  function cleanArea(area){
    let a=String(area||'').replace(/^Area:\s*/i,'').trim();
    a=a.replace(/Package\s*-\s*-\s*-/gi,'').replace(/Package\s*-+/gi,'').replace(/\s*-\s*-\s*/g,' - ');
    a=a.split(' - ').map(x=>x.trim()).filter(x=>x && x!=='-' && !/^select/i.test(x)).join(' - ');
    return a ? ' at '+a : '';
  }
  function splitNotes(text){
    const raw=clean(text); if(!raw) return [];
    let pts=raw.replace(/\band also\b/gi,' | ').replace(/\balso\b/gi,' | ').replace(/\bplus\b/gi,' | ')
      .replace(/\n+/g,' | ').replace(/[;]+/g,' | ')
      .split('|').map(clean).filter(Boolean);
    if(pts.length===1) pts=raw.split(/\s*,\s*/).map(clean).filter(Boolean);
    return uniq(pts).slice(0,12);
  }
  function rule(text, selected){
    const t=lower(text), c=lower(selected);
    // HIGH PRIORITY: read the safety control first, not only the last words.
    // Example: "no toe board ... falling materials" = edge / falling-object control, NOT material storage.
    if(/toe\s*board|toeboard|floor\s*edge|leading\s*edge|roof\s*edge|edge\s*protection|guard\s*rail|guardrail|mid\s*rail|fall\s*protection|falling\s*material|falling\s*object/.test(t)||/working at heights/.test(c))return'edge';
    if(/floor opening|manhole|opening|rebar|protruding|barricad/.test(t)||/barricading/.test(c))return'barricade';
    if(/open\s*db|db\s*open|distribution board|electrical|cable|earthing|generator|live wire|power tapping/.test(t)||/electrical/.test(c))return'electrical';
    if(/scaffold|mobile tower|outrigger|green tag|red tag|platform|plank/.test(t)||/scaffold/.test(c))return'scaffold';
    if(/ladder|step ladder|a-frame|a frame|extension ladder/.test(t)||/ladder/.test(c))return'ladder';
    if(/excavation|trench|open trench|pit|boundary wall/.test(t)||/excavation/.test(c))return'excavation';
    // material storage must be separate from fire unless fire/combustible/chemical is clearly written.
    // Do not trigger on phrases like "falling materials" or "materials falling".
    if(/unsafe\s+storage|poor\s+storage|material\s+storage|materials\s+stored|stored\s+materials|stored|storage|stack|stacking|scattered\s+material|loose\s+material/.test(t) && !/falling\s+material|falling\s+object|toe\s*board|edge|guard\s*rail|guardrail|fire|combustible|flammable|chemical|hot work|extinguisher|smoke|sprinkler|diesel|fuel/.test(t)) return 'material_storage';
    if(/access|egress|walkway|route|blocked|obstructed|ramp|stair/.test(t)||/access|amenities/.test(c))return'access';
    if(/housekeeping|waste|debris|garbage|scrap/.test(t)||/waste/.test(c))return'housekeeping';
    if(/fire|extinguisher|hose reel|smoke detector|combustible|flammable|chemical|hot work|sprinkler|fuel|diesel/.test(t)||/fire|hot work/.test(c))return'fire';
    if(/traffic|vehicle|road|banksman|flagman|reverse|man.?machine|pedestrian/.test(t)||/traffic/.test(c))return'traffic';
    if(/lifting|crane|sling|precast|panel|trailer|rigging/.test(t)||/lifting|pre cast|precast/.test(c))return'lifting';
    if(/jcb|bobcat|excavator|loader|forklift|plant|equipment|machine|mirror|glass|windshield|beacon|reverse alarm|tyre|tire/.test(t)||/plant/.test(c))return'plant';
    if(/ppe|helmet|glove|goggle|face shield|safety shoe|harness|mask/.test(t)||/personal protective/.test(c))return'ppe';
    if(/permit|ptw|work permit|red flag|red-flag/.test(t)||/permit/.test(c))return'ptw';
    if(/welfare|rest area|toilet|drinking water|cold water|water station|a\/c|\bac\b|air conditioning|shade|heat/.test(t)||/heat/.test(c))return'welfare';
    if(/tool|grinder|cutting disc|abrasive wheel|power tool|drill|jackhammer/.test(t)||/portable power tools|abrasive/.test(c))return'tools';
    if(/msra|risk assessment|method statement|rams/.test(t))return'msra';
    return'general';
  }
  function category(r, selected){
    if(selected && selected!=='Other' && !/^Select/i.test(selected)) return selected;
    return {material_storage:'Material Storage / Housekeeping',electrical:'Electrical Safety',scaffold:'Scaffolding',ladder:'Working at Heights',excavation:'Excavation Work',edge:'Working at Heights',barricade:'Barricading of Hazards',access:'General Workplace Amenities',housekeeping:'Waste Management',fire:'Fire Prevention / Emergency Readiness',traffic:'Traffic Management and Logistics',lifting:'Safe Use of Lifting Equipment and Lifting Accessories',plant:'Plant and Equipment',ppe:'Personal Protective Equipment',ptw:'Permit to Work Systems',welfare:'General Workplace Amenities',tools:'Portable Power Tools',msra:'OSH Management During Construction Work',general:'OSH Management During Construction Work'}[r]||'OSH Management During Construction Work';
  }
  function root(r){return {material_storage:'Poor material storage control / Inadequate housekeeping supervision',electrical:'Electrical inspection failure / Poor temporary electrical control',scaffold:'Scaffolding inspection failure / Incomplete erection control',ladder:'Unsafe ladder use / Poor work-at-height supervision',excavation:'Poor excavation planning / Inadequate barricading control',edge:'Poor work-at-height planning / Inadequate fall prevention control',barricade:'Barricading maintenance failure / Poor hazard control',access:'Poor access / egress planning and housekeeping control',housekeeping:'Poor housekeeping supervision / Waste control failure',fire:'Fire prevention / emergency readiness control failure',traffic:'Traffic management / man-machine interface control failure',lifting:'Lifting / precast control failure / Inadequate supervision',plant:'Inadequate plant pre-use inspection / Poor maintenance control',ppe:'PPE compliance failure / Poor supervision',ptw:'PTW system failure / Lack of field verification',welfare:'Welfare arrangement / amenity maintenance failure',tools:'Portable tool control failure / Poor inspection',msra:'Poor MSRA implementation / Inadequate risk assessment control',general:'Poor supervision / Planning and control failure'}[r]||'Poor supervision / Planning and control failure';}
  function legal(r){
    const common=['Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
    const m={material_storage:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 22.0 - Barricading of Hazards',...common],fire:['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 28.0 - Hot Work Operations','ADOSH-SF CoP 8.0 - General Workplace Amenities',...common],electrical:['ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 35.0 - Portable Power Tools',...common],scaffold:['ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 23.0 - Working at Heights',...common],ladder:['ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 23.0 - Working at Heights',...common],excavation:['ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 21.0 - Permit to Work Systems',...common],edge:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards',...common],barricade:['ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 23.0 - Working at Heights',...common],access:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 22.0 - Barricading of Hazards',...common],housekeeping:['ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 8.0 - General Workplace Amenities',...common],traffic:['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 36.0 - Plant and Equipment',...common],lifting:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 42.0 - Pre Cast Construction',...common],plant:['ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 44.0 - Traffic Management and Logistics',...common],ppe:['ADOSH-SF CoP 2.0 - Personal Protective Equipment',...common],ptw:['ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...common],welfare:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 12.0 - Safety in the Heat',...common],tools:['ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 15.0 - Electrical Safety',...common],msra:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work','ADOSH-SF CoP 53.1 - OSH Construction Management Plan',...common]};
    return uniq(m[r]||['ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...common]);
  }
  function descPoint(pt, areaText){
    const p=lower(pt), raw=clean(pt).replace(/^and\s+/i,'');
    if(/toe\s*board|toeboard/.test(p))
      return `Toe board was missing / not provided at the floor edge / leading edge${areaText}, creating risk of materials or tools falling to lower levels and exposing workers below to struck-by injury.`;
    if(/falling\s*material|falling\s*object/.test(p) && /edge|floor|toe|guard/.test(p))
      return `Falling-object protection at the floor edge / leading edge was inadequate${areaText}, as toe board or equivalent containment was not provided to prevent materials falling to lower levels.`;
    if(/edge protection|leading edge|roof edge|floor edge|guard\s*rail|guardrail|mid\s*rail|fall protection/.test(p))return`Edge protection was missing, incomplete or not properly secured${areaText}, exposing workers to fall-from-height and falling-object risk.`;
    if(/storage|stored|stack|stacking|loose material|scattered material|material storage|materials stored|stored materials/.test(p) && !/falling\s+material|falling\s+object|toe\s*board|edge|guard\s*rail|guardrail|fire|combustible|flammable|chemical|hot work|extinguisher|smoke|sprinkler|fuel|diesel/.test(p))
      return `Materials were stored in an unsafe / uncontrolled manner${areaText}, with inadequate stacking, segregation, demarcation or access clearance, creating risk of material collapse, struck-by injury, trip hazards and obstruction to safe access / emergency movement.`;
    if(/open\s*db|db\s*open|distribution board/.test(p))return`Electrical distribution board was found open / unsecured${areaText}, exposing personnel to unauthorized access and potential contact with live electrical components.`;
    if(/cable/.test(p))return`Temporary electrical cables were not properly routed, elevated or protected${areaText}, creating trip hazards and risk of cable damage / electrical shock.`;
    if(/scaffold/.test(p)&&/incomplete|missing|without|not complete/.test(p))return`Scaffold was incomplete${areaText}, with required components not fully installed before use, creating fall-from-height and falling-object risk.`;
    if(/outrigger/.test(p))return`Mobile scaffold / tower was found without required outriggers or stabilizers${areaText}, affecting stability and creating overturning risk.`;
    if(/scaffold|platform|plank/.test(p))return`Scaffold / working platform arrangement was unsafe or not fully compliant${areaText}, creating fall-from-height and instability risk.`;
    if(/ladder/.test(p))return`Unsafe ladder arrangement was observed${areaText}, creating fall-from-height risk due to unsuitable access / working position.`;
    if(/excavation|trench|pit/.test(p))return`Excavation / trench was not adequately protected${areaText}, creating risk of fall into excavation, edge collapse and uncontrolled access.`;
    if(/edge protection|leading edge|roof edge|floor edge/.test(p))return`Edge protection was missing, incomplete or not properly secured${areaText}, exposing workers to fall-from-height and falling-object risk.`;
    if(/floor opening|manhole|opening/.test(p))return`Opening / manhole was not adequately covered or hard-barricaded${areaText}, creating fall and trip hazards.`;
    if(/access|egress|walkway|route|blocked|obstructed|ramp|stair/.test(p))return`Safe access / egress was not properly maintained${areaText}, creating slip, trip, fall and emergency evacuation obstruction risk.`;
    if(/housekeeping|waste|debris|garbage|scrap/.test(p))return`Poor housekeeping was observed${areaText}, with waste / debris affecting safe access and increasing slip, trip and fire-load risk.`;
    if(/fire|extinguisher|smoke detector|combustible|flammable|hot work|chemical/.test(p))return`Fire prevention / emergency readiness controls were inadequate${areaText}, increasing fire and emergency response risk.`;
    if(/traffic|vehicle|road|banksman|flagman|reverse|man.?machine|pedestrian/.test(p))return`Traffic / plant movement controls were inadequate${areaText}, creating collision, reversing and pedestrian interface risk.`;
    if(/lifting|crane|sling|precast|panel|trailer/.test(p))return`Lifting / precast handling controls were inadequate${areaText}, creating dropped-load, struck-by and crushing risk.`;
    if(/jcb|bobcat|excavator|loader|forklift|mirror|glass|windshield|plant|equipment|machine/.test(p))return`Plant / equipment was defective or unsafe (${raw})${areaText}, creating equipment failure, visibility, collision and injury risk.`;
    if(/permit|ptw|work permit/.test(p))return`Permit-to-work control was inadequate (${raw})${areaText}, allowing work to proceed without verified hazards and controls.`;
    if(/welfare|rest area|toilet|drinking water|cold water|water station|a\/c|\bac\b|air conditioning|shade|heat/.test(p))return`Welfare arrangements were inadequate (${raw})${areaText}, affecting worker health, hydration, hygiene and heat-stress prevention.`;
    return`${raw.charAt(0).toUpperCase()+raw.slice(1)}${areaText}, creating an unsafe condition requiring specific corrective action.`;
  }
  function actions(r, pts){
    const txt=lower(pts.join(' ')); let a=[];
    if(r==='material_storage'){
      a.push('Remove / rearrange the stored materials immediately and shift them to approved designated storage areas where required.');
      a.push('Stack materials safely with stable arrangement, controlled height, proper segregation and no risk of collapse or falling materials.');
      a.push('Keep access routes, emergency routes, work fronts and villa entrances clear from stored materials at all times.');
      a.push('Provide proper demarcation, signage and responsibility for each storage area, and assign supervision for daily monitoring.');
    }
    if(/db|distribution board/.test(txt))a.push('Close, secure and lock all electrical distribution boards; only competent electrical personnel shall access DBs.');
    if(/cable/.test(txt))a.push('Route, elevate or mechanically protect temporary cables away from access routes, wet areas and traffic movement.');
    if(r==='scaffold')a.push('Stop scaffold use until all missing components are installed and the scaffold is inspected / tagged by a competent scaffolding inspector.');
    if(r==='ladder')a.push('Remove unsafe ladders and provide a suitable access method or proper working platform for the task.');
    if(r==='excavation')a.push('Install rigid barricades, warning signage, safe access / egress and required edge protection around the excavation.');
    if(r==='edge'){
      if(/toe\s*board|toeboard|falling\s*material|falling\s*object/.test(txt)){
        a.push('Install continuous toe boards / kick plates at the floor edge / leading edge to prevent tools and materials from falling to lower levels.');
        a.push('Verify the full edge protection system, including top rail, mid rail and toe board, is complete, secure and continuous before work continues.');
        a.push('Remove loose materials from the edge and maintain a safe setback distance from all leading edges.');
        a.push('Barricade the area below the edge where falling-object exposure exists until toe boards and containment are completed.');
      } else {
        a.push('Provide complete edge protection with top rail, mid rail and toe board; secure all loose or incomplete sections before work continues.');
      }
    }
    if(r==='barricade')a.push('Cover openings with secured load-bearing covers or install hard barricades with warning signage.');
    if(r==='access')a.push('Clear and maintain safe access / egress routes; provide suitable ramps, steps, walkways or access bridges where required.');
    if(r==='housekeeping')a.push('Remove waste, debris and loose materials immediately; maintain daily housekeeping and waste collection arrangements.');
    if(r==='fire')a.push('Restore required fire protection, firefighting equipment, segregation and emergency readiness controls before work continues.');
    if(r==='traffic')a.push('Provide traffic segregation, pedestrian demarcation, signage and banksman / flagman control before plant or vehicle movement continues.');
    if(r==='lifting')a.push('Stop lifting / precast activity until approved lifting plan / PTW, exclusion zone, competent supervision and certified accessories are verified.');
    if(r==='plant')a.push('Remove defective plant / equipment from service, tag it out and repair it by competent maintenance personnel before reuse.');
    if(r==='ppe')a.push('Provide and enforce mandatory / task-specific PPE before the activity continues.');
    if(r==='ptw')a.push('Stop the activity until the PTW is issued or revalidated after physical field verification of controls.');
    if(r==='welfare')a.push('Provide or restore required welfare facilities including cold drinking water, shaded rest area, cooling / ventilation and sanitation as applicable.');
    if(r==='tools')a.push('Remove defective portable tools from use and verify guards, cables, plugs, handles, discs / blades and inspection colour coding before reuse.');
    if(r==='msra')a.push('Review and update the MSRA / method statement to match actual site conditions, sequence, hazards and controls.');
    if(!a.length)a.push('Rectify the observed unsafe condition and implement specific preventive controls before continuation of the affected activity.');
    a.push('Inspect similar locations / activities for the same deficiency and close out all repeated issues.');
    a.push('Brief responsible supervisors and workforce on the required control measures and stop-work requirements.');
    a.push('Submit closeout evidence for verification by responsible supervision and OSH team.');
    return a;
  }
  window.buildSpecificManualReport=function(text, selectedCategory='', area=''){
    const cleanText=clean(text); const r=rule(cleanText, selectedCategory); const areaText=cleanArea(area); const pts=splitNotes(cleanText);
    const d=bullet(pts.map(p=>descPoint(p, areaText)));
    return {category:category(r,selectedCategory),root:root(r),desc:d||bullet([`It was observed that ${cleanText}${areaText}, creating an unsafe condition requiring task-specific corrective action.`]),immediate:'',actions:number(actions(r,pts)),legal:legal(r)};
  };
  window.previewManualInBoxes=function(card,force=false){
    const manual=card.querySelector('.manualComments')?.value.trim()||''; if(!manual)return;
    const area=card.querySelector('.areaPreview')?.textContent.replace(/^Area:\s*/,'')||''; const selected=card.querySelector('.observationCategory').value;
    const built=window.buildSpecificManualReport(manual,selected,area);
    const cat=card.querySelector('.observationCategory'); if(!selected || selected==='Other'){ addOptionIfMissing(cat,built.category); cat.value=built.category; }
    const rootEl=card.querySelector('.rootCause'); addOptionIfMissing(rootEl,built.root); rootEl.value=built.root;
    const descEl=card.querySelector('.observationDescription'), actEl=card.querySelector('.preventiveAction');
    if(force || descEl.dataset.smartGenerated==='1' || !descEl.value.trim()){descEl.value=built.desc; descEl.dataset.smartGenerated='1';}
    if(force || actEl.dataset.smartGenerated==='1' || !actEl.value.trim()){actEl.value=built.actions; actEl.dataset.smartGenerated='1';}
    card.querySelectorAll('.legalGrid input').forEach(x=>x.checked=(built.legal||[]).includes(x.value));
    setStatus('Noor smart engine V7: exact observation and closeout action generated from your manual note.');
  };
  window.applyManualToObservationObject=function(o){
    const manual=clean(o.manualComments || o.desc); if(!manual)return o;
    const area=[o.package?`Package ${o.package}`:'', (typeof clusterText==='function'?clusterText(o.cluster):o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');
    const built=window.buildSpecificManualReport(manual,o.category,area);
    return {...o,category:(!o.category||o.category==='Other')?built.category:o.category,root:built.root,desc:built.desc,immediate:'',actions:built.actions,legal:(o.legal&&o.legal.length)?o.legal:built.legal};
  };
  window.finaliseObservationByMode=function(o){return window.applyManualToObservationObject(o);};
  window.createStandardFromManual=function(card){window.previewManualInBoxes(card,true);};
  window.applySmartBriefToCard=function(card){window.createStandardFromManual(card);};
})();

// ================= NOOR V9 TRUE MANUAL-FIRST INTELLIGENT ENGINE =================
// This final layer overrides all older engines. It reads the user's typed words first,
// gives priority to specific safety controls (toe board, edge, DB, cable, scaffold, etc.),
// and never allows an old selected category to force the wrong observation.
(function(){
  const COMMON=['Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
  const MAP={
    edge:{cat:'Working at Heights / Falling Object Protection',root:'Inadequate edge protection / Falling object control failure',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    material:{cat:'Material Storage / Housekeeping',root:'Poor material storage control / Inadequate housekeeping supervision',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    scaffold:{cat:'Scaffolding',root:'Scaffolding inspection failure / Incomplete scaffold control',legal:['ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 23.0 - Working at Heights',...COMMON]},
    electrical:{cat:'Electrical Safety / Portable Tools',root:'Electrical inspection failure / Poor temporary electrical control',legal:['ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 35.0 - Portable Power Tools',...COMMON]},
    excavation:{cat:'Excavation Work',root:'Poor excavation planning / Inadequate barricading control',legal:['ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 21.0 - Permit to Work Systems',...COMMON]},
    opening:{cat:'Barricading of Hazards / Floor Openings',root:'Poor barricading maintenance / Hazard protection failure',legal:['ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 23.0 - Working at Heights',...COMMON]},
    access:{cat:'Access and Egress',root:'Poor access / egress planning and housekeeping control',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    housekeeping:{cat:'Housekeeping / Waste Management',root:'Poor housekeeping supervision / Waste control failure',legal:['ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 8.0 - General Workplace Amenities',...COMMON]},
    fire:{cat:'Fire Prevention / Emergency Readiness',root:'Fire prevention / emergency readiness control failure',legal:['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 28.0 - Hot Work Operations','ADOSH-SF CoP 8.0 - General Workplace Amenities',...COMMON]},
    traffic:{cat:'Traffic Management and Logistics',root:'Traffic management / man-machine interface control failure',legal:['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 36.0 - Plant and Equipment',...COMMON]},
    lifting:{cat:'Lifting / Precast Installation',root:'Lifting / precast control failure / Inadequate supervision',legal:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 42.0 - Pre Cast Construction',...COMMON]},
    plant:{cat:'Plant and Equipment',root:'Inadequate plant pre-use inspection / Poor maintenance control',legal:['ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 44.0 - Traffic Management and Logistics',...COMMON]},
    ppe:{cat:'Personal Protective Equipment',root:'PPE compliance failure / Poor supervision',legal:['ADOSH-SF CoP 2.0 - Personal Protective Equipment',...COMMON]},
    ptw:{cat:'Permit to Work Systems',root:'PTW system failure / Lack of field verification',legal:['ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...COMMON]},
    welfare:{cat:'General Workplace Amenities / Welfare Arrangement',root:'Welfare arrangement / amenity maintenance failure',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 12.0 - Safety in the Heat',...COMMON]},
    tool:{cat:'Portable Power Tools',root:'Portable tool control failure / Poor inspection',legal:['ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 15.0 - Electrical Safety',...COMMON]},
    msra:{cat:'OSH Management During Construction Work / MSRA',root:'Poor MSRA implementation / Inadequate risk assessment control',legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work','ADOSH-SF CoP 53.1 - OSH Construction Management Plan',...COMMON]},
    general:{cat:'OSH Management During Construction Work',root:'Poor supervision / Planning and control failure',legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...COMMON]}
  };
  function c(t){return String(t||'').replace(/\s+/g,' ').trim();}
  function l(t){return c(t).toLowerCase();}
  function uniq(a){return [...new Set((a||[]).filter(Boolean))];}
  function bullet(a){return uniq(a).map(x=>'• '+x).join('\n');}
  function number(a){return uniq(a).map((x,i)=>`${i+1}. ${x}`).join('\n');}
  function areaText(area){let a=String(area||'').replace(/^Area:\s*/i,'').trim(); a=a.replace(/Package\s*-\s*-\s*-/gi,'').replace(/Package\s*-+/gi,'').replace(/\s*-\s*-\s*/g,' - '); a=a.split(' - ').map(c).filter(x=>x && x!=='-' && !/^select/i.test(x)).join(' - '); return a?` at ${a}`:'';}
  function split(t){
    let raw=c(t); if(!raw)return [];
    raw=raw.replace(/\b(and also|also|plus)\b/gi,' | ').replace(/[;\n]+/g,' | ');
    let pts=raw.split('|').map(c).filter(Boolean);
    if(pts.length===1 && /,/.test(raw)) pts=raw.split(/\s*,\s*/).map(c).filter(Boolean);
    return uniq(pts).slice(0,16);
  }
  function detect(text){
    const t=l(text);
    // Absolute priority: these words define the real hazard. Do not let "materials" inside "falling materials" become storage.
    if(/toe\s*boards?|toeboards?|kick\s*plate|floor\s*edge|leading\s*edge|roof\s*edge|edge\s*protection|guard\s*rails?|guardrails?|mid\s*rails?|falling\s*objects?|falling\s*materials?|fall\s*protection/.test(t)) return 'edge';
    if(/floor\s*opening|slab\s*opening|manhole|open\s*shaft|lift\s*shaft|protruding\s*(rebar|steel)|rebar\s*cap|barricad/.test(t)) return 'opening';
    if(/open\s*db|db\s*open|distribution\s*board|electrical|cables?|earthing|earth\s*pit|generator|live\s*wire|power\s*tapping|temporary\s*power/.test(t)) return 'electrical';
    if(/scaffold|scaffolding|mobile\s*tower|outrigger|green\s*tag|red\s*tag|platform|plank/.test(t)) return 'scaffold';
    if(/ladder|step\s*ladder|a\s*frame|extension\s*ladder/.test(t)) return 'edge';
    if(/excavation|trench|open\s*trench|deep\s*pit|boundary\s*wall/.test(t)) return 'excavation';
    if(/unsafe\s+storage|poor\s+storage|material\s+storage|materials\s+stored|stored\s+materials|stored\s+at|stacking|over\s*stack|scattered\s+materials?|loose\s+materials?/.test(t) && !/falling\s+materials?|toe\s*board|floor\s*edge|leading\s*edge/.test(t)) return 'material';
    if(/access|egress|walkway|route|blocked|obstructed|ramp|staircase|stairs/.test(t)) return 'access';
    if(/housekeeping|waste|debris|garbage|scrap/.test(t)) return 'housekeeping';
    if(/fire|extinguisher|hose\s*reel|smoke\s*detector|combustible|flammable|chemical|hot\s*work|sprinkler|fuel|diesel/.test(t)) return 'fire';
    if(/traffic|vehicle|road|banksman|flagman|reverse|reversing|man.?machine|pedestrian/.test(t)) return 'traffic';
    if(/lifting|crane|sling|precast|panel|trailer|rigging/.test(t)) return 'lifting';
    if(/jcb|bobcat|excavator|loader|forklift|plant|equipment|machine|mirror|glass|windshield|beacon|reverse\s*alarm|tyre|tire/.test(t)) return 'plant';
    if(/ppe|helmet|gloves?|goggles?|face\s*shield|safety\s*shoe|harness|mask/.test(t)) return 'ppe';
    if(/permit|ptw|work\s*permit|red\s*flag/.test(t)) return 'ptw';
    if(/welfare|rest\s*area|toilet|drinking\s*water|cold\s*water|water\s*station|a\/c|\bac\b|air\s*conditioning|shade|heat/.test(t)) return 'welfare';
    if(/tool|grinder|cutting\s*disc|abrasive\s*wheel|power\s*tool|drill|jackhammer/.test(t)) return 'tool';
    if(/msra|risk\s*assessment|method\s*statement|rams/.test(t)) return 'msra';
    return 'general';
  }
  function descOne(pt, at){
    const p=l(pt), raw=c(pt).replace(/^and\s+/i,'');
    if(/toe\s*boards?|toeboards?|kick\s*plate/.test(p)) return `Toe board / kick plate was not provided at the floor edge / leading edge${at}, creating risk of tools and materials falling to lower levels and striking personnel below.`;
    if(/falling\s*materials?|falling\s*objects?/.test(p)) return `Falling-object protection was inadequate at the floor edge / leading edge${at}; toe board or equivalent containment was not provided to prevent materials falling to lower levels.`;
    if(/edge\s*protection|floor\s*edge|leading\s*edge|roof\s*edge|guard\s*rail|guardrail|mid\s*rail/.test(p)) return `Edge protection was missing, incomplete or not properly secured${at}, exposing personnel to fall-from-height and falling-object hazards.`;
    if(/storage|stored|stacking|loose\s+materials?|scattered\s+materials?/.test(p) && !/falling\s+materials?|toe\s*board|edge/.test(p)) return `Materials were stored in an unsafe / uncontrolled manner${at}, affecting access, housekeeping and safe material stability.`;
    if(/open\s*db|db\s*open|distribution\s*board/.test(p)) return `Electrical distribution board was left open / unsecured${at}, exposing personnel to unauthorized access and potential contact with live electrical components.`;
    if(/cables?/.test(p)) return `Temporary cables were not properly routed, elevated or protected${at}, creating trip hazard and risk of mechanical damage to electrical cables.`;
    if(/scaffold|platform|plank|outrigger/.test(p)) return `Scaffold / working platform arrangement was incomplete or unsafe${at}, creating fall-from-height and instability hazards.`;
    if(/ladder/.test(p)) return `Unsafe ladder arrangement was observed${at}, creating fall-from-height risk due to unsuitable access / working position.`;
    if(/excavation|trench|pit/.test(p)) return `Excavation / trench was not adequately protected${at}, creating risk of fall into excavation, edge collapse and uncontrolled access.`;
    if(/floor\s*opening|manhole|opening|shaft/.test(p)) return `Opening / manhole / shaft was not adequately covered or hard-barricaded${at}, creating fall and trip hazards.`;
    if(/rebar|protruding/.test(p)) return `Protruding reinforcement steel was not protected${at}, creating impalement and trip hazards.`;
    if(/access|egress|walkway|route|blocked|obstructed|ramp|stair/.test(p)) return `Safe access / egress was not properly maintained${at}, creating slip, trip, fall and emergency evacuation obstruction risk.`;
    if(/housekeeping|waste|debris|garbage|scrap/.test(p)) return `Poor housekeeping was observed${at}, with waste / debris affecting safe access and increasing slip, trip and fire-load risk.`;
    if(/fire|extinguisher|hose\s*reel|smoke\s*detector|combustible|flammable|hot\s*work|chemical/.test(p)) return `Fire prevention / emergency readiness controls were inadequate${at}, increasing fire and emergency response risk.`;
    if(/traffic|vehicle|road|banksman|flagman|reverse|man.?machine|pedestrian/.test(p)) return `Traffic / plant movement controls were inadequate${at}, creating collision, reversing and pedestrian interface risk.`;
    if(/lifting|crane|sling|precast|panel|trailer/.test(p)) return `Lifting / precast handling controls were inadequate${at}, creating dropped-load, struck-by and crushing risk.`;
    if(/jcb|bobcat|excavator|loader|forklift|mirror|glass|windshield|plant|equipment|machine/.test(p)) return `Plant / equipment condition was unsafe (${raw})${at}, creating equipment failure, visibility, collision and injury risk.`;
    if(/ppe|helmet|glove|goggle|face\s*shield|safety\s*shoe|harness/.test(p)) return `Required mandatory / task-specific PPE was not properly used (${raw})${at}, exposing workers to preventable injury.`;
    if(/permit|ptw|work\s*permit/.test(p)) return `Permit-to-work control was inadequate (${raw})${at}, allowing work to proceed without verified hazards and controls.`;
    if(/welfare|rest\s*area|toilet|drinking\s*water|cold\s*water|water\s*station|a\/c|\bac\b|air\s*conditioning|shade|heat/.test(p)) return `Welfare arrangements were inadequate (${raw})${at}, affecting worker health, hydration, hygiene and heat-stress prevention.`;
    if(/tool|grinder|cutting|abrasive|power\s*tool|drill/.test(p)) return `Portable tool control was inadequate (${raw})${at}, creating cut, electric shock or flying-particle risk.`;
    if(/msra|risk\s*assessment|method\s*statement|rams/.test(p)) return `Approved MSRA / method statement was not effectively implemented for the actual site condition${at}, leaving task-specific hazards uncontrolled.`;
    return `${raw.charAt(0).toUpperCase()+raw.slice(1)}${at}, creating an unsafe condition requiring specific corrective action.`;
  }
  function act(r, pts){
    const txt=l(pts.join(' ')); let a=[];
    if(r==='edge'){
      if(/toe\s*board|toeboard|kick\s*plate|falling\s*materials?|falling\s*objects?/.test(txt)){
        a.push('Install continuous toe boards / kick plates at the floor edge / leading edge before work continues.');
        a.push('Ensure the edge protection system is complete with top rail, mid rail and toe board, properly secured and continuous without gaps.');
        a.push('Remove loose tools and materials from the edge and maintain safe setback distance to prevent falling objects.');
        a.push('Barricade / restrict the area below where falling-object exposure exists until toe boards and containment are completed.');
      } else a.push('Provide complete edge protection with top rail, mid rail and toe board; secure all incomplete or loose sections before work continues.');
    }
    if(r==='material'){a.push('Remove / rearrange unsafe stored materials and shift them to approved designated storage areas.');a.push('Stack materials safely with stable arrangement, controlled height, proper segregation and no risk of collapse.');a.push('Keep access routes, emergency routes, work fronts and villa entrances clear from stored materials.');a.push('Provide demarcation, signage and responsible supervision for each storage area.');}
    if(r==='electrical'){if(/db|distribution board/.test(txt))a.push('Close, secure and lock all electrical distribution boards; only competent electrical personnel shall access DBs.');if(/cable/.test(txt))a.push('Route, elevate or mechanically protect temporary cables away from access routes, wet areas and traffic movement.');a.push('Competent electrical personnel shall inspect and confirm the arrangement is safe before further use.');}
    if(r==='scaffold'){a.push('Stop scaffold use until all missing components are installed and the scaffold is inspected / tagged by a competent scaffolding inspector.');a.push('Provide required guardrails, mid rails, toe boards, bracing, base plates, access ladder, platform planks, locking pins and outriggers where applicable.');}
    if(r==='excavation')a.push('Install rigid barricades, warning signage, safe access / egress and required edge protection around the excavation.');
    if(r==='opening')a.push('Cover openings with secured load-bearing covers or install hard barricades with warning signage.');
    if(r==='access')a.push('Clear and maintain safe access / egress routes; provide suitable ramps, steps, walkways or access bridges where required.');
    if(r==='housekeeping')a.push('Remove waste, debris and loose materials immediately; maintain daily housekeeping and waste collection arrangements.');
    if(r==='fire')a.push('Restore required fire protection, firefighting equipment, segregation and emergency readiness controls before work continues.');
    if(r==='traffic')a.push('Provide traffic segregation, pedestrian demarcation, signage and banksman / flagman control before plant or vehicle movement continues.');
    if(r==='lifting')a.push('Stop lifting / precast activity until approved lifting plan / PTW, exclusion zone, competent supervision and certified accessories are verified.');
    if(r==='plant')a.push('Remove defective plant / equipment from service, tag it out and repair it by competent maintenance personnel before reuse.');
    if(r==='ppe')a.push('Provide and enforce mandatory / task-specific PPE before the activity continues.');
    if(r==='ptw')a.push('Stop the activity until the PTW is issued or revalidated after physical field verification of controls.');
    if(r==='welfare')a.push('Provide or restore required welfare facilities including cold drinking water, shaded rest area, cooling / ventilation and sanitation as applicable.');
    if(r==='tool')a.push('Remove defective portable tools from use and verify guards, cables, plugs, handles, discs / blades and inspection colour coding before reuse.');
    if(r==='msra')a.push('Review and update the MSRA / method statement to match actual site conditions, sequence, hazards and controls.');
    if(!a.length)a.push('Rectify the observed unsafe condition and implement specific preventive controls before continuation of the affected activity.');
    a.push('Inspect similar locations / activities for the same deficiency and close out all repeated issues.');
    a.push('Brief responsible supervisors and workforce on the required control measures and stop-work requirements.');
    a.push('Submit closeout evidence for verification by responsible supervision and OSH team.');
    return a;
  }
  window.buildSpecificManualReport=function(text, selectedCategory='', area=''){
    const raw=c(text); const r=detect(raw); const at=areaText(area); const pts=split(raw);
    const m=MAP[r]||MAP.general;
    return {category:m.cat,root:m.root,desc:bullet(pts.map(p=>descOne(p,at)))||bullet([`It was observed that ${raw}${at}, creating an unsafe condition requiring task-specific corrective action.`]),immediate:'',actions:number(act(r,pts)),legal:m.legal};
  };
  window.previewManualInBoxes=function(card,force=false){
    const manual=card.querySelector('.manualComments')?.value.trim()||''; if(!manual)return;
    const area=card.querySelector('.areaPreview')?.textContent.replace(/^Area:\s*/,'')||'';
    const built=window.buildSpecificManualReport(manual,card.querySelector('.observationCategory')?.value||'',area);
    const cat=card.querySelector('.observationCategory'); addOptionIfMissing(cat,built.category); cat.value=built.category;
    const rootEl=card.querySelector('.rootCause'); addOptionIfMissing(rootEl,built.root); rootEl.value=built.root;
    const descEl=card.querySelector('.observationDescription'), actEl=card.querySelector('.preventiveAction');
    descEl.value=built.desc; descEl.dataset.smartGenerated='1';
    actEl.value=built.actions; actEl.dataset.smartGenerated='1';
    card.querySelectorAll('.legalGrid input').forEach(x=>x.checked=(built.legal||[]).includes(x.value));
    if(typeof setStatus==='function') setStatus('Noor V9: exact manual-word smart observation generated.');
  };
  window.applyManualToObservationObject=function(o){
    const manual=c(o.manualComments || o.desc); if(!manual)return o;
    const area=[o.package?`Package ${o.package}`:'', (typeof clusterText==='function'?clusterText(o.cluster):o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');
    const built=window.buildSpecificManualReport(manual,o.category,area);
    return {...o,category:built.category,root:built.root,desc:built.desc,immediate:'',actions:built.actions,legal:built.legal};
  };
  window.finaliseObservationByMode=function(o){return window.applyManualToObservationObject(o);};
  window.createStandardFromManual=function(card){window.previewManualInBoxes(card,true);};
  window.applySmartBriefToCard=function(card){window.previewManualInBoxes(card,true);};
})();

// ================= NOOR V10 TRUE CONTEXT ENGINE =================
// Fix: understands the whole sentence before keywords. Example:
// "working on the pitch roof top, without permit" = pitched roof work at height without PTW,
// NOT excavation, NOT generic PTW only.
(function(){
  const COMMON=['Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
  const DATA={
    roof_ptw:{cat:'Working at Heights / Permit to Work',root:'Work at height PTW failure / Inadequate roof work control',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 26.0 - Scaffolding',...COMMON]},
    roof:{cat:'Working at Heights / Roof Work',root:'Inadequate roof work planning / Fall prevention control failure',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 26.0 - Scaffolding',...COMMON]},
    edge:{cat:'Working at Heights / Falling Object Protection',root:'Inadequate edge protection / Falling object control failure',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    material:{cat:'Material Storage / Housekeeping',root:'Poor material storage control / Inadequate housekeeping supervision',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    scaffold:{cat:'Scaffolding',root:'Scaffolding inspection failure / Incomplete scaffold control',legal:['ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 23.0 - Working at Heights',...COMMON]},
    electrical:{cat:'Electrical Safety / Portable Tools',root:'Electrical inspection failure / Poor temporary electrical control',legal:['ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 35.0 - Portable Power Tools',...COMMON]},
    excavation:{cat:'Excavation Work',root:'Poor excavation planning / Inadequate barricading control',legal:['ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 21.0 - Permit to Work Systems',...COMMON]},
    opening:{cat:'Barricading of Hazards / Floor Openings',root:'Poor barricading maintenance / Hazard protection failure',legal:['ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 23.0 - Working at Heights',...COMMON]},
    access:{cat:'Access and Egress',root:'Poor access / egress planning and housekeeping control',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    housekeeping:{cat:'Housekeeping / Waste Management',root:'Poor housekeeping supervision / Waste control failure',legal:['ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 8.0 - General Workplace Amenities',...COMMON]},
    fire:{cat:'Fire Prevention / Emergency Readiness',root:'Fire prevention / emergency readiness control failure',legal:['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 28.0 - Hot Work Operations','ADOSH-SF CoP 8.0 - General Workplace Amenities',...COMMON]},
    traffic:{cat:'Traffic Management and Logistics',root:'Traffic management / man-machine interface control failure',legal:['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 36.0 - Plant and Equipment',...COMMON]},
    lifting:{cat:'Lifting / Precast Installation',root:'Lifting / precast control failure / Inadequate supervision',legal:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 42.0 - Pre Cast Construction',...COMMON]},
    plant:{cat:'Plant and Equipment',root:'Inadequate plant pre-use inspection / Poor maintenance control',legal:['ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 44.0 - Traffic Management and Logistics',...COMMON]},
    ppe:{cat:'Personal Protective Equipment',root:'PPE compliance failure / Poor supervision',legal:['ADOSH-SF CoP 2.0 - Personal Protective Equipment',...COMMON]},
    ptw:{cat:'Permit to Work Systems',root:'PTW system failure / Lack of field verification',legal:['ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...COMMON]},
    welfare:{cat:'General Workplace Amenities / Welfare Arrangement',root:'Welfare arrangement / amenity maintenance failure',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 12.0 - Safety in the Heat',...COMMON]},
    tool:{cat:'Portable Power Tools',root:'Portable tool control failure / Poor inspection',legal:['ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 15.0 - Electrical Safety',...COMMON]},
    msra:{cat:'OSH Management During Construction Work / MSRA',root:'Poor MSRA implementation / Inadequate risk assessment control',legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work','ADOSH-SF CoP 53.1 - OSH Construction Management Plan',...COMMON]},
    general:{cat:'OSH Management During Construction Work',root:'Poor supervision / Planning and control failure',legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...COMMON]}
  };
  function clean(t){return String(t||'').replace(/\s+/g,' ').trim();}
  function low(t){return clean(t).toLowerCase();}
  function uniq(a){return [...new Set((a||[]).filter(Boolean))];}
  function bullet(a){return uniq(a).map(x=>'• '+x).join('\n');}
  function number(a){return uniq(a).map((x,i)=>`${i+1}. ${x}`).join('\n');}
  function areaText(area){let a=String(area||'').replace(/^Area:\s*/i,'').trim();a=a.replace(/Package\s*-\s*-\s*-/gi,'').replace(/Package\s*-+/gi,'').replace(/\s*-\s*-\s*/g,' - ');a=a.split(' - ').map(clean).filter(x=>x&&x!=='-'&&!/^select/i.test(x)).join(' - ');return a?` at ${a}`:'';}
  function splitSmart(text){
    const raw=clean(text); if(!raw) return [];
    // Keep context pairs together. Do not split "roof work, without permit" into unrelated hazards.
    if(/\b(roof|rooftop|roof\s*top|pitch\s*roof|pitched\s*roof)\b/i.test(raw) && /\b(without|no|missing)\s*(ptw|permit|work\s*permit)\b/i.test(raw)) return [raw];
    if(/\btoe\s*boards?\b/i.test(raw) && /falling\s*materials?|falling\s*objects?/i.test(raw)) return [raw];
    let r=raw.replace(/\b(and also|also|plus)\b/gi,' | ').replace(/[;\n]+/g,' | ');
    let pts=r.split('|').map(clean).filter(Boolean);
    if(pts.length===1 && /,/.test(r)) pts=r.split(/\s*,\s*/).map(clean).filter(Boolean);
    return uniq(pts).slice(0,16);
  }
  function detect(text){
    const t=low(text);
    const hasRoof=/\b(working\s+on\s+)?(pitch\s*roof|pitched\s*roof|roof\s*top|rooftop|roof)\b/.test(t);
    const noPermit=/\b(without|no|missing)\s*(valid\s*)?(ptw|permit|work\s*permit)\b/.test(t);
    if(hasRoof && noPermit) return 'roof_ptw';
    if(hasRoof) return 'roof';
    if(/toe\s*boards?|toeboards?|kick\s*plate|floor\s*edge|leading\s*edge|roof\s*edge|edge\s*protection|guard\s*rails?|guardrails?|mid\s*rails?|falling\s*objects?|falling\s*materials?|fall\s*protection/.test(t)) return 'edge';
    if(/floor\s*opening|slab\s*opening|manhole|open\s*shaft|lift\s*shaft|protruding\s*(rebar|steel)|rebar\s*cap|barricad/.test(t)) return 'opening';
    if(/open\s*db|db\s*open|distribution\s*board|electrical|cables?|earthing|earth\s*pit|generator|live\s*wire|power\s*tapping|temporary\s*power/.test(t)) return 'electrical';
    if(/scaffold|scaffolding|mobile\s*tower|outrigger|green\s*tag|red\s*tag|platform|plank/.test(t)) return 'scaffold';
    if(/ladder|step\s*ladder|a\s*frame|extension\s*ladder/.test(t)) return 'roof';
    if(/excavation|trench|open\s*trench|\bpit\b|boundary\s*wall/.test(t)) return 'excavation';
    if(/unsafe\s+storage|poor\s+storage|material\s+storage|materials\s+stored|stored\s+materials|stored\s+at|stacking|over\s*stack|scattered\s+materials?|loose\s+materials?/.test(t) && !/falling\s+materials?|toe\s*board|floor\s*edge|leading\s*edge/.test(t)) return 'material';
    if(/access|egress|walkway|route|blocked|obstructed|ramp|staircase|stairs/.test(t)) return 'access';
    if(/housekeeping|waste|debris|garbage|scrap/.test(t)) return 'housekeeping';
    if(/fire|extinguisher|hose\s*reel|smoke\s*detector|combustible|flammable|chemical|hot\s*work|sprinkler|fuel|diesel/.test(t)) return 'fire';
    if(/traffic|vehicle|road|banksman|flagman|reverse|reversing|man.?machine|pedestrian/.test(t)) return 'traffic';
    if(/lifting|crane|sling|precast|panel|trailer|rigging/.test(t)) return 'lifting';
    if(/jcb|bobcat|excavator|loader|forklift|plant|equipment|machine|mirror|glass|windshield|beacon|reverse\s*alarm|tyre|tire/.test(t)) return 'plant';
    if(/ppe|helmet|gloves?|goggles?|face\s*shield|safety\s*shoe|harness|mask/.test(t)) return 'ppe';
    if(noPermit || /permit|ptw|work\s*permit|red\s*flag/.test(t)) return 'ptw';
    if(/welfare|rest\s*area|toilet|drinking\s*water|cold\s*water|water\s*station|a\/c|\bac\b|air\s*conditioning|shade|heat/.test(t)) return 'welfare';
    if(/tool|grinder|cutting\s*disc|abrasive\s*wheel|power\s*tool|drill|jackhammer/.test(t)) return 'tool';
    if(/msra|risk\s*assessment|method\s*statement|rams/.test(t)) return 'msra';
    return 'general';
  }
  function desc(r, pts, at){
    const all=low(pts.join(' '));
    if(r==='roof_ptw') return bullet([`Workers were carrying out work on the pitched roof / rooftop${at} without a valid Permit to Work and physical work-at-height verification. This exposed personnel to uncontrolled fall-from-height risk due to absence of confirmed roof access, edge protection, anchorage, rescue arrangement and competent supervision.`]);
    if(r==='roof') return bullet([`Work was being carried out on the pitched roof / rooftop${at} without adequate verified work-at-height controls, creating risk of fall from height and falling objects.`]);
    return bullet(pts.map(p=>descOne(p,at)));
  }
  function descOne(pt, at){
    const p=low(pt), raw=clean(pt).replace(/^and\s+/i,'');
    if(/toe\s*boards?|toeboards?|kick\s*plate/.test(p)) return `Toe board / kick plate was not provided at the floor edge / leading edge${at}, creating risk of tools and materials falling to lower levels and striking personnel below.`;
    if(/falling\s*materials?|falling\s*objects?/.test(p)) return `Falling-object protection was inadequate at the floor edge / leading edge${at}; toe board or equivalent containment was not provided to prevent materials falling to lower levels.`;
    if(/edge\s*protection|floor\s*edge|leading\s*edge|roof\s*edge|guard\s*rail|guardrail|mid\s*rail/.test(p)) return `Edge protection was missing, incomplete or not properly secured${at}, exposing personnel to fall-from-height and falling-object hazards.`;
    if(/storage|stored|stacking|loose\s+materials?|scattered\s+materials?/.test(p) && !/falling\s+materials?|toe\s*board|edge/.test(p)) return `Materials were stored in an unsafe / uncontrolled manner${at}, affecting access, housekeeping and safe material stability.`;
    if(/open\s*db|db\s*open|distribution\s*board/.test(p)) return `Electrical distribution board was left open / unsecured${at}, exposing personnel to unauthorized access and potential contact with live electrical components.`;
    if(/cables?/.test(p)) return `Temporary cables were not properly routed, elevated or protected${at}, creating trip hazard and risk of mechanical damage to electrical cables.`;
    if(/scaffold|platform|plank|outrigger/.test(p)) return `Scaffold / working platform arrangement was incomplete or unsafe${at}, creating fall-from-height and instability hazards.`;
    if(/ladder/.test(p)) return `Unsafe ladder arrangement was observed${at}, creating fall-from-height risk due to unsuitable access / working position.`;
    if(/excavation|trench|\bpit\b/.test(p)) return `Excavation / trench was not adequately protected${at}, creating risk of fall into excavation, edge collapse and uncontrolled access.`;
    if(/floor\s*opening|manhole|opening|shaft/.test(p)) return `Opening / manhole / shaft was not adequately covered or hard-barricaded${at}, creating fall and trip hazards.`;
    if(/rebar|protruding/.test(p)) return `Protruding reinforcement steel was not protected${at}, creating impalement and trip hazards.`;
    if(/access|egress|walkway|route|blocked|obstructed|ramp|stair/.test(p)) return `Safe access / egress was not properly maintained${at}, creating slip, trip, fall and emergency evacuation obstruction risk.`;
    if(/housekeeping|waste|debris|garbage|scrap/.test(p)) return `Poor housekeeping was observed${at}, with waste / debris affecting safe access and increasing slip, trip and fire-load risk.`;
    if(/fire|extinguisher|hose\s*reel|smoke\s*detector|combustible|flammable|hot\s*work|chemical/.test(p)) return `Fire prevention / emergency readiness controls were inadequate${at}, increasing fire and emergency response risk.`;
    if(/traffic|vehicle|road|banksman|flagman|reverse|man.?machine|pedestrian/.test(p)) return `Traffic / plant movement controls were inadequate${at}, creating collision, reversing and pedestrian interface risk.`;
    if(/lifting|crane|sling|precast|panel|trailer/.test(p)) return `Lifting / precast handling controls were inadequate${at}, creating dropped-load, struck-by and crushing risk.`;
    if(/jcb|bobcat|excavator|loader|forklift|mirror|glass|windshield|plant|equipment|machine/.test(p)) return `Plant / equipment condition was unsafe (${raw})${at}, creating equipment failure, visibility, collision and injury risk.`;
    if(/ppe|helmet|glove|goggle|face\s*shield|safety\s*shoe|harness/.test(p)) return `Required mandatory / task-specific PPE was not properly used (${raw})${at}, exposing workers to preventable injury.`;
    if(/permit|ptw|work\s*permit/.test(p)) return `Permit-to-work control was inadequate (${raw})${at}, allowing work to proceed without verified hazards and controls.`;
    if(/welfare|rest\s*area|toilet|drinking\s*water|cold\s*water|water\s*station|a\/c|\bac\b|air\s*conditioning|shade|heat/.test(p)) return `Welfare arrangements were inadequate (${raw})${at}, affecting worker health, hydration, hygiene and heat-stress prevention.`;
    if(/tool|grinder|cutting|abrasive|power\s*tool|drill/.test(p)) return `Portable tool control was inadequate (${raw})${at}, creating cut, electric shock or flying-particle risk.`;
    if(/msra|risk\s*assessment|method\s*statement|rams/.test(p)) return `Approved MSRA / method statement was not effectively implemented for the actual site condition${at}, leaving task-specific hazards uncontrolled.`;
    return `${raw.charAt(0).toUpperCase()+raw.slice(1)}${at}, creating an unsafe condition requiring specific corrective action.`;
  }
  function actions(r, pts){
    const txt=low(pts.join(' ')); let a=[];
    if(r==='roof_ptw'){
      a.push('Stop all pitched roof / rooftop work immediately until a valid Work at Height PTW is issued and physically verified at the work front.');
      a.push('Verify safe roof access, suitable working platform / ladder arrangement, edge protection, anchorage points, fall-arrest requirements and rescue arrangement before work restarts.');
      a.push('Assign competent supervision to monitor the roof activity continuously and ensure workers follow the approved MSRA and PTW conditions.');
      a.push('Barricade the area below the roof work to prevent falling-object exposure to other workers.');
    } else if(r==='roof'){
      a.push('Stop roof work until safe access, fall prevention / fall protection and supervision arrangements are verified.');
      a.push('Provide suitable working platform, roof access, edge protection / anchorage and falling-object controls in line with the approved MSRA.');
    }
    if(r==='edge'){
      if(/toe\s*board|toeboard|kick\s*plate|falling\s*materials?|falling\s*objects?/.test(txt)){
        a.push('Install continuous toe boards / kick plates at the floor edge / leading edge before work continues.');
        a.push('Ensure the edge protection system is complete with top rail, mid rail and toe board, properly secured and continuous without gaps.');
        a.push('Remove loose tools and materials from the edge and maintain safe setback distance to prevent falling objects.');
        a.push('Barricade / restrict the area below where falling-object exposure exists until toe boards and containment are completed.');
      } else a.push('Provide complete edge protection with top rail, mid rail and toe board; secure all incomplete or loose sections before work continues.');
    }
    if(r==='material'){a.push('Remove / rearrange unsafe stored materials and shift them to approved designated storage areas.');a.push('Stack materials safely with stable arrangement, controlled height, proper segregation and no risk of collapse.');a.push('Keep access routes, emergency routes, work fronts and villa entrances clear from stored materials.');a.push('Provide demarcation, signage and responsible supervision for each storage area.');}
    if(r==='electrical'){if(/db|distribution board/.test(txt))a.push('Close, secure and lock all electrical distribution boards; only competent electrical personnel shall access DBs.');if(/cable/.test(txt))a.push('Route, elevate or mechanically protect temporary cables away from access routes, wet areas and traffic movement.');a.push('Competent electrical personnel shall inspect and confirm the arrangement is safe before further use.');}
    if(r==='scaffold'){a.push('Stop scaffold use until all missing components are installed and the scaffold is inspected / tagged by a competent scaffolding inspector.');a.push('Provide required guardrails, mid rails, toe boards, bracing, base plates, access ladder, platform planks, locking pins and outriggers where applicable.');}
    if(r==='excavation')a.push('Install rigid barricades, warning signage, safe access / egress and required edge protection around the excavation.');
    if(r==='opening')a.push('Cover openings with secured load-bearing covers or install hard barricades with warning signage.');
    if(r==='access')a.push('Clear and maintain safe access / egress routes; provide suitable ramps, steps, walkways or access bridges where required.');
    if(r==='housekeeping')a.push('Remove waste, debris and loose materials immediately; maintain daily housekeeping and waste collection arrangements.');
    if(r==='fire')a.push('Restore required fire protection, firefighting equipment, segregation and emergency readiness controls before work continues.');
    if(r==='traffic')a.push('Provide traffic segregation, pedestrian demarcation, signage and banksman / flagman control before plant or vehicle movement continues.');
    if(r==='lifting')a.push('Stop lifting / precast activity until approved lifting plan / PTW, exclusion zone, competent supervision and certified accessories are verified.');
    if(r==='plant')a.push('Remove defective plant / equipment from service, tag it out and repair it by competent maintenance personnel before reuse.');
    if(r==='ppe')a.push('Provide and enforce mandatory / task-specific PPE before the activity continues.');
    if(r==='ptw')a.push('Stop the activity until the PTW is issued or revalidated after physical field verification of controls.');
    if(r==='welfare')a.push('Provide or restore required welfare facilities including cold drinking water, shaded rest area, cooling / ventilation and sanitation as applicable.');
    if(r==='tool')a.push('Remove defective portable tools from use and verify guards, cables, plugs, handles, discs / blades and inspection colour coding before reuse.');
    if(r==='msra')a.push('Review and update the MSRA / method statement to match actual site conditions, sequence, hazards and controls.');
    if(!a.length)a.push('Rectify the observed unsafe condition and implement specific preventive controls before continuation of the affected activity.');
    a.push('Inspect similar locations / activities for the same deficiency and close out all repeated issues.');
    a.push('Brief responsible supervisors and workforce on the required control measures and stop-work requirements.');
    a.push('Submit closeout evidence for verification by responsible supervision and OSH team.');
    return a;
  }
  window.buildSpecificManualReport=function(text, selectedCategory='', area=''){
    const raw=clean(text); const pts=splitSmart(raw); const r=detect(raw); const d=DATA[r]||DATA.general; const at=areaText(area);
    return {category:d.cat,root:d.root,desc:desc(r,pts,at),immediate:'',actions:number(actions(r,pts)),legal:d.legal};
  };
  window.previewManualInBoxes=function(card,force=false){
    const manual=card.querySelector('.manualComments')?.value.trim()||''; if(!manual)return;
    const area=card.querySelector('.areaPreview')?.textContent.replace(/^Area:\s*/,'')||'';
    const built=window.buildSpecificManualReport(manual,card.querySelector('.observationCategory')?.value||'',area);
    const cat=card.querySelector('.observationCategory'); addOptionIfMissing(cat,built.category); cat.value=built.category;
    const rootEl=card.querySelector('.rootCause'); addOptionIfMissing(rootEl,built.root); rootEl.value=built.root;
    const descEl=card.querySelector('.observationDescription'), actEl=card.querySelector('.preventiveAction');
    descEl.value=built.desc; descEl.dataset.smartGenerated='1';
    actEl.value=built.actions; actEl.dataset.smartGenerated='1';
    card.querySelectorAll('.legalGrid input').forEach(x=>x.checked=(built.legal||[]).includes(x.value));
    if(typeof setStatus==='function') setStatus('Noor V10: manual sentence understood and report wording generated.');
  };
  window.applyManualToObservationObject=function(o){
    const manual=clean(o.manualComments || o.desc); if(!manual)return o;
    const area=[o.package?`Package ${o.package}`:'', (typeof clusterText==='function'?clusterText(o.cluster):o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');
    const built=window.buildSpecificManualReport(manual,o.category,area);
    return {...o,category:built.category,root:built.root,desc:built.desc,immediate:'',actions:built.actions,legal:built.legal};
  };
  window.finaliseObservationByMode=function(o){return window.applyManualToObservationObject(o);};
  window.createStandardFromManual=function(card){window.previewManualInBoxes(card,true);};
  window.applySmartBriefToCard=function(card){window.previewManualInBoxes(card,true);};
})();

// ================= NOOR V11 HUMAN-READING MANUAL ENGINE =================
// Final priority engine: understands the user's whole manual sentence first.
// It does not classify by one word only. It handles combinations such as:
// - no lifting permit issued for lifting activities = lifting activity without approved lifting permit/PTW
// - working on pitched roof without permit = roof work at height without WAH/PTW
// - no toe board to floor edge to stop falling materials = missing toe board / falling object protection
(function(){
  const COMMON=['Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
  const DATA={
    lifting_permit:{cat:'Lifting Operations / Permit to Work',root:'Lifting permit control failure / Lack of pre-lift authorization and field verification',legal:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 42.0 - Pre Cast Construction','ADOSH-SF CoP 36.0 - Plant and Equipment',...COMMON]},
    lifting:{cat:'Lifting Operations',root:'Poor lifting operation control / Inadequate lifting supervision',legal:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 42.0 - Pre Cast Construction','ADOSH-SF CoP 36.0 - Plant and Equipment',...COMMON]},
    roof_permit:{cat:'Working at Heights / Permit to Work',root:'Work at height PTW failure / Inadequate roof work control',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 26.0 - Scaffolding',...COMMON]},
    roof:{cat:'Working at Heights / Roof Work',root:'Inadequate roof work planning / Fall prevention control failure',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 26.0 - Scaffolding',...COMMON]},
    toe_board:{cat:'Working at Heights / Falling Object Protection',root:'Missing toe board / Inadequate falling object prevention control',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 2.0 - Personal Protective Equipment',...COMMON]},
    storage:{cat:'Material Storage / Housekeeping',root:'Poor material storage control / Inadequate housekeeping supervision',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    electrical:{cat:'Electrical Safety / Portable Tools',root:'Electrical inspection failure / Poor temporary electrical control',legal:['ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 35.0 - Portable Power Tools',...COMMON]},
    scaffold:{cat:'Scaffolding',root:'Scaffolding inspection failure / Incomplete scaffold control',legal:['ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 23.0 - Working at Heights',...COMMON]},
    excavation:{cat:'Excavation Work',root:'Poor excavation planning / Inadequate barricading control',legal:['ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 21.0 - Permit to Work Systems',...COMMON]},
    opening:{cat:'Barricading of Hazards / Floor Openings',root:'Poor barricading maintenance / Hazard protection failure',legal:['ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 23.0 - Working at Heights',...COMMON]},
    access:{cat:'Access and Egress',root:'Poor access / egress planning and housekeeping control',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    fire:{cat:'Fire Prevention / Emergency Readiness',root:'Fire prevention / emergency readiness control failure',legal:['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 28.0 - Hot Work Operations','ADOSH-SF CoP 8.0 - General Workplace Amenities',...COMMON]},
    traffic:{cat:'Traffic Management and Logistics',root:'Traffic management / man-machine interface control failure',legal:['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 36.0 - Plant and Equipment',...COMMON]},
    plant:{cat:'Plant and Equipment',root:'Inadequate plant pre-use inspection / Poor maintenance control',legal:['ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 44.0 - Traffic Management and Logistics',...COMMON]},
    ppe:{cat:'Personal Protective Equipment',root:'PPE compliance failure / Poor supervision',legal:['ADOSH-SF CoP 2.0 - Personal Protective Equipment',...COMMON]},
    ptw:{cat:'Permit to Work Systems',root:'PTW system failure / Lack of field verification',legal:['ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...COMMON]},
    welfare:{cat:'General Workplace Amenities / Welfare Arrangement',root:'Welfare arrangement / amenity maintenance failure',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 12.0 - Safety in the Heat',...COMMON]},
    general:{cat:'OSH Management During Construction Work',root:'Poor supervision / Planning and control failure',legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...COMMON]}
  };
  function clean(t){return String(t||'').replace(/\s+/g,' ').trim();}
  function lower(t){return clean(t).toLowerCase();}
  function uniq(a){return [...new Set((a||[]).filter(Boolean))];}
  function bullet(a){return uniq(a).map(x=>'• '+x).join('\n');}
  function number(a){return uniq(a).map((x,i)=>`${i+1}. ${x}`).join('\n');}
  function at(area){let a=String(area||'').replace(/^Area:\s*/i,'').trim();a=a.replace(/Package\s*-\s*-\s*-/gi,'').replace(/Package\s*-+/gi,'').replace(/\s*-\s*-\s*/g,' - ');a=a.split(' - ').map(clean).filter(x=>x&&x!=='-'&&!/^select/i.test(x)).join(' - ');return a?` at ${a}`:'';}
  function has(t,re){return re.test(t);}
  function split(text){const raw=clean(text); if(!raw)return[]; const t=lower(raw);
    if((has(t,/\blifting\b|\bcrane\b|\bsling\b|\brigging\b|\bprecast\b/) && has(t,/\b(no|not|without|missing)\b.*\b(permit|ptw|lifting\s*permit|work\s*permit)\b|\bpermit\b.*\b(no|not|without|missing|issued)/))) return [raw];
    if(has(t,/roof|rooftop|roof\s*top|pitched?\s*roof|pitch\s*roof/) && has(t,/without|no|missing|permit|ptw/)) return [raw];
    if(has(t,/toe\s*board|toeboard|floor\s*edge|falling\s*materials?|falling\s*objects?/)) return [raw];
    let r=raw.replace(/\b(and also|also|plus)\b/gi,' | ').replace(/[;\n]+/g,' | ');
    let pts=r.split('|').map(clean).filter(Boolean); if(pts.length===1 && /,/.test(r)) pts=r.split(/\s*,\s*/).map(clean).filter(Boolean);
    return uniq(pts).slice(0,16);
  }
  function detect(text){const t=lower(text);
    const isLift=has(t,/\blifting\b|\bcrane\b|\bsling\b|\brigging\b|\bprecast\b|\bpanel\b|\btrailer\b|\blifting\s*activities?\b/);
    const noPermit=has(t,/\b(no|not|without|missing)\b.*\b(permit|ptw|work\s*permit|lifting\s*permit)\b|\bpermit\b.*\b(no|not|without|missing|issued)/);
    const isRoof=has(t,/roof|rooftop|roof\s*top|pitched?\s*roof|pitch\s*roof/);
    if(isLift && noPermit) return 'lifting_permit';
    if(isRoof && noPermit) return 'roof_permit';
    if(isRoof) return 'roof';
    if(has(t,/toe\s*boards?|toeboards?|kick\s*plate|floor\s*edge|leading\s*edge|falling\s*materials?|falling\s*objects?/)) return 'toe_board';
    if(isLift) return 'lifting';
    if(has(t,/unsafe\s+storage|poor\s+storage|material\s+storage|materials?\s+stored|stored\s+materials?|stacking|over\s*stack|loose\s+materials?/) && !has(t,/falling\s+materials?|toe\s*board|floor\s*edge|leading\s*edge/)) return 'storage';
    if(has(t,/open\s*db|db\s*open|distribution\s*board|electrical|cables?|earthing|earth\s*pit|generator|live\s*wire|power\s*tapping|temporary\s*power/)) return 'electrical';
    if(has(t,/scaffold|scaffolding|mobile\s*tower|outrigger|green\s*tag|red\s*tag|platform|plank/)) return 'scaffold';
    if(has(t,/excavation|trench|open\s*trench|boundary\s*wall/)) return 'excavation';
    if(has(t,/floor\s*opening|slab\s*opening|manhole|open\s*shaft|lift\s*shaft|protruding\s*(rebar|steel)|rebar\s*cap|barricad/)) return 'opening';
    if(has(t,/access|egress|walkway|route|blocked|obstructed|ramp|staircase|stairs/)) return 'access';
    if(has(t,/fire|extinguisher|hose\s*reel|smoke\s*detector|combustible|flammable|chemical|hot\s*work|sprinkler|fuel|diesel/)) return 'fire';
    if(has(t,/traffic|vehicle|road|banksman|flagman|reverse|reversing|man.?machine|pedestrian/)) return 'traffic';
    if(has(t,/jcb|bobcat|excavator|loader|forklift|plant|equipment|machine|mirror|glass|windshield|beacon|reverse\s*alarm|tyre|tire/)) return 'plant';
    if(has(t,/ppe|helmet|gloves?|goggles?|face\s*shield|safety\s*shoe|harness|mask/)) return 'ppe';
    if(noPermit || has(t,/permit|ptw|work\s*permit|red\s*flag/)) return 'ptw';
    if(has(t,/welfare|rest\s*area|toilet|drinking\s*water|cold\s*water|water\s*station|a\/c|\bac\b|air\s*conditioning|shade|heat/)) return 'welfare';
    return 'general';
  }
  function description(rule, pts, place){const text=lower(pts.join(' '));
    if(rule==='lifting_permit') return bullet([`Lifting activity was observed / planned${place} without an approved lifting permit / PTW being issued and verified before commencement. This means the lifting plan, crane/equipment suitability, lifting accessories certification, load details, exclusion zone, ground conditions, banksman / lifting supervisor arrangement and communication controls were not formally confirmed at the work front before lifting activities proceeded.`]);
    if(rule==='lifting') return bullet([`Lifting activity controls were not adequately verified${place}. The arrangement created potential dropped-load, struck-by, crushing and plant-interface risks due to inadequate confirmation of lifting plan, equipment, accessories, exclusion zone and competent supervision.`]);
    if(rule==='roof_permit') return bullet([`Workers were carrying out work on the pitched roof / rooftop${place} without a valid Work at Height PTW and physical verification before starting the activity. This exposed personnel to uncontrolled fall-from-height risk due to absence of confirmed roof access, edge protection, anchorage, rescue arrangement, falling-object control and competent supervision.`]);
    if(rule==='roof') return bullet([`Work was being carried out on the pitched roof / rooftop${place} without adequate verified work-at-height controls, creating risk of fall from height and falling objects.`]);
    if(rule==='toe_board') return bullet([`Toe board was missing / not provided at the floor edge / leading edge${place}. This created a falling-object hazard because tools and materials could fall from the edge to workers or access routes below, and the edge protection system was incomplete without proper toe board containment.`]);
    if(rule==='storage') return bullet([`Materials were stored in an unsafe / uncontrolled manner${place}, with inadequate stacking, segregation, demarcation or access clearance, creating risk of material collapse, struck-by injury, trip hazards and obstruction to safe access / emergency movement.`]);
    if(rule==='ptw') return bullet([`The activity was being carried out without adequate Permit to Work control${place}. Required hazards, controls, supervision and site conditions were not formally verified before allowing the work to proceed.`]);
    return bullet(pts.map(p=>oneDesc(p,place)));
  }
  function oneDesc(pt,place){const p=lower(pt), raw=clean(pt).replace(/^and\s+/i,'');
    if(/open\s*db|db\s*open|distribution\s*board/.test(p)) return `Electrical distribution board was left open / unsecured${place}, exposing personnel to unauthorized access and potential contact with live electrical components.`;
    if(/cable/.test(p)) return `Temporary electrical cables were not properly routed, elevated or protected${place}, creating trip hazard and risk of mechanical damage.`;
    if(/scaffold|platform|outrigger/.test(p)) return `Scaffold / working platform was incomplete or not maintained in safe condition${place}, creating fall-from-height and instability risk.`;
    if(/excavation|trench/.test(p)) return `Excavation / trench was not adequately protected${place}, creating fall-into-excavation, edge collapse and uncontrolled access risk.`;
    if(/floor\s*opening|manhole|opening/.test(p)) return `Floor opening / manhole was not adequately covered or barricaded${place}, creating fall and trip hazards.`;
    if(/access|egress|walkway|route|blocked|obstructed/.test(p)) return `Safe access / egress route was not maintained${place}, affecting worker movement and emergency escape.`;
    if(/fire|extinguisher|hose\s*reel|smoke\s*detector|combustible|chemical/.test(p)) return `Fire prevention / emergency readiness controls were inadequate${place}, increasing fire and emergency response risk.`;
    if(/traffic|vehicle|road|banksman|flagman|reverse|man.?machine|pedestrian/.test(p)) return `Traffic / plant movement controls were inadequate${place}, creating collision, reversing and pedestrian interface risk.`;
    if(/jcb|bobcat|excavator|loader|forklift|mirror|glass|windshield|plant|equipment|machine/.test(p)) return `Plant / equipment condition was unsafe (${raw})${place}, creating equipment failure, visibility, collision and injury risk.`;
    if(/ppe|helmet|glove|goggle|face\s*shield|safety\s*shoe|harness/.test(p)) return `Required mandatory / task-specific PPE was not properly used (${raw})${place}, exposing workers to preventable injury.`;
    if(/welfare|rest\s*area|toilet|drinking\s*water|cold\s*water|water\s*station|a\/c|\bac\b|air\s*conditioning|shade|heat/.test(p)) return `Welfare arrangements were inadequate (${raw})${place}, affecting worker health, hydration, hygiene and heat-stress prevention.`;
    return `${raw.charAt(0).toUpperCase()+raw.slice(1)}${place}, creating an unsafe condition requiring specific corrective action.`;
  }
  function action(rule, pts){let a=[];
    if(rule==='lifting_permit'){
      a.push('Stop lifting activities immediately until an approved lifting permit / PTW is issued, reviewed and physically verified at the work location.');
      a.push('Verify the approved lifting plan, crane / equipment certification, lifting accessories certificates, load weight, lifting points, ground condition and lifting radius before restart.');
      a.push('Provide competent lifting supervisor / appointed person, banksman / signalman and clear communication arrangements during lifting activities.');
      a.push('Establish and maintain a hard barricaded exclusion zone around the lifting area and prevent unauthorized entry.');
      a.push('Conduct pre-lift briefing / toolbox talk with all involved workers and ensure the lifting permit conditions are understood and implemented.');
    } else if(rule==='lifting'){
      a.push('Stop the lifting activity until the lifting arrangement is reviewed and confirmed safe by competent lifting supervision.');
      a.push('Verify lifting plan, equipment certification, lifting accessories, exclusion zone, load securing and communication controls before continuation.');
    } else if(rule==='roof_permit'){
      a.push('Stop all pitched roof / rooftop work immediately until a valid Work at Height PTW is issued and physically verified at the work front.');
      a.push('Verify safe roof access, suitable working platform / ladder arrangement, edge protection, anchorage points, fall-arrest requirements and rescue arrangement before work restarts.');
      a.push('Assign competent supervision to monitor the roof activity continuously and ensure workers follow the approved MSRA and PTW conditions.');
      a.push('Barricade the area below the roof work to prevent falling-object exposure to other workers.');
    } else if(rule==='toe_board'){
      a.push('Install continuous toe boards / kick plates at the floor edge / leading edge before work continues.');
      a.push('Ensure the edge protection system is complete with top rail, mid rail and toe board, properly fixed and continuous without gaps.');
      a.push('Remove loose tools and materials from the edge and maintain safe setback distance to prevent falling objects.');
      a.push('Barricade / restrict the area below where falling-object exposure exists until toe boards and containment are completed.');
    } else if(rule==='storage'){
      a.push('Remove / rearrange unsafe stored materials and shift them to approved designated storage areas.');
      a.push('Stack materials safely with stable arrangement, controlled height, proper segregation and no risk of collapse.');
      a.push('Keep access routes, emergency routes, work fronts and villa entrances clear from stored materials.');
    } else if(rule==='ptw'){
      a.push('Stop the activity until the PTW is issued or revalidated after physical field verification of controls.');
      a.push('Confirm the responsible supervisor, approved MSRA, access, isolation and emergency arrangements before restart.');
    } else {
      a.push('Stop / control the affected activity and rectify the specific unsafe condition before work continues.');
      a.push('Verify the required controls at the work front by responsible supervision and OSH team.');
    }
    a.push('Inspect similar locations / activities for the same deficiency and close out all repeated issues.');
    a.push('Brief responsible supervisors and workforce on the required control measures and stop-work requirements.');
    a.push('Submit closeout evidence for verification by responsible supervision and OSH team.');
    return number(a);
  }
  window.buildSpecificManualReport=function(text, selectedCategory='', area=''){
    const raw=clean(text); const pts=split(raw); const rule=detect(raw); const d=DATA[rule]||DATA.general; const place=at(area);
    return {category:d.cat,root:d.root,desc:description(rule,pts,place),immediate:'',actions:action(rule,pts),legal:d.legal};
  };
  window.previewManualInBoxes=function(card,force=false){
    const manual=card.querySelector('.manualComments')?.value.trim()||''; if(!manual)return;
    const area=card.querySelector('.areaPreview')?.textContent.replace(/^Area:\s*/,'')||'';
    const built=window.buildSpecificManualReport(manual,card.querySelector('.observationCategory')?.value||'',area);
    const cat=card.querySelector('.observationCategory'); if(typeof addOptionIfMissing==='function') addOptionIfMissing(cat,built.category); cat.value=built.category;
    const rootEl=card.querySelector('.rootCause'); if(typeof addOptionIfMissing==='function') addOptionIfMissing(rootEl,built.root); rootEl.value=built.root;
    const descEl=card.querySelector('.observationDescription'), actEl=card.querySelector('.preventiveAction');
    descEl.value=built.desc; descEl.dataset.smartGenerated='1'; actEl.value=built.actions; actEl.dataset.smartGenerated='1';
    card.querySelectorAll('.legalGrid input').forEach(x=>x.checked=(built.legal||[]).includes(x.value));
    if(typeof setStatus==='function') setStatus('Noor V11: manual words read as full sentence and specific report wording generated.');
  };
  window.applyManualToObservationObject=function(o){
    const manual=clean(o.manualComments || o.desc); if(!manual)return o;
    const area=[o.package?`Package ${o.package}`:'', (typeof clusterText==='function'?clusterText(o.cluster):o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');
    const built=window.buildSpecificManualReport(manual,o.category,area);
    return {...o,category:built.category,root:built.root,desc:built.desc,immediate:'',actions:built.actions,legal:built.legal};
  };
  window.finaliseObservationByMode=function(o){return window.applyManualToObservationObject(o);};
  window.createStandardFromManual=function(card){window.previewManualInBoxes(card,true);};
  window.applySmartBriefToCard=function(card){window.previewManualInBoxes(card,true);};
})();

// ================= NOOR V12 ENGINEER THINKING ENGINE =================
// Manual note -> specific deficiency -> hazard/consequence -> exact corrective actions.
// No generic repeated action list. Every action is tied to the words typed by the user.
(function(){
  const COMMON=['Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
  const REF={
    power_tool_inspection:{cat:'Portable Power Tools',root:'Portable power tool inspection failure / Poor tool control',legal:['ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 15.0 - Electrical Safety',...COMMON]},
    lifting_permit:{cat:'Lifting Operations / Permit to Work',root:'Lifting permit control failure / Lack of field verification',legal:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 36.0 - Plant and Equipment',...COMMON]},
    lifting:{cat:'Lifting Operations',root:'Poor lifting control / Inadequate supervision',legal:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 36.0 - Plant and Equipment',...COMMON]},
    roof_permit:{cat:'Working at Heights / Permit to Work',root:'Work at height PTW failure / Inadequate roof work control',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 26.0 - Scaffolding',...COMMON]},
    roof:{cat:'Working at Heights / Roof Work',root:'Inadequate roof work planning / Fall prevention control failure',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 26.0 - Scaffolding',...COMMON]},
    toe_board:{cat:'Working at Heights / Falling Object Protection',root:'Incomplete edge protection / Falling object control failure',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    edge:{cat:'Working at Heights / Edge Protection',root:'Inadequate edge protection / Fall prevention control failure',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    storage:{cat:'Material Storage / Housekeeping',root:'Unsafe material storage / Poor housekeeping supervision',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    electrical:{cat:'Electrical Safety',root:'Electrical inspection failure / Poor temporary electrical control',legal:['ADOSH-SF CoP 15.0 - Electrical Safety',...COMMON]},
    scaffold:{cat:'Scaffolding',root:'Scaffolding inspection failure / Incomplete scaffold control',legal:['ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 23.0 - Working at Heights',...COMMON]},
    excavation:{cat:'Excavation Work',root:'Poor excavation planning / Inadequate excavation protection',legal:['ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 21.0 - Permit to Work Systems',...COMMON]},
    opening:{cat:'Barricading of Hazards / Floor Openings',root:'Opening protection failure / Poor barricading control',legal:['ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 23.0 - Working at Heights',...COMMON]},
    access:{cat:'Access and Egress',root:'Poor access / egress control',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    housekeeping:{cat:'Housekeeping / Waste Management',root:'Poor housekeeping supervision / Waste control failure',legal:['ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 8.0 - General Workplace Amenities',...COMMON]},
    fire:{cat:'Fire Prevention / Emergency Readiness',root:'Fire prevention control failure / Inadequate emergency readiness',legal:['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 28.0 - Hot Work Operations','ADOSH-SF CoP 8.0 - General Workplace Amenities',...COMMON]},
    traffic:{cat:'Traffic Management and Logistics',root:'Poor traffic control / Man-machine interface failure',legal:['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 36.0 - Plant and Equipment',...COMMON]},
    plant:{cat:'Plant and Equipment',root:'Plant inspection / maintenance failure',legal:['ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 44.0 - Traffic Management and Logistics',...COMMON]},
    ppe:{cat:'Personal Protective Equipment',root:'PPE compliance failure / Poor supervision',legal:['ADOSH-SF CoP 2.0 - Personal Protective Equipment',...COMMON]},
    ptw:{cat:'Permit to Work Systems',root:'PTW system failure / Lack of field verification',legal:['ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...COMMON]},
    welfare:{cat:'General Workplace Amenities / Welfare Arrangement',root:'Welfare amenity maintenance failure',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 12.0 - Safety in the Heat',...COMMON]},
    msra:{cat:'OSH Management During Construction Work / MSRA',root:'Poor MSRA implementation / Inadequate risk assessment control',legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work','ADOSH-SF CoP 53.1 - OSH Construction Management Plan',...COMMON]},
    general:{cat:'OSH Management During Construction Work',root:'Poor supervision / Task control failure',legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...COMMON]}
  };
  function clean(t){return String(t||'').replace(/\s+/g,' ').trim();}
  function low(t){return clean(t).toLowerCase();}
  function has(t,re){return re.test(t);}
  function uniq(a){return [...new Set((a||[]).filter(Boolean))];}
  function bullet(a){return uniq(a).map(x=>'• '+x).join('\n');}
  function number(a){return uniq(a).map((x,i)=>`${i+1}. ${x}`).join('\n');}
  function place(area){let a=String(area||'').replace(/^Area:\s*/i,'').trim();a=a.replace(/Package\s*-\s*-\s*-/gi,'').replace(/Package\s*-+/gi,'').replace(/\s*-\s*-\s*/g,' - ');a=a.split(' - ').map(clean).filter(x=>x&&x!=='-'&&!/^select/i.test(x)).join(' - ');return a?` at ${a}`:'';}
  function split(text){let raw=clean(text); if(!raw) return [];
    if(has(low(raw),/(roof|rooftop|roof\s*top|pitched?\s*roof).*\b(no|without|missing)\b.*(permit|ptw|work\s*permit)/)) return [raw];
    if(has(low(raw),/(lifting|crane|sling|rigging).*\b(no|without|missing)\b.*(permit|ptw|work\s*permit)|\b(no|without|missing)\b.*(lifting\s*)?(permit|ptw).*lifting/)) return [raw];
    if(has(low(raw),/toe\s*board|toeboard|kick\s*plate/)) return [raw];
    let r=raw.replace(/\b(and also|also|plus)\b/gi,' | ').replace(/[;\n]+/g,' | ');
    let pts=r.split('|').map(clean).filter(Boolean);
    if(pts.length===1 && /,/.test(r)) pts=r.split(/\s*,\s*/).map(clean).filter(Boolean);
    return uniq(pts).slice(0,12);
  }
  function detect(text){const t=low(text);
    if(has(t,/(power\s*tools?|portable\s*tools?|tools?)\s+(are\s+)?(not\s+)?(inspected|checked|tagged|color\s*coded|colour\s*coded)|no\s+(inspection|tag|sticker|color\s*code|colour\s*code).*power\s*tools?/)) return 'power_tool_inspection';
    if(has(t,/(lifting|crane|sling|rigging).*\b(no|without|missing)\b.*(permit|ptw|work\s*permit)|\b(no|without|missing)\b.*(lifting\s*)?(permit|ptw).*lifting/)) return 'lifting_permit';
    if(has(t,/\b(working\s+on\s+)?(pitch\s*roof|pitched\s*roof|roof\s*top|rooftop|roof)\b/) && has(t,/\b(no|without|missing)\b.*(permit|ptw|work\s*permit)/)) return 'roof_permit';
    if(has(t,/\b(working\s+on\s+)?(pitch\s*roof|pitched\s*roof|roof\s*top|rooftop|roof)\b/)) return 'roof';
    if(has(t,/toe\s*boards?|toeboards?|kick\s*plate/)) return 'toe_board';
    if(has(t,/floor\s*edge|leading\s*edge|roof\s*edge|edge\s*protection|guard\s*rails?|guardrails?|mid\s*rails?|falling\s*objects?|falling\s*materials?|fall\s*protection/)) return 'edge';
    if(has(t,/unsafe\s+storage|poor\s+storage|material\s+storage|materials?\s+stored|stored\s+materials?|stacking|over\s*stack|loose\s+materials?/) && !has(t,/falling\s+materials?|toe\s*board|floor\s*edge|leading\s*edge/)) return 'storage';
    if(has(t,/open\s*db|db\s*open|distribution\s*board|electrical|cables?|earthing|earth\s*pit|generator|live\s*wire|power\s*tapping|temporary\s*power/)) return 'electrical';
    if(has(t,/scaffold|scaffolding|mobile\s*tower|outrigger|green\s*tag|red\s*tag|platform|plank/)) return 'scaffold';
    if(has(t,/excavation|trench|open\s*trench|boundary\s*wall/)) return 'excavation';
    if(has(t,/floor\s*opening|slab\s*opening|manhole|open\s*shaft|lift\s*shaft|protruding\s*(rebar|steel)|rebar\s*cap|barricad/)) return 'opening';
    if(has(t,/access|egress|walkway|route|blocked|obstructed|ramp|staircase|stairs/)) return 'access';
    if(has(t,/housekeeping|waste|debris|garbage|scrap/)) return 'housekeeping';
    if(has(t,/fire|extinguisher|hose\s*reel|smoke\s*detector|combustible|flammable|chemical|hot\s*work|sprinkler|fuel|diesel/)) return 'fire';
    if(has(t,/traffic|vehicle|road|banksman|flagman|reverse|reversing|man.?machine|pedestrian/)) return 'traffic';
    if(has(t,/lifting|crane|sling|precast|panel|trailer|rigging/)) return 'lifting';
    if(has(t,/jcb|bobcat|excavator|loader|forklift|plant|equipment|machine|mirror|glass|windshield|beacon|reverse\s*alarm|tyre|tire/)) return 'plant';
    if(has(t,/ppe|helmet|gloves?|goggles?|face\s*shield|safety\s*shoe|harness|mask/)) return 'ppe';
    if(has(t,/permit|ptw|work\s*permit|red\s*flag/)) return 'ptw';
    if(has(t,/welfare|rest\s*area|toilet|drinking\s*water|cold\s*water|water\s*station|a\/c|\bac\b|air\s*conditioning|shade|heat/)) return 'welfare';
    if(has(t,/msra|risk\s*assessment|method\s*statement|rams/)) return 'msra';
    return 'general';
  }
  function description(rule, pts, at){
    const t=low(pts.join(' '));
    if(rule==='power_tool_inspection') return bullet([`Portable power tools were available / being used${at} without evidence of valid inspection, tagging, colour coding or inspection records. This creates risk of defective tools remaining in service, which may lead to electric shock, cuts, flying particles, entanglement, fire or other injury during operation.`]);
    if(rule==='lifting_permit') return bullet([`Lifting activity was observed / planned${at} without an approved lifting permit / PTW being issued and verified before commencement. The lifting plan, crane / equipment suitability, lifting accessories certification, load details, exclusion zone, ground condition, lifting supervisor / banksman arrangement and communication controls were therefore not formally confirmed before lifting activities proceeded.`]);
    if(rule==='lifting') return bullet([`Lifting activity controls were not adequately verified${at}. The condition created potential dropped-load, struck-by, crushing and plant-interface risks due to inadequate confirmation of lifting plan, equipment, lifting accessories, exclusion zone and competent supervision.`]);
    if(rule==='roof_permit') return bullet([`Workers were carrying out work on the pitched roof / rooftop${at} without a valid Work at Height PTW and physical verification before starting the activity. This exposed personnel to uncontrolled fall-from-height risk due to absence of confirmed roof access, edge protection, anchorage, rescue arrangement, falling-object control and competent supervision.`]);
    if(rule==='roof') return bullet([`Work was being carried out on the pitched roof / rooftop${at} without adequate verified work-at-height controls, creating risk of fall from height and falling objects.`]);
    if(rule==='toe_board') return bullet([`Toe board / kick plate was missing or not provided at the floor edge / leading edge${at}. This created a falling-object hazard because tools, materials or debris could fall from the elevated edge and strike personnel or access routes below. The edge protection system was incomplete without proper toe board containment.`]);
    if(rule==='storage') return bullet([`Materials were stored in an unsafe / uncontrolled manner${at}, with inadequate stacking, segregation, demarcation or access clearance, creating risk of material collapse, struck-by injury, trip hazards and obstruction to safe access / emergency movement.`]);
    if(rule==='ptw') return bullet([`The activity was being carried out without adequate Permit to Work control${at}. Required hazards, control measures, competent supervision, access, isolation and emergency arrangements were not formally verified before allowing the work to proceed.`]);
    return bullet(pts.map(p=>descOne(p,at)));
  }
  function descOne(pt,at){const p=low(pt), raw=clean(pt).replace(/^and\s+/i,'');
    if(has(p,/open\s*db|db\s*open|distribution\s*board/)) return `Electrical distribution board was left open / unsecured${at}, exposing personnel to unauthorized access and potential contact with live electrical components.`;
    if(has(p,/cable/)) return `Temporary electrical cables were not properly routed, elevated or protected${at}, creating trip hazard and risk of mechanical damage to the cable insulation.`;
    if(has(p,/scaffold|platform|outrigger/)) return `Scaffold / working platform was incomplete or not maintained in safe condition${at}, creating fall-from-height and instability risk.`;
    if(has(p,/excavation|trench/)) return `Excavation / trench was not adequately protected${at}, creating fall-into-excavation, edge collapse and uncontrolled access risk.`;
    if(has(p,/floor\s*opening|manhole|opening/)) return `Floor opening / manhole was not adequately covered or hard-barricaded${at}, creating fall and trip hazards.`;
    if(has(p,/access|egress|walkway|route|blocked|obstructed/)) return `Safe access / egress route was not maintained${at}, affecting worker movement and emergency escape.`;
    if(has(p,/housekeeping|waste|debris|garbage|scrap/)) return `Poor housekeeping was observed${at}, with waste / debris affecting safe access and increasing slip, trip and fire-load risk.`;
    if(has(p,/fire|extinguisher|hose\s*reel|smoke\s*detector|combustible|chemical/)) return `Fire prevention / emergency readiness controls were inadequate${at}, increasing fire and emergency response risk.`;
    if(has(p,/traffic|vehicle|road|banksman|flagman|reverse|man.?machine|pedestrian/)) return `Traffic / plant movement controls were inadequate${at}, creating collision, reversing and pedestrian interface risk.`;
    if(has(p,/jcb|bobcat|excavator|loader|forklift|mirror|glass|windshield|plant|equipment|machine/)) return `Plant / equipment condition was unsafe (${raw})${at}, creating equipment failure, visibility, collision and injury risk.`;
    if(has(p,/ppe|helmet|glove|goggle|face\s*shield|safety\s*shoe|harness/)) return `Required mandatory / task-specific PPE was not properly used (${raw})${at}, exposing workers to preventable injury.`;
    if(has(p,/welfare|rest\s*area|toilet|drinking\s*water|cold\s*water|water\s*station|a\/c|\bac\b|air\s*conditioning|shade|heat/)) return `Welfare arrangements were inadequate (${raw})${at}, affecting worker health, hydration, hygiene and heat-stress prevention.`;
    if(has(p,/msra|risk\s*assessment|method\s*statement|rams/)) return `Approved MSRA / method statement was not effectively implemented for the actual site condition${at}, leaving task-specific hazards uncontrolled.`;
    return `${raw.charAt(0).toUpperCase()+raw.slice(1)}${at}, creating an unsafe condition requiring task-specific corrective action.`;
  }
  function action(rule){let a=[];
    if(rule==='power_tool_inspection') a=[
      'Remove all uninspected portable power tools from use immediately.',
      'Inspect and test each portable power tool by a competent person before further use.',
      'Confirm tool guards, cables, plugs, switches, handles, casings and accessories are in safe condition.',
      'Affix valid inspection sticker / colour coding on each approved tool after inspection.',
      'Maintain portable power tool inspection records at site and make them available for verification.',
      'Do not allow any portable power tool to be used unless it is inspected, tagged and suitable for the task.'
    ];
    else if(rule==='lifting_permit') a=[
      'Suspend lifting activities immediately until an approved lifting permit / PTW is issued and physically verified at the work location.',
      'Verify approved lifting plan, load details, lifting points, lifting radius, ground condition and crane / equipment suitability before restart.',
      'Check validity of crane / equipment certificates and all lifting accessories certificates before use.',
      'Provide competent lifting supervisor / appointed person, banksman / signalman and clear communication arrangements during lifting activities.',
      'Establish a hard barricaded lifting exclusion zone and prevent unauthorized entry before commencing the lift.',
      'Conduct pre-lift briefing with all involved personnel and ensure the permit conditions are implemented at the work front.'
    ];
    else if(rule==='lifting') a=[
      'Stop lifting activity until the lifting arrangement is reviewed and confirmed safe by competent lifting supervision.',
      'Verify lifting plan, equipment certification, lifting accessories, load securing, exclusion zone and communication controls before continuation.',
      'Ensure lifting supervisor / banksman remains present during the full lifting operation.'
    ];
    else if(rule==='roof_permit') a=[
      'Stop all pitched roof / rooftop work immediately until a valid Work at Height PTW is issued and physically verified at the work front.',
      'Verify safe roof access, suitable working platform / ladder arrangement, edge protection, anchorage points, fall-arrest requirements and rescue arrangement before restart.',
      'Assign competent supervision to monitor the roof activity continuously and ensure workers follow approved MSRA and PTW conditions.',
      'Barricade the area below the roof work to prevent falling-object exposure to other workers.'
    ];
    else if(rule==='roof') a=[
      'Stop roof work until safe access, edge protection, working platform, fall protection and rescue arrangements are verified.',
      'Provide suitable working platform / access system for roof activity and prohibit unsafe ladder/platform arrangements.',
      'Restrict the area below roof work where falling-object exposure exists.'
    ];
    else if(rule==='toe_board') a=[
      'Install continuous toe boards / kick plates at the floor edge / leading edge before work continues.',
      'Ensure the edge protection system is complete with top rail, mid rail and toe board, properly fixed and continuous without gaps.',
      'Remove loose tools and materials from the edge and maintain safe setback distance to prevent falling objects.',
      'Barricade / restrict the area below where falling-object exposure exists until toe boards and containment are completed.'
    ];
    else if(rule==='storage') a=[
      'Remove / rearrange unsafe stored materials and shift them to approved designated storage areas.',
      'Stack materials safely with stable arrangement, controlled height, proper segregation and no risk of collapse.',
      'Keep access routes, emergency routes, work fronts and villa entrances clear from stored materials.',
      'Provide storage demarcation, signage and assigned supervision for each storage area.'
    ];
    else if(rule==='electrical') a=[
      'Isolate or restrict access to unsafe electrical arrangements until inspected by competent electrical personnel.',
      'Close, secure and lock all electrical distribution boards; only competent electricians shall access DBs.',
      'Route, elevate or mechanically protect temporary cables away from access routes, wet areas and traffic movement.',
      'Replace damaged cables, plugs, sockets or electrical accessories before use.',
      'Update electrical inspection / tagging records after rectification.'
    ];
    else if(rule==='scaffold') a=[
      'Stop scaffold / platform use until all missing or defective components are rectified.',
      'Provide required guardrails, mid rails, toe boards, bracing, base plates, access ladder, platform planks, locking pins and outriggers where applicable.',
      'Inspect and tag the scaffold by a competent scaffolding inspector before allowing use.'
    ];
    else if(rule==='excavation') a=[
      'Install rigid barricades and warning signage around the excavation / trench.',
      'Provide safe access and egress for workers entering or working near the excavation.',
      'Keep spoil, blocks and materials away from excavation edges to prevent collapse or falling materials.',
      'Verify excavation PTW and competent person inspection before work continues.'
    ];
    else if(rule==='opening') a=[
      'Cover openings with secured load-bearing covers or protect them with rigid hard barricades.',
      'Mark opening covers clearly and prevent unauthorized removal.',
      'Provide warning signage and inspect opening protection daily.'
    ];
    else if(rule==='access') a=[
      'Clear the affected access / egress route immediately.',
      'Provide safe walkway, ramp, stair or access bridge suitable for worker movement.',
      'Keep access and emergency escape routes free from materials, cables, debris and obstructions.'
    ];
    else if(rule==='housekeeping') a=[
      'Remove waste, debris and loose materials from the affected work area immediately.',
      'Provide waste collection points and remove accumulated waste routinely.',
      'Maintain clear access routes and work fronts before continuing the activity.'
    ];
    else if(rule==='fire') a=[
      'Provide required fire extinguishers / firefighting equipment at the affected location.',
      'Remove or segregate combustible / flammable materials from ignition sources.',
      'Verify hot work / fire watch / emergency arrangements before allowing the activity to continue.'
    ];
    else if(rule==='traffic') a=[
      'Stop uncontrolled vehicle / plant movement until traffic controls are restored.',
      'Provide pedestrian segregation, signage, banksman / flagman control and safe crossing arrangements.',
      'Maintain exclusion zones during reversing, loading, unloading and plant movement.'
    ];
    else if(rule==='plant') a=[
      'Remove defective plant / equipment from service and tag it out immediately.',
      'Repair the defect by competent maintenance personnel before reuse.',
      'Verify plant inspection checklist, third-party certificate and safety devices before returning equipment to operation.'
    ];
    else if(rule==='ppe') a=[
      'Stop the affected activity until required mandatory / task-specific PPE is provided and worn correctly.',
      'Replace missing or damaged PPE before workers return to the task.',
      'Supervisor shall verify PPE compliance before and during the activity.'
    ];
    else if(rule==='ptw') a=[
      'Stop the activity until the required PTW is issued or revalidated.',
      'Physically verify the work front hazards, MSRA controls, access, isolation, supervision and emergency arrangements before restart.',
      'Ensure the permit receiver and responsible supervisor understand and implement all PTW conditions.'
    ];
    else if(rule==='welfare') a=[
      'Provide / restore the required welfare facility immediately according to the observed deficiency.',
      'Ensure cold drinking water, shaded rest area, cooling / ventilation, sanitation and cleanliness are maintained where applicable.',
      'Assign responsible personnel to inspect welfare facilities and close out defects promptly.'
    ];
    else if(rule==='msra') a=[
      'Review and revise the MSRA / method statement to match the actual site condition and work sequence.',
      'Communicate the revised hazards and controls to supervisors and workers before restart.',
      'Verify implementation of the MSRA controls at the work front.'
    ];
    else a=['Rectify the identified unsafe condition with task-specific corrective controls before continuing the affected activity.','Verify the rectified condition at the work front before allowing continuation.'];
    return number(a);
  }
  window.buildSpecificManualReport=function(text, selectedCategory='', area=''){
    const raw=clean(text); const pts=split(raw); const rule=detect(raw); const data=REF[rule]||REF.general; const at=place(area);
    return {category:data.cat,root:data.root,desc:description(rule,pts,at),immediate:'',actions:action(rule),legal:data.legal};
  };
  window.previewManualInBoxes=function(card,force=false){
    const manual=card.querySelector('.manualComments')?.value.trim()||''; if(!manual)return;
    const area=card.querySelector('.areaPreview')?.textContent.replace(/^Area:\s*/,'')||'';
    const built=window.buildSpecificManualReport(manual,card.querySelector('.observationCategory')?.value||'',area);
    const cat=card.querySelector('.observationCategory'); if(typeof addOptionIfMissing==='function') addOptionIfMissing(cat,built.category); cat.value=built.category;
    const rootEl=card.querySelector('.rootCause'); if(typeof addOptionIfMissing==='function') addOptionIfMissing(rootEl,built.root); rootEl.value=built.root;
    const descEl=card.querySelector('.observationDescription'), actEl=card.querySelector('.preventiveAction');
    descEl.value=built.desc; descEl.dataset.smartGenerated='1'; actEl.value=built.actions; actEl.dataset.smartGenerated='1';
    card.querySelectorAll('.legalGrid input').forEach(x=>x.checked=(built.legal||[]).includes(x.value));
    if(typeof setStatus==='function') setStatus('Noor V12: engineer thinking engine generated specific observation and action only.');
  };
  window.applyManualToObservationObject=function(o){
    const manual=clean(o.manualComments || o.desc); if(!manual)return o;
    const area=[o.package?`Package ${o.package}`:'', (typeof clusterText==='function'?clusterText(o.cluster):o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');
    const built=window.buildSpecificManualReport(manual,o.category,area);
    return {...o,category:built.category,root:built.root,desc:built.desc,immediate:'',actions:built.actions,legal:built.legal};
  };
  window.finaliseObservationByMode=function(o){return window.applyManualToObservationObject(o);};
  window.createStandardFromManual=function(card){window.previewManualInBoxes(card,true);};
  window.applySmartBriefToCard=function(card){window.previewManualInBoxes(card,true);};
})();

// ================= NOOR V13 CONTEXT-AWARE MULTI-HAZARD ENGINE =================
// Final override: analyses every manual point separately, preserves the exact deficiency,
// links it to a credible consequence, and produces only task-specific corrective actions.
(function(){
  const COMMON=['Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
  const RULES=[
    {id:'edge',re:/\b(edge\s*protection|leading\s*edge|floor\s*edge|roof\s*edge|window\s*edge|guard\s*rails?|guardrails?|mid\s*rails?|fall\s*protection)\b/i,cat:'Working at Heights / Edge Protection',root:'Inadequate edge protection / Fall prevention control failure',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    {id:'toe_board',re:/\b(toe\s*boards?|toeboards?|kick\s*plates?)\b/i,cat:'Working at Heights / Falling Object Protection',root:'Incomplete edge protection / Falling object control failure',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    {id:'roof_permit',re:/(?=.*\b(roof|rooftop|pitched?\s*roof)\b)(?=.*\b(no|without|missing|not\s+provided)\b.*\b(permit|ptw|work\s*permit)\b)/i,cat:'Working at Heights / Permit to Work',root:'Work at height PTW failure / Inadequate roof work control',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 21.0 - Permit to Work Systems',...COMMON]},
    {id:'power_tool_inspection',re:/(?=.*\b(power|portable)?\s*tools?\b)(?=.*\b(not\s+inspected|without\s+inspection|no\s+inspection|not\s+tagged|without\s+tag|no\s+tag|colour\s*coding|color\s*coding|pat\s*test)\b)/i,cat:'Portable Power Tools',root:'Portable power tool inspection failure / Poor tool control',legal:['ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 15.0 - Electrical Safety',...COMMON]},
    {id:'lifting_permit',re:/(?=.*\b(lifting|crane|rigging|sling)\b)(?=.*\b(no|without|missing|not\s+issued|not\s+provided)\b.*\b(permit|ptw|work\s*permit)\b)/i,cat:'Lifting Operations / Permit to Work',root:'Lifting permit control failure / Lack of field verification',legal:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 21.0 - Permit to Work Systems',...COMMON]},
    {id:'electrical',re:/\b(open\s*db|db\s*open|distribution\s*board|electrical|cables?|earthing|earth\s*pit|generator|live\s*wire|power\s*tapping|temporary\s*power)\b/i,cat:'Electrical Safety',root:'Electrical inspection failure / Poor temporary electrical control',legal:['ADOSH-SF CoP 15.0 - Electrical Safety',...COMMON]},
    {id:'scaffold',re:/\b(scaffold|scaffolding|mobile\s*tower|outrigger|green\s*tag|red\s*tag|working\s*platform|scaffold\s*plank)\b/i,cat:'Scaffolding',root:'Scaffolding inspection failure / Incomplete scaffold control',legal:['ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 23.0 - Working at Heights',...COMMON]},
    {id:'excavation',re:/\b(excavation|trench|open\s*trench|boundary\s*wall\s*excavation)\b/i,cat:'Excavation Work',root:'Poor excavation planning / Inadequate excavation protection',legal:['ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 21.0 - Permit to Work Systems',...COMMON]},
    {id:'opening',re:/\b(floor\s*opening|slab\s*opening|manhole|open\s*shaft|lift\s*shaft|protruding\s*(rebar|steel)|rebar\s*cap|barricad)\b/i,cat:'Barricading of Hazards / Floor Openings',root:'Opening protection failure / Poor barricading control',legal:['ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 23.0 - Working at Heights',...COMMON]},
    {id:'access',re:/\b(access|egress|walkway|route|blocked|obstructed|ramp|staircase|stairs)\b/i,cat:'Access and Egress',root:'Poor access / egress control',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 22.0 - Barricading of Hazards',...COMMON]},
    {id:'housekeeping',re:/\b(housekeeping|waste|debris|garbage|scrap)\b/i,cat:'Housekeeping / Waste Management',root:'Poor housekeeping supervision / Waste control failure',legal:['ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 8.0 - General Workplace Amenities',...COMMON]},
    {id:'fire',re:/\b(fire|extinguisher|hose\s*reel|smoke\s*detector|combustible|flammable|chemical|hot\s*work|sprinkler|fuel|diesel)\b/i,cat:'Fire Prevention / Emergency Readiness',root:'Fire prevention control failure / Inadequate emergency readiness',legal:['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 28.0 - Hot Work Operations',...COMMON]},
    {id:'traffic',re:/\b(traffic|vehicle|road|banksman|flagman|reverse|reversing|man.?machine|pedestrian)\b/i,cat:'Traffic Management and Logistics',root:'Poor traffic control / Man-machine interface failure',legal:['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 36.0 - Plant and Equipment',...COMMON]},
    {id:'lifting',re:/\b(lifting|crane|sling|precast|panel|trailer|rigging)\b/i,cat:'Lifting Operations',root:'Poor lifting control / Inadequate supervision',legal:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 36.0 - Plant and Equipment',...COMMON]},
    {id:'plant',re:/\b(jcb|bobcat|excavator|loader|forklift|plant|equipment|machine|mirror|glass|windshield|beacon|reverse\s*alarm|tyre|tire)\b/i,cat:'Plant and Equipment',root:'Plant inspection / maintenance failure',legal:['ADOSH-SF CoP 36.0 - Plant and Equipment',...COMMON]},
    {id:'ppe',re:/\b(ppe|helmet|gloves?|goggles?|face\s*shield|safety\s*shoes?|harness|mask)\b/i,cat:'Personal Protective Equipment',root:'PPE compliance failure / Poor supervision',legal:['ADOSH-SF CoP 2.0 - Personal Protective Equipment',...COMMON]},
    {id:'welfare',re:/\b(welfare|rest\s*area|toilet|drinking\s*water|cold\s*water|water\s*station|a\/c|air\s*conditioning|shade|heat)\b/i,cat:'General Workplace Amenities / Welfare Arrangement',root:'Welfare amenity maintenance failure',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 12.0 - Safety in the Heat',...COMMON]},
    {id:'msra',re:/\b(msra|risk\s*assessment|method\s*statement|rams)\b/i,cat:'OSH Management During Construction Work / MSRA',root:'Poor MSRA implementation / Inadequate risk assessment control',legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work','ADOSH-SF CoP 53.1 - OSH Construction Management Plan',...COMMON]},
    {id:'ptw',re:/\b(permit|ptw|work\s*permit|red\s*flag)\b/i,cat:'Permit to Work Systems',root:'PTW system failure / Lack of field verification',legal:['ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...COMMON]}
  ];
  const clean=t=>String(t||'').replace(/\s+/g,' ').trim().replace(/[.;,]+$/,'');
  const uniq=a=>[...new Set((a||[]).filter(Boolean))];
  const bullets=a=>uniq(a).map(x=>'• '+x).join('\n');
  const numbers=a=>uniq(a).map((x,i)=>`${i+1}. ${x}`).join('\n');
  function location(area){const a=clean(String(area||'').replace(/^Area:\s*/i,''));return a?` at ${a}`:'';}
  function splitPoints(text){
    let s=String(text||'').replace(/\r/g,'\n').trim(); if(!s)return[];
    s=s.replace(/\b(and also|also|plus)\b/gi,' | ').replace(/[;\n]+/g,' | ');
    // Split "and" only where another recognizable hazard starts; retain natural phrases otherwise.
    s=s.replace(/\s+and\s+(?=(?:no|not|without|missing|open|poor|unsafe|damaged|broken|blocked|unprotected|inadequate|workers?|materials?|cables?|scaffold|excavation|edge|floor|fire|traffic|plant|ppe|welfare|ptw|permit)\b)/gi,' | ');
    return uniq(s.split('|').map(clean).filter(Boolean)).slice(0,15);
  }
  function detectPoint(point){return RULES.find(r=>r.re.test(point))||{id:'general',cat:'OSH Management During Construction Work',root:'Poor supervision / Task control failure',legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work',...COMMON]};}
  function deficiencyPhrase(p){
    const t=clean(p);
    if(/not\s+provided|missing|without|no\b/i.test(t)) return t;
    return t;
  }
  function describe(rule,p,at){const d=deficiencyPhrase(p);
    switch(rule){
      case 'edge': return `Edge protection was not provided / was incomplete${at}, leaving an exposed leading edge. Personnel working or moving near the edge could fall to a lower level, resulting in serious injury or fatality. The open edge may also allow tools or materials to fall onto persons below.`;
      case 'toe_board': return `Toe board / kick plate was missing from the edge protection system${at}. Tools, materials or debris could fall from the elevated edge and strike personnel below, while the collective edge protection remained incomplete.`;
      case 'roof_permit': return `Work on the pitched roof / rooftop was being carried out${at} without a valid Work at Height PTW and physical field verification. Safe access, edge protection, anchorage, rescue and falling-object controls were therefore not formally confirmed, exposing workers to a potentially fatal fall.`;
      case 'power_tool_inspection': return `Portable power tools were available / being used${at} without valid inspection, PAT testing, tagging or colour coding. Defective tools could remain in service and cause electric shock, cuts, flying-particle injury, entanglement or fire.`;
      case 'electrical': return /cable/i.test(p)?`Temporary electrical cables were not safely routed, elevated or mechanically protected${at}, creating trip hazards and risk of insulation damage, electric shock, short circuit or fire.`:`Unsafe electrical condition was identified${at} (${d}). Personnel could gain access to live parts or use an inadequately protected electrical system, resulting in electric shock, arc flash, short circuit or fire.`;
      case 'scaffold': return `The scaffold / working platform was incomplete, defective or not maintained in a compliant condition${at} (${d}). This could lead to platform instability, loss of balance, fall from height or falling materials.`;
      case 'excavation': return `The excavation / trench was not adequately protected${at} (${d}). Persons could fall into the excavation, be struck by falling materials, or be exposed to edge collapse and uncontrolled plant / pedestrian interface.`;
      case 'opening': return `The floor opening / manhole / hazardous opening was not adequately covered or hard-barricaded${at} (${d}), creating risk of a person falling through the opening, tripping, or suffering impalement where protruding steel is present.`;
      case 'access': return `Safe access / egress was not maintained${at} (${d}). Workers may slip, trip or fall during movement, and emergency evacuation or rescue access could be delayed.`;
      case 'housekeeping': return `Poor housekeeping was observed${at} (${d}), creating slip and trip hazards, obstructing safe access and increasing combustible fire load.`;
      case 'fire': return `Fire prevention / emergency readiness arrangements were inadequate${at} (${d}). A fire may not be detected, controlled or responded to promptly, increasing the potential for injury, smoke exposure and property damage.`;
      case 'traffic': return `Traffic / man-machine interface controls were inadequate${at} (${d}), exposing pedestrians and workers to collision, reversing, crushing or struck-by hazards.`;
      case 'lifting_permit': return `Lifting activity was planned / undertaken${at} without an approved lifting permit / PTW and physical verification. Load details, crane suitability, lifting accessories, ground condition, exclusion zone and competent supervision were not formally confirmed, creating dropped-load, crushing and struck-by risk.`;
      case 'lifting': return `Lifting / precast handling controls were inadequate${at} (${d}), creating potential for dropped load, load instability, crushing and struck-by injury.`;
      case 'plant': return `Plant / equipment was in an unsafe or defective condition${at} (${d}). Continued operation could cause loss of control, poor visibility, mechanical failure, collision or injury to the operator and nearby personnel.`;
      case 'ppe': return `Required mandatory / task-specific PPE was not properly provided or used${at} (${d}), leaving workers directly exposed to the task hazard and preventable injury.`;
      case 'welfare': return `Required welfare provision was inadequate${at} (${d}), affecting hydration, thermal comfort, hygiene or worker recovery and increasing the potential for heat-related illness.`;
      case 'msra': return `The approved MSRA / method statement did not adequately reflect or control the actual site condition${at} (${d}), leaving task-specific hazards without verified control measures.`;
      case 'ptw': return `The activity was being carried out${at} without adequate Permit to Work control and physical field verification (${d}). Critical hazards, supervision, access, isolation and emergency arrangements were not confirmed before work proceeded.`;
      default: return `The following unsafe condition was identified${at}: ${d}. The condition may expose workers or others to injury and requires a task-specific control based on the actual work activity.`;
    }
  }
  function actions(rule,p){
    switch(rule){
      case 'edge': return ['Stop work and restrict access within the fall-exposure zone until compliant edge protection is installed.','Provide a continuous and securely fixed edge protection system comprising top rail, mid rail and toe board at the exposed villa edge.','Inspect the full perimeter of the affected floor / roof and reinstate every missing, loose or damaged section before work resumes.','Do not remove or alter edge protection without authorised temporary removal controls and immediate reinstatement.'];
      case 'toe_board': return ['Install continuous, securely fixed toe boards / kick plates along the affected edge before work continues.','Remove loose tools and materials from the edge and maintain a safe setback distance.','Barricade the area below until falling-object containment is fully restored.'];
      case 'roof_permit': return ['Stop roof work until a valid Work at Height PTW is issued after physical verification of the work front.','Verify safe roof access, compliant edge protection, suitable anchorage / fall-arrest system, rescue plan and falling-object exclusion zone before restart.','Provide continuous competent supervision for the roof activity and ensure all PTW / MSRA conditions are implemented.'];
      case 'power_tool_inspection': return ['Remove all uninspected / untagged portable power tools from service immediately.','Inspect and PAT test each tool by a competent person, including cable, plug, casing, switch, guard and accessory condition.','Affix valid inspection identification / colour coding only after the tool passes inspection and maintain the inspection register.','Do not permit any tool to return to service until its inspection status is verified at the work front.'];
      case 'electrical': return ['Isolate or restrict access to the unsafe electrical arrangement until inspected by a competent electrician.','Close, secure and lock distribution boards and prevent unauthorised access to live components.','Route, elevate or mechanically protect temporary cables away from pedestrian routes, wet areas and vehicle movement.','Replace damaged electrical components and verify earthing, RCD protection and inspection status before energisation / reuse.'];
      case 'scaffold': return ['Stop use of the affected scaffold / platform until all deficiencies are rectified.','Provide all required components, including base support, bracing, full decking, safe access, top rail, mid rail, toe board and outriggers where applicable.','Have the scaffold inspected and tagged by a competent scaffolding inspector before reuse.'];
      case 'excavation': return ['Restrict access and install rigid barricades with warning signage around the excavation.','Provide safe access / egress and keep spoil, blocks, plant and materials at a safe setback from the edge.','Verify excavation PTW, ground condition and competent-person inspection before work continues.'];
      case 'opening': return ['Protect the opening with a secured load-bearing cover or rigid hard barricade suitable for the hazard.','Clearly identify the cover / barricade and prevent unauthorised removal.','Inspect the protection before each shift and after any nearby activity that may disturb it.'];
      case 'access': return ['Clear the affected access / egress route immediately.','Provide a stable, adequately wide and properly protected walkway, ramp, stair or access bridge suitable for the location.','Keep the route free from materials, debris, cables and other obstructions at all times.'];
      case 'housekeeping': return ['Remove accumulated waste, debris and loose materials from the affected area immediately.','Provide designated waste collection points and a defined removal frequency for the work area.','Verify clear access and housekeeping before closing the shift / PTW.'];
      case 'fire': return ['Restore the missing / defective fire prevention and emergency control identified in the observation.','Provide suitable and accessible firefighting / detection equipment and keep emergency access clear.','Remove or segregate combustible materials from ignition sources and verify fire-watch / hot-work controls where applicable.'];
      case 'traffic': return ['Stop uncontrolled plant / vehicle movement until traffic controls are restored.','Provide physical pedestrian segregation, warning signage and competent banksman / flagman control.','Maintain an exclusion zone during reversing, loading, unloading and plant manoeuvring.'];
      case 'lifting_permit': return ['Suspend lifting until an approved lifting permit / PTW is issued and physically verified at the lifting location.','Verify the lifting plan, load weight / centre of gravity, lifting points, radius, ground bearing condition and crane capacity.','Confirm valid certification of the lifting equipment and accessories and provide competent lifting supervision / banksman.','Establish and maintain a hard-barricaded lifting exclusion zone before commencing the lift.'];
      case 'lifting': return ['Stop the lifting / precast operation until the lifting arrangement is reviewed by competent lifting supervision.','Verify the approved lifting plan, equipment capacity, certified accessories, load securing, exclusion zone and communication controls.','Keep all personnel clear of suspended loads and maintain the exclusion zone throughout the operation.'];
      case 'plant': return ['Stop and tag out the defective plant / equipment immediately.','Repair the identified defect through competent maintenance personnel.','Verify pre-use inspection, safety devices, visibility aids and applicable certification before returning the equipment to service.'];
      case 'ppe': return ['Stop the affected activity until the correct mandatory / task-specific PPE is provided and worn properly.','Replace damaged or unsuitable PPE before the worker returns to the task.','Require the responsible supervisor to verify PPE compliance at the work front.'];
      case 'welfare': return ['Provide / restore the specific missing welfare facility without delay.','Ensure adequate cold drinking water, cooling / ventilation, shade, sanitation and cleanliness as applicable to the noted deficiency.','Assign a responsible person to inspect and maintain the welfare facility during each shift.'];
      case 'msra': return ['Review and revise the MSRA / method statement to match the actual work sequence and site conditions.','Identify task-specific hazards and define clear engineering, administrative and emergency controls.','Brief the workforce and physically verify implementation of the revised controls before restart.'];
      case 'ptw': return ['Stop the activity until the required PTW is issued / revalidated.','Physically verify the work front, MSRA controls, access, isolation, supervision and emergency arrangements before authorisation.','Ensure the permit receiver and responsible supervisor understand and implement every permit condition.'];
      default:return ['Rectify the exact unsafe condition described above before continuing the affected activity.','Verify the completed corrective control at the work front before allowing work to resume.'];
    }
  }
  window.buildSpecificManualReport=function(text,selectedCategory='',area=''){
    const points=splitPoints(text); const at=location(area); const analysed=points.map(p=>({p,r:detectPoint(p)}));
    const descriptions=analysed.map(x=>describe(x.r.id,x.p,at));
    const corrective=analysed.flatMap(x=>actions(x.r.id,x.p));
    const primary=analysed[0]?.r||detectPoint(text);
    const cats=uniq(analysed.map(x=>x.r.cat));
    const roots=uniq(analysed.map(x=>x.r.root));
    const legal=uniq(analysed.flatMap(x=>x.r.legal));
    return {category:cats.length===1?cats[0]:(cats[0]||selectedCategory||'OSH Management During Construction Work'),root:roots.join(' / '),desc:bullets(descriptions),immediate:'',actions:numbers(corrective),legal};
  };
  window.previewManualInBoxes=function(card,force=false){
    const manual=card.querySelector('.manualComments')?.value.trim()||''; if(!manual)return;
    const area=card.querySelector('.areaPreview')?.textContent.replace(/^Area:\s*/,'')||'';
    const built=window.buildSpecificManualReport(manual,card.querySelector('.observationCategory')?.value||'',area);
    const cat=card.querySelector('.observationCategory'); if(typeof addOptionIfMissing==='function')addOptionIfMissing(cat,built.category); cat.value=built.category;
    const root=card.querySelector('.rootCause'); if(typeof addOptionIfMissing==='function')addOptionIfMissing(root,built.root); root.value=built.root;
    const desc=card.querySelector('.observationDescription'), act=card.querySelector('.preventiveAction');
    desc.value=built.desc; desc.dataset.smartGenerated='1'; act.value=built.actions; act.dataset.smartGenerated='1';
    card.querySelectorAll('.legalGrid input').forEach(x=>x.checked=built.legal.includes(x.value));
    if(typeof setStatus==='function')setStatus('Noor V13: specific deficiency, consequence and task-specific corrective actions generated.');
  };
  window.applyManualToObservationObject=function(o){
    const manual=clean(o.manualComments||o.desc); if(!manual)return o;
    const area=[o.package?`Package ${o.package}`:'',(typeof clusterText==='function'?clusterText(o.cluster):o.cluster),o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');
    const built=window.buildSpecificManualReport(manual,o.category,area);
    return {...o,category:built.category,root:built.root,desc:built.desc,immediate:'',actions:built.actions,legal:built.legal};
  };
  window.finaliseObservationByMode=o=>window.applyManualToObservationObject(o);
  window.createStandardFromManual=card=>window.previewManualInBoxes(card,true);
  window.applySmartBriefToCard=card=>window.previewManualInBoxes(card,true);
})();
