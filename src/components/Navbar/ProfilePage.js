import React from "react";

const ProfilePage = ({ user, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 focus:outline-none bg-white p-1 rounded-full shadow-md"
                >
                    ✖️
                </button>

                <div className="flex items-start border-b border-gray-300 pb-6">
                    {/* Profile Picture */}
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-300">
                        <img
                            src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-600nw-542759665.jpg" // Replace with actual image source
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* User Info */}
                    <div className="ml-8 flex-1">
                        <h2 className="text-2xl font-bold text-gray-800">{user}</h2>
                        <p className="text-gray-600 mt-1 text-sm">MERN Fullstack Developer</p>
                        <div className="flex flex-col sm:flex-row justify-between mt-4 text-sm text-gray-700">
                            <div>
                                <p><strong>Work Experience:</strong> 6 yrs 4 months</p>
                                <p><strong>Degree:</strong> BE in CSE</p>
                                <p><strong>Location Preference:</strong> Remote</p>
                                <p><strong>Availability:</strong> 5 Days</p>
                            </div>
                            <div className="sm:ml-10 mt-4 sm:mt-0">
                                <h3 className="font-semibold">Technical Summary</h3>
                                <p>Expressjs/React/Nextjs - 8/10</p>
                                <p>Nodejs/MongoDB - 8/10</p>
                                <p>3D Technologies - 3js/React3fibre</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-6 border-b border-gray-300 pb-6">
                    <h3 className="font-semibold text-lg text-gray-800">Primary Skills</h3>
                    <div className="flex flex-wrap mt-3 gap-2">
                        {['NodeJS', 'AWS', 'ExpressJS', 'EC2', 'MongoDB', 'Lambda', 'NextJs', 'React'].map((skill) => (
                            <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-6 border-b border-gray-300 pb-6">
                    <h3 className="font-semibold text-lg text-gray-800">Secondary Skills</h3>
                    <div className="flex flex-wrap mt-3 gap-2">
                        {['3js', 'React3fibre', 'Cloud', 'IoT'].map((skill) => (
                            <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Communication */}
                <div className="mt-6">
                    <p className="text-sm">
                        <strong>English Communication & Articulation Rating:</strong> 8/10
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
