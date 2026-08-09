const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const siteUrl = "https://fixitmobile.us";
const phoneDisplay = "(612) 424-2111";
const phoneHref = "+16124242111";
const email = "info@fixitmobile.us";
const reviewUrl = "https://g.page/r/CfO9KH4AOkYwEBM/review";

const cities = [
  {
    name: "Minneapolis",
    slug: "iphone-repair-minneapolis",
    title: "Mobile iPhone Repair in Minneapolis | FIX IT Mobile",
    description: "Mobile iPhone repair in Minneapolis. FIX IT Mobile comes to homes, apartments, workplaces, and Downtown Minneapolis offices for same-day phone repair.",
    h1: "Mobile iPhone Repair in Minneapolis",
    subhead: "We Fit Your Schedule. We Come To You.",
    intro: [
      "Minneapolis customers often have full calendars, limited parking, and very little patience for sitting in a repair shop lobby. FIX IT Mobile is built for that reality. We travel to your home, apartment, office, or workplace and handle common iPhone, iPad, and Samsung repairs where your day already is.",
      "If you work in a Downtown Minneapolis office, live near Uptown, manage a household in Northeast, or are balancing school pickups and errands around South Minneapolis, mobile repair removes the part of the process that usually wastes the most time. You do not need to drive across town, wait in line, or come back later to pick up your device.",
      "Most repairs are completed in about 20-30 minutes after arrival, depending on the model and damage. Screen replacement, battery replacement, charging port repair, camera repair, and water damage diagnostics can often be started the same day.",
      "We also help Minneapolis residents who need iPad repairs for school, work, or family use, along with Samsung phone repair for cracked displays, charging trouble, and diagnostic issues. Before the appointment, we confirm the device model, the symptoms, and the repair plan so the visit is efficient and clear.",
      "Our biggest advantage is simple: we fit your schedule. You choose a practical appointment window, and we come to you with the tools, parts, and professional process needed to get your device working again."
    ],
    local: [
      "For Downtown Minneapolis offices, the most common request is a fast iPhone screen replacement between meetings. A cracked screen can interrupt banking, rideshare access, client calls, two-factor authentication, and everyday communication.",
      "For apartment buildings and condos around Minneapolis, mobile repair is especially helpful when parking is tight or the device is barely usable. Customers can book the visit, stay near home, and avoid risking more damage by carrying a cracked or swollen device around town.",
      "Families in residential Minneapolis neighborhoods often call us for multiple devices at once: a parent's iPhone battery, a teenager's screen, or an iPad used for homework and streaming. When it makes sense, we can review more than one device during the same appointment."
    ],
    faq: [
      ["Can you come to my office in Downtown Minneapolis?", "Yes. We regularly serve office and workplace appointments, including Downtown Minneapolis, when the building access and schedule are clear."],
      ["How fast is a typical Minneapolis iPhone repair?", "Many iPhone screen and battery repairs take about 20-30 minutes after arrival. More complex issues, iPads, back glass, or water damage diagnostics can take longer."],
      ["Do you offer same-day phone repair in Minneapolis?", "Same-day service is often available depending on parts, route timing, and appointment demand. Calling or booking early gives you the best chance of getting on the schedule."],
      ["Can you repair iPads and Samsung phones in Minneapolis?", "Yes. We service many iPad and Samsung models. We confirm the exact model first so we can quote accurately and check parts availability."],
      ["What if my device has water damage?", "We provide water damage diagnostics and explain what is realistic before recommending a repair. Water damage can be unpredictable, so diagnosis comes first."]
    ]
  },
  {
    name: "Edina",
    slug: "iphone-repair-edina",
    title: "Mobile iPhone Repair in Edina | FIX IT Mobile",
    description: "FIX IT Mobile provides mobile iPhone repair in Edina for homes, offices, and workplaces. Same-day screen, battery, charging, iPad, and Samsung repair.",
    h1: "Mobile iPhone Repair in Edina",
    subhead: "We Fit Your Schedule. We Come To You.",
    intro: [
      "Edina residents value service that is punctual, clear, and convenient. FIX IT Mobile brings professional phone and tablet repair directly to your home, office, or workplace so you do not have to rearrange your entire day around a cracked screen or weak battery.",
      "Whether you are near 50th and France, Southdale, Centennial Lakes, or a residential neighborhood off France Avenue, mobile repair means the technician comes to the place that already works for you. That is especially useful when your iPhone still works but the damage makes it frustrating to use.",
      "We handle iPhone screen replacement, battery replacement, charging port repair, back glass repair, camera repair, and water damage diagnostics for many popular models. We also provide iPad repairs and Samsung repairs when the model and part availability are confirmed.",
      "The appointment starts with a clear review of the issue. We verify the model, explain the repair path, and complete most common services in about 20-30 minutes after arrival. When a device needs a different approach, we tell you before moving forward.",
      "The point is not just speed. It is reducing friction. No waiting in repair shops, no extra drive across town, and no guessing whether the repair will fit your calendar."
    ],
    local: [
      "For Edina homeowners, mobile iPhone repair is ideal when a family device breaks during a busy week. We can meet at the home, complete the repair on-site, and help you avoid a separate store visit after work or school.",
      "Edina offices and small businesses often need dependable same-day phone repair because a broken device can slow down scheduling, payment apps, photos, and customer communication. We treat business appointments with the same direct, professional pace you expect from any on-site service.",
      "Customers around Southdale and nearby offices often ask about premium OLED screens. When available for your model, premium-quality parts can help restore the look and feel of the display."
    ],
    faq: [
      ["Do you come to homes in Edina?", "Yes. We travel to homes, apartments, offices, and workplaces in Edina by appointment."],
      ["Can I get an iPhone screen replacement without visiting a store?", "Yes. Screen replacement is one of the main reasons customers choose FIX IT Mobile. We come to you and complete many repairs on-site."],
      ["Do you offer premium OLED screens in Edina?", "Premium OLED screens are available for select iPhone models. We can confirm options and pricing when we verify your exact model."],
      ["Can you repair my child's iPad in Edina?", "We repair many iPad models, including screen and charging issues. iPad pricing depends on the exact model and part availability."],
      ["How do I schedule Edina mobile phone repair?", "Call now or use the booking page. Share your device model, issue, location, and timing preference so we can plan the appointment."]
    ]
  },
  {
    name: "Bloomington",
    slug: "iphone-repair-bloomington",
    title: "Mobile iPhone Repair in Bloomington | FIX IT Mobile",
    description: "Mobile iPhone repair for Bloomington residents and businesses. We come to homes, offices, hotels, and workplaces for fast phone and tablet repair.",
    h1: "Mobile iPhone Repair in Bloomington",
    subhead: "We Fit Your Schedule. We Come To You.",
    intro: [
      "Bloomington is a city where people are often moving between work, home, errands, airport travel, and appointments. FIX IT Mobile makes phone repair fit into that kind of day by coming directly to your home, office, hotel, or workplace.",
      "Bloomington businesses rely on phones for scheduling, payment, photos, delivery coordination, and customer communication. When an iPhone screen breaks or a battery starts failing, a mobile repair appointment can keep the workday moving without sending someone away from the building.",
      "We provide iPhone screen replacement, battery replacement, charging port repair, back glass repair, camera repair, and water damage diagnostics for many popular models. We also help with iPad repairs and Samsung phone repair when parts are available and the repair makes sense.",
      "Before the visit, we ask for the exact device model and a brief description of the issue. That helps us bring the right parts, explain pricing, and set clear expectations. Most common repairs are completed in about 20-30 minutes once we arrive.",
      "Our promise is practical: we fit your schedule and we come to you. That means no repair shop waiting room, no extra pickup trip, and no losing half a day over a broken phone."
    ],
    local: [
      "For Bloomington residents near Normandale Lake, West Bloomington, or neighborhoods closer to the Minnesota River, mobile repair keeps the appointment simple. You can stay at home while the device gets professional attention nearby.",
      "For Bloomington businesses around major retail, hospitality, and office areas, the convenience is just as important as the repair itself. A staff phone, manager phone, or work iPad can be fixed with less interruption to the team.",
      "Travelers and commuters who pass through Bloomington often need quick help before the next stop. If the route and schedule work, we can coordinate same-day phone repair at a practical meeting location."
    ],
    faq: [
      ["Do you serve Bloomington businesses?", "Yes. We can meet at many Bloomington workplaces, offices, hotels, and business locations by appointment."],
      ["Can you repair a phone near Mall of America or the airport area?", "We serve Bloomington by appointment, including nearby business and travel areas when timing and access work."],
      ["How long does Bloomington mobile phone repair take?", "Many iPhone screen and battery repairs take about 20-30 minutes after arrival. More complex repairs may need more time or a quote first."],
      ["Do you repair Samsung phones in Bloomington?", "Yes. We repair many Samsung models, including screen and charging issues, after confirming the exact model."],
      ["Can you diagnose water damage?", "Yes. Water damage diagnostics help determine whether repair is realistic and what the next step should be."]
    ]
  },
  {
    name: "Eagan",
    slug: "iphone-repair-eagan",
    title: "Mobile iPhone Repair in Eagan | FIX IT Mobile",
    description: "Same-day mobile iPhone repair in Eagan. We come to homes, offices, and workplaces for iPhone, iPad, and Samsung repairs.",
    h1: "Mobile iPhone Repair in Eagan",
    subhead: "We Fit Your Schedule. We Come To You.",
    intro: [
      "Eagan neighborhoods are spread out, and a broken phone can turn a normal day into a string of inconvenient stops. FIX IT Mobile removes the store visit by bringing mobile iPhone repair to your home, office, or workplace in Eagan.",
      "Whether you are near Central Park Commons, Diffley Road, Cliff Road, or a neighborhood closer to Lebanon Hills, we focus on making the repair easy to schedule. You do not need to sit in a shop or build your day around a pickup window.",
      "Our services include iPhone screen replacement, battery replacement, charging port repair, back glass repair, camera repair, and water damage diagnostics. We also handle many iPad repairs and Samsung repairs after confirming the device model and parts.",
      "Most common iPhone repairs can be completed in about 20-30 minutes once the appointment begins. If the problem is more complicated, we slow down enough to diagnose it and explain options before recommending a path.",
      "FIX IT Mobile is built around the sentence customers remember: We Fit Your Schedule. We Come To You. That is especially helpful in Eagan, where a quick repair shop errand can become a much longer drive than expected."
    ],
    local: [
      "Eagan homeowners often book us when a phone breaks during a packed family schedule. A cracked screen, bad battery, or charging issue can be repaired at home while the rest of the day continues around it.",
      "Eagan workplace appointments are useful for employees who rely on a phone for calls, authentication, route planning, or jobsite communication. We can meet at an office or workplace and keep the process focused.",
      "For customers near parks, schools, retail centers, and residential areas, same-day phone repair depends on route timing and parts availability. Reaching out early gives us more flexibility to fit the appointment into the day."
    ],
    faq: [
      ["Do you come to Eagan neighborhoods?", "Yes. We serve Eagan homes, apartments, offices, and workplaces by appointment."],
      ["Can you replace my iPhone battery in Eagan?", "Yes. Battery replacement is available for many iPhone models, and we confirm the model before quoting."],
      ["Do you fix charging ports?", "Yes. We inspect charging problems, clean debris when appropriate, and repair or replace charging parts when needed."],
      ["Can you repair iPads in Eagan?", "Yes. We service many iPads, including screen and charging repairs, depending on the exact model."],
      ["Is same-day service guaranteed?", "Same-day appointments are often available but depend on parts, schedule, and route timing. We will be clear about availability when you contact us."]
    ]
  },
  {
    name: "Apple Valley",
    slug: "iphone-repair-apple-valley",
    title: "Mobile iPhone Repair in Apple Valley | FIX IT Mobile",
    description: "FIX IT Mobile serves Apple Valley homeowners, offices, and workplaces with mobile iPhone repair, iPad repair, Samsung repair, and same-day service.",
    h1: "Mobile iPhone Repair in Apple Valley",
    subhead: "We Fit Your Schedule. We Come To You.",
    intro: [
      "Apple Valley homeowners and busy families do not always have time to leave a device at a repair shop. FIX IT Mobile brings phone and tablet repair to your location, whether that is home, an office, or a workplace appointment.",
      "A cracked iPhone screen, weak battery, damaged charging port, or camera issue can interrupt daily routines quickly. We make the next step simple: confirm the model, schedule the visit, and complete the repair on-site when the device and parts allow it.",
      "We provide iPhone screen replacement, battery replacement, charging port repair, back glass repair, camera repair, and water damage diagnostics. We also support many iPad repairs and Samsung phone repairs for customers who want one convenient mobile repair service.",
      "Most common iPhone services take about 20-30 minutes after arrival. That means you can stay near home, continue working, or keep the family schedule intact while the repair gets done.",
      "Our service is designed around convenience without making the repair feel casual. We use premium-quality parts, offer warranty coverage on eligible repairs, and communicate clearly before, during, and after the appointment."
    ],
    local: [
      "For Apple Valley homeowners, mobile repair is especially useful when a device breaks in the middle of a school night, workday, or weekend plan. You avoid the drive, the wait, and the uncertainty of whether the shop can see you quickly.",
      "Customers near Cedar Avenue, County Road 42, and residential neighborhoods throughout Apple Valley often ask for same-day phone repair. Availability depends on the day, but the mobile model gives us flexibility to meet customers where they already are.",
      "We also help families who have multiple devices in use across work, school, and home. If an iPad screen is cracked or a Samsung phone will not charge, we can review those issues alongside the main iPhone repair request."
    ],
    faq: [
      ["Do you come to homes in Apple Valley?", "Yes. Home appointments are a core part of the service, along with office and workplace visits."],
      ["Can you fix an iPhone screen the same day?", "Same-day iPhone screen replacement is often available when the part is in stock and scheduling works."],
      ["Do you repair Samsung phones in Apple Valley?", "Yes. We repair many Samsung phones after confirming the exact model and the issue."],
      ["Do you work on iPads?", "Yes. We offer iPad repairs for many models, including screen and charging issues."],
      ["What should I share when booking?", "Send the device model, the problem, your Apple Valley location, and any photos that help show the damage."]
    ]
  },
  {
    name: "Burnsville",
    slug: "iphone-repair-burnsville",
    title: "Mobile iPhone Repair in Burnsville | FIX IT Mobile",
    description: "Mobile iPhone repair in Burnsville for commuters, homeowners, offices, and workplaces. Same-day screen, battery, iPad, and Samsung repair.",
    h1: "Mobile iPhone Repair in Burnsville",
    subhead: "We Fit Your Schedule. We Come To You.",
    intro: [
      "Burnsville commuters and homeowners often need phone repair that does not add another stop to an already busy day. FIX IT Mobile comes to your home, office, or workplace so you can get help without sitting in a repair shop.",
      "If your iPhone screen is cracked, the battery drains too quickly, the charging port feels loose, or the camera is not working correctly, we can often handle the repair on-site. We also provide water damage diagnostics when the issue is less obvious.",
      "Our mobile repair service covers iPhone screen replacement, battery replacement, charging port repair, back glass repair, camera repair, iPad repairs, and Samsung repairs for many popular models. We confirm parts and pricing before the appointment whenever possible.",
      "Most common iPhone repairs are completed in about 20-30 minutes after arrival. For Burnsville customers, that can mean getting a repair done at home before the next errand, at work between meetings, or during a practical appointment window.",
      "We fit your schedule, travel to your location, and keep the service professional from the first quote to the finished repair. That is the advantage of a mobile repair service built for real Twin Cities routines."
    ],
    local: [
      "Burnsville commuters often contact us when a broken phone is interfering with navigation, calls, work apps, or authentication. A mobile appointment helps avoid losing lunch breaks or evening time to a store visit.",
      "For homeowners near County Road 42, Nicollet Avenue, or neighborhoods throughout Burnsville, home service keeps the repair simple. You can stay where you are while we handle the device nearby.",
      "Businesses and workplaces in Burnsville also benefit from on-site repair. A cracked staff phone or iPad used for daily operations can often be addressed without sending someone off-site."
    ],
    faq: [
      ["Do you serve Burnsville commuters?", "Yes. We can meet Burnsville customers at homes, offices, and workplaces by appointment, which helps avoid an extra repair shop stop."],
      ["Can you replace my iPhone screen at work?", "Yes. Workplace iPhone screen replacement is available when access, timing, and parts line up."],
      ["Do you repair back glass?", "Back glass repair is available for eligible iPhone and Android models. We quote it after checking the exact model and damage."],
      ["Can you help with a phone that got wet?", "Yes. We offer water damage diagnostics and explain the realistic repair options after inspection."],
      ["How do I book Burnsville mobile repair?", "Call now or use the booking page with your model, issue, location, and preferred timing."]
    ]
  }
];

const services = [
  {
    name: "iPhone Screen Replacement",
    slug: "iphone-screen-replacement",
    title: "iPhone Screen Replacement | FIX IT Mobile",
    description: "Mobile iPhone screen replacement in the Twin Cities. FIX IT Mobile comes to you for cracked glass, display problems, and touch issues.",
    h1: "iPhone Screen Replacement That Comes To You",
    summary: "Cracked glass, black spots, touch problems, display lines, and sharp edges can make an iPhone frustrating or unsafe to use. FIX IT Mobile brings iPhone screen replacement to your home, office, or workplace so you can skip the repair shop.",
    details: [
      "We verify your iPhone model before quoting because screen type, display quality, and part availability matter. Premium OLED screens are available for select models when customers want a display option closer to the original look and feel.",
      "Most iPhone screen replacement appointments are completed in about 20-30 minutes after arrival. Before we begin, we inspect the device for frame damage, display symptoms, Face ID concerns, camera issues, and signs of liquid exposure.",
      "A mobile appointment is ideal when the phone still works but the glass is cracked enough to make typing, scrolling, or reading difficult. We come prepared, explain the repair, and include warranty coverage on eligible screen work."
    ],
    faq: [
      ["How long does iPhone screen replacement take?", "Many screen repairs take about 20-30 minutes after arrival, depending on the model and condition."],
      ["Do you offer premium OLED screens?", "Premium OLED screens are available for select iPhone models. We confirm options before the appointment."],
      ["Can you replace the screen at my workplace?", "Yes. We travel to homes, offices, and workplaces across our Twin Cities service area."]
    ]
  },
  {
    name: "iPhone Battery Replacement",
    slug: "iphone-battery-replacement",
    title: "iPhone Battery Replacement | FIX IT Mobile",
    description: "Mobile iPhone battery replacement for fast drain, sudden shutdowns, swelling batteries, and poor battery health in the Twin Cities.",
    h1: "iPhone Battery Replacement Without The Shop Visit",
    summary: "A weak iPhone battery can turn a reliable device into a constant source of stress. If your phone drains quickly, shuts down early, gets unusually warm, or shows poor battery health, FIX IT Mobile can come to you for battery replacement.",
    details: [
      "We confirm your iPhone model and symptoms before the appointment so we can bring the right part and explain the expected result. Battery replacement is often one of the most practical ways to extend the life of a phone that otherwise works well.",
      "During the visit, we inspect for swelling, charging issues, and signs that another problem may be contributing to battery drain. If the charging port, software behavior, or liquid damage appears involved, we explain that before replacing parts.",
      "Mobile battery service is useful for homeowners, office workers, students, and anyone who depends on a phone throughout the day. We fit your schedule and complete many battery repairs on-site."
    ],
    faq: [
      ["How do I know if I need a new battery?", "Fast drain, sudden shutdowns, swelling, and low battery health are common signs. We can review symptoms before booking."],
      ["Can you replace the battery the same day?", "Same-day battery replacement is often available when the part is in stock and schedule allows."],
      ["Do you check charging problems too?", "Yes. We inspect charging behavior so a port issue is not mistaken for a battery issue."]
    ]
  },
  {
    name: "iPad Screen Repair",
    slug: "ipad-screen-repair",
    title: "iPad Screen Repair | FIX IT Mobile",
    description: "iPad screen repair in the Twin Cities with mobile service. We help with cracked glass, display damage, and touch issues for many iPad models.",
    h1: "iPad Screen Repair For Homes, Families, And Work",
    summary: "iPads are used for school, work, checkout systems, travel, streaming, and family life. When the glass cracks or the display stops responding, FIX IT Mobile can help with iPad screen repair for many popular models.",
    details: [
      "iPad repairs depend heavily on the exact model, generation, and screen assembly. We confirm those details first so the quote is accurate and the repair plan is realistic.",
      "Some iPad screen repairs require more time than a typical iPhone repair because of adhesive, glass separation, display assemblies, or calibration needs. We set expectations before the appointment so there are no surprises.",
      "Mobile iPad repair is especially helpful for families and businesses that use tablets every day. We can review cracked screens, charging issues, and other symptoms, then recommend the best repair path."
    ],
    faq: [
      ["Do you repair all iPads?", "We repair many iPad models, but availability depends on the exact generation and part supply."],
      ["Can an iPad screen be repaired at my home?", "Many iPad issues can be handled through mobile service, though some models require extra time or planning."],
      ["Do you quote iPad repairs before the visit?", "Yes. We confirm the model and issue first so pricing and parts are clear."]
    ]
  },
  {
    name: "Samsung Screen Repair",
    slug: "samsung-screen-repair",
    title: "Samsung Screen Repair | FIX IT Mobile",
    description: "Samsung screen repair and mobile phone repair in the Twin Cities. We service many Galaxy models after confirming parts and model details.",
    h1: "Samsung Screen Repair With Mobile Convenience",
    summary: "Samsung phones are powerful, but a cracked or damaged display can make them difficult to use quickly. FIX IT Mobile provides Samsung screen repair for many Galaxy models with service designed around your schedule.",
    details: [
      "Samsung screen repair pricing and availability can vary by exact model, screen type, color, and parts supply. We confirm those details before setting expectations so you know what is available.",
      "We inspect for display lines, dead touch areas, cracked glass, frame damage, camera concerns, and charging issues. If a diagnostic is a better first step than a screen replacement, we will say so.",
      "Our mobile repair service is useful for Samsung customers who need help at home, work, or another practical appointment location in our Twin Cities service area."
    ],
    faq: [
      ["Which Samsung phones do you repair?", "We repair many Galaxy models. Share the exact model number so we can confirm parts and pricing."],
      ["Can Samsung screen repair be same day?", "Sometimes. Same-day Samsung repair depends on model, part availability, and scheduling."],
      ["Do you repair charging issues too?", "Yes. We can inspect charging issues and provide charging port repair when needed."]
    ]
  },
  {
    name: "Charging Port Repair",
    slug: "charging-port-repair",
    title: "Charging Port Repair | FIX IT Mobile",
    description: "Mobile charging port repair for iPhone, iPad, and Samsung devices in the Twin Cities. We come to you for loose or unreliable charging.",
    h1: "Charging Port Repair For Phones And Tablets",
    summary: "If your cable only works at an angle, the phone charges slowly, or the port feels loose, the problem may be debris, wear, liquid exposure, or a damaged charging assembly. FIX IT Mobile can inspect and repair charging issues at your location.",
    details: [
      "We start with diagnosis because not every charging problem needs a port replacement. Sometimes the issue is lint, a worn cable, battery health, or liquid damage. A careful inspection helps avoid unnecessary parts.",
      "When charging port repair is the right fix, we explain the process, the expected turnaround, and the warranty coverage for eligible work. iPhone, iPad, and Samsung charging repairs vary by model.",
      "Mobile charging port repair is convenient when the device still works but cannot reliably make it through the day. We come to your home, office, or workplace and help you get back to dependable charging."
    ],
    faq: [
      ["Can you clean my charging port?", "If debris is the issue, cleaning may help. We inspect first and recommend the appropriate fix."],
      ["Do all charging issues need a new port?", "No. Battery problems, cables, adapters, and liquid damage can also cause charging symptoms."],
      ["Do you repair iPad charging ports?", "We service charging issues on many iPad models after confirming the model and repair option."]
    ]
  },
  {
    name: "Back Glass Repair",
    slug: "back-glass-repair",
    title: "Back Glass Repair | FIX IT Mobile",
    description: "Back glass repair for eligible iPhone and Android models in the Twin Cities. FIX IT Mobile checks your model and explains options clearly.",
    h1: "Back Glass Repair For Eligible Phones",
    summary: "Cracked back glass can leave sharp edges, affect resale value, and make a phone uncomfortable to hold. FIX IT Mobile offers back glass repair for eligible iPhone and Android models after confirming the model and repair method.",
    details: [
      "Back glass repair is more model-specific than a typical screen replacement. Some devices require special handling, longer repair time, or a different repair approach. We quote it carefully so expectations are clear.",
      "During the intake, we ask about the exact device, wireless charging behavior, camera lens area, frame condition, and whether any other symptoms appeared after the drop.",
      "When back glass repair is available, mobile service can save a frustrating store visit. We coordinate the appointment around your schedule and explain warranty coverage for eligible repairs."
    ],
    faq: [
      ["Do you repair iPhone back glass?", "Yes, for eligible models. We confirm the exact model and damage before quoting."],
      ["Does cracked back glass affect wireless charging?", "It can. We ask about charging behavior and inspect the device before recommending repair."],
      ["Is back glass repair same day?", "Sometimes, depending on model, parts, route timing, and the repair method required."]
    ]
  }
];

function htmlEscape(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function nav(prefix = "..") {
  return `
    <header>
      <div class="shell topbar">
        <a class="brand" href="${prefix}/">
          <span class="brand-mark"><img src="${prefix}/assets/main-logo.png" alt="FIX IT Mobile logo" width="54" height="54" decoding="async"></span>
          <span class="brand-copy"><strong>FIX IT Mobile</strong><span>We Come To You</span></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="${prefix}/">Home</a>
          <a href="${prefix}/pricing/">Pricing</a>
          <a href="${prefix}/iphone-screen-replacement/">Services</a>
          <a href="${prefix}/booking.html">Book</a>
          <a href="${prefix}/contact/">Contact</a>
        </nav>
        <a class="call-chip" href="tel:${phoneHref}">Call Now</a>
      </div>
    </header>`;
}

function footer(prefix = "..") {
  const cityLinks = cities.map((city) => `<a href="${prefix}/${city.slug}/">${city.name}</a>`).join("");
  const serviceLinks = services.map((service) => `<a href="${prefix}/${service.slug}/">${service.name}</a>`).join("");
  return `
    <footer class="shell site-footer">
      <div class="footer-links">
        <a href="${prefix}/">Homepage</a>
        <a href="${prefix}/pricing/">Pricing</a>
        <a href="${prefix}/contact/">Contact</a>
        <a href="${reviewUrl}" target="_blank" rel="noopener noreferrer">Google Reviews</a>
      </div>
      <div class="footer-columns">
        <div><h2>City Pages</h2><div class="mini-links">${cityLinks}</div></div>
        <div><h2>Service Pages</h2><div class="mini-links">${serviceLinks}</div></div>
      </div>
      <p>&copy; 2026 FIX IT Mobile iPhone &amp; iPad Repair. Mobile service by appointment in the Twin Cities.</p>
    </footer>`;
}

function head({ title, description, slug, ogType = "website" }) {
  const url = `${siteUrl}/${slug}/`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${htmlEscape(title)}</title>
  <meta name="description" content="${htmlEscape(description)}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:title" content="${htmlEscape(title)}" />
  <meta property="og:description" content="${htmlEscape(description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${siteUrl}/assets/hero-cracked-devices-optimized.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${htmlEscape(title)}" />
  <meta name="twitter:description" content="${htmlEscape(description)}" />
  <meta name="twitter:image" content="${siteUrl}/assets/hero-cracked-devices-optimized.jpg" />
  <link rel="icon" type="image/png" href="../assets/favicon-v2.png" />
  <link rel="shortcut icon" href="../assets/favicon-v2.png" />
  <link rel="apple-touch-icon" href="../assets/favicon-v2.png" />
  <style>
    :root {
      --bg: #f3efe7;
      --surface: rgba(255, 250, 242, 0.86);
      --surface-strong: #fffdf9;
      --ink: #15231d;
      --ink-soft: #46554c;
      --line: rgba(21, 35, 29, 0.1);
      --brand: #d96d3d;
      --brand-deep: #b74f22;
      --accent: #1f6a52;
      --accent-soft: #dff2e8;
      --shadow: 0 24px 60px rgba(43, 34, 21, 0.14);
      --radius-xl: 32px;
      --radius-lg: 24px;
      --radius-md: 18px;
      --max-width: 1180px;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      min-height: 100vh;
      color: var(--ink);
      background:
        radial-gradient(circle at top left, rgba(217, 109, 61, 0.18), transparent 26%),
        radial-gradient(circle at 85% 10%, rgba(31, 106, 82, 0.14), transparent 24%),
        linear-gradient(180deg, #f8f2e9 0%, #f4eee6 34%, #f7f4ef 100%);
      font-family: "Avenir Next", "Segoe UI", sans-serif;
      line-height: 1.65;
    }
    a { color: inherit; }
    .shell { width: min(var(--max-width), calc(100% - 32px)); margin: 0 auto; }
    header { position: sticky; top: 16px; z-index: 20; padding: 16px 0 0; }
    .topbar {
      display: flex; align-items: center; justify-content: space-between; gap: 22px;
      padding: 16px 22px; background: rgba(21, 35, 29, 0.9); color: #fffaf2;
      border: 1px solid rgba(255, 250, 242, 0.12); border-radius: 999px;
      box-shadow: 0 18px 40px rgba(21, 35, 29, 0.24); backdrop-filter: blur(18px);
    }
    .brand { display: flex; align-items: center; gap: 14px; min-width: 0; text-decoration: none; }
    .brand-mark {
      width: 54px; height: 54px; display: flex; align-items: center; justify-content: center;
      padding: 6px; border-radius: 16px; overflow: hidden; background: rgba(255, 255, 255, 0.96);
      box-shadow: 0 10px 22px rgba(0, 0, 0, 0.16); flex: 0 0 auto;
    }
    .brand-mark img { width: 100%; height: 100%; object-fit: contain; display: block; }
    .brand-copy strong { display: block; font-size: 1.16rem; letter-spacing: 0.02em; }
    .brand-copy span { color: rgba(255, 250, 242, 0.8); font-size: 0.82rem; }
    nav { display: flex; flex-wrap: wrap; justify-content: center; gap: 18px; }
    nav a { text-decoration: none; color: rgba(255, 250, 242, 0.84); font-size: 0.94rem; }
    nav a:hover, nav a:focus-visible { color: #fff; }
    .call-chip {
      white-space: nowrap; text-decoration: none; color: white; background: rgba(255, 255, 255, 0.08);
      padding: 10px 16px; border-radius: 999px; border: 1px solid rgba(255, 255, 255, 0.12); font-weight: 700;
    }
    .hero {
      display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
      gap: 36px; align-items: center; margin: 56px auto 30px; padding: 46px;
      background: linear-gradient(135deg, rgba(21, 35, 29, 0.96), rgba(31, 106, 82, 0.9));
      color: #fffaf2; border-radius: var(--radius-xl); box-shadow: var(--shadow); overflow: hidden;
    }
    .eyebrow { color: #f6c09d; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.82rem; margin-bottom: 12px; }
    h1 { font-size: clamp(2.45rem, 4vw, 4.75rem); line-height: 0.98; letter-spacing: 0; margin-bottom: 18px; }
    .hero p { color: rgba(255, 250, 242, 0.86); font-size: 1.08rem; max-width: 720px; }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 28px; }
    .button {
      display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 12px 20px;
      border-radius: 999px; text-decoration: none; font-weight: 800; border: 1px solid transparent;
    }
    .button-primary { background: var(--brand); color: white; box-shadow: 0 14px 28px rgba(217, 109, 61, 0.32); }
    .button-secondary { color: #fffaf2; border-color: rgba(255, 250, 242, 0.28); background: rgba(255, 255, 255, 0.08); }
    .hero-media { position: relative; }
    .hero-photo {
      width: 100%; aspect-ratio: 16 / 10; display: block; object-fit: cover; border-radius: 28px;
      border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 22px 40px rgba(0, 0, 0, 0.24);
    }
    .trust-grid, .service-grid, .link-grid, .faq-grid, .footer-columns {
      display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px;
    }
    .trust-grid { margin: 24px auto 10px; }
    .trust-item, .card, .content-panel, .review-panel, .faq-item, .footer-columns > div {
      background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-md); box-shadow: var(--shadow);
    }
    .trust-item { padding: 18px; font-weight: 800; color: var(--ink); }
    section { margin: 68px auto; }
    .section-head { max-width: 780px; margin-bottom: 22px; }
    h2 { font-size: clamp(1.7rem, 2.5vw, 2.6rem); line-height: 1.08; letter-spacing: 0; margin-bottom: 12px; }
    h3 { font-size: 1.08rem; margin-bottom: 8px; }
    p + p { margin-top: 14px; }
    .content-panel { padding: 28px; }
    .content-panel p, .card p, .faq-item p { color: var(--ink-soft); }
    .service-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .card { padding: 22px; }
    .card a { color: var(--accent); font-weight: 800; text-decoration-thickness: 0.08em; text-underline-offset: 0.18em; }
    .split { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr); gap: 20px; align-items: start; }
    .review-panel { padding: 28px; background: var(--surface-strong); }
    .review-stats { display: grid; gap: 10px; margin-top: 16px; }
    .review-stats span { padding: 12px 14px; border-radius: 14px; background: var(--accent-soft); font-weight: 800; }
    .faq-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .faq-item { padding: 22px; }
    .mini-links, .footer-links { display: flex; flex-wrap: wrap; gap: 12px; }
    .mini-links a, .footer-links a { color: var(--ink-soft); text-decoration: none; border-bottom: 1px solid rgba(31, 106, 82, 0.35); }
    .site-footer { margin: 72px auto 34px; color: var(--ink-soft); }
    .site-footer .footer-links { margin-bottom: 18px; }
    .footer-columns { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-bottom: 20px; }
    .footer-columns > div { padding: 22px; box-shadow: none; }
    @media (max-width: 980px) {
      .hero, .split, .trust-grid, .service-grid, .link-grid, .faq-grid, .footer-columns { grid-template-columns: 1fr; }
      .topbar { align-items: flex-start; border-radius: 24px; flex-direction: column; }
      nav { justify-content: flex-start; }
      .hero { padding: 30px; margin-top: 34px; }
    }
    @media (max-width: 560px) {
      .shell { width: min(100% - 24px, var(--max-width)); }
      h1 { font-size: 2.5rem; }
      .hero { padding: 22px; border-radius: 24px; }
      .button { width: 100%; }
      .brand-copy strong { font-size: 1rem; }
    }
  </style>`;
}

function localBusinessSchema(page, extra = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "FIX IT Mobile iPhone & iPad Repair",
    url: `${siteUrl}/${page.slug}/`,
    image: `${siteUrl}/assets/main-logo.png`,
    telephone: phoneDisplay,
    email,
    priceRange: "$$",
    areaServed: extra.areaServed || cities.map((city) => city.name),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "153"
    },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name
      }
    }))
  };
}

function cityPage(city) {
  const serviceBlurbs = {
    "iphone-screen-replacement": "Cracked glass, display lines, black screens, and touch issues for many iPhone models.",
    "iphone-battery-replacement": "Help for fast battery drain, poor battery health, swelling, and sudden shutdowns.",
    "ipad-screen-repair": "Model-specific help for cracked iPad glass, display damage, and charging issues.",
    "samsung-screen-repair": "Samsung phone repair for cracked screens, charging trouble, and diagnostics.",
    "charging-port-repair": "Inspection and repair for loose cables, unreliable charging, debris, or worn ports.",
    "back-glass-repair": "Back glass options for eligible iPhone and Android models after model confirmation."
  };
  const serviceCards = services.map((service) => `<article class="card"><h3>${service.name}</h3><p>${serviceBlurbs[service.slug]}</p><a href="../${service.slug}/">Learn about ${service.name.toLowerCase()}</a></article>`).join("\n");
  const otherCities = cities.filter((item) => item.slug !== city.slug).map((item) => `<article class="card"><h3>${item.name}</h3><p>Need mobile phone repair nearby? See how FIX IT Mobile serves ${item.name} homes, offices, and workplaces.</p><a href="../${item.slug}/">View ${item.name} repair page</a></article>`).join("\n");
  const intro = city.intro.map((paragraph) => `<p>${paragraph}</p>`).join("\n");
  const local = city.local.map((paragraph) => `<p>${paragraph}</p>`).join("\n");
  const faq = city.faq.map(([q, a]) => `<article class="faq-item"><h3>${q}</h3><p>${a}</p></article>`).join("\n");
  return `${head(city)}
  <script type="application/ld+json">${JSON.stringify(localBusinessSchema(city, { areaServed: city.name }))}</script>
</head>
<body>
  ${nav("..")}
  <main class="shell">
    <section class="hero">
      <div>
        <div class="eyebrow">Same-day mobile repair in ${city.name}</div>
        <h1>${city.h1}</h1>
        <p><strong>${city.subhead}</strong></p>
        <p>Skip the repair shop. FIX IT Mobile comes directly to your home, office, or workplace in ${city.name}. Most repairs are completed in 20-30 minutes using premium-quality parts.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="tel:${phoneHref}">Call Now</a>
          <a class="button button-secondary" href="../booking.html">Book Repair</a>
        </div>
      </div>
      <div class="hero-media">
        <img class="hero-photo" src="../assets/hero-cracked-devices-optimized.jpg" alt="Cracked phone and tablet devices repaired by FIX IT Mobile" width="700" height="438" fetchpriority="high" decoding="async">
      </div>
    </section>

    <section class="trust-grid" aria-label="Why customers trust FIX IT Mobile">
      <div class="trust-item">&#9733; 153+ Google Reviews</div>
      <div class="trust-item">4.9-Star Rating</div>
      <div class="trust-item">Same-Day Service</div>
      <div class="trust-item">Premium OLED Screens Available</div>
      <div class="trust-item">Warranty Included</div>
      <div class="trust-item">We Come To You</div>
    </section>

    <section>
      <div class="section-head">
        <h2>Phone repair in ${city.name} without the extra errand.</h2>
      </div>
      <div class="content-panel">${intro}</div>
    </section>

    <section>
      <div class="section-head">
        <h2>Repairs available in ${city.name}.</h2>
        <p>These are the most requested mobile repair services. Every repair begins with model confirmation, symptom review, and clear pricing before work begins.</p>
      </div>
      <div class="service-grid">${serviceCards}</div>
    </section>

    <section class="split">
      <div class="content-panel">
        <h2>Local service for ${city.name} customers.</h2>
        ${local}
      </div>
      <aside class="review-panel" id="google-reviews">
        <h2>Google Reviews</h2>
        <p>Local customers choose FIX IT Mobile because the repair is convenient, direct, and handled professionally.</p>
        <div class="review-stats">
          <span>&#9733; 153+ Google Reviews</span>
          <span>4.9-Star Rating</span>
          <span>Warranty Included</span>
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="${reviewUrl}" target="_blank" rel="noopener noreferrer">Google Reviews</a>
        </div>
      </aside>
    </section>

    <section>
      <div class="section-head">
        <h2>Why choose FIX IT Mobile in ${city.name}?</h2>
      </div>
      <div class="content-panel">
        <p>We fit your schedule instead of asking you to fit ours. Mobile phone repair is useful because the technician travels to your location, brings the right tools, and handles the repair while you stay close to work, home, or the rest of your day.</p>
        <p>There is no waiting in repair shops, no second trip to pick up your device, and no need to leave your phone behind longer than necessary. Fast turnaround matters, but so does professional service, honest communication, and premium-quality parts selected for your specific device.</p>
        <p>Customers searching for phone repair near me, mobile iPhone repair, mobile phone repair, same-day phone repair, iPad repair, Samsung phone repair, or mobile repair service choose us because the process is simple: call or book, confirm the details, and let us come to you.</p>
      </div>
    </section>

    <section>
      <div class="section-head">
        <h2>${city.name} mobile repair FAQs.</h2>
      </div>
      <div class="faq-grid">${faq}</div>
    </section>

    <section>
      <div class="section-head">
        <h2>Nearby city pages.</h2>
        <p>FIX IT Mobile serves customers across the Twin Cities. These pages explain the mobile repair experience in nearby communities.</p>
      </div>
      <div class="link-grid">${otherCities}</div>
    </section>
  </main>
  ${footer("..")}
</body>
</html>
`;
}

function servicePage(service) {
  const cityLinks = cities.map((city) => `<article class="card"><h3>${city.name}</h3><p>Mobile ${service.name.toLowerCase()} and related device repair for ${city.name} homes, offices, and workplaces.</p><a href="../${city.slug}/">View ${city.name} service area</a></article>`).join("\n");
  const faq = service.faq.map(([q, a]) => `<article class="faq-item"><h3>${q}</h3><p>${a}</p></article>`).join("\n");
  const relatedServices = services.filter((item) => item.slug !== service.slug).map((item) => `<a href="../${item.slug}/">${item.name}</a>`).join("");
  return `${head(service)}
  <script type="application/ld+json">${JSON.stringify(localBusinessSchema(service))}</script>
</head>
<body>
  ${nav("..")}
  <main class="shell">
    <section class="hero">
      <div>
        <div class="eyebrow">Mobile repair service in the Twin Cities</div>
        <h1>${service.h1}</h1>
        <p><strong>We Fit Your Schedule. We Come To You.</strong></p>
        <p>${service.summary}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="tel:${phoneHref}">Call Now</a>
          <a class="button button-secondary" href="../booking.html">Book Repair</a>
        </div>
      </div>
      <div class="hero-media">
        <img class="hero-photo" src="../assets/hero-cracked-devices-optimized.jpg" alt="Phone and tablet repair service from FIX IT Mobile" width="700" height="438" fetchpriority="high" decoding="async">
      </div>
    </section>

    <section class="trust-grid" aria-label="FIX IT Mobile trust signals">
      <div class="trust-item">&#9733; 153+ Google Reviews</div>
      <div class="trust-item">4.9-Star Rating</div>
      <div class="trust-item">Same-Day Service</div>
      <div class="trust-item">Premium OLED Screens Available</div>
      <div class="trust-item">Warranty Included</div>
      <div class="trust-item">We Come To You</div>
    </section>

    <section class="split">
      <div class="content-panel">
        <h2>How this repair works.</h2>
        ${service.details.map((paragraph) => `<p>${paragraph}</p>`).join("\n")}
        <p>Because FIX IT Mobile is a mobile repair service, you do not need to visit a store. We come to your home, office, or workplace, explain the repair, and complete eligible work with premium-quality parts and warranty coverage.</p>
      </div>
      <aside class="review-panel" id="google-reviews">
        <h2>Google Reviews</h2>
        <p>Customers across the Twin Cities trust us for convenient repair, fast turnaround, and clear communication.</p>
        <div class="review-stats">
          <span>&#9733; 153+ Google Reviews</span>
          <span>4.9-Star Rating</span>
          <span>Same-Day Service</span>
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="${reviewUrl}" target="_blank" rel="noopener noreferrer">Google Reviews</a>
        </div>
      </aside>
    </section>

    <section>
      <div class="section-head"><h2>Service areas for ${service.name.toLowerCase()}.</h2></div>
      <div class="link-grid">${cityLinks}</div>
    </section>

    <section>
      <div class="section-head"><h2>${service.name} FAQs.</h2></div>
      <div class="faq-grid">${faq}</div>
    </section>

    <section>
      <div class="section-head"><h2>Related repair services.</h2></div>
      <div class="content-panel mini-links">${relatedServices}</div>
    </section>
  </main>
  ${footer("..")}
</body>
</html>
`;
}

function pricingPage() {
  const serviceCards = services.map((service) => `<article class="card"><h3>${service.name}</h3><p>${service.summary}</p><a href="../${service.slug}/">Service details</a></article>`).join("\n");
  return `${head({
    slug: "pricing",
    title: "Mobile Phone Repair Pricing | FIX IT Mobile",
    description: "Review mobile phone repair pricing guidance for iPhone, iPad, and Samsung repairs. FIX IT Mobile confirms model-specific quotes before appointments."
  })}
  <script type="application/ld+json">${JSON.stringify(localBusinessSchema({ slug: "pricing" }))}</script>
</head>
<body>
  ${nav("..")}
  <main class="shell">
    <section class="hero">
      <div>
        <div class="eyebrow">Transparent repair guidance</div>
        <h1>Mobile Phone Repair Pricing</h1>
        <p><strong>We Fit Your Schedule. We Come To You.</strong></p>
        <p>Prices depend on device model, part quality, screen type, and damage. FIX IT Mobile confirms your quote before the appointment so you know what to expect.</p>
        <div class="hero-actions"><a class="button button-primary" href="tel:${phoneHref}">Call Now</a><a class="button button-secondary" href="../booking.html">Book Repair</a></div>
      </div>
      <div class="hero-media"><img class="hero-photo" src="../assets/hero-cracked-devices-optimized.jpg" alt="Mobile phone repair pricing for cracked devices" width="700" height="438" fetchpriority="high" decoding="async"></div>
    </section>
    <section><div class="content-panel"><h2>How pricing works.</h2><p>Screen repair, battery replacement, charging port repair, iPad repair, Samsung repair, back glass repair, camera repair, and water damage diagnostics all vary by model. We confirm the device first because part cost and repair method can change significantly from one model to another.</p><p>The fastest way to get an accurate quote is to call or book with your model number, the issue, and photos of the damage when possible. We will explain parts, timing, warranty coverage, and whether same-day service is available.</p></div></section>
    <section><div class="section-head"><h2>Repair services.</h2></div><div class="service-grid">${serviceCards}</div></section>
  </main>
  ${footer("..")}
</body>
</html>`;
}

function contactPage() {
  return `${head({
    slug: "contact",
    title: "Contact FIX IT Mobile | Mobile Phone Repair Twin Cities",
    description: "Contact FIX IT Mobile for mobile iPhone, iPad, and Samsung repair in Minneapolis, Edina, Bloomington, Eagan, Apple Valley, and Burnsville."
  })}
  <script type="application/ld+json">${JSON.stringify(localBusinessSchema({ slug: "contact" }))}</script>
</head>
<body>
  ${nav("..")}
  <main class="shell">
    <section class="hero">
      <div>
        <div class="eyebrow">Book mobile repair</div>
        <h1>Contact FIX IT Mobile</h1>
        <p><strong>We Fit Your Schedule. We Come To You.</strong></p>
        <p>Call, text, or send a booking request for mobile iPhone repair, iPad repair, Samsung repair, screen replacement, battery replacement, charging port repair, and diagnostics across our Twin Cities service area.</p>
        <div class="hero-actions"><a class="button button-primary" href="tel:${phoneHref}">Call Now</a><a class="button button-secondary" href="../booking.html">Book Repair</a></div>
      </div>
      <div class="hero-media"><img class="hero-photo" src="../assets/booking-cracked-iphone-optimized.jpg" alt="Cracked iPhone ready for mobile repair booking" width="700" height="438" fetchpriority="high" decoding="async"></div>
    </section>
    <section class="split">
      <div class="content-panel"><h2>Get a repair quote.</h2><p>Share your device model, the issue, your preferred appointment location, and photos if the damage is visible. We will review the details, confirm parts and timing, and help schedule the mobile repair visit.</p><p>FIX IT Mobile serves Minneapolis, Edina, Bloomington, Eagan, Apple Valley, Burnsville, and nearby Twin Cities communities by appointment.</p></div>
      <aside class="review-panel"><h2>Contact details</h2><div class="review-stats"><span>Phone: <a href="tel:${phoneHref}">${phoneDisplay}</a></span><span>Email: <a href="mailto:${email}">${email}</a></span><span>Hours: By appointment only</span></div></aside>
    </section>
  </main>
  ${footer("..")}
</body>
</html>`;
}

function writePage(slug, html) {
  const dir = path.join(root, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

function writeSitemap() {
  const routes = [
    "",
    "booking.html",
    "accessories.html",
    "service-policy.html",
    "pricing/",
    "contact/",
    ...cities.map((city) => `${city.slug}/`),
    ...services.map((service) => `${service.slug}/`)
  ];
  const urls = routes.map((route) => `  <url><loc>${siteUrl}/${route}</loc></url>`).join("\n");
  fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`);
  fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`);
}

cities.forEach((city) => writePage(city.slug, cityPage(city)));
services.forEach((service) => writePage(service.slug, servicePage(service)));
writePage("pricing", pricingPage());
writePage("contact", contactPage());
writeSitemap();

console.log(`Generated ${cities.length} city pages, ${services.length} service pages, pricing, contact, sitemap, and robots.`);
