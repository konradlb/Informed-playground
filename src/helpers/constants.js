export const CIRCUIT_FIELDS = [
    { name: 'circuitName', label: 'azwa aparatu', required: true },
    { name: 'type', label: 'Typ zabezpieczenia', required: true },
    { name: 'in', label: 'In', required: true, type: 'number' },
    { name: 'ia', label: 'Ia', required: true, type: 'number' },
    { name: 'zs', label: 'Zs', required: true, type: 'number' },
    { name: 'za', label: 'Za', required: true, type: 'number' },
    {
        name: 'time',
        label: 'Czas zadziałania [ms]',
        required: true,
        type: 'number'
    }
];
export const CIRCUIT_GROUP_FIELDS = [
    { name: 'groupName', label: 'Nazwa grupy', required: true },
    { name: 'groupType', label: 'Rodzaj', required: true },
    { name: 'dIn', label: 'Delta In [mA]', required: true },
    { name: 'ia', label: 'Prądz zadziałania Ia [mA]', required: true },
    { name: 'ta', label: 'Czas zadziałania ta [ms]', required: true },
    {
        name: 'tw',
        label: 'dopuszczalny czas zadziałania tw [ms]',
        required: true
    },
    { name: 'ud', label: 'Napięcie dotykowe [V]', required: true }
];
