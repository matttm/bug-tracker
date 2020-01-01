export var sortFunctions = {
    date: (a, b) => new Date(a.date) - new Date(b.date),
    id: (a, b) => a.id - b.id,
    priority: (a, b) => a.priority -b.priority,
    name: (a, b) => a.name.localeCompare(b.name)
}