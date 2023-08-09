export const navLinks = [
  { href: "/report", name: "Report" },
  { href: "/analytics", name: "Visualize" }
]

export const fields = [
  {
    name: 'institution', label: { english: "Which government office did it happen?", swahili: "Ilihappen ofe gani ya gava?" }, type: "select",
    optionsKey: { optionName: "agencies", optionKeys: { value: "id", name: "name" } },
    validators: { swahili: { required: "Chagua huduma" }, english: { required: "Select an institution" } }
  },
  {
    name: "amount", label: { english: "How much did you pay?", swahili: "Ulitobokwa ngapi?" }, type: "number", placeholder: "KES",
    validators: { swahili: { required: "Inahitajika" }, english: { required: "Enter Amount" } }
  },
  {
    name: "location", label: { english: "Location?", swahili: "County gani?" }, type: "select",
    optionsKey: { optionName: "counties", optionKeys: { value: "code", name: "name" } },
    validators: { swahili: { required: "Chagua county" }, english: { required: "Select a county" } }
  },
  {
    name: "incidentDate", label: { english: "When did it happen?", swahili: "Ilihappen when?" }, type: "date", max: new Date().toJSON().slice(0, 10),
    validators: { swahili: { required: "Chagua siku" }, english: { required: "Select a date" } }
  },
  {
    name: "itWorked", label: { english: "Did it work?", swahili: "Iliweza ama haiku weza?" }, type: "select", optionsKey: { optionName: "itWorked" },
    validators: { swahili: { required: "Chagua kama iliweza au zi" }, english: { required: "Select option" } }
  }
]

export const options = {
  agencies: [
    { id: "1", name: "KRA", keys: { value: "id", name: "name" } }
  ],
  counties: [
    { code: "47", name: "Nairobi" }
  ],
  amount: [
    { name: "less than 1K", value: "below-1k" },
    { name: "above 10K", value: "above-1k" },
    { name: "above 10K", value: "above 10k" },
    { name: "above 50K", value: "above-50k" },
    { name: "above 100K", value: "above-100k" },
    { name: "above 500K", value: "above-500k" }
  ],
  itWorked: [
    { value: true, name: { swahili: "Iliweza", english: "Yes" } },
    { value: false, name: { english: "No", swahili: "zi" } }
  ]
}

export const content = {
  header: "The anti-virus for corruption",
  tagLine: {
    swahili: "Washtaki ndio tukule mabaki.",
    english: "Help fight corruption by filling out the form."
  }
}

// Make an enum
export const languages = [
  "Swahili",
  "English"
]