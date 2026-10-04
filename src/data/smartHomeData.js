export const SMART_DEVICES = [
  {
    id: "dev-climate-1",
    name: "Aura Glass Thermostat X9",
    category: "Climate Control",
    subtitle: "AI-Powered Learning HVAC Glass Controller",
    description: "Ultra-sleek curved glass thermostat with local neural engine. Automatically predicts temperature preferences, balances humidity, and integrates with all HVAC systems.",
    price: 249,
    rating: 4.9,
    reviewsCount: 384,
    image: "/images/thermostat.jpg",
    badge: "Bestseller",
    matterCertified: true,
    compatibility: ["Apple HomeKit", "Google Home", "Amazon Alexa", "Matter 1.3"],
    specs: {
      "Display": "2.4\" OLED Glass Circle",
      "Sensors": "Temp, Humidity, Motion, Air Quality",
      "Power": "24VAC C-Wire / Battery Backup",
      "Wireless": "Wi-Fi 6, Thread, Zigbee 3.0",
      "Energy Rating": "Energy Star Certified (-32% HVAC bill)"
    },
    features: [
      "Dynamic weather-adaptive temperature compensation",
      "Room-by-room sensor mesh networking",
      "Voice micro-array microphone with privacy kill switch",
      "Glass surface touch interface with haptic feedback"
    ],
    defaultState: {
      power: true,
      targetTemp: 72,
      mode: "Cooling", // Cooling, Heating, Eco, Fan
      fanSpeed: "Auto"
    }
  },
  {
    id: "dev-security-1",
    name: "AetherGuard 4K AI Camera",
    category: "AI Security",
    subtitle: "4K HDR Night-Vision Camera with Edge AI",
    description: "High-precision optical camera with smoked glass housing. On-device facial recognition, vehicle classification, and perimeter tripwires without subscription fees.",
    price: 199,
    rating: 4.8,
    reviewsCount: 512,
    image: "/images/camera.jpg",
    badge: "Top Rated",
    matterCertified: true,
    compatibility: ["Apple HomeKit Secure Video", "Google Home", "Alexa", "Home Assistant"],
    specs: {
      "Resolution": "4K Ultra HD (3840 x 2160)",
      "Field of View": "160° Ultra-Wide Lens",
      "Night Vision": "Color Night Vision + IR LEDs",
      "Audio": "2-Way Noise Canceling Mic & Speaker",
      "Storage": "Local MicroSD (Up to 512GB) / Encrypted NAS"
    },
    features: [
      "Local Edge Neural Processor (Zero Cloud Delay)",
      "Automated Spotlight & 105dB Threat Siren",
      "Weatherproof IP67 Anodized Glass Aluminum Body",
      "Privacy shutter with physical glass shade"
    ],
    defaultState: {
      power: true,
      recording: true,
      detectionMode: "High AI Guard",
      spotlight: false
    }
  },
  {
    id: "dev-lighting-1",
    name: "Lumina Prism Filament RGB Bulb",
    category: "Ambient Lighting",
    subtitle: "Floating Double-Helical Glass Smart Bulb",
    description: "Architectural masterpiece smart bulb featuring exposed double-helical LED filaments inside hand-blown smoked glass. 16.8 million colors + tunable circadian whites.",
    price: 79,
    rating: 4.9,
    reviewsCount: 620,
    image: "/images/lighting.jpg",
    badge: "Design Award",
    matterCertified: true,
    compatibility: ["Matter over Thread", "Apple Home", "Philips Hue Bridge", "Alexa"],
    specs: {
      "Brightness": "1100 Lumens (80W Equivalent)",
      "Color Temp": "2000K Warm - 6500K Cool White + RGB",
      "Lifespan": "50,000 Hours (25+ Years)",
      "Power Draw": "9.5W Ultra Efficiency",
      "Protocol": "Thread & Bluetooth Mesh"
    },
    features: [
      "Circadian rhythm auto-sync (sunlight tracking)",
      "Music light sync with sub-millisecond audio response",
      "Stepless glass-touch dimming from 1% to 100%",
      "No hub required (direct Thread connection)"
    ],
    defaultState: {
      power: true,
      brightness: 85,
      colorHex: "#06b6d4",
      presetName: "Cyber Ambient"
    }
  },
  {
    id: "dev-hub-1",
    name: "Lumina Glass Control Center V3",
    category: "Smart Hubs",
    subtitle: "Transparent OLED Smart Home Master Touchscreen",
    description: "The crown jewel of smart home automation. A floating 10.1-inch transparent OLED glass wall panel running Lumina Glass OS for instant home control.",
    price: 499,
    rating: 5.0,
    reviewsCount: 289,
    image: "/images/hub.jpg",
    badge: "Flagship",
    matterCertified: true,
    compatibility: ["Universal Matter Controller", "Zigbee", "Z-Wave Plus", "Thread", "HomeKit"],
    specs: {
      "Display": "10.1\" Transparent OLED Glass Touch Panel",
      "Processor": "Octa-Core Neural Engine",
      "Radios": "Wi-Fi 6E, Bluetooth 5.3, Thread, Zigbee 3.0",
      "Sensors": "ToF Proximity, Ambient Light, Microphone Array",
      "Mounting": "Magnetic Flush Wall Mount or Desktop Stand"
    },
    features: [
      "3D Interactive Floorplan View",
      "Multi-cam live matrix video stream wall",
      "Gesture recognition (wave to dim lights or answer door)",
      "Built-in spatial audio voice assistant"
    ],
    defaultState: {
      power: true,
      activeView: "Floorplan",
      activeScene: "Evening Glow",
      volume: 60
    }
  },
  {
    id: "dev-lock-1",
    name: "Novus Biometric Glass Door Lock",
    category: "AI Security",
    subtitle: "3D Facial & Glass Touch Keypad Door Lock",
    description: "Reinventing door entry with tempered black glass exterior, 3D structured light face scan, sub-0.2s fingerprint recognition, and encrypted digital guest keys.",
    price: 329,
    rating: 4.9,
    reviewsCount: 440,
    image: "/images/lock.jpg",
    badge: "High Security",
    matterCertified: true,
    compatibility: ["Apple Home Key", "Google Home", "Samsung SmartThings", "Matter"],
    specs: {
      "Auth Methods": "Face ID 3D, Fingerprint, NFC Tag, Keypad, Apple Watch",
      "Battery": "10,000mAh Rechargeable Lithium (12 Month Life)",
      "Locking Mechanism": "Grade 1 Commercial Stainless Deadbolt",
      "Encryption": "EAL6+ Security Chip",
      "Emergency": "USB-C Power Port & Mechanical Key Override"
    },
    features: [
      "Apple Home Key tap to unlock via iPhone or Apple Watch",
      "Auto-lock sensor upon door closure",
      "One-time temporary passcodes for guests and deliveries",
      "Tamper alert with built-in HD chime camera"
    ],
    defaultState: {
      power: true,
      locked: true,
      autoLockSeconds: 30,
      alarmArmed: true
    }
  },
  {
    id: "dev-energy-1",
    name: "SolarPulse Smart Energy Gateway",
    category: "Renewable Power",
    subtitle: "Real-Time Circuit Monitor & EV Smart Charger Hub",
    description: "Take command of your power grid. Monitors individual household circuits, optimizes solar panel yield, and controls EV battery charging during cheap off-peak rates.",
    price: 399,
    rating: 4.8,
    reviewsCount: 195,
    image: "/images/energy.jpg",
    badge: "Eco Saver",
    matterCertified: true,
    compatibility: ["Tesla Powerwall", "Enphase", "SolarEdge", "Matter Energy API"],
    specs: {
      "Monitored Circuits": "16 Dedicated CT Clamp Sensors",
      "Max Current": "200A Total Panel Capacity",
      "Update Rate": "1-Second Live Power Measurement",
      "AI Utility Sync": "Auto Utility Time-of-Use Rate Tracking",
      "Connectivity": "Ethernet, Wi-Fi, Cellular Backup (Optional)"
    },
    features: [
      "AI battery discharge optimization during grid surge pricing",
      "Instant notification if an appliance draws excessive wattage",
      "Net-zero solar production tracking dashboard",
      "Automated generator / battery backup transfer switch integration"
    ],
    defaultState: {
      power: true,
      solarInputkW: 5.2,
      homeLoadkW: 1.8,
      batteryPercent: 88,
      gridMode: "Auto Eco Grid"
    }
  }
];

export const SMART_FEATURES = [
  {
    icon: "Layers",
    title: "Unified Glass OS",
    description: "Eliminate fragmented apps. Control every room, scene, and device through one fluid glassmorphic UI across mobile, web, and wall consoles."
  },
  {
    icon: "Cpu",
    title: "Edge AI Privacy Engine",
    description: "Your voice recordings, security streams, and routine schedules stay local. Zero cloud data harvesting with hardware-level encryption."
  },
  {
    icon: "Zap",
    title: "Matter 1.3 Certified",
    description: "Seamless cross-brand compatibility. Plug and play effortlessly with Apple HomeKit, Google Home, Amazon Alexa, and Samsung SmartThings."
  },
  {
    icon: "TrendingDown",
    title: "Predictive Energy Grid",
    description: "Self-learning HVAC & power load shed algorithms automatically shave up to 42% off monthly electricity expenses without sacrificing comfort."
  },
  {
    icon: "ShieldCheck",
    title: "24/7 Threat Perimeter",
    description: "Instant multimodal threat classification. Distinguishes between pets, delivery personnel, and real intrusions with instant lockdown triggers."
  },
  {
    icon: "Sliders",
    title: "Circadian Light Mesh",
    description: "Dynamically shifts indoor color temperature to match natural solar movement, boosting natural melatonin production and sleep quality."
  }
];

export const SMART_BENEFITS = [
  {
    category: "Financial ROI",
    headline: "Cut Energy Bills by Up to 42%",
    description: "By combining automated occupancy sensing, solar grid balancing, and smart thermostat micro-adjustments, Lumina systems pay for themselves within 14 months.",
    statValue: "$1,280/yr",
    statLabel: "Average Homeowner Savings"
  },
  {
    category: "Total Peace of Mind",
    headline: "Uncompromised 24/7 Security",
    description: "Receive instant AI-classified alerts, monitor live 4K feeds with zero latency, and deploy automated perimeter routines whether you are downstairs or across the globe.",
    statValue: "< 0.2s",
    statLabel: "Alert Trigger Speed"
  },
  {
    category: "Luxury Comfort",
    headline: "A Home That Anticipates You",
    description: "Walk into pre-cooled rooms with warm ambient pathways lit automatically. Custom audio presets start playing your favorite playlist the moment you step through the biometric lock.",
    statValue: "100%",
    statLabel: "Automated Convenience"
  },
  {
    category: "Future-Proof Universal Sync",
    headline: "No Lock-in. Pure Interoperability.",
    description: "Built from the ground up on the open Matter and Thread standard. Mix and match devices from 300+ manufacturers with guaranteed zero latency performance.",
    statValue: "300+",
    statLabel: "Supported Brands"
  }
];

export const PRESET_ROUTINES = [
  {
    id: "routine-morning",
    name: "Good Morning",
    icon: "Sun",
    time: "07:00 AM",
    actions: [
      "Open smart blinds to 60%",
      "Adjust HVAC thermostat to 72°F",
      "Set ambient lighting to Warm Sunrise (3000K)",
      "Start espresso machine smart plug"
    ]
  },
  {
    id: "routine-movie",
    name: "Cinema Night",
    icon: "Film",
    time: "On Demand",
    actions: [
      "Dim all living room lights to 10% Cyber Cyan",
      "Close blackout window blinds",
      "Set spatial soundbar to Dolby Atmos Surround",
      "Lock exterior front biometric door"
    ]
  },
  {
    id: "routine-eco",
    name: "Eco Solar Saver",
    icon: "Leaf",
    time: "Peak Hours",
    actions: [
      "Pre-cool home during solar surplus hours",
      "Reduce EV charger draw to match solar production",
      "Turn off unused accent lights in empty rooms",
      "Switch thermostat to AI Eco Range"
    ]
  },
  {
    id: "routine-sleep",
    name: "Night Lockdown",
    icon: "Moon",
    time: "11:00 PM",
    actions: [
      "Arm AetherGuard 4K AI Cameras",
      "Lock all exterior smart door locks",
      "Lower HVAC temp to optimal 68°F sleeping climate",
      "Turn off all interior smart lighting"
    ]
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    name: "Marcus Vance",
    location: "Austin, Texas",
    rating: 5,
    role: "Architect & Tech Enthusiast",
    text: "The glassmorphic UI on the Lumina Glass Control Center is straight out of a sci-fi film. Controlling all our lights, climate, and security from one glass wall screen is unbelievably seamless!",
    verified: "Verified Installation"
  },
  {
    id: "rev-2",
    name: "Dr. Elena Rostova",
    location: "Seattle, Washington",
    rating: 5,
    role: "Environmental Scientist",
    text: "Our monthly electricity bill dropped by $135 in the very first month after installing the SolarPulse gateway and Aura Thermostat. The energy dashboard calculations were 100% spot on.",
    verified: "Verified Installation"
  },
  {
    id: "rev-3",
    name: "Julian & Sarah Chen",
    location: "San Francisco, California",
    rating: 5,
    role: "Smart Home Owners",
    text: "The Matter protocol sync worked instantly. We connected our existing HomeKit lights and Google speakers in under 5 minutes without any hub disconnect issues.",
    verified: "Verified Installation"
  }
];

export const FAQS = [
  {
    question: "How does the Glassmorphism UI differ from traditional smart home apps?",
    answer: "Our Glassmorphic UI combines translucent frosted layers, real-time depth blur, and glowing micro-interactions to render a clean, non-intrusive control layer. It provides instant visual status without overwhelming menus or nested sub-screens."
  },
  {
    question: "Do Lumina devices require a monthly subscription?",
    answer: "No! All core features — including 4K AI camera video analytics, local facial detection, automated routines, and energy optimization — run locally on your home hardware with zero required subscription fees."
  },
  {
    question: "Is Lumina compatible with Apple HomeKit, Google Home, and Alexa?",
    answer: "Yes, 100%. All Lumina hardware is officially Matter 1.3 and Thread certified. They appear natively in Apple Home, Google Assistant, Amazon Alexa, and Samsung SmartThings simultaneously."
  },
  {
    question: "What happens during an internet or power outage?",
    answer: "Lumina system hubs feature local storage and Edge AI execution. Even if your internet connection drops, all smart switches, door locks, internal routine triggers, and local security alarms continue functioning without interruption."
  },
  {
    question: "How difficult is professional installation?",
    answer: "Lumina offers DIY plug-and-play setup for light bulbs and desktop hubs, while our certified national technician network can handle whole-home HVAC thermostat and solar gateway wiring in under 2 hours."
  }
];
