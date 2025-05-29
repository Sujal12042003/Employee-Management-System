const employee = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Prepare monthly report",
                taskDescription: "Compile and analyze sales data for the monthly report.",
                taskDate: "01-Jun-2024",
                category: "Reporting"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Team meeting",
                taskDescription: "Attend the weekly team sync-up meeting.",
                taskDate: "28-May-2024",
                category: "Meetings"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Client follow-up",
                taskDescription: "Email client regarding project updates.",
                taskDate: "03-Jun-2024",
                category: "Communication"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Submit expense report",
                taskDescription: "Submit last month's expense report.",
                taskDate: "25-May-2024",
                category: "Finance"
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design new logo",
                taskDescription: "Create a new logo for the marketing campaign.",
                taskDate: "02-Jun-2024",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update website",
                taskDescription: "Refresh homepage content and images.",
                taskDate: "30-May-2024",
                category: "Web"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Social media post",
                taskDescription: "Draft and schedule posts for next week.",
                taskDate: "04-Jun-2024",
                category: "Marketing"
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 3,
        name: "Alice Jones",
        email: "alice.jones@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Research competitors",
                taskDescription: "Analyze competitor products and pricing.",
                taskDate: "01-Jun-2024",
                category: "Research"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Write blog post",
                taskDescription: "Publish article on company blog.",
                taskDate: "29-May-2024",
                category: "Content"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Prepare presentation",
                taskDescription: "Create slides for quarterly review.",
                taskDate: "05-Jun-2024",
                category: "Presentation"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Organize files",
                taskDescription: "Clean up and organize shared drive.",
                taskDate: "27-May-2024",
                category: "Admin"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Customer feedback",
                taskDescription: "Collect and summarize customer feedback.",
                taskDate: "06-Jun-2024",
                category: "Support"
            }
        ],
        taskCounts: {
            active: 3,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "bob.brown@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Fix login bug",
                taskDescription: "Resolve user login issue on the portal.",
                taskDate: "01-Jun-2024",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Code review",
                taskDescription: "Review pull requests from team members.",
                taskDate: "31-May-2024",
                category: "Development"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Update documentation",
                taskDescription: "Add new API endpoints to the docs.",
                taskDate: "03-Jun-2024",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Deploy update",
                taskDescription: "Deploy latest version to production.",
                taskDate: "26-May-2024",
                category: "Deployment"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Optimize database",
                taskDescription: "Improve query performance.",
                taskDate: "07-Jun-2024",
                category: "Database"
            }
        ],
        taskCounts: {
            active: 3,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 5,
        name: "Carol White",
        email: "carol.white@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Plan event",
                taskDescription: "Organize company team-building event.",
                taskDate: "02-Jun-2024",
                category: "HR"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Send invoices",
                taskDescription: "Send invoices to clients for May.",
                taskDate: "30-May-2024",
                category: "Finance"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Recruitment call",
                taskDescription: "Call shortlisted candidates.",
                taskDate: "04-Jun-2024",
                category: "HR"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Update policies",
                taskDescription: "Revise and update company policies.",
                taskDate: "28-May-2024",
                category: "Admin"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Employee feedback",
                taskDescription: "Collect feedback from new hires.",
                taskDate: "06-Jun-2024",
                category: "HR"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Payroll processing",
                taskDescription: "Process payroll for June.",
                taskDate: "08-Jun-2024",
                category: "Finance"
            }
        ],
        taskCounts: {
            active: 4,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    }
]

const admin = [{
    id: 1,
    name: "Sujal Patel",
    email: "admin@me.com",
    password: "123",
}]

export const setLocalStorage = () => {
    localStorage.setItem("employee", JSON.stringify(employee));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem("employee"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employee, admin };
}