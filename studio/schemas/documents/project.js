export default {
    name: "project",
    type: "object",
    title: "Project",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "client",
            type: "string",
            title: "Client"
        },
        {
            name: "date",
            type: "datetime",
            title: "Date"
        },
        {
            name: "role",
            type: "array",
            title: "Role",
            of:[{type:"string"}],
            options: {
                list: [
                    {title: "UX Designer", value: "uxd"},
                    {title: "Frontend Engineer", value: "fe"},
                    {title: "Project Lead", value: "pl"},
                ],
                layout: "grid"
            }
        },
        {
            name: "teamSize",
            type: "number",
            title: "Team Size"
        },
        {
            name: "heroImage",
            title: "Hero Image",
            type: "image",
        },
        {
            name: "overview",
            title: "Overview",
            type: "text"
        },
        {
            name: "baseColor",
            title: "Base Color",
            type: "string"
        }
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "client",
            media: "heroImage"
        }
    }
}