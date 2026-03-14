/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  exeter: {
    neighborhoods: ["Heavitree", "St Thomas", "Pennsylvania", "Pinhoe", "Alphington", "Countess Wear", "Polsloe", "Mount Pleasant"],
    landmarks: ["Exeter Cathedral", "the Royal Albert Memorial Museum", "Exeter Quay", "the Underground Passages", "Northernhay Gardens"],
    drainageInfo: "Exeter's historic drainage infrastructure dates back centuries, with the city centre's medieval streets and cathedral quarter sitting atop some of the oldest sewer systems in Devon. Victorian-era terraces in Heavitree and St Thomas feature ageing clay pipe networks, while the city's clay soils and proximity to the River Exe create unique challenges for drainage engineers across the area.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian terraces, Georgian townhouses, modern apartments, university accommodation, and commercial premises"
  },
  topsham: {
    neighborhoods: ["The Strand", "Monmouth Street", "Newcourt", "Clyst St George", "Ebford", "Exton"],
    landmarks: ["Topsham Quay", "the Goat Walk", "Bowling Green Marsh", "Topsham Museum", "the Exe Estuary"],
    drainageInfo: "Topsham's maritime heritage and estuary-side location bring distinctive drainage challenges. The town's mix of historic Dutch-influenced merchants' houses, traditional cottages, and modern developments each present different needs. Properties near the Strand and the quay are susceptible to tidal influences on drainage systems, while the town's ongoing popularity has placed increased demands on the local infrastructure.",
    responseTime: "typically within 30-45 minutes",
    propertyTypes: "historic merchants' houses, traditional cottages, modern family homes, and riverside properties"
  },
  exmouth: {
    neighborhoods: ["The Beacon", "Withycombe Raleigh", "Littleham", "Brixington", "Lympstone", "Maer Valley"],
    landmarks: ["Exmouth Beach", "Exmouth Marina", "A La Ronde", "Orcombe Point", "the Exe Estuary Trail"],
    drainageInfo: "Exmouth's position at the mouth of the River Exe means properties here face particular coastal and estuarine drainage challenges. The historic seafront has some of Devon's oldest domestic drainage, while newer housing developments in Brixington and Littleham have modern systems. The sandy soils near the coast and the proximity to the estuary add specific groundwater considerations.",
    responseTime: "typically within 40-60 minutes",
    propertyTypes: "Georgian seafront terraces, Victorian villas, modern housing estates, and coastal properties"
  },
  crediton: {
    neighborhoods: ["Town Centre", "Exhibition Way", "Lords Meadow", "Newcombes", "Sandford", "Shobrooke"],
    landmarks: ["the Church of the Holy Cross", "Crediton Town Square", "Newcombes Meadow", "Boniface Centre", "People's Park"],
    drainageInfo: "Crediton's market town heritage and surrounding Mid Devon countryside create varied drainage challenges. The town centre features older properties with clay pipe systems, while newer developments on the outskirts have modern infrastructure. The heavy clay soils of Mid Devon contribute to ground movement that can affect pipe stability, and some surrounding rural properties rely on private drainage and septic systems.",
    responseTime: "typically within 40-60 minutes",
    propertyTypes: "traditional town-centre properties, modern family homes, rural cottages, and agricultural buildings"
  },
  tiverton: {
    neighborhoods: ["Westexe", "Town Centre", "Tidcombe", "Halberton", "Sampford Peverell", "Willand"],
    landmarks: ["Tiverton Castle", "the Grand Western Canal", "Knightshayes Court", "Tiverton Pannier Market", "People's Park"],
    drainageInfo: "Tiverton sits at the confluence of the rivers Exe and Lowman, which influences local ground conditions and drainage patterns. Properties in low-lying areas near the rivers can experience raised groundwater during wet weather. The town's mix of historic buildings and modern estates creates varied drainage infrastructure, and the heavy clay soils of Mid Devon are common here.",
    responseTime: "typically within 50-70 minutes",
    propertyTypes: "historic town-centre properties, modern housing estates, riverside homes, and rural properties"
  },
  honiton: {
    neighborhoods: ["High Street", "Northcote", "Battishorne Way", "Glen Road", "Ottery St Mary", "Feniton"],
    landmarks: ["Honiton High Street", "Allhallows Museum", "the Beehive Centre", "Honiton Station", "Glen Goyle"],
    drainageInfo: "Honiton's attractive market town setting in East Devon features older properties along the famous High Street with Victorian-era drainage systems. The greensand and clay geology creates variable ground conditions that affect pipe stability. Some rural properties on the town's outskirts rely on private drainage and septic systems rather than mains sewerage.",
    responseTime: "typically within 50-70 minutes",
    propertyTypes: "period High Street properties, modern family homes, rural cottages, and commercial premises"
  },
  sidmouth: {
    neighborhoods: ["The Esplanade", "Sidford", "Sidbury", "Salcombe Regis", "Woolbrook", "Fortfield"],
    landmarks: ["Sidmouth Beach", "Connaught Gardens", "Jacob's Ladder Beach", "the Byes", "Norman Lockyer Observatory"],
    drainageInfo: "Sidmouth's Regency seaside character and Jurassic Coast location create specific drainage considerations. The coastal geology of red sandstone and clay layers can lead to varied soil conditions. Seafront properties may experience coastal water influences, while the town's many period properties retain original clay pipe systems requiring specialist knowledge.",
    responseTime: "typically within 50-70 minutes",
    propertyTypes: "Regency villas, Victorian terraces, modern apartments, seaside properties, and guesthouses"
  },
  dawlish: {
    neighborhoods: ["Town Centre", "Dawlish Warren", "Holcombe", "Starcross", "Cockwood", "Kenton"],
    landmarks: ["Dawlish Warren", "the Lawn", "Dawlish Water", "Coryton Cove", "Lea Mount"],
    drainageInfo: "Dawlish's coastal position and the Dawlish Water stream create specific drainage challenges. Properties near the seafront and the stream can experience seasonal flooding risk. The mixed geology of red sandstone and clay affects ground stability and pipe condition. The Victorian core retains much of its original drainage infrastructure.",
    responseTime: "typically within 40-60 minutes",
    propertyTypes: "Victorian seaside cottages, modern family homes, coastal properties, and holiday accommodation"
  },
  "newton-abbot": {
    neighborhoods: ["Town Centre", "Highweek", "Milber", "Kingsteignton", "Abbotskerswell", "Ogwell"],
    landmarks: ["Newton Abbot Racecourse", "Courtenay Park", "Decoy Country Park", "Newton Abbot Market", "River Teign"],
    drainageInfo: "Newton Abbot's position at the head of the Teign estuary means some areas are susceptible to fluvial flooding. The town has seen significant expansion, creating a mix of Victorian terraces, post-war housing, and modern estates with varied drainage infrastructure. The clay and alluvial soils of the Teign valley contribute to ground movement and pipe displacement.",
    responseTime: "typically within 40-60 minutes",
    propertyTypes: "Victorian terraces, post-war semi-detached homes, modern family housing, and commercial premises"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  exeter: {
    "blocked-drains": {
      intro: "Exeter's rich history means blocked drains can affect anything from a medieval property near the cathedral to a modern student flat in Pennsylvania. Our experienced engineers understand the unique drainage challenges facing properties across the city and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in busy household and restaurant kitchens", "Tree root intrusion from mature trees in Heavitree and St Thomas", "Debris accumulation in Victorian and Georgian clay pipes", "Wet wipe blockages in student accommodation near the university", "Foreign object obstructions in commercial premises"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near Exeter's tree-lined streets in Heavitree and Pennsylvania should consider annual drain inspections to catch root intrusion early."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Exeter, you need a fast response from engineers who know the local area. Whether you're in Heavitree, St Thomas, or Alphington, our drain unblocking teams are strategically positioned across the city to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in terraced properties", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Exeter's busy restaurants and cafes along Fore Street and the Quay area benefit from grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Exeter property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for Exeter's older properties with Victorian-era drainage.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from ground movement"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Exeter's older suburbs like Heavitree or St Thomas? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Exeter's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Exeter's hard water supply from South West Water contributes to scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Exeter emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the city. From student flats in Pennsylvania to businesses on the High Street, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing ground instability", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Exeter location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Exeter's mix of historic infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Ground movement-related damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Exeter's clay subsoil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs."
    }
  },
  topsham: {
    "blocked-drains": {
      intro: "Topsham's charming estuary-side setting includes a fascinating mix of historic merchants' houses and modern developments. From the waterfront properties along the Strand to traditional cottages on Monmouth Street, our engineers have the expertise to clear blocked drains in any property type across the area.",
      commonProblems: ["Sediment accumulation from estuary proximity", "Shared drainage issues in historic buildings", "Modern plastic pipe blockages in new developments", "Commercial kitchen waste in waterfront restaurants", "Surface water issues near the Exe estuary"],
      process: "Every Topsham blocked drain is unique, and we treat it that way. Our engineers assess the property type and drainage configuration before selecting the most effective clearing method, whether that's rodding, jetting, or mechanical cutting.",
      localTip: "Estuary-side properties in Topsham should ensure their drainage connects correctly to the main sewer, as some older buildings have complex private drainage arrangements."
    },
    "drain-unblocking": {
      intro: "From emergency callouts near Topsham Quay to routine unblocking on Monmouth Street, our Topsham drain unblocking service covers every eventuality. We understand the varied property stock across the area and bring the right equipment to handle Victorian clay pipes and modern plastic systems alike.",
      commonProblems: ["Hair and soap accumulation in bathroom drains", "Food waste blockages in kitchen sinks", "External gully blockages from garden debris", "Toilet blockages from inappropriate flushing", "Fat buildup in commercial premises"],
      process: "Our locally-based engineers carry comprehensive unblocking equipment including flexible rods, electromechanical machines, and water jetting units. We select the appropriate tool for each blockage type and clear your drains with minimal disruption.",
      localTip: "Topsham's older properties along the Strand often have deep external manholes. Regular clearing prevents serious blockages from developing."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a period property on the Strand or investigating drainage issues at a waterfront business, our CCTV drain surveys provide the answers you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions about your Topsham property.",
      commonProblems: ["Unknown pipe routes in older buildings", "Condition assessment for property purchases", "Investigation of recurring blockage causes", "Insurance claim documentation", "Planning for extensions or renovations"],
      process: "Our survey technicians access your drainage system through manholes or inspection chambers, then guide the camera through the entire pipe network. The real-time footage is recorded and later compiled into a comprehensive report for your records.",
      localTip: "Topsham waterfront properties often share complex drainage systems. A CCTV survey helps identify responsibility boundaries before issues arise."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the gold standard for drain cleaning in Topsham, equally effective on older clay pipes in traditional cottages and modern systems in new developments. Our specialist equipment removes years of accumulated deposits, restoring your drainage to optimal flow capacity.",
      commonProblems: ["Grease accumulation in restaurant kitchens", "Silt deposits from estuary proximity", "Scale deposits from water supply", "Root fragments after removal treatments", "General maintenance cleaning"],
      process: "We select the appropriate jetting nozzle and pressure setting for your pipe type and the deposits being removed. The jetting process works upstream from the blockage point, ensuring debris is flushed towards the sewer rather than further into your system.",
      localTip: "Topsham's thriving food scene along the waterfront means commercial premises should schedule regular jetting to prevent emergency callouts."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Topsham receive our immediate attention, with engineers ready to respond rapidly to properties from the Strand to Newcourt. Sewage backups, flooding, and overflowing drains are all handled swiftly and professionally.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding during heavy rain", "Manhole overflows affecting multiple properties", "Drain collapses causing ground instability", "Tidal influence on drainage during high water"],
      process: "Emergency calls are prioritised and dispatched to our nearest engineer. We provide estimated arrival times and keep you informed throughout. On arrival, we secure the area, diagnose the problem, and implement the fastest effective solution.",
      localTip: "Topsham properties near the estuary should have emergency drainage contacts readily available, particularly during high spring tides combined with heavy rainfall."
    },
    "drain-repairs": {
      intro: "Topsham's diverse building stock requires drainage repair expertise spanning centuries of construction. Our repair teams handle everything from relining clay pipes in historic merchants' houses to replacing damaged sections in modern developments.",
      commonProblems: ["Cracked clay pipes in period properties", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Tidal erosion effects on coastal-side drainage", "Damage from third-party excavations"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach. No-dig relining is ideal for accessible cracks and joints, while excavation may be necessary for collapsed sections. We always restore surfaces to their original condition.",
      localTip: "Topsham's estuary-side properties may have drainage affected by tidal influence. Ensure repairs include non-return valves where appropriate."
    }
  },
  exmouth: {
    "blocked-drains": {
      intro: "Exmouth's coastal position and mix of historic and modern properties create diverse drainage challenges. Our Exmouth blocked drain specialists understand how coastal proximity and estuary conditions affect drainage systems, from Georgian seafront terraces to modern estates in Brixington.",
      commonProblems: ["Sand infiltration from coastal proximity", "Root intrusion from mature garden trees", "Fat and grease from domestic kitchens", "Debris buildup in surface water drains", "Blockages in shared Victorian drainage"],
      process: "We assess your Exmouth property's position relative to the coast and estuary before selecting clearing methods. Coastal properties may require different approaches than those further inland. Our engineers are experienced with all Exmouth property types.",
      localTip: "Exmouth properties near the beach should ensure external drains have adequate gully pots to catch sand and debris before it enters the pipe system."
    },
    "drain-unblocking": {
      intro: "When drains block in Exmouth, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Withycombe Raleigh or an overflowing external drain in Littleham, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique.",
      localTip: "Exmouth's sandy coastal soil can allow debris to enter pipe joints more easily. Regular maintenance helps prevent gradual blockage buildup."
    },
    "cctv-drain-surveys": {
      intro: "Exmouth's varied property market, from Georgian seafront terraces to modern estates, means drainage systems vary significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Sand infiltration assessment", "Root ingress from garden vegetation", "Ground movement affecting joints", "Condition assessment for property transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any coastal-specific issues. The final report includes annotated footage, a condition summary, and maintenance recommendations.",
      localTip: "Purchasing a seafront property in Exmouth? A CCTV survey is essential — coastal conditions can accelerate pipe deterioration."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Exmouth's coastal drainage systems often need. From clearing sand deposits in traditional pipes to routine maintenance for newer systems, our jetting service restores optimal drainage performance across the area.",
      commonProblems: ["Sand and silt accumulation from coastal proximity", "Scale buildup from water supply", "Grease accumulation in residential drains", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage.",
      localTip: "Exmouth's coastal properties experience faster silt accumulation than inland areas. Consider jetting every 12 months to maintain optimal flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Exmouth receive rapid response from our local teams, day or night. From flooded gardens in Brixington to sewage issues near the seafront, our engineers are ready to tackle any emergency situation.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Storm damage to drainage systems", "Coastal flooding affecting drainage"],
      process: "Emergency calls trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Exmouth's coastal and riverside properties should have non-return valves fitted to prevent storm surge or high tides from affecting drainage."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Exmouth's coastal environment requires understanding the specific challenges of sandy soil and coastal proximity. Our repair specialists select methods and materials suited to these conditions, ensuring lasting results.",
      commonProblems: ["Cracked pipes from sand movement", "Root damage from garden vegetation", "Joint displacement in sandy soil", "Sand infiltration through damaged joints", "Age-related deterioration"],
      process: "We assess Exmouth drainage repairs with coastal conditions in mind. Materials are chosen for durability, and repair methods account for the local soil conditions.",
      localTip: "Exmouth's sandy soil conditions can make excavation straightforward, but pipe bedding must be done carefully to prevent future settlement."
    }
  },
  crediton: {
    "blocked-drains": {
      intro: "Crediton's blend of historic town-centre properties and modern developments creates varied drainage challenges. Our Crediton blocked drain specialists understand the differences between period properties near the Church of the Holy Cross and newer housing on the outskirts.",
      commonProblems: ["Root intrusion from mature garden trees and hedgerows", "Fat and grease buildup from household kitchens", "Debris accumulation in period clay pipes", "Surface water blockages from leaf litter", "Shared drainage issues in terraced housing"],
      process: "We assess each Crediton blockage considering the property type, pipe age, and drainage layout. Period properties need different handling than modern estates, and our engineers adapt their approach accordingly.",
      localTip: "Crediton's mature gardens and hedgerows pose significant root intrusion risks. Schedule annual CCTV inspections if you have large trees within 5 metres of drainage runs."
    },
    "drain-unblocking": {
      intro: "When drains block in Crediton, our local teams respond promptly with the right equipment for every property type. From period homes near the High Street to modern family homes on Exhibition Way, we clear blockages efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs in family homes", "External gulley obstructions from garden debris", "Utility room and laundry drain blockages", "Rural property drainage issues"],
      process: "Our engineers arrive equipped for the area's varied property types. We locate the blockage precisely, select the least disruptive clearing method, and restore full drainage flow.",
      localTip: "Crediton properties with gravel driveways should fit gulley guards to prevent stones entering surface water drains."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a period property near Crediton High Street or investigating drainage at a rural home, our CCTV surveys provide the detailed assessment you need.",
      commonProblems: ["Pre-purchase surveys for period properties", "Root ingress investigation in mature gardens", "Mapping drainage in rural properties", "Condition assessment of older pipe systems", "Planning investigation for extensions"],
      process: "We survey Crediton properties thoroughly, documenting all drainage routes. Reports are detailed and professional, suitable for property transactions and insurance purposes.",
      localTip: "Planning an extension on your Crediton home? A pre-build CCTV drain survey identifies any pipes that need protecting or redirecting before construction begins."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Crediton's period and modern drainage at peak performance. Our careful approach removes accumulated deposits from older clay pipes and clears root masses from garden-heavy properties.",
      commonProblems: ["Root mass accumulation from garden trees", "Scale deposits from water supply", "Grease and fat buildup over time", "Silt and garden debris in surface water drains", "General maintenance needs"],
      process: "We adjust jetting pressure and nozzle selection to suit each pipe's material and age. Older properties receive gentler treatment that effectively clears deposits without risking damage.",
      localTip: "Crediton properties with large gardens should combine annual jetting with root inhibitor treatment to keep drainage clear year-round."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Crediton demand swift, professional response. Whether you're facing sewage backup in a period property or flooding at a family home, our emergency teams are available around the clock.",
      commonProblems: ["Sewage backing up into ground floors", "Garden flooding from overwhelmed drainage", "Overflowing inspection chambers", "Drain collapse beneath driveways", "Storm water overwhelming older drainage"],
      process: "Emergency calls from Crediton are prioritised and dispatched immediately. Our engineers understand the area's property types and act quickly to contain damage.",
      localTip: "Crediton properties in low-lying areas near the River Creedy may experience increased surface water runoff during heavy rain. Ensure gullies and downpipe connections are clear."
    },
    "drain-repairs": {
      intro: "Repairing drainage beneath Crediton's varied properties requires specialist care. Our repair teams work with all property ages, from restoring Victorian clay pipes in period homes to fixing modern systems in newer developments.",
      commonProblems: ["Root damage to clay pipe joints", "Cracked pipes beneath driveways", "Displaced joints from ground movement", "Age-related deterioration of period drainage", "Damage from extension projects"],
      process: "We investigate thoroughly and recommend repairs suited to your property. No-dig relining preserves mature gardens and landscaping, while excavation is reserved for severe damage.",
      localTip: "Crediton's heavy clay soil causes seasonal ground movement. Flexible repair solutions like pipe relining accommodate this better than rigid replacements."
    }
  },
  tiverton: {
    "blocked-drains": {
      intro: "Tiverton's riverside setting and mix of historic and modern properties create diverse drainage challenges. Our Tiverton blocked drain service combines local knowledge with modern clearing techniques, tackling blockages in properties from the town centre to Westexe.",
      commonProblems: ["Debris from riverside vegetation", "Root intrusion from maturing trees", "Fat accumulation in domestic drains", "Debris in shared drainage serving housing clusters", "Surface water blockages from leaf litter"],
      process: "We assess your specific situation, considering property age, pipe material, and blockage characteristics before selecting the most effective clearing method.",
      localTip: "Tiverton properties near the River Exe and Grand Western Canal should have drainage inspected after periods of heavy rainfall when debris can accumulate."
    },
    "drain-unblocking": {
      intro: "When Tiverton drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From Westexe to surrounding villages, we handle residential and commercial drain unblocking efficiently.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages", "Commercial drainage issues"],
      process: "Our engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly.",
      localTip: "Tiverton's riverside location means drains can be affected by high water levels. If multiple properties are affected simultaneously, the issue may be in shared infrastructure."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Tiverton property's drainage is essential, particularly for older properties near the town centre. Our CCTV surveys reveal pipe condition, identifying deterioration that surface inspection cannot detect.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from established trees", "Pipe condition assessment for purchases", "Joint problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition.",
      localTip: "Tiverton properties built before 1960 are likely to have clay drainage systems that benefit from periodic CCTV assessment to catch problems early."
    },
    "drain-jetting": {
      intro: "Tiverton's varied drainage benefits from regular high-pressure jetting maintenance. Our specialist equipment removes deposits that accumulate over time, maintaining optimal flow in domestic and commercial systems.",
      commonProblems: ["Scale buildup in ageing pipes", "Grease accumulation", "Silt and debris deposits", "Root fragment removal", "General maintenance needs"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, protecting pipe integrity.",
      localTip: "Tiverton businesses near the Pannier Market should consider scheduled jetting as part of their maintenance regime, particularly food preparation premises."
    },
    "emergency-drain-services": {
      intro: "Tiverton drainage emergencies receive immediate attention from our response teams. Whether you're facing flooding near the River Exe or sewage backup in Westexe, we're available around the clock.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes", "River-related drainage emergencies", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately. We keep you informed of arrival times and tackle the emergency with appropriate urgency.",
      localTip: "Tiverton's riverside location means river levels can rise rapidly after sustained rainfall on Exmoor. Keep emergency drain contacts readily available."
    },
    "drain-repairs": {
      intro: "Tiverton's property stock ranges from historic buildings to modern homes, and our drain repair expertise matches this diversity. We provide repair solutions appropriate to each property type.",
      commonProblems: ["Cracked pipes from ground movement", "Deteriorating clay pipe joints", "Root damage from established trees", "Ground settling causing pipe displacement", "Age-related material degradation"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Tiverton's clay soils and proximity to rivers mean ground conditions can vary. Always commission a proper survey before planning drainage repair work."
    }
  },
  honiton: {
    "blocked-drains": {
      intro: "Honiton's historic High Street properties and surrounding residential areas present a range of drainage challenges. Our Honiton blocked drain specialists understand the differences between period buildings and modern developments in the area.",
      commonProblems: ["Root intrusion from established garden trees", "Fat and grease from household kitchens", "Debris in older clay pipes", "Surface water blockages", "Shared drainage issues in terraced properties"],
      process: "We assess each blockage considering property type, drainage age, and local conditions. Period properties need different handling than modern estates.",
      localTip: "Honiton's famous High Street properties often have rear drainage running through neighbouring land. Know your drainage easements to avoid disputes."
    },
    "drain-unblocking": {
      intro: "When Honiton drains need unblocking, our teams respond with the right equipment for every property type. From High Street properties to modern family homes, we clear blockages efficiently.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Rural property drainage issues"],
      process: "Our engineers arrive with comprehensive equipment. We assess the blockage and apply the most effective clearing technique.",
      localTip: "Honiton's surrounding rural properties may have longer drainage runs. Regular maintenance prevents major blockages from developing."
    },
    "cctv-drain-surveys": {
      intro: "Honiton's varied property market makes drainage assessment increasingly important. Our CCTV surveys reveal exactly what's inside your pipes, essential for property transactions and investigating persistent problems.",
      commonProblems: ["Condition assessment for property purchases", "Root ingress investigation", "Drainage route mapping", "Period feature documentation", "Insurance requirements"],
      process: "We survey your entire drainage system, documenting condition and identifying defects. Reports are comprehensive and professional.",
      localTip: "Purchasing a period property on Honiton High Street? A CCTV survey can identify older drainage features that may need specialist attention."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Honiton's varied drainage at peak performance. Our careful approach removes accumulated deposits from older clay pipes and keeps modern systems flowing freely.",
      commonProblems: ["Scale from water supply", "Grease accumulation", "Root mass removal", "Silt and debris clearing", "Pre-survey preparation"],
      process: "We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage.",
      localTip: "Honiton's greensand geology means some properties experience mineral-rich groundwater that can deposit scale in drainage. Regular jetting prevents flow restriction."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Honiton receive our immediate attention. Whether you're facing sewage backup on the High Street or flooding in a residential area, we respond with urgency.",
      commonProblems: ["Sewage backing up into properties", "Garden flooding", "Manhole overflows", "Drain collapse", "Persistent foul odours"],
      process: "Emergency response is swift and professional. We understand the area and act to minimise damage while resolving the problem.",
      localTip: "Honiton properties near the River Otter corridor should maintain clear surface water drains year-round."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Honiton's character properties requires specialist knowledge. Our team works with all property ages, selecting methods that preserve your home's integrity while delivering lasting results.",
      commonProblems: ["Aged clay pipe cracking", "Root damage to joints", "Ground movement effects", "Historical modification issues", "Rural drainage system problems"],
      process: "We investigate thoroughly, recommending repairs that suit your property's age and construction. No-dig techniques are often ideal for period properties.",
      localTip: "Honiton's variable geology means ground conditions can change within short distances. Repair methods should account for local soil types."
    }
  },
  sidmouth: {
    "blocked-drains": {
      intro: "Sidmouth's elegant Regency character and Jurassic Coast setting create specific drainage considerations. Our Sidmouth blocked drain specialists understand how coastal proximity and the local geology affect drainage systems across the town.",
      commonProblems: ["Scale and mineral deposits from local geology", "Root intrusion from established gardens", "Fat and grease from domestic and commercial kitchens", "Debris in period clay pipes", "Coastal influence on drainage performance"],
      process: "We assess your property's position and drainage layout before selecting clearing methods. Coastal properties may require different approaches than those further inland.",
      localTip: "Sidmouth's red sandstone geology can contribute to mineral deposits in drainage. Properties on higher ground may experience different drainage characteristics than those near the seafront."
    },
    "drain-unblocking": {
      intro: "When drains block in Sidmouth, our teams respond with expertise suited to the town's mix of Regency villas and modern properties. We handle everything from simple kitchen blockages to complex shared drainage issues.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Guesthouse and B&B drainage issues", "Commercial premises blockages"],
      process: "Our engineers arrive with comprehensive equipment for all drain types. We assess and clear blockages efficiently while respecting the character of period properties.",
      localTip: "Sidmouth's busy tourism season puts extra demand on drainage in guesthouses and hospitality venues. Pre-season jetting helps prevent problems during peak periods."
    },
    "cctv-drain-surveys": {
      intro: "Sidmouth's premium property market makes thorough drainage assessment essential. Our CCTV surveys provide detailed condition reports, revealing the true state of underground drainage in period and modern properties alike.",
      commonProblems: ["Pre-purchase condition assessment", "Root ingress investigation", "Drainage route mapping", "Period feature documentation", "Coastal erosion effects on drainage"],
      process: "We survey properties with appreciation for their character and value. Reports are comprehensive and suitable for property transactions.",
      localTip: "Sidmouth home sellers can benefit from proactive drainage surveys, addressing issues before they affect property negotiations."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Sidmouth's period and modern drainage at peak performance. Our careful approach removes deposits from Regency-era pipes while keeping modern systems in optimal condition.",
      commonProblems: ["Mineral scale from local geology", "Grease accumulation", "Root fragment removal", "Silt and coastal debris", "Pre-survey preparation"],
      process: "We adjust jetting approaches to suit pipe age and condition. Period drainage receives measured treatment that clears effectively without risk.",
      localTip: "Sidmouth's coastal location means salt and mineral deposits can accumulate faster than inland areas. Consider more frequent maintenance jetting."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Sidmouth receive our immediate attention. From flooded seafront properties to sewage issues in residential areas, our engineers respond rapidly.",
      commonProblems: ["Sewage backflow into properties", "Coastal flooding affecting drainage", "Overflowing inspection chambers", "Collapsed drains", "Storm damage to drainage"],
      process: "Emergency calls are prioritised and dispatched immediately. We arrive prepared and act to contain damage while resolving the underlying problem.",
      localTip: "Sidmouth's coastal properties should have non-return valves fitted to prevent storm surge from affecting drainage systems."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Sidmouth's Regency properties and modern homes requires sensitivity and expertise. Our repair specialists select methods suited to each property's age and coastal location.",
      commonProblems: ["Cracked period pipes", "Root damage from established gardens", "Joint displacement from ground movement", "Coastal erosion effects", "Age-related deterioration"],
      process: "We investigate thoroughly and recommend repairs suited to your property's character. No-dig relining preserves gardens and period features.",
      localTip: "Sidmouth's red sandstone and clay geology can cause differential ground movement. Flexible repair solutions accommodate this better than rigid materials."
    }
  },
  dawlish: {
    "blocked-drains": {
      intro: "Dawlish's charming seaside setting brings specific drainage considerations. From Victorian cottages near the Lawn to modern homes in the surrounding area, our Dawlish blocked drain specialists bring local knowledge to every callout.",
      commonProblems: ["Sand and silt infiltration from coastal proximity", "Root intrusion from garden trees", "Fat and grease from domestic kitchens", "Debris in Victorian clay pipes", "Surface water issues near the Dawlish Water"],
      process: "We assess your property's position relative to the coast and the Dawlish Water before selecting clearing methods. Our engineers are experienced with all property types in the area.",
      localTip: "Dawlish properties near the Dawlish Water stream should have drainage checked more frequently, as seasonal flooding can deposit debris in pipe systems."
    },
    "drain-unblocking": {
      intro: "When drains block in Dawlish, our teams respond quickly. Whether you're dealing with a kitchen blockage in Holcombe or an overflowing drain near the seafront, we resolve the problem efficiently.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions from sand and leaves", "Toilet blockages", "Holiday accommodation drainage issues"],
      process: "Our engineers arrive with equipment suitable for all drain types. We assess the blockage and apply the most effective clearing technique.",
      localTip: "Dawlish's holiday accommodation properties should consider pre-season drainage checks to ensure systems cope with increased occupancy."
    },
    "cctv-drain-surveys": {
      intro: "Dawlish's varied property market benefits from thorough drainage assessment. Our CCTV surveys reveal pipe condition, essential for property purchases and investigating recurring problems in this coastal setting.",
      commonProblems: ["Sand infiltration assessment", "Age-related pipe deterioration", "Root ingress from coastal vegetation", "Drainage route mapping", "Condition assessment for purchases"],
      process: "We survey your entire drainage system, noting coastal-specific issues. Reports include annotated footage and maintenance recommendations.",
      localTip: "Purchasing a Victorian property near the Dawlish seafront? A CCTV survey is essential — coastal conditions accelerate pipe deterioration."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Dawlish's coastal drainage systems often need. Our service removes sand, silt, and scale deposits effectively.",
      commonProblems: ["Sand accumulation from coastal proximity", "Scale buildup", "Grease accumulation", "Root fragment removal", "General maintenance cleaning"],
      process: "We select equipment appropriate for your pipe material and coastal conditions. Specific nozzle selection ensures effective removal of sand and silt.",
      localTip: "Dawlish's coastal properties experience faster silt accumulation. Consider jetting every 12 months rather than the usual 18."
    },
    "emergency-drain-services": {
      intro: "Dawlish drainage emergencies receive rapid response from our teams. From flooding near the Dawlish Water to sewage issues in residential areas, we're available around the clock.",
      commonProblems: ["Coastal flooding affecting drainage", "Sewage backflow", "Overflowing inspection chambers", "Collapsed drains in sandy soil", "Storm damage to drainage"],
      process: "Emergency calls trigger immediate dispatch. We arrive prepared for coastal conditions and act to contain damage quickly.",
      localTip: "Dawlish properties near the seafront and the Dawlish Water should have non-return valves to prevent flooding from overwhelming drainage systems."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Dawlish's coastal environment requires understanding the specific challenges of sandy soil and coastal proximity. Our specialists select methods and materials suited to these conditions.",
      commonProblems: ["Cracked pipes from sand movement", "Root damage", "Joint displacement in sandy soil", "Sand infiltration through damaged joints", "Coastal erosion effects"],
      process: "We assess repairs with coastal conditions in mind. Materials are chosen for durability in seaside environments, and bedding is done carefully to prevent settlement.",
      localTip: "Dawlish's sandy soil can make excavation straightforward, but pipe bedding must prevent future settlement."
    }
  },
  "newton-abbot": {
    "blocked-drains": {
      intro: "Newton Abbot's busy market town setting and proximity to the River Teign create varied drainage challenges. From Victorian terraces near the town centre to modern estates in surrounding areas, our specialists bring local expertise to every callout.",
      commonProblems: ["Root intrusion from established trees", "Fat and grease buildup", "Debris in older drainage systems", "Surface water blockages from leaf litter", "Shared drainage issues in terraced housing"],
      process: "We assess each blockage considering property type, drainage age, and Newton Abbot's specific environmental factors before selecting our clearing method.",
      localTip: "Newton Abbot properties near the River Teign and River Lemon should have drainage inspected regularly, as riverside conditions affect pipe integrity."
    },
    "drain-unblocking": {
      intro: "When Newton Abbot drains need unblocking, our local teams cover the entire area from the town centre to Kingsteignton and Highweek. We handle everything from simple kitchen blockages to complex shared drainage issues.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Interceptor trap blockages in older properties", "Commercial drainage problems"],
      process: "Our engineers arrive with comprehensive unblocking tools. We identify the obstruction quickly and clear it completely, testing flow restoration before finishing.",
      localTip: "Newton Abbot's terraced streets near the town centre often share rear drainage. If neighbours are also experiencing slow drains, the blockage is likely in the shared section."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Newton Abbot property's drainage is essential for effective maintenance. Our CCTV surveys provide detailed assessments, particularly valuable for the area's older properties and newer developments where drainage history may vary.",
      commonProblems: ["Mapping drainage in older properties", "Pre-purchase surveys", "Root ingress from mature vegetation", "Investigating recurring blockages", "Assessment near river flood zones"],
      process: "We survey methodically, recording condition and mapping routes. This is especially important for properties near rivers where ground conditions can affect drainage.",
      localTip: "Buying a property near Newton Abbot's rivers? Always commission a full CCTV drain survey — flood-zone properties may have drainage issues from past water events."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Newton Abbot's varied drainage systems. Our specialist equipment clears the silt, scale, and debris that accumulate in local drainage.",
      commonProblems: ["Silt and sediment from nearby rivers", "Scale accumulation", "Grease buildup", "Root fragments requiring clearance", "Pre-survey cleaning"],
      process: "We match jetting equipment to pipe types and conditions. Treatment is adjusted to suit each property's drainage infrastructure.",
      localTip: "Newton Abbot's riverside properties experience higher silt levels. Regular jetting prevents gradual flow reduction."
    },
    "emergency-drain-services": {
      intro: "Newton Abbot drainage emergencies receive rapid response from our local teams. Whether you're dealing with flooding near the River Teign or sewage backup in Highweek, our engineers are available around the clock.",
      commonProblems: ["Surface water flooding during heavy rainfall", "Sewage backing up into ground floors", "Manhole overflows", "Drain collapses after ground saturation", "River-related drainage emergencies"],
      process: "Emergency calls receive immediate dispatch. We provide realistic arrival times and come prepared with pumping equipment and emergency repair materials.",
      localTip: "Newton Abbot properties near the rivers should maintain clear surface water drains year-round, as river levels can rise rapidly after sustained rainfall on Dartmoor."
    },
    "drain-repairs": {
      intro: "Newton Abbot's drainage spans from Victorian systems to modern infrastructure, and our repair teams work confidently with all types. We select repair methods suited to each property's age and location.",
      commonProblems: ["Cracked pipes from ground movement", "Joint displacement from alluvial soils", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Flood damage to drainage systems"],
      process: "We investigate thoroughly before recommending repairs. Our approach accounts for the area's terrain and ground conditions.",
      localTip: "Newton Abbot's alluvial soils near the rivers can cause ground movement. Ensure your repair contractor checks ground stability before undertaking drainage work."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with South West Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and South West Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Exeter and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Exeter and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Exeter and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Exeter and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
