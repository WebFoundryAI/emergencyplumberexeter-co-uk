/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  exeter: {
    landmarks: [
      "Exeter Cathedral",
      "Royal Albert Memorial Museum",
      "Exeter Quay",
      "Underground Passages",
      "Northernhay Gardens",
      "Rougemont Castle",
      "Princesshay Shopping Centre",
      "Guildhall Shopping Centre",
      "Exeter Phoenix",
      "University of Exeter",
      "St Nicholas Priory",
      "Custom House",
      "Heavitree",
      "St Thomas",
      "Pennsylvania",
      "Pinhoe",
      "Alphington",
      "Countess Wear",
      "Topsham Road",
      "Cowley Bridge",
      "Polsloe",
      "Mount Pleasant"
    ],
    drainageProfile: `Exeter's drainage infrastructure reflects the city's long history, from its Roman origins through to modern expansion. The city centre, built around the medieval cathedral quarter, has some of the oldest sewer systems in Devon, with Victorian-era brick sewers still serving many properties near the High Street and Fore Street.\n\nThe city's location on the River Exe and the Exe estuary creates unique drainage challenges. Properties in low-lying areas such as Countess Wear, St Thomas, and the Quay area can be susceptible to groundwater infiltration and tidal influence on drainage systems. The clay soils common across much of Exeter contribute to ground movement that can displace pipe joints over time.\n\nNewer developments in areas like Cranbrook and Pinhoe feature modern plastic drainage systems, while the university campus and surrounding student accommodation in Pennsylvania and St David's present their own maintenance demands due to high occupancy rates. South West Water manages the public sewer network, but private drainage within property boundaries remains the homeowner's responsibility.`,
    localFAQs: [
      {
        question: "What are common drainage problems in Exeter?",
        answer: "Exeter properties commonly experience blockages from fat and grease buildup, tree root ingress (particularly from mature trees near the cathedral quarter and Heavitree), and displaced joints in older clay pipes. Properties near the River Exe can also experience groundwater infiltration during wet weather."
      },
      {
        question: "How quickly can you reach central Exeter?",
        answer: "Our engineers are based locally and can typically reach central Exeter within 30 to 45 minutes for emergency callouts. For properties in the wider Exeter area, response times are usually within 60 to 90 minutes."
      },
      {
        question: "Do you work on Victorian drainage in Exeter?",
        answer: "Yes, many Exeter properties have Victorian-era drainage systems including clay pipes and brick sewers. Our engineers have extensive experience working with older drainage infrastructure and carry specialist equipment suited to period properties."
      },
      {
        question: "Who is responsible for blocked drains in Exeter?",
        answer: "You are responsible for private drains within your property boundary. South West Water is responsible for public sewers. If you are unsure whether a blockage is in your private drainage or the public network, we can investigate and advise you."
      }
    ],
    caseStudy: "A homeowner near Exeter Cathedral contacted us after noticing slow drainage across multiple fixtures and a damp patch in the garden. Our CCTV survey revealed tree root ingress at a pipe joint approximately four metres from the property. The roots from a mature lime tree had penetrated the clay pipe and created a partial blockage. We cleared the roots using high-pressure jetting and installed a resin liner to seal the joint and prevent regrowth. The repair was completed in a single visit with no excavation required."
  },

  topsham: {
    landmarks: [
      "Topsham Quay",
      "Topsham Museum",
      "The Strand",
      "Bowling Green Marsh",
      "Goat Walk",
      "Ferry Road",
      "Topsham Lock",
      "Exe Estuary",
      "Darts Farm",
      "Topsham Rugby Club",
      "Monmouth Street",
      "High Street Topsham"
    ],
    drainageProfile: `Topsham's maritime heritage and estuary-side location bring distinctive drainage challenges. The town's mix of historic Dutch-influenced merchants' houses, traditional cottages, and modern developments each present different drainage needs. Properties along the Strand and near the quay are susceptible to tidal influences on drainage systems.\n\nThe area's proximity to the Exe estuary means groundwater levels can fluctuate significantly, affecting older drainage systems. Many properties in central Topsham have clay pipe drainage systems dating back over a century. The town's ongoing popularity as a residential area has led to increased demands on the local drainage infrastructure.`,
    localFAQs: [
      {
        question: "Does the estuary affect drainage in Topsham?",
        answer: "Properties near the Exe estuary in Topsham can experience tidal influence on their drainage, particularly during high spring tides combined with heavy rainfall. We can assess whether tidal backflow is affecting your drainage and recommend appropriate solutions such as non-return valves."
      },
      {
        question: "How quickly can you get to Topsham?",
        answer: "Topsham is just a few miles from our Exeter base. We can typically reach Topsham within 20 to 40 minutes for emergency callouts."
      },
      {
        question: "Do you handle drainage for period properties in Topsham?",
        answer: "Yes, Topsham has many historic properties with older drainage systems. Our engineers are experienced with clay pipe systems, lime mortar joints, and the particular challenges of working in heritage-sensitive areas."
      }
    ],
    caseStudy: "A restaurant on Topsham's waterfront called us after recurring drain blockages were affecting their kitchen operations. Our CCTV investigation revealed heavy grease accumulation in the drain run combined with a partially collapsed section of clay pipe near the building's footprint. We cleared the blockage with high-pressure jetting and relined the damaged section, restoring full drainage flow without any disruption to the restaurant's trading."
  },

  exmouth: {
    landmarks: [
      "Exmouth Beach",
      "Exmouth Marina",
      "A La Ronde",
      "The Beacon",
      "Orcombe Point",
      "Exmouth Pavilion",
      "The Strand Gardens",
      "Maer Valley",
      "Lympstone",
      "Withycombe Raleigh",
      "Littleham",
      "Brixington"
    ],
    drainageProfile: `Exmouth, Devon's oldest seaside resort, sits at the mouth of the River Exe and features a varied property landscape from Georgian terraces near the seafront to modern estates in Brixington and Littleham. The coastal location and sandy soils create specific drainage considerations for property owners.\n\nSeaside properties can experience salt water infiltration and coastal erosion effects on underground drainage, while properties on higher ground may have different soil conditions affecting pipe stability. The town's growth in recent decades has expanded the drainage network significantly, with some areas featuring modern systems alongside much older infrastructure serving the original town centre.`,
    localFAQs: [
      {
        question: "Does coastal proximity affect drains in Exmouth?",
        answer: "Coastal properties in Exmouth can experience salt water influence on their drainage, particularly during storm surges. Sand infiltration is also common in some areas. We can assess your drainage and recommend solutions suited to coastal conditions."
      },
      {
        question: "How quickly can you reach Exmouth?",
        answer: "We can typically reach Exmouth within 30 to 50 minutes for emergency callouts from our Exeter base, depending on traffic conditions on the A376."
      }
    ],
    caseStudy: "A homeowner in Exmouth's seafront area contacted us about persistent slow drainage and damp patches in the garden. Our CCTV survey revealed sand infiltration through displaced joints in the clay pipe run, combined with root ingress from a nearby hedge. We jetted the line clean, sealed the joints with resin lining, and restored full drainage capacity in a single visit."
  },

  crediton: {
    landmarks: [
      "Church of the Holy Cross",
      "Crediton Town Square",
      "Newcombes Meadow",
      "Crediton Station",
      "Boniface Centre",
      "Crediton High Street",
      "Exhibition Way",
      "Lords Meadow",
      "Crediton Golf Club",
      "People's Park"
    ],
    drainageProfile: `Crediton, a historic market town and birthplace of Saint Boniface, sits in the fertile Creedy valley northwest of Exeter. The town's mix of older properties in the town centre and newer housing on the outskirts creates a varied drainage landscape.\n\nThe heavy clay soils typical of Mid Devon contribute to ground movement and can cause pipe displacement over time. Older properties near the High Street and around the Church of the Holy Cross often have clay pipe drainage systems that benefit from regular inspection and maintenance. The rural surroundings mean some properties rely on private drainage systems and septic tanks rather than mains connections.`,
    localFAQs: [
      {
        question: "Do you service rural properties near Crediton?",
        answer: "Yes, we cover rural properties surrounding Crediton including those with private drainage systems, septic tanks, and soakaways. Our engineers carry equipment suitable for all types of drainage infrastructure."
      },
      {
        question: "How quickly can you reach Crediton?",
        answer: "Crediton is approximately 20 minutes from Exeter via the A377. We can typically reach Crediton within 30 to 50 minutes for emergency callouts."
      }
    ],
    caseStudy: "A period property near Crediton High Street had been experiencing recurring blockages every few months. Our CCTV survey revealed a section of clay pipe that had sagged due to ground movement in the clay soil, creating a low point where debris would accumulate. We excavated and replaced the affected section with modern plastic pipe, properly bedded to prevent future settlement. The homeowner has had no further issues."
  },

  tiverton: {
    landmarks: [
      "Tiverton Castle",
      "Tiverton Museum",
      "Grand Western Canal",
      "Knightshayes Court",
      "Tiverton Pannier Market",
      "People's Park Tiverton",
      "Tiverton Golf Club",
      "Bampton Street",
      "Westexe",
      "Blundells School"
    ],
    drainageProfile: `Tiverton, a market town on the River Exe in Mid Devon, has a mix of historic properties near the castle and town centre alongside extensive modern residential development. The town sits at the confluence of the rivers Exe and Lowman, which influences local ground conditions and drainage patterns.\n\nProperties in low-lying areas near the rivers can experience raised groundwater levels during wet weather, while the hilly terrain of surrounding residential areas creates different drainage gradients and flow characteristics. The heavy clay soils of Mid Devon are common here and contribute to the challenges of maintaining stable underground drainage.`,
    localFAQs: [
      {
        question: "Does river flooding affect drains in Tiverton?",
        answer: "Properties near the River Exe and River Lowman in Tiverton can experience drainage issues during periods of high river levels. We can install non-return valves and other flood-prevention measures to protect your property's drainage system."
      },
      {
        question: "How quickly can you reach Tiverton?",
        answer: "We can typically reach Tiverton within 40 to 60 minutes for emergency callouts, travelling via the A396 from Exeter."
      }
    ],
    caseStudy: "A commercial property near Tiverton Pannier Market called us about sewage backing up through an inspection chamber. Our investigation revealed a collapsed section of Victorian clay pipe beneath the car park. We carried out an emergency clearance to restore flow, then returned to excavate and replace the damaged section with modern materials, including a new inspection chamber for easier future maintenance."
  },

  honiton: {
    landmarks: [
      "Honiton High Street",
      "Allhallows Museum",
      "Honiton Lace",
      "The Beehive",
      "Glen Goyle",
      "Honiton Station",
      "Honiton Golf Club",
      "Combe Garden Centre",
      "St Paul's Church",
      "Honiton Community College"
    ],
    drainageProfile: `Honiton, an attractive market town in East Devon, is best known for its long High Street and historic lace-making heritage. The town's drainage infrastructure reflects its age, with many properties in the town centre served by clay pipe systems that date back to the Victorian era.\n\nThe greensand and clay geology of the Honiton area creates variable ground conditions that can affect pipe stability. Properties on the valley floor may experience different drainage challenges to those on the surrounding hillsides. Some rural properties on the town's outskirts rely on private drainage and septic systems rather than mains sewerage.`,
    localFAQs: [
      {
        question: "Do you cover properties outside Honiton town centre?",
        answer: "Yes, we cover Honiton and the surrounding rural area, including properties with private drainage, septic tanks, and treatment plants. Our engineers carry the equipment needed for all types of drainage system."
      },
      {
        question: "How quickly can you reach Honiton?",
        answer: "Honiton is approximately 25 to 30 minutes from Exeter via the A30. We can typically reach Honiton within 40 to 60 minutes for emergency callouts."
      }
    ],
    caseStudy: "A homeowner on Honiton High Street contacted us about a blocked external drain that was causing water to pool in their garden. Our CCTV survey revealed a build-up of silt and debris in a clay pipe run, combined with root ingress from a nearby shrub. We cleared the blockage with high-pressure jetting, cut back the roots, and recommended a root barrier to prevent future problems."
  },

  sidmouth: {
    landmarks: [
      "Sidmouth Beach",
      "Connaught Gardens",
      "Jacob's Ladder Beach",
      "Sidmouth Folk Festival",
      "The Esplanade",
      "Byes Riverside Walk",
      "Norman Lockyer Observatory",
      "Sidmouth Museum",
      "Market Square",
      "Sidford"
    ],
    drainageProfile: `Sidmouth, an elegant Regency seaside town on Devon's Jurassic Coast, features a distinctive mix of period properties and modern developments. The town's location between dramatic red sandstone cliffs creates unique ground conditions that affect drainage systems.\n\nThe coastal geology, including layers of sandstone and clay, can lead to varied soil conditions within a small area. Seafront and lower-town properties may experience coastal water influences on drainage, while properties on higher ground deal with different drainage gradients. Many of Sidmouth's older properties retain original clay pipe drainage systems that require specialist maintenance knowledge.`,
    localFAQs: [
      {
        question: "Does the coastal location affect drainage in Sidmouth?",
        answer: "Sidmouth's coastal position and the local geology can influence drainage behaviour, particularly during storm conditions. We assess each property individually and recommend solutions suited to the local conditions, including non-return valves for properties susceptible to tidal or storm influence."
      },
      {
        question: "How quickly can you reach Sidmouth?",
        answer: "We can typically reach Sidmouth within 40 to 60 minutes for emergency callouts from our Exeter base."
      }
    ],
    caseStudy: "A Regency-era guesthouse near Sidmouth's Esplanade called us about recurring slow drainage affecting multiple rooms. Our CCTV survey found calcite deposits narrowing the cast iron waste pipes, reducing flow capacity. We used descaling equipment and high-pressure jetting to restore the pipes to near-original diameter, avoiding the need to replace the original pipework."
  },

  dawlish: {
    landmarks: [
      "Dawlish Warren",
      "The Lawn",
      "Dawlish Black Swans",
      "Coryton Cove",
      "Dawlish Water",
      "Lea Mount",
      "Dawlish Station",
      "Boat Cove",
      "Holcombe Village",
      "Dawlish Countryside Park"
    ],
    drainageProfile: `Dawlish, a charming seaside town on the South Devon coast, is famous for its black swans and the iconic railway line running along the sea wall. The town's position along the coast and the Dawlish Water stream creates specific drainage considerations.\n\nCoastal properties and those near the Dawlish Water can experience seasonal flooding risk and groundwater fluctuations. The mixed geology of red sandstone and clay affects ground stability and pipe condition. The town's Victorian core retains much of its original drainage infrastructure, while newer developments in the surrounding areas feature modern systems.`,
    localFAQs: [
      {
        question: "Can coastal flooding affect drainage in Dawlish?",
        answer: "Dawlish properties near the seafront and the Dawlish Water are potentially susceptible to coastal and fluvial flooding, which can overwhelm drainage systems. We can install flood protection measures and non-return valves to help protect your property."
      },
      {
        question: "How quickly can you reach Dawlish?",
        answer: "We can typically reach Dawlish within 30 to 50 minutes for emergency callouts from our Exeter base."
      }
    ],
    caseStudy: "A property near the Dawlish Water stream experienced repeated drain flooding during heavy rainfall. Our investigation revealed that the property's drainage was connected to a combined system that could not cope with storm water volume. We separated the surface water and foul drainage, installed a non-return valve on the foul connection, and directed rainwater to a new soakaway. The property has remained dry through subsequent storms."
  },

  "newton-abbot": {
    landmarks: [
      "Newton Abbot Racecourse",
      "Tucker's Maltings",
      "Courtenay Park",
      "Newton Abbot Market",
      "Decoy Country Park",
      "Bradley Manor",
      "Newton Abbot Station",
      "Wolborough Street",
      "Highweek Village",
      "Kingsteignton",
      "River Teign",
      "Bakers Park"
    ],
    drainageProfile: `Newton Abbot, a busy market town at the head of the Teign estuary, serves as a gateway to both Dartmoor and the South Devon coast. The town has seen significant development and expansion, creating a diverse mix of Victorian terraces, post-war housing, and modern estates.\n\nThe town's position at the confluence of the River Lemon and River Teign means some areas are susceptible to fluvial flooding, which can affect drainage systems. The clay and alluvial soils of the Teign valley contribute to ground movement and pipe displacement. The rapid growth of Newton Abbot in recent decades has placed increased demands on the drainage infrastructure, with some older systems struggling to cope with additional capacity.`,
    localFAQs: [
      {
        question: "Is river flooding a concern for drainage in Newton Abbot?",
        answer: "Properties near the River Teign and River Lemon in Newton Abbot can experience raised groundwater and drainage issues during periods of heavy rainfall. We can assess your drainage vulnerability and recommend protective measures including non-return valves and improved surface water management."
      },
      {
        question: "How quickly can you reach Newton Abbot?",
        answer: "We can typically reach Newton Abbot within 30 to 50 minutes for emergency callouts from our Exeter base, travelling via the A380."
      }
    ],
    caseStudy: "A letting agent managing a block of flats in Newton Abbot contacted us about persistent drainage problems affecting ground-floor units. Our CCTV survey revealed a section of shared drainage that had deteriorated and was collecting debris, causing repeated blockages. We cleared the system, relined the damaged sections, and set up a planned maintenance schedule to prevent future issues. The flats have had no further drainage complaints."
  }
};

export function getLocationHubContent(locationSlug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[locationSlug];
}
