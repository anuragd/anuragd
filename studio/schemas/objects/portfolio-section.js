export default {
    name: "portfolioSection",
    title: "Portfolio",
    type: "object",
    fields: [
        {
            title: "Projects",
            name: "projects",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [
                        {type: "project"}
                    ]
                }
            ],
            options: {
                layout: "grid"
            }
        }
    ]
}