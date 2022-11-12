import { MdPeople } from "react-icons/md";
import {
    orderRankField,
    orderRankOrdering,
  } from '@sanity/orderable-document-list';

export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    icon: MdPeople,
    fields: [
        orderRankField({ type: 'team' }),
        {
            name: 'position',
            title: 'Position',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'highlighted',
            title: 'Highlighted?',
            type: 'boolean',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Links',
            name: 'links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Link',
                    name: 'link',
                    fields: [
                        {
                            name: "website",
                            type: "string",
                            title: "Website",
                            options: {
                                list: [
                                    "GitHub",
                                    "Instagram",
                                    "LinkedIn",
                                    "Website",
                                    "Discord",
                                    "Facebook",
                                    "Twitter"
                                ],
                                layout: 'radio' // <-- defaults to 'dropdown'
                            }
                        },
                        { name: "url", type: "url", title: "URL", validation: (Rule) => Rule.required() },
                    ]
                }
            ]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required()
        },
    ],
    preview: {
        select: {
            title: 'firstName',
            subtitle: 'position',
            media: 'image',
        },
    },
    orderings: [
        {
            title: 'Order',
            name: 'order',
            by: [
                { field: 'order', direction: 'asc' }
            ]
        },
        {
            title: 'Name',
            name: 'name',
            by: [
                { field: 'name', direction: 'asc' }
            ]
        },
    ]
}