import React from 'react';

const data =[
    {
        id: 'OPP001',
        account: 'ABC Corp',
        skills: 'JavaScript, React',
        experience: '3-5 years',
        partner: 'Partner A',
        startDate: '2024-10-01',
    },
    {
        id: 'OPP002',
        account: 'XYZ Inc',
        skills: 'Python, Django',
        experience: '2-4 years',
        partner: 'Partner B',
        startDate: '2024-11-15',
    },
    {
        id: 'OPP003',
        account: 'LMN Ltd',
        skills: 'Java, Spring',
        experience: '5+ years',
        partner: 'Partner C',
        startDate: '2024-12-01',
    },
    {
        id: 'OPP004',
        account: 'QRS Group',
        skills: 'Go, Kubernetes',
        experience: '1-3 years',
        partner: 'Partner D',
        startDate: '2025-01-10',
    },
    {
        id: 'OPP001',
        account: 'ABC Corp',
        skills: 'JavaScript, React',
        experience: '3-5 years',
        partner: 'Partner A',
        startDate: '2024-10-01',
    },
    {
        id: 'OPP002',
        account: 'XYZ Inc',
        skills: 'Python, Django',
        experience: '2-4 years',
        partner: 'Partner B',
        startDate: '2024-11-15',
    },
    {
        id: 'OPP003',
        account: 'LMN Ltd',
        skills: 'Java, Spring',
        experience: '5+ years',
        partner: 'Partner C',
        startDate: '2024-12-01',
    },
    {
        id: 'OPP004',
        account: 'QRS Group',
        skills: 'Go, Kubernetes',
        experience: '1-3 years',
        partner: 'Partner D',
        startDate: '2025-01-10',
    },
];


const Opportunities = () => {
    return (
        <div className="flex flex-col mx-auto p-4">
            <div className="flex flex-col max-h-full bg-white shadow-lg rounded-lg p-8  ">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Opportunities List</h2>
                <table className="min-w-full border-gray-500 border-2">
                    <thead className="bg-blue-200">
                        <tr>
                            <th className="border-b border-gray-500 px-4 py-2 text-left text-md font-bold text-gray-700 border-x-2">Opportunity Id</th>
                            <th className="border-b border-gray-500 px-4 py-2 text-left text-md font-bold text-gray-700 border-x-2">Account</th>
                            <th className="border-b border-gray-500 px-4 py-2 text-left text-md font-bold text-gray-700 border-x-2">Skills</th>
                            <th className="border-b border-gray-500 px-4 py-2 text-left text-md font-bold text-gray-700 border-x-2">Experience</th>
                            <th className="border-b border-gray-500 px-4 py-2 text-left text-md font-bold text-gray-700 border-x-2">Delivery Partner</th>
                            <th className="border-b border-gray-500 px-4 py-2 text-left text-md font-bold text-gray-700 border-x-2">Start Date</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {data.map((i) => (
                            <tr key={i.id} className="bg-gray-50 hover:bg-blue-100 transition duration-300">
                                <td className="border-b border-gray-500 px-4 py-2 text-gray-700 border-x-2">{i.id}</td>
                                <td className="border-b border-gray-500 px-4 py-2 text-gray-700 border-x-2">{i.account}</td>
                                <td className="border-b border-gray-500 px-4 py-2 text-gray-700 border-x-2">{i.skills}</td>
                                <td className="border-b border-gray-500 px-4 py-2 text-gray-700 border-x-2">{i.experience}</td>
                                <td className="border-b border-gray-500 px-4 py-2 text-gray-700 border-x-2">{i.partner}</td>
                                <td className="border-b border-gray-500 px-4 py-2 text-gray-700 border-x-2">{i.startDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Opportunities;
