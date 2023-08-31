/**
 * Formats an ID to a string with two digits, adding leading zeros if necessary.
 * @param id - The ID to format.
 * @returns The formatted ID string.
 */
export function formatIdToDoubleNumbers(id: string | number) {
    const idString = id.toString()
    if (idString.length === 1) {
        return `00${idString}`
    }
    return idString
}
