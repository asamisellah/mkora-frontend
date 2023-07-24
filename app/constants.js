export const navLinks = [
  { href: "/report", name: "Report" },
  { href: "/analytics", name: "Visualize" }
]

export const fields = [
  { name: 'institution', label: { english: "Which government office did it happen?", swahili: "Ilihappen ofe gani ya gava?" }, type: "select", validators: { required: true } },
  { name: "amount", label: { english: "How much did you pay?", swahili: "Ulitobokwa ngapi?" }, type: "select", validators: { required: true } },
  { name: "location", label: { english: "Location?", swahili: "County gani?" }, type: "select", validators: { required: true } },
  { name: "incidentDate", label: { english: "When did it happen?", swahili: "Ilihappen when?" }, type: "date", validators: { required: true } },
  { name: "itWorked", label: { english: "Did it work?", swahili: "Iliweza ama haiku weza?" }, type: "select", validators: { required: true } }
]


// export const fieldsOrder = [
//   "institution",
//   "amount",
//   "location",
//   "incidentDate",
//   "itWorked"
// ]

export const options = {
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
    { value: false, name: { english: "No", swahili: "haikuweza" } }
  ]
}

// Make an enum
export const languages = [
  "Swahili",
  "English"
]